import React from "react";
import "./comnav.css";

const Comnav = () => {
  return (
    <div className="navB">
      <nav className="ord1">
        <div className="logoN">LMS</div>
        <ul>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Comnav;
