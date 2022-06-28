import React from "react";

function NavBarLink({ text, handler, label }) {
  return (
    <button
      aria-label={label}
      onClick={() => handler()}
      className="cursor-pointer hover:text-primaryLightOn dark:hover:text-primaryDarkOn underline"
    >
      {text}
    </button>
  );
}

export default NavBarLink;
