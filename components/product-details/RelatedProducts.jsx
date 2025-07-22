"use client";
import { products14 } from "@/data/products";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import QuickView from "../common/QuickView";
import { Navigation, Pagination } from "swiper/modules";
import { getProducts } from "@/sanity/client";

export default function RelatedProducts({ containerFull = false, currentProduct = null }) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRelatedProducts() {
      try {
        const allProducts = await getProducts();
        
        // Filter out current product and get related products (same category or random)
        const filtered = allProducts.filter(p => p._id !== currentProduct?._id);
        const sameCategory = filtered.filter(p => 
          p.category?.title === currentProduct?.category?.title ||
          p.category === currentProduct?.category
        );
        
        // Use same category products if available, otherwise use random products
        const related = sameCategory.length >= 4 ? 
          sameCategory.slice(0, 8) : 
          [...sameCategory, ...filtered.filter(p => !sameCategory.includes(p))].slice(0, 8);
        
        setRelatedProducts(related);
      } catch (error) {
        console.error('Error fetching related products:', error);
        setRelatedProducts(products14.slice(0, 8)); // Fallback to static data
      } finally {
        setLoading(false);
      }
    }

    fetchRelatedProducts();
  }, [currentProduct]);
  return (
    <section className="flat-spacing-3">
      <div className={`container${containerFull ? "-full" : ""}`}>
        <div className="sect-top wow fadeInUp">
          <h3 className="s-title">YOU MAY ALSO LIKE</h3>
          <div className="group-btn-slider">
            <div className="nav-prev-swiper tf-sw-nav snbp46">
              <i className="icon-arrow-left" />
            </div>
            <div className="nav-next-swiper tf-sw-nav snbn46">
              <i className="icon-arrow-right" />
            </div>
          </div>
        </div>
        <Swiper
          dir="ltr"
          className="swiper tf-swiper wow fadeInUp"
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
              spaceBetween: 30,
            },
          }}
          spaceBetween={15}
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            el: ".spd46",
          }}
          navigation={{
            prevEl: ".snbp46",
            nextEl: ".snbn46",
          }}
        >
          {(loading ? products14.slice(0, 4) : relatedProducts).map((product, index) => (
            <SwiperSlide className="swiper-slide" key={product._id || product.id || index}>
              <div className="card_product--V01">
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
                </div>
                <div className="card_product-info">
                  <Link
                    href={`/products/${product._id || product.id}`}
                    className="name-product h5 fw-normal link text-line-clamp-2"
                  >
                    {product.title}
                  </Link>
                  <div className="price-wrap">
                    <span className="price-new h5">
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

          <div className="sw-dot-default tf-sw-pagination d-xl-none spd46" />
        </Swiper>
      </div>
    </section>
  );
}
