import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Faqs from "@/components/otherPages/Faqs";
import React from "react";
import Link from "next/link";
export const metadata = {
  title: "คำถามที่พบบ่อย - FAQ",
  description: "คำตอบสำหรับคำถามที่พบบ่อยเกี่ยวกับเพชรแล็บโกรนจาก ANAKYN GEMS ความแตกต่างของเพชรแล็บโกรน การดูแลรักษา การจัดส่ง และอื่นๆ",
  keywords: "FAQ ANAKYN GEMS, เพชรแล็บโกรน คำถาม, คำถามที่พบบ่อย, การดูแลเครื่องประดับ, เพชรแล็บโกรน vs เพชรธรรมชาติ, lab grown diamond FAQ, jewelry care, diamond questions",
  openGraph: {
    title: "คำถามที่พบบ่อย - ANAKYN GEMS FAQ",
    description: "คำตอบสำหรับคำถามที่พบบ่อยเกี่ยวกับเพชรแล็บโกรนและเครื่องประดับจาก ANAKYNGEMS ความแตกต่างของเพชรแล็บโกรน การดูแลรักษา",
    url: "https://www.anakyngems.com/faq",
    siteName: "ANAKYNGEMS",
    images: [
      {
        url: "https://www.anakyngems.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ANAKYN GEMS FAQ - Lab Grown Diamond Questions & Answers",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "คำถามที่พบบ่อย - ANAKYNGEMS FAQ",
    description: "คำตอบสำหรับคำถามที่พบบ่อยเกี่ยวกับเพชรแล็บโกรนและเครื่องประดับจาก ANAKYN GEMS",
    images: ["https://www.anakyngems.com/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.anakyngems.com/faq",
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
                <li>FAQs</li>
              </ul>
              <h1 className="heading fw-normal text-uppercase">
                frequently asked <br className="d-none d-xl-block" />
                questions
              </h1>
            </div>
            <div className="box-text">
              <p className="text-main-4">
             
              </p>
            </div>
          </div>
        </div>
      </section>
      <Faqs />
      <Footer1 />
    </>
  );
}
