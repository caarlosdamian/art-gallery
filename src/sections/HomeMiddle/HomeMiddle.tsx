import React from "react";
import ImgGrid from "../../assets/desktop/image-grid-1.jpg";
import ImgGrid1 from "../../assets/desktop/image-grid-2.jpg";
import ImgGrid2 from "../../assets/desktop/image-grid-3.jpg";
import { Footer } from "../Footer/Footer";
import "./HomeMiddle.scss";

export const HomeMiddle = () => {
  return (
    <>
      <div className="home__middle-container">
        <div className="home__middle-bottom__container">
          <div className="home__middle-text__container">
            <h1 className="home__middle-header">Your Day at the Gallery</h1>
            <p className="home__middle-text">
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </p>
          </div>
          <img src={ImgGrid} alt="ImgGrid" className="home__midle-img0" />
          <img src={ImgGrid1} alt="ImgGrid" className="home__midle-img1" />
          <img src={ImgGrid2} alt="ImgGrid" className="home__midle-img2" />
          <div className="home__bottom_img_container">
            <h1 className="home__bottom_header">COME & BE INSPIRED</h1>
            <p className="home__bottom_text">
              We’re excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
