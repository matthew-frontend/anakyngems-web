"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContextElement } from "@/context/Context";
import { Navigation } from "swiper/modules";
export default function QuickView() {

  const {
    quickViewItem,
  } = useContextElement();
  const getProductImages = () => {
    if (quickViewItem?.images && quickViewItem.images.length > 0) {
      return quickViewItem.images.map((img, index) => ({
        color: index === 0 ? "gold" : index === 1 ? "rose" : "titanium",
        src: img?.asset?.url || img // Support both Sanity format and old format
      }));
    } else if (quickViewItem?.imgSrc) {
      return [{ color: "gold", src: quickViewItem.imgSrc }];
    }
    // Return empty array if no images - component should handle gracefully
    return [];
  };

  return (
    <div className="modal modalCentered fade modal-quick-view" id="quickView">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <span
            className="icon-close icon-close-popup"
            data-bs-dismiss="modal"
          />
          <div className="tf-product-media-wrap tf-btn-swiper-item">
            {getProductImages().length > 0 ? (
              <Swiper
                dir="ltr"
                modules={[Navigation]}
                navigation={{
                  prevEl: ".snbqvp1",
                  nextEl: ".snbqvn1",
                }}
                className="swiper tf-single-slide"
              >
                {getProductImages().map((item, index) => (
                  <SwiperSlide
                    className="swiper-slide"
                    data-color={item.color}
                    key={index}
                  >
                    <div className="item">
                      <Image
                        className="lazyload"
                        data-src={item.src}
                        alt=""
                        width={1000}
                        height={1000}
                        src={item.src}
                      />
                    </div>
                  </SwiperSlide>
                ))}
                <div className="nav-swiper-group style-2">
                  <div className="nav-thumbs thumbs-prev single-slide-prev snbqvp1">
                    <span className="fw-normal">PRE</span>
                  </div>
                  <span className="text-main">/</span>
                  <div className="nav-thumbs thumbs-next single-slide-next snbqvn1">
                    <span className="fw-normal">NEXT</span>
                  </div>
                </div>
              </Swiper>
            ) : (
              <div className="no-image-placeholder">
                <p>No images available</p>
              </div>
            )}
          </div>
          <div className="tf-product-info-wrap">
            <div className="tf-product-info-inner tf-product-info-list">
              <div className="tf-product-info-heading">
                <Link
                  href={`/products/${quickViewItem?.slug?.current || quickViewItem?._id || quickViewItem?.id || 'product'}`}
                  className="product-info-name h4 fw-normal text-uppercase link"
                >
                  {quickViewItem?.title || 'Product Name'}
                </Link>
                <div className="product-info-price">
                  <div className="price-wrap">
                    <span className="price-new price-on-sale h4">
                      ฿{quickViewItem?.price?.toLocaleString('en-US') || '0'}
                    </span>
                    {quickViewItem?.oldPrice && (
                      <span className="price-old compare-at-price fw-normal h6">
                        ฿{quickViewItem.oldPrice.toLocaleString('en-US')}
                      </span>
                    )}
                    {quickViewItem?.oldPrice && quickViewItem?.oldPrice > quickViewItem?.price && (
                      <p className="badges-on-sale">
                        <i className="icon-tag" />
                        <span className="number-sale" data-person-sale={Math.round((quickViewItem.oldPrice - quickViewItem.price) / quickViewItem.oldPrice * 100)}>
                          {Math.round((quickViewItem.oldPrice - quickViewItem.price) / quickViewItem.oldPrice * 100)}% OFF
                        </span>
                      </p>
                    )}
                  </div>
                </div>
                <p className="product-infor-sub text-main-4">
                  {quickViewItem?.description || "Beautiful jewelry piece crafted with precision and care."}
                </p>
              </div>
              <Link
                href={`/products/${quickViewItem?.slug?.current || quickViewItem?._id || quickViewItem?.id || 'product'}`}
                className="tf-btn-line"
              >
                <span className="text-body">View full details</span>
                <i className="icon icon-arrow-top-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
