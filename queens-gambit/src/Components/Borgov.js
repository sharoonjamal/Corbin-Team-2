import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Carousel';
import borgovImagesData from '../Data/BorgovImages.json'

const Borgov = () => {
    return (
        <div className="character-container">
            <div className="character-summary">
                <h1>Borgov Vasily</h1>
                <p>
                Ladies and gentlemen, chess enthusiasts from around the globe, gather 'round as we delve into the enigmatic world of Borgov, the chess virtuoso who's captured the hearts and minds of chess fans in the Queen's Gambit universe.

Borgov is no ordinary grandmaster; he's the embodiment of chess brilliance. With his icy demeanor and unwavering focus, he's a force to be reckoned with on the 64 squares. In the high-stakes world of competitive chess, Borgov's name echoes with reverence and awe.

With a style that's as enigmatic as his personality, Borgov's moves on the board are a sight to behold. His chess mastery is an art form, a symphony of strategy and intellect that leaves opponents bewildered and audiences in awe.

In the Queen's Gambit world, Borgov is not just a player; he's a legend, an icon, and a symbol of the pinnacle of chess excellence. Whether you love him or fear him, there's no denying that Borgov is a central figure in the thrilling chess drama that unfolds in this captivating series.
                </p>
                {/* Back to Home Page Link */}
                <Link to="/">Home</Link>
            </div>

            {/* Image Carousel */}
            <Carousel imagesData={borgovImagesData} />

            {/* Other character content (e.g., book recommendations, social media links, etc.) */}
        </div>
    );
};

export default Borgov;