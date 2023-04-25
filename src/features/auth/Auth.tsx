/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useState, useEffect } from 'react';

// <div className="">
//   {user ? (
//     <button
//       onClick={() => {
//         localStorage.clear();
//       }}>log out</button>
//   ) : (
//     <button onClick={handleClick}>Sign in with Google</button>
//   )}
// </div>

import { app, provider } from './firebaseConfig';
import { getAuth, signInWithPopup } from 'firebase/auth';

export const AuthProvider: React.FC = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState<any>(auth.currentUser);

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setUser(data.user.email);
        localStorage.setItem('email', data.user.email as string);
      })
      // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    setUser(localStorage.getItem('email'));
  });

  // <a href="#!" className="me-4" onClick={handleClick}>
  //   Google
  // </a>;

  return (
    <div className="bg-black">lorem</div>
  );
};
