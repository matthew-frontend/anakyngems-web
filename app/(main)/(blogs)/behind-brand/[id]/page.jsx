import BlogSingle from "@/components/blogs/BlogSingle";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";
import Link from "next/link";
import { getBlogPost, urlFor } from "@/sanity/client";

export const revalidate = 30; // 30 วินาที

export async function generateMetadata({ params }) {
  try {
    const { id } = await params;
    const blogPost = await getBlogPost(id);
    
    if (!blogPost) {
      return {
        title: "Blog | ANAKYN GEMS",
        description: "Because true luxury isn't about excess—it's about self-expression, simplicity, and the confidence to shine every day.",
      };
    }
    
    return {
      title: `${blogPost.title}`,
      description: blogPost.excerpt || "Because true luxury isn't about excess—it's about self-expression, simplicity, and the confidence to shine every day.",
      keywords: `${blogPost.title}, Behind the Brand, ANAKYN GEMS, อนาคินเจม, รับจัดงานแต่งงาน, lab grown diamond, jewelry blog, diamond jewelry`,
      openGraph: {
        title: `${blogPost.title} | ANAKYNGEMS`,
        description: blogPost.excerpt || "Behind the Brand story from ANAKYN GEMS - Lab grown diamond jewelry",
        images: blogPost.mainImage ? [{
          url: urlFor(blogPost.mainImage).width(1200).height(630).fit('crop').format('jpg').quality(85).url(),
          width: 1200,
          height: 630,
          alt: blogPost.mainImage.alt || `${blogPost.title} - ANAKYNGEMS Behind the Brand`,
          type: 'image/jpeg'
        }] : [{
          url: "https://www.anakyngems.com/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "ANAKYNGEMS - Behind the Brand Blog"
        }],
        type: 'article',
        url: `https://www.anakyngems.com/behind-brand/${blogPost.slug?.current || id}`,
        siteName: "ANAKYNGEMS",
        locale: "th_TH",
        publishedTime: blogPost.publishedAt,
      },
      twitter: {
        card: "summary_large_image",
        title: `${blogPost.title} | ANAKYNGEMS`,
        description: blogPost.excerpt || "Behind the Brand story from ANAKYNGEMS",
        images: blogPost.mainImage ? [urlFor(blogPost.mainImage).width(1200).height(630).fit('crop').format('jpg').quality(85).url()] : ["https://www.anakyngems.com/images/og-image.jpg"],
      },
      alternates: {
        canonical: `https://www.anakyngems.com/behind-brand/${blogPost.slug?.current || id}`,
      },
    };
  } catch (error) {
    console.error('Error generating blog metadata:', error);
    return {
      title: "Blog | ANAKYN GEMS",
      description: "Because true luxury isn't about excess—it's about self-expression, simplicity, and the confidence to shine every day.",
    };
  }
}

export default async function page({ params }) {
  let blogPost = null;
  
  try {
    const { id } = await params;
    blogPost = await getBlogPost(id);
  } catch (error) {
    console.error('Error fetching blog post:', error);
  }

  return (
    <>
      <Header1 parentClass="tf-header line-bt-2 bg-white" />
      <section className="flat-spacing-2 pb-0">
        <div className="container">
          <div className="page-title">
            <div className="breadcrumbs">
              <ul className="bread-wrap">
                <li>
                  <Link href={`/`} className="text-main-4 link-secondary">
                    Home
                  </Link>
                </li>
                <li className="br-line w-12 bg-main" />
                <li>
                  <Link href={`/behind-brand`} className="text-main-4 link-secondary">
                    Behind the Brand
                  </Link>
                </li>
                <li className="br-line w-12 bg-main" />
                <li>
                  <p>{blogPost?.title || "Blog Post"}</p>
                </li>
              </ul>
              <h1 className="heading fw-normal text-uppercase thai-text">
                {blogPost?.title || "Blog Post"}
              </h1>
            </div>
            <div className="box-text"></div>
          </div>
        </div>
      </section>
      <BlogSingle />
      <Footer1 />
    </>
  );
}