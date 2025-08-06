"use client";
import React from "react";
import Link from "next/link";
import MobileNav from "../headers/MobileNav";
export default function MobileMenu() {
  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <span className="icon-close-popup" data-bs-dismiss="offcanvas">
        <i className="icon-close" />
      </span>
      <div className="mb-canvas-content">
        <div className="mb-body">
          <div className="mb-content-top">
            {/* <form className="form-search mb-0" onSubmit={(e) => e.preventDefault()}>
              <fieldset>
                <input
                  type="text"
                  placeholder="Search for anything..."
                  className=""
                  name="text"
                  tabIndex={0}
                  defaultValue=""
                  aria-required="true"
                  required
                />
              </fieldset>
              <button type="submit" className="link">
                <i className="icon icon-search" />
              </button>
            </form> */}
            <ul className="nav-ul-mb mt-2" id="wrapper-menu-navigation">
              <MobileNav />
            </ul>
          </div>
          <div className="mb-other-content">
            <div className="mb-notice">
              <Link href={`/contact-us`} className="text-need">
                Need Help?
              </Link>
            </div>
            <ul className="mb-info">
              <li>
                <p>
                  Address:
                  <a
                    href="https://maps.app.goo.gl/nurLYMZFXMC8fXXY9"
                    className="fw-medium"
                    target="_blank"
                  >
                    131/5-6 Nitayo Rd., Mak Khaeng, Mueang, Udon Thani 41000, Thailand
                  </a>
                </p>
              </li>
              <li>
                Email:
                <a href="mailto:anakyngems@gmail.com" className="fw-medium">
                  anakyngems@gmail.com
                </a>
              </li>
              <li>
                Phone:
                <a href="tel:0885605601" className="fw-medium">
                  088 560 5601
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
