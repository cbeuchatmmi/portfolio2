// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },  
  css: ["@/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/scss/foundations/_variables.scss";
          @import "@/scss/foundations/_mixins.scss";
          `
        }
      }
    }
  }
})