import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
  const { SignInUsingGoogle, user } = useFirebase();
  console.log(user);
  return (
    <div>
      <h2>Login</h2>
      <button onClick={SignInUsingGoogle}>Google Sign in</button>
    </div>
  );
};

export default Login;
