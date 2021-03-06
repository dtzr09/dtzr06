import React, { useEffect, useRef, useState } from "react";
import "./ImageSlider.css";

function ImageSlider({ card }) {
  const BASE_URL = "/dtzr06/images/";
  const videoRef = useRef();
  const photos = card.photos;
  const file_name = card.file_name;
  const videoURL = BASE_URL + file_name + photos[0];

  useEffect(() => {
    videoRef.current?.load();
  }, [videoURL]);

  const renderCards = photos.slice(1, photos.length).map((photo, index) => {
    return (
      <div className="slide" key={index}>
        <img src={BASE_URL + file_name + photo} alt="" />
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
            <video key={videoURL} loop autoPlay muted width="100%">
              <source src={videoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
