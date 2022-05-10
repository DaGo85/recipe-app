const Background = ({ children }) => {
  return (
    <main className="w-full h-[200vh] bg-backgroundLight dark:bg-backgroundDark transition-all">
      {children}
    </main>
  );
};

export default Background;
