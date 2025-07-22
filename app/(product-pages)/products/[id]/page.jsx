import Features from "@/components/common/Features";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";

import RecentProducts from "@/components/product-details/RecentProducts";
import RelatedProducts from "@/components/product-details/RelatedProducts";
import React from "react";
import Link from "next/link";
import { getProducts, getProduct } from "@/sanity/client";
import TextSlider from "@/components/common/TextSlider3";
import { ProductSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";

import Details3 from "@/components/product-details/Details3";

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
  
  return {
    title: `${product.title || product.name} - Lab Grown Diamond Jewelry | ANAKYNGEMS`,
    description: product.description || "Discover beautiful lab grown diamond jewelry at ANAKYNGEMS. High quality, sustainable, and ethically sourced diamonds for all occasions.",
    keywords: `${product.title}, lab grown diamond, ${product.category}, jewelry, ANAKYNGEMS, sustainable diamonds, ethical jewelry`,
    openGraph: {
      title: `${product.title || product.name} | ANAKYNGEMS`,
      description: product.description,
      images: product.images || [product.imgSrc],
      type: 'website'
    }
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
      <Header1 parentClass="tf-header line-bt-2" />
      <div className="flat-spacing-16 pb-0">
        <div className="container">
          <div className="page-title border-0">
            <div className="breadcrumbs">
               <ul className="bread-wrap">
                <li>
                  <Link href={`/`} className="text-main-4 link-secondary">
                    Home
                  </Link>
                </li>
                <li className="br-line w-12 bg-main" />
                <li>
                  <Link href={`/products`} className="text-main-4 link-secondary">
                    Products
                  </Link>
                </li>
                <li className="br-line w-12 bg-main" />
                <li>
                  <p>{product.title || product.name}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Details3 product={product} />

      <TextSlider />
      <RelatedProducts currentProduct={product} />
      <RecentProducts />
      <Features
        styleWhite={false}
        parentClass="flat-spacing-8 bg-light-peach"
      />
      <Footer1 />
    </>
  );
}