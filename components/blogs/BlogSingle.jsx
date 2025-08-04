"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { urlFor } from "@/sanity/client";
import { PortableText } from '@portabletext/react';

export default function BlogSingle() {
  const params = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!params.id) return;

      try {
        setLoading(true);
        const response = await fetch(`/api/behind-brand?slug=${params.id}`);
        const result = await response.json();
        
        if (result.success) {
          setBlogPost(result.data);
        } else {
          setError(result.error);
        }
      } catch (err) {
        setError('Failed to fetch blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [params.id]);

  if (loading) {
    return (
      <section className="flat-spacing-14">
        <div className="container">
          <div className="s-blog-detail align-items-start">
            <div className="blog-single">
              <div className="single-wrap flat-spacing-3 pt-0">
                <div className="text-center">
                  <div className="bg-light" style={{height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    Loading...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !blogPost) {
    return (
      <section className="flat-spacing-14">
        <div className="container">
          <div className="s-blog-detail align-items-start">
            <div className="blog-single">
              <div className="single-wrap flat-spacing-3 pt-0">
                <div className="text-center">
                  <p className="text-danger">Error: {error || 'Blog post not found'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const publishedDate = blogPost.publishedAt 
    ? new Date(blogPost.publishedAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: '2-digit'
      })
    : new Date(blogPost._createdAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: '2-digit'
      });

  const imageUrl = blogPost.mainImage?.asset?.url 
    ? urlFor(blogPost.mainImage).width(2176).height(790).url()
    : 'https://vemusnextjs.vercel.app/images/blog/blog-single.jpg';

  const components = {
    types: {
      image: ({value}) => {
        const imageUrl = urlFor(value).width(1068).height(716).url();
        return (
          <div className="entry_image">
            <Image
              src={imageUrl}
              alt={value.alt || blogPost.title}
              className="lazyload"
              width={1068}
              height={716}
            />
          </div>
        );
      }
    },
    block: {
      h1: ({children}) => <h1 className="text-uppercase">{children}</h1>,
      h2: ({children}) => <h2 className="text-uppercase">{children}</h2>,
      h3: ({children}) => <h3 className="text-uppercase">{children}</h3>,
      h4: ({children}) => <h4 className="text-uppercase">{children}</h4>,
      normal: ({children}) => <p className="text-main-4">{children}</p>,
    },
    marks: {
      link: ({value, children}) => {
        const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
        return (
          <a href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : undefined}>
            {children}
          </a>
        );
      },
    },
  };

  return (
    <section className="flat-spacing-14">
      <div className="container">
        <div className="s-blog-detail align-items-start">
          <div className="blog-single">
            <div className="single-wrap flat-spacing-3 pt-0 pb-0">
              <div className="box-title">
                <ul className="entry_meta">
                  <li>
                    <span className="icon">
                      <i className="icon-calender" />
                    </span>
                    <p>{publishedDate}</p>
                  </li>
                  {blogPost.tags && blogPost.tags.length > 0 && (
                    <li>
                      <span className="icon">
                        <i className="icon-tag" />
                      </span>
                      <p className="text-caption">{blogPost.tags[0]}</p>
                    </li>
                  )}
                </ul>
                <p className="text-main-4">
                  {blogPost.excerpt}
                </p>
              </div>
              
              <div className="entry_image">
                <Image
                  src={imageUrl}
                  alt={blogPost.title}
                  className="lazyload"
                  width={2176}
                  height={790}
                />
              </div>

              {blogPost.content && (
                <div className="box-text">
                  <PortableText 
                    value={blogPost.content} 
                    components={components}
                  />
                </div>
              )}

              {blogPost.galleryImages && blogPost.galleryImages.length > 0 && (
                <div className="entry_image type-group tf-grid-layout sm-col-2">
                  {blogPost.galleryImages.map((galleryImage, index) => (
                    <div key={index} className="image">
                      <Image
                        src={urlFor(galleryImage).width(1068).height(716).url()}
                        alt={galleryImage.alt || `Gallery image ${index + 1}`}
                        className="lazyload"
                        width={1068}
                        height={716}
                      />
                    </div>
                  ))}
                  
                  {/* Fill remaining slots with placeholder if less than 2 images */}
                  {blogPost.galleryImages.length === 1 && (
                    <div className="image">
                      <div 
                        className="lazyload bg-light d-flex align-items-center justify-content-center text-muted"
                        style={{width: '100%', height: '716px', minHeight: '400px'}}
                      >
                        <p>No additional image</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="bottom">
                <div className="entry_media">
                  {blogPost.tags && blogPost.tags.length > 0 && (
                    <ul className="entry_tag">
                      {blogPost.tags.map((tag, index) => (
                        <li key={index}>
                          <a href="#" className="text-caption">
                            {tag}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="entry_social">
                    <p>Share:</p>
                    <ul className="tf-social-icon style-large">
                      <li>
                        <a
                          href="https://www.facebook.com/anakyngems"
                          target="_blank"
                          className="social-facebook"
                        >
                          <span className="icon">
                            <i className="icon-facebook" />
                          </span>
                        </a>
                      </li>
                      <li>
                         <a
                          href="https://www.instagram.com/anakyngems"
                          target="_blank"
                          className="social-instagram"
                        >
                          <span className="icon">
                            <i className="icon-instagram" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.tiktok.com/@anakyn.gems" target="_blank" className="social-tiktok">
                          <span className="icon">
                            <svg fill="currentColor" width="32" height="16.11" viewBox="0 0 24 24" ><title>TikTok</title><path d="M15.9453 8.68918V15.6727C15.9453 19.1598 13.1048 22.0004 9.6177 22.0004C8.27369 22.0004 7.01685 21.5717 5.99251 20.8525C4.35796 19.7047 3.29004 17.8085 3.29004 15.6727C3.29004 12.1783 6.12333 9.34505 9.6104 9.34505C9.90101 9.34505 10.1843 9.36685 10.4676 9.40318V12.9121H10.4386C10.3151 12.8758 10.1843 12.8394 10.0536 12.8177H9.9954C9.86466 12.8032 9.74114 12.7813 9.60309 12.7813C8.00491 12.7813 6.70448 14.0817 6.70448 15.6799C6.70448 17.2782 8.00491 18.5786 9.60309 18.5786C11.2014 18.5786 12.5018 17.2782 12.5018 15.6799V2.00037H15.938C15.938 2.29822 15.9671 2.58881 16.0179 2.87213C16.2649 4.1798 17.035 5.30584 18.1175 6.01053C18.873 6.50452 19.7593 6.78785 20.7182 6.78785V10.2241C18.9416 10.2241 17.288 9.65222 15.9453 8.68918Z"></path></svg>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-sidebar sidebar-content-wrap d-none d-lg-block sticky-top"></div>
        </div>
      </div>
    </section>
  );
}