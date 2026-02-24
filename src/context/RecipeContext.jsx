import { createContext, useState, useContext } from "react";
import { dummyRecipes } from "../data/recipes";
import { useEffect } from "react";
export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem("recipes");
    return saved ? JSON.parse(saved) : dummyRecipes;
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const toggleFavorite = (id) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === id
          ? { ...recipe, isFavorite: !recipe.isFavorite }
          : recipe,
      ),
    );
  };
  const addRecipe = (newRecipe) => {
    setRecipes([
      ...recipes,
      {
        ...newRecipe,
        id: Date.now(),
        isFavorite: false,
        ingredients: newRecipe.ingredients
          .split(" ")
          .filter((i) => i.trim() !== ""),
      },
    ]);
  };

 const deleteItem = (id) => {
    if (confirm("Are you sure you want to delete this Recipe? ")) {
      setRecipes((prev) => prev.filter((item) => item.id !== id));
    } else {
     recipes;
    }
  };
  

  return (
    <RecipeContext.Provider
      value={{ recipes, setRecipes, toggleFavorite, addRecipe, deleteItem }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(RecipeContext);
};
