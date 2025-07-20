import { products15 } from "@/data/products";
import React from "react";

export default function Sidebar({ allProps }) {
  return (
    <div className="canvas-wrapper">
      <div className="canvas-header d-flex d-xl-none">
        <span className="title">FILTER</span>
        <span
          className="icon-close link icon-close-popup"
          data-bs-dismiss="offcanvas"
        />
      </div>
      <div className="canvas-body">
        <div className="apply-filter-wrap">
          <div className="meta-filter-shop">
            <div id="applied-filters">
              {allProps.categories.length > 0 &&
                allProps.categories.map((category) => (
                  <span
                    key={category}
                    className="filter-tag remove-tag"
                    onClick={() => allProps.removeCategory(category)}
                  >
                    {category
                      ?.split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}{" "}
                    <span className="icon icon-close" />
                  </span>
                ))}
              {allProps.price !== "All" && (
                <span
                  className="filter-tag remove-tag"
                  data-filter="priceRadio"
                  onClick={() => allProps.setPrice("All")}
                >
                  {allProps.price === "u-500"
                    ? "Under $500"
                    : allProps.price === "u-1000"
                    ? "Under $1000"
                    : allProps.price === "u-2000"
                    ? "Under $2000"
                    : allProps.price === "up-2000"
                    ? "Over $2000"
                    : null}{" "}
                  <span className="icon icon-close" />
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="widget-facet">
          <div
            className="facet-title h6 fw-normal"
            data-bs-target="#categories"
            role="button"
            data-bs-toggle="collapse"
            aria-expanded="true"
            aria-controls="categories"
          >
            <span className="h6 fw-normal text-uppercase">category</span>
            <span className="icon ic-accordion-custom" />
          </div>
          <div id="categories" className="collapse show">
            <ul className="collapse-body filter-group-check current-scrollbar">
              {[
                "bracelet",
                "earring",
                "ring",
                "necklace",
                "new-in",
                "gift-idea",
              ].map((category) => (
                <li
                  className="list-item"
                  key={category}
                  onClick={() => allProps.setCategories(category)}
                >
                  <input
                    type="checkbox"
                    className="tf-check style-2"
                    checked={allProps.categories.includes(category)}
                    readOnly
                  />
                  <label className="label">
                    <span>
                      {category
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </span>
                    <span className="count-wrap">
                      [{" "}
                      <span className="count">
                        {
                          products15.filter((el) => el.category == category)
                            .length
                        }
                      </span>{" "}
                      ]
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="widget-facet">
          <div
            className="facet-title h6 fw-normal"
            data-bs-target="#price"
            role="button"
            data-bs-toggle="collapse"
            aria-expanded="true"
            aria-controls="price"
          >
            <span className="h6 fw-normal text-uppercase">price</span>
            <span className="icon ic-accordion-custom" />
          </div>
          <div id="price" className="collapse show">
            <ul className="collapse-body filter-group-check current-scrollbar">
              {[
                { id: "u-500", label: "Under $500" },
                { id: "u-1000", label: "Under $1000" },
                { id: "u-2000", label: "Under $2000" },
                { id: "up-2000", label: "Over $2000" },
              ].map((option) => (
                <li
                  className="list-item"
                  key={option.id}
                  onClick={() => allProps.setPrice(option.id)}
                >
                  <input
                    type="radio"
                    checked={allProps.price === option.id}
                    className="tf-check style-2"
                    readOnly
                  />
                  <label className="label">
                    <span>{option.label}</span>
                    <span className="count-wrap">
                      [{" "}
                      <span className="count">
                        {option.id.includes("up")
                          ? [...products15].filter(
                              (elm) =>
                                elm.price >= Number(option.id.split("-")[1])
                            ).length
                          : [...products15].filter(
                              (elm) =>
                                elm.price <= Number(option.id.split("-")[1])
                            ).length}
                      </span>{" "}
                      ]
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="canvas-bottom d-xl-none">
        <button
          id="reset-filter"
          className="tf-btn btn-reset"
          onClick={allProps.clearFilter}
        >
          <span className="fw-medium">CLEAR ALL</span>
        </button>
        <button
          type="button"
          className="tf-btn btn-fill animate-btn"
          data-bs-dismiss="offcanvas"
        >
          <span className="fw-medium">APPLY [100]</span>
        </button>
      </div>
    </div>
  );
}
