//NavBar Login component

import { useState } from "react";

import {
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../../utility/firebase";
import NavBarAuthCard from "./NavBarAuthCard";

import NavBarAuthHeadline from "./NavBarAuthHeadline";
import NavBarButton from "./NavBarButton";
import NavBarInput from "./NavBarInput";

function NavBarAuthLogin({ setLogin, setRegister, setReset }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    logInWithEmailAndPassword(email, password);
    setLogin(false);
  };

  return (
    <NavBarAuthCard>
      <NavBarAuthHeadline headline="Login" />
      <NavBarInput
        type="email"
        value={email}
        set={setEmail}
        placeholder="E-mail Address"
      />
      <div className="flex flex-col space-y-10 items-center">
        <NavBarInput
          type="password"
          value={password}
          set={setPassword}
          placeholder="Password"
        />
        <NavBarButton handler={handleLogin} text="Login" />
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
    </NavBarAuthCard>
  );
}

export default NavBarAuthLogin;
