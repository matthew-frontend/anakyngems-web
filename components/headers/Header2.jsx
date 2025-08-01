import React from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
export default function Header2() {
  return (
    <header className="tf-header style-2 header-absolute">
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-3 d-xl-none">
              <a
                href="#mobileMenu"
                data-bs-toggle="offcanvas"
                className="btn-mobile-menu"
              >
                <span />
              </a>
            </div>
            <div className="col-xl-3 d-none d-xl-block">
            </div>
            <div className="col-xl-6 col-md-4 col-6">
              <Link
                href={`/`}
                className="logo-site justify-content-center w-100"
              >
                <Image
                  alt=""
                  className="logo-black"
                  src="https://vemusnextjs.vercel.app/images/logo/logo.svg"
                  width={122}
                  height={32}
                />
                <Image
                  alt=""
                  className="logo-white"
                  src="https://vemusnextjs.vercel.app/images/logo/logo-white.svg"
                  width={122}
                  height={31}
                />
              </Link>
            </div>
            <div className="col-xl-3 col-md-4 col-3">
              <ul className="nav-icon">
                <li className="d-inline-flex">
                  <a
                    href="#search"
                    data-bs-toggle="offcanvas"
                    className="nav-icon-item text-black link"
                  >
                    <i className="icon icon-search" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom d-none d-xl-block">
        <div className="container">
          <nav className="box-navigation">
            <ul className="box-nav-menu justify-content-start">
              <Nav megaMarginRight={false} />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
