import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function AddUser() {
  const navigate =useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/adduser', formData);
      // Clear the form fields
      setFormData({ name: '', username: '', email: '' });
      console.log('User added successfully');
      navigate('/');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleBack = () => {
    navigate('/'); // Navigate back to the Home component
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Register User</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                Name
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='username' className='form-label'>
                User Name
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your username'
                name='username'
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                type='email'
                className='form-control'
                placeholder='Enter your email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <button type='submit' className='btn btn-outline-primary'>
              Submit
            </button>
            { <button type='button' className='btn btn-outline-danger' onClick={handleBack}>
Cancel
            </button> }

            
          </form>
        </div>
      </div>
    </div>
  );
}
