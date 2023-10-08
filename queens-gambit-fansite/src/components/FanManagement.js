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

const FanManagement = () => {
  const [fans, setFans] = useState([]);
  const [editingFan, setEditingFan] = useState(null);
  const [newFan, setNewFan] = useState({
    id:'',
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    favoriteCharacter: '',
    favoriteCharacterId: '',
    fideRating: '',
    
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchFanData();
  }, []);

  const fetchFanData = () => {
    fetch('http://localhost:8080/api/fans')
      .then((response) => response.json())
      .then((data) => setFans(data))
      .catch((error) => console.error('Error fetching fan data:', error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewFan({ ...newFan, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    const trimmedId = newFan.id ? newFan.id.trim() : '';
    const trimmedFirstName = newFan.firstName ? newFan.firstName.trim() : '';
    const trimmedLastName = newFan.lastName ? newFan.lastName.trim() : '';
    const trimmedEmail = newFan.email ? newFan.email.trim() : '';
    const trimmedCountry = newFan.country ? newFan.country.trim() : '';
    const trimmedFavoriteCharacter = newFan.favoriteCharacter ? newFan.favoriteCharacter.trim() : '';
    const trimmedFavoriteCharacterId = newFan.favoriteCharacterId ? newFan.favoriteCharacterId.trim() : '';
    const trimmedFIDErating = newFan.fideRating ? newFan.fideRating.trim() : '';

    if (!trimmedId) {
      newErrors.id = 'Id is required';
      isValid = false
    }

    if (!trimmedFirstName) {
      newErrors.firstName = 'First name is required';
      isValid = false
    }

    if (!trimmedLastName) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!trimmedEmail) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    if (!trimmedCountry) {
      newErrors.country = 'Country is required';
      isValid = false;
    }

    if (!trimmedFavoriteCharacter) {
      newErrors.favoriteCharacter = 'Favorite Character is required';
      isValid = false;
    }

    if (!trimmedFavoriteCharacterId) {
      newErrors.favoriteCharacterId = 'Favorite Character Id is required';
      isValid = false;
    }

    if (!trimmedFIDErating) {
      newErrors.fideRating = 'FIDE rating is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleAddFan = () => {
    console.log('Add button clicked');
    if (validateForm()) {
      const method = editingFan ? 'PUT' : 'POST';
      const Url = editingFan ? `http://localhost:8080/api/fans/${editingFan.id}` : 'http://localhost:8080/api/fans'

      const fanData = {
        ...newFan,
        favoriteCharacterId: parseInt(newFan.favoriteCharacterId)
      };

      if(!editingFan) {
        delete fanData.id;
      }
      
      fetch(Url,  {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fanData)
      })
      .then(response => {
        if (!response.ok) {
          return response.json().then(error => {
            throw error;
          });
        }
        return response.json();
      })
        .then(data => {
          if (method === 'POST') {
            setFans([...fans, data]);
          } else if (method === 'PUT') {
            setFans(prevFans =>
              prevFans.map(fan =>
                fan.id === editingFan.id ? { ...data, ...newFan } : fan
              )
            );
          }
         
        fetchFanData();
          setErrors({});
        })
        .catch(error => console.error('Error making request:', error));
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Editing fan:', editingFan);
  
    const method = editingFan ? 'PUT' : 'POST';
    const apiUrl = editingFan
      ? `http://localhost:8080/api/fans/${editingFan.fanId}`
      : 'http://localhost:8080/api/fans';

      const fanData = {
        ...newFan,
        favoriteCharacterId: parseInt(newFan.favoriteCharacterId) 
      }
  
    const config = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFan),
    };
  
    return fetch(apiUrl, config)
      .then((response) => {
        if (response.ok) {
          setNewFan({ id: '',
                      firstName: '',
                      lastName: '',
                      email: '',
                      country: '',
                      favoriteCharacter: '',
                      favoriteCharacterId:'',
                      fideRating: '', });
      fetchFanData();
      setErrors({});
        return response.json();
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
  

 const handleEditFan = (fan) => {
    setNewFan({ ...fan });
    setEditingFan(fan);
  
    if (validateForm()) {
      const method = 'PUT';
  
      const apiUrl = `http://localhost:8080/api/fans/${fan.fanId}`;
      const config = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFan),
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
          const updatedFans = fans.map((fan) =>
            fan.id === editingFan.id ? { ...data, ...newFan } : fan
          );
          setFans(updatedFans);
          setEditingFan(null);
          setNewFan({ id:'', firstName: '', lastName: '', email: '', country:'',
                      favoriteCharacter:'', favoriteCharacterId:'', fideRating:'' });
          fetchFanData();
          setErrors({});
        })
        .catch((error) => {
          console.error('Error making request:', error);
          setErrors([error]);
        });
    }
  };

  const handleCancelEdit = () => {
    setEditingFan(null);
    setNewFan({ id:'', firstName: '', lastName: '', email: '',
                country: '', favoriteCharacter:'', favoriteCharacterId:'', fideRating:'' }); 
    setErrors({});
  };

  const handleDeleteFan = async (fan) => {
    const confirmed = window.confirm('Are you sure you want to delete this fan?');

    if (confirmed) {
      console.log('Fan being deleted:', fan);

    if (validateForm()) {
      const method = 'DELETE';
      const url = `http://localhost:8080/api/fans/${fan.fanId}`;
        
        fetch(url, {
          method,
        })
          .then(response => {
            if (response.ok) {
              setFans(fans.filter(fan => fan.fanId !== fan.fanId));
              console.log('Fan deleted successfully.');
            } else {
              console.error('Failed to delete fan.');
            }
          })
          .catch(error => console.error('Error making request:', error));
      }
    }
  };

  return (
    <div className="fan-management">
      <h2>Fan Management</h2>
      <ul className="fan-list">
        {fans.map((fan) => (
          <li key={fan.id}>
            <strong>Id:</strong> {fan.id} {fan.id}<br />
            <strong>Name:</strong> {fan.firstName} {fan.lastName}<br />
            <strong>Email:</strong> {fan.email}<br />
            <strong>Country:</strong> {fan.country}<br />
            <strong>Favorite Character:</strong> {fan.favoriteCharacter}<br />
            <strong>Favorite CharacterId:</strong> {fan.favoriteCharacterId}<br />
            <strong>FIDE Rating:</strong> {fan.fideRating}<br />

            <button onClick={() => handleEditFan(fan)}>Edit</button>
            <button onClick={() => handleDeleteFan(fan)}>Delete</button>
          </li>
        ))}
      </ul>

      <h3>{editingFan ? 'Edit Fan' : 'Add a New Fan'}</h3>
      <form onSubmit={handleSubmit}>

      <div className="form-group">
        <input
          type="text"
          name="id"
          placeholder="Id"
          value={newFan.id}
          onChange={handleInputChange}
        />
        {errors.id && <div className="error">{errors.id}</div>}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={newFan.firstName}
          onChange={handleInputChange}
        />
        {errors.firstName && <div className="error">{errors.firstName}</div>}
      </div>
  
      <div className="form-group">
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={newFan.lastName}
          onChange={handleInputChange}
        />
        {errors.lastName && <div className="error">{errors.lastName}</div>}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={newFan.email}
          onChange={handleInputChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={newFan.country}
          onChange={handleInputChange}
        />
        {errors.country && <div className="error">{errors.country}</div>}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="favoriteCharacter"
          placeholder="Favorite_Character"
          value={newFan.favoriteCharacter}
          onChange={handleInputChange}
        />
        {errors.favoriteCharacter && <div className="error">{errors.favoriteCharacter}</div>}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="favoriteCharacterId"
          placeholder="Favorite_Character_Id"
          value={newFan.favoriteCharacterId}
          onChange={handleInputChange}
        />
        {errors.favoriteCharacterId && <div className="error">{errors.favoriteCharacterId}</div>}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="fideRating"
          placeholder="FIDE_Rating"
          value={newFan.fideRating}
          onChange={handleInputChange}
        />
        {errors.fideRating && <div className="error">{errors.fideRating}</div>}
      </div>

      <ButtonContainer>
        <button type="submit" className="add-button">
          {editingFan ? 'Update Fan' : 'Add Fan'}
        </button>
        {editingFan && (
          <CancelButton onClick={handleCancelEdit}>Cancel</CancelButton>
        )}
      </ButtonContainer>
      </form>
    </div>
  );
        };
export default FanManagement;