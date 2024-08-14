// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "nuxt-primevue",
    "nuxt-headlessui",
    "nuxt-swiper",
    "@nuxt/fonts",
    "@nuxt/image",
  ],
  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      exclude: ["Editor", "Chart"],
    },
  },
  css: ["primevue/resources/themes/lara-light-indigo/theme.css"],
});
