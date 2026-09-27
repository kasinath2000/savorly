
import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Recipes from "@/pages/Recipes";
import RecipeDetails from "@/pages/RecipeDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/recipes" element={<Recipes />} />

      <Route
        path="/recipes/:recipeId"
        element={<RecipeDetails />}
      />
    </Routes>
  );
};

export default AppRoutes;
