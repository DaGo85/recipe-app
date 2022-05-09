import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../../utility/firebase";

function NavBarAuthLogin({ setLogin, setRegister, setReset }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg flex flex-col items-start space-y-10 text-lg w-72 dark:bg-slate-700">
      <div className="flex flex-row justify-between w-full items-center">
        <h1 className="font-bold text-2xl dark:text-gray-300 ">Login:</h1>
      </div>
      <input
        type="email"
        className="px-1 py-1 border-2 shadow-lg border-slate-400 w-64 dark:placeholder-gray-700"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
      />
      <div className="flex flex-col space-y-10 items-center">
        <input
          type="password"
          className="px-1 py-1 border-2 shadow-lg border-slate-400 w-64 dark:placeholder-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="px-4 py-1 border-2 bg-slate-100 text-lg border-slate-600 rounded-lg w-28"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
      </div>
      <p className="flex flex-row dark:text-gray-300">
        Login with
        <span
          className="ml-1 underline cursor-pointer hover:text-amber-500"
          onClick={signInWithGoogle}
        >
          Google
        </span>
        .
      </p>
      <p className="flex flex-row dark:text-gray-300">
        Forgot Password? Click
        <span>
          <button
            onClick={() => {
              setLogin(false);
              setReset(true);
            }}
            className="ml-1 underline cursor-pointer hover:text-amber-500"
          >
            here
          </button>
          .
        </span>
      </p>
      <div className="dark:text-gray-300">
        Don't have an account?{" "}
        <button
          onClick={() => {
            setLogin(false);
            setRegister(true);
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

export default NavBarAuthLogin;
