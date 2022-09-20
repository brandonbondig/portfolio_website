// ./postcss.config.js

module.exports = {
  darkMode: "class",
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./src/*.{js,ts,jsx,tsx,vue}",
  ],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
