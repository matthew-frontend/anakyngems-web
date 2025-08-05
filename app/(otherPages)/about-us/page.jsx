import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import BlogAbout from "@/components/otherPages/about/BlogAbout";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About Us - ANAKYNGEMS",
  description: "Discover beautiful lab grown diamond jewelry at ANAKYNGEMS. High quality, sustainable, and ethically sourced diamonds for all occasions.",
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
