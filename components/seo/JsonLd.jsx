export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ANAKYNGEMS อนาคินเจม",
    "alternateName": ["อนาคินเจม", "ANAKYN GEMS", "Anakin Gems"],
    "url": "https://anakyngems.com",
    "description": "ANAKYNGEMS อนาคินเจม เครื่องประดับเพชรแล็บโกรน คุณภาพสูง ยั่งยืน จริยธรรม | Lab grown diamond jewelry - High quality, sustainable, and ethically sourced diamonds",
    "inLanguage": ["th", "en"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://anakyngems.com/products?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return <JsonLd data={schema} />;
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ANAKYNGEMS อนาคินเจม",
    "alternateName": ["อนาคินเจม", "ANAKYN GEMS", "Anakin Gems", "อนาคิน เจม"],
    "url": "https://anakyngems.com",
    "logo": "https://anakyngems.com/images/logo/logo.png",
    "description": "ANAKYNGEMS อนาคินเจม ผู้เชี่ยวชาญด้านเครื่องประดับเพชรแล็บโกรน คุณภาพสูง ยั่งยืน จริยธรรม | Lab grown diamond jewelry specialist - High quality, sustainable, and ethically sourced diamonds",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://anakyngems.com/contact-us"
    },
    "sameAs": [
      "https://www.facebook.com/anakyngems",
      "https://www.instagram.com/anakyngems"
    ],
    "areaServed": ["TH", "US", "GB", "AU", "CA"]
  };

  return <JsonLd data={schema} />;
}

export function ProductSchema({ product }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title || product.name,
    "description": product.description,
    "image": product.images || [product.imgSrc],
    "brand": {
      "@type": "Brand",
      "name": "ANAKYNGEMS"
    },
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "ANAKYNGEMS"
      }
    }
  };

  return <JsonLd data={schema} />;
}

export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return <JsonLd data={schema} />;
}