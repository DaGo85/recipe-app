module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        component: "#b9462e",
        componentDark: "#a3462e",
        background: "#3071e8ff",
        backgroundDark: "#151e34ff",
        typography: "",
        typographyDark: "",
        failure: "",
        failureDark: "",
        success: "",
        successDark: "",
        border: "#000000",
        borderDark: "#fff",
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
