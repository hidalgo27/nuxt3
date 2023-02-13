import {useLoginStore} from '~/stores/login2'
export default defineNuxtRouteMiddleware((store, from) => {
	// console.log("hola")
	// console.log(localStorage.success)
	const useLogin = useLoginStore()
	if (useLogin.success == 1){
		return
	}else{
		const router = useRouter()
		router.push("/login")

	}
})