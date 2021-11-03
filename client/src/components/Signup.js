import React from 'react';
import img from '../assets/img/6461.jpg';
const Signup = () => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle w-75">
      <div className="shadow p-3 mb-5 bg-body rounded ">
        <div className="container">
          <div className="row">
            <div className="col">
              <form className="m-5 signin">
                <h1 className="mt-4 mb-4 text-start">Sign up</h1>
                <div className="mb-4">
                  <span className="mdi mdi-account me-2"></span>
                  <input
                   name="signin_name"
                    type="text"
                    className="border-top-0 border-start-0 border-end-0 shadow-none"
                    placeholder="Your Name"
                    autoComplete="off"
                    id="signup_name"
                  />
                </div>
                <div className="mb-4">
                  <span className="mdi mdi-email me-2"></span>
                  <input
                   name="signin_email"
                    type="text"
                    className="border-top-0 border-start-0 border-end-0"
                    placeholder="Your Email"
                    autoComplete="off"
                    id="signup_email"
                  />
                </div>
                <div className="mb-4">
                  <span className="mdi mdi-phone me-2"></span>
                  <input
                   name="signin_phone"
                    type="text"
                    className="border-top-0 border-start-0 border-end-0"
                    placeholder="Mobile Number"
                    autoComplete="off"
                    id="signin_number"
                  />
                </div>
                <div className="mb-4">
                  <span className="mdi mdi-storefront-outline me-2"></span>
                  <input
                   name="signin_work"
                    type="text"
                    className="border-top-0 border-start-0 border-end-0"
                    placeholder="Your Profession"
                    autoComplete="off"
                    id="signin_profession"
                  />
                </div>
                <div className="mb-4">
                  <span className="mdi mdi-lock me-2"></span>
                  <input
                   name="signin_password"
                    type="text"
                    className="border-top-0 border-start-0 border-end-0"
                    placeholder="Password"
                    autoComplete="off"
                    id="signup_password"
                  />
                </div>
                <div className="mb-4">
                  <span className="mdi mdi-lock me-2"></span>
                  <input
                   name="signin_cpassword"
                    type="text"
                    className="border-top-0 border-start-0 border-end-0"
                    placeholder="Confirm Password"
                    autoComplete="off"
                    id="signup_cpassword"
                  />
                </div>
                <input
                 name="signin_submit"
                 name="signin_name"
                    type="submit"
                    className="btn btn-primary ms-4 mt-3"
                    value="Regsister"
                  />
              </form>
            </div>
            <div className="col text-center">
            <img className="img mt-5" src={img} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;