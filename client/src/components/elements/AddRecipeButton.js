//Add recipe button element

import { Link } from "react-router-dom";

import { useAuthContext } from "../../utility/AuthContext";
import { motion } from "framer-motion";
import { useRegContext } from "../../utility/RegisterContext";

function AddRecipeButton() {
  const { userData } = useAuthContext();
  const { setRegister, setIsOpen, setLogin } = useRegContext();

  const handleReg = () => {
    setIsOpen(true);
    setRegister(true);
    setLogin(false);
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {userData ? (
        <Link to="/add" className="flex flex-col items-center gap-2 mb-4">
          <motion.div
            aria-label="press for getting to add recipe page"
            className="px-6 py-6 transition-all duration-300 ease-in-out border-8 group rounded-2xl bg-primaryLight/60 dark:bg-primaryDark hover:bg-primaryLight dark:hover:bg-primaryDark hover:border-primaryLightOn dark:hover:border-primaryDarkOn border-primaryDarkOn dark:border-primaryLightOn"
            whileHover={{
              rotate: [0, 0, -50, 0],
              transition: {
                repeat: Infinity,
                duration: 0.35,
              },
            }}
          >
            <svg
              className="w-16 transition-all duration-300 ease-in-out group-hover:fill-primaryLightOn dark:group-hover:fill-primaryDarkOn fill-primaryDarkOn dark:fill-primaryLightOn"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 508 508"
            >
              <g>
                <g>
                  <path
                    d="M465.75,0H42.35c-23.3,0-42.3,19-42.3,42.3v423.3c0,23.4,19,42.4,42.3,42.4h423.3c23.3,0,42.3-19,42.3-42.3V42.3
			C508.05,19,489.05,0,465.75,0z M28.25,42.3c0-7.8,6.3-14.1,14.1-14.1h423.3c7.8,0,14.1,6.3,14.1,14.1v339.6H28.25V42.3z
			 M479.85,465.7L479.85,465.7c0,7.8-6.3,14.1-14.1,14.1H42.35c-7.8,0-14.1-6.3-14.1-14.1v-55.6h451.6V465.7z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M148.95,57.8c-37.2,0-67.4,30.2-67.4,67.4c0,37.2,30.2,67.4,67.4,67.4c37.2,0,67.4-30.2,67.4-67.4
			S186.15,57.8,148.95,57.8z M148.95,164.4c-21.6,0-39.2-17.6-39.2-39.2c0-21.6,17.6-39.2,39.2-39.2c21.6,0,39.2,17.6,39.2,39.2
			C188.15,146.8,170.55,164.4,148.95,164.4z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M359.15,57.8c-37.2,0-67.4,30.2-67.4,67.4c0,37.2,30.2,67.4,67.4,67.4c37.2,0,67.4-30.2,67.4-67.4
			S396.35,57.8,359.15,57.8z M359.15,164.4c-21.6,0-39.2-17.6-39.2-39.2c0-21.6,17.6-39.2,39.2-39.2c21.6,0,39.2,17.6,39.2,39.2
			C398.35,146.8,380.75,164.4,359.15,164.4z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M148.95,219.9c-37.2,0-67.4,30.2-67.4,67.4s30.2,67.4,67.4,67.4c37.2,0,67.4-30.2,67.4-67.4
			C216.35,250.1,186.15,219.9,148.95,219.9z M148.95,326.5c-21.6,0-39.2-17.6-39.2-39.2c0-21.6,17.6-39.2,39.2-39.2
			c21.6,0,39.2,17.6,39.2,39.2C188.15,308.9,170.55,326.5,148.95,326.5z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M359.15,219.9c-37.2,0-67.4,30.2-67.4,67.4s30.2,67.4,67.4,67.4c37.2,0,67.4-30.2,67.4-67.4
			C426.55,250.1,396.35,219.9,359.15,219.9z M359.15,326.5c-21.6,0-39.2-17.6-39.2-39.2c0-21.6,17.6-39.2,39.2-39.2
			c21.6,0,39.2,17.6,39.2,39.2C398.35,308.9,380.75,326.5,359.15,326.5z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M107.15,432.2h-18c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h18c7.8,0,14.1-6.3,14.1-14.1
			C121.25,438.5,114.95,432.2,107.15,432.2z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M211.05,432.2h-18c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h18c7.8,0,14.1-6.3,14.1-14.1
			C225.15,438.5,218.85,432.2,211.05,432.2z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M315.05,432.2h-18c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h18c7.8,0,14.1-6.3,14.1-14.1
			C329.15,438.5,322.85,432.2,315.05,432.2z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M418.95,432.2h-18c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h18c7.8,0,14.1-6.3,14.1-14.1
			C433.05,438.5,426.75,432.2,418.95,432.2z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </motion.div>
          <h3>Press for adding Recipe!</h3>
        </Link>
      ) : (
        <p>
          Do you want to add a recipe? Please register{" "}
          <button
            aria-label="button to get to the register menu"
            className="underline hover:text-secondaryLightContainer dark:hover:text-secondaryDarkContainer"
            onClick={handleReg}
          >
            here
          </button>
          .
        </p>
      )}
    </>
  );
}

export default AddRecipeButton;
