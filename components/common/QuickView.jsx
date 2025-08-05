"use client";

import { useContextElement } from "@/context/Context";

export default function QuickView({ tooltipDirection = "left", product, ...props }) {
  const { setQuickViewItem } = useContextElement();
  return (
    <a
      href="#quickView"
      data-bs-toggle="modal"
      onClick={() => {
        if (product) {
          setQuickViewItem(product);
        }
      }}
      className="hover-tooltip tooltip-left box-icon quickview"
      aria-label={`Quick view ${product?.title || 'product'}`}
      role="button"
      style={{
        minHeight: '44px',
        minWidth: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      {...props}
    >
      <span className="icon icon-view" aria-hidden="true" />
      <span className="tooltip">Quick View</span>
    </a>
  );
}
