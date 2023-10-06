import { useState, useEffect } from 'react';
import styled from 'styled-components';


const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; 
  margin-top: 10px;
`;

const CancelButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #cc0000;
  }
`;


const CharacterManagement = () => {
  const [characters, setCharacters] = useState([
    { id: 1, name: 'Beth Harmon', details: 'Chess prodigy' },
    { id: 2, name: 'Benny Watts', details: 'Grandmaster' },
    { id: 3, name: 'Harry Beltik', details: 'Former Kentucky State Champion' },
    { id: 4, name: 'Alma Wheatley ', details: 'Mother to Beth' },
    { id: 5, name: 'Jolene', details: 'Beth s bestfriend' },
  ]);

  const [editingCharacter, setEditingCharacter] = useState(null);
  const [newCharacter, setNewCharacter] = useState({ name: '', details: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchCharacterData();
  }, []);

  const fetchCharacterData = () => {
    fetch('/api/characters')
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error('Error fetching character data:', error));
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCharacter({ ...newCharacter, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!newCharacter.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!newCharacter.details.trim()) {
      newErrors.details = 'Details are required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleAddCharacter = () => {
    if (validateForm()) {
      const method = editingCharacter ? 'PUT' : 'POST';

      fetch('/api/characters/', {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCharacter)
      })
        .then(response => response.json())
        .then(data => {
          if (method === 'POST') {
            setCharacters([...characters, { id: data.id, ...newCharacter }]);
          } else if (method === 'PUT') {
            setCharacters(characters.map(character =>
              character.id === editingCharacter.id ? { ...data, ...newCharacter } : character
            ));
          }
          setEditingCharacter(null);
          setNewCharacter({ name: '', details: '' });
          setErrors({});
        })
        .catch(error => console.error('Error making request:', error));
    }
  };

  const handleEditCharacter = (character) => {
    setNewCharacter(character);
    setEditingCharacter(character);
  };

  const handleCancelEdit = () => {
    setEditingCharacter(null);
    setNewCharacter({ name: '', details: '' });
    setErrors({});
  };


  const handleDeleteCharacter = (character) => {
    if (window.confirm('Are you sure you want to delete this character?')) {
      setCharacters(characters.filter((c) => c.id !== character.id));
    }
  };

  return (
    <div className="character-management">
      <h2>Character Management</h2>
      <ul className="character-list">
        {characters.map((character) => (
          <li key={character.id}>
            <strong>Name:</strong> {character.name}<br />
            <span><strong>Details:</strong> {character.details}</span>
            <button onClick={() => handleEditCharacter(character)}>Edit</button>
            <button onClick={() => handleDeleteCharacter(character)}>Delete</button>
          </li>
        ))}
      </ul>
  
      <h3>{editingCharacter ? 'Edit Character' : 'Add a New Character'}</h3>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newCharacter.name}
          onChange={handleInputChange}
        />
        {errors.name && <div className="error">{errors.name}</div>}
      </div>
  
      <div className="form-group">
        <input
          type="text"
          name="details"
          placeholder="Details"
          value={newCharacter.details}
          onChange={handleInputChange}
        />
        {errors.details && <div className="error">{errors.details}</div>}
      </div>
  
      <ButtonContainer>
        <button onClick={handleAddCharacter} className="add-button">
          {editingCharacter ? 'Update Character' : 'Add Character'}
        </button>
        {editingCharacter && (
          <CancelButton onClick={handleCancelEdit}>Cancel</CancelButton>
        )}
      </ButtonContainer>
    </div>
  );
        };

export default CharacterManagement;
