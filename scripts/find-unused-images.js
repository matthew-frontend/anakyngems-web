const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to get all image files in public/images
function getAllImages() {
  const imagesDir = path.join(__dirname, '../public/images');
  const images = [];
  
  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (/\.(jpg|jpeg|png|gif|svg|webp)$/i.test(file)) {
        // Get relative path from public
        const relativePath = path.relative(path.join(__dirname, '../public'), filePath);
        images.push(relativePath.replace(/\\/g, '/'));
      }
    });
  }
  
  walkDir(imagesDir);
  return images;
}

// Function to search for image usage in code
function findImageUsage() {
  const usedImages = new Set();
  
  // Search in all JS/JSX files
  const files = glob.sync(path.join(__dirname, '../**/*.{js,jsx,ts,tsx}'), {
    ignore: ['**/node_modules/**', '**/.next/**', '**/scripts/**']
  });
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Find image references
    const patterns = [
      /src=["']([^"']*\/images\/[^"']+)["']/g,
      /import.*["']([^"']*\/images\/[^"']+)["']/g,
      /url\(["']?([^"')]*\/images\/[^"')]+)["']?\)/g,
      /["']\/images\/[^"']+["']/g
    ];
    
    patterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        let imagePath = match[1] || match[0];
        
        // Clean up the path
        imagePath = imagePath.replace(/['"]/g, '');
        if (imagePath.startsWith('/images/')) {
          imagePath = imagePath.substring(1); // Remove leading slash
        }
        if (imagePath.startsWith('images/')) {
          usedImages.add(imagePath);
        }
      }
    });
  });
  
  return Array.from(usedImages);
}

// Main function
function main() {
  console.log('🔍 Scanning for unused images...\n');
  
  const allImages = getAllImages();
  const usedImages = findImageUsage();
  
  console.log(`📁 Total images found: ${allImages.length}`);
  console.log(`✅ Used images found: ${usedImages.length}\n`);
  
  // Find unused images
  const unusedImages = allImages.filter(img => !usedImages.includes(img));
  
  if (unusedImages.length > 0) {
    console.log(`🗑️  Unused images (${unusedImages.length}):`);
    unusedImages.forEach(img => console.log(`   ${img}`));
    
    console.log(`\n💾 Total size saving potential:`);
    let totalSize = 0;
    unusedImages.forEach(img => {
      const fullPath = path.join(__dirname, '../public', img);
      try {
        const stats = fs.statSync(fullPath);
        totalSize += stats.size;
      } catch (e) {
        // File might not exist
      }
    });
    console.log(`   ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  } else {
    console.log('🎉 No unused images found!');
  }
  
  console.log('\n📋 Used images:');
  usedImages.sort().forEach(img => console.log(`   ✅ ${img}`));
}

if (require.main === module) {
  main();
}

module.exports = { getAllImages, findImageUsage };