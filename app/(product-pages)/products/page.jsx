import Features from "@/components/common/Features";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Products2 from "@/components/shop/Products2";
import Link from "next/link";
import React from "react";
import ProductsPageClient from "@/components/shop/ProductsPageClient";
export const metadata = {
  title: "Products | ANAKYNGEMS",
  description: "Discover beautiful lab grown diamond jewelry at ANAKYNGEMS. High quality, sustainable, and ethically sourced diamonds for all occasions.",
};
export default function page() {
  return (
    <>
      <Topbar1 parentClass="tf-topbar bg-dark-olive" />
      <Header1 parentClass="tf-header line-bt-2" />
      <ProductsPageClient />
      {/* <Categories /> */}
      <Products2 />
      <Features
        styleWhite={false}
        parentClass="flat-spacing-8 bg-anakyn-20"
      />
      <Footer1 />
    </>
  );
}
