//Animated subtext component

import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: -30,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function SubText({ text }) {
  return (
    <motion.h2
      className="relative flex items-center justify-center pt-5 overflow-hidden"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={cardVariants}
      data-testid="subtext"
    >
      {text}
    </motion.h2>
  );
}

export default SubText;
