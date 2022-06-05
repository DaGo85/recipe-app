import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../utility/AuthContext";

function AddRecipeButton() {
  const { userData } = useAuthContext();
  return (
    <>
      {userData ? (
        <Link to="/add">
          <button>Add a Recipe</button>
        </Link>
      ) : (
        <button>Do you want to add a recipe? Please register here.</button>
      )}
    </>
  );
}

export default AddRecipeButton;
