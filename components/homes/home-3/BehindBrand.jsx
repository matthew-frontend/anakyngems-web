"use client";
import { blogEntries } from "@/data/blogs";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper/modules";
export default function BehindBrand() {
  return (
    <section className="flat-spacing-3">
      <div className="container">
        <div className="sect-top center text-center wow fadeInUp">
          <h2 className="s-title font-2">
            <span className="fst-italic">Behind</span> the brand
          </h2>
          <p className="s-sub-title">
            Explore our journey, values, and the stories behind our collections.
            Discover what makes our brand unique.
          </p>
        </div>
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
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          spaceBetween={15}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd11",
          }}
        >
          {blogEntries.slice(0, 3).map((entry, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div
                className="article-blog style-2 hover-img4 wow fadeInLeft"
                {...(entry.delay && { "data-wow-delay": entry.delay })}
              >
                <div className="entry_image">
                  <Link href={`/behind-brand/${entry.id || index + 1}`} className="image img-style4">
                    <Image
                      src={entry.image.src}
                      alt={entry.alt}
                      className="lazyload"
                      width={772}
                      height={776}
                    />
                  </Link>
                  <div className="entry_tag">
                    {entry.tags.map((tag, tagIndex) => (
                      <Link
                        key={tagIndex}
                        href={`/behind-brand/${entry.id || index + 1}`}
                        className="name-tag text-caption link"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
                <h5>
                  <Link
                    href={`/behind-brand/${entry.id || index + 1}`}
                    className="link fw-normal text-line-clamp-2"
                  >
                    {entry.title}
                  </Link>
                </h5>
                <ul className="meta-list">
                  <li className="entry_day letter-space-0 text-caption text-main-4">
                    {entry.date}
                  </li>
                  <li className="icon icon-rhombus" />
                </ul>
                <Link
                  href={`/behind-brand/${entry.id || index + 1}`}
                  className="tf-btn btn-def text-capitalize text-caption-2 text-main link fw-medium"
                >
                  Read More
                  <i className="icon-arrow-right-2 icon" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-dot-default tf-sw-pagination spd11" />
        </Swiper>
      </div>
    </section>
  );
}
