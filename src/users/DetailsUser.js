// DetailsUser.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

export default function DetailsUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);

  const handleBack = () => {
    navigate('/'); // Navigate back to the Home component
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        background: `url('https://i.ibb.co/DzKz5Ng/bg1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <h2 style={{ display:'flex', fontSize: '36px', marginBottom: '2x',paddingBottom:'50px' }}>User Details</h2>
      <div style={{ fontSize: '36px', marginBottom: '5px',paddingBottom:'50px' }}>
        <strong>Name:</strong> {user.name}
      </div>
      <div style={{ fontSize: '36px', marginBottom: '5px',paddingBottom:'50px' }}>
        <strong>Email:</strong> {user.email}
      </div>
      <div style={{ fontSize: '36px', marginBottom: '5px',paddingBottom:'50px' }}>
        <strong>Username:</strong> {user.username}
      </div>
      <button className="btn btn-primary" onClick={handleBack} style={{ fontSize: '24px' }}>
        Back
      </button>
    </div>
  );
}
