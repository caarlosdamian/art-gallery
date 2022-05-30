import React from "react";
import ArrowRight from "../../assets/icon-arrow-right.svg";
import ArrowLeft from "../../assets/icon-arrow-left.svg";
import "./Button.scss";
import { Link } from "react-router-dom";

export const Button = () => {
  return (
    <Link className="button__container" to="/location">
      <button className="button__container-input">OUR LOCATION</button>
      <img
        className="button__container-button"
        src={ArrowRight}
        alt="ArrowRight"
      />
    </Link>
  );
};
