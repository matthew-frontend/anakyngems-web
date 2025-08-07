'use client';

import { useEffect } from 'react';

export default function SeoJsonLd() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "ANAKYNGEMS",
      url: "https://www.anakyngems.com",
      logo: "https://www.anakyngems.com/images/og-image.jpg",
      sameAs: [
        "https://www.facebook.com/anakyngems",
        "https://www.instagram.com/anakyngems"
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
