import React from "react";
import ThemeToggle from "../../utility/darkmode/ThemeToggle";
import NavBarAuth from "./components/NavBarAuth";
import NavBarLinks from "./components/NavBarLinks";
import NavBarLogo from "./components/NavBarLogo";

function NavBar() {
  return (
    <header
      className="p-3 w-full flex flex-row items-center justify-between
     bg-lightVariantSurface dark:bg-darkVariantSurface text-lightVariantSurfaceOn dark:text-darkVariantSurfaceOn"
    >
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
