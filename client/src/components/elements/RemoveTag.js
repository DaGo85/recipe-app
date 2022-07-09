import React from "react";

function RemoveTag() {
  return (
    <div
      className="w-full flex opacity-0 h-full absolute top-0 left-0 items-center justify-center 
                  group-hover:opacity-100 bg-errorLightContainer/90 transition-all duration-300 dark:bg-errorDark dark:text-errorDarkOn"
    >
      <div className="text-4xl border-2 rounded-[50%] border-backgroundLightOn px-2">
        -
      </div>
    </div>
  );
}

export default RemoveTag;
