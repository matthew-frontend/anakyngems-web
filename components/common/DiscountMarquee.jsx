import React from "react";

export default function DiscountMarquee({
  parentClass = "marquee-sale type-2 infiniteSlide infiniteSlider2",
  variantText = "30% OFF, Selling fast",
}) {
  const parts = variantText.includes(', ') ? variantText.split(', ') : [variantText, "Selling fast"];
  return (
    <div className={parentClass + " infiniteSlider2"}>
      {/* clone 1 */}
      <p
        className="text-caption text-white"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[0]}
      </p>
      <i
        className="icon-thunder text-white"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      {/* clone 2 */}
      <p
        className="text-caption text-white"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[1]}
      </p>
      <i
        className="icon-thunder text-white"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      {/* clone 3 */}
      <p
        className="text-caption text-white"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[0]}
      </p>
      <i
        className="icon-thunder text-white"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      {/* clone 4 */}
      <p
        className="text-caption text-white"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[1]}
      </p>
      <i
        className="icon-thunder text-white"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      {/* clone 5 */}
      <p
        className="text-caption text-white"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[0]}
      </p>
      <i
        className="icon-thunder text-white"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      {/* clone 6 */}
      <p
        className="text-caption text-white"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[1]}
      </p>
      <i
        className="icon-thunder text-white"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      <p
        className="text-caption text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[0]}
      </p>
      <i
        className="icon-thunder text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      <p
        className="text-caption text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[1]}
      </p>
      <i
        className="icon-thunder text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      <p
        className="text-caption text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[0]}
      </p>
      <i
        className="icon-thunder text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      <p
        className="text-caption text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[1]}
      </p>
      <i
        className="icon-thunder text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      <p
        className="text-caption text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[0]}
      </p>
      <i
        className="icon-thunder text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      <p
        className="text-caption text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[1]}
      </p>
      <i
        className="icon-thunder text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      <p
        className="text-caption text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[0]}
      </p>
      <i
        className="icon-thunder text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      <p
        className="text-caption text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[1]}
      </p>
      <i
        className="icon-thunder text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      <p
        className="text-caption text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[0]}
      </p>
      <i
        className="icon-thunder text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      <p
        className="text-caption text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[1]}
      </p>
      <i
        className="icon-thunder text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      <p
        className="text-caption text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[0]}
      </p>
      <i
        className="icon-thunder text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      <p
        className="text-caption text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[1]}
      </p>
      <i
        className="icon-thunder text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      <p
        className="text-caption text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[0]}
      </p>
      <i
        className="icon-thunder text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      <p
        className="text-caption text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[1]}
      </p>
      <i
        className="icon-thunder text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      <p
        className="text-caption text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[0]}
      </p>
      <i
        className="icon-thunder text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      <p
        className="text-caption text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[1]}
      </p>
      <i
        className="icon-thunder text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      <p
        className="text-caption text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[0]}
      </p>
      <i
        className="icon-thunder text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      />
      <p
        className="text-caption text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      >
{parts[1]}
      </p>
      <i
        className="icon-thunder text-white infiniteslide_clone"
        style={{ flex: "0 0 auto", display: "block" }}
      />
    </div>
  );
}
