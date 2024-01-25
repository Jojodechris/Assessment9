// DrinkItems.js
import React from "react";
import "./FoodMenu.css";
import Item from "./Item";

function DrinksItems({ items, cantFind }) {
  return <Item items={items} cantFind={cantFind} itemType="drink" />;
}

export default DrinksItems;