"use client";
import { useEffect } from 'react';

export default function CSSLoader() {
  useEffect(() => {
    // Load main styles after initial render
    const loadCSS = (href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = () => {
        // Mark swiper containers as loaded for smooth transition
        const swiperContainers = document.querySelectorAll('.swiper-container');
        swiperContainers.forEach(container => {
          container.classList.add('loaded');
        });
      };
      document.head.appendChild(link);
    };

    // Load non-critical CSS files
    const cssFiles = [
      '/css/bootstrap.min.css',
      '/css/swiper-bundle.min.css',
      '/css/animate.css',
      '/icon/icomoon/style.css',
      '/fonts/fonts.css'
    ];

    // Load CSS files progressively
    cssFiles.forEach((file, index) => {
      setTimeout(() => {
        loadCSS(file);
      }, index * 50); // Stagger loading by 50ms
    });

    // Load main SCSS last
    setTimeout(() => {
      import('../../public/scss/main.scss');
      import('photoswipe/dist/photoswipe.css');
    }, 300);

  }, []);

  return null;
}