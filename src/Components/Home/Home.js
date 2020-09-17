import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12344567"
          title="Samsung Galaxy 11 Pro"
          price={700}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
        />
        <Product
          id="12344567"
          title="Jay Shetty"
          price={14}
          rating={4}
          image="https://m.media-amazon.com/images/I/51kWfNIYjzL.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12344567"
          title="J2 Micro Speaker "
          price={100}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230DA9039F21E515._V535729156_.jpg"
        />
        <Product
          id="12344567"
          title="amazon Jio Prime"
          price={300}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41h0H4SCgPL._AC_US160_.jpg"
        />
        <Product
          id="12344567"
          title="Dell Laptop"
          price={600}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51svyK3ruYL._AC_US160_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
