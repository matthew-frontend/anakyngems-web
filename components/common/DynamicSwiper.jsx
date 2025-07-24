"use client";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Swiper components with no SSR
const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { 
  ssr: false,
  loading: () => <div className="swiper-loading">Loading...</div>
});

const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { 
  ssr: false 
});

export default function DynamicSwiper({ 
  children, 
  modules = [], 
  className = "swiper tf-swiper",
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ensure Swiper CSS is loaded before showing component
    const checkSwiperCSS = () => {
      const swiperStyles = document.querySelector('link[href*="swiper"]');
      if (swiperStyles) {
        setIsLoaded(true);
      } else {
        setTimeout(checkSwiperCSS, 100);
      }
    };
    
    checkSwiperCSS();
  }, []);

  if (!isLoaded) {
    return (
      <div className="swiper-fallback">
        <div className="swiper-loading">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            padding: '1rem 0'
          }}>
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Swiper 
      className={`${className} swiper-container loaded`}
      modules={modules}
      {...props}
    >
      {children}
    </Swiper>
  );
}

export { SwiperSlide };