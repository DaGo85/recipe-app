//Image modal

import { motion, AnimatePresence } from "framer-motion";

function ImageModal({ setIsOpen, image }) {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className="z-50 absolute cursor-not-allowed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-full
       w-full p-4 items-center justify-center flex bg-lightVariantSurface/80 dark:bg-darkVariantSurface"
    >
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
