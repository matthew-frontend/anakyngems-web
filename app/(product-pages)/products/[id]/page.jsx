import Features from "@/components/common/Features";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Breadcrumb from "@/components/common/Breadcrumb";

import RelatedProducts from "@/components/product-details/RelatedProducts";
import React from "react";
import Link from "next/link";
import { getProducts, getProduct, urlFor } from "@/sanity/client";
import TextSlider from "@/components/common/TextSlider3";
import { ProductSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";

import Details3 from "@/components/product-details/Details3";

// Enable ISR with 30 second revalidation for debugging
export const revalidate = 30;

export async function generateMetadata({ params }) {
  const { id } = await params;
  
  // Find product by ID or slug from Sanity
  let product;
  try {
    // Try to get by slug first
    product = await getProduct(id);
    
    // If not found, try to get all products and find by ID
    if (!product) {
      const allProducts = await getProducts();
      product = allProducts.find((p) => p._id === id) || allProducts[0];
    }
  } catch (error) {
    console.error('Error fetching product for metadata:', error);
    const allProducts = await getProducts();
    product = allProducts[0]; // Fallback to first product
  }
  
  const categoryThai = {
    'ring': 'แหวน',
    'earring': 'ต่างหู', 
    'necklace': 'สร้อยคอ',
    'bracelet': 'กำไล',
    'new in': 'สินค้าใหม่'
  };
  
  const categoryName = product.category?.title || product.category || 'jewelry';
  const categoryThaiName = categoryThai[categoryName.toLowerCase()] || categoryName;
  
  const price = product.price ? `฿${product.price.toLocaleString('en-US')}` : '';
  const oldPrice = product.oldPrice ? `(เดิม ฿${product.oldPrice.toLocaleString('en-US')})` : '';
  
  return {
    title: `${product.title || product.name} - ${categoryThaiName} | ANAKYNGEMS`,
    description: `${product.title || product.name} - ${categoryThaiName}เพชรแล็บโกรนคุณภาพสูงจาก ANAKYNGEMS ${price} ${oldPrice} ${product.description ? product.description.substring(0, 100) + '...' : 'แหวนเพชร ต่างหูเพชร จัดงานแต่งงาน'}`.trim(),
    keywords: `${product.title}, ${categoryThaiName}, เพชรแล็บโกรน, เครื่องประดับ, ANAKYNGEMS, lab grown diamond, ${categoryName}, jewelry, sustainable diamonds, ethical jewelry`,
    openGraph: {
      title: `${product.title || product.name} - ${categoryThaiName} | ANAKYNGEMS`,
      description: `${product.title || product.name} - ${categoryThaiName}เพชรแล็บโกรนคุณภาพสูง ${price} ${oldPrice}`.trim(),
      images: product.images?.[0] ? [{
        url: urlFor(product.images[0]).width(1200).height(630).url(),
        width: 1200,
        height: 630,
        alt: `${product.title} - ${categoryThaiName}เพชรแล็บโกรน`
      }] : [{
        url: "https://www.anakyngems.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ANAKYNGEMS - Lab Grown Diamond Jewellery"
      }],
      type: 'website',
      url: `https://www.anakyngems.com/products/${product.slug?.current || product._id}`,
      siteName: "ANAKYNGEMS",
      locale: "th_TH",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title || product.name} - ${categoryThaiName}`,
      description: `${categoryThaiName}เพชรแล็บโกรนคุณภาพสูง ${price} ${oldPrice} จาก ANAKYNGEMS`,
      images: product.images?.[0] ? [urlFor(product.images[0]).width(1200).height(630).url()] : ["https://www.anakyngems.com/images/og-image.jpg"],
    },
    alternates: {
      canonical: `https://www.anakyngems.com/products/${product.slug?.current || product._id}`,
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  // Find product by ID or slug from Sanity
  let product;
  try {
    // Try to get by slug first
    product = await getProduct(id);
    
    // If not found, try to get all products and find by ID
    if (!product) {
      const allProducts = await getProducts();
      product = allProducts.find((p) => p._id === id) || allProducts[0];
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    const allProducts = await getProducts();
    product = allProducts[0]; // Fallback to first product
  }
  
  const breadcrumbItems = [
    { name: "Home", url: "https://anakyngems.com" },
    { name: "Products", url: "https://anakyngems.com/products" },
    { name: product.title || product.name, url: `https://anakyngems.com/products/${product.slug?.current || product._id}` }
  ];
  
  return (
    <>
      <ProductSchema product={product} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header1 parentClass="tf-header line-bt-2 bg-white" />
      <Breadcrumb productTitle={product.title || product.name} showTitle={false} />
      <Details3 product={product} />

      <TextSlider />
      <RelatedProducts currentProduct={product} />
      <Features
        styleWhite={false}
        parentClass="flat-spacing-8 bg-light-peach"
      />
      <Footer1 />
    </>
  );
}