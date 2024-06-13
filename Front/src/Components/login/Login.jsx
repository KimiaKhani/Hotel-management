import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaUser, FaLock } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "./hero-image.png"
import './login.css'; 
import axios from 'axios'
import qs from 'qs'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate=useNavigate();

 


  const handleClickLogin = async() =>{

    const response = await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/token',
      data: qs.stringify({
        username: 'admin',
        password: 'admin'
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    });

    // Pass the token in the state
    navigate('/admin', { 
      state: { 
        token: response.data.access_token
      } 
    });
    
  }
  return (
    <section className="container mt-5 hero-wrapper" >
      <div className="row align-items-center justify-content-center hero-container">
        
        {/* Left side */}
        <div className="col-md-6 d-flex flex-column align-items-start hero-left">
          <motion.div
            initial={{ x: "-7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
          >
            <div className="hero-title">
              <div className="bg-warning rounded-circle" style={{ width: "50px", height: "50px" }}></div>
              <h1 className="ms-3">WelcomeBack</h1>
            </div>
            <form>
              <h2>Login</h2>
              <div className="mb-3 ">
                <input type="text" className="form-control" placeholder="Username" required />
                <FaUser className="position-absolute" style={{ right: "10px", top: "10px" }} />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password" required />
                <FaLock className="position-absolute" style={{ right: "10px", top: "10px" }} />
              </div>

              <div className="d-flex justify-content-between mb-3 remember-forgot">
                <div>
                  <input type="checkbox" className="form-check-input me-1" />
                  Remember me
                </div>
                <a href="#">Forgot password?</a>
              </div>

              <button className="btn btn-primary w-100 " type="submit" onClick={() => handleClickLogin()}>Login</button>

              <div className="text-center mt-3 register-link">
                Don't have an account? <a href="#">Register</a>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Right side */}
        <div className="col-md-6 d-flex justify-content-center hero-right d-xs-none">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="image-container"
          >
            <img src={Image} alt=""  />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Login;


