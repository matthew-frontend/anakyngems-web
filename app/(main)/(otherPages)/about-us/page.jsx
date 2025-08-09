import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import BlogAbout from "@/components/otherPages/about/BlogAbout";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "เกี่ยวกับเรา",
  description: "ทำความรู้จักกับ ANAKYN GEMS ผู้นำด้านเครื่องประดับเพชรแล็บโกรนคุณภาพสูง เราเชื่อในความยั่งยืน และความงามที่แท้จริง พร้อมมอบเครื่องประดับที่สะท้อนตัวตนของคุณ",
  keywords: "เกี่ยวกับ ANAKYNGEMS, อนาคินเจม, lab grown diamond story, ethical diamond brand, sustainable luxury, diamond jewellery brand, เครื่องประดับเพชร, เพชรแล็บโกรน",
  openGraph: {
    title: "เกี่ยวกับเรา - ANAKYN GEMS",
    description: "ทำความรู้จักกับ ANAKYNGEMS ผู้นำด้านเครื่องประดับเพชรแล็บโกรนคุณภาพสูง เราเชื่อในความยั่งยืน และความงามที่แท้จริง",
    url: "https://www.anakyngems.com/about-us",
    siteName: "ANAKYNGEMS",
    images: [
      {
        url: "https://www.anakyngems.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ANAKYN GEMS อนาคินเจม - Lab Grown Diamond Jewellery | เครื่องประดับเพชรแล็บโกรน",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "เกี่ยวกับเรา - ANAKYNGEMS",
    description: "ทำความรู้จักกับ ANAKYNGEMS ผู้นำด้านเครื่องประดับเพชรแล็บโกรนคุณภาพสูง เราเชื่อในความยั่งยืน และความงามที่แท้จริง",
    images: ["https://www.anakyngems.com/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.anakyngems.com/about-us",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function page() {
  return (
    <>
      <Header1 parentClass="tf-header line-bt-2 bg-white" />
      <section className="flat-spacing-2 pb-0">
        <div className="container">
          <div className="page-title">
            <div className="breadcrumbs">
              <ul className="bread-wrap">
                <li>
                  <Link href={`/`} className="text-main-4 link-secondary">
                    Home
                  </Link>
                </li>
                <li className="br-line w-12 bg-main" />
                <li>About Us</li>
              </ul>
              <h1 className="heading fw-normal text-uppercase">
                About Us
              </h1>
            </div>
            <div className="box-text">
              <p className="text-main-4">
                Anakyn Gems is a modern jewelry brand that redefines how we wear diamonds.
                <br className="d-none d-xxl-block" />
                We believe diamonds shouldn’t be reserved only for special occasions—
                <br className="d-none d-xxl-block" />
                they should be part of your everyday confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <BlogAbout />
      <Footer1 />
    </>
  );
}
