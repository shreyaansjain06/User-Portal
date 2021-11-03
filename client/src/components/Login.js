import React from 'react';
import img from '../assets/img/6461.jpg';
const Login = () => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle w-75">
      <div className="shadow p-3 mb-5 bg-body rounded ">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <img className="img mt-3" src={img} alt="img" />
              <div>
                Create an Account
              </div>
            </div>
            <div className="col">
              <form className="m-5 signin">
                <h1 className="mt-4 mb-4 text-start">Login</h1>

                <div className="mb-4">
                  <span className="mdi mdi-email me-2"></span>
                  <input
                  name="login_email"
                    type="text"
                    className="border-top-0 border-start-0 border-end-0"
                    placeholder="Your Email"
                    autoComplete="off"
                    id="login_email"
                  />
                </div>

                <div className="mb-4">
                  <span className="mdi mdi-lock me-2"></span>
                  <input
                  name="login_password"
                    type="text"
                    className="border-top-0 border-start-0 border-end-0"
                    placeholder="Password"
                    autoComplete="off"
                    id="login_password"
                  />
                </div>

                <input
                name="login_submit"
                  type="submit"
                  className="btn btn-primary ms-4 mt-3"
                  value="Log In"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
