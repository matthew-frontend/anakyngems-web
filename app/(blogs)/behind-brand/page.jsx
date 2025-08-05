import Blogs2 from "@/components/blogs/Blogs2";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";
import Link from "next/link";
import { getBlogCount } from "@/sanity/client";

export const metadata = {
  title:
    "Behind the Brand - ANAKYNGEMS",
  description: "Discover beautiful lab grown diamond jewelry at ANAKYNGEMS. High quality, sustainable, and ethically sourced diamonds for all occasions.",
};
export default async function page() {
  const blogCount = await getBlogCount();
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
