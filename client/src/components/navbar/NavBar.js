import React from "react";
import ThemeToggle from "../../utility/darkmode/ThemeToggle";
import NavBarAuth from "./components/NavBarAuth";
import NavBarLinks from "./components/NavBarLinks";
import NavBarLogo from "./components/NavBarLogo";

function NavBar() {
  return (
    <header className="w-full flex flex-row items-center justify-between bg-primary dark:bg-primaryDark p-3">
      <NavBarLogo />
      <NavBarLinks />
      <div className="flex flex-row items-center">
        <ThemeToggle />
        <NavBarAuth />
      </div>
    </header>
  );
}

export default NavBar;
