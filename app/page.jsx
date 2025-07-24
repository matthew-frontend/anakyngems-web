import Features from "@/components/common/Features";
import TextSlider2 from "@/components/common/TextSlider2";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar2 from "@/components/headers/Topbar2";
import TopbarBottom from "@/components/headers/TopbarBottom";
import About from "@/components/homes/home-3/About";
import CountdownLuxruy from "@/components/homes/home-3/CountdownLuxruy";
import Banner2 from "@/components/homes/home-3/Banner2";
import BestSeller from "@/components/homes/home-3/BestSeller";
import BehindBrand from "@/components/homes/home-3/BehindBrand";
import FeaturedCollections from "@/components/homes/home-3/FeaturedCollections";
import Hero from "@/components/homes/home-3/Hero";
import HighlightProducts from "@/components/homes/home-3/HighlightProducts";
import Products3 from "@/components/homes/home-3/Products3";
import Testimonials from "@/components/homes/home-3/Testimonials";
import ProductsModal from "@/components/modals/ProductsModal";
import React from "react";
import CollectionsSlide from "@/components/homes/home-3/CollectionsSlide";
import { getHomepageData, getHomepageMetadata } from "@/lib/homepage-data";

// Enable Static Generation with ISR (revalidate every hour)
export const revalidate = 3600; // 1 hour

// Generate metadata
export async function generateMetadata() {
  return getHomepageMetadata();
}

export default async function Home() {
  // Fetch all data at page level using centralized function
  const pageData = await getHomepageData();
  return (
    <>
      <div className="tf-topbar p-0 style-2">
        <Topbar2 />
        <TopbarBottom />
      </div>
      <Header1 />
      <Hero />
      <About />
      <CollectionsSlide 
        categories={pageData.categories}
        categoryCounts={pageData.collectionsCounts}
        error={pageData.error}
      />
      {/* <FeaturedCollections /> */}
      <BestSeller 
        bestSellers={pageData.bestSellers}
        categories={pageData.categories}
        categoryCounts={pageData.categoryCounts}
        error={pageData.error}
      />
      <TextSlider2 />
      <CountdownLuxruy />
      <HighlightProducts />
      <Banner2 />
      <Products3 />
      <Testimonials />
      <BehindBrand />
      <Features
        styleWhite={false}
        parentClass="flat-spacing-8 bg-light-peach"
      />
      <Footer1 />
      <ProductsModal />
    </>
  );
}
