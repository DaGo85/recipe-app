//Footer Social Icons

import { socialIconsList } from "../../../assets/data";

function FooterSocialIcons() {
  return (
    <span className="flex flex-row gap-6 mx-auto">
      {socialIconsList.map((icon) => {
        return (
          <a
            target="_blank"
            rel="noreferrer"
            key={icon.name}
            href={icon.link}
            aria-label={icon.alt}
            alt={icon.alt}
          >
            <svg
              className="w-8 h-8 transition-all duration-300 hover:cursor-pointer fill-lightVariantSurfaceOn dark:fill-darkVariantSurfaceOn hover:fill-primaryLightOn dark:hover:fill-primaryDarkOn"
              xmlns="http://www.w3.org/2000/svg"
              viewBox={icon.viewBox}
            >
              <g className="fill-basic">
                <path d={icon.svg} />
              </g>
            </svg>
          </a>
        );
      })}
    </span>
  );
}

export default FooterSocialIcons;
