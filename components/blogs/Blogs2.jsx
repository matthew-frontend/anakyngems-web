"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/client";

export default function Blogs2() {
  const [blogEntries, setBlogEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/behind-brand');
        const result = await response.json();
        
        if (result.success) {
          setBlogEntries(result.data);
        } else {
          setError(result.error);
        }
      } catch (err) {
        setError('Failed to fetch blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <section className="flat-spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tf-grid-layout sm-col-2 lg-col-3">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="article-blog hover-img">
                    <div className="entry_image">
                      <div className="image img-style bg-light" style={{height: '200px'}}>
                        <div className="d-flex justify-content-center align-items-center h-100">
                          Loading...
                        </div>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="box-title">
                        <div className="bg-light" style={{height: '20px', marginBottom: '10px'}}></div>
                        <div className="bg-light" style={{height: '30px', marginBottom: '10px'}}></div>
                        <div className="bg-light" style={{height: '60px'}}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flat-spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <p className="text-danger">Error: {error}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="flat-spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tf-grid-layout sm-col-2 lg-col-3">
                {blogEntries.map((entry, index) => {
                  const HeadingTag = index === 0 ? 'h3' : 'h4';
                  const imageUrl = entry.mainImage?.asset?.url 
                    ? urlFor(entry.mainImage).width(index === 0 ? 2004 : 972).height(790).url()
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
                    <div
                      className={`article-blog hover-img ${
                        index === 0 ? "style-row wd-full" : ""
                      }`}
                      key={entry._id}
                    >
                      <div className="entry_image">
                        <Link href={`/behind-brand/${entry.slug.current}`} className="image img-style">
                          <Image
                            src={imageUrl}
                            alt={entry.title}
                            className="lazyload"
                            width={index === 0 ? 2004 : 972}
                            height={790}
                          />
                        </Link>
                        <div className="entry_tag">
                          {entry.tags?.map((tag, i) => (
                            <Link
                              key={i}
                              href={`/behind-brand/${entry.slug.current}`}
                              className="name-tag text-caption link"
                            >
                              {tag}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="blog-content">
                        <div className="box-title">
                          <ul className="meta-list">
                            <li className="entry_day">
                              <p className="letter-space-0 text-main-4">
                                {publishedDate}
                              </p>
                            </li>
                          </ul>
                          <HeadingTag>
                            <Link
                              href={`/behind-brand/${entry.slug.current}`}
                              className="link fw-medium text-black text-uppercase"
                            >
                              {entry.title}
                            </Link>
                          </HeadingTag>
                          <p
                            className={`text-main-6 ${
                              HeadingTag === "h4" ? "text-line-clamp-2" : ""
                            }`}
                          >
                            {entry.excerpt}
                          </p>
                        </div>
                        <div className="box-btn">
                          <Link
                            href={`/behind-brand/${entry.slug.current}`}
                            className="tf-btn-line text-uppercase lh-28 fw-normal"
                          >
                            READ MORE
                            <i className="icon-arrow-top-right fs-10" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="wd-full">
                  <div className="wg-pagination">
                    <a href="#" className="tf-btn-line style-line-2">
                      <span className="text-body">PREV</span>
                    </a>
                    <ul className="pagition-list">
                      <li>
                        <p className="pagination-item active">1</p>
                      </li>
                      <li>
                        <a href="#" className="pagination-item link">
                          2
                        </a>
                      </li>
                      <li>
                        <a href="#" className="pagination-item link">
                          3
                        </a>
                      </li>
                    </ul>
                    <a href="#" className="tf-btn-line style-line-2">
                      <span className="text-body">NEXT</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}