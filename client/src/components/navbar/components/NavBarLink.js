//Generic NavBar Link Button

function NavBarLink({ text, handler, label }) {
  return (
    <button
      aria-label={label}
      onClick={() => handler()}
      className="underline cursor-pointer hover:text-primaryLightOn dark:hover:text-primaryDarkOn"
    >
      {text}
    </button>
  );
}

export default NavBarLink;
