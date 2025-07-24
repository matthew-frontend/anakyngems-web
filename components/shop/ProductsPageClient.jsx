"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function ProductsPageClient({ productCount = 0 }) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const getCategoryDisplayName = (category) => {
    if (!category) return "ALL PRODUCTS";
    
    const categoryMap = {
      'ring': 'RINGS',
      'bracelet': 'BRACELETS', 
      'earring': 'EARRINGS',
      'necklace': 'NECKLACES',
      'new-in': 'NEW IN',
      'gift-idea': 'GIFT IDEAS'
    };
    
    return categoryMap[category] || category.toUpperCase();
  };

  return (
    <section className="flat-spacing-2">
      <div className="container">
        <div className="page-title type-2">
          <div className="breadcrumbs">
            <ul className="bread-wrap">
              <li>
                <Link href={`/`} className="text-main-4 link-secondary">
                  Home
                </Link>
              </li>
              <li className="br-line w-12 bg-main" />
              <li>
                <Link href={`/products`} className="text-main-4 link-secondary">
                  Products
                </Link>
              </li>
              {categoryParam && (
                <>
                  <li className="br-line w-12 bg-main" />
                  <li>
                    <p>{getCategoryDisplayName(categoryParam)}</p>
                  </li>
                </>
              )}
            </ul>
            <h1 className="heading fw-normal text-uppercase">
              {getCategoryDisplayName(categoryParam)}
              <span className="number-count"> {productCount} </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}