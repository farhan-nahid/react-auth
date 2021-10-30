import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { SignInUsingGoogle, SignInUsingGitHub } = useAuth();
  return (
    <div className='all__center'>
      <h2>Login</h2>
      <button onClick={SignInUsingGoogle}>Google Sign in</button>
      <br />
      <button onClick={SignInUsingGitHub}>GitHub Sign in</button>
    </div>
  );
};

export default Login;
