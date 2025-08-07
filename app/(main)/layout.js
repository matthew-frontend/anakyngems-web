import LayoutWrapper from "@/components/common/LayoutWrapper";

import "../../public/scss/main.scss";
import "photoswipe/dist/photoswipe.css";
import ScrollTop from "@/components/common/ScrollTop";
import Context from "@/context/Context";
import MobileMenu from "@/components/modals/MobileMenu";
import QuickView from "@/components/modals/QuickView";
import Search from "@/components/modals/Search";

export const metadata = {
  title: {
    default:
      "ANAKYNGEMS อนาคินเจม - เครื่องประดับเพชรแล็บโกรนคุณภาพสูง | Lab Grown Diamond Jewellery",
    template: "%s | ANAKYNGEMS อนาคินเจม",
  },
  description:
    "ค้นพบเครื่องประดับเพชรแล็บโกรนคุณภาพสูงจาก ANAKYNGEMS อนาคินเจม แหวนหมั้น แหวนแต่งงาน แหวนเพชร ต่างหูเพชร ดีไซน์หรูหรา ทันสมัย ยั่งยืน และเป็นมิตรต่อสิ่งแวดล้อม | Discover high-quality lab grown diamond jewelry from ANAKYNGEMS – elegant, sustainable, and ethically crafted for every occasion.",
  keywords:
    "ANAKYNGEMS, อนาคินเจม, เพชรแล็บ, เครื่องประดับเพชร, เพชรแล็บโกรน, แหวนหมั้น, แหวนแต่งงาน, แหวนเพชร, ต่างหูเพชร, กำไลเพชร, lab grown diamonds, diamond jewelry, engagement rings, wedding rings, sustainable jewelry, ethical diamonds, lab created diamonds, eco-friendly jewelry, conflict-free diamonds, luxury jewelry",
  openGraph: {
    title:
      "ANAKYNGEMS อนาคินเจม - เครื่องประดับเพชรแล็บโกรนคุณภาพสูง | Lab Grown Diamond Jewellery",
    description:
      "ANAKYNGEMS อนาคินเจม เครื่องประดับเพชรแล็บโกรนคุณภาพสูง ดีไซน์สวยหรู สวมใส่ได้ทุกวัน เหมาะสำหรับทุกโอกาส | Discover elegant, sustainable diamond jewelry from ANAKYNGEMS.",
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
    title:
      "ANAKYNGEMS อนาคินเจม - เครื่องประดับเพชรแล็บโกรนคุณภาพสูง | Lab Grown Diamond Jewellery",
    description:
      "เครื่องประดับเพชรแล็บโกรนจาก ANAKYNGEMS อนาคินเจม หรูหรา ยั่งยืน ใส่ได้ทุกวัน เหมาะกับทุกโอกาส | Lab Grown Diamond Jewelry for every moment.",
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
  // viewport:
  //   "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export default function MainLayout({ children }) {
  return (
    <LayoutWrapper>
      <Context>
        <div id="wrapper">{children}</div>
        <ScrollTop />
        <MobileMenu />
        <QuickView />
        <Search />
      </Context>
    </LayoutWrapper>
  );
}