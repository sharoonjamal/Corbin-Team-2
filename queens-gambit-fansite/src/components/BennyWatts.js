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
                Benny Watts is a chess maestro like no other. His unassuming appearance belies a mind that's constantly in motion, calculating moves and strategies that leave opponents bewildered. With a keen intellect and a flair for the dramatic, Benny has become a true sensation in the world of competitive chess.

What sets Benny apart is his ability to bring excitement to the chessboard. His games are a rollercoaster of emotions, with unexpected twists and brilliant maneuvers that keep spectators and fellow players alike on the edge of their seats. Whether it's his signature gambits or his charismatic presence, Benny's impact on the chess scene is undeniable.

In the Queen's Gambit, Benny Watts is a showman, a master of suspense, and a symbol of the passion that drives the pursuit of chess excellence. His collaborations and rivalries with Beth Harmon add depth to the series, making him a central and unforgettable character in the story of chess mastery.

So, whether you're drawn to his magnetic personality or simply awestruck by his genius moves, Benny Watts is a chess virtuoso who leaves an indelible mark on the chessboard and in the hearts of fans.
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