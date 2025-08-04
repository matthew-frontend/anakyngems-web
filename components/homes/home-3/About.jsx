import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <div className="flat-spacing-12">
      <div className="container">
        <div className="banner_V05 style-2">
          <div className="shape-image wow fadeInUp">
            <div className="image">
              <Image
                src="/images/logo/AW[RGB]_LOGO_ANAKYN GEMS-05.jpg"
                alt="Banner"
                className="lazyload"
                width={1000}
                height={1000}
                priority
                fetchPriority="high"
              />
            </div>
            <span className="line-circle" />
            <Image
              className="img-ic-star"
              alt=""
              src="/icon/dou-star-anakyn.svg"
              width={64}
              height={63}
              loading="lazy"
            />
          </div>
          <div className="bn-content wow fadeInUp">
            <h6 className="text-uppercase">About ANAKYNGEMS</h6>
            <h2 className="title font-2 fw-normal">
              Lab Grown <span className="fst-italic">Diamond</span> Jewellery
            </h2>
            <p className="sub-title text-main-4">
             Anakyn Gems is a modern jewelry brand that redefines how we wear diamonds.
             We believe diamonds shouldn’t be reserved only for special occasions—
             they should be part of your everyday confidence.
            </p>
            <Link href={`/our-story`} className="tf-btn type-large">
              our story
              <i className="icon-arrow-right-2 fs-24" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container border-bt-13 flat-spacing pt-0" />
    </div>
  );
}
