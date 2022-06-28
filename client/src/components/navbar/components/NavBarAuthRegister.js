//NavBar register component

import { useState } from "react";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../../utility/firebase";
import NavBarAuthCard from "./NavBarAuthCard";
import NavBarAuthHeadline from "./NavBarAuthHeadline";
import NavBarButton from "./NavBarButton";
import NavBarInput from "./NavBarInput";

function NavBarAuthRegister({ setLogin, setRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const registerHandler = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
    setRegister(false);
    setLogin(true);
  };

  return (
    <NavBarAuthCard>
      <NavBarAuthHeadline headline="Register" />
      <NavBarInput
        type="text"
        value={name}
        set={setName}
        placeholder="Username"
      />
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
        <NavBarButton handler={registerHandler} text="Register" />
      </div>
      <p className="flex flex-row">
        Register with
        <span
          onClick={() => {
            signInWithGoogle();
            setRegister(false);
          }}
          className="auth-link-setup ml-1"
          aria-label="Register with google"
        >
          Google
        </span>
        .
      </p>
      <div>
        Already have an account?{" "}
        <button
          onClick={() => {
            setRegister(false);
            setLogin(true);
          }}
          className="auth-link-setup"
          aria-label="switch to login screen"
        >
          Login
        </button>{" "}
        now.
      </div>
    </NavBarAuthCard>
  );
}

export default NavBarAuthRegister;
