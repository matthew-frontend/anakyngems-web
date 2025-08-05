"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const Breadcrumb = ({ customItems = null, productTitle = null, blogTitle = null, pageTitle = null, showTitle = true }) => {
  const pathname = usePathname();

  const breadcrumbItems = useMemo(() => {
    // If custom items provided, use them
    if (customItems) {
      return [{ href: "/", label: "Home" }, ...customItems];
    }

    // Generate breadcrumb from pathname
    const pathSegments = pathname.split("/").filter(segment => segment);
    const items = [{ href: "/", label: "Home" }];

    let currentPath = "";
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Handle different page types
      let label = segment;
      let href = currentPath;
      
      // Decode URL segments
      segment = decodeURIComponent(segment);
      
      // Custom labels for known routes
      switch (segment) {
        case "products":
          label = "Products";
          break;
        case "behind-brand":
          label = "Behind Brand";
          break;
        case "about-us":
          label = "About Us";
          break;
        case "contact-us":
          label = "Contact Us";
          break;
        case "our-story":
          label = "Our Story";
          break;
        case "faq":
          label = "FAQ";
          break;
        default:
          // For product/blog IDs, use custom titles if provided
          if (index === pathSegments.length - 1) {
            if (productTitle) {
              label = productTitle;
            } else if (blogTitle) {
              label = blogTitle;
            } else {
              // Capitalize and format segment
              label = segment
                .replace(/-/g, " ")
                .replace(/\b\w/g, char => char.toUpperCase());
            }
          } else {
            label = segment
              .replace(/-/g, " ")
              .replace(/\b\w/g, char => char.toUpperCase());
          }
      }
      
      items.push({ href, label });
    });

    return items;
  }, [pathname, customItems, productTitle, blogTitle]);

  if (breadcrumbItems.length <= 1) {
    return null; // Don't show breadcrumb on homepage
  }

  // Get the page title for H1
  const displayTitle = pageTitle || productTitle || blogTitle || breadcrumbItems[breadcrumbItems.length - 1]?.label;

  return (
    <div className="flat-spacing-16 pb-0">
      <div className="container">
        <div className="page-title border-0">
          <div className="breadcrumbs">
            <ul className="bread-wrap mb-0">
              {breadcrumbItems.map((item, index) => {
                const isLast = index === breadcrumbItems.length - 1;
                
                return (
                  <React.Fragment key={`breadcrumb-${index}`}>
                    <li>
                      {!isLast ? (
                        <Link 
                          href={item.href} 
                          className="text-main-4 link-secondary"
                          itemProp="item"
                        >
                          <span itemProp="name">{item.label}</span>
                        </Link>
                      ) : (
                        <span itemProp="name">{item.label}</span>
                      )}
                    </li>
                    {!isLast && <li className="br-line w-12 bg-main" />}
                  </React.Fragment>
                );
              })}
            </ul>
            {showTitle && displayTitle && (
              <h1 className="heading fw-normal text-uppercase">
                {displayTitle}
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;