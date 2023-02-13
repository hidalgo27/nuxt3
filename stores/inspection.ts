import { defineStore } from 'pinia'
export const useInspectionStore = defineStore('inspectionStore',   () =>{
	const getInspection = async (items:Object) => {
		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch("https://test.interseguro.pe/vehicular-api/survey/v2/survey/questions", {
					method: 'post',
					body: JSON.stringify(items),
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

	const searchInspection = async (items:object) => {
		return new Promise(async (resolve, reject) => {
			try {
				// @ts-ignore
				const res = await fetch("https://test.interseguro.pe/vehicular-api/survey/v2/survey/questions", {
					method: 'post',
					body: JSON.stringify(items),
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
		getInspection,
		searchInspection
	}
})