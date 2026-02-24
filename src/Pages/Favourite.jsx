import { useGlobalContext } from "../context/RecipeContext";
import { Link } from "react-router-dom";
import img from "../assets/images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg";
const Favourite = () => {
  const { recipes } = useGlobalContext();
  const filteredData = recipes.filter((r) => r.isFavorite);
  return (
    <>
      <h1 className="text-4xl font-bold">My Favorites</h1>
    {filteredData.length == 0 && (
     <h1 className="text-2xl text-center text-gray-500 md:mt-70 mt-20 ">No Favorite Found</h1>
    )}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
   {filteredData.map((filtered)=>{
    return (
       <div>
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
          {/* Image */}
          <figure>
            <img
              src={filtered.image || img}
              alt={filtered.title}
              className="h-48 w-full object-cover" />
          </figure>

          {/* Content */}
          <div className="card-body">
            <h2 className="card-title">{filtered.title}</h2>

            {/* Meta info */}
            <div className="flex gap-2 text-sm text-gray-500">
              <span>⏱️ {filtered.time}</span>
              <span>👥 {filtered.servings}</span>
              <span>🍽️ {filtered.cuisine}</span>
            </div>

            {/* Difficulty badge */}
            <div className="badge badge-primary">{filtered.difficulty}</div>

            {/* Actions */}
            <div className="card-actions justify-end mt-4">
              <Link
                to={`/recipe/${filtered.id}`}
                className="btn btn-primary btn-sm"
              >
                View Recipe
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
   })}
   </div>
    </>
  );
};

export default Favourite;
