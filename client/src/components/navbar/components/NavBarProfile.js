import React from "react";
import { useAuthContext } from "../../../utility/AuthContext";
import { logout } from "../../../utility/firebase";
import NavBarAuthHeadline from "./NavBarAuthHeadline";

function NavBarProfile({ setIsOpen, setLogin }) {
  const { userData, setUserData } = useAuthContext();

  return (
    <div className="auth-card-setup">
      <NavBarAuthHeadline headline="Profile" />
      <button
        className="px-4 py-1 border-2 bg-slate-100 text-lg border-slate-600 rounded-lg"
        onClick={() => {
          logout();
          setUserData(null);
          setIsOpen(false);
          setLogin(true);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default NavBarProfile;
