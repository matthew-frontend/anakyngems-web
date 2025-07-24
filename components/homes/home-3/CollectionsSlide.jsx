"use client";
import { collections2 } from "@/data/collections";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper/modules";

export default function CollectionsSlide({ categories = [], categoryCounts = {}, error = null }) {
  const [loading, setLoading] = useState(false);

  // Map collections2 titles to category counts from props
  const mappedCounts = {};
  collections2.forEach(collection => {
    const collectionTitle = collection.title.toLowerCase();
    if (categoryCounts[collectionTitle] !== undefined) {
      mappedCounts[collection.title] = categoryCounts[collectionTitle];
    } else {
      // Try to match plural/singular forms
      const singularForm = collectionTitle.endsWith('s') ? collectionTitle.slice(0, -1) : collectionTitle;
      if (categoryCounts[singularForm] !== undefined) {
        mappedCounts[collection.title] = categoryCounts[singularForm];
      } else {
        mappedCounts[collection.title] = collection.count || 0; // Fallback to static count
      }
    }
  });
  return (
    <div className="flat-spacing-12">
      <div className="container-full-2">
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
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={10}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd29",
          }}
        >
          {collections2.map((item, index) => {
            const productCount = error ? item.count : (mappedCounts[item.title] || item.count || 0);
            const categoryName = item.title?.toLowerCase();
            
            return (
              <SwiperSlide className="swiper-slide" key={index}>
                <Link
                  href={`/products?category=${categoryName}`}
                  className="wg-cls hover-img wow fadeInUp"
                  {...(item.delay ? { "data-wow-delay": item.delay } : {})}
                >
                  <div className="image img-style">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="lazyload"
                      width={915}
                      height={1250}
                      priority={index === 0}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                  <h3 className="name link">
                    {item.title}{" "}
                    <span className="count text-caption">
                      {String(productCount).padStart(2, "0")}
                    </span>
                  </h3>
                </Link>
              </SwiperSlide>
            )
          })}
          <div className="sw-dot-default tf-sw-pagination spd29" />
        </Swiper>
      </div>
    </div>
  );
}
