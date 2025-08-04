import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogAbout() {
  return (
    <section className="flat-spacing-14">
      <div className="container">
        <div className="s-blog-detail align-items-start">
          <div className="blog-single">
            <div className="single-wrap flat-spacing-3 pt-0 pb-0">
              <div className="entry_image">
                <Image
                  src="/images/home/about-banner.webp"
                  alt=""
                  className="lazyload"
                  width={2176}
                  height={790}
                  style={{ maxHeight: '450px' }}
                />
              </div>
              <div className="box-text">
                <h4 className="text-uppercase">
                  Modern Elegance. Truly You.
                </h4>
                <p className="text-main-4">
                  Anakyn Gems <span className="thai-text">คือแบรนด์เครื่องประดับเพชรแล็ป</span> (Lab-Grown Diamond) <span className="thai-text">ที่เชื่อว่าเพชรไม่ควรถูกจำกัดไว้แค่ในวันพิเศษ — แต่ควรเป็นสิ่งที่คุณใส่ได้อย่างมั่นใจในทุกวัน</span>
                </p>
                <p className="text-main-4 thai-text">เราคัดสรรเพชรแล็ปคุณภาพสูง ผสานกับดีไซน์เรียบหรู ทันสมัย เพื่อสร้างความงามที่เข้าถึงได้ โดยไม่ลดทอนคุณภาพ</p>
              </div>
              <div className="block-quote">
                <span className="icon">
                  <i className="icon-quote-2" />
                </span>
                <div className="quote">
                  <h4 className="fw-normal">
                    Because true luxury isn’t about excess—it’s about self-expression, simplicity, and the confidence to shine every day.
                  </h4>
                  <span className="br-line" />
                  <a href="#" className="name link text-end">
                    Kosol Taerattanachai
                  </a>
                </div>
              </div>
              <div className="box-text">
                <h4 className="text-uppercase">
                  What We Believe
                </h4>
                <ul className="list-info thai-text">
                  <li>
                    เราเชื่อว่า
                    <span className="text-main-6"> – </span>
                    <span className="text-main-4">
                      ทุกคนควรเข้าถึงเพชรที่มีคุณภาพ
                    </span>
                  </li>
                  <li>
                    เราเชื่อว่า
                    <span className="text-main-6"> – </span>
                    <span className="text-main-4">
                      ความเรียบง่ายคือความหรูหราที่แท้จริง
                    </span>
                  </li>
                  <li>
                    และเรายังเชื่อว่า
                    <span className="text-main-6"> – </span>
                    <span className="text-main-4">
                      ความงามควรมีความหมาย
                    </span>
                  </li>
                </ul>
              </div>
              <div className="entry_image type-group tf-grid-layout sm-col-2">
                <div className="image">
                  <Image
                    src="/images/home/about-product-1.webp"
                    alt=""
                    className="lazyload"
                    width={1068}
                    height={356}
                  />
                </div>
                <div className="image">
                  <Image
                    src="/images/home/about-product-2.webp"
                    alt=""
                    className="lazyload"
                    width={1068}
                    height={356}
                  />
                </div>
              </div>
              <div className="box-text">
                <h4 className="text-uppercase thai-text">เพราะเราเชื่อว่า</h4>
                <div className="box-btn">
                  <p className="text-main-4">
                    ความหรูหราไม่จำเป็นต้องเกินเอื้อม และความมั่นใจ… เริ่มต้นได้ตั้งแต่วันนี้
                  </p>
                  <div className="">
                    <Link
                      href={`/products`}
                      className="tf-btn-line text-uppercase lh-28 fw-normal"
                    >
                      SHOP NOW
                      <i className="icon-arrow-top-right fs-10" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="entry_media">
                  <div className="entry_social">
                    {/* <p>Share:</p> */}
                    <ul className="tf-social-icon style-large">
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
              </div>
            </div>
          </div>
          <div className="blog-sidebar sidebar-content-wrap d-none d-lg-block sticky-top"></div>
        </div>
      </div>
    </section>
  );
}
