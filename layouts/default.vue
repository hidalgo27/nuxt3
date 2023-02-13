<template>
  <div class="grid content-between relative h-full">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
      <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
        <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
        <defs>
          <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9089FC"></stop>
            <stop offset="1" stop-color="#FF80B5"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="relative">
      <div class="absolute bottom-0 inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
          <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
          <defs>
            <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9089FC"></stop>
              <stop offset="1" stop-color="#FF80B5"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="relative ">
        <div class="py-5 shadow-sm bg-white shadow-md mb-6 dark:bg-gray-800">
          <nav class="container-box flex items-center justify-between">
            <nuxt-link to="/dashboard">
              <img
                  src="/images/logo.svg" class="w-85" alt="logo interseguro"
              />
            </nuxt-link>
            <div class="flex items-center">
              <client-only>
                <dark></dark>
                <span v-if="userLogin.userData" class="dark:text-white">
                  {{userLogin.userData?.azmanUserModel.Nombres}}
                </span>
              </client-only>

              <VDropdown
                  :distance="6"
              >
                <!-- This will be the popover reference (for the events and position) -->
                <!--            {{// userStore.userData}}-->
<!--                {{userStore.userData?.email}}-->

                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 pt-2 dark:text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>

                </button>

                <!-- This will be the content of the popover -->
                <template #popper>
                  <div class="menu-box space-y-4 px-3 py-2">

                    <div class="nav-list" @click="userLogin.logoutUser">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                      </svg>

                      Cerrar Sesión
                    </div>

                  </div>
                </template>
              </VDropdown>
            </div>
          </nav>
        </div>
      </div>

      <div class="container-box">
        <div class="grid grid-cols-9 gap-6">
          <div class="col-span-2 is-box p-6 space-y-5">
            <sidebar></sidebar>

          </div>
          <div class="col-span-7">
            <!--        <NuxtPage />-->
            <slot />


          </div>
        </div>

      </div>
    </div>

    <div class="bg-primary-700 dark:bg-gray-900 dark:bg-opacity-50 flex items-center p-6 gap-6 justify-center text-white mt-6 inset-x-0 bottom-0">
      Con el respaldo del grupo
      <img src="https://www.interseguro.pe/vehicular/images/logos/intercorp-white.svg" alt="">
    </div>
  </div>

</template>

<script lang="ts" setup>
import {useLoginStore} from '~/stores/login2'
import Sidebar from "~/components/sidebar.vue";
import Dark from "~/components/widgets/dark.vue";
const userLogin = useLoginStore()
const router = useRouter()

onMounted(() => {
  // @ts-ignore
  // let estado = JSON.parse(localStorage.getItem("estado"));
  // if (estado == 0){
  //   router.push("/login")
  // }
})

</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>