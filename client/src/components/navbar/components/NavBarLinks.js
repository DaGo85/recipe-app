import { Link } from "react-router-dom";
import { NavBarLinkItems } from "../../../assets/data";

function NavBarLinks() {
  return (
    <>
      {NavBarLinkItems.map((item) => {
        return (
          <Link
            aria-label={item.label}
            className="auth-link-setup"
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
