import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newRecipe = {
            name,
            ingredients: ingredients.split(",").map((ing) => ing.trim()), // Convert string to array
            instructions,
        };

        try {
            await axios.post("https://upgraded-space-couscous-wr7v59j6r7j5h95gw-5000.app.github.dev/api/recipes", newRecipe);
            alert("Recipe added successfully!");
            navigate("/recipes"); // Redirect to recipe list
        } catch (error) {
            console.error("Error adding recipe:", error);
        }
    };

    return (
        <div>
            <h2>Add a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Recipe Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Ingredients (comma separated)" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
                <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
};

export default AddRecipe;
