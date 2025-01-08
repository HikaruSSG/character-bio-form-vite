const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  style: {
    postcss: {
      plugins: [
        purgecss({
          content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.ts"],
        }),
      ],
    },
  },
};
