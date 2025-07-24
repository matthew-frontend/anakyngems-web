import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Contact from "@/components/otherPages/Contact";
import React from "react";
import Link from "next/link";
export const metadata = {
  title: "Contact Us - ANAKYNGEMS",
  description: "Discover beautiful lab grown diamond jewelry at ANAKYNGEMS. High quality, sustainable, and ethically sourced diamonds for all occasions.",
};
export default function page() {
  return (
    <>
      <Header1 parentClass="tf-header line-bt-2" />
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
