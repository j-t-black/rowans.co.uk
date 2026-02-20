// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV === 'development' },

  modules: ['@nuxt/ui'],

  future: {
    compatibilityVersion: 4
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },

  app: {
    head: {
      style: [
        { innerHTML: 'html, body { background-color: #000000 !important; margin: 0; padding: 0; color-scheme: dark; overflow-x: hidden; } *, *::before, *::after { box-sizing: border-box; }' }
      ]
    }
  },

  routeRules: {
    '/**': {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Referrer-Policy': 'strict-origin-when-cross-origin'
      }
    }
  },

  ui: {
    theme: {
      colors: ['red']
    }
  }
})
