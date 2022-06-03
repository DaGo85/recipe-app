import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function HRBell() {
  const Bell = (
    <path d="M280 145.3V112h16C309.3 112 320 101.3 320 88S309.3 64 296 64H215.1C202.7 64 192 74.75 192 87.1S202.7 112 215.1 112H232v33.32C119.6 157.3 32 252.4 32 368h448C480 252.4 392.4 157.3 280 145.3zM488 400h-464C10.75 400 0 410.7 0 423.1C0 437.3 10.75 448 23.1 448h464c13.25 0 24-10.75 24-23.1C512 410.7 501.3 400 488 400z" />
  );

  return (
    <div className="w-4/5  ">
      <hr className="hr-setup mb-[-26px] border-backgroundLightOn dark:border-backgroundDarkOn" />
      <div className="flex flex-row justify-center items-center">
        <AnimatePresence>
          <motion.div
            initial={{ x: -150 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
          >
            <svg
              className="w-10 fill-backgroundLightOn dark:fill-backgroundDarkOn"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              {Bell}
            </svg>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
          >
            <svg
              className="w-14 mx-4 fill-backgroundLightOn dark:fill-backgroundDarkOn"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              {Bell}
            </svg>
          </motion.div>
          <motion.div
            initial={{ x: 150 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
          >
            <svg
              className="w-10 fill-backgroundLightOn dark:fill-backgroundDarkOn"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              {Bell}
            </svg>
          </motion.div>
        </AnimatePresence>
      </div>
      <hr className="hr-setup border-backgroundLightOn dark:border-backgroundDarkOn" />
    </div>
  );
}

export default HRBell;
