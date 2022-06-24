//Image modal

import { motion, AnimatePresence } from "framer-motion";

function ImageModal({ setIsOpen, image }) {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className="absolute cursor-not-allowed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-screen w-screen p-4"
    >
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img className="" src={image} alt="from recipe zoomed" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ImageModal;
