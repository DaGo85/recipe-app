//NavBar Login component

import { useState } from "react";

import {
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../../utility/firebase";

import NavBarAuthHeadline from "./NavBarAuthHeadline";

function NavBarAuthLogin({ setLogin, setRegister, setReset }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-card-setup">
      <NavBarAuthHeadline headline="Login" />
      <input
        type="email"
        className="auth-input-setup"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
      />
      <div className="flex flex-col space-y-10 items-center">
        <input
          type="password"
          className="auth-input-setup"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="auth-button-setup"
          onClick={() => {
            logInWithEmailAndPassword(email, password);
            setLogin(false);
          }}
        >
          Login
        </button>
      </div>
      <p className="flex flex-row">
        Login with
        <span
          onClick={() => {
            signInWithGoogle();
            setLogin(false);
          }}
          className="auth-link-setup ml-1"
          aria-label="login with Google"
        >
          Google
        </span>
        .
      </p>
      <p className="flex flex-col">
        Forgot Password? Click
        <span>
          <button
            onClick={() => {
              setLogin(false);
              setReset(true);
            }}
            className="auth-link-setup ml-1"
            aria-label="click for reseting password"
          >
            here
          </button>
          .
        </span>
      </p>
      <div>
        Don't have an account?{" "}
        <button
          onClick={() => {
            setLogin(false);
            setRegister(true);
          }}
          className="auth-link-setup"
          aria-label="Register with email"
        >
          Register
        </button>{" "}
        now.
      </div>
    </div>
  );
}

export default NavBarAuthLogin;
