import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../../utility/firebase";
import NavBarAuthHeadline from "./NavBarAuthHeadline";

function NavBarAuthLogin({ setLogin, setRegister, setReset, isOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
      <p className="flex flex-row dark:text-gray-300">
        Login with
        <span
          className="auth-link-setup ml-1"
          onClick={() => {
            signInWithGoogle();
            setLogin(false);
          }}
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
            className="auth-link-setup ml-1"
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
          className="auth-link-setup"
        >
          Register
        </button>{" "}
        now.
      </div>
    </div>
  );
}

export default NavBarAuthLogin;
