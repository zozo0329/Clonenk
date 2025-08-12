import React from "react";
import NavActionStyle from "./NavActions.module.css";
import JordanLogo from "../../../Images/Jordan Logo.png";
const NavActions = () => {
  return (
    <div className={NavActionStyle.navAction}>
      <div className={NavActionStyle.jordanLogo}>
        <img src={JordanLogo} alt="Jordan Logo" />
      </div>
      <div className={NavActionStyle.nav}>
        <ul>
          <li>Find a Store</li>
          <li>|</li>
          <li>Help</li>
          <li>|</li>
          <li>Join Us</li>
          <li>|</li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
};

export default NavActions;
