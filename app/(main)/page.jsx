import Features from "@/components/common/Features";
import TextSlider2 from "@/components/common/TextSlider2";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar2 from "@/components/headers/Topbar2";
import TopbarBottom from "@/components/headers/TopbarBottom";
import CountdownLuxruy from "@/components/homes/home-3/CountdownLuxruy";
import BestSeller from "@/components/homes/home-3/BestSeller";
import BehindBrand from "@/components/homes/home-3/BehindBrand";
import Hero from "@/components/homes/home-3/Hero";
import HighlightProducts from "@/components/homes/home-3/HighlightProducts";
import ProductsModal from "@/components/modals/ProductsModal";
import React from "react";
import CollectionsSlide from "@/components/homes/home-3/CollectionsSlide";
import { getHomepageData, getHomepageMetadata } from "@/lib/homepage-data";
import Service from "@/components/homes/home-3/Service";
import Banner from "@/components/homes/home-3/Banner";
import ShopVideo from "@/components/homes/home-3/ShopVideo";

export const revalidate = 30; // 30 วินาที 

// Generate metadata
export async function generateMetadata() {
  return getHomepageMetadata();
}

export default async function Home() {
  const pageData = await getHomepageData();
  return (
    <>
      <div className="tf-topbar p-0 style-2">
        <Topbar2 />
        <TopbarBottom />
      </div>
      <Header1 />
      <Hero />
      <Banner />
      {/* <About /> */}
      <CollectionsSlide 
        categories={pageData.categories}
        categoryCounts={pageData.categoryCounts}
        collectionsCounts={pageData.collectionsCounts}
        error={pageData.error}
      />
      <BestSeller 
        bestSellers={pageData.bestSellers}
        categories={pageData.categories}
        categoryCounts={pageData.categoryCounts}
        error={pageData.error}
      />
      <TextSlider2 />
      <HighlightProducts />
      <ShopVideo />
      <Service />
      <CountdownLuxruy />
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
