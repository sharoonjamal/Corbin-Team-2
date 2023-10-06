import {useState, useEffect} from 'react';
import styled from 'styled-components';
import FanEdit from './FanEdit';

const FanWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

const FanManagement = () => {
  const [fans, setFans] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', favorite: 'Chess' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', favorite: 'Beth Harmon' },
  ]);

  const [newFan, setNewFan] = useState({ firstName: '', lastName: '', favorite: '' });
  const [editingFan, setEditingFan] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewFan({ ...newFan, [name]: value });
  };

  const handleAddFan = () => {
    setFans([...fans, { ...newFan, id: fans.length + 1 }]);
    setNewFan({ firstName: '', lastName: '', favorite: '' });
  };

  const handleEditFan = (fan) => {
    setEditingFan(fan);
  };

  const handleUpdateFan = (updatedFan) => {
    setFans(fans.map((fan) => (fan.id === updatedFan.id ? updatedFan : fan)));
    setEditingFan(null);
  };

  const handleDeleteFan = (id) => {
  const confirmDelete = window.confirm('Are you sure you want to delete this fan?');
    if (confirmDelete) {
    setFans(fans.filter((fan) => fan.id !== id));
  }
};

const fetchFansData = async () => {
  try {
    const response = await fetch('http://localhost:3000/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    setFans(data); 
  } catch (error) {
    console.error('Error fetching fans data:', error);
  }
};

useEffect(() => {
  fetchFansData();
}, []);

return (
  <div>
    <h2>Fan Management</h2>
    <ul>
      {fans.map((fan) => (
        <li key={fan.id}>
          {fan.firstName} {fan.lastName} - Favorite: {fan.favorite}
          <button onClick={() => handleEditFan(fan)} style={{ marginLeft: '10px' }}>
            Edit
          </button>
          <button onClick={() => handleDeleteFan(fan.id)} style={{ marginLeft: '10px' }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
    {editingFan && <FanEdit fan={editingFan} onFanUpdate={handleUpdateFan} />}
    <h3>Add a New Fan</h3>
    <input type="text" name="firstName" placeholder="First Name" value={newFan.firstName} onChange={handleInputChange} />
    <input type="text" name="lastName" placeholder="Last Name" value={newFan.lastName} onChange={handleInputChange} />
    <input type="text" name="favorite" placeholder="Favorite" value={newFan.favorite} onChange={handleInputChange} />
    <button onClick={handleAddFan} style={{ marginLeft: '10px' }}>
      Add Fan
    </button>
  </div>
);
};;


export default FanManagement;
