// DrinksMenu.js
import React from "react";
import "./FoodMenu.css";
import Menu from "./Menu";

const DrinksMenu = ({ drinks }) => {
  return <Menu items={drinks} categoryPath="drinks" />;
  
};
export default DrinksMenu;