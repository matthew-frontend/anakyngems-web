"use client";

import React, { useEffect, useRef, useState } from "react";
import CountdownTimer from "../common/Countdown";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import QuickView from "@/components/common/QuickView";
import { getRecommendedProducts, urlFor } from "@/sanity/client";

export default function ProductsModal() {
  const modalElement = useRef();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalInstance, setModalInstance] = useState(null);

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      try {
        const recommendedProducts = await getRecommendedProducts(8);
        setProducts(recommendedProducts);
      } catch (error) {
        console.error('Error fetching recommended products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendedProducts();
  }, []);

  useEffect(() => {
    const showModal = async () => {
      const bootstrap = await import("bootstrap");
      const myModal = new bootstrap.Modal(
        document.getElementById("autoProduct"),
        {
          keyboard: false,
        }
      );

      setModalInstance(myModal);

      await new Promise((resolve) => setTimeout(resolve, 2000));
      myModal.show();

      modalElement.current?.addEventListener("hidden.bs.modal", () => {
        myModal.hide();
      });
    };

    showModal();
  }, []);

  const handleProductClick = () => {
    if (modalInstance) {
      modalInstance.hide();
      // Remove backdrop manually if it persists
      setTimeout(() => {
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
          backdrop.remove();
        }
        document.body.classList.remove('modal-open');
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('padding-right');
      }, 100);
    }
  };

  return (
    <div
      className="modal modalCentered fade auto-popup modal-auto-product"
      id="autoProduct"
      ref={modalElement}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <span className="icon-close-popup" data-bs-dismiss="modal">
            <i className="icon-close" />
          </span>
          <div className="modal-body">
            <h3 className="title fw-normal text-uppercase text-center">
              recommend for you:
            </h3>
            <div className="countdown-V03">
              <div
                className="js-countdown cd-custom"
                data-timer={596}
                data-labels="DAY,Hours,Mins,Secs"
              >
                <CountdownTimer style={7} />
              </div>
            </div>
            
            {loading ? (
              <div className="text-center py-4">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <Swiper
                dir="ltr"
                className="swiper tf-swiper"
                breakpoints={{
                  0: { slidesPerView: 2 },
                  575: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                spaceBetween={15}
              >
                {products.map((product) => {
                  const mainImage = product.images?.[0]?.asset?.url 
                    ? urlFor(product.images[0]).width(714).height(900).url()
                    : 'https://vemusnextjs.vercel.app/images/products/product-1.jpg';
                  
                  const hoverImage = product.images?.[1]?.asset?.url 
                    ? urlFor(product.images[1]).width(714).height(900).url()
                    : mainImage;

                  return (
                    <SwiperSlide className="swiper-slide" key={product._id}>
                      <div className="card_product--V01 type-space-35">
                        <div className="card_product-wrapper">
                          <Link
                            href={`/products/${product.slug.current}`}
                            className="product-img"
                            onClick={handleProductClick}
                          >
                            <Image
                              src={mainImage}
                              alt={product.title}
                              className="lazyload img-product"
                              width={714}
                              height={900}
                            />
                            <Image
                              src={hoverImage}
                              alt={product.title}
                              className="lazyload img-hover"
                              width={714}
                              height={900}
                            />
                          </Link>

                          <ul className="list-product-btn">
                            <li>
                              <QuickView product={product} />
                            </li>
                          </ul>

                          {product.calculatedBadge && (
                            <div className="badge-box">
                              <span className={`badge-item ${product.calculatedVariantType === 'marquee' ? 'type-marquee' : ''}`}>
                                {product.calculatedBadge}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="card_product-info">
                          <Link
                            href={`/products/${product.slug.current}`}
                            className="name-product link text-line-clamp-2"
                            onClick={handleProductClick}
                          >
                            {product.title}
                          </Link>
                          <div className="price-wrap">
                            <span className="price-new">
                              $
                              {product.price?.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                              })}
                            </span>
                            {product.oldPrice && (
                              <span className="price-old text-caption">
                                $
                                {product.oldPrice.toLocaleString(undefined, {
                                  minimumFractionDigits: 2,
                                })}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}