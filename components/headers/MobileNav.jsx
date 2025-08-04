"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  aboutPages,
  demoPages,
} from "@/data/menu";

export default function MobileNav() {
  const pathname = usePathname();
  const isMenuActive = (link) => {
    return link.href?.split("/")[1] == pathname.split("/")[1];
  };
  return (
    <>
      {" "}
      <li className="nav-mb-item">
        <a
          href="#dropdown-menu-home"
          className="collapsed mb-menu-link"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="dropdown-menu-home"
        >
          <span>Home</span>
          <span className="btn-open-sub" />
        </a>
        <div id="dropdown-menu-home" className="collapse">
          <ul className="sub-nav-menu">
            {demoPages.map((page, index) => (
              <li key={index}>
                <Link href={page.href} className="sub-nav-link">
                  {page.name}
                  {page.label && (
                    <span
                      className={`demo-label ${page.labelType || ""}`.trim()}
                    >
                      {page.label}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
      <li className="nav-mb-item">
        <a
          href="#dropdown-menu-product"
          className="collapsed mb-menu-link"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="dropdown-menu-product"
        >
          <span>Product</span>
          <span className="btn-open-sub" />
        </a>
        <div id="dropdown-menu-product" className="collapse">
          <ul className="sub-nav-menu">
            <li>
              <Link href="/products" className="sub-nav-link">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/products?category=ring" className="sub-nav-link">
                Ring
              </Link>
            </li>
            <li>
              <Link href="/products?category=earring" className="sub-nav-link">
                Earring
              </Link>
            </li>
            <li>
              <Link href="/products?category=new-in" className="sub-nav-link">
                New In
              </Link>
            </li>
            <li>
              <Link href="/products?category=for-sale" className="sub-nav-link">
                For Sale
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li className="nav-mb-item">
        <a
          href="#dropdown-menu-about"
          className="collapsed mb-menu-link"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="dropdown-menu-about"
        >
          <span>About Us</span>
          <span className="btn-open-sub" />
        </a>
        <div id="dropdown-menu-about" className="collapse">
          <ul className="sub-nav-menu">
            {aboutPages[0].links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="sub-nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </>
  );
}
