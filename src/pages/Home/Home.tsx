import React from "react";
import "./Home.scss";

import hero from "../../assets/desktop/image-hero.jpg";
import { useLocation } from "react-router-dom";

export const Home = () => {
    const location = useLocation()
    console.log(location);
  return (
      <>
    <div className="home__container">
      <div className="home__left">
        {" "}
        <h1 className="home__header">
          MODER<strong className="strong-header_single">N</strong>
        </h1>
        <h1 className="home__header-bottom">
          ART GAL
          <strong className="strong-header">LERY</strong>
        </h1>
      </div>
      <div className="home__middle">
        <img src={hero} alt="hero" className="hero__img" />
      </div>
      <div className="home__right">
        <p className="home__right-text">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
      </div>
    </div>
    </>

  );
};
