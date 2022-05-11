import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthContext } from "./utility/AuthContext";
import { auth } from "./utility/firebase";
import useScrollToTop from "./utility/useScrollToTop";

import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import SingleRecipe from "./pages/singlerecipe/SingleRecipe";
import NotFound from "./pages/notfound/NotFound";
import Footer from "./components/footer/Footer";
import Add from "./pages/addrecipe/Add";

// todo BE multiple files fix

function App() {
  const { userData, setUserData } = useAuthContext();
  useScrollToTop();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        const email = user.email;

        const newUser = { uid, email };

        setUserData(newUser);
      }
    });
  }, [auth]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipe:singlerecipeId" element={<SingleRecipe />} />
        <Route path="*" element={<NotFound />} />

        {userData && <Route path="add" element={<Add />} />}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
