"use client";
import { products15 } from "@/data/products";
import React from "react";
import DiscountMarquee from "../common/DiscountMarquee";
import QuickView from "../common/QuickView";
import { initialState, reducer } from "@/reducer/filterReducer";
import { useEffect, useReducer, useState } from "react";
import FilterSidebar from "./FilterSidebar";
import LayoutHandler from "./LayoutHandler";
import Sidebar from "./Sidebar";
import Pagination from "../common/Pagination";
import Link from "next/link";
import FilterToggle from "./FilterToggler";
import { useSearchParams } from "next/navigation";
export default function Products2() {
  const [activeLayout, setActiveLayout] = useState(3);
  const [state, dispatch] = useReducer(reducer, initialState);
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const {
    price,
    categories,
    filtered,
    sortingOption,
    sorted,

    currentPage,
    itemPerPage,
  } = state;

  const allProps = {
    ...state,
    setPrice: (value) => dispatch({ type: "SET_PRICE", payload: value }),

    setCategories: (newCategory) => {
      const updated = [...categories].includes(newCategory)
        ? [...categories].filter((elm) => elm != newCategory)
        : [...categories, newCategory];
      dispatch({ type: "SET_CATEGORIES", payload: updated });
    },
    removeCategory: (newCategory) => {
      const updated = [...categories].filter(
        (category) => category != newCategory
      );

      dispatch({ type: "SET_CATEGORIES", payload: updated });
    },
    setSortingOption: (value) =>
      dispatch({ type: "SET_SORTING_OPTION", payload: value }),
    toggleFilterWithOnSale: () => dispatch({ type: "TOGGLE_FILTER_ON_SALE" }),
    setCurrentPage: (value) =>
      dispatch({ type: "SET_CURRENT_PAGE", payload: value }),
    setItemPerPage: (value) => {
      dispatch({ type: "SET_CURRENT_PAGE", payload: 1 }),
        dispatch({ type: "SET_ITEM_PER_PAGE", payload: value });
    },
    clearFilter: () => {
      dispatch({ type: "CLEAR_FILTER" });
    },
  };

  // Set category from URL parameter on component mount
  useEffect(() => {
    if (categoryParam && !categories.includes(categoryParam)) {
      dispatch({ type: "SET_CATEGORIES", payload: [categoryParam] });
    }
  }, [categoryParam]);

  useEffect(() => {
    let filteredArrays = [];

    if (categories.length) {
      const filteredByCategories = [...products15].filter((elm) =>
        categories.includes(elm.category)
      );
      filteredArrays = [...filteredArrays, filteredByCategories];
    }

    if (price.includes("u-")) {
      const filteredByPrice = [...products15].filter(
        (elm) => elm.price >= Number(price.split("-")[1])
      );
      filteredArrays = [...filteredArrays, filteredByPrice];
    } else if (price.includes("up-")) {
      const filteredByPrice = [...products15].filter(
        (elm) => elm.price <= Number(price.split("-")[1])
      );
      filteredArrays = [...filteredArrays, filteredByPrice];
    }

    const commonItems = [...products15].filter((item) =>
      filteredArrays.every((array) => array.includes(item))
    );
    dispatch({ type: "SET_FILTERED", payload: commonItems });
  }, [price, categories]);

  useEffect(() => {
    if (sortingOption === "Price Ascending") {
      dispatch({
        type: "SET_SORTED",
        payload: [...filtered].sort((a, b) => a.price - b.price),
      });
    } else if (sortingOption === "Price Descending") {
      dispatch({
        type: "SET_SORTED",
        payload: [...filtered].sort((a, b) => b.price - a.price),
      });
    } else if (sortingOption === "Title Ascending") {
      dispatch({
        type: "SET_SORTED",
        payload: [...filtered].sort((a, b) => a.title.localeCompare(b.title)),
      });
    } else if (sortingOption === "Title Descending") {
      dispatch({
        type: "SET_SORTED",
        payload: [...filtered].sort((a, b) => b.title.localeCompare(a.title)),
      });
    } else {
      dispatch({ type: "SET_SORTED", payload: filtered });
    }
    dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
  }, [filtered, sortingOption]);
  return (
    <>
      <div className="flat-spacing pt-0">
        <div className="tf-shop-control style-2 mb_10">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-3">
                <div className="tf-control-filter justify-content-between pe-xxl-30">
                  <FilterToggle />
                  <button
                    id="reset-filter"
                    className="tf-btn-line d-none d-xl-flex"
                    onClick={allProps.clearFilter}
                  >
                    <span className="text-body">Clear all</span>
                  </button>
                </div>
              </div>
              <div className="col-9">
                <div className="tf-group-layout justify-content-end">
                  <ul className="tf-control-layout">
                    <LayoutHandler
                      setActiveLayout={setActiveLayout}
                      activeLayout={activeLayout}
                    />
                  </ul>
                  <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
                    <div className="btn-select">
                      <span className="text-sort-value">{sortingOption}</span>
                      <span className="icon icon-arrow-angle-down" />
                    </div>
                    <div className="dropdown-menu">
                      {[
                        "Sort by (Default)",
                        "Title Ascending",
                        "Title Descending",
                        "Price Ascending",
                        "Price Descending",
                      ].map((option, i) => (
                        <div
                          onClick={() => allProps.setSortingOption(option)}
                          key={i}
                          className={`select-item ${
                            sortingOption === option ? "active" : ""
                          }`}
                        >
                          <span className="text-value-item">{option}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="canvas-sidebar sidebar-filter canvas-filter left pe-xxl-30">
                <Sidebar allProps={allProps} />
              </div>
            </div>
            <div className="col-xl-9">
              <div className="wrapper-control-shop gridLayout-wrapper">
                <div
                  className={`wrapper-shop tf-grid-layout tf-col-${activeLayout}`}
                  id="gridLayout"
                >
                  {sorted
                    ?.slice(
                      (currentPage - 1) * itemPerPage,
                      currentPage * itemPerPage
                    )
                    .map((product) => (
                    <div
                      key={product.id}
                      className={`loadItem card_product--V01 grid ${
                        product.outOfStock ? "out-of-stock" : ""
                      }`}
                      data-category={product.category}
                    >
                      <div className="card_product-wrapper">
                        <Link
                          href={`/products/${product.id}`}
                          className="product-img"
                        >
                          <img
                            src={product.images ? product.images[0] : product.imgSrc}
                            alt={product.title}
                            className="lazyload img-product"
                            width={714}
                            height={900}
                          />
                          {(product.images && product.images[1]) || product.hoverImgSrc ? (
                            <img
                              src={product.images ? product.images[1] : product.hoverImgSrc}
                              alt={product.title}
                              className="lazyload img-hover"
                              width={714}
                              height={900}
                            />
                          ) : null}
                        </Link>

                        {!product.outOfStock && (
                          <ul className="list-product-btn">
                            <li>
                              <QuickView product={product} />
                            </li>
                          </ul>
                        )}

                        {product.badge && (
                          <div className="badge-box">
                            <span className={`badge-item ${product.badgeType}`}>
                              {product.badge}
                            </span>
                          </div>
                        )}

                        {product.variantText && (
                          <div
                            className={`variant-box ${
                              product.variantType === "marquee"
                                ? "bg-primary"
                                : ""
                            }`}
                          >
                            {product.variantType === "notify" ? (
                              <a
                                href="#unavailable"
                                data-bs-toggle="modal"
                                className={`variant-box stock bg-main link ${product.textColor}`}
                              >
                                <p className="text-center d-none d-md-block">
                                  {product.variantText}
                                </p>
                                <p className="text-center d-md-none">
                                  Notify Me
                                </p>
                              </a>
                            ) : product.variantType === "text" ? (
                              <div className="size-box bg-light-gray text-center">
                                <p className="text-caption">
                                  {product.variantText}
                                </p>
                              </div>
                            ) : product.variantType === "marquee" ? (
                              <DiscountMarquee parentClass="marquee-sale  infiniteSlide infiniteSlider" />
                            ) : null}
                          </div>
                        )}
                      </div>

                      <div className="card_product-info">
                        <Link
                          href={`/products/${product.id}`}
                          className="name-product h5 fw-normal link text-line-clamp-2"
                        >
                          {product.title}
                        </Link>
                        <div className="price-wrap">
                          <span className="price-new h5">
                            ${product.price.toFixed(2)}
                          </span>
                          {product.oldPrice && (
                            <span className="price-old fw-normal">
                              ${product.oldPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Product 15 16 */}
                  {/* Pagination */}
                  <div className="wd-full tempo">
                    <Pagination
                      currentPage={currentPage}
                      totalPages={Math.ceil(sorted.length / itemPerPage)}
                      onPageChange={allProps.setCurrentPage}
                      totalItems={sorted.length}
                      itemPerPage={itemPerPage}
                      startIndex={(currentPage - 1) * itemPerPage}
                      endIndex={currentPage * itemPerPage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <FilterSidebar allProps={allProps} />
    </>
  );
}
