import Features from "@/components/common/Features";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Banner from "@/components/homes/home-3/Banner";
import Collections from "@/components/homes/home-3/Collections";
import Hero from "@/components/homes/home-3/Hero";
import Products1 from "@/components/homes/home-3/Products1";
import Products2 from "@/components/homes/home-3/Products2";
import Products3 from "@/components/homes/home-3/Products3";
import Testimonials from "@/components/homes/home-3/Testimonials";
import TextBanner from "@/components/homes/home-3/TextBanner";
import TextSlider from "@/components/common/TextSlider";
import ProductsModal from "@/components/modals/ProductsModal";

export const metadata = {
  title: "Home || Vemus - Jewelry Ecommerce React Nextjs Template",
  description: "Vemus - Jewelry Ecommerce React Nextjs Template",
};
export default function Home() {
  return (
    <>
      <div className="bg-surface">
        <div id="wrapper">
          <Topbar1 />
          <Header1 />
          <Hero />
          <TextBanner />
          <Products1 />
          <Products2 />
          <Collections />
          <TextSlider />
          <Products3 />
          <Testimonials />
          <Banner />
          <Features />
          <Footer1 />
          <ProductsModal />
        </div>
      </div>
    </>
  );
}
