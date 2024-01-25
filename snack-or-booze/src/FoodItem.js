// FoodItem.js
import React from "react";
import "./FoodMenu.css";
import Item from "./Item";

function FoodItem({ items, cantFind }) {
  return <Item items={items} cantFind={cantFind} itemType="snack" />;
}

export default FoodItem;
