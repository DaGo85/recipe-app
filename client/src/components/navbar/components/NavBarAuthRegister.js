//NavBar register component

import { useState } from "react";
import { registerWithEmailAndPassword } from "../../../utility/firebase";
import NavBarAuthCard from "./NavBarAuthCard";
import NavBarAuthHeadline from "./NavBarAuthHeadline";
import NavBarButton from "./NavBarButton";
import NavBarInput from "./NavBarInput";
import NavBarLink from "./NavBarLink";

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
  /*
  const handleGoogle = () => {
    signInWithGoogle();
    setRegister(false);
  };*/

  const handleLogin = () => {
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
      <div className="flex flex-col items-center space-y-10">
        <NavBarInput
          type="password"
          value={password}
          set={setPassword}
          placeholder="Password"
        />
        <NavBarButton handler={registerHandler} text="Register" />
      </div>
      {/*<p className="flex flex-row">
        <span className="mr-1">Register with</span>
        <NavBarLink
          text="Google"
          labe="Register with google"
          handler={handleGoogle}
        />
        .
  </p>*/}
      <div>
        Already have an account?{" "}
        <NavBarLink
          text="Login"
          labe="switch to login screen"
          handler={handleLogin}
        />{" "}
        now.
      </div>
    </NavBarAuthCard>
  );
}

export default NavBarAuthRegister;
