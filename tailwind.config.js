export default {
  css: ["@/assets/css/tailwind.css"],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-four-colors":
          "linear-gradient(to right, #1B1B1B, #1B1B1B, #1B1B1B, #582A4D)",
      },
    },
  },
};
