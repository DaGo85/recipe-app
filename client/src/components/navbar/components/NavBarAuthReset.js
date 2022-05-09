import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordReset } from "../../../utility/firebase";
import { useAuthContext } from "../../../utility/AuthContext";

function NavBarAuthReset({ setRegister, setReset }) {
  const [email, setEmail] = useState("");
  const { userData } = useAuthContext();

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg flex flex-col items-start space-y-8 text-lg w-72 dark:bg-slate-700">
      <div className="flex flex-row justify-between w-full items-center">
        <h1 className="font-bold text-2xl dark:text-gray-300 ">
          Password-Reset:
        </h1>
      </div>
      <div className="flex flex-col space-y-10 items-center">
        <p className="dark:text-gray-300">
          Forgot your account’s password or having trouble logging into your
          Team? Enter your email address and we’ll send you a recovery link.
        </p>
        <input
          type="text"
          className="px-1 py-1 border-2 shadow-lg border-slate-400 w-64 dark:placeholder-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className="px-4 py-1 border-2 bg-slate-100 text-lg border-slate-600 rounded-lg"
          onClick={() => sendPasswordReset(email)}
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
          className="underline cursor-pointer hover:text-amber-500"
        >
          Register
        </button>{" "}
        now.
      </div>
    </div>
  );
}

export default NavBarAuthReset;
