// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import FoodMenu from "./FoodMenu";
import FoodItem from "./FoodItem";
import DrinksItems from "./DrinkItems";
import DrinksMenu from "./DrinksMenu";
import AddItemForm from "./AddItemForm";
import "./form.css";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const handleAddsnack = (newItem) => {
    // Implement logic to add the new item to your data (snacks or drinks)
    // For simplicity, let's assume it's adding to snacks
    setSnacks([...snacks, newItem]);
  };
  const handleAddDrink = (newItem) => {
    // Implement logic to add the new item to your data (snacks or drinks)
    // For simplicity, let's assume it's adding to snacks
    setDrinks([...drinks, newItem]);
  };

  useEffect(() => { 
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      console.log(drinks)
      setDrinks(drinks)
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  // if (isLoading) {
  //   return <p>Loading &hellip;</p>;
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
          <Route exact path="/addsnack">
              {/* Render the form for adding items */}
              <AddItemForm addItem={handleAddsnack} />
            </Route>
          <Route exact path="/addDrinks">
              {/* Render the form for adding items */}
              <AddItemForm addItem={handleAddDrink} />
            </Route>
            <Route exact path="/">
              <Home snacks={snacks} />
            </Route>
            <Route exact path="/snacks">
              <FoodMenu snacks={snacks} title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <DrinksMenu drinks={drinks} title="drinks" />
            </Route>
            <Route path="/snacks/:id">
              <FoodItem items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <DrinksItems items={drinks} cantFind="/drinks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want 😔.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
