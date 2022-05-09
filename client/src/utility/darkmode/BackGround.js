const Background = ({ children }) => {
  return (
    <body className="bg-background dark:bg-backgroundDark transition-all">
      {children}
    </body>
  );
};

export default Background;
