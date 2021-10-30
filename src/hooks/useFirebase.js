import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import firebaseInit from '../Firebase/Firebase.init';

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  firebaseInit();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);

  const googleProvider = new GoogleAuthProvider();
  const SignInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const signOutUser = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };
  return { user, error, SignInUsingGoogle, signOutUser };
};

export default useFirebase;
