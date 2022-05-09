module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#D4F1F4",
        primaryL: "",
        borderD: "#00251a",
        background: "#75E6DA",
        typography: "#05445E",
        failure: "",
        success: "",
        primaryDark: "#004d40",
        primaryLDark: "#39796b",
        primaryDDark: "#00251a",
        backgroundDark: "#ffffff",
        typographyDark: "#ffffff",
        successDark: "",
        failureDark: "",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
