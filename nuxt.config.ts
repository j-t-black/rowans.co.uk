// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/ui'],

  future: {
    compatibilityVersion: 4
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },

  ui: {
    theme: {
      colors: ['red']
    }
  }
})
