"use client";
import { collections2 } from "@/data/collections";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { urlFor } from "@/sanity/client";

export default function CollectionsSlide({ categories = [], categoryCounts = {}, collectionsCounts = {}, error = null }) {
  const [loading, setLoading] = useState(false);

  // Use Sanity categories if available, otherwise fallback to static data
  const collectionsData = categories.length > 0 ? 
    categories.map(cat => ({
      title: cat.title,
      image: cat.collectionImage?.asset?.url || `/images/collections/cl-${cat.title.toLowerCase()}.jpg`,
      alt: cat.collectionImage?.alt || cat.title,
      delay: cat.delay,
      count: collectionsCounts[cat.title] || 0
    })) : 
    collections2.map(collection => ({
      ...collection,
      count: collectionsCounts[collection.title] || collection.count || 0
    }));
  return (
    <div className="flat-spacing-12 pt-0">
      <div className="container">
        <Swiper
          dir="ltr"
          className="swiper tf-swiper swiper-cat"
          breakpoints={{
            0: { slidesPerView: 1 },
            575: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={10}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd29",
          }}
        >
          {collectionsData.map((item, index) => {
            const categoryName = item.title?.toLowerCase();
            const imageUrl = item.image?.startsWith('http') || item.image?.startsWith('/') 
              ? item.image 
              : urlFor(item.image).width(915).height(1250).url();
            
            return (
              <SwiperSlide className="swiper-slide" key={index} style={{ justifyContent: 'center' }}>
                <Link
                  href={`/products?category=${categoryName}`}
                  className="wg-cls hover-img wow fadeInUp"
                  {...(item.delay ? { "data-wow-delay": item.delay } : {})}
                >
                  <div className="image img-style">
                    <Image
                      src={imageUrl}
                      alt={item.alt || item.title}
                      className="lazyload"
                      width={915}
                      height={1250}
                      priority={index === 0}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                  <h3 className="name link text-uppercase">
                    {item.title}{" "}
                    <span className="count text-caption">
                      {String(item.count).padStart(2, "0")}
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
