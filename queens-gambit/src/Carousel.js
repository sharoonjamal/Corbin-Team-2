// import data from "./Data/BethImages.json";
import React, { useState } from "react";

export default function Carousel({ imagesData }) {

  const [index, setIndex] = useState(0);
  return (
    <div className="carousel-container">
      <button
        className="carousel-btn carousel-btn--left"
        aria-controls="carousel"
        aria-label="previous"
        onClick={() => {
          setIndex((prevIndex) =>
            prevIndex === 0 ? imagesData.length - 1 : prevIndex - 1
          );
        }}
      >
        &lt;
      </button>
      <div className="carousel-img-container">
        <img
          src={imagesData[index].url}
          alt={imagesData[index].description}
        />
      </div>
      <button
        className="carousel-btn carousel-btn--right"
        aria-controls="carousel"
        aria-label="next"
        onClick={() => {
          setIndex((prevIndex) =>
            prevIndex === imagesData.length - 1 ? 0 : prevIndex + 1
          );
        }}
      >
        &gt;
      </button>
    </div>
  );
}
