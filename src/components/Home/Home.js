import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className='all__center'>
      <h2>Home</h2>
      {user && (
        <>
          <h4>Name: {user.displayName}</h4>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt={user.displayName} />
        </>
      )}
    </div>
  );
};

export default Home;
