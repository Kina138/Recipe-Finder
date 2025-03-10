import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://upgraded-space-couscous-wr7v59j6r7j5h95gw-5000.app.github.dev/api/recipes/${id}`)
            .then((response) => setRecipe(response.data))
            .catch((error) => console.error("Error fetching recipe details:", error));
    }, [id]);

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this recipe?")) return;

        try {
            await axios.delete(`https://upgraded-space-couscous-wr7v59j6r7j5h95gw-5000.app.github.dev/api/recipes/${id}`);
            alert("Recipe deleted successfully!");
            navigate("/recipes"); // Redirect to Recipe List
        } catch (error) {
            console.error("Error deleting recipe:", error);
        }
    };

    if (!recipe) return <p>Loading...</p>;

    return (
        <div>
            <h2>{recipe.name}</h2>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <button onClick={handleDelete}>Delete Recipe</button>
            <button onClick={() => navigate(`/edit-recipe/${recipe._id}`)}>Edit Recipe</button>
        </div>
    );
};

export default RecipeDetails;
