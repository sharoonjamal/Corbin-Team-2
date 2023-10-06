import React from 'react';
import { Link } from 'react-router-dom';


const CharacterList = ({ characters, data }) => {
  return (
    <div>
      <h2>Character List</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link to={`/characters/${character.id}`}>
              {character.name === data.name ? (
                <strong>{character.name}</strong>
              ) : (
                character.name
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
