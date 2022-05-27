import React from "react";

import ImgGrid from "../../assets/desktop/image-grid-1.jpg";
import "./HomeMiddle.scss";

export const HomeMiddle = () => {
  return (
    <div className="home__middle-container">
      <div className="home__middle-top__container">
        <div className="home__middle-text__container">
          <h1 className="home__middle-header">Your Day at the Gallery</h1>
          <p className="home__middle-text">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
        <img src={ImgGrid} alt="ImgGrid" className="home__midle-img" />
      </div>
      <div className="home__middle-bottom__container"></div>
    </div>
  );
};
