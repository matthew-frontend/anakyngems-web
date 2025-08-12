"use client";
import React, { useEffect, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { videoProducts } from "@/data/products";

export default function ShopVideo() {
  const swiperRef = useRef(null);
  const videoRefs = useRef({}); // เก็บ video element ตาม id

  const registerRef = (id) => (el) => {
    videoRefs.current[id] = el;
  };

  // เล่นเฉพาะคลิปที่อยู่ใน viewport / พักเมื่อพ้นจอ
  const observeVisibility = useCallback((video) => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!video) return;
        if (entry.isIntersecting) {
          // โหลดจริงเมื่อเข้าจอ
          video.preload = "auto";
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(video);
    return io;
  }, []);

  useEffect(() => {
    const observers = [];
    Object.values(videoRefs.current).forEach((v) => {
      if (v) observers.push(observeVisibility(v));
    });

    // แท็บไม่โฟกัสให้หยุดเล่นทั้งหมด
    const onVis = () => {
      if (document.hidden) {
        Object.values(videoRefs.current).forEach((v) => v && v.pause());
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      observers.forEach((o) => o.disconnect());
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [observeVisibility]);

  // const handleSwiper = (swiper) => {
  //   swiperRef.current = swiper;

  //   // เวลาเปลี่ยนสไลด์: พักทุกตัวก่อน แล้วให้ IO ตัดสินใจเล่นเฉพาะที่อยู่บนจอ
  //   const onSlide = () => {
  //     Object.values(videoRefs.current).forEach((v) => v && v.pause());
  //     // ปล่อยให้ IntersectionObserver เป็นตัว trigger play เมื่อเข้าจอ
  //   };

  //   swiper.on("slideChange", onSlide);
  //   swiper.on("resize", onSlide);

  //   // cleanup listeners เมื่อ component unmount
  //   return () => {
  //     swiper.off("slideChange", onSlide);
  //     swiper.off("resize", onSlide);
  //   };
  // };

  return (
    <section className="flat-spacing pb-0">
      <div className="container">
        <h2 className="s-title text-center text-trans-none">Shop the Look</h2>

        <Swiper
          // onSwiper={handleSwiper}
          className="swiper tf-swiper"
          spaceBetween={15}
          breakpoints={{
            0: { slidesPerView: 1 },
            575: { slidesPerView: 1 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1200: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Pagination]}
          pagination={{ clickable: true, el: ".spd21" }}
        >
          {videoProducts.map((product) => (
            <SwiperSlide className="swiper-slide" key={product.id}>
              <div className="cls_videoV01">
                <video
                  ref={registerRef(product.id)}
                  className="hover-video"
                  width={486}
                  height={800}
                  muted
                  playsInline
                  loop
                  autoPlay
                  preload="none"        // สำคัญ: ไม่โหลดจนกว่าจะเข้าจอ
                  controlsList="nodownload noplaybackrate"
                >
                  {product.videoWebm && (
                    <source src={product.videoWebm} type="video/webm" />
                  )}
                  <source src={product.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </SwiperSlide>
          ))}

          <div className="sw-dot-default tf-sw-pagination spd21" />
        </Swiper>
      </div>
    </section>
  );
}
