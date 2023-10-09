import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Carousel';
import bethImagesData from '../Data/BethImages.json'

const Beth = () =>  {
    return (
      <div className="character-container">
        <div className="character-summary">
        <h1>Beth Harmon</h1>
        <p>
        Format Beth's Summary and other things here.
        </p>
        {/* Other character content (e.g., book recommendations, social media links, etc.) */}
        {/* Back to Home Page Link */}
        <Link to="/">Home</Link>
      </div>
  
        {/* Image Carousel */}
        <Carousel imagesData={bethImagesData} />
      </div>
    );
  };

  export default Beth;