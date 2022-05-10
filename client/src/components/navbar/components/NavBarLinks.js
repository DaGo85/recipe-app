import React from "react";
import { Link } from "react-router-dom";
import { NavBarLinkItems } from "../../../assets/data";

function NavBarLinks() {
  return (
    <>
      {NavBarLinkItems.map((item) => {
        return (
          <Link
            className="cursor-pointer hover:text-primaryLightOn dark:hover:text-primaryDarkOn"
            key={item.name}
            to={item.link}
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );
}

export default NavBarLinks;