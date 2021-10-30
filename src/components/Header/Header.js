import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
  const { user, signOutUser } = useFirebase();
  return (
    <nav>
      <NavLink to='/home'>Home</NavLink>
      {!user ? (
        <>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/register'>Register</NavLink>
        </>
      ) : (
        <>
          <span>{user.displayName}</span>
          <button onClick={signOutUser}>Sign Out</button>
        </>
      )}
    </nav>
  );
};

export default Header;
