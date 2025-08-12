import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Contact from "@/components/otherPages/Contact";
import React from "react";
import Link from "next/link";
export const metadata = {
  title: "ติดต่อเรา",
  description: "ติดต่อ ANAKYN GEMS อนาคินเจม สำหรับเครื่องประดับเพชรแล็บโกรนคุณภาพสูง ปรึกษาแหวนหมั้น แหวนแต่งงาน หรือสินค้าอื่นๆ ทีมงานผู้เชี่ยวชาญพร้อมให้คำปรึกษา",
  keywords: "ติดต่อ ANAKYN GEMS, คำปรึกษาเครื่องประดับ, แหวนหมั้น, แหวนแต่งงาน, เพชรแล็บโกรน, รับจัดงานแต่งงาน, contact ANAKYN GEMS, jewelry consultation, engagement rings, wedding rings, lab grown diamonds",
  openGraph: {
    title: "ติดต่อเรา - ANAKYN GEMS",
    description: "ติดต่อ ANAKYN GEMS สำหรับเครื่องประดับเพชรแล็บโกรนคุณภาพสูง ปรึกษาแหวนหมั้น แหวนแต่งงาน ทีมงานผู้เชี่ยวชาญพร้อมให้คำปรึกษา",
    url: "https://www.anakyngems.com/contact-us",
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ติดต่อเรา - ANAKYNGEMS",
    description: "ติดต่อ ANAKYNGEMS สำหรับเครื่องประดับเพชรแล็บโกรนคุณภาพสูง ทีมงานผู้เชี่ยวชาญพร้อมให้คำปรึกษา",
    images: ["https://www.anakyngems.com/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.anakyngems.com/contact-us",
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
                  <Link href={`/`} className="text-main-4 link">
                    Home
                  </Link>
                </li>
                <li className="br-line w-12 bg-main" />
                <li>Contact Us</li>
              </ul>
              <h1 className="heading fw-normal text-uppercase">contact us</h1>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer1 />
    </>
  );
}
