import { createPinia } from 'pinia'
const pinia = createPinia()
export default defineNuxtPlugin((nuxtApp) => {
    // Doing something with nuxtApp
    nuxtApp.vueApp.use(pinia)
})
