import { useState } from "react";
import { useGlobalContext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";


const AddRecipe = () => {
  const navigate = useNavigate()
  const {addRecipe} = useGlobalContext()
  const [formData, setFormData] = useState({
    title: "",
    cuisine: "",
    difficulty: "Easy",
    time: "",
    servings: 1,
    image: "",
    ingredients: "",
    instructions: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.title.trim() || !formData.cuisine.trim() || !formData.difficulty.trim() || !formData.time.trim() || !formData.servings.trim() || !formData.ingredients.trim() || !formData.instructions.trim()){
      alert("Please fill all the fields to add a new recipe.");
      return;
    }
   addRecipe(formData)
    setFormData({
      title: "",
      cuisine: "",
      difficulty: "Easy",
      time: "",
      servings: 1,
      image: "",
      ingredients: "",
      instructions: "",
    });
    navigate('/')
  };
  

  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Add New Recipe</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <div className="card bg-base-100 w-full max-w-2xl shadow-2xl">
            <div className="card-body grid grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">Title</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Recipe Title"
                  name="title"
                  onChange={changeHandler}
                  value={formData.title}
                />
              </div>
              <div className="form-control">
                <label className="label">Cuisine</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Cuisine"
                  name="cuisine"
                  onChange={changeHandler}
                  value={formData.cuisine}
                />
              </div>

              <div className="form-control">
                <label className="label">Difficulty</label>
                <select
                  onChange={changeHandler}
                  name="difficulty"
                  value={formData.difficulty}
                  className="select select-bordered"
                >
                  <option disabled select="true">
                    Difficulty
                  </option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">Time</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="20 mins"
                  name="time"
                  onChange={changeHandler}
                  value={formData.time}
                />
              </div>

              <div className="form-control">
                <label className="label">Servings</label>
                <input
                  type="number"
                  className="input input-bordered"
                  placeholder="4"
                  name="servings"
                  onChange={changeHandler}
                  value={formData.servings}
                />
              </div>
              <div className="form-control">
                <label className="label">Image(Optioanl)</label>
                <input
                  type="file"
                  name="image"
                  onChange={changeHandler}
                  value={formData.image}
                  className="file-input file-input-bordered"
                />
              </div>

              <div className="col-span-2">
                <label className="label">Ingredients</label>
                <textarea
                  className="textarea textarea-bordered w-full h-24"
                  placeholder="Ingredient 1, Ingredient 2..."
                  name="ingredients"
                  onChange={changeHandler}
                  value={formData.ingredients}
                ></textarea>
              </div>
              <div className="col-span-2">
                <label className="label">Instructions</label>
                <textarea
                  className="textarea textarea-bordered w-full h-24"
                  name="instructions"
                  placeholder="Instructions"
                  onChange={changeHandler}
                  value={formData.instructions}
                ></textarea>
              </div>
             
              <button className="btn  col-span-2 mt-4 bg-orange-500 text-gray-800">
                Add New Recipe
              </button>
          
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddRecipe;
