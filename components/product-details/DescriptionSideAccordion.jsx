import React from "react";
import Image from "next/image";

export default function DescriptionSideAccordion({ product }) {
  // Get the first variant for additional information
  const variant = product?.variants?.[0] || {};

  // Function to get material image and info based on color
  const getMaterialInfo = (color) => {
    if (!color) return null;
    
    const colorLower = color.toLowerCase();
    
    switch (colorLower) {
      case 'silver':
        return {
          imageSrc: '/icon/material-gray.jpg',
          alt: 'Silver',
          tooltip: 'Silver'
        };
      case 'gold':
        return {
          imageSrc: '/icon/material-gold.jpg',
          alt: 'Gold',
          tooltip: 'Gold'
        };
      default:
        return {
          imageSrc: '/icon/material-gray.jpg',
          alt: color,
          tooltip: color
        };
    }
  };

  const materialInfo = getMaterialInfo(variant.color);

  return (
    <div className="tf-product-accordion">
      {/* Additional Information Section */}
      <div className="widget-accordion-2 style-3">
        <div
          className="accordion-title"
          data-bs-target="#material"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="material"
          role="button"
        >
          <span>additional information</span>
          <span className="icon ic-accordion-custom" />
        </div>
        <div id="material" className="collapse show widget-material">
          <div className="accordion-body">
            <table className="table-material">
              <tbody>
                <tr>
                  <td className="h6">Color</td>
                  <td className="h6">
                    {variant.color && materialInfo ? (
                      <div className="variant-picker-item variant-color">
                        <div
                          className="hover-tooltip color-btn style-image-square"
                          data-color={variant.color.toLowerCase()}
                        >
                          <span className="check-color">
                            <Image
                              alt={materialInfo.alt}
                              src={materialInfo.imageSrc}
                              width={100}
                              height={100}
                            />
                          </span>
                          <span className="tooltip">{materialInfo.tooltip}</span>
                        </div>
                      </div>
                    ) : (
                      <span>-</span>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="h6">Diamond Weight</td>
                  <td className="h6">{variant.weight || '-'}</td>
                </tr>
                <tr>
                  <td className="h6">Material</td>
                  <td className="h6">{variant.material || '-'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
