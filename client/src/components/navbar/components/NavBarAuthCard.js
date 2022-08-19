//NavBar auth card

const NavBarAuthCard = ({ children }) => {
  return (
    <div
      className="flex flex-col items-start p-4 space-y-10 text-lg border-4 border-double shadow-lg bg-secondaryLightContainer dark:bg-secondaryDarkContainer text-secondaryLightContainerOn dark:text-secondaryDarkContainerOn rounded-xl w-72 border-lightOutline dark:border-darkOutline"
    >
      {children}
    </div>
  );
};

export default NavBarAuthCard;
