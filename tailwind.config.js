/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        golden: "#D0B47D",
        "golden-dark": "#D9BA80",
        "golden-darker": "#5D513B",
        "nav-gray": "#0d0d0d",
      },
      dropShadow: {
        golden: "0px 0px 10px rgba(208, 180, 126, 0.2)",
      },
      boxShadow: {
        tab: "0px 0px 10px 3px rgba(208, 180, 126, 0.2)",
      },
      backgroundImage: {
        diamonds: "url('/images/profileBg.svg')",
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  },

  plugins: [],
};
