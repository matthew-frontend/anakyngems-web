import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import Context from "@/context/Context";
import ScrollTop from "@/components/common/ScrollTop";
import MobileMenu from "@/components/modals/MobileMenu";
import QuickView from "@/components/modals/QuickView";
import Search from "@/components/modals/Search";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../public/scss/main.scss";
import "photoswipe/dist/photoswipe.css";

export const metadata = {
  title: "Page Not Found - ANAKYNGEMS อนาคินเจม",
  description: "Because true luxury isn't about excess—it's about self-expression, simplicity, and the confidence to shine every day.",
};

export default function NotFound() {
  return (
    <LayoutWrapper>
      <Context>
        <div id="wrapper">
          <Header1 parentClass="tf-header line-bt-2" />
          <div className="wg-404 tf-grid-layout sm-col-2 gap-0 vh-100">
            <div className="image">
              <Image
                src="/images/home/hero-1.webp"
                alt="404 Not Found"
                className="lazyload"
                width={1920}
                height={1868}
              />
            </div>
            <div className="content">
              <h1 className="heading">
                <span className="text-primary">Opps! </span>Page not found!
              </h1>
              <p className="sub-head">
                The page you are looking is not available or has been removed. Try
                going to HomePage by using the button below.
              </p>
              <Link href={`/`} className="tf-btn btn-fill fw-medium animate-btn">
                RETURN TO HOMEPAGE
              </Link>
            </div>
          </div>
        </div>
        <ScrollTop />
        <MobileMenu />
        <QuickView />
        <Search />
      </Context>
    </LayoutWrapper>
  );
}
