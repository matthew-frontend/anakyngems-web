import Blogs2 from "@/components/blogs/Blogs2";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import React from "react";
import Link from "next/link";
export const metadata = {
  title:
    "Behind the Brand - ANAKYNGEMS",
  description: "Vemus - Jewelry Ecommerce React Nextjs Template",
};
export default function page() {
  return (
    <>
      <Topbar1 />
      <Header1 parentClass="tf-header" />
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
                stories
                <span className="number-count"> 12 </span>
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
