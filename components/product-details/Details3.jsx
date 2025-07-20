"use client";
import React, { useState } from "react";
import Grid1 from "./gallery/Gallery1";
import DescriptionSideAccordion from "./DescriptionSideAccordion";

export default function Details3({ product }) {
  const [activeColor, setActiveColor] = useState("gold");
  return (
    <section className="flat-spacing pt-0">
      <div className="tf-main-product section-image-zoom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Grid1
                product={product}
                activeColor={activeColor}
                setActiveColor={setActiveColor}
              />
            </div>
            <div className="col-md-6">
              <div className="tf-product-info-wrap sticky-top">
                <div className="tf-zoom-main sticky-top" />
                <div className="tf-product-info-list other-image-zoom">
                  <div className="tf-product-info-heading">
                    <h3 className="product-info-name fw-normal">
                      {product.title}
                    </h3>
                    <div className="product-info-price">
                      <div className="price-wrap">
                        <span className="price-new price-on-sale h4">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.oldPrice && (
                          <span className="price-old compare-at-price fw-normal h6">
                            ${product.oldPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="product-infor-sub h6 fw-normal text-main-4">
                      {product.description}
                    </p>
                  </div>
                  <div className="tf-product-share">
                    <ul className="tf-social-icon">
                      <li>
                        <a
                          href="https://www.facebook.com/anakyngems"
                          target="_blank"
                          className="social-facebook"
                        >
                          <span className="icon">
                            <i className="icon-facebook" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/anakyngems"
                          target="_blank"
                          className="social-instagram"
                        >
                          <span className="icon">
                            <i className="icon-instagram" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.tiktok.com/@anakyn.gems" target="_blank" className="social-tiktok">
                          <span className="icon">
                            <svg fill="currentColor" width="32" height="16.11" viewBox="0 0 24 24"><title>TikTok</title><path d="M15.9453 8.68918V15.6727C15.9453 19.1598 13.1048 22.0004 9.6177 22.0004C8.27369 22.0004 7.01685 21.5717 5.99251 20.8525C4.35796 19.7047 3.29004 17.8085 3.29004 15.6727C3.29004 12.1783 6.12333 9.34505 9.6104 9.34505C9.90101 9.34505 10.1843 9.36685 10.4676 9.40318V12.9121H10.4386C10.3151 12.8758 10.1843 12.8394 10.0536 12.8177H9.9954C9.86466 12.8032 9.74114 12.7813 9.60309 12.7813C8.00491 12.7813 6.70448 14.0817 6.70448 15.6799C6.70448 17.2782 8.00491 18.5786 9.60309 18.5786C11.2014 18.5786 12.5018 17.2782 12.5018 15.6799V2.00037H15.938C15.938 2.29822 15.9671 2.58881 16.0179 2.87213C16.2649 4.1798 17.035 5.30584 18.1175 6.01053C18.873 6.50452 19.7593 6.78785 20.7182 6.78785V10.2241C18.9416 10.2241 17.288 9.65222 15.9453 8.68918Z"></path></svg>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <DescriptionSideAccordion />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
