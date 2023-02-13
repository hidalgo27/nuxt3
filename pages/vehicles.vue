<template>
  <div class="col-span-6 is-box p-6">
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="flex justify-between py-3 pl-2">
          <div class="relative max-w-xs">
            <label for="search" class="sr-only"> Search </label>
            <input
                type="text"
                name="search"
                class="block w-full p-3 pl-10 text-sm border-solid border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                placeholder="Search..."
                v-model="searchValue"
            />
            <div
                class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

        </div>
        <div class="p-1.5 w-full inline-block align-middle">
          <div class="box-table">
            <table class="table-is">
              <thead class="bg-slate-100">
              <tr>
                <th scope="col">
                  Placa
                </th>
                <th scope="col">
                  Marca
                </th>
                <th scope="col">
                  Modelo
                </th>
                <th scope="col">
                  Año Fabricación
                </th>
                <th scope="col">
                  Uso
                </th>
                <th scope="col">
                  Acción
                </th>
              </tr>
              </thead>
              <tbody>

              <tr class="text-center" v-show="loading">
                <td colspan="7" class="py-6">
                  <loader></loader>
                </td>
              </tr>

              <tr v-for="list_vehicle in listVehicles.items" :key="list_vehicle.id">
                <td>
                  {{list_vehicle.plateNumber}}
                </td>
                <td>
                  {{list_vehicle.brand}}
                </td>
                <td>
                  {{list_vehicle.model}}
                </td>
                <td>
                  {{list_vehicle.modelYear}}
                </td>
                <td>
                  {{list_vehicle.useType}}
                </td>

                <td class="gap-2 flex">
                  <VTooltip>
                    <div @click="editItemVehicle(list_vehicle)" class="cursor-pointer text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-purple-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                    </div>


                    <template #popper>
                      Editar
                    </template>

                  </VTooltip>

                </td>
              </tr>

              </tbody>
            </table>
          </div>

          <div class="flex items-center justify-center  lg:px-0 sm:px-6 px-4">
            <div class="w-full flex items-center justify-between">
              <client-only>
                <paginate
                    :page-count="parseInt(listVehicles.totalPages)"
                    :initial-page="listVehicles.currentPage"
                    :container-class="'pagination'"
                    :prev-text="'Anterior'"
                    :next-text="'Siguiente'"
                    :prev-link-class="'previousPage'"
                    :next-link-class="'previousPage'"
                    :click-handler="clickCallback"
                    :page-link-class="'stretched-link'"
                />
              </client-only>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
  <vue-final-modal
      v-model="showModal"
      classes="modal-container"
      content-class="modal-content modal-content-lg"
      :transition="{
        'enter-active-class': 'transition duration-200 ease-in-out transform',
        'enter-from-class': 'translate-y-full',
        'enter-to-class': 'translate-y-0',
        'leave-active-class': 'transition duration-200 ease-in-out transform',
        'leave-to-class': 'translate-y-full',
        'leave-from-class': 'translate-y-0'
      }"
  >
    <div class="grid px-6 pb-6 gap-4">
      <div class="text-center">
        <h3 class="text-lg font-semibold text-center">
          Editar Vehiculo
        </h3>
      </div>
      <form @submit.prevent="submit" autocomplete="off" class="grid gap-4">
        <div class="grid grid-cols-3 gap-4">
          <input type="text" class="is-input" placeholder="Placa" v-model="state.objVehicle.plateNumber" :class="{'is-invalid': v$.objVehicle.plateNumber.$invalid}">

          <!--          <div class="input-errors" v-for="error of v$.objVehicle.firstName.$errors" :key="error.$uid">-->
          <!--            <div class="text-sm text-red-500">{{ error.$message }}</div>-->
          <!--          </div>-->
          <input type="text" class="is-input" placeholder="Marca" v-model="state.objVehicle.brand" disabled>
          <input type="text" class="is-input" placeholder="Modelo" v-model="state.objVehicle.model" disabled>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <input type="text" class="is-input" placeholder="Año de fabricación" v-model="state.objVehicle.modelYear" disabled>
          <input type="text" class="is-input" placeholder="Tipo de uso" v-model="state.objVehicle.useType" disabled>
        </div>



        <!--                {{v$}}-->
        <button type="submit" class="btn-secondary" v-show="!loading_edit">Confirmar</button>
        <loader v-show="loading_edit"></loader>
      </form>
    </div>
    <button class="modal-close" @click="showModal = false">
      x
    </button>
  </vue-final-modal>

  <NotificationGroup group="foo">
    <div class="fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none">
      <div class="w-full max-w-sm">
        <Notification
            v-slot="{ notifications }"
            enter="transform ease-out duration-300 transition"
            enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
            enter-to="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-500"
            leave-from="opacity-100"
            leave-to="opacity-0"
            move="transition duration-500"
            move-delay="delay-300"
        >
          <div v-for="notification in notifications" :key="notification.id">
            <div
                v-if="notification.type === 'success'"
                class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
            >
              <div class="flex items-center justify-center w-12 bg-green-500">
                <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                </svg>
              </div>

              <div class="px-4 py-2 -mx-3">
                <div class="mx-3">
                  <span class="font-semibold text-green-500">{{ notification.title }}</span>
                  <p class="text-sm text-gray-600">{{ notification.text }}</p>
                </div>
              </div>
            </div>

            <div
                class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
                v-if="notification.type === 'error'"
            >
              <div class="flex items-center justify-center w-12 bg-red-500">
                <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"/>
                </svg>
              </div>

              <div class="px-4 py-2 -mx-3">
                <div class="mx-3">
                  <span class="font-semibold text-red-500">{{ notification.title }}</span>
                  <p class="text-sm text-gray-600">{{ notification.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </Notification>
      </div>
    </div>
  </NotificationGroup>

</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Vehículos` : 'Vehículos';
  }
})
definePageMeta({
  middleware: ["auth" ],
  name: "vehicles",
})
import {useVehicleStore} from '~/stores/vehicle'
import Loader from "~/components/widgets/loader.vue";
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import {notify,Notification, NotificationGroup} from "notiwind";
import {storeToRefs} from "pinia";

//pinia
const useVehicle = useVehicleStore()

//Variables
const listVehicles = ref([]);
const searchValue = ref();
const loading = ref(false);
const loading_edit = ref(false);

const showModal = ref(false)

//methods

const state = reactive({
  objVehicle :{
    id: 0,
    plateNumber: '',
    brand: '',
    model: '',
    modelYear: '',
    useType: '',

  }
})
const rules = {
  objVehicle : {
    plateNumber: {required},
    // brand: {required},
    // model: {required},
    // modelYear: {required},
    // useType: {required},

  }
}

const v$ = useVuelidate(rules, state)
const submit = async() => {
  if (!await v$.value.$validate()){
    console.log('error')
  }else{
    loading_edit.value = true
    const res:any = await useVehicle.updateVehicle(state.objVehicle.id,state.objVehicle)
    if (res.code == 0){
      showModal.value = false
      loading_edit.value = false
      notify({
        group: "foo",
        title: 'Bien hecho',
        type: "success",
        text: "El vehiculo con placa "+state.objVehicle.plateNumber+" Se actualizo :)",
      }, 4000) // 4s
      // @ts-ignore
      listVehicles.value.items = listVehicles.value.items.map(li => {
        if (li.id === state.objVehicle.id){
          li = state.objVehicle
        }
        return li
      })

    }else if(res.code == 1) {
      showModal.value = false
      loading_edit.value = false
      notify({
        group: "foo",
        title: 'Error',
        type: "error",
        text: res.message,
      }, 5000) // 4s
    }
  }

}

const editItemVehicle = (item_vehicle:any) => {
  showModal.value = true
  state.objVehicle.id = item_vehicle.id
  state.objVehicle.plateNumber = item_vehicle.plateNumber
  state.objVehicle.brand = item_vehicle.brand
  state.objVehicle.model = item_vehicle.model
  state.objVehicle.modelYear = item_vehicle.modelYear
  state.objVehicle.useType = item_vehicle.useType

};

const clickCallback = async (pageNum:any) =>{
  loading.value = true
  listVehicles.value = []
  const res:any = await useVehicle.getVehicle(pageNum - 1)
  listVehicles.value = res.body
  loading.value = false
}

//mounted
onMounted(async () => {
  loading.value = true
  const res:any = await useVehicle.getVehicle(useVehicle.currentPage)
  listVehicles.value = res.body
  loading.value = false

})

</script>