import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'anakyngems-cms',
  title: 'ANAKYNGEMS CMS',
  
  projectId: '1xk2cwmy', // Your project ID from Sanity
  dataset: 'production',
  
  basePath: '/admin', // Admin panel will be at /admin
  
  plugins: [
    structureTool(),
    visionTool()
  ],
  
  schema: {
    types: schemaTypes,
  },
  
  studio: {
    components: {
      // Custom components can be added here
    }
  }
})