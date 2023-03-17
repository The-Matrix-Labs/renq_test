import React from "react";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";

const Sales = () => {
  const chart_info_list = [
    "Public Sale: 50% - 500,000,000",
    "RENQ POOL: 10% - 100,000,000",
    "RENQ VAULT: 10% - 100,000,000",
    "RENQ FARMS: 10% - 100,000,000",
    "EXCHANGE LISTINGS: 10% - 100,000,000",
    "LIQUIDITY: 5% - 50,000,000",
    "TEAM: 5% - 50,000,000"
  ];

  return (
    <section id="sales" className="chart-area chart-bg ">
      <div className="container">
        <div className="chart-inner">
        <div className="section-title text-center mb-50">
              <h2 className="title">
                RenQ <span>Tokenomics</span>
              </h2>
            </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10 order-0 order-lg-2 chart_width">
              <div className="chart-wrap wow fadeInRight" data-wow-delay=".2s">
                <img src={"/img/images/tokenomics.png"} alt="" />
                <ul>
                  {chart_info_list.map((x, index) => (
                    <li key={index}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-10 remove">
              <div
                className="chart-content wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <SalesTabButton
                    title="Funding Allocation"
                    className="active"
                    id="funding-tab"
                    target="#funding"
                    ariaControls="funding"
                    ariaSelected={true}
                  />

                  <SalesTabButton
                    title="Token Allocation"
                    className=""
                    id="token-tab"
                    target="#token"
                    ariaControls="token"
                    ariaSelected={false}
                  />
                </ul>

                <div className="tab-content" id="myTabContent">
                  <SalesTabContent
                    className={"show active"}
                    id="funding"
                    ariaLabel="funding-tab"
                    title="1 CNL = 0.0863 BTC"
                    description=" The World’s 1st ICO Platform That Offers Rewards and The
                    platform helps investors to make easy to purchase and
                    sell their tokens"
                    link="/"
                  />

                  <SalesTabContent
                    className={""}
                    id="token"
                    ariaLabel="token-tab"
                    title="2 CNL = 0.0967 BTC"
                    description=" The World’s 1st ICO Platform That Offers Rewards and The
                    platform helps investors to make easy to purchase and
                    sell their tokens"
                    link="/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
