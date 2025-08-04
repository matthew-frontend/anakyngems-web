import React from "react";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="s-brand-intro flat-spacing-6 pb-0">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <div className="brand-intro_image mb-md-0">
              <Image
                src="/images/home/about.webp"
                alt=""
                className="lazyload intro-photo"
                width={918}
                height={1228}
              />
              {/* <div className="brand-box">
                <Image
                  src="https://vemusnextjs.vercel.app/images/section/item-1.png"
                  alt=""
                  className="lazyload"
                  width={1000}
                  height={1000}
                />
              </div> */}
            </div>
          </div>
          <div className="col-md-6">
            <h6 className="brand-intro_subtitle">we are anakyngems</h6>
            <h2 className="brand-intro_title thai-text">
              เพชร ไม่ควรมีแค่ในวันพิเศษ
            </h2>
            <p className="brand-intro_text thai-text">
              เราเชื่อว่าเพชรไม่ควรถูกจำกัดไว้แค่ในวันหมั้น วันแต่งงาน หรือโอกาสสำคัญ แต่มันควรเป็นสิ่งที่ คุณใส่แล้วรู้สึกมั่นใจในทุกวัน ไม่ว่าจะอยู่ในห้องประชุม หรือระหว่างจิบกาแฟยามบ่าย
            </p>
            <span className="br-line" />
            <div className="brand-intro_author flex-sm-nowrap">
              <div className="author-info">
                <Image
                  alt="Author"
                  className="img-author"
                  src="/images/home/kosol.jpg"
                  width={100}
                  height={100}
                />
                <div className="info">
                  <h5 className="name">
                    <a href="#" className="link">
                      Kosol Taerattanachai 
                    </a>
                  </h5>
                  <span className="duty text-main-4">Founder of ANAKYNGEMS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
