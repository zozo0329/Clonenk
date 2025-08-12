import React from "react";
import NavBarStyle from "./NavBar.module.css";
import NikeLogo from "../../../Images/Nike Logo.png";
import SearchIcon from "../../../Images/search.png";
import Heart from "../../../Images/Heart.png";
import Bag from "../../../Images/Bag.png";
const NavBar = () => {
  return (
    <div className={NavBarStyle.navbar}>
      <div className={NavBarStyle.navLogo}>
        <img src={NikeLogo} alt="Nike Logo" />
      </div>
      <div className={NavBarStyle.featured}>
        <ul>
          <li>New & Featured</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sale</li>
          <li>SNKRS</li>
        </ul>
      </div>
      <div className={NavBarStyle.inputs}>
        <img src={SearchIcon} alt="search Icon" />
        <input type="text" placeholder="Search" />
        <div className={NavBarStyle.icons}>
          <img src={Heart} alt="Heart Icon" />
          <img src={Bag} alt="Bag Icon" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
