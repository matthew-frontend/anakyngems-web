import BlogSingle from "@/components/blogs/BlogSingle";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";
import Link from "next/link";
import { getBlogPost } from "@/sanity/client";

export async function generateMetadata({ params }) {
  try {
    const blogPost = await getBlogPost(params.id);
    
    return {
      title: blogPost ? `${blogPost.title} | ANAKYNGEMS` : "Blog | ANAKYNGEMS",
      description: blogPost?.excerpt || "Discover beautiful lab grown diamond jewelry at ANAKYNGEMS. High quality, sustainable, and ethically sourced diamonds for all occasions.",
    };
  } catch (error) {
    return {
      title: "Blog | ANAKYNGEMS",
      description: "Discover beautiful lab grown diamond jewelry at ANAKYNGEMS. High quality, sustainable, and ethically sourced diamonds for all occasions.",
    };
  }
}

export default async function page({ params }) {
  let blogPost = null;
  
  try {
    blogPost = await getBlogPost(params.id);
  } catch (error) {
    console.error('Error fetching blog post:', error);
  }

  return (
    <>
      <Header1 parentClass="tf-header line-bt-2" />
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