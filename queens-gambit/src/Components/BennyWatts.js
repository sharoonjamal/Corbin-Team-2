import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Carousel';
import bennyImagesData from '../Data/BennyImages.json'

const Benny = () => {
    return (
        <div className="character-container">
            <div className="character-summary">
                <h1>Benny Watts</h1>
                <p>
                    Benny Watts is the best player in the US during that time period, before Beth Harmon rose to fame.
                </p>
                {/* Back to Home Page Link */}
                <Link to="/">Home</Link>
            </div>
            {/* Image Carousel */}
            <Carousel imagesData={bennyImagesData} />

            {/* Other character content (e.g., book recommendations, social media links, etc.) */}


        </div>
    );
};

export default Benny;