import { vfmPlugin } from 'vue-final-modal'
export default defineNuxtPlugin((nuxtApp) => {
    // Doing something with nuxtApp
    nuxtApp.vueApp.use(

    vfmPlugin({
        key: '$vfm',
        componentName: 'VueFinalModal',
        dynamicContainerName: 'ModalsContainer'
    })
    )

})
