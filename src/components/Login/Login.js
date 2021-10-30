import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
  const { SignInUsingGoogle, SignInUsingGitHub } = useFirebase();
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
