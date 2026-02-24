import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home.jsx";
import Favourite from "./Pages/Favourite.jsx";
import AddRecipe from "./Pages/AddRecipe.jsx";
import RecipeDetail from "./Pages/RecipeDetail.jsx";
import { RecipeProvider } from "./context/RecipeContext.jsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/recipe/:id", element: <RecipeDetail /> },
      { path: "/favorites", element: <Favourite /> },
      { path: "/add", element: <AddRecipe /> }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecipeProvider>
    <RouterProvider router={router} />
    </RecipeProvider>
  </StrictMode>,
);
