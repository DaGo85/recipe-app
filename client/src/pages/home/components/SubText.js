//Animated subtext component

import { motion } from "framer-motion";

function SubText({ text }) {
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

  return (
    <motion.h2
      className="flex items-center justify-center relative overflow-hidden pt-5"
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
