import React from "react";
import ArrowRight from "../../assets/icon-arrow-right.svg";
import ArrowLeft from "../../assets/icon-arrow-left.svg";
import "./Button.scss";
import { Link, useLocation } from "react-router-dom";

export const Button = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/location" ? (
        <Link className="button__container" to="/location">
          <button className="button__container-input">OUR LOCATION</button>
          <img
            className="button__container-button"
            src={ArrowRight}
            alt="ArrowRight"
          />
        </Link>
      ) : (
        <Link className="button__container absolute" to="/">
          <img
            className="button__container-button"
            src={ArrowLeft}
            alt="ArrowLeft"
          />
          <button className="button__container-input">BACK TO HOME</button>
          
        </Link>
      )}
    </>
  );
};
