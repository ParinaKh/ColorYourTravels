import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import { withRouter } from "react-router-dom";

const slideImages = [
  "./slider/1.jpg",
  "./slider/2.jpg",
  "./slider/3.jpg",
  "./slider/4.jpg",
  "./slider/5.jpg",
  "./slider/6.jpg",
  "./slider/7.jpg",
  "./slider/8.jpg",
  "./slider/9.jpg"
];

const properties = {
  duration: 3000,
  transitionDuration: 700,
  infinite: true,
  indicators: false,
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
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[4]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[5]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[6]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[7]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[8]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[9]})` }}></div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
