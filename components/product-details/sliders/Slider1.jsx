"use client";

import { useEffect, useRef, useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PhotoSwipeLightbox from "photoswipe/lightbox";

import Drift from "drift-zoom";
import Image from "next/image";
import { urlFor } from "@/sanity/client";

export default function Slider1({
  firstItem,
}) {
  // Convert Sanity product images to slider format
  const convertSanityToSlides = (product) => {
    if (!product?.images || product.images.length === 0) {
      return []; // return empty array if no images
    }
    
    return product.images.map((image, index) => ({
      id: index + 1,
      imgSrc: urlFor(image).width(1000).height(1000).url(),
      alt: image.alt || product.title || `Product image ${index + 1}`,
    }));
  };

  const items = convertSanityToSlides(firstItem);

  const [thumbSwiper, setThumbSwiper] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Return early if no images
  if (!items || items.length === 0) {
    return (
      <div className="flat-wrap-media-product">
        <div className="no-images-placeholder">
          <p>No product images available</p>
        </div>
      </div>
    );
  }
  useEffect(() => {
    // Function to initialize Drift
    // Function to check window width
    const checkWindowSize = () => window.innerWidth >= 1200;

    // Only proceed if window is wide enough
    if (!checkWindowSize()) return;

    const imageZoom = () => {
      const driftAll = document.querySelectorAll(".tf-image-zoom");
      const pane = document.querySelector(".tf-zoom-main");

      driftAll.forEach((el) => {
        new Drift(el, {
          zoomFactor: 2,
          paneContainer: pane,
          inlinePane: false,
          handleTouch: false,
          hoverBoundingBox: true,
          containInline: true,
        });
      });
    };
    imageZoom();
    const zoomElements = document.querySelectorAll(".tf-image-zoom");

    const handleMouseOver = (event) => {
      const parent = event.target.closest(".section-image-zoom");
      if (parent) {
        parent.classList.add("zoom-active");
      }
    };

    const handleMouseLeave = (event) => {
      const parent = event.target.closest(".section-image-zoom");
      if (parent) {
        parent.classList.remove("zoom-active");
      }
    };

    zoomElements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup event listeners on component unmount
    return () => {
      zoomElements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []); // Empty dependency array to run only once on mount
  const lightboxRef = useRef(null);
  useEffect(() => {
    // Initialize PhotoSwipeLightbox
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery-swiper-started",
      children: ".item",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    // Store the lightbox instance in the ref for later use
    lightboxRef.current = lightbox;

    // Cleanup: destroy the lightbox when the component unmounts
    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <>
      {" "}
      <div className="flat-wrap-media-product">
        <Swiper
          dir="ltr"
          className="swiper tf-product-media-main"
          id="gallery-swiper-started"
          thumbs={{ swiper: thumbSwiper }}
          modules={[Thumbs]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
        >
          {items.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="swiper-slide"
            >
              <a
                href={slide.imgSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="item"
                data-pswp-width="593px"
                data-pswp-height="744px"
              >
                <Image
                  className="tf-image-zoom lazyload"
                  data-zoom={slide.imgSrc}
                  data-src={slide.imgSrc}
                  alt={slide.alt || "img-product"}
                  src={slide.imgSrc}
                  width={1000}
                  height={1000}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Swiper
        dir="ltr"
        className="swiper tf-product-media-thumbs"
        onSwiper={setThumbSwiper}
        modules={[Thumbs]}
        spaceBetween={8}
        slidesPerView={4}
      >
        {items.map(({ imgSrc, alt }, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide stagger-item"
          >
            <div className="item">
              <Image
                className="lazyload"
                data-src={imgSrc}
                alt={alt || "img-product"}
                src={imgSrc}
                width={828}
                height={1241}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
