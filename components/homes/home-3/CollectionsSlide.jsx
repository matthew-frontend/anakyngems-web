"use client";
import { collections2 } from "@/data/collections";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { getCategories, getProducts } from "@/sanity/client";

export default function CollectionsSlide() {
  const [categoryCounts, setCategoryCounts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [categoriesData, allProducts] = await Promise.all([
          getCategories(),
          getProducts()
        ]);
        
        // Calculate category counts - map both Sanity categories and collections2 titles
        const counts = {};
        
        // First, count products from Sanity categories
        categoriesData.forEach(cat => {
          const categoryName = cat.title.toLowerCase();
          counts[categoryName] = allProducts.filter(product => 
            (product.category?.title || product.category || '').toLowerCase() === categoryName
          ).length;
        });
        
        // Also map collections2 titles to Sanity category counts
        collections2.forEach(collection => {
          const collectionTitle = collection.title.toLowerCase();
          // Map collection title to actual category count
          if (counts[collectionTitle] !== undefined) {
            counts[collection.title] = counts[collectionTitle]; // Keep original case for collections2
          } else {
            // Try to match plural/singular forms
            const singularForm = collectionTitle.endsWith('s') ? collectionTitle.slice(0, -1) : collectionTitle;
            if (counts[singularForm] !== undefined) {
              counts[collection.title] = counts[singularForm];
            }
          }
        });
        
        setCategoryCounts(counts);
      } catch (error) {
        console.error('Error fetching categories:', error);
        // Fallback to static data
        setCategoryCounts({});
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);
  return (
    <div className="flat-spacing-12 bg-anakyn-20">
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
            const productCount = loading ? item.count : (categoryCounts[item.title] || item.count || 0);
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
