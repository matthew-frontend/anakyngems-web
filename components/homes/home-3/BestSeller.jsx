"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import DiscountMarquee from "@/components/common/DiscountMarquee";
import { Navigation, Pagination } from "swiper/modules";
import dynamic from "next/dynamic";

// Dynamic imports for better performance
const QuickView = dynamic(() => import("@/components/common/QuickView"), { ssr: false });
const CountdownTimer = dynamic(() => import("@/components/common/Countdown"), { ssr: false });
import Link from "next/link";

export default function BestSeller({ bestSellers = [], categories = [], categoryCounts = {}, error = null }) {
  const [activeTab, setActiveTab] = useState(""); // Will be set from first category
  const [filtered, setFiltered] = useState([]);
  
  // Use props from Sanity
  const sanityProducts = bestSellers;
  const sanityCategories = categories;

  // Set first category as active when categories are available
  useEffect(() => {
    if (sanityCategories.length > 0 && !activeTab) {
      setActiveTab(sanityCategories[0].title.toLowerCase());
    }
  }, [sanityCategories, activeTab]);

  useEffect(() => {
    if (sanityProducts.length > 0 && activeTab) {
      const filteredProducts = sanityProducts.filter(product => 
        (product.category?.title || product.category || '').toLowerCase() === activeTab.toLowerCase()
      );
      setFiltered(filteredProducts);
    }
  }, [activeTab, sanityProducts]);

  return (
    <section className="flat-spacing flat-animate-tab product-tablist bg-anakyn-20">
      <div className="container">
        <div className="sect-top align-items-end wow fadeInUp">
          <h2 className="s-title font-2 text-capitalize">
            <span className="fst-italic">Best</span> Sellers
          </h2>
          <ul className="tab-prd" role="tablist">
            {sanityCategories.map(cat => cat.title.toLowerCase()).map((category) => (
              <li key={category}>
                <h5>
                  <a
                    className={`btn-tab ${
                      activeTab.toLowerCase() === category.toLowerCase() ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(category.toLowerCase())}
                    role="button"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                    {categoryCounts[category.toLowerCase()] !== undefined && (
                      <span className="count-badge"> ({categoryCounts[category.toLowerCase()]})</span>
                    )}
                  </a>
                </h5>
              </li>
            ))}
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane active show" id="ring" role="tabpanel">
            <div className="tf-btn-swiper-item wow fadeInUp">
              <Swiper
                dir="ltr"
                className="swiper tf-swiper"
                breakpoints={{
                  0: { slidesPerView: 1 },
                  575: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
                spaceBetween={15}
                modules={[Navigation, Pagination]}
                pagination={{
                  clickable: true,
                  el: ".spd26",
                }}
                navigation={{
                  prevEl: ".snbp26",
                  nextEl: ".snbn26",
                }}
              >
                {filtered.map((product, index) => (
                  <SwiperSlide className="swiper-slide" key={product._id || product.id}>
                    <div className="card_product--V01 type-space-35">
                      <div className="card_product-wrapper">
                        <Link
                          href={`/products/${product._id || product.id}`}
                          className="product-img"
                        >
                          <Image
                            src={product.images?.[0]?.asset?.url || product.imgSrc}
                            alt={product.title}
                            className="lazyload img-product"
                            width={714}
                            height={900}
                            priority={index < 2}
                            fetchPriority={index < 2 ? "high" : "auto"}
                            loading={index < 2 ? "eager" : "lazy"}
                          />
                          {(product.images?.[1]?.asset?.url || product.hoverImgSrc) && (
                            <Image
                              src={product.images?.[1]?.asset?.url || product.hoverImgSrc}
                              alt={product.title}
                              className="lazyload img-hover"
                              width={714}
                              height={900}
                              loading={index < 2 ? "eager" : "lazy"}
                            />
                          )}
                        </Link>

                        <div className="list-product-btn">
                          <QuickView product={product} />
                        </div>

                        {(product.calculatedBadge || product.badge) && (
                          <div className="badge-box">
                            <span className={`badge-item ${product.badgeType || 'default'}`}>
                              {product.calculatedBadge || product.badge}
                            </span>
                          </div>
                        )}

                        {(product.calculatedVariantType || product.variantType) === "text" && (
                          <div className="variant-box size-box text-center text-caption">
                            {product.calculatedVariantText || product.variantText}
                          </div>
                        )}

                        {(product.calculatedVariantType || product.variantType) === "countdown" && (
                          <div className="variant-box count-down">
                            <CountdownTimer style={5} />
                          </div>
                        )}

                        {(product.calculatedVariantType || product.variantType) === "marquee" && (
                          <div className="variant-box bg-primary">
                            <DiscountMarquee 
                              parentClass="marquee-sale infiniteSlide infiniteSlider"
                              variantText={product.calculatedVariantText || product.variantText}
                            />
                          </div>
                        )}

                        {(product.calculatedVariantType || product.variantType) === "notify" && (
                          <a
                            href="#unavailable"
                            data-bs-toggle="modal"
                            className="variant-box stock bg-main link text-white"
                          >
                            <p className="text-center d-none d-md-block">
                              {product.calculatedVariantText || product.variantText}
                            </p>
                            <p className="text-center d-md-none">Notify Me</p>
                          </a>
                        )}
                      </div>

                      <div className="card_product-info">
                        <div className="rate-wrap">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <i key={i} className="icon-star text-primary" />
                          ))}
                        </div>
                        <Link
                          href={`/products/${product._id || product.id}`}
                          className="name-product h5 fw-normal link text-line-clamp-2"
                        >
                          {product.title}
                        </Link>
                        <div className="price-wrap">
                          <span className="price-new h5 text-white">
                            ฿{product.price.toLocaleString('en-US')}
                          </span>
                          {product.oldPrice && (
                            <span className="price-old fw-normal">
                              ฿{product.oldPrice.toLocaleString('en-US')}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                <div className="sw-dot-default tf-sw-pagination spd26" />
              </Swiper>
              <div className="nav-swiper style-2 nav-prev-swiper d-none d-xxl-flex snbp26">
                <i className="icon-arrow-left" />
              </div>
              <div className="nav-swiper style-2 nav-next-swiper d-none d-xxl-flex snbn26">
                <i className="icon-arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
