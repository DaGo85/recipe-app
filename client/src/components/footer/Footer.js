import React from "react";
import FooterImpressum from "./components/FooterImpressum";
import FooterLinks from "./components/FooterLinks";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="py-10 px-2 w-full flex flex-col md:flex-row items-center justify-between
     bg-lightVariantSurface dark:bg-darkVariantSurface text-lightVariantSurfaceOn dark:text-darkVariantSurfaceOn"
    >
      <FooterImpressum />
      <FooterLinks />
      <button onClick={() => scrollToTop()}>Back to Top</button>
    </footer>
  );
}

export default Footer;
