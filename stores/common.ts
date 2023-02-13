import { defineStore } from 'pinia'

export const useTestStore = defineStore('test',  () => {
    const count = ref(0)

    const increment = () => count.value ++

    const double = computed(() => count.value * 2)

    return {
        count,
        increment,
        double
    }
})

// export const useTestStore = defineStore('test', {
//     // other options...
//     state: () => ({
//         count: 10
//     }),
//     actions: {
//         increment() {
//             this.count ++
//         }
//     },
//     getters: {
//         double: (state) => state.count * 2
//     }
// })