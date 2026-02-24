import { NavLink } from "react-router-dom";
import RecipeCard from "../Components/RecipeCard";
import Search from "../Components/Search";
import { useGlobalContext } from "../context/RecipeContext";
import { useState } from "react";

const Home = () => {
  const [search, setsearch] = useState("");
  const [cuisine, setcuisine] = useState("All");
  const { recipes } = useGlobalContext();
  const uniqcuis = ["All", ...new Set(recipes.map((item) => item.cuisine))];
  

  const filtered = recipes
    .filter((r) => cuisine === "All" || r.cuisine === cuisine)
    .filter((r) => r.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="main search box flex gap-2  items-center justify-center">
        <div className="search title w-70">
          <Search onSearch={setsearch} />
        </div>

        <div className="search cuisine w-50">
          <div className="form-control">
            <select
              onChange={(e) => setcuisine(e.target.value)}
              className="select select-bordered"
            >
              {uniqcuis.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-8 mt-8">All Recipes</h1>

      <div>
        {filtered.length === 0 ? (
          <h1 className="text-2xl text-center text-gray-500 md:mt-50">
           There are no recipes at all.
          </h1>
        ): recipes.length === 0 && (
          <>
          <p className="text-center text-gray-500 mt-10">
            The page is currently empty. Add recipes to get started!
          </p>
          </>
        ) }
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
