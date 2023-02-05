import React from "react";
import "./banner.css";

const HomeBanner = () => {
  const tag = ["SEO", "PHOTSHOP", "FREELANCING", "eCommerce"];
  return (
    <div className="banner-wraper">
      <div className="banner-details">
        <h1 className="banner-title">
          In-Demand Skills,
          <br />
          On-Demand Course.
        </h1>
        <p className="sub-title">
          Online professional courses, led by the world’s top experts.
        </p>

        <div className="search-box">
          <input type="text" placeholder="What do you want to learn?" />
          <button>Search</button>
        </div>
        <div className="popular-tag">
          <span className="tag-title ">popular</span>
          {tag?.map((val) => {
            return <span className="tag-items">{val}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
