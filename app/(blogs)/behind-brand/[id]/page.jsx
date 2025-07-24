import BlogSingle from "@/components/blogs/BlogSingle";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Blog | ANAKYNGEMS - Lab Grown Diamond Jewellery",
  description: "Discover beautiful lab grown diamond jewelry at ANAKYNGEMS. High quality, sustainable, and ethically sourced diamonds for all occasions.",
};

export default function page({ params }) {
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
                <li>
                  <Link href={`/behind-brand`} className="text-main-4 link-secondary">
                    Behind the Brand
                  </Link>
                </li>
                <li className="br-line w-12 bg-main" />
                <li>
                  <p>Behind the sparkle: Our iconic creations</p>
                </li>
              </ul>
              <h1 className="heading fw-normal text-uppercase">
                behind the sparkle: <br className="d-none d-xxl-block" />
                our iconic creations
              </h1>
            </div>
          </div>
        </div>
      </section>
      <BlogSingle />
      <Footer1 />
    </>
  );
}