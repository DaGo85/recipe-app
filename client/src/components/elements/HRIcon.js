//Animated HR element

import { AnimatePresence, motion } from "framer-motion";

function HRIcon({ view, path }) {
  return (
    <div className="w-4/5 ">
      <hr className="hr-setup mb-[-26px] border-backgroundLightOn dark:border-backgroundDarkOn" />
      <div className="flex flex-row items-center justify-center">
        <AnimatePresence>
          <motion.div
            key="left"
            initial={{ x: -150 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
          >
            <svg
              className="w-10 fill-backgroundLightOn dark:fill-backgroundDarkOn"
              xmlns="http://www.w3.org/2000/svg"
              viewBox={view}
            >
              {path}
            </svg>
          </motion.div>
          <motion.div
            key="middle"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
          >
            <svg
              className="mx-4 mb-1 w-14 fill-backgroundLightOn dark:fill-backgroundDarkOn"
              xmlns="http://www.w3.org/2000/svg"
              viewBox={view}
            >
              {path}
            </svg>
          </motion.div>
          <motion.div
            key="right"
            initial={{ x: 150 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
          >
            <svg
              className="w-10 fill-backgroundLightOn dark:fill-backgroundDarkOn"
              xmlns="http://www.w3.org/2000/svg"
              viewBox={view}
            >
              {path}
            </svg>
          </motion.div>
        </AnimatePresence>
      </div>
      <hr className="hr-setup border-backgroundLightOn dark:border-backgroundDarkOn" />
    </div>
  );
}

export default HRIcon;
