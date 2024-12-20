import React from "react";
import "./hero.css";
// import Navbar from "../../components/Navbar/navBar";
/*import heroImage from "../../assets//hero-bg.png";*/
// import { SignInButton } from "@clerk/clerk-react";

import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import Home from "../Home/Home";

const Hero = () => {
  return (
    <>
      {/* <Navbar /> */}

      <SignedOut>
        <div className="hero">
          <div className="hero-content">
            <h1>Welcome to the R/ Karagastalawa Library Management System</h1>
            <p>Your gateway to knowledge, resources, and endless learning!</p>
          </div>
          <div className="sign">
            <SignInButton className="btn" />
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <Home />
      </SignedIn>
    </>
  );
};

export default Hero;
