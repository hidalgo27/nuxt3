import { defineStore } from 'pinia'
import {useLoginStore} from "~/stores/login2";
const useLogin = useLoginStore()
export const useBlackStore = defineStore('blackStore',   () =>{
    const currentPage = ref(0)
    if (typeof window !== 'undefined') {
        // @ts-ignore
        if (localStorage.getItem('currentPageBlack') > 0) {
            // @ts-ignore
            currentPage.value = JSON.parse(localStorage.getItem('currentPageBlack'))
        }
    }

    const getBlackList = async (page:number) => {
        currentPage.value = page
        localStorage.setItem('currentPageBlack', JSON.stringify(currentPage.value))
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch("https://test.interseguro.pe/vehicular-api/provider/v4/dashboard/black-list?page="+currentPage.value+"&size=10", { method: 'get',})
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

    const delBlackList = async (idBlack:object) => {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch("https://test.interseguro.pe/vehicular-api/provider/v4/dashboard/black-list/"+idBlack, {
                    method: 'delete',
                    body: JSON.stringify({"userId":useLogin.userData.userDatabaseModel.id}),
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

    const searchBlack = async (items:object) => {
        return new Promise(async (resolve, reject) => {
            try {
                // @ts-ignore
                const res = await fetch("https://test.interseguro.pe/vehicular-api/provider/v4/dashboard/black-list/search?plateNumber="+items.plateNumber, {
                    method: 'get',
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
        getBlackList,
        currentPage,
        delBlackList,
        searchBlack
    }
})