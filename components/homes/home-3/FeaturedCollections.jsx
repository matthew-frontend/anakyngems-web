import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function FeaturedCollections() {
  return (
    <section className="flat-spacing pt-0">
      <div className="container">
        <div className="sect-top center text-center wow fadeInUp">
          <h2 className="s-title font-2 text-capitalize">
            <span className="fst-italic">Featured</span> Collections
          </h2>
          <p className="s-sub-title">
            Explore our collection of sophisticated, modern designs that make a
            statement without saying a word.
            <br className="d-none d-xl-block" />
            Find your signature look today.
          </p>
        </div>
        <div className="flat-animate-tab cls-tablist">
          <ul className="tab-cls" role="tablist">
            <li className="nav-tab-item" role="presentation">
              <div
                data-bs-toggle="tab"
                className="tf-btn-tab active hover-cursor-img"
                data-bs-target="#new-in"
              >
                <span className="text h3">
                  NEW IN <span className="count">12</span>
                </span>
                <Link
                  href={`/products?category=new-in`}
                  className="icon icon-arrow-top-right"
                />
                <div className="hover-image">
                  <Image
                    alt="Hover Image"
                    src="https://vemusnextjs.vercel.app/images/collections/tab-1.jpg"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </li>
            <li className="nav-tab-item" role="presentation">
              <div
                data-bs-toggle="tab"
                className="tf-btn-tab hover-cursor-img"
                data-bs-target="#bracelet"
              >
                <span className="text h3">
                  BRACELETS <span className="count">9</span>
                </span>
                <Link
                  href={`/products?category=bracelet`}
                  className="icon icon-arrow-top-right"
                />
                <div className="hover-image">
                  <Image
                    alt="Hover Image"
                    src="https://www.chaichalermgold.comhttps://vemusnextjs.vercel.app/images/contact.jpg"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </li>
            <li className="nav-tab-item" role="presentation">
              <div
                data-bs-toggle="tab"
                className="tf-btn-tab hover-cursor-img"
                data-bs-target="#earring"
              >
                <span className="text h3">
                  EARRINGS <span className="count">16</span>
                </span>
                <Link
                  href={`/products?category=earring`}
                  className="icon icon-arrow-top-right"
                />
                <div className="hover-image">
                  <Image
                    alt="Hover Image"
                    src="https://vemusnextjs.vercel.app/images/collections/tab-1.jpg"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </li>
            <li className="nav-tab-item" role="presentation">
              <div
                data-bs-toggle="tab"
                className="tf-btn-tab hover-cursor-img"
                data-bs-target="#ring"
              >
                <span className="text h3">
                  RINGS <span className="count">25</span>
                </span>
                <Link
                  href={`/products?category=ring`}
                  className="icon icon-arrow-top-right"
                />
                <div className="hover-image">
                  <Image
                    alt="Hover Image"
                    src="https://www.chaichalermgold.comhttps://vemusnextjs.vercel.app/images/contact.jpg"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </li>
            <li className="nav-tab-item" role="presentation">
              <div
                data-bs-toggle="tab"
                className="tf-btn-tab hover-cursor-img"
                data-bs-target="#necklace"
              >
                <span className="text h3">
                  NECKLACES <span className="count">11</span>
                </span>
                <Link
                  href={`/products?category=necklace`}
                  className="icon icon-arrow-top-right"
                />
                <div className="hover-image">
                  <Image
                    alt="Hover Image"
                    src="https://vemusnextjs.vercel.app/images/collections/tab-1.jpg"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </li>
          </ul>
          <div className="tab-content wow fadeInUp">
            <div className="tab-pane active show" id="new-in" role="tabpanel">
              <Link
                href={`/products?category=new-in`}
                className="shape-image hover-img"
              >
                <div className="image img-style z-5 position-relative">
                  <Image
                    src="https://vemusnextjs.vercel.app/images/collections/tab-1.jpg"
                    alt="Banner"
                    className="lazyload"
                    width={1000}
                    height={1000}
                  />
                </div>
                <span className="line-circle" />
              </Link>
            </div>
            <div className="tab-pane" id="bracelet" role="tabpanel">
              <Link
                href={`/products?category=bracelet`}
                className="shape-image hover-img"
              >
                <div className="image img-style z-5 position-relative">
                  <Image
                    src="https://www.chaichalermgold.comhttps://vemusnextjs.vercel.app/images/contact.jpg"
                    alt="Banner"
                    className="lazyload"
                    width={1000}
                    height={1000}
                  />
                </div>
                <span className="line-circle" />
              </Link>
            </div>
            <div className="tab-pane" id="earring" role="tabpanel">
              <Link
                href={`/products?category=earring`}
                className="shape-image hover-img"
              >
                <div className="image img-style z-5 position-relative">
                  <Image
                    src="https://vemusnextjs.vercel.app/images/collections/tab-1.jpg"
                    alt="Banner"
                    className="lazyload"
                    width={1000}
                    height={1000}
                  />
                </div>
                <span className="line-circle" />
              </Link>
            </div>
            <div className="tab-pane" id="ring" role="tabpanel">
              <Link
                href={`/products?category=ring`}
                className="shape-image hover-img"
              >
                <div className="image img-style z-5 position-relative">
                  <Image
                    src="https://www.chaichalermgold.comhttps://vemusnextjs.vercel.app/images/contact.jpg"
                    alt="Banner"
                    className="lazyload"
                    width={1000}
                    height={1000}
                  />
                </div>
                <span className="line-circle" />
              </Link>
            </div>
            <div className="tab-pane" id="necklace" role="tabpanel">
              <Link
                href={`/products?category=necklace`}
                className="shape-image hover-img"
              >
                <div className="image img-style z-5 position-relative">
                  <Image
                    src="https://vemusnextjs.vercel.app/images/collections/tab-1.jpg"
                    alt="Banner"
                    className="lazyload"
                    width={1000}
                    height={1000}
                  />
                </div>
                <span className="line-circle" />
              </Link>
            </div>
            <div className="tab-pane" id="gift-idea" role="tabpanel">
              <Link
                href={`/products?category=gift-idea`}
                className="shape-image hover-img"
              >
                <div className="image img-style z-5 position-relative">
                  <Image
                    src="https://www.chaichalermgold.comhttps://vemusnextjs.vercel.app/images/contact.jpg"
                    alt="Banner"
                    className="lazyload"
                    width={1000}
                    height={1000}
                  />
                </div>
                <span className="line-circle" />
              </Link>
            </div>
            <div className="tab-pane" id="personalize" role="tabpanel">
              <Link
                href={`/products`}
                className="shape-image hover-img"
              >
                <div className="image img-style z-5 position-relative">
                  <Image
                    src="https://vemusnextjs.vercel.app/images/collections/tab-1.jpg"
                    alt="Banner"
                    className="lazyload"
                    width={1000}
                    height={1000}
                  />
                </div>
                <span className="line-circle" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
