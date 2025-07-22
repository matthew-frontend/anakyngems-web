"use client";
import React, { useEffect, useReducer, useState } from "react";
import { getProducts, getCategories } from "@/sanity/client";
import QuickView from "../common/QuickView";
import { initialState, reducer } from "@/reducer/sanityFilterReducer";
import SanityFilterSidebar from "./SanityFilterSidebar";
import LayoutHandler from "./LayoutHandler";
import Pagination from "../common/Pagination";
import Link from "next/link";
import FilterToggle from "./FilterToggler";
import { useSearchParams } from "next/navigation";
import ProductCard from "../sanity/ProductCard";

export default function SanityProducts2() {
  const [activeLayout, setActiveLayout] = useState(3);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [products, setProducts] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const {
    price,
    categories: selectedCategories,
    filtered,
    sortingOption,
    sorted,
    currentPage,
    itemPerPage,
  } = state;

  // Fetch data from Sanity
  useEffect(() => {
    async function fetchData() {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getCategories()
        ]);
        
        setProducts(productsData);
        setCategoriesData(categoriesData);
        dispatch({ type: "SET_PRODUCTS", payload: productsData });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Set category from URL parameter
  useEffect(() => {
    if (categoryParam && categoriesData.length > 0) {
      const categoryTitle = categoriesData.find(cat => 
        cat.slug.current === categoryParam
      )?.title;
      
      if (categoryTitle && !selectedCategories.includes(categoryTitle)) {
        dispatch({ type: "SET_CATEGORIES", payload: [categoryTitle] });
      }
    }
  }, [categoryParam, categoriesData, selectedCategories]);

  const filterProps = {
    categories: categoriesData,
    selectedCategories: selectedCategories,
    price: price,
    products: products,
    setPrice: (value) => dispatch({ type: "SET_PRICE", payload: value }),
    setCategories: (categories) => dispatch({ type: "SET_CATEGORIES", payload: categories }),
  };

  const allProps = {
    ...state,
    products: products,
    categories: categoriesData,
    setSortingOption: (value) =>
      dispatch({ type: "SET_SORTING_OPTION", payload: value }),
    resetFilter: () => dispatch({ type: "RESET_FILTER" }),
    setCurrentPage: (value) =>
      dispatch({ type: "SET_CURRENT_PAGE", payload: value }),
  };

  if (loading) {
    return (
      <div className="tf-shop-content">
        <div className="container-full">
          <div className="row">
            <div className="col-xl-3 col-lg-4 sidebar-left style-2">
              <div className="text-center p-4">Loading filters...</div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="text-center p-5">Loading products...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Calculate pagination
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentProducts = sorted.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sorted.length / itemPerPage);

  return (
    <div className="tf-shop-content">
      <div className="container-full">
        <div className="row">
          <div className="col-xl-3 col-lg-4 sidebar-left style-2">
            <div className="sidebar-layout">
              <div className="sidebar-widget widget-shop-filter">
                <FilterToggle />
                <SanityFilterSidebar {...filterProps} />
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="shop-layout-list-product">
              <div className="wg-filter">
                <div className="shop-control-bar">
                  <div className="shop-control-bar-item shop-showing-result">
                    <p>
                      Showing {startIndex + 1}–{Math.min(endIndex, sorted.length)} of{" "}
                      {sorted.length} results
                    </p>
                  </div>
                  <LayoutHandler
                    activeLayout={activeLayout}
                    onLayoutChange={setActiveLayout}
                    {...allProps}
                  />
                </div>
                <div className="shop-filter-taglist">
                  <div className="list">
                    <div className="item-taglist">
                      <p>
                        <span
                          onClick={() => dispatch({ type: "RESET_FILTER" })}
                          className="cursor-pointer"
                        >
                          Clear all
                        </span>
                      </p>
                    </div>
                    {selectedCategories.map((category, index) => (
                      <div key={index} className="item-taglist">
                        <p>
                          {category}
                          <span
                            className="remove"
                            onClick={() => {
                              const updated = selectedCategories.filter(cat => cat !== category);
                              dispatch({ type: "SET_CATEGORIES", payload: updated });
                            }}
                          >
                            ×
                          </span>
                        </p>
                      </div>
                    ))}
                    {price[0] != 0 || price[1] != 10000 ? (
                      <div className="item-taglist">
                        <p>
                          Price: ${price[0]} - ${price[1]}
                          <span
                            className="remove"
                            onClick={() => dispatch({ type: "SET_PRICE", payload: [0, 10000] })}
                          >
                            ×
                          </span>
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>

              {currentProducts.length === 0 ? (
                <div className="text-center p-5">
                  <h3>No products found</h3>
                  <p>Try adjusting your filters or search criteria.</p>
                </div>
              ) : (
                <div className="wrapper-control-shop">
                  <div
                    className={`meta-filter-shop ${
                      activeLayout === 3
                        ? "product-grid-3"
                        : activeLayout === 4
                        ? "product-grid-4"
                        : activeLayout === 5
                        ? "product-grid-5"
                        : ""
                    } list-layout-${activeLayout}`}
                  >
                    {currentProducts.map((product) => (
                      <div key={product._id} className="item-product">
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(page) => allProps.setCurrentPage(page)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <QuickView />
    </div>
  );
}