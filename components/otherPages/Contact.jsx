"use client";
import React from "react";

export default function Contact() {
  return (
    <section className="s-contact-us flat-spacing-6">
      {/* Map */}
      <div className="wg-map d-flex">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.318473127917!2d102.80833369999999!3d17.3964975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31237633befda425%3A0x3aa8aa6ba479be1b!2z4Lir4LmJ4Liy4LiH4LmA4Lie4LiK4Lij4LiX4Lit4LiH4LiK4Lix4Lii4LmA4LiJ4Lil4Li04LihIOC4leC4o-C4suC4lOC4suC4pw!5e0!3m2!1sth!2sth!4v1753008663249!5m2!1sth!2sth"
          width="100%"
          height={461}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {/* /Map */}
      <div className="container">
        <div className="row">
          <div className="col-xxl-5 offset-xxl-1 col-lg-6">
            <div className="left-col mb-lg-0">
              <h3 className="title fw-normal">Visit Our Store</h3>
              <ul className="store-info-list">
                <li>
                  <p className="caption">Address:</p>
                  <a
                    href="https://maps.app.goo.gl/nurLYMZFXMC8fXXY9"
                    className="link text-main-4"
                    target="_blank"
                  >
                    131/5-6 Nitayo Road, Mak Khaeng Sub-district,<br/>Mueang District, Udon Thani 41000, Thailand
                  </a>
                </li>
                <li>
                  <p className="caption">Email:</p>
                  <a href="mailto:anakyngems@gmail.com" className="link text-main-4">
                    anakyngems@gmail.com
                  </a>
                </li>
                <li>
                  <p className="caption">Phone:</p>
                  <a href="tel:0885605601" className="link text-main-4">
                    088 560 5601
                  </a>
                  <a href="tel:0815455005" className="link text-main-4 d-block" style={{ width: 'max-content' }}>081 545 5005</a>
                </li>
                <li>
                  <p className="caption">Opening Hour:</p>
                  <p className="text-main-4">
                    Mon - Fri: 8.30am to 5.30pm <br />
                    Sun: Close
                  </p>
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
          <div className="col-xl-5 col-lg-6">
            {/* <div className="right-col">
              <h3 className="title fw-normal">Get In Touch</h3>
              <p className="sub-title text-main-4">
                Our one-to-one support is a big part of Vemus company. Contact
                us by phone or email to get help from our qualified team.
              </p>
              <form
                className="form-contact style-border"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-content">
                  <div className="cols tf-grid-layout sm-col-2">
                    <fieldset>
                      <input type="text" placeholder="Name *" required />
                    </fieldset>
                    <fieldset>
                      <input type="email" placeholder="Email *" required />
                    </fieldset>
                  </div>
                  <textarea
                    placeholder="Message"
                    style={{ height: 229 }}
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="tf-btn btn-fill animate-btn w-100"
                >
                  SEND
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
