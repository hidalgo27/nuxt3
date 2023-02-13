import { defineStore } from 'pinia'
export const useVehicleStore = defineStore('vehicleStore',   () =>{
	const currentPage = ref(0)
	if (typeof window !== 'undefined') {
		// @ts-ignore
		if (localStorage.getItem('currentPageVehicle') > 0) {
			// @ts-ignore
			currentPage.value = JSON.parse(localStorage.getItem('currentPageVehicle'))
		}
	}

	const getVehicle = async (page:number) => {
		currentPage.value = page
		localStorage.setItem('currentPageVehicle', JSON.stringify(currentPage.value))
		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch("https://test.interseguro.pe/vehicular-api/provider/v4/dashboard/vehicle?page="+currentPage.value+"&size=10", { method: 'get'})
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

	const updateVehicle = async (idVehicle:number,objVehicle:object) => {
		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch("https://test.interseguro.pe/vehicular-api/provider/v4/dashboard/vehicle/"+idVehicle, {
					method: 'put',
					body: JSON.stringify(objVehicle),
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
		getVehicle,
		updateVehicle,
		currentPage
	}
})