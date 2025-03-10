import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditRecipe = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://upgraded-space-couscous-wr7v59j6r7j5h95gw-5000.app.github.dev/api/recipes/${id}`)
            .then((response) => {
                setName(response.data.name);
                setIngredients(response.data.ingredients.join(", "));
                setInstructions(response.data.instructions);
            })
            .catch((error) => console.error("Error fetching recipe:", error));
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedRecipe = {
            name,
            ingredients: ingredients.split(",").map((ing) => ing.trim()),
            instructions,
        };

        try {
            await axios.put(`https://upgraded-space-couscous-wr7v59j6r7j5h95gw-5000.app.github.dev/api/recipes/${id}`, updatedRecipe);
            alert("Recipe updated successfully!");
            navigate("/recipes");
        } catch (error) {
            console.error("Error updating recipe:", error);
        }
    };

    return (
        <div>
            <h2>Edit Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
                <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
                <button type="submit">Update Recipe</button>
            </form>
        </div>
    );
};

export default EditRecipe;
