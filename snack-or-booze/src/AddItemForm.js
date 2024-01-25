// AddItemForm.js
import React, { useState } from "react";

function AddItemForm({ addItem }) {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemRecipe, setItemRecipe] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if required fields are not empty
    if (!itemName.trim() || !itemDescription.trim() || !itemRecipe.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    // Call the addItem function to add the new item
    addItem({
      name: itemName,
      description: itemDescription,
      recipe: itemRecipe,
    });

    // Clear form fields after submission
    setItemName("");
    setItemDescription("");
    setItemRecipe("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={itemName}
          placeholder="Enter a name"
          onChange={(e) => setItemName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={itemDescription}
          placeholder="Enter a description"
          onChange={(e) => setItemDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        Recipe:
        <textarea
          value={itemRecipe}
          placeholder="Enter a recipe"
          onChange={(e) => setItemRecipe(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;
