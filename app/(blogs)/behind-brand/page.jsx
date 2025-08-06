import Blogs2 from "@/components/blogs/Blogs2";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";
import Link from "next/link";
import { getBlogCount } from "@/sanity/client";

export const metadata = {
  title: "บทความจาก ANAKYNGEMS | Behind the Brand - Lab Grown Diamond Jewelry Blog",
  description:
    "ติดตามอ่านบทความจาก ANAKYNGEMS อนาคินเจม ที่นำเสนอไลฟ์สไตล์ แรงบันดาลใจ ความรู้เกี่ยวกับเพชรแล็บ และเบื้องหลังของแบรนด์เครื่องประดับแล็บโกรนคุณภาพสูง",
  keywords:
    "ANAKYNGEMS, อนาคินเจม, บทความ, blogs, เพชรแล็บ, เพชรแล็บโกรน, เครื่องประดับ, แบรนด์เพชร, เครื่องประดับยั่งยืน, ความรู้เพชร, lab grown diamonds, diamond jewelry blog, sustainable jewelry, brand story",
  openGraph: {
    title: "บทความจาก ANAKYNGEMS | Behind the Brand - Lab Grown Diamond Jewelry Blog",
    description:
      "อ่านบทความเจาะลึกเกี่ยวกับเพชรแล็บ ไลฟ์สไตล์ และเรื่องราวเบื้องหลังแบรนด์ ANAKYNGEMS",
    url: "https://www.anakyngems.com/behind-brand",
    siteName: "ANAKYNGEMS",
    images: [
      {
        url: "https://www.anakyngems.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ANAKYNGEMS Blog - Behind the Brand",
      },
    ],
    locale: "th_TH",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "บทความจาก ANAKYNGEMS | Behind the Brand - Lab Grown Diamond Jewelry Blog",
    description:
      "อ่านบทความเจาะลึกเกี่ยวกับเพชรแล็บ ไลฟ์สไตล์ และเรื่องราวเบื้องหลังแบรนด์ ANAKYNGEMS",
    images: [
      {
        url: "https://www.anakyngems.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ANAKYNGEMS Blog - Behind the Brand",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function page() {
  const blogCount = await getBlogCount().catch(() => 0);
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
                <li>
                  <p>Behind the Brand</p>
                </li>
              </ul>
              <h1 className="heading fw-normal text-uppercase">
                Blogs
                <span className="number-count"> {blogCount} </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <Blogs2 />
      <Footer1 />
    </>
  );
}
