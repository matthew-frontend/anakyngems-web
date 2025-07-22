"use client";
import { products9 } from "@/data/products";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import QuickView from "@/components/common/QuickView";
import DiscountMarquee from "@/components/common/DiscountMarquee";
import { Navigation, Pagination } from "swiper/modules";
import CountdownTimer from "@/components/common/Countdown";
import Link from "next/link";
import { getBestSellers, getProducts, getCategories } from "@/sanity/client";

export default function BestSeller() {
  const [sanityProducts, setSanityProducts] = useState([]);
  const [sanityCategories, setSanityCategories] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});
  const [activeTab, setActiveTab] = useState(""); // Will be set from first category
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [bestSellers, allProducts, categories] = await Promise.all([
          getBestSellers(20), // Get more products for filtering
          getProducts(),
          getCategories()
        ]);
        
        setSanityProducts(bestSellers.length > 0 ? bestSellers : allProducts.slice(0, 12));
        setSanityCategories(categories);
        
        // Set first category as active if not set
        if (categories.length > 0 && !activeTab) {
          setActiveTab(categories[0].title.toLowerCase());
        }
        
        // Calculate category counts
        const counts = {};
        categories.forEach(cat => {
          const categoryName = cat.title.toLowerCase();
          counts[categoryName] = allProducts.filter(product => 
            (product.category?.title || product.category || '').toLowerCase() === categoryName
          ).length;
        });
        setCategoryCounts(counts);
        
      } catch (error) {
        console.error('Error fetching data:', error);
        // Fallback to static data
        setSanityProducts(products9);
        setActiveTab("rings");
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

  useEffect(() => {
    if (sanityProducts.length > 0 && activeTab) {
      const filteredProducts = sanityProducts.filter(product => 
        (product.category?.title || product.category || '').toLowerCase() === activeTab.toLowerCase() ||
        product.filterCategories?.includes(activeTab) // Fallback for static data
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
            {(loading ? ["ring", "bracelet", "necklace", "earring"] : sanityCategories.map(cat => cat.title.toLowerCase())).map((category) => (
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
                {(loading ? products9.slice(0, 4) : filtered).map((product) => (
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
                          />
                          {(product.images?.[1]?.asset?.url || product.hoverImgSrc) && (
                            <Image
                              src={product.images?.[1]?.asset?.url || product.hoverImgSrc}
                              alt={product.title}
                              className="lazyload img-hover"
                              width={714}
                              height={900}
                            />
                          )}
                        </Link>

                        <ul className="list-product-btn">
                          <li>
                            <QuickView product={product} />
                          </li>
                        </ul>

                        {(product.calculatedBadge || product.badge) && (
                          <div className="badge-box">
                            <span className={`badge-item ${product.badgeType || 'default'}`}>
                              {product.calculatedBadge || product.badge}
                            </span>
                          </div>
                        )}

                        {(product.calculatedVariantType || product.variantType) === "text" && (
                          <div className="variant-box">
                            <p className="size-box text-center text-caption">
                              {product.calculatedVariantText || product.variantText}
                            </p>
                          </div>
                        )}

                        {(product.calculatedVariantType || product.variantType) === "countdown" && (
                          <div className="variant-box count-down">
                            <div className="countdown-V02">
                              <div className="js-countdown">
                                <CountdownTimer style={5} />
                              </div>
                            </div>
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
                        <ul className="rate-wrap">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <li key={i}>
                              <i className="icon-star text-primary" />
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={`/products/${product._id || product.id}`}
                          className="name-product h5 fw-normal link text-line-clamp-2"
                        >
                          {product.title}
                        </Link>
                        <div className="price-wrap">
                          <span className="price-new h5 text-white">
                            ${product.price.toFixed(2)}
                          </span>
                          {product.oldPrice && (
                            <span className="price-old fw-normal">
                              ${product.oldPrice.toFixed(2)}
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
