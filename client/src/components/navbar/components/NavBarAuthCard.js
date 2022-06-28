const NavBarAuthCard = ({ children }) => {
  return (
    <div
      className="p-4 bg-secondaryLightContainer dark:bg-secondaryDarkContainer
     text-secondaryLightContainerOn dark:text-secondaryDarkContainerOn
      rounded-xl shadow-lg flex flex-col items-start space-y-10 
    text-lg w-72 border-4 border-double border-lightOutline dark:border-darkOutline"
    >
      {children}
    </div>
  );
};

export default NavBarAuthCard;
