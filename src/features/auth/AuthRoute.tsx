/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useState, useEffect } from 'react';

import { app, provider } from './firebaseConfig';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: any;
}

export const AuthRoute: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    AuthCheck();
  }, [auth]);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoading(false);
    } else {
      console.log('unauthorized');
      navigate('./login');
    }
  });

  if (isLoading) return <p>Loading ..........</p>;

  return <>{children}</>;
};
