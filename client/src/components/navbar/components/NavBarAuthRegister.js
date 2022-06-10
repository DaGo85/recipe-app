import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../../utility/firebase";
import NavBarAuthHeadline from "./NavBarAuthHeadline";

function NavBarAuthRegister({ setLogin, setRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const registerHandler = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
    setRegister(false);
    setLogin(true);
  };

  return (
    <div className="auth-card-setup">
      <NavBarAuthHeadline headline="Register" />
      <input
        type="text"
        className="auth-input-setup"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name"
      />
      <input
        type="text"
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
        <button className="auth-button-setup" onClick={registerHandler}>
          Register
        </button>
      </div>
      <p className="flex flex-row dark:text-gray-300">
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
      <div className="dark:text-gray-300">
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
    </div>
  );
}

export default NavBarAuthRegister;
