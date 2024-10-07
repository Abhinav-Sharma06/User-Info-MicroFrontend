import React from 'react';
import { useState, useEffect } from 'react';
import EditEmailForm from './EditEmailForm';
import './loader.css';

const mockUserData = {
  name: 'Abhinav Sharma',
  email: 'abhinavsharma6604@gmail.com',
};

const UserInfoCard = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Simulating data fetching with a timeout
    setTimeout(() => {
      setUser(mockUserData);
    }, 1000);
  }, []);

  const handleEmailUpdate = (newEmail) => {
    setUser((prevUser) => ({ ...prevUser, email: newEmail }))
    setIsEditing(false);
  };

  if (!user) {
    return <div className="flex flex-col justify-end items-center gap-2">
      <div className="loader"></div>
      <p className='text-xl font-medium'>Loading...</p>
    </div> 
  }

  return (
    <div className='text-white text-sm md:text-xl  bg-black shadow-lg rounded-lg p-8 mt-4'>
      <h2 className='py-[4px]'>Name: {user.name}</h2>
      {!isEditing ? (
        <>
          <p>Email: {user.email}</p>
          <button className='mt-6 bg-amber-600 py-[2px] px-2 rounded-md hover:scale-110 text-sm md:text-lg font-medium transition-all duration-500' onClick={() => setIsEditing(true)}>Edit Email</button>
        </>
      ) : (
        <EditEmailForm handleEmailUpdate={handleEmailUpdate} />
      )}
    </div>
  );
};



export default UserInfoCard;