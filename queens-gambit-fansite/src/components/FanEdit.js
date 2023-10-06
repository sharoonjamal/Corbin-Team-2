import { useState, useEffect } from 'react';
import styled from 'styled-components';

const FanEditWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

const FanEdit = ({ fan, onFanUpdate }) => {
  const [editedFan, setEditedFan] = useState(fan);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedFan({ ...editedFan, [name]: value });
  };

  const handleUpdateFan = () => {
    onFanUpdate(editedFan);
  };

  return (
    <div>
      <h2>Edit Fan</h2>
      <input type="text" name="firstName" placeholder="First Name" value={editedFan.firstName} onChange={handleInputChange} />
      <input type="text" name="lastName" placeholder="Last Name" value={editedFan.lastName} onChange={handleInputChange} />
      <input type="text" name="favorite" placeholder="Favorite" value={editedFan.favorite} onChange={handleInputChange} />
      <button onClick={handleUpdateFan}>Update Fan</button>
      
    </div>
  );
};

export default FanEdit;
