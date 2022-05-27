import React from "react";
import "./Home.scss";

import hero from "../../assets/desktop/image-hero.jpg";

export const Home = () => {
  return (
    <div className="home__container">
      <div className="home__left">
        {" "}
        <h1 className="home__header">
          MODER<strong className="strong-header_single">N</strong>
        </h1>
        <h1 className="home__header-bottom">ART GAL
          <strong className="strong-header">LERY</strong></h1>
      </div>
      <div className="home__middle">
        <img src={hero} alt="hero" className="hero__img" />
      </div>
      <div className="home__right">right</div>
    </div>
  );
};
