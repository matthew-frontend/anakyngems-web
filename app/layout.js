import LayoutWrapper from "@/components/common/LayoutWrapper";

import "../public/scss/main.scss";
import "photoswipe/dist/photoswipe.css";
import ScrollTop from "@/components/common/ScrollTop";
import Toolbar from "@/components/common/Toolbar";
import Context from "@/context/Context";
import Compare from "@/components/modals/Compare";
import Login from "@/components/modals/Login";
import MobileMenu from "@/components/modals/MobileMenu";
import QuickAdd from "@/components/modals/QuickAdd";
import QuickView from "@/components/modals/QuickView";
import Register from "@/components/modals/Register";
import ResetPass from "@/components/modals/ResetPass";
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
  title: "ANAKYNGEMS - Lab Grown Diamond Jewellery",
  description:
    "Discover beautiful lab grown diamond jewelry at ANAKYNGEMS. High quality, sustainable, and ethically sourced diamonds for all occasions.",
  keywords:
    "lab grown diamonds, diamond jewelry, engagement rings, wedding rings, sustainable jewelry, ethical diamonds",
  openGraph: {
    title: "ANAKYNGEMS - Lab Grown Diamond Jewellery",
    description:
      "Discover beautiful lab grown diamond jewelry at ANAKYNGEMS. High quality, sustainable, and ethically sourced diamonds for all occasions.",
    url: "https://anakyngems.com",
    siteName: "ANAKYNGEMS",
    images: [
      {
        url: "https://anakyngems-web-mnzk.vercel.app/images/og-image.jpg",
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
    images: ["https://anakyngems-web-mnzk.vercel.app/images/og-image.jpg"],
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
      </head>
      <body>
        <LayoutWrapper>
          <Context>
            <div id="wrapper">{children}</div>
            <Toolbar />

            <ScrollTop />
            <Compare />
            <Login />
            <MobileMenu />

            <QuickAdd />
            <QuickView />
            <Register />
            <ResetPass />
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
