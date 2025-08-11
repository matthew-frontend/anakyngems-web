import React from "react";

export default function DescriptionSideAccordion({ product }) {
  // Get the first variant for additional information
  const variant = product?.variants?.[0] || {};

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
                {variant.color && (
                  <tr>
                    <td className="h6 thai-text">สี</td>
                    <td className="h6 thai-text">{variant.color}</td>
                  </tr>
                )}
                {variant.weight && (
                  <tr>
                    <td className="h6 thai-text">น้ำหนัก</td>
                    <td className="h6 thai-text">{variant.weight}</td>
                  </tr>
                )}
                {variant.material && (
                  <tr>
                    <td className="h6 thai-text">วัสดุ</td>
                    <td className="h6">{variant.material}</td>
                  </tr>
                )}
                {(!variant.color && !variant.weight && !variant.material) && (
                  <tr>
                    <td className="h6 text-main-4 fw-normal bg-transparent border-0 p-0" colSpan="2">ไม่มีข้อมูลเพิ่มเติม</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
