import { defineStore } from 'pinia'
export const useLoginStore = defineStore('LoginStore',   () =>{
	// const user = ref([])
	const router = useRouter()
	const userData = ref()
	const success = ref(0)
	if (typeof window !== 'undefined') {
		if (localStorage.getItem('userLogin')) {
			// @ts-ignore
			userData.value = JSON.parse(localStorage.getItem('userLogin'))
		}
		if (localStorage.getItem('success')) {
			// @ts-ignore
			success.value = JSON.parse(localStorage.getItem('success'))
		}
	}

	const loginUser = async (objUser:object) => {
		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch("https://test.interseguro.pe/vehicular-api/provider/v4/dashboard/login", {
					method: 'post',
					headers: {"Content-type": "application/json"},
					body: JSON.stringify(objUser)
				})
				const data =  await res.json()
				if (data){
					resolve(data)
				}else {
					reject(data)
				}
			} catch (error){
				reject(error)
			}
		})
	}


	const getLocal = async (objUser:object) => {
		try {
			localStorage.setItem("userLogin", JSON.stringify(objUser))
			userData.value = objUser
			success.value = 1
			localStorage.setItem("success", JSON.stringify(1))
			router.push("/dashboard");
		} catch (error) {
			console.log(error)
		}
	}

	const logoutUser= async () => {
		// const usePolicy = usePolicyStore()
		// const useLogin = useLoginStore()
		try {
			// usePolicy.$reset()
			// useLogin.$reset()
			localStorage.clear()
			userData.value = ""
			success.value = 0
			router.push("/login")

		} catch (error){
			console.log(error)
		}

	}

	return {
		loginUser,
		getLocal,
		logoutUser,
		userData,
		success
	}
})