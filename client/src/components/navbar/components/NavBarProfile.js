//NavBar profile component

import { useMemo } from "react";
import { Link } from "react-router-dom";

import { useAuthContext } from "../../../utility/AuthContext";
import { logout } from "../../../utility/firebase";
import { useRecipesContext } from "../../../utility/RecipesContext";

import NavBarAuthCard from "./NavBarAuthCard";
import NavBarAuthHeadline from "./NavBarAuthHeadline";
import NavBarButton from "./NavBarButton";

function NavBarProfile({ setIsOpen, setLogin }) {
  const { userCreds, setUserData } = useAuthContext();
  const { recipesData } = useRecipesContext();

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
          <NavBarButton handler={handleLogout} text="Logout" />
        </>
      )}
    </NavBarAuthCard>
  );
}

export default NavBarProfile;
