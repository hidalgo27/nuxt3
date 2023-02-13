<template>
  <div class="relative px-6 lg:px-8">
    <!--      <div-->
    <!--          class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">-->
    <!--      </div>-->
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="relative px-4 py-10 is-box shadow-lg sm:rounded-3xl sm:p-12">
        <!--      <div-->
        <!--          class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">-->
        <!--      </div>-->
        <div class="max-w-lg mx-auto">
          <div>
            <h2 class="text-2xl font-semibold text-blue-700 text-center">Inicio de Sesión</h2>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
              <form @submit.prevent="handleSubmit" class="space-y-4">
                <div class="relative grid">
                  <label for="user" class="text-sm">Usuario</label>
                  <input v-model="state.objUser.username" autocomplete="off" id="user" name="email" type="text" class="is-input" placeholder="Email address" required/>
                  <div class="text-red-500 text-xs">
                    {{error_user}}
                  </div>
                </div>
                <div class="relative grid">
                  <label for="password" class="text-sm">Password</label>
                  <input v-model="state.objUser.password" autocomplete="off" id="password" name="password" type="password" class="is-input" placeholder="Password" required/>
                  <div class="text-red-500 text-xs">
                    {{error_pass}}
                  </div>
                </div>
                <div class="relative">
                  <button type="submit" class="btn-secondary block text-center" :disabled="loadingUser">Iniciar sesión</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts"  setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Login` : 'Login';
  }
})
import {useLoginStore} from '~/stores/login2'
const loginStore = useLoginStore()
definePageMeta({
  layout: "login",
  middleware: [
    function (to, from) {
      const useLogin = useLoginStore()
      const router = useRouter()
      if (useLogin.success == 1){
        router.push("/dashboard");
      }else{
        return
      }
    }
  ]
})

const router = useRouter()
const error_user = ref("")
const error_pass = ref("")
const state = reactive({
  objUser: {
    username: "",
    password: ""
  }
})
const loadingUser = ref(false)


const handleSubmit = async () => {
  const res:any = await loginStore.loginUser(state.objUser)
  if (res.code == 0){
    await loginStore.getLocal(res.body)
  }else if(res.code == 200){
    error_user.value = res.message
  } else if(res.code == 205){
    error_pass.value = res.message
  }
}
</script>