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
                    Vasily Borgov is a Russian chess player and the reigning World Champion. Borgov is in his late 30s when Beth first encounters him in Mexico City; he has bushy eyebrows, coarse black hair, and an authoritarian scowl. She is completely intimidated by him and his natural sense of belonging in and ownership over the chess world.
                    Borgov is often surrounded by other players, particularly other high-ranked Russian players, which makes Beth feel out of place in comparison. Beth believes that he deliberately avoids looking at her or interacting with her as a way to make her feel insignificant. The first time Beth encounters him, she completely falls apart, relying only on instinct. She then studies for months with Benny and Beltik to face Borgov in Paris, but even then, Beth cannot beat him. She continues to prepare, again with the help of friends, to face him at a tournament in Moscow, where, at the climax of the book, she is finally able to use both her intuition, her vast base of knowledge, and her friends’ help to beat him. After this loss, Borgov smiles warmly at her and hugs her, illustrating how Beth’s doubts about him and fear of him are primarily internal and borne of her own sense that she doesn’t belong in the chess world.
                    Borgov's character was made in the image of the greatest chess player of that era: Boris Spassky.
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