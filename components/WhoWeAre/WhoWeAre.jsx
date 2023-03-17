import React from "react";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src={"/img/images/about_img01.png"} alt="" />
              <img
                src={"/img/images/about_img02.png"}
                alt=""
                className="img-two"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-0">
                <span className="sub-title">Who we are</span>
              
              </div>
              <p>
              Renq is a community-driven organization that is established to provide a one stop solution for all kind of traders under one platform in the DeFi world.
We aim to empower our users with a comprehensive solution by providing them a platform that has benefits of a centralized exchange and beyond.

              </p>
              <div className="mb-30">
                <li>Multi Chain Dex</li>
                <li>Never Ending Liquidity</li>
                <li>Community Driven</li>
                </div>
              <Link href="/" className="btn">
                Purchase Tokens
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
