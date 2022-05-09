import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordReset } from "../../../utility/firebase";
import { useAuthContext } from "../../../utility/AuthContext";
import NavBarAuthHeadline from "./NavBarAuthHeadline";

function NavBarAuthReset({ setLogin, setRegister, setReset }) {
  const [email, setEmail] = useState("");
  const { userData } = useAuthContext();

  return (
    <div className="auth-card-setup">
      <NavBarAuthHeadline headline="Password-Reset" />
      <div className="flex flex-col space-y-10 items-center">
        <p className="dark:text-gray-300">
          Forgot your account’s password or having trouble logging into your
          Team? Enter your email address and we’ll send you a recovery link.
        </p>
        <input
          type="text"
          className="auth-input-setup"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className="auth-button-setup"
          onClick={() => {
            sendPasswordReset(email);
            setReset(false);
            setLogin(true);
          }}
        >
          Send recovery email
        </button>
      </div>
      <div className="dark:text-gray-300">
        Don't have an account?{" "}
        <button
          onClick={() => {
            setRegister(true);
            setReset(false);
          }}
          className="auth-link-setup"
        >
          Register
        </button>{" "}
        now.
      </div>
    </div>
  );
}

export default NavBarAuthReset;
