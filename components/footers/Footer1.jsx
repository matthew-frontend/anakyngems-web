"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
const menuItems = [
  { name: "All Jewelry", category: null },
  { name: "Men's Ring", category: "men's ring" },
  { name: "Women Ring", category: "women ring" },
  { name: "Earrings", category: "earring" },
  { name: "Necklace", category: "necklace" },
  { name: "For Sale", category: "for-sale" },
];
export default function Footer1() {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };
  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || "An error occurred");
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };
  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-mobile");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");
      const content = parent.querySelector(".tf-collapse-content");

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + 10 + "px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount

  return (
    <footer className="tf-footer">
      <div className="footer-top">
        <div className="container">
          <ul className="category-list justify-content-xl-center">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.category ? `/products?category=${item.category}` : "/products"}
                  className="tf-btn btn-line has-icon link"
                >
                  <span className="text h6 text-uppercase fw-normal">
                    {item.name}
                  </span>
                  <i className="icon icon-arrow-top-right" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-body p-xl-0">
        <div className="container">
          <div className="row-footer">
            <div className="col-s1">
              {/* <div className="footer-inner-wrap flex-lg-nowrap align-items-end">
                <div className="box-title">
                  <h6>
                    JOIN THE <span className="text-primary">#VEMUS</span> TRIBE
                  </h6>
                  <p className="notice font-2">
                    <span className="fst-italic">Shiny Things</span> Await - 10%
                    Off Inside!
                  </p>
                </div>
                <div className="box-email">
                  <p className="text-body text-main-3">
                    Get early access to new products, exclusive deals &amp;
                    more.
                  </p>
                  <div
                    className={`tfSubscribeMsg  footer-sub-element ${
                      showMessage ? "active" : ""
                    }`}
                  >
                    {success ? (
                      <p style={{ color: "rgb(52, 168, 83)" }}>
                        You have successfully subscribed.
                      </p>
                    ) : (
                      <p style={{ color: "red" }}>Something went wrong</p>
                    )}
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      sendEmail(e);
                    }}
                    className="form-email"
                  >
                    <fieldset>
                      <input
                        className="bg-transparent"
                        type="email"
                        name="email"
                        placeholder="Your_email@example.com"
                        required
                      />
                    </fieldset>
                    <div className="box-btn">
                      <button type="submit" className="btn-submit link">
                        <i className="icon-arrow-right-2" />
                      </button>
                    </div>
                  </form>
                </div>
              </div> */}
              <div className="footer-infor footer-inner-wrap flex-lg-nowrap align-items-end">
                <div className="box-title">
                  <Link href={`/`} className="logo-site d-inline-block">
                    <Image
                      alt="ANAKYNGEMS อนาคินเจม - Lab Grown Diamond Jewellery Logo"
                      src="/images/logo/logo-footer.png"
                      width={122}
                      height={31}
                      style={{ height: 'auto' }}
                    />
                  </Link>
                  <p className="text-main-5 lt-sp-nor">
                    Anakyn Gems is a modern jewelry brand that redefines how we wear diamonds.
                    We believe diamonds shouldn’t be reserved only for special occasions—
                    they should be part of your everyday confidence.
                    {/* <span className="">Explore</span> our curated
                    collections designed to{" "}
                    <span className="">
                      elevate every <br className="d-none d-xl-block" />
                      look
                    </span>{" "}
                    , from <span className="">
                      timeless essentials
                    </span>{" "}
                    to <span className="">trendsetting pieces</span> .
                    Step <br className="d-none d-xl-block" />
                    in and find the{" "}
                    <span className="">perfect match</span> for your{" "}
                    <span className="">unique</span> style. */}
                  </p>
                </div>
                {/* <ul className="tf-social-icon">
                  <li>
                    <a
                      href="https://www.facebook.com/anakyngems"
                      target="_blank"
                      className="social-facebook"
                    >
                      <span className="icon">
                        <i className="icon-facebook" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/anakyngems"
                      target="_blank"
                      className="social-instagram"
                    >
                      <span className="icon">
                        <i className="icon-instagram" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/@anakyn.gems" target="_blank" className="social-tiktok">
                      <span className="icon">
                        <svg fill="currentColor" width="32" height="16.11" viewBox="0 0 24 24"><title>TikTok</title><path d="M15.9453 8.68918V15.6727C15.9453 19.1598 13.1048 22.0004 9.6177 22.0004C8.27369 22.0004 7.01685 21.5717 5.99251 20.8525C4.35796 19.7047 3.29004 17.8085 3.29004 15.6727C3.29004 12.1783 6.12333 9.34505 9.6104 9.34505C9.90101 9.34505 10.1843 9.36685 10.4676 9.40318V12.9121H10.4386C10.3151 12.8758 10.1843 12.8394 10.0536 12.8177H9.9954C9.86466 12.8032 9.74114 12.7813 9.60309 12.7813C8.00491 12.7813 6.70448 14.0817 6.70448 15.6799C6.70448 17.2782 8.00491 18.5786 9.60309 18.5786C11.2014 18.5786 12.5018 17.2782 12.5018 15.6799V2.00037H15.938C15.938 2.29822 15.9671 2.58881 16.0179 2.87213C16.2649 4.1798 17.035 5.30584 18.1175 6.01053C18.873 6.50452 19.7593 6.78785 20.7182 6.78785V10.2241C18.9416 10.2241 17.288 9.65222 15.9453 8.68918Z"></path></svg>
                      </span>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="col-s2">
              <div className="footer-inner-wrap flex-sm-nowrap s2">
                <div className="footer-col-block">
                  <p className="footer-heading footer-heading-mobile font-2">
                    find us
                  </p>
                  <div className="tf-collapse-content">
                    <ul className="footer-menu-list mb-24">
                      <li>
                        <a
                          href="https://maps.app.goo.gl/nurLYMZFXMC8fXXY9"
                          className="fw-medium"
                          target="_blank"
                        >
                          131/5-6 Nitayo Rd., Mak Khaeng,<br/>Mueang, Udon Thani 41000, Thailand
                        </a>
                      </li>
                      <li>
                        <a href="tel:0885605601" className="text-main-4 link">
                          088 560 5601
                        </a>
                        <a href="tel:0815455005" className="link text-main-4 d-block" style={{ width: 'max-content' }}>081 545 5005</a>
                      </li>
                      <li>
                        <a
                          href="mailto:anakyngems@gmail.com"
                          className="text-main-4 link"
                        >
                          anakyngems@gmail.com
                        </a>
                      </li>
                    </ul>
                     <ul className="tf-social-icon">
                      <li>
                        <a
                          href="https://www.facebook.com/anakyngems"
                          target="_blank"
                          className="social-facebook"
                        >
                          <span className="icon">
                            <i className="icon-facebook" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/anakyngems"
                          target="_blank"
                          className="social-instagram"
                        >
                          <span className="icon">
                            <i className="icon-instagram" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.tiktok.com/@anakyn.gems" target="_blank" className="social-tiktok">
                          <span className="icon">
                            <svg fill="currentColor" width="32" height="16.11" viewBox="0 0 24 24" ><title>TikTok</title><path d="M15.9453 8.68918V15.6727C15.9453 19.1598 13.1048 22.0004 9.6177 22.0004C8.27369 22.0004 7.01685 21.5717 5.99251 20.8525C4.35796 19.7047 3.29004 17.8085 3.29004 15.6727C3.29004 12.1783 6.12333 9.34505 9.6104 9.34505C9.90101 9.34505 10.1843 9.36685 10.4676 9.40318V12.9121H10.4386C10.3151 12.8758 10.1843 12.8394 10.0536 12.8177H9.9954C9.86466 12.8032 9.74114 12.7813 9.60309 12.7813C8.00491 12.7813 6.70448 14.0817 6.70448 15.6799C6.70448 17.2782 8.00491 18.5786 9.60309 18.5786C11.2014 18.5786 12.5018 17.2782 12.5018 15.6799V2.00037H15.938C15.938 2.29822 15.9671 2.58881 16.0179 2.87213C16.2649 4.1798 17.035 5.30584 18.1175 6.01053C18.873 6.50452 19.7593 6.78785 20.7182 6.78785V10.2241C18.9416 10.2241 17.288 9.65222 15.9453 8.68918Z"></path></svg>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-col-block p-xl-0">
                  <p className="footer-heading footer-heading-mobile font-2">
                    PRODUCTS
                  </p>
                  <div className="tf-collapse-content">
                    <ul className="footer-menu-list">
                      <li>
                        <Link href={`/products`} className="text-main-4 link">
                          All Products
                        </Link>
                      </li>
                      <li>
                        <Link href={`/products?category=men's ring`} className="text-main-4 link">
                          Men's Ring
                        </Link>
                      </li>
                      <li>
                        <Link href={`/products?category=women ring`} className="text-main-4 link">
                          Women Ring
                        </Link>
                      </li>
                      <li>
                        <Link href={`/products?category=earring`} className="text-main-4 link">
                          Earring
                        </Link>
                      </li>
                      <li>
                        <Link href={`/products?category=necklace`} className="text-main-4 link">
                          Necklace
                        </Link>
                      </li>
                      <li>
                        <Link href={`/products?category=for-sale`} className="text-main-4 link">
                          For Sale
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-col-block">
                  <p className="footer-heading footer-heading-mobile font-2">
                    ABOUT US
                  </p>
                  <div className="tf-collapse-content">
                    <ul className="footer-menu-list">
                      <li>
                        <Link href={`/about-us`} className="text-main-4 link">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href={`/our-story`} className="text-main-4 link">
                          Our Story
                        </Link>
                      </li>
                      <li>
                        <Link href={`/contact-us`} className="text-main-4 link">
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link href={`/behind-brand`} className="text-main-4 link">
                          Behind the Brand
                        </Link>
                      </li>
                      <li>
                        <Link href={`/faq`} className="text-main-4 link">
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrap">
            <p className="text-nocopy">All Rights Reserved 2025 ANAKYNGEMS.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
