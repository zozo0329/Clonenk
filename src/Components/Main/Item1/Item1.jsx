import React from "react";
import Item1Style from "./Item1.module.css";
import item from "../../../Images/shoes.webp";
const Item1 = () => {
  return (
    <>
      <div className={Item1Style.item1}>
        <img src={item} alt="item 1" />
      </div>
      <div className={Item1Style.tags}>
        <div className={Item1Style.title}>
          <p>Nike Running</p>
          <h1>More Choice. More Running.</h1>
        </div>
        <div className={Item1Style.btn}>
          <button>Shop</button>
        </div>
      </div>
    </>
  );
};

export default Item1;
