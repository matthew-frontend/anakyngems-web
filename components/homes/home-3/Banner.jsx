"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Banner() {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const wordSplit = new SplitText(element, {
      type: "words",
      wordsClass: "word-wrapper",
    });

    const charSplit = new SplitText(wordSplit.words, {
      type: "chars",
      charsClass: "char-wrapper",
    });

    gsap.set(charSplit.chars, {
      color: "#A9A9A9",
      opacity: 1,
    });

    const animation = gsap.to(charSplit.chars, {
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        end: "bottom 35%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
      color: "#1F1F1F",
      stagger: {
        each: 0.05,
        from: "start",
      },
      duration: 0.5,
      ease: "power2.out",
    });

    return () => {
      animation.kill();
      wordSplit.revert();
      charSplit.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="banner_text style-2 flex-sm-nowrap">
          <Link
            href={`/contact-us`}
            className="tf-btn style-4 type-size-2 border-primary"
          >
           <Image
              src="/images/logo/logo-about.png"
              alt="Banner"
              className="lazyload"
              width={240}
              height={240}
              priority
              fetchPriority="high"
              style={{ marginTop: '15px' }}
            />
          </Link>
          <div className="d-flex flex-column">
            <h3
              ref={textRef}
              className="text-color-change fw-normal text-sm-start"
            >
             Anakyn Gems is a modern jewelry brand that redefines how we wear diamonds.
             We believe diamonds shouldn’t be reserved only for special occasions—
             they should be part of your everyday confidence.
            </h3>
            <Link
              href={`/our-store`}
              className="tf-btn btn-def fw-medium justify-content-sm-start"
            >
              Our Story
              <i className="icon-arrow-right-2 fs-24" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container border-bt-primary flat-spacing pt-0" />
    </section>
  );
}
