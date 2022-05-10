import React, { useState } from "react";
import { useAuthContext } from "../../../utility/AuthContext";
import NavBarAuthLogin from "./NavBarAuthLogin";
import NavBarAuthRegister from "./NavBarAuthRegister";
import NavBarAuthReset from "./NavBarAuthReset";
import NavBarProfile from "./NavBarProfile";

function NavBarAuth() {
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [reset, setReset] = useState(false);
  const { userData } = useAuthContext();

  return (
    <div className="relative z-50">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="svg-container"
      >
        <svg
          className="w-6 svg-setup"
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
        {isOpen && userData ? (
          <NavBarProfile setIsOpen={setIsOpen} />
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
