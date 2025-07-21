import Features from "@/components/common/Features";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";

import RecentProducts from "@/components/product-details/RecentProducts";
import RelatedProducts from "@/components/product-details/RelatedProducts";
import React from "react";
import Link from "next/link";
import { allProducts } from "@/data/products";
import TextSlider from "@/components/common/TextSlider3";
import { ProductSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";

import Details3 from "@/components/product-details/Details3";

export async function generateMetadata({ params }) {
  const { id } = await params;
  
  // Find product by ID or slug
  const product = allProducts.find((p) => p.id == id || p.slug == id) || allProducts[0];
  
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

  // Find product by ID or slug
  const product = allProducts.find((p) => p.id == id || p.slug == id) || allProducts[0];
  
  const breadcrumbItems = [
    { name: "Home", url: "https://anakyngems.com" },
    { name: "Products", url: "https://anakyngems.com/products" },
    { name: product.title || product.name, url: `https://anakyngems.com/products/${product.id}` }
  ];
  
  return (
    <>
      <ProductSchema product={product} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Topbar1 parentClass="tf-topbar bg-dark-olive" />
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
                  <Link href={`/shop-left-sidebar`} className="text-main-4 link-secondary">
                    Product
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
      <RelatedProducts />
      <RecentProducts />
      <Features
        styleWhite={false}
        parentClass="flat-spacing-8 bg-light-peach"
      />
      <Footer1 />
    </>
  );
}