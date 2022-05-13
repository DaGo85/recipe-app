import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { useAuthContext } from "./utility/AuthContext";
import { auth } from "./utility/firebase";
import useScrollToTop from "./utility/useScrollToTop";

import { query, collection, getDocs, where } from "firebase/firestore";
import { db } from "./utility/firebase";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import SingleRecipe from "./pages/singlerecipe/SingleRecipe";
import SingleRecipeUpdate from "./pages/singlerecipeupdate/SingleRecipeUpdate";
import NotFound from "./pages/notfound/NotFound";
import Footer from "./components/footer/Footer";
import Add from "./pages/addrecipe/Add";

// todo BE multiple files fix

function App() {
  const { userData, setUserData, setUserCreds } = useAuthContext();
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
  }, [auth, setUserData]);

  useEffect(() => {
    const fetchUserName = async () => {
      if (userData) {
        try {
          const q = query(
            collection(db, "users"),
            where("uid", "==", userData.uid)
          );
          const doc = await getDocs(q);
          const data = doc.docs[0].data();
          setUserCreds((prevState) => {
            return { ...prevState, name: data.name };
          });
        } catch (err) {
          console.error(err);
          alert("An error occured while fetching user data");
        }
      }
    };
    fetchUserName();
  }, [userData, setUserCreds]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipe:singlerecipeId" element={<SingleRecipe />} />
        <Route path="update:singlerecipeId" element={<SingleRecipeUpdate />} />
        <Route path="*" element={<NotFound />} />

        {userData && <Route path="add" element={<Add />} />}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
