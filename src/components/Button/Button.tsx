import React from "react";
import ArrowRight from "../../assets/icon-arrow-right.svg";
import ArrowLeft from "../../assets/icon-arrow-left.svg";
import "./Button.scss";

export const Button = () => {
  return (
    <div className="button__container">
    
      <button className="button__container-input">OUR LOCATION</button>
      <img
        className="button__container-button"
        src={ArrowRight}
        alt="ArrowRight"
      />
    </div>
  );
};
