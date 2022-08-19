// NavBar component

import ThemeToggle from "../../utility/darkmode/ThemeToggle";
import NavBarAuth from "./components/NavBarAuth";
import NavBarLinks from "./components/NavBarLinks";

function NavBar() {
  return (
    <nav
      className="flex flex-row items-center justify-between w-full p-3 bg-lightVariantSurface dark:bg-darkVariantSurface text-lightVariantSurfaceOn dark:text-darkVariantSurfaceOn"
    >
      <NavBarLinks />
      <div className="flex flex-row items-center gap-2">
        <ThemeToggle />
        <NavBarAuth />
      </div>
    </nav>
  );
}

export default NavBar;
