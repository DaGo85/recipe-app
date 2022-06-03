import { motion } from "framer-motion";

function SubText({ hueA = 140, hueB = 100 }) {
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
    <motion.div
      className="subtext-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.h2 className="subtext" variants={cardVariants}>
        Here you can find and create Recipes!
      </motion.h2>
    </motion.div>
  );
}

export default SubText;
