import React from "react";

export default function TopbarBottom() {
  return (
    <div className="topbar-botom bg-white d-none d-xl-block">
      <div className="container-2">
        <div className="row align-items-center">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="box-suport">
              <p className="text-caption fw-medium">
                <i className="icon-headphone-2" />
                <span>Support 24/7</span>
                <span>-</span>
              </p>
              <a href="tel:0885605601" className="text-caption fw-medium link">
                088 560 5601
              </a>
            </div>
          </div>
          <div className="col-4">
            {/* <ul className="box-action">
              <li>
                <a
                  href="#log"
                  data-bs-toggle="modal"
                  className="text-caption link"
                >
                  Sign in
                </a>
              </li>
              <li className="br-line" />
              <li>
                <a
                  href="#register"
                  data-bs-toggle="modal"
                  className="text-caption link"
                >
                  Sign up
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
