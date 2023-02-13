<template>
  <div class="is-box p-6 mb-6">
    <div class="flex gap-4 py-3 pl-2 items-end">
      <div class="relative max-w-xs">
        <label for="search" class="text-gray-700 text-xs text-gray-600 dark:text-gray-400"> Póliza </label>
        <div class="relative">
          <input
              type="text"
              name="search"
              class="is-input"
              placeholder="Nro. póliza"
              v-model="stateSearch.objInspection.policyNumber"
          />
          <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>

          </div>
        </div>
      </div>

      <div class="relative max-w-xs">
        <label for="search" class="text-gray-700 text-xs text-gray-600 dark:text-gray-400"> Placa </label>
        <div class="relative">
          <input
              type="text"
              name="search"
              class="is-input"
              placeholder="Nro. placa"
              v-model="stateSearch.objInspection.plateNumber"
          />
          <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>

          </div>
        </div>
      </div>

      <div class="relative max-w-xs">
        <label for="search" class="text-gray-700 text-xs text-gray-600 dark:text-gray-400"> Estado </label>
        <div class="relative">
          <select v-model="stateSearch.objInspection.status" class="is-input">
            <option disabled value="">Seleccione un estado</option>
            <option value="PENDING">Pendiente</option>
            <option value="ONGOING">En curso</option>
            <option value="COMPLETED">Completado</option>
            <option value="OBSERVED">Observado</option>
            <option value="APPROVED">Aprobado</option>
            <option value="REJECTED">Rechazado</option>
            <option value="EXCLUDE">Excluido</option>
          </select>

          <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
            </svg>

          </div>
        </div>
      </div>

      <div class="relative w-1/4">
        <label for="search" class="text-gray-700 text-xs text-gray-600 dark:text-gray-400"> Fecha </label>
        <vue-tailwind-datepicker i18n="es-us.js" v-model="dateValue" :options="options" :formatter="formatter" separator=" hasta " input-classes="wolf block w-full p-3 text-sm outline-0 bg-purple-100 text-gray-800 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"/>

        <!--        <div class="relative">-->
        <!--          <input-->
        <!--              type="text"-->
        <!--              name="search"-->
        <!--              class="is-input"-->
        <!--              placeholder="desde"-->
        <!--              v-model="stateSearch.item_search.sellDateFrom"-->
        <!--          />-->
        <!--          <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">-->

        <!--            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">-->
        <!--              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />-->
        <!--            </svg>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>



      <!--      <div class="relative max-w-xs">-->
      <!--        <label for="search" class="text-gray-700 text-xs text-gray-600 dark:text-gray-400"> Fecha venta hasta </label>-->
      <!--        <div class="relative">-->
      <!--          <input-->
      <!--              type="text"-->
      <!--              name="search"-->
      <!--              class="is-input"-->
      <!--              placeholder="hasta"-->
      <!--              v-model="stateSearch.item_search.sellDateTo"-->
      <!--          />-->
      <!--          <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">-->
      <!--            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">-->
      <!--              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />-->
      <!--            </svg>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->

      <div class="relative max-w-xs">
        <button class="btn-secondary mb-1" @click="searchInspection()">Buscar</button>
      </div>
      <div class="">
        <button class="rounded-md py-3 px-3 text-white bg-secondary hover:bg-pink-600 duration-300 mb-1" @click="resetInput()">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </button>
      </div>

    </div>
    <div class="text-center text-xs text-red-500">
      {{searchError}}
    </div>
  </div>
  <div class="col-span-6 is-box p-6">
    <div class="flex flex-col">
      <div class="overflow-x-auto">

        <div class="p-1.5 w-full inline-block align-middle">
          <div class="box-table">
            <table class="table-is">
              <thead>
              <tr>
                <th scope="col">
                  PÓLIZA
                </th>
                <th scope="col">
                  PLACA
                </th>
                <th scope="col">
                  PLAN
                </th>
                <th scope="col">
                  ESTADO
                </th>
                <th scope="col">
                  FECHA DE CREACIÓN
                </th>
                <th scope="col">
                  FECHA DE ACTUALIZACIÓN
                </th>
<!--                <th scope="col">-->
<!--                  Acción-->
<!--                </th>-->
              </tr>
              </thead>
              <tbody>

              <tr class="text-center" v-show="loading">
                <td colspan="7" class="py-6">
                  <loader></loader>
                </td>
              </tr>

              <tr v-for="listInspections in listInspection.questions" :key="listInspections.id">
                <td>
                  {{listInspections.policyNumber}}
                </td>
                <td>
                  {{listInspections.plateNumber}}
                </td>
                <td>
                  {{listInspections.planName}}
                </td>
                <td>
                  <span v-if="listInspections.surveyStatus === 'PENDING'">Pendiente</span>
                  <span v-if="listInspections.surveyStatus === 'ONGOING'">En Curso</span>
                  <span v-if="listInspections.surveyStatus === 'COMPLETED'">Completado</span>
                  <span v-if="listInspections.surveyStatus === 'OBSERVED'">Observado</span>
                  <span v-if="listInspections.surveyStatus === 'APPROVED'">Aprobado</span>
                  <span v-if="listInspections.surveyStatus === 'REJECTED'">Rechazado</span>
                  <span v-if="listInspections.surveyStatus === 'EXCLUDE'">Excluido</span>
                </td>
                <td>
                  {{ moment(listInspections.createdDate).format("YYYY-MM-DD") }}
                </td>
                <td>
                  {{ moment(listInspections.updatedDate).format("YYYY-MM-DD") }}
                </td>
<!--                <td>-->
<!--                  <VTooltip>-->
<!--                    <div @click="viewItemInspection(listInspections.plateNumber)" class="cursor-pointer text-center">-->
<!--                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-teal-400">-->
<!--                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />-->
<!--                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />-->
<!--                      </svg>-->
<!--                    </div>-->
<!--                    <template #popper>-->
<!--                      Ver detalle-->
<!--                    </template>-->

<!--                  </VTooltip>-->

<!--                </td>-->
              </tr>

              </tbody>
            </table>
          </div>

          <div class="flex items-center justify-center  lg:px-0 sm:px-6 px-4">
            <div class="w-full flex items-center justify-between">
              <client-only>
                <paginate
                    :page-count="parseInt(listInspection.totalPages)"
                    :initial-page="listInspection.currentPage"
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
    <div class="relative px-6 pb-6 flex-auto">
      <div class="grid space-y-4" >

        <div class="text-center">
          <h3 class="text-lg font-semibold text-center">
            Detalle
          </h3>
        </div>

        <div class="flex flex-col">
          <div class="overflow-x-auto">
            <div class="rounded overflow-hidden">
              <!-- accordion-tab  -->
              <div class="group outline-none accordion-section" tabindex="1">
                <div class="group bg-gray-900 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative">
                  <div class="group-focus:text-white transition ease duration-500">
                    Title for Tab - 1
                  </div>
                  <div class="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
                <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
                  <p class="p-2 text-gray-400 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                    repellat amet doloribus consequuntur eos similique provident
                    tempora voluptates iure quia fuga dicta voluptatibus culpa
                    mollitia recusandae delectus id suscipit labore?
                  </p>
                </div>
              </div>
              <!-- accordion-tab -->
            </div>
          </div>
        </div>
      </div>
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
    return titleChunk ? `${titleChunk} - Inspecciones` : 'Inspecciones';
  }
})
definePageMeta({
  middleware: ["auth" ]
})

import {useInspectionStore} from '~/stores/inspection'
import Loader from "~/components/widgets/loader.vue";
import {notify,Notification, NotificationGroup} from "notiwind";
import moment from 'moment'

//pinia
const useInspection = useInspectionStore()

//Variables
const todaysDate = new Date()
const listInspection = ref([]);
const searchValue = ref();
const loading = ref(false);
const loadingDel = ref(false);
const searchError = ref("");

const editingItem = reactive({
  plate: "",
  brand: "",
  id: 0,
});

const showModal = ref(false)

const dateValue = ref({
  startDate: '',
  endDate: ''
})

const formatter = ref({
  date: 'YYYY-MM-DD',
  month: 'MMM'
})
const options = ref({
  shortcuts: {
    today: 'Hoy',
    yesterday: 'Ayer',
    past: (period: string) => period + ' últimos dias',
    currentMonth: 'Este mes',
    pastMonth: 'El mes pasado'
  },
  footer: {
    apply: 'Terapkan',
    cancel: 'Batal'
  }
})

const stateSearch = reactive({
  objInspection : {
    policyNumber: '',
    plateNumber: '',
    startDate: "",
    endDate: "",
    status: ''
  }
})

//methods

const searchInspection = async () => {
  loading.value = true

  if (stateSearch.objInspection.policyNumber.length > 0 || stateSearch.objInspection.plateNumber.length > 0 || dateValue.value.startDate.length > 0 || dateValue.value.endDate.length > 0 || stateSearch.objInspection.status.length > 0 ) {
    stateSearch.objInspection.startDate = dateValue.value.startDate
    stateSearch.objInspection.endDate = dateValue.value.endDate

    const res: any = await useInspection.searchInspection(stateSearch.objInspection)

    if (res.code == 0){
      searchError.value = ""
      listInspection.value = res.body
    }else{
      searchError.value = res.message
      listInspection.value = []
    }
    loading.value = false
  }else{
    loading.value = false
    searchError.value = ""
  }
};

const resetInput = async () => {
  // usePolicy.currentPage = 0
  loading.value = true

  dateValue.value.startDate = ""
  dateValue.value.endDate = ""

  stateSearch.objInspection.startDate = ""
  stateSearch.objInspection.endDate = ""

  stateSearch.objInspection.policyNumber = ""
  stateSearch.objInspection.plateNumber = ""

  stateSearch.objInspection.status = ""

  // const res:any = await useInspection.searchInspection(stateSearch.objInspection)
  listInspection.value = []
  loading.value = false
  // @ts-ignore
  document.getElementsByClassName("wolf")[0].value = "";
}

const editItem = (item:any) => {
  showModal.value = true
  const { plateNumber, id } = item;
  editingItem.plate = plateNumber;
  editingItem.id = id;
};

const viewItemInspection = async (item_policy:any) => {
  showModal.value = true
  // const res:any = await useInspection.viewPolicy(item_policy)
  // viewPolicyItem.item_policies = res.body
};

const clickCallback = async (pageNum:any) =>{
  const res:any = await useInspection.getInspection(pageNum - 1)
  listInspection.value = res.body
}

//mounted
onMounted(async () => {
  await searchInspection()


})

</script>