import React from "react";
import { NavBarLinkItems } from "../../../assets/data";

function NavBarLinks() {
  return (
    <>
      {NavBarLinkItems.map((item) => {
        return <div key={item.name}>{item.name}</div>;
      })}
    </>
  );
}

export default NavBarLinks;
