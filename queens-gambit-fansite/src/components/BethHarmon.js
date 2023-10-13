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
        <Link to="/">Home</Link>
      </div>
        <Carousel imagesData={bethImagesData} />
      </div>
    );
  };

  export default Beth;