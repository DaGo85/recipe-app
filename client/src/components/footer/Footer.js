//Footer component

import FooterImpressum from "./components/FooterImpressum";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Footer() {
  return (
    <footer
      className="relative flex flex-col items-center justify-center w-full gap-4 px-2 py-10 pb-16 bg-lightVariantSurface dark:bg-darkVariantSurface text-lightVariantSurfaceOn dark:text-darkVariantSurfaceOn"
    >
      <FooterImpressum />
      <button
        aria-label="scroll smoothly to top of the page"
        onClick={() => scrollToTop()}
        className="absolute flex items-center justify-center w-12 h-12 transition-all duration-300 ease-in-out border-2 cursor-pointer rounded-3xl bg-primaryLight dark:bg-primaryDark hover:bg-primaryLight/60 dark:hover:bg-primaryDark/60 border-primaryLightOn dark:border-primaryDarkOn hover:border-primaryDarkOn dark:hover:border-primaryLightOn bottom-4 right-4 group"
      >
        <svg
          className="h-8 transition-all duration-300 ease-in-out fill-primaryLightOn dark:fill-primaryDarkOn group-hover:fill-primaryDarkOn dark:group-hover:fill-primaryLightOn"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M310.6 182.6c-12.51 12.51-32.76 12.49-45.25 0L192 109.3V480c0 17.69-14.31 32-32 32s-32-14.31-32-32V109.3L54.63 182.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l128-128c12.5-12.5 32.75-12.5 45.25 0l128 128C323.1 149.9 323.1 170.1 310.6 182.6z" />
        </svg>
      </button>
    </footer>
  );
}

export default Footer;
