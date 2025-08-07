"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { getBehindBrandPosts, urlFor } from "@/sanity/client";

export default function BehindBrand() {
  const [blogEntries, setBlogEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBehindBrandPosts = async () => {
      try {
        const posts = await getBehindBrandPosts(3);
        setBlogEntries(posts);
      } catch (error) {
        console.error('Error fetching behind brand posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBehindBrandPosts();
  }, []);

  if (loading) {
    return (
      <section className="flat-spacing-3">
        <div className="container">
          <div className="sect-top center text-center">
            <h2 className="s-title font-2">
              <span className="fst-italic">Behind</span> the brand
            </h2>
            <p className="s-sub-title">
              Explore our journey, values, and the stories behind our collections.
              Discover what makes our brand unique.
            </p>
          </div>
          <div className="text-center py-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
        
        {blogEntries.length > 0 ? (
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
            {blogEntries.map((entry) => {
              const imageUrl = entry.mainImage?.asset?.url 
                ? urlFor(entry.mainImage).width(800).url()
                : 'https://vemusnextjs.vercel.app/images/blog/blog-8.jpg';
              
              const publishedDate = entry.publishedAt 
                ? new Date(entry.publishedAt).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })
                : new Date(entry._createdAt).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  });

              return (
                <SwiperSlide className="swiper-slide" key={entry._id}>
                  <div className="article-blog style-2 hover-img4 wow fadeInLeft">
                    <div className="entry_image">
                      <Link href={`/behind-brand/${entry.slug.current}`} className="image img-style4">
                        <Image
                          src={imageUrl}
                          alt={entry.mainImage?.alt || entry.title}
                          className="lazyload"
                          width={772}
                          height={400}
                          loading="lazy"
                          style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover'
                          }}
                        />
                      </Link>
                      <div className="entry_tag">
                        {entry.tags?.slice(0, 2).map((tag, tagIndex) => (
                          <Link
                            key={tagIndex}
                            href={`/behind-brand/${entry.slug.current}`}
                            className="name-tag text-caption link"
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <h5>
                      <Link
                        href={`/behind-brand/${entry.slug.current}`}
                        className="link fw-normal text-line-clamp-2"
                      >
                        {entry.title}
                      </Link>
                    </h5>
                    <ul className="meta-list">
                      <li className="entry_day letter-space-0 text-caption text-main-4">
                        {publishedDate}
                      </li>
                      <li className="icon icon-rhombus" />
                    </ul>
                    <Link
                      href={`/behind-brand/${entry.slug.current}`}
                      className="tf-btn btn-def text-capitalize text-caption-2 text-main link fw-medium"
                    >
                      Read More
                      <i className="icon-arrow-right-2 icon" />
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="sw-dot-default tf-sw-pagination spd11" />
          </Swiper>
        ) : (
          <div className="text-center py-5">
            <p className="text-muted">No blog posts available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}