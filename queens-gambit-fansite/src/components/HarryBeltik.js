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
        Harry Beltik is not just a chess player; he's a reflection of the journey from humble beginnings to the grand stage of competitive chess. Starting as a Kentucky state champion, Harry's path crosses with the brilliant Beth Harmon, and his life takes an intriguing turn.

As a chess player, Harry brings a down-to-earth charm to the chessboard. His dedication and sincerity make him a beloved character among fans of the series. While he may not possess the grandeur of the world's top grandmasters, Harry's determination and love for the game shine brightly.

In the Queen's Gambit, Harry Beltik represents the idea that chess is more than just a game; it's a journey of self-discovery and personal growth. His presence adds depth to the series and reminds us that even in the world of high-stakes chess, there's room for friendship, mentorship, and the pursuit of one's true potential.
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