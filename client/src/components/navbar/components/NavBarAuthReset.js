//NavBar password reset component

import { useState } from "react";
import { sendPasswordReset } from "../../../utility/firebase";
import NavBarAuthCard from "./NavBarAuthCard";
import NavBarAuthHeadline from "./NavBarAuthHeadline";
import NavBarButton from "./NavBarButton";
import NavBarInput from "./NavBarInput";

function NavBarAuthReset({ setLogin, setRegister, setReset }) {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    sendPasswordReset(email);
    setReset(false);
    setLogin(true);
  };

  return (
    <NavBarAuthCard>
      <NavBarAuthHeadline headline="Password-Reset" />
      <div className="flex flex-col space-y-10 items-center">
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
        Don't have an account?{" "}
        <button
          onClick={() => {
            setRegister(true);
            setReset(false);
          }}
          className="auth-link-setup"
          aria-label="switch to register screen"
        >
          Register
        </button>{" "}
        now.
      </div>
    </NavBarAuthCard>
  );
}

export default NavBarAuthReset;
