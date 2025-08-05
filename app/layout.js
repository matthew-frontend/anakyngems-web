import LayoutWrapper from "@/components/common/LayoutWrapper";

import "../public/scss/main.scss";
import "photoswipe/dist/photoswipe.css";
import ScrollTop from "@/components/common/ScrollTop";
import Context from "@/context/Context";
import MobileMenu from "@/components/modals/MobileMenu";
import QuickView from "@/components/modals/QuickView";
import Search from "@/components/modals/Search";

export const metadata = {
  title: {
    default:
      "ANAKYNGEMS อนาคินเจม - Lab Grown Diamond Jewellery | เครื่องประดับเพชรแล็บโกรน",
    template: "%s | ANAKYNGEMS อนาคินเจม",
  },
  description:
    "ANAKYNGEMS อนาคินเจม เครื่องประดับเพชรแล็บโกรน คุณภาพสูง แหวนหมั้น แหวนแต่งงาน แหวนเพชร ต่างหู ต่างหูเพชร | Discover beautiful lab grown diamond jewelry at ANAKYNGEMS. High quality, sustainable, and ethically sourced diamonds.",
  keywords:
    "อนาคินเจม, ANAKYNGEMS, เครื่องประดับเพชร, เพชรแล็บโกรน, เพชร, แหวนหมั้น, แหวนแต่งงาน, แหวนเพชร, กำไลเพชร, ต่างหูเพชร, lab grown diamonds, diamond jewelry, engagement rings, wedding rings, sustainable jewelry, ethical diamonds, lab created diamonds, eco-friendly jewelry, conflict-free diamonds, certified diamonds",
  openGraph: {
    title: "ANAKYNGEMS อนาคินเจม - เครื่องประดับเพชรแล็บโกรน",
    description:
      "ANAKYNGEMS อนาคินเจม เครื่องประดับเพชรแล็บโกรน คุณภาพสูง | Discover beautiful lab grown diamond jewelry at ANAKYNGEMS. High quality, sustainable, and ethically sourced diamonds.",
    url: "https://anakyngems.com",
    siteName: "ANAKYNGEMS",
    images: [
      {
        url: "https://www.anakyngems.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ANAKYNGEMS อนาคินเจม - Lab Grown Diamond Jewellery | เครื่องประดับเพชรแล็บโกรน",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANAKYNGEMS อนาคินเจม - เครื่องประดับเพชรแล็บโกรน",
    description:
      "Lab Grown Diamond Jewellery เครื่องประดับเพชรแล็บโกรน คุณภาพสูง",
    images: [
      {
        url: "https://www.anakyngems.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ANAKYNGEMS อนาคินเจม - Lab Grown Diamond Jewellery | เครื่องประดับเพชรแล็บโกรน",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png", // fallback for some older browsers
    apple: "/apple-touch-icon.png", // สำหรับ iOS
    other: [
      {
        rel: "icon",
        url: "/favicon.svg", // หากรองรับ SVG
      },
      {
        rel: "icon",
        url: "/web-app-manifest-192x192.png",
      },
      {
        rel: "icon",
        url: "/web-app-manifest-512x512.png",
      },
    ],
  },
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
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
