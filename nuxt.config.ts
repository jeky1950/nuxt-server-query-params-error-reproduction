// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  routeRules: {
    '/example-1': { // Working example
      ssr: true,
      experimentalNoScripts: true,
      prerender: false
    },
    '/example-2': { // Bug
      ssr: true,
      experimentalNoScripts: true,
      prerender: true
    }
  }
})
