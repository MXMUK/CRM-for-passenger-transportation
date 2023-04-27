/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const Login: FC = () => {
  const [isAuthing, setIsAuthing] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  const signWithGoogle = async () => {
    setIsAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {
        console.log(res.user.uid);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        setIsAuthing(false);
      });
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card bg-secondary max-vh-100">
              <div className="card-body p-4">
                <form className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-1 text-uppercase ">Login</h2>

                  <p className=" mb-4">Please enter your login and password!</p>

                  <div className="mx-4">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label ">
                        Email address
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                      />
                    </div>

                    <div className="mb-2">
                      <label htmlFor="password" className="form-label ">
                        Password
                      </label>

                      <input
                        type="password"
                        className="form-control border-dark border-bottom"
                        id="password"
                        placeholder="*******"
                      />
                    </div>

                    <p className="small">
                      <a className="text-light" href="forget-password.html">
                        Forgot password?
                      </a>
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="mb-0">
                      Not a member? <a href="#!">Register</a>
                    </p>

                    <p className="mb-0">or sign up with:</p>

                    <div className="d-flex justify-content-center mb-3">
                      <div className="text-white">
                        <i className="btn bi bi-facebook"></i>
                      </div>

                      <div className="text-white" onClick={() => signWithGoogle()}>
                        <i className="btn bi bi-google"></i>
                      </div>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-dark" type="submit">
                      Login
                    </button>
                  </div>
                </form>

                <div>
                  <p className="mb-0  text-center">
                    {"Do'nt have an account? "}

                    <a href="signup.html" className="text-light fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
