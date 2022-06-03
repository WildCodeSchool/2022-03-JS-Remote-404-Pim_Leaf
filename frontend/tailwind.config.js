module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      darkGrey: "#969393",
      lightGrey: "#ECECEC",
      darkBlue: "#14252F",
      middleBlue: "#4A9CCD",
      lightBlue: "#5AB8EF",
      middleGreen: "#299740",
      lightGreen: "#3AD800",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["sans-serif"],
    },
    extend: {
      backgroundImage: {
        loginGradient: "url('./assets/background_login_form.png')",
        bgLogin: "url('./assets/background_login_page.webp')",
      },
    },
  },
  plugins: [],
};
