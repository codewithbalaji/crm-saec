import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginValidation from "./LoginValidation";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(LoginValidation(values));
    if(errors.email === "" && errors.password === ""){
      axios.post('http://localhost:8081/login', values)
      .then(res => {
        if(res.data === "Success") {
          localStorage.setItem('authToken', 'true');
          navigate('/home');
        } else {
          alert("No account found");
        }
       
      })
   

  }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign-in</h2>
        <form className="container" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            <span>{errors.email && <span className="text-danger">{errors.email}</span>}</span>
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleInput}
              className="form-control rounded-0"
            />
             <span>{errors.password && <span className="text-danger">{errors.password}</span>}</span>
          </div>
          <button type="submit" className="btn btn-success w-100">
            Log in
          </button>
          <p>You agree to our terms and policies</p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
