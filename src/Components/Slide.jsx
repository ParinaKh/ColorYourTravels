import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import { withRouter } from "react-router-dom";

const slideImages = ["./slider/1.jpg", "./slider/2.jpg", "./slider/3.jpg"];

const properties = {
  duration: 3000,
  transitionDuration: 700,
  infinite: true,
  // indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
