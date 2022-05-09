import React from "react";

function NavBarAuthHeadline({ headline }) {
  return (
    <h2 className="font-bold text-2xl text-typography dark:text-typographyDark">
      {headline}:
    </h2>
  );
}

export default NavBarAuthHeadline;
