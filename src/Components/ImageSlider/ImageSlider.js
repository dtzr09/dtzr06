import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

function ImageSlider({ card }) {
  const BASE_URL = "/dtzr06/images/";

  const photos = card.photos;

  const renderCards = photos.slice(1, photos.length).map((photo) => {
    return (
      <div className="slide">
        <img src={BASE_URL + photo} alt="" />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
          <div className="slide first">
            <img src={BASE_URL + photos[0]} alt="" />
          </div>
          {renderCards}
        </div>
        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
