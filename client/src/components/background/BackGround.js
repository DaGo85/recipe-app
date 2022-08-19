//Background for all pages

const BackGround = ({ children }) => {
  return (
    <main
      className="flex flex-col items-center justify-center w-full gap-6 py-12 text-center transition-all bg-backgroundLight dark:bg-backgroundDark text-backgroundLightOn dark:text-backgroundDarkOn"
    >
      {children}
    </main>
  );
};

export default BackGround;
