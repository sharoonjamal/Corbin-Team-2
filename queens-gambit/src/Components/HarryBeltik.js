import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Carousel';
import harryImagesData from '../Data/HarryImages.json';

const Harry = () => {
  return (
    <div className="character-container">
      <div className="character-summary">
        <h1>Harry Beltik</h1>
        <p>
        Format Harry's Summary and other things here.
        </p>
        {/* Other character content (e.g., book recommendations, social media links, etc.) */}
        {/* Back to Home Page Link */}
        <Link to="/">Home</Link>
      </div>
      <div className="carousel-container">
        {/* Image Carousel */}
        <Carousel imagesData={harryImagesData} />
      </div>
    </div>
  );
};

export default Harry;