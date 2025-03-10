import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get("https://upgraded-space-couscous-wr7v59j6r7j5h95gw-5000.app.github.dev/api/recipes")
            .then(response => setRecipes(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h2>Recipe List</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe._id}>
                        <h3>
                            {/* ✅ Clickable Link to Recipe Details */}
                            <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
                        </h3>
                        <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
