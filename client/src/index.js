import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import SingleRecipe from "./pages/singlerecipe/SingleRecipe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path=":singlerecipeId" element={<SingleRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
