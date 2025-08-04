import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Features() {
  return (
    <>
      {/* Core Value */}
      <section className="s-core-values">
        <div className="container">
          <div className="values-grid tf-grid-layout md-col-2 xl-col-3">
            <div className="core-values-image">
              <Image
                src="/images/home/our-story.webp"
                alt="Core Value"
                className="lazyload"
                width={1012}
                height={1208}
              />
            </div>
            <div className="value-box hightlight">
              <h4 className="value-title thai-text">งานฝีมือเหนือกาลเวลา</h4>
              <span className="br-line" />
              <p className="value-description thai-text">
                ชิ้นงานแต่ละชิ้นได้รับการประดิษฐ์ขึ้นอย่างพิถีพิถันและแม่นยำ ผสมผสานศิลปะแบบดั้งเดิมกับนวัตกรรมสมัยใหม่เพื่อให้มั่นใจถึงความงามที่ยั่งยืน
              </p>
            </div>
            <div className="value-box">
              <h4 className="value-title thai-text">คุณภาพที่ยอดเยี่ยม</h4>
              <span className="br-line" />
              <p className="value-description thai-text">
                เราคัดสรรเฉพาะวัสดุที่ดีที่สุด ตั้งแต่อัญมณีอันเปล่งประกายไปจนถึงโลหะคุณภาพพรีเมียม เพื่อให้แน่ใจว่าผลงานแต่ละชิ้นตรงตามมาตรฐานสูงสุด
              </p>
            </div>
            <div className="value-box">
              <h4 className="value-title thai-text">การออกแบบที่มีความหมาย</h4>
              <span className="br-line" />
              <p className="value-description thai-text">
                เครื่องประดับของเราไม่เพียงแต่เป็นเครื่องประดับเท่านั้น แต่ยังเป็นสัญลักษณ์แห่งความรัก เหตุการณ์สำคัญ และการแสดงออกส่วนตัวที่ออกแบบมาเพื่อบอกเล่าเรื่องราวของคุณ
              </p>
            </div>
            <div className="value-box hightlight">
              <h4 className="value-title thai-text">ความมุ่งมั่นของลูกค้า</h4>
              <span className="br-line" />
              <p className="value-description thai-text">
                ความพึงพอใจของคุณคือหัวใจสำคัญของทุกสิ่งที่เราทำ โดยนำเสนอบริการส่วนบุคคลและการสนับสนุนตลอดอายุการใช้งานสำหรับชิ้นส่วน ANAKYNGEMS ทุกชิ้น
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* /Core Value */}
    </>
  );
}
