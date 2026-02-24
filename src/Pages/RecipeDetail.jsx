import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import { IoCaretBackSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa6";
import { useGlobalContext } from "../context/RecipeContext";
import img from "../assets/images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"

const RecipeDetail = () => {
  const {recipes} = useGlobalContext()
  const { id } = useParams();
  const [details, setdetails] = useState(null);
  useEffect(() => {
    const finded = recipes.find((item) => item.id === Number(id));
    setdetails(finded);
  }, [id]);

  if (!details) return <Loading />;

  return (
    <>
      <h1 className="text-4xl font-bold mb-8">Recipe Details</h1>
      <NavLink to="/">
        <button className="btn btn-link text-2xl text-blue-700">
          <IoCaretBackSharp />
          Back to Home
        </button>
      </NavLink>
      <div className="flex-col justify-center md:w-200 md:ml-100">
        <div className="md:flex items-center gap-5 bg-linear-to-r from-[#F5F0EB] to-gray-300 rounded-2xl">
          <div className="">
            <figure>
              <img
                className="md:h-130 md:w-130 rounded-2xl"
                src={details.image || img}
                alt={details.title}
              />
            </figure>
          </div>

          <div className="flex-col m-6">
            <h2 className="card-title text-gray-700 p-2 hover:scale-105 transform transition-transform duration-300 shadow-md hover:shadow-2xl">
              Title:
              <div className="badge badge-primary text-blue-800">
                {details.title}
              </div>
            </h2>
            <h3 className="card-title text-gray-700 p-2 hover:scale-105 transform transition-transform duration-300 shadow-md hover:shadow-2xl">
              Cuisine:
              <div className="badge badge-secondary ">{details.cuisine}</div>
            </h3>
            <h3 className="card-title text-gray-700 p-2 hover:scale-105 transform transition-transform duration-300 shadow-md hover:shadow-2xl">
              Difficulty:
              <div className="badge badge-accent ">{details.difficulty}</div>
            </h3>
            <h3 className="card-title text-gray-700 p-2 hover:scale-105 transform transition-transform duration-300 shadow-md hover:shadow-2xl">
              Time:<div className="badge badge-info ">{details.time}</div>
            </h3>
            <h3 className="card-title text-gray-700 p-2 hover:scale-105 transform transition-transform duration-300 shadow-md hover:shadow-2xl">
              Servings:
              <div className="badge badge-outline ">{details.servings}</div>
            </h3>
            {/* Ingredients */}
            <div className="  mt-4">
              <div className="font-bold font-serif flex items-center gap-1 pb-2">
                Ingredients
                <FaCaretDown />
              </div>
              {details.ingredients.map((item, index) => {
                return (
                  <div className="flex p-1" key={index}>
                    <div className="font-semibold font-serif">Item:</div>
                    <div className="font-semibold">
                      <div className="badge badge-warning">{item}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Ingredients ended  */}
            {/* Instructions */}
            <div>
              <div className="font-bold font-serif flex items-center gap-1 pb-2 pt-2">
                Instructions
                <FaCaretDown />
              </div>
              <div className="font-serif pb-2 md:w-70">{details.instructions}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;
