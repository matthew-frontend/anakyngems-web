import Features from "@/components/common/Features";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Products2 from "@/components/shop/Products2";
import React, { Suspense } from "react";
import ProductsPageWrapper from "@/components/shop/ProductsPageWrapper";

export const revalidate = 30; // 30 วินาที

export const metadata = {
  title: "สินค้าของเรา เครื่องประดับเพชร",
  description: "ค้นพบเครื่องประดับเพชรแล็บโกรนคุณภาพสูงจาก ANAKYN GEMS อนาคินเจม แหวนหมั้น แหวนเพชร แหวนแต่งงาน ต่างหู ต่างหูเพชร",
  keywords: "เครื่องประดับเพชร, เพชรแล็บโกรน, แหวนหมั้น, แหวนเพชร, แหวนแต่งงาน, กำไลเพชร, ต่างหูเพชร, lab grown diamonds, diamond jewelry, engagement rings, wedding rings, ethical diamonds",
  openGraph: {
    title: "Shop เครื่องประดับเพชร - ANAKYN GEMS",
    description: "ค้นพบเครื่องประดับเพชรแล็บโกรนคุณภาพสูงจาก ANAKYN GEMS",
    url: "https://www.anakyngems.com/products",
    siteName: "ANAKYNGEMS",
    images: [
      {
        url: "https://www.anakyngems.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ANAKYN GEMS - Lab Grown Diamond Jewellery Collection",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop เครื่องประดับเพชร - ANAKYN GEMS",
    description: "ค้นพบเครื่องประดับเพชรแล็บโกรนคุณภาพสูง แหวนเพชร ต่างหูเพชร",
    images: ["https://www.anakyngems.com/images/og-image.jpg"],
  },
};
export default function page() {
  return (
    <>
      <Header1 parentClass="tf-header line-bt-2 bg-white" />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsPageWrapper />
      </Suspense>
      {/* <Categories /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Products2 />
      </Suspense>
      <Features
        styleWhite={false}
        parentClass="flat-spacing-8 bg-anakyn-20"
      />
      <Footer1 />
    </>
  );
}
