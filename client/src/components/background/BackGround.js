const BackGround = ({ children }) => {
  return (
    <main
      className="flex flex-col py-12 gap-6 justify-center items-center
     w-full bg-backgroundLight dark:bg-backgroundDark text-backgroundLightOn
      dark:text-backgroundDarkOn transition-all text-center"
    >
      {children}
    </main>
  );
};

export default BackGround;
