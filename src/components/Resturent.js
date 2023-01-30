import React from "react";
import "./style.css";
import Menu from "./menuApi";
import { useState } from "react";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElm)=>{
      return curElm.category;
    })
  ),"All"
];
// console.log(uniqueList);

const Resturent = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (cat) => {

    if(cat === "All"){
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((cueElm) => {
      return cueElm.category === cat;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem = {filterItem} menuList= {menuList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturent;
