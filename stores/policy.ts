
import { defineStore } from 'pinia'

export const usePolicyStore = defineStore('policyStore',   () =>{

    const currentPolicy = ref([])
    const currentPage = ref(0)
    const currentPageSearch = ref(0)

    if (typeof window !== 'undefined') {
    // @ts-ignore
        if (localStorage.getItem('currentPage') > 0){
            // @ts-ignore
            currentPage.value = JSON.parse(localStorage.getItem('currentPage'))
        }
    }

    const getPolicy = async (page:number) => {
        currentPage.value = page
        localStorage.setItem('currentPage', JSON.stringify(currentPage.value))
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch("https://test.interseguro.pe/vehicular-api/provider/v4/dashboard/policy?page="+currentPage.value+"&size=10", { method: 'get',})
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

    const viewPolicy = async (idPolicy:number) => {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch("https://test.interseguro.pe/vehicular-api/provider/v4/dashboard/policy/"+idPolicy, { method: 'get',})
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

    const cancelPolicy = async (idPolicy:number,idUser:object) => {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch("https://test.interseguro.pe/vehicular-api/provider/v4/dashboard/policy/"+idPolicy, {
                    method: 'delete',
                    body: JSON.stringify({"userId":idUser}),
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
    const searchPolicy = async (items:object, page:number) => {
        return new Promise(async (resolve, reject) => {
            try {
                // @ts-ignore
                const res = await fetch("https://test.interseguro.pe/vehicular-api/provider/v4/dashboard/policy/search?"+"policyNumber="+items.policyNumber+"&plateNumber="+items.plateNumber+"&documentNumber="+items.documentNumber+"&sellDateFrom="+items.sellDateFrom+"&sellDateTo="+items.sellDateTo+"&page="+page+"&size=10", {method: 'get'})
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
        currentPolicy,
        currentPage,
        getPolicy,
        viewPolicy,
        cancelPolicy,
        searchPolicy
    }

})