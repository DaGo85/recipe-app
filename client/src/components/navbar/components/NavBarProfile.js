import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../utility/AuthContext";
import { logout } from "../../../utility/firebase";
import { useRecipesContext } from "../../../utility/RecipesContext";
import NavBarAuthHeadline from "./NavBarAuthHeadline";

function NavBarProfile({ setIsOpen, setLogin }) {
  const { userCreds, setUserData } = useAuthContext();
  const { recipesData } = useRecipesContext();

  const recipesCount = useMemo(() => {
    return recipesData.filter((v) => v.username === userCreds.name).length;
  }, [recipesData, userCreds.name]);

  const lastRecipe = useMemo(() => {
    return recipesData.filter((v) => v.username === userCreds.name)[0];
  }, [recipesData, userCreds.name]);

  return (
    <div className="auth-card-setup">
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
          <button
            className="auth-button-setup"
            onClick={() => {
              logout();
              setUserData(null);
              setIsOpen(false);
              setLogin(true);
            }}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default NavBarProfile;
