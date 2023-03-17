import React from "react";
import Link from "next/link";

const WhitePaper = () => {
  return (
    <section className="document-area pt-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 order-2 order-lg-0">
            <div
              className="document-img text-center wow fadeInUp"
              data-wow-delay=".2s"
            >
              <img src={"/img/images/document_img.png"} alt="" />
            </div>
          </div>

          <div className="col-lg-5 col-md-7">
            <div
              className="document-content mt-50 wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="section-title mb-35">
                <span className="sub-title">Docs</span>
                <h2 className="title">
                  Read RenQ <span>Documents</span>
                </h2>
              </div>

              <ul className="document-list">
                <li>White Paper</li>
                <li>KYC</li>
                <li>Audit</li>
              </ul>

              <Link href="/" className="btn docs_button">
                Download Whitepaper
              </Link>
              <Link href="/" className="btn docs_button">
                Download KYC
              </Link>
              <Link href="/" className="btn docs_button">
                Download Audit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitePaper;
