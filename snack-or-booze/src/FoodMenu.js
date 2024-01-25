// FoodMenu.js
import React from "react";
import "./FoodMenu.css";
import Menu from "./Menu";

const FoodMenu = ({ snacks }) => {
  return <Menu items={snacks} categoryPath="snacks" />;
};

export default FoodMenu;