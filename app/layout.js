import LayoutWrapper from "@/components/common/LayoutWrapper";

import "../public/scss/main.scss";
import "photoswipe/dist/photoswipe.css";
import ScrollTop from "@/components/common/ScrollTop";
import Toolbar from "@/components/common/Toolbar";
import Context from "@/context/Context";
import MobileMenu from "@/components/modals/MobileMenu";
import QuickView from "@/components/modals/QuickView";
import Search from "@/components/modals/Search";
import SizeGuide from "@/components/modals/SizeGuide";
import AskQuestion from "@/components/modals/AskQuestion";
import Delivery from "@/components/modals/Delivery";
import Engrave from "@/components/modals/Engrave";
import Pickup from "@/components/modals/Pickup";
import ProductDes from "@/components/modals/ProductDes";
import UnavailableModal from "@/components/modals/UnavailableModal";
import OrderDetails from "@/components/modals/OrderDetails";

export const metadata = {
  title: {
    default:
      "ANAKYNGEMS อนาคินเจม - Lab Grown Diamond Jewellery | เครื่องประดับเพชรแล็บโกรน",
    template: "%s | ANAKYNGEMS อนาคินเจม",
  },
  description:
    "ANAKYNGEMS อนาคินเจม เครื่องประดับเพชรแล็บโกรน คุณภาพสูง ยั่งยืน จริยธรรม แหวนหมั้น แหวนแต่งงาน สร้อยคอ กำไล ต่างหู ส่งฟรีทั่วโลก | Discover beautiful lab grown diamond jewelry at ANAKYNGEMS. High quality, sustainable, and ethically sourced diamonds.",
  keywords:
    "อนาคินเจม, ANAKYNGEMS, เครื่องประดับเพชร, เพชรแล็บโกรน, แหวนหมั้น, แหวนแต่งงาน, สร้อยคอเพชร, กำไลเพชร, ต่างหูเพชร, เพชรยั่งยืน, lab grown diamonds, diamond jewelry, engagement rings, wedding rings, sustainable jewelry, ethical diamonds, lab created diamonds, eco-friendly jewelry, conflict-free diamonds, certified diamonds",
  openGraph: {
    title: "ANAKYNGEMS อนาคินเจม - เครื่องประดับเพชรแล็บโกรน",
    description:
      "ANAKYNGEMS อนาคินเจม เครื่องประดับเพชรแล็บโกรน คุณภาพสูง ยั่งยืน จริยธรรม | Discover beautiful lab grown diamond jewelry at ANAKYNGEMS. High quality, sustainable, and ethically sourced diamonds.",
    url: "https://anakyngems.com",
    siteName: "ANAKYNGEMS",
    images: [
      {
        url: "https://anakyngems-web.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ANAKYNGEMS - Lab Grown Diamond Jewellery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANAKYNGEMS - Lab Grown Diamond Jewellery",
    description:
      "Discover beautiful lab grown diamond jewelry at ANAKYNGEMS. High quality, sustainable, and ethically sourced diamonds for all occasions.",
    images: ["https://anakyngems-web.vercel.app/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
            <Toolbar />

            <ScrollTop />
            <MobileMenu />

            {/* <QuickAdd /> */}
            <QuickView />
            <Search />
            <SizeGuide />
            <AskQuestion />
            <Delivery />
            <Engrave />
            <Pickup />
            <ProductDes />
            <UnavailableModal />
            <OrderDetails />
          </Context>
        </LayoutWrapper>
      </body>
    </html>
  );
}
