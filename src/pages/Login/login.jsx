import React from "react";
import "./login.css";
import Comnav from "../../components/ComNav/comnav";
import { MdOutlineMailLock } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

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
        <div className="inputform">
          <form action="submit">
            <div className="email">
              <input
                type="text"
                id="email"
                class="email"
                placeholder="abc@gmail.com  "
              />
              <MdOutlineMailLock className="icons" />
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
              <button className="Signin">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
