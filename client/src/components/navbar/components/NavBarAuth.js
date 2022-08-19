//NavBar Auth navigation

import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { useAuthContext } from "../../../utility/AuthContext";
import { auth, db } from "../../../utility/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useRegContext } from "../../../utility/RegisterContext";

import NavBarAuthLogin from "./NavBarAuthLogin";
import NavBarAuthRegister from "./NavBarAuthRegister";
import NavBarAuthReset from "./NavBarAuthReset";
import NavBarProfile from "./NavBarProfile";

function NavBarAuth() {
  const {
    register,
    setRegister,
    isOpen,
    setIsOpen,
    login,
    setLogin,
    reset,
    setReset,
  } = useRegContext();

  const { userData, setUserData, setUserCreds, userCreds } = useAuthContext();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        user.getIdToken(true).then((token) => {
          setUserCreds((prevState) => {
            return { ...prevState, token };
          });
        });

        const uid = user.uid;
        const email = user.email;

        const newUser = { uid, email };

        setLogin(false);
        setUserData(newUser);
      }
    });
  }, [setUserData, setUserCreds, setLogin]);

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
    <div className="relative z-50">
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 27) {
            setIsOpen(!isOpen);
          }
        }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex items-center justify-center p-2 transition-all duration-300 ease-in-out border-2 cursor-pointer group rounded-3xl bg-primaryLight dark:bg-primaryDark hover:bg-primaryLight/60 dark:hover:bg-primaryDark/60 border-primaryLightOn dark:border-primaryDarkOn hover:border-primaryDarkOn dark:hover:border-primaryLightOn"
      >
        <svg
          className="w-6 transition-all duration-300 ease-in-out group-hover:fill-primaryDarkOn dark:group-hover:fill-primaryLightOn fill-primaryLightOn dark:fill-primaryDarkOn"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
        </svg>
      </div>
      <div
        className={`absolute right-0 md:right-6 ${
          isOpen ? "scale-100" : "scale-0"
        } transition-all origin-top-right duration-300 ease-out transform`}
      >
        {isOpen && userCreds ? (
          <NavBarProfile setIsOpen={setIsOpen} setLogin={setLogin} />
        ) : (
          <>
            {login && (
              <NavBarAuthLogin
                setIsOpen={setIsOpen}
                setLogin={setLogin}
                setRegister={setRegister}
                setReset={setReset}
                isOpen={isOpen}
              />
            )}
            {register && (
              <NavBarAuthRegister
                setIsOpen={setIsOpen}
                setLogin={setLogin}
                setRegister={setRegister}
              />
            )}
            {reset && (
              <NavBarAuthReset
                setIsOpen={setIsOpen}
                setLogin={setLogin}
                setRegister={setRegister}
                setReset={setReset}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default NavBarAuth;
