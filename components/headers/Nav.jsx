"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  aboutPages,
  blogMenuLinks,
  otherPages,
} from "@/data/menu";
import { usePathname } from "next/navigation";

export default function Nav({ megaMarginRight = true }) {
  const pathname = usePathname();
  const isMenuActive = (link) => {
    return link.href?.split("/")[1] == pathname.split("/")[1];
  };
  const isMenuParentActive = (menu) => {
    return menu.some((elm) => isMenuActive(elm));
  };
  const isMenuParentActiveAbout = (menu) => {
    return menu.some((elm) => elm.links.some((link) => isMenuActive(link)));
  };
  return (
    <>
      <li className="menu-item">
        <Link href="/" className="item-link">
          Home
        </Link>
      </li>
      <li
        className={`menu-item  ${
          pathname.startsWith('/products') ? "active" : ""
        }`}
      >
        <a href="#" className="item-link" onClick={(e) => e.preventDefault()}>
          Products
          <i className="icon icon-arrow-angle-down" />
        </a>
        <div
          className={`sub-menu mega-menu container-layout-right${
            megaMarginRight ? "-2" : ""
          } mega-menu-shop mega-menu-style-2`}
        >
          <div className="mega-menu-wrap">
            <div className="wrapper-sub-menu">
              <div className="mega-menu-item">
                <p className="text-caption menu-heading">CATEGORIES</p>
                <ul className="menu-list">
                  <li>
                    <Link
                      href="/products"
                      className="menu-link-text link"
                    >
                      All Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products?category=ring"
                      className="menu-link-text link"
                    >
                      Ring
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products?category=bracelet"
                      className="menu-link-text link"
                    >
                      Bracelet
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products?category=earring"
                      className="menu-link-text link"
                    >
                      Earring
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products?category=necklace"
                      className="menu-link-text link"
                    >
                      Necklace
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products?category=new-in"
                      className="menu-link-text link"
                    >
                      New In
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products?category=gift-idea"
                      className="menu-link-text link"
                    >
                      Gift Idea
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wrapper-sub-collection">
              <div className="box_image--V01 h-100 hover-img">
                <div className="image h-100 img-style">
                  <Image
                    src="/images/collections/cls-header.jpg"
                    alt=""
                    className="lazyload"
                    width={1188}
                    height={914}
                  />
                </div>
                <div className="content">
                  <h5 className="box-text fw-medium text-white">
                    <span>Flash Sale</span>
                    <span className="br-line w-22 bg-white d-block" />
                    <span>30% OFF</span>
                  </h5>
                  <div className="box-btn">
                    <Link
                      href="/products"
                      className="tf-btn-line style-white text-uppercase"
                    >
                      <span className="text-caption lh-28">Shop Now</span>
                      <i className="icon-arrow-top-right-2 fs-10" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className={`sub-menu mega-menu mega-menu-page container-layout-right${
          megaMarginRight ? "-3" : ""
        } mega-menu-style-2`}
      >
        <a href="#" className="item-link" onClick={(e) => e.preventDefault()}>
          Pages
          <i className="icon icon-arrow-angle-down" />
        </a>
        <div className="sub-menu mega-menu mega-menu-page container-layout-right-3 mega-menu-style-2">
          <div className="mega-menu-wrap">
            <div className="wrapper-sub-menu">
              <div className="mega-menu-item">
                <p className="text-caption menu-heading">PAGES</p>
                <ul className="menu-list">
                  {otherPages.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className={`menu-link-text link ${
                          isMenuActive(link) ? "active" : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="wrapper-sub-collection gap-0">
              <div className="box_image--V01 h-100 hover-img">
                <div className="image h-100 img-style">
                  <Image
                    src="/images/collections/cls-header-2.jpg"
                    alt=""
                    className="lazyload"
                    width={792}
                    height={914}
                  />
                </div>
                <div className="content">
                  <h5 className="box-text fw-medium text-white">Most Gifted</h5>
                  <div className="box-btn">
                    <Link
                      href={`/products`}
                      className="tf-btn-line style-white text-uppercase"
                    >
                      <span className="text-caption lh-28">Shop Now</span>
                      <i className="icon-arrow-top-right-2 fs-10" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="box_image--V01 h-100 hover-img">
                <div className="image h-100 img-style">
                  <Image
                    src="/images/collections/cls-header-3.jpg"
                    alt=""
                    className="lazyload"
                    width={792}
                    height={914}
                  />
                </div>
                <div className="content">
                  <h5 className="box-text fw-medium text-white">
                    <span>Flash Sale</span>
                    <span className="br-line w-22 bg-white d-block" />
                    <span>30% OFF</span>
                  </h5>
                  <div className="box-btn">
                    <Link
                      href={`/products`}
                      className="tf-btn-line style-white text-uppercase"
                    >
                      <span className="text-caption lh-28">Shop Now</span>
                      <i className="icon-arrow-top-right-2 fs-10" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className={`menu-item position-relative   ${
          isMenuParentActiveAbout(aboutPages) ? "active" : ""
        }`}
      >
        <a href="#" className="item-link" onClick={(e) => e.preventDefault()}>
          About Us
          <i className="icon icon-arrow-angle-down" />
        </a>
        <div className="sub-menu">
          <div className="mega-menu-item">
            <p className="text-caption menu-heading">ABOUT US</p>
            <ul className="menu-list">
              {aboutPages[0].links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`menu-link-text link ${
                      isMenuActive(link) ? "active" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
      <li
        className={`menu-item position-relative   ${
          isMenuParentActive(blogMenuLinks) ? "active" : ""
        }`}
      >
        <a href="#" className="item-link" onClick={(e) => e.preventDefault()}>
          Blogs
          <i className="icon icon-arrow-angle-down" />
        </a>
        <div className="sub-menu">
          <div className="mega-menu-item">
            <p className="text-caption menu-heading">BLOGS</p>
            <ul className="menu-list">
              {blogMenuLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`menu-link-text link ${
                      isMenuActive(link) ? "active" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    </>
  );
}
