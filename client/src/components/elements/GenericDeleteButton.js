import React from "react";

function GenericDeleteButton({ handler, text }) {
  return (
    <button
      className="border px-4 py-2 rounded-2xl bg-errorLight dark:bg-errorDarkContainer
     text-errorLightOn dark:text-errorDarkContainerOn 
     hover:bg-errorLight/70 dark:hover:bg-errorDarkContainer/60"
      onClick={() => handler()}
    >
      {text}
    </button>
  );
}

export default GenericDeleteButton;
