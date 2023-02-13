// import {defineNuxtPlugin} from '#app'
// @ts-ignore
import Paginate from "vuejs-paginate-next";
// const EasyDataTable = Vue3EasyDataTable()
export default defineNuxtPlugin((nuxtApp) => {
    // Doing something with nuxtApp
    nuxtApp.vueApp.component('Paginate',Paginate)
})
