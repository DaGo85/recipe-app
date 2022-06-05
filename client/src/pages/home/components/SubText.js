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
      className="subtext-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={cardVariants}
    >
      {text}
    </motion.h2>
  );
}

export default SubText;
