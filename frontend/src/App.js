import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipe from "./components/AddRecipe";
import EditRecipe from "./components/EditRecipe";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Router>
            <div className="container mt-4">
                <h1 className="text-center">
                    🍽️ Recipe Finder
                </h1>

                {/* ✅ Fix: Ensure navigation is properly displayed */}
                <nav className="d-flex justify-content-center bg-primary p-2 rounded">
                    <Link className="text-white mx-3 text-decoration-none" to="/">🏠 Home</Link>
                    <Link className="text-white mx-3 text-decoration-none" to="/add-recipe">➕ Add Recipe</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<RecipeList />} />
                    <Route path="/recipes/:id" element={<RecipeDetails />} />
                    <Route path="/add-recipe" element={<AddRecipe />} />
                    <Route path="/edit-recipe/:id" element={<EditRecipe />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
