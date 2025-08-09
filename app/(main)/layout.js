// app/layout.js (หรือ app/layout.tsx)
import LayoutWrapper from "@/components/common/LayoutWrapper";
import "../../public/scss/main.scss";
import "photoswipe/dist/photoswipe.css";
import ScrollTop from "@/components/common/ScrollTop";
import Context from "@/context/Context";
import MobileMenu from "@/components/modals/MobileMenu";
import QuickView from "@/components/modals/QuickView";
import Search from "@/components/modals/Search";
import GTM from "./GTM";
import Script from "next/script";

const ORIGIN = "https://www.anakyngems.com";

export const metadata = {
  title: {
    default: "ANAKYNGEMS อนาคินเจม - เครื่องประดับเพชรแล็บโกรนคุณภาพสูง",
    template: "%s | ANAKYN GEMS อนาคินเจม",
  },
  description:
    "ค้นพบเครื่องประดับเพชรแล็บโกรนคุณภาพสูงจาก ANAKYN GEMS อนาคินเจม แหวนหมั้น แหวนแต่งงาน แหวนเพชร ต่างหูเพชร ดีไซน์หรูหรา ทันสมัย ยั่งยืน และเป็นมิตรต่อสิ่งแวดล้อม | Discover high-quality lab grown diamond jewelry from ANAKYNGEMS – elegant, sustainable, and ethically crafted for every occasion.",
  keywords:
    "ANAKYNGEMS, อนาคินเจม, เพชรแล็บ, เครื่องประดับเพชร, เพชรแล็บโกรน, แหวนหมั้น, แหวนแต่งงาน, แหวนเพชร, ต่างหูเพชร, กำไลเพชร, lab grown diamonds, diamond jewelry, engagement rings, wedding rings, sustainable jewelry, ethical diamonds, lab created diamonds, eco-friendly jewelry, conflict-free diamonds, luxury jewelry",
  openGraph: {
    title:
      "ANAKYNGEMS อนาคินเจม - เครื่องประดับเพชรแล็บโกรนคุณภาพสูง | Lab Grown Diamond Jewellery",
    description:
      "ANAKYNGEMS อนาคินเจม เครื่องประดับเพชรแล็บโกรนคุณภาพสูง ดีไซน์สวยหรู สวมใส่ได้ทุกวัน เหมาะสำหรับทุกโอกาส | Discover elegant, sustainable diamond jewelry from ANAKYNGEMS.",
    url: `${ORIGIN}`,
    siteName: "ANAKYNGEMS",
    images: [
      {
        url: `${ORIGIN}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "ANAKYNGEMS อนาคินเจม - Lab Grown Diamond Jewellery | เครื่องประดับเพชรแล็บโกรน",
      },
    ],
    locale: "th_TH", // เปลี่ยนให้สอดคล้องกับภาษา
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ANAKYNGEMS อนาคินเจม - เครื่องประดับเพชรแล็บโกรนคุณภาพสูง | Lab Grown Diamond Jewellery",
    description:
      "เครื่องประดับเพชรแล็บโกรนจาก ANAKYNGEMS อนาคินเจม หรูหรา ยั่งยืน ใส่ได้ทุกวัน เหมาะกับทุกโอกาส | Lab Grown Diamond Jewelry for every moment.",
    images: [`${ORIGIN}/images/og-image.jpg`],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${ORIGIN}`, // ชี้โดเมนหลักให้ชัด
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon.svg" },
      { rel: "icon", url: "/web-app-manifest-192x192.png" },
      { rel: "icon", url: "/web-app-manifest-512x512.png" },
    ],
  },
};

export default function MainLayout({ children }) {
  // --- JSON-LD ฝั่ง server: Organization + WebSite ---
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ANAKYN GEMS",
    url: ORIGIN,
    logo: `${ORIGIN}/images/logo-512.png`, // ✅ โลโก้สี่เหลี่ยม
    image: [
      `${ORIGIN}/images/brand-1200x1200.jpg`, // ✅ 1:1
      `${ORIGIN}/images/og-image.jpg`, // ✅ 1200x630
    ],
    sameAs: [
      "https://www.facebook.com/anakyngems",
      "https://www.instagram.com/anakyngems",
    ],
  };

  const siteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ANAKYNGEMS",
    url: ORIGIN,
    potentialAction: {
      "@type": "SearchAction",
      target: `${ORIGIN}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      {/* ไม่ต้องมี <head> */}
      <body>
        {/* GTM ควรใช้ next/script ภายในคอมโพเนนต์ */}
        <GTM />

        {/* JSON-LD: ใส่ผ่าน next/script เพื่อลด hydration mismatch */}
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <Script
          id="site-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd) }}
        />

        <LayoutWrapper>
          <Context>
            <div id="wrapper">{children}</div>
            <ScrollTop />
            <MobileMenu />
            <QuickView />
            <Search />
          </Context>
        </LayoutWrapper>
      </body>
    </html>
  );
}
