import type { FC } from 'react';

export const Login: FC = () => {
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
                      <a className="text-primary" href="forget-password.html">
                        Forgot password?
                      </a>
                    </p>
                  </div>

                  <div className="text-center">
                    <p>
                      Not a member? <a href="#!">Register</a>
                    </p>

                    <p className="mb-0">or sign up with:</p>

                    <div className="d-flex gap-2 justify-content-center mb-3">
                      <a href="#!" className="text-white">
                        <i className="bi bi-facebook"></i>
                      </a>

                      <a href="#!" className="text-white">
                        <i className="bi bi-google"></i>
                      </a>
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

                    <a href="signup.html" className="text-primary fw-bold">
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
