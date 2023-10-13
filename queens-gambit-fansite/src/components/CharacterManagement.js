import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Home from './Home';



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
  const [characters, setCharacters] = useState([]);
  const [editingCharacter, setEditingCharacter] = useState(null);
  const [newCharacter, setNewCharacter] = useState({
     firstName: '',
     lastName: '',
     gender:'',
     country: '',
     fideRating: '', });
     
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchCharacterData();
  }, []);

  const fetchCharacterData = () => {
    fetch('http://localhost:8080/api/characters')
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

    const trimmedFirstName = newCharacter.name ? newCharacter.name.trim() : '';
    const trimmedLastName = newCharacter.details ? newCharacter.details.trim() : '';
    const trimmedGender = newCharacter.details ? newCharacter.details.trim() : '';
    const trimmedCountry = newCharacter.details ? newCharacter.details.trim() : '';
    const trimmedFIDErating = newCharacter.details ? newCharacter.details.trim() : '';

    if (!trimmedFirstName) {
      newErrors.first_name = 'First name is required';
      isValid = false
    }

    if (!trimmedLastName) {
      newErrors.last_name = 'Last name is required';
      isValid = false;
    }

    if (!trimmedGender) {
      newErrors.gender = 'Gender is required';
      isValid = false;
    }
    if (!trimmedCountry) {
      newErrors.country = 'Country is required';
      isValid = false;
    }
    if (!trimmedFIDErating) {
      newErrors.FIDE_rating = 'FIDE rating is required';
      isValid = false;
    }


    setErrors(newErrors);
    return isValid;
  };

  const handleAddCharacter = () => {
    console.log('Add button clicked');
    if (validateForm()) {
      const method = editingCharacter ? 'PUT' : 'POST';
      const Url = editingCharacter ? `http://localhost:8080/api/characters/${editingCharacter.id}` : 'http://localhost:8080/api/characters'

      fetch(Url,  {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCharacter)
      })
        .then(response => response.json())
        .then(data => {
          if (method === 'POST') {
            setCharacters([...characters, data]);
          } else if (method === 'PUT') {
            setCharacters((characters) =>
              characters.map((character) =>
                character.id === editingCharacter.id ? { ...data, ...newCharacter } : character
              )
            );
          }
         
        fetchCharacterData();
          setErrors({});
        })
        .catch(error => console.error('Error making request:', error));
    }
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Editing character:', editingCharacter);
  
    const method = editingCharacter ? 'PUT' : 'POST';
    const apiUrl = editingCharacter
      ? `http://localhost:8080/api/characters/${editingCharacter.characterId}`
      : 'http://localhost:8080/api/characters';
  
    const config = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCharacter),
    };
  
    return fetch(apiUrl, config)
      .then((response) => {
        if (response.ok) {
          setNewCharacter({ firstName: '',
                            lastName: '',
                            gender: '',
                            country:'',
                            fideRating: '', });
          fetchCharacterData();
          setErrors({});
          return response.json();
        }else {
          
        }
      })
      .catch((errs) => {
        console.log('Error response from server:', errs);
        if (errs.length) {
          setErrors(errs);
        } else {
          setErrors([errs]);
        }
      });
  };
  

  const handleEditCharacter = (character) => {
    setNewCharacter({ ...character });
    setEditingCharacter(character);

    if (validateForm()) {
      const method = 'PUT';
  
      const apiUrl = `http://localhost:8080/api/characters/${character.characterId}`;
  
      const config = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCharacter),
      };
  
      fetch(apiUrl, config)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return Promise.reject(response.json());
          }
        })
        .then((data) => {
          const updatedCharacters = characters.map((character) =>
            character.id === editingCharacter.id ? { ...data, ...newCharacter } : character
          );
          setCharacters(updatedCharacters);
          setEditingCharacter(null);
          setNewCharacter({ first_name: '', last_name: '', gender: '', country: '', FIDE_rating: '' });
          fetchCharacterData();
          setErrors({});
        })
        .catch((error) => {
          console.error('Error making request:', error);
          setErrors([error]);
        });
    }
  };
  

  const handleCancelEdit = () => {
    setEditingCharacter(null);
    setNewCharacter({ name: '', details: '' });
    setErrors({});
  };

  const handleDeleteCharacter = async (character) => {
    const confirmed = window.confirm('Are you sure you want to delete this character?');
  
    if (confirmed) {
      console.log('Character being deleted:', character);
  
      if (validateForm()) {
        const method = 'DELETE';
        const Url = `http://localhost:8080/api/characters/${character.characterId}` ;
        fetch(Url, {
          method,
        })
          .then(response => {
            if (response.ok) {
              setCharacters(characters.filter(char => char.characterId !== character.characterId));
              console.log('Character deleted successfully.');
            } else {
              console.error('Failed to delete character.');
            }
          })
          .catch(error => console.error('Error making request:', error));
      }
    }
  };
  
  

  return (
    <div className="character-management">
      <h2>Character Management</h2>
      <ul className="character-list">
        {characters.map((character) => (
          <li key={character.id}>
            <strong>Name:</strong> {character.firstName} {character.lastName}<br />
            <strong>Gender:</strong> {character.gender}<br />
            <strong>Country:</strong> {character.country}<br />
            <strong>FIDE Rating:</strong> {character.fideRating}<br />
         
            <button onClick={() => handleEditCharacter(character)}>Edit</button>
            <button onClick={() => handleDeleteCharacter(character)}>Delete</button>
          </li>
        ))}
      </ul>
  
      <h3>{editingCharacter ? 'Edit Character' : 'Add a New Character'}</h3>
      <form onSubmit={handleSubmit}>

      <div className="form-group">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={newCharacter.firstName}
          onChange={handleInputChange}
        />
        {errors.firstName && <div className="error">{errors.name}</div>}
      </div>
  
      <div className="form-group">
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={newCharacter.lastName}
          onChange={handleInputChange}
        />
        {errors.lastName && <div className="error">{errors.details}</div>}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={newCharacter.gender}
          onChange={handleInputChange}
        />
        {errors.details && <div className="error">{errors.details}</div>}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={newCharacter.country}
          onChange={handleInputChange}
        />
        {errors.details && <div className="error">{errors.details}</div>}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="fideRating"
          placeholder="FIDE_rating"
          value={newCharacter.fideRating}
          onChange={handleInputChange}
        />
        {errors.details && <div className="error">{errors.details}</div>}
      </div>
  
      <ButtonContainer>
        <button type="submit" className="add-button">
          {editingCharacter ? 'Update Character' : 'Add Character'}
        </button>
        {editingCharacter && (
          <CancelButton onClick={handleCancelEdit}>Cancel</CancelButton>
        )}
      </ButtonContainer>
      </form>
    </div>
  );
        };

export default CharacterManagement;
