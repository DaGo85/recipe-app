//Image modal

import { motion, AnimatePresence } from "framer-motion";

function ImageModal({ setIsOpen, image }) {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className="z-50 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-full
       w-full p-4 items-center justify-center flex bg-lightVariantSurface/95 dark:bg-darkVariantSurface/95"
    >
      <div
        className=" cursor-pointer rounded-3xl border-2 py-2 px-4 fixed top-6 right-6 items-center justify-center
     bg-primaryLight dark:bg-primaryDark hover:bg-primaryLight/60 hover:text-primaryDarkOn dark:hover:text-primaryLightOn
     dark:hover:bg-primaryDark/60 border-primaryLightOn dark:border-primaryDarkOn text-primaryLightOn dark:text-primaryDarkOn
     hover:border-primaryDarkOn dark:hover:border-primaryLightOn transition-all duration-300 ease-in-out text-2xl"
      >
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
            className="max-h-screen max-w-screen py-10"
            src={image}
            alt="from recipe zoomed"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ImageModal;
