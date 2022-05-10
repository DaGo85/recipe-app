const Background = ({ children }) => {
  return (
    <main className="w-full bg-backgroundLight dark:bg-backgroundDark transition-all">
      {children}
    </main>
  );
};

export default Background;
