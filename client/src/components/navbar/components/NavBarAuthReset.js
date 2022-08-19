//NavBar password reset component

import { useState } from "react";

import { sendPasswordReset } from "../../../utility/firebase";

import NavBarAuthCard from "./NavBarAuthCard";
import NavBarAuthHeadline from "./NavBarAuthHeadline";
import NavBarButton from "./NavBarButton";
import NavBarInput from "./NavBarInput";
import NavBarLink from "./NavBarLink";

function NavBarAuthReset({ setLogin, setRegister, setReset }) {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    sendPasswordReset(email);
    setReset(false);
    setLogin(true);
  };

  const handleRegister = () => {
    setRegister(true);
    setReset(false);
  };

  return (
    <NavBarAuthCard>
      <NavBarAuthHeadline headline="Password-Reset" />
      <div className="flex flex-col items-center space-y-10">
        <p>
          Forgot your account’s password or having trouble logging into your
          Team? Enter your email address and we’ll send you a recovery link.
        </p>
        <NavBarInput
          type="email"
          value={email}
          set={setEmail}
          placeholder="E-mail Address"
        />
        <NavBarButton handler={handleReset} text="Send recovery email" />
      </div>
      <div>
        Don&apos;t have an account?{" "}
        <NavBarLink
          text="Register"
          label="switch to register screen"
          handler={handleRegister}
        />{" "}
        now.
      </div>
    </NavBarAuthCard>
  );
}

export default NavBarAuthReset;
