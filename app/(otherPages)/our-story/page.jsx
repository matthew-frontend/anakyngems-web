import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import Established from "@/components/otherPages/our-story/Established";
import Features from "@/components/otherPages/our-story/Features";
import Intro from "@/components/otherPages/our-story/Intro";
import React from "react";

export const metadata = {
  title: "Our Story - ANAKYNGEMS",
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
