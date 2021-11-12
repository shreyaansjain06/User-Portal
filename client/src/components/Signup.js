import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import img from '../assets/img/6461.jpg';
const Signup = () => {
  const history=useHistory();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: '',
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
const handleSubmit=async(e)=>{
  // console.log(e);
  e.preventDefault();
  const {name,email,phone,work,password,cpassword}=user;
  // console.log(user);
   const res= await fetch('/register',{ 
     method: "POST",
     headers:{
       "Content-Type": "application/json"
     },
     body:JSON.stringify({
      //  dont need to write name:name when both same
      name,email,phone,work,password,cpassword
     })
   })
   const data= await res.json();
   if(data.status===422||!data)
   {
     window.alert("invalid registration");
     console.log("invalid registration");
   }
   else{
     window.alert("registration successfull");
     console.log("registration Sucessfull");
     history.push('/login')
   }
}

  return (
    <div className="position-absolute top-50 start-50 translate-middle w-75">
      <div className="shadow p-3 mb-5 bg-body rounded ">
        <div className="container">
          <div className="row">
            <div className="col">
              <form className="m-5 signin" method="POST">
                <h1 className="mt-4 mb-4 text-start">Sign up</h1>
                <div className="mb-4">
                  <span className="mdi mdi-account me-2"></span>
                  <input
                    name="name"
                    type="text"
                    className="border-top-0 border-start-0 border-end-0 shadow-none"
                    placeholder="Your Name"
                    autoComplete="off"
                    id="signup_name"
                    value={user.name}
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-4">
                  <span className="mdi mdi-email me-2"></span>
                  <input
                    name="email"
                    type="text"
                    className="border-top-0 border-start-0 border-end-0"
                    placeholder="Your Email"
                    autoComplete="off"
                    id="signup_email"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-4">
                  <span className="mdi mdi-phone me-2"></span>
                  <input
                    name="phone"
                    type="text"
                    className="border-top-0 border-start-0 border-end-0"
                    placeholder="Mobile Number"
                    autoComplete="off"
                    id="signin_number"
                    value={user.phone}
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-4">
                  <span className="mdi mdi-storefront-outline me-2"></span>
                  <input
                    name="work"
                    type="text"
                    className="border-top-0 border-start-0 border-end-0"
                    placeholder="Your Profession"
                    autoComplete="off"
                    id="signin_profession"
                    value={user.work}
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-4">
                  <span className="mdi mdi-lock me-2"></span>
                  <input
                    name="password"
                    type="password"
                    className="border-top-0 border-start-0 border-end-0"
                    placeholder="Password"
                    autoComplete="off"
                    id="signup_password"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-4">
                  <span className="mdi mdi-lock me-2"></span>
                  <input
                    name="cpassword"
                    type="password"
                    className="border-top-0 border-start-0 border-end-0"
                    placeholder="Confirm Password"
                    autoComplete="off"
                    id="signup_cpassword"
                    value={user.cpassword}
                    onChange={handleInput}
                  />
                </div>
                <input
                  name="submit"
                  type="submit"
                  className="btn btn-primary ms-4 mt-3"
                  value="Sign up"
                  onClick={handleSubmit}
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
