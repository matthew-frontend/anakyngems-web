import React from "react";
import RangeSlider from "./RangeSlider";

export default function SanityFilterSidebar({
  categories = [],
  selectedCategories = [],
  price = [0, 10000],
  products = [],
  setPrice,
  setCategories,
}) {
  const hasFilters = selectedCategories.length > 0 || (price[0] !== 0 || price[1] !== 10000);

  // Calculate product counts for each category
  const getCategoryCount = (categoryTitle) => {
    return products.filter(product => {
      const productCategory = product.category?.title || '';
      return productCategory === categoryTitle;
    }).length;
  };

  return (
    <div id="FilterSidebar">
      <div className="widget-filter-item filter-size style-2">
        <div className="tf-filter-content">
          <div className="widget-filter-list style-2">
            <p className="title h6 fw-normal text-uppercase">Applied Filters</p>
            {!hasFilters && (
              <div id="product-count-grid" className="count-text text-main-4">
                No Filter Selected
              </div>
            )}
            <div className="meta-filter-shop">
              <div className="list">
                {selectedCategories.map((category, index) => (
                  <div key={index} className="item-taglist">
                    <p>
                      {category}
                      <span
                        className="remove"
                        onClick={() => {
                          const updated = selectedCategories.filter(cat => cat !== category);
                          setCategories(updated);
                        }}
                      >
                        ×
                      </span>
                    </p>
                  </div>
                ))}
                {(price[0] !== 0 || price[1] !== 10000) && (
                  <div className="item-taglist">
                    <p>
                      Price: ${price[0]} - ${price[1]}
                      <span
                        className="remove"
                        onClick={() => setPrice([0, 10000])}
                      >
                        ×
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="widget-filter-item filter-category mb_30">
        <div className="tf-filter-content">
          <div className="widget-filter-list style-2">
            <p className="title h6 fw-normal text-uppercase">Categories</p>
            <ul className="scroll-style tf-filter-list-type-2" style={{ maxHeight: '200px', overflowY: 'auto' }}>
              {categories.map((category, index) => {
                const isSelected = selectedCategories.includes(category.title);
                const count = getCategoryCount(category.title);
                
                return (
                  <li key={index} className="list-item">
                    <div className="box-checkbox">
                      <input
                        className="checkbox"
                        type="checkbox"
                        id={`category-${index}`}
                        checked={isSelected}
                        onChange={() => {
                          const updated = isSelected
                            ? selectedCategories.filter(cat => cat !== category.title)
                            : [...selectedCategories, category.title];
                          setCategories(updated);
                        }}
                      />
                      <label htmlFor={`category-${index}`} className="box-filter-item">
                        <span className="title">
                          {category.title}
                        </span>
                        <span className="count">({count})</span>
                      </label>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Price Filter */}
      <div className="widget-filter-item filter-price">
        <div className="tf-filter-content">
          <div className="widget-filter-list style-2">
            <p className="title h6 fw-normal text-uppercase">Price</p>
            <div id="values-filter" className="fw-normal text-main-2">
              <span id="slider-range-value1" className="fw-normal text-main-3">
                ${price[0]}
              </span>
              <span> - </span>
              <span id="slider-range-value2" className="fw-normal text-main-3">
                ${price[1]}
              </span>
            </div>
            <RangeSlider
              min={0}
              max={10000}
              step={50}
              values={price}
              onChange={setPrice}
            />
          </div>
        </div>
      </div>
    </div>
  );
}