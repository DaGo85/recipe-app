//Animated Wiggling button

import { motion } from "framer-motion";

function WiggleButton({ handler, viewBox, svg, label }) {
  return (
    <motion.button
      aria-label={label}
      onClick={() => {
        if (handler) handler();
      }}
      className="group border-8 px-6 py-2 rounded-2xl bg-primaryLight/60 dark:bg-primaryDark hover:bg-primaryLight
     dark:hover:bg-primaryDark hover:border-primaryLightOn dark:hover:border-primaryDarkOn
     border-primaryDarkOn dark:border-primaryLightOn transition-all duration-300 ease-in-out max-w-fit"
      whileHover={{
        rotate: [0, 0, -50, 0],
        transition: {
          repeat: Infinity,
          duration: 0.35,
        },
      }}
    >
      <svg
        className="group-hover:fill-primaryLightOn dark:group-hover:fill-primaryDarkOn w-16 fill-primaryDarkOn dark:fill-primaryLightOn transition-all duration-300 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
      >
        <path d={svg} />
      </svg>
    </motion.button>
  );
}

export default WiggleButton;
