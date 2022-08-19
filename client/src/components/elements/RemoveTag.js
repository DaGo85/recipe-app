function RemoveTag() {
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-100 bg-errorLightContainer/90 dark:bg-errorDark dark:text-errorDarkOn">
      <div className="text-4xl border-2 rounded-[50%] border-backgroundLightOn px-2">
        -
      </div>
    </div>
  );
}

export default RemoveTag;
