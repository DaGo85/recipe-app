//Image modal

import { motion, AnimatePresence } from "framer-motion";

function ImageModal({ setIsOpen, image }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      }}
      onClick={() => setIsOpen(false)}
      className="z-50 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-full
       w-full p-4 items-center justify-center flex bg-lightVariantSurface/95 dark:bg-darkVariantSurface/95"
    >
      <div className="fixed items-center justify-center px-4 py-2 text-2xl transition-all duration-300 ease-in-out border-2 cursor-pointer rounded-3xl top-6 right-6 bg-primaryLight dark:bg-primaryDark hover:bg-primaryLight/60 hover:text-primaryDarkOn dark:hover:text-primaryLightOn dark:hover:bg-primaryDark/60 border-primaryLightOn dark:border-primaryDarkOn text-primaryLightOn dark:text-primaryDarkOn hover:border-primaryDarkOn dark:hover:border-primaryLightOn">
        X
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          whileInView="visible"
          viewport={{ once: true }}
          className=""
        >
          <img
            className="max-h-screen py-10 max-w-screen"
            src={image}
            alt="from recipe zoomed"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ImageModal;
