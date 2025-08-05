import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Service() {
  return (
    <div className="flat-spacing-12">
      <div className="flat-spacing-5 pt-0">
        <div className="container">
          <div className="banner_V03 hover-img4">
            <div className="bn-image img-style4">
              <Image
                src="/images/home/service-2.webp"
                alt=""
                className="lazyload"
                width={1488}
                height={1416}
              />
            </div>
            <div className="bn-content wow fadeInUp">
              <h2 className="fw-normal">
                <Link href={`/contact-us`} className="title">
                  The Modern <br className="d-none d-xl-block" />
                  Bride Collection
                </Link>
              </h2>
              <p className="sub-title text-main-8">
                Modern Elegance for the Contemporary Bride<br className="d-none d-xl-block" />
                A bespoke collection of wedding rings and fine jewelry,<br className="d-none d-xl-block" />
                made to honor your love and your once-in-a-lifetime moment.
                {/* Redefining bridal elegance with contemporary designs that
                radiate <br className="d-none d-xl-block" />
                sophistication. Celebrate your big day with jewelry as unique as
                your <br className="d-none d-xl-block" />
                love story. */}
              </p>
              <Link
                href={`/faq`}
                className="tf-btn btn-def-2 type-large px-0"
              >
                Read more
                <i className="icon icon-arrow-right-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="banner_V03 hover-img4 flex-wrap-reverse">
          <div className="bn-content wow fadeInUp">
            <h2 className="fw-normal">
              <Link href={`/contact-us`} className="title">
                The Art of <br className="d-none d-xl-block" />
                Stack Collection
              </Link>
            </h2>
            <p className="sub-title text-main-8">
              The Art of Personalized Stacking<br className="d-none d-xl-block" />
              Celebrate your unique style with custom-made rings designed for effortless layering.<br className="d-none d-xl-block" />
              Crafted exclusively for you — every piece tells your story.

              {/* Express your individuality with stackable rings, bracelets, and
              necklaces.
              <br className="d-none d-xl-block" />
              Mix, match, and layer to create a style that's entirely your own. */}
            </p>
            <Link
              href={`/faq`}
              className="tf-btn btn-def-2 type-large px-0"
            >
              Read more
              <i className="icon icon-arrow-right-3" />
            </Link>
          </div>
          <div className="bn-image img-style4">
            <Image
              src="/images/home/service-3.webp"
              alt=""
              className="lazyload"
              width={1488}
              height={1416}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
