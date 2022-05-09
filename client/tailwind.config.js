module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        component: "#b9462e",
        componentDark: "",
        background: "",
        backgroundDark: "",
        typography: "",
        typographyDark: "",
        failure: "",
        failureDark: "",
        success: "",
        successDark: "",
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
