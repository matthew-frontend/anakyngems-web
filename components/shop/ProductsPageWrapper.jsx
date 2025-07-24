"use client";
import { useState, useEffect } from "react";
import { getProducts } from "@/sanity/client";
import ProductsPageClient from "./ProductsPageClient";

export default function ProductsPageWrapper() {
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    async function fetchProductCount() {
      try {
        const products = await getProducts();
        setProductCount(products.length);
      } catch (error) {
        console.error('Error fetching product count:', error);
        setProductCount(0);
      }
    }
    fetchProductCount();
  }, []);

  return <ProductsPageClient productCount={productCount} />;
}