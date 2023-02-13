import { defineStore } from 'pinia'
export const useClientStore = defineStore('clientStore',   () =>{
	const currentPage = ref(0)
	if (typeof window !== 'undefined') {
		// @ts-ignore
		if (localStorage.getItem('currentPageClient') > 0) {
			// @ts-ignore
			currentPage.value = JSON.parse(localStorage.getItem('currentPageClient'))
		}
	}

	const getClientList = async (page:number) => {
		currentPage.value = page
		localStorage.setItem('currentPageClient', JSON.stringify(currentPage.value))
		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch("https://test.interseguro.pe/vehicular-api/provider/v4/dashboard/client?page="+currentPage.value+"&size=10", { method: 'get'})
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

	const updateClientList = async (idClient:number,objClient:object) => {
		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch("https://test.interseguro.pe/vehicular-api/provider/v4/dashboard/client/"+idClient, {
					method: 'put',
					body: JSON.stringify(objClient),
					headers: {"Content-type": "application/json; charset=UTF-8"}
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

	return {
		getClientList,
		updateClientList,
		currentPage
	}
})