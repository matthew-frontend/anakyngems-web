"use client";
import React, { useState, useEffect } from "react";
import Grid1 from "./gallery/Gallery1";
import DescriptionSideAccordion from "./DescriptionSideAccordion";

export default function Details3({ product }) {
  const [activeColor, setActiveColor] = useState("gold");
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleShare = async (platform) => {
    const productTitle = product.title || 'สินค้าจาก ANAKYNGEMS';
    const productUrl = currentUrl;
    const shareText = `${productTitle} - ดูสินค้าที่ ANAKYNGEMS`;
    
    // For Facebook sharing, show a message about localhost limitation
    if (platform === 'facebook' && productUrl.includes('localhost')) {
      alert('📝 การแชร์ Facebook จะทำงานได้เต็มรูปแบบเมื่อเว็บไซต์อยู่บน domain จริง (production)\n\nสำหรับตอนนี้จะคัดลอกลิงก์ให้แทน');
      try {
        await navigator.clipboard.writeText(`${shareText}\n${productUrl}`);
        alert('🔗 ลิงก์ถูกคัดลอกแล้ว!');
      } catch (error) {
        prompt('คัดลอกลิงก์นี้:', `${shareText}\n${productUrl}`);
      }
      return;
    }
    
    // Check if Web Share API is supported (for mobile devices)
    if (platform === 'native' && navigator.share) {
      try {
        await navigator.share({
          title: productTitle,
          text: shareText,
          url: productUrl,
        });
        return;
      } catch (error) {
        console.log('Share cancelled');
        return;
      }
    }
    
    let shareUrl = "";
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(productUrl)}&text=${encodeURIComponent(shareText)}`;
        break;
      case 'instagram':
        // Copy to clipboard for Instagram
        try {
          await navigator.clipboard.writeText(`${shareText}\n${productUrl}`);
          alert('🔗 ลิงก์ถูกคัดลอกแล้ว! คุณสามารถนำไปแปะใน Instagram Story หรือ Bio ได้');
        } catch (error) {
          prompt('คัดลอกลิงก์นี้เพื่อแชร์ใน Instagram:', `${shareText}\n${productUrl}`);
        }
        return;
      case 'line':
        shareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(productUrl)}&text=${encodeURIComponent(shareText)}`;
        break;
      case 'copy':
        // Copy link to clipboard
        try {
          await navigator.clipboard.writeText(productUrl);
          alert('🔗 ลิงก์ถูกคัดลอกแล้ว!');
        } catch (error) {
          prompt('คัดลอกลิงก์นี้:', productUrl);
        }
        return;
      default:
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
    }
  };
  return (
    <section className="flat-spacing pt-0">
      <div className="tf-main-product section-image-zoom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Grid1
                product={product}
                activeColor={activeColor}
                setActiveColor={setActiveColor}
              />
            </div>
            <div className="col-md-6">
              <div className="tf-product-info-wrap sticky-top">
                <div className="tf-zoom-main sticky-top" />
                <div className="tf-product-info-list other-image-zoom">
                  <div className="tf-product-info-heading">
                    <h3 className="product-info-name fw-normal">
                      {product.title}
                    </h3>
                    <div className="product-info-price">
                      <div className="price-wrap">
                        <span className="price-new price-on-sale h4">
                          ฿{product.price.toLocaleString('en-US')}
                        </span>
                        {product.oldPrice && (
                          <span className="price-old compare-at-price fw-normal h6">
                            ฿{product.oldPrice.toLocaleString('en-US')}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="product-infor-sub h6 fw-normal text-main-4">
                      {product.description}
                    </p>
                  </div>
                  <div className="entry_social d-flex align-items-center gap-3">
                    <p>Share:</p>
                    <ul className="tf-social-icon">
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleShare('facebook');
                          }}
                          className="social-facebook"
                        >
                          <span className="icon">
                            <i className="icon-facebook" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleShare('instagram');
                          }}
                          className="social-instagram"
                        >
                          <span className="icon">
                            <i className="icon-instagram" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleShare('line');
                          }}
                          className="social-line"
                        >
                          <span className="icon">
                            <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24"><title>LINE</title><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleShare('copy');
                          }}
                          className="social-copy"
                          title="คัดลอกลิงก์"
                        >
                          <span className="icon">
                            <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24"><title>Copy Link</title><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <DescriptionSideAccordion product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
