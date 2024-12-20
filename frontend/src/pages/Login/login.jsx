import React from "react";
import "./login.css";
import Comnav from "../../components/ComNav/comnav";
import { IoIosContact } from "react-icons/io";
import { TbLockPassword } from "react-icons/tb";
import { Link } from 'react-router-dom';

import {  SignInButton } from "@clerk/clerk-react";

const Login = () => {
  return (
    <>
    <Comnav />
    <div className="loginpg">
      <div className="box">
        <div className="content">
        
          <h1>SIGN IN</h1>
          <h2>Sign in via user name and password</h2>
        </div>
        <SignInButton />
        <div className="inputform">
          <form action="submit">
            <div className="email">
              <input
                type="text"
                id="email"
                class="email"
                placeholder="abc@gmail.com  "
              />
              <IoIosContact className="icons" />
            </div>
            <div className="password">
              <input
                type="text"
                id="password"
                class="password"
                placeholder="Abc@2025"
              />
              <TbLockPassword className="icons" />
            </div>
            <div className="btn">
            <Link to="/home"><button className="Signin">Sign In</button></Link>
           
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;


