import React from "react";
import hero from "../../assets/desktop/image-hero.jpg";
import heroTab from "../../assets/tablet/image-hero.jpg";
import heroMob from "../../assets/mobile/image-hero.jpg";
import { Button } from "../../components/Button/Button";
import { HomeMiddle } from "../../sections/HomeMiddle/HomeMiddle";
import { Footer } from "../../sections/Footer/Footer";
import { useWindowSize } from "../../hooks/useWindowSize";
import "./Home.scss";

export const Home = () => {
  const { width } = useWindowSize();
  return (
    <>
      <div className="home__container">
        <div className="home__container-wrapper">
          {width >= 769 ? (
            <div className="home__left">
              <h1 className="home__header">
                MODER<strong className="strong-header_single">N</strong>
              </h1>
              <h1 className="home__header-bottom">
                ART GAL
                <strong className="strong-header">LERY</strong>
              </h1>
            </div>
          ) : (
            <></>
          )}

          <div className="home__middle">
            <img
              src={width >= 769 ? hero : width >= 375 ? heroTab : heroMob}
              alt="hero"
              className="hero__img"
            />
          </div>
          <div className="home__right">
            <div className="right__wrapper">
              {width >= 75 && (
                <h1 className="home__header-tablet">MODERN ART GALLERY</h1>
              )}

              <p className="home__right-text">
                The arts in the collection of the Modern Art Gallery all started
                from a spark of inspiration. Will these pieces inspire you?
                Visit us and find out.
              </p>
              <Button />
            </div>
          </div>
        </div>
        <HomeMiddle />
        <Footer />
      </div>
    </>
  );
};
