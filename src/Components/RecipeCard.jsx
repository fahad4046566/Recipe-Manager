import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useGlobalContext } from "../context/RecipeContext";
import img from "../assets/images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg";
import { MdDelete } from "react-icons/md";
const RecipeCard = ({ recipe }) => {
  const { toggleFavorite , deleteItem} = useGlobalContext();

 
  
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Image */}
      <figure>
        <img
          src={recipe.image || img}
          alt={recipe.title}
          className="h-48 w-full object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title">{recipe.title}</h2>

        {/* Meta info */}
        <div className="flex gap-2 text-sm text-gray-500">
          <span>⏱️ {recipe.time}</span>
          <span>👥 {recipe.servings}</span>
          <span>🍽️ {recipe.cuisine}</span>
        </div>

        {/* Difficulty badge */}
        <div className="badge badge-primary">{recipe.difficulty}</div>
        
        {/* Actions */}
        <div className="card-actions justify-end items-center mt-4">
           <button
           onClick={()=> deleteItem(recipe.id)}
           className="btn text-red-900 bg-red-400 text-3xl ">
           <MdDelete />
          </button>
          <Link to={`/recipe/${recipe.id}`} className="btn btn-primary btn-sm">
            View Recipe
          </Link>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite(recipe.id);
        }}
        className="btn btn-circle btn-sm absolute top-4 right-4"
      >
        {recipe.isFavorite ? (
          <AiFillHeart className="text-red-600" />
        ) : (
          <AiOutlineHeart />
        )}
      </button>
    </div>
  );
};

export default RecipeCard;
