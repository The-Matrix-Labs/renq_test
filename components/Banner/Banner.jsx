import React from "react";
import CountDownOne from "../CountDown/CountDownOne";


const Banner = () => {
  return (
    <section className="banner-area banner-bg">
      <div className="banner-shape-wrap">
        <img
          src={"/img/banner/banner_shape01.png"}
          alt=""
          className="img-one"
        />
        <img
          src={"/img/banner/banner_shape02.png"}
          alt=""
          className="img-two"
        />
        <img
          src={"/img/banner/banner_shape03.png"}
          alt=""
          className="img-three"
        />
      </div>

      <div className="container">
        <div className="landing_main flex">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <h2 className="title main_heading">
              A Unified Platform to a <span>Decentralized World</span>
              </h2>
              <p className="hero_desc">Renq aims to connect all isolated blockchains and establish a cross-chain asset exchange network, providing all necessary underlying support for the DeFi ecosystem. Let every digital asset holder experience a truly safe, free and transparent DeFi service.</p>

            </div>
            
          </div>
          <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              <h2 className="title ico">ICO Is LiveNow ...</h2>

              {/* <CountDownOne /> */}
            </div>
          </div>
        </div>
        </div>
      
            <div className='section2'>
                <h2>To Check Your Holdings Connect Wallet.</h2>
                <p>SOLD - 95,539,609/101,000,000</p>
                <p>RAISED - $2,215,991/$2,352,500</p>
                <div className='progressbar'></div>
                <div className="banner-progress-wrap">
              <ul>
                <li>Pre Sell</li>
                <li>Soft Cap</li>
                <li>Bonus</li>
              </ul>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <h4 className="title">
                65% target raised <span>1 ETH = $1000 = 3177.38 CIC</span>
              </h4>
            </div>
                <button className='button_secondary'>CLAIM TOKENS</button>
                <div className="flex_new">
                    <p>How To Buy?</p>
                    <p>New To Crypto?</p>
                </div>
      
        </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
