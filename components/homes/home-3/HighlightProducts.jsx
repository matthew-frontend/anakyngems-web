"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { useContextElement } from "@/context/Context";
import { getHighlightProducts, urlFor } from "@/sanity/client";

export default function HighlightProducts() {
  const { setQuickViewItem } = useContextElement();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHighlightProducts = async () => {
      try {
        const highlightProducts = await getHighlightProducts(3);
        setProducts(highlightProducts);
      } catch (error) {
        console.error('Error fetching highlight products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHighlightProducts();
  }, []);
  return (
    <>
      <section className="flat-spacing-3 pt-0">
        <div className="container">
          <div className="sect-border">
            <div className="sect-head wow fadeInUp">
              <h2 className="s-title font-2 text-capitalize">
                <span className="fst-italic">Highlight</span> Products
              </h2>
            </div>
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : products.length > 0 ? (
              <>
                <Swiper
                  dir="ltr"
                  className="swiper tf-swiper wow fadeInUp"
                  spaceBetween={15}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    575: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 80,
                    },
                  }}
                  modules={[Pagination]}
                  pagination={{
                    clickable: true,
                    el: ".spd16",
                  }}
                >
                  {products.map((product) => {
                    const mainImage = product.images?.[0] 
                      ? urlFor(product.images[0]).width(774).height(1028).url()
                      : 'https://vemusnextjs.vercel.app/images/products/product-1.jpg';

                    return (
                      <SwiperSlide className="swiper-slide" key={product._id}>
                        <div className="card_product--V02 hover-img video-wrap">
                          <div className="card_product-wrapper">
                            <Link
                              href={`/products/${product.slug?.current || product._id}`}
                              className="image img-style d-flex"
                            >
                              <Image
                                src={mainImage}
                                alt={product.title}
                                className="lazyload"
                                width={774}
                                height={1028}
                                loading="lazy"
                              />
                            </Link>
                          </div>
                          <div className="content">
                            <Link
                              href={`/products/${product.slug?.current || product._id}`}
                              className="link h5 fw-normal"
                            >
                              {product.title}
                            </Link>
                            <div className="price-wrap">
                              <span className="price-new h5">
                                ฿{product.price?.toLocaleString('en-US') || '0'}
                              </span>
                              {product.oldPrice && (
                                <span className="price-old fw-normal">
                                  ฿{product.oldPrice.toLocaleString('en-US')}
                                </span>
                              )}
                            </div>
                            <ul className="rate-wrap">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <li key={i}>
                                  <i className="icon-star" />
                                </li>
                              ))}
                            </ul>
                          </div>
                          <a
                            href="#quickView"
                            data-bs-toggle="modal"
                            onClick={() => setQuickViewItem(product)}
                            className="tf-btn text-uppercase"
                          >
                            Quick View
                          </a>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                  <div className="sw-dot-default tf-sw-pagination spd16" />
                </Swiper>
              </>
            ) : (
              <div className="text-center py-5">
                <p className="text-muted">ไม่มี Highlight Products</p>
              </div>
            )}
          </div>
        </div>
      </section>{" "}
      {/* <ModalVideo
        isOpen={isOpen}
        videoId={"MLpWrANjFbI"}
        setIsOpen={setIsOpen}
      /> */}
    </>
  );
}
