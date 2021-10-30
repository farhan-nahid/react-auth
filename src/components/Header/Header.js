import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user, signOutUser } = useAuth();
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
      <NavLink to='/shipping'>Shipping</NavLink>
    </nav>
  );
};

export default Header;
