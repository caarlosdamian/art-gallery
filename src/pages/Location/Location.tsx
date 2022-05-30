import React from "react";
import { useLocation } from "react-router-dom";
import map from "../../assets/desktop/image-map.png";
import { Button } from "../../components/Button/Button";
import { Footer } from "../../sections/Footer/Footer";
import './Location.scss'

export const Location = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="location__container">
      <Button/>
      <img src={map} alt="maps" className="location__image" />
      <div className="middle__container">
        <div className="location__left">
          <h1 className="left__location-header">OUR LOCATION</h1>
        </div>
        <div className="location__right">
          <h1 className="location__rght-header">99 King Street</h1>
          <p className="location__text">Newport</p>
          <p className="location__text"> RI 02840</p>
         
          <p className="location__text"> United States of America</p>
   
          <p className="location__text-bottom">
          Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
