import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import Established from "@/components/otherPages/our-story/Established";
import Features from "@/components/otherPages/our-story/Features";
import Intro from "@/components/otherPages/our-story/Intro";
import React from "react";

export const metadata = {
  title: "เรื่องราวของเรา - ANAKYNGEMS อนาคินเจม | Lab Grown Diamond Jewellery",
  description: "รู้จัก ANAKYNGEMS อนาคินเจม แบรนด์เครื่องประดับเพชรแล็บโกรนที่ก่อตั้งขึ้นด้วยความเชื่อในความงามที่ยั่งยืน ความหรูหราที่เรียบง่าย และจริยธรรมในทุกขั้นตอน | Discover our story and what makes ANAKYNGEMS a trusted name in ethical luxury.",
  keywords:
    "เรื่องราวของแบรนด์, ANAKYNGEMS, อนาคินเจม, lab grown diamond story, ethical diamond brand, sustainable luxury, diamond jewellery brand, เครื่องประดับเพชร, เพชรแล็บโกรน",
  openGraph: {
    title: "Our Story - ANAKYNGEMS อนาคินเจม | เครื่องประดับเพชรแล็บโกรน",
    description: "ANAKYNGEMS เริ่มต้นจากความตั้งใจที่จะสร้างเครื่องประดับที่สวยงาม ยั่งยืน และมีจริยธรรมในทุกขั้นตอน | Explore how our vision became reality.",
    url: "https://www.anakyngems.com/our-story",
    siteName: "ANAKYNGEMS",
    images: [
      {
        url: "https://www.anakyngems.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ANAKYNGEMS อนาคินเจม - Lab Grown Diamond Jewellery | เครื่องประดับเพชรแล็บโกรน",
      },
    ],
    locale: "th_TH",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story - ANAKYNGEMS",
    description:
      "เรียนรู้เกี่ยวกับแนวคิดเบื้องหลัง ANAKYNGEMS เครื่องประดับเพชรแล็บโกรนคุณภาพสูง ที่ออกแบบด้วยหัวใจและจริยธรรม",
    images: [
      {
        url: "https://www.anakyngems.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Our Story - ANAKYNGEMS อนาคินเจม - Lab Grown Diamond Jewellery | เครื่องประดับเพชรแล็บโกรน",
      },
    ],
  },
  alternates: {
    canonical: "https://www.anakyngems.com/our-story",
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
                <li>Our Story</li>
              </ul>
              <h1 className="heading fw-normal text-uppercase">
                our story
              </h1>
            </div>
            <div className="box-text">
            </div>
          </div>
        </div>
      </section>
      <Intro />
      <Established />
      <Features />
      <Footer1 />
    </>
  );
}
