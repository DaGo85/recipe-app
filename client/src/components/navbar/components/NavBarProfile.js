//NavBar profile component

import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuthContext } from "../../../utility/AuthContext";
import { logout } from "../../../utility/firebase";
import { useRecipesContext } from "../../../utility/RecipesContext";

import NavBarAuthCard from "./NavBarAuthCard";
import NavBarAuthHeadline from "./NavBarAuthHeadline";
import NavBarButton from "./NavBarButton";

function NavBarProfile({ setIsOpen, setLogin }) {
  const { userCreds, setUserData, setUserCreds } = useAuthContext();
  const { recipesData } = useRecipesContext();

  const navigate = useNavigate();

  const recipesCount = useMemo(() => {
    return recipesData.filter((v) => v.username === userCreds.name).length;
  }, [recipesData, userCreds.name]);

  const lastRecipe = useMemo(() => {
    return recipesData.filter((v) => v.username === userCreds.name)[0];
  }, [recipesData, userCreds.name]);

  const handleLogout = () => {
    logout();
    setUserData(null);
    setIsOpen(false);
    setLogin(true);
    setUserCreds(null);
  };

  const handleAdd = () => {
    navigate("/add");
  };

  return (
    <NavBarAuthCard>
      <NavBarAuthHeadline headline="Profile" />
      {recipesData && userCreds && (
        <>
          <p>
            Username: {userCreds?.name}
            <br />
            created Recipes: {recipesCount}
            <br />
            Last Recipe:{" "}
            <Link to={`recipe${lastRecipe?.title}`}>{lastRecipe?.title}</Link>
            <br />
            Created at: {lastRecipe?.createdAt}
          </p>
          <div>
            <NavBarButton handler={handleLogout} text="Logout" added="mr-2" />
            <NavBarButton handler={handleAdd} text="Add recipe" />
          </div>
        </>
      )}
    </NavBarAuthCard>
  );
}

export default NavBarProfile;
