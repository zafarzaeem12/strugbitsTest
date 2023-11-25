import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    profilePicture: null, // We'll use this for the profile picture
  });
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      profilePicture: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server
    console.log(formData);
    dispatch(formData)
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Profile Picture:
        <input type="file" name="profilePicture" onChange={handleFileChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;