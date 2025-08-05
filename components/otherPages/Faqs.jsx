import React from "react";
import Link from "next/link";
export default function Faqs() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="s-faq flex-md-nowrap">
          <div className="sb-contact sticky-top bg-anakyn-20">
            <h3 className="title fw-normal thai-text">ไม่พบคำตอบใช่ไหม?</h3>
            <p className="sub-title text-main-6 thai-text">
              หากคุณมีปัญหาหรือคำถามที่ต้องการความช่วยเหลือทันที คุณสามารถคลิกปุ่มด้านล่างเพื่อติดต่อเจ้าหน้าที่ฝ่ายบริการลูกค้า
              <br/>
            </p>
            <div className="group-btn flex-sm-nowrap">
              <Link
                href={`/contact-us`}
                className="tf-btn btn-fill fw-medium animate-btn letter-space-0"
              >
                CONTACT US
              </Link>
            </div>
          </div>
          <ul className="faq-list tf-grid-layout">
            <li className="faq-item">
              <h3 className="name-faq">คำถามที่พบบ่อย (FAQs)</h3>
              <div className="faq-wrap" id="order-and-shipping">
                <div className="widget-accordion-2 style-2">
                  <div
                    className="accordion-title collapsed"
                    data-bs-target="#collapse-faqs-th-1"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="collapse-faqs-th-1"
                  >
                    <span className="fw-medium thai-text">
                      1. เพชรแล็ปคืออะไร ต่างจากเพชรธรรมชาติยังไง?
                    </span>
                    <span className="icon ic-accordion-custom" />
                  </div>
                  <div
                    id="collapse-faqs-th-1"
                    className="collapse"
                    data-bs-parent="#collapse-faqs-th-1"
                  >
                    <div className="accordion-body">
                      <p className="thai-text">
                        เพชรแล็ป (Lab-Grown Diamond) คือเพชรแท้ที่สร้างขึ้นในห้องแล็ปด้วยเทคโนโลยีทันสมัย มีองค์ประกอบทางเคมี โครงสร้าง และความแวววาวเหมือนเพชรธรรมชาติ 100% แต่เป็นมิตรกับสิ่งแวดล้อมและราคาคุ้มค่ากว่า
                      </p>
                    </div>
                  </div>
                </div>
                <div className="widget-accordion-2 style-2">
                  <div
                    className="accordion-title collapsed"
                    data-bs-target="#collapse-faqs-th-2"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="collapse-faqs-th-2"
                  >
                    <span className="fw-medium thai-text">
                      2. เพชรแล็ปเป็นเพชรจริงหรือเปล่า?
                    </span>
                    <span className="icon ic-accordion-custom" />
                  </div>
                  <div
                    id="collapse-faqs-th-2"
                    className="collapse"
                    data-bs-parent="#collapse-faqs-th-2"
                  >
                    <div className="accordion-body">
                      <p className="thai-text">
                        ใช่ครับ เพชรแล็ปคือ “เพชรแท้” (Real Diamond) ที่สามารถผ่านการตรวจสอบด้วยเครื่องมือจากสถาบันชั้นนำ และสามารถออกใบเซอร์รับรองได้เหมือนเพชรธรรมชาติ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="widget-accordion-2 style-2">
                  <div
                    className="accordion-title collapsed"
                    data-bs-target="#collapse-faqs-th-3"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="collapse-faqs-th-3"
                  >
                    <span className="fw-medium thai-text">
                      3. เพชรแล็ปมีใบรับรองไหม?
                    </span>
                    <span className="icon ic-accordion-custom" />
                  </div>
                  <div
                    id="collapse-faqs-th-3"
                    className="collapse"
                    data-bs-parent="#collapse-faqs-th-3"
                  >
                    <div className="accordion-body">
                      <p className="thai-text">
                        เรามีใบรับรอง (Certificate) จากสถาบันอัญมณีชั้นนำ เช่น IGI หรือ GIA Lab-Grown Diamond ซึ่งระบุคุณลักษณะต่าง ๆ ของเพชรอย่างละเอียด
                      </p>
                    </div>
                  </div>
                </div>
                <div className="widget-accordion-2 style-2">
                  <div
                    className="accordion-title collapsed"
                    data-bs-target="#collapse-faqs-th-4"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="collapse-faqs-th-4"
                  >
                    <span className="fw-medium thai-text">4. ทำไมเพชรแล็ปราคาถูกกว่าเพชรธรรมชาติ?</span>
                    <span className="icon ic-accordion-custom" />
                  </div>
                  <div
                    id="collapse-faqs-th-4"
                    className="collapse"
                    data-bs-parent="#collapse-faqs-th-4"
                  >
                    <div className="accordion-body">
                      <p className="thai-text">
                        เพชรแล็ปใช้เวลาผลิตน้อยกว่า ไม่ต้องขุดเหมือง ทำให้ต้นทุนต่ำกว่าเพชรธรรมชาติ แต่ยังคงความงามและคุณภาพเทียบเท่า
                      </p>
                    </div>
                  </div>
                </div>
                <div className="widget-accordion-2 style-2">
                  <div
                    className="accordion-title collapsed"
                    data-bs-target="#collapse-faqs-th-5"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="collapse-faqs-th-5"
                  >
                    <span className="fw-medium thai-text">5. สามารถสั่งทำเครื่องประดับเพชรแล็ปตามแบบได้ไหม?</span>
                    <span className="icon ic-accordion-custom" />
                  </div>
                  <div
                    id="collapse-faqs-th-5"
                    className="collapse"
                    data-bs-parent="#collapse-faqs-th-5"
                  >
                    <div className="accordion-body">
                      <p className="thai-text">
                        ได้แน่นอนครับ ร้านของเรารับออกแบบและสั่งทำแหวนแต่งงาน เครื่องประดับเพชรแล็ปตามงบประมาณและดีไซน์ที่คุณต้องการ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="faq-item">
              <h3 className="name-faq">Frequently Asked Questions</h3>
              <div className="faq-wrap" id="return-and-exchanges">
                <div className="widget-accordion-2 style-2">
                  <div
                    className="accordion-title collapsed"
                    data-bs-target="#collapse-faqs-en-1"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="collapse-faqs-en-1"
                  >
                    <span className="fw-medium">
                      1. What is a lab-grown diamond? How is it different from a natural diamond?
                    </span>
                    <span className="icon ic-accordion-custom" />
                  </div>
                  <div
                    id="collapse-faqs-en-1"
                    className="collapse"
                    data-bs-parent="#collapse-faqs-en-1"
                  >
                    <div className="accordion-body">
                      <p>
                        Lab-grown diamonds are real diamonds created in a controlled laboratory environment using advanced technology. They have the same physical, chemical, and optical properties as natural diamonds—but are more sustainable and cost-effective.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="widget-accordion-2 style-2">
                  <div
                    className="accordion-title collapsed"
                    data-bs-target="#collapse-faqs-en-2"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="collapse-faqs-en-2"
                  >
                    <span className="fw-medium">
                      2. Is a lab-grown diamond a real diamond?
                    </span>
                    <span className="icon ic-accordion-custom" />
                  </div>
                  <div
                    id="collapse-faqs-en-2"
                    className="collapse"
                    data-bs-parent="#collapse-faqs-en-2"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, absolutely. Lab-grown diamonds are genuine diamonds with the same hardness, brilliance, and structure as mined diamonds. They are certified and tested by the same gemological institutes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="widget-accordion-2 style-2">
                  <div
                    className="accordion-title collapsed"
                    data-bs-target="#collapse-faqs-en-3"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="collapse-faqs-en-3"
                  >
                    <span className="fw-medium">
                      3. Do lab-grown diamonds come with certification?
                    </span>
                    <span className="icon ic-accordion-custom" />
                  </div>
                  <div
                    id="collapse-faqs-en-3"
                    className="collapse"
                    data-bs-parent="#collapse-faqs-en-3"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, absolutely. Lab-grown diamonds are genuine diamonds with the same hardness, brilliance, and structure as mined diamonds. They are certified and tested by the same gemological institutes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="widget-accordion-2 style-2">
                  <div
                    className="accordion-title collapsed"
                    data-bs-target="#collapse-faqs-en-4"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="collapse-faqs-en-4"
                  >
                    <span className="fw-medium">
                      4. Why are lab-grown diamonds more affordable than natural diamonds?
                    </span>
                    <span className="icon ic-accordion-custom" />
                  </div>
                  <div
                    id="collapse-faqs-en-4"
                    className="collapse"
                    data-bs-parent="#collapse-faqs-en-4"
                  >
                    <div className="accordion-body">
                      <p>
                        Lab-grown diamonds don’t require mining, which significantly lowers production costs. That makes them a more affordable choice—without compromising on beauty or quality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="widget-accordion-2 style-2">
                  <div
                    className="accordion-title collapsed"
                    data-bs-target="#collapse-faqs-en-5"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="collapse-faqs-en-5"
                  >
                    <span className="fw-medium">
                      5. Can I custom-design jewelry with lab-grown diamonds?
                    </span>
                    <span className="icon ic-accordion-custom" />
                  </div>
                  <div
                    id="collapse-faqs-en-5"
                    className="collapse"
                    data-bs-parent="#collapse-faqs-en-5"
                  >
                    <div className="accordion-body">
                      <p>
                        Absolutely. We offer bespoke design services for engagement rings, wedding bands, and all types of diamond jewelry—tailored to your style and budget.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
