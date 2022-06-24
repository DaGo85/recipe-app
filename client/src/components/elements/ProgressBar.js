//ProgressBar component

import { useEffect } from "react";
import { motion } from "framer-motion";
import useFireStorage from "../../utility/useFireStorage";

const ProgressBar = ({ selected, setSelected, setUrl, folder }) => {
  const { progress, url } = useFireStorage(selected, folder);

  useEffect(() => {
    if (url) {
      setUrl(url);
      setSelected(null);
    }
  }, [url, setSelected, setUrl]);

  return (
    <div className="h-20 w-72 ">
      <motion.div
        className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: progress + "%" }}
      ></motion.div>
    </div>
  );
};

export default ProgressBar;
