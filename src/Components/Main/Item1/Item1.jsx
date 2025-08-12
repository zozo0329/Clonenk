import React from "react";
import Item1Style from "./Item1.module.css";
import item from "../../../Images/shoes.webp";
const Item1 = () => {
  return (
    <div className={Item1Style.item1}>
      <img src={item} alt="item 1" />
    </div>
  );
};

export default Item1;
