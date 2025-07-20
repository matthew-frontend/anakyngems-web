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

import Details3 from "@/components/product-details/Details3";

export const metadata = {
  title: "Product Details | ANAKYNGEMS - Lab Grown Diamond Jewellery",
  description: "Discover beautiful lab grown diamond jewelry at ANAKYNGEMS. High quality, sustainable, and ethically sourced diamonds for all occasions.",
};

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  // Find product by ID or slug
  const product = allProducts.find((p) => p.id == id || p.slug == id) || allProducts[0];
  
  return (
    <>
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