<template>
  <div class="is-box p-6 mb-6">
    <div class="flex gap-4 py-3 pl-2 items-end">
      <div class="relative max-w-xs">
        <label for="search" class="text-gray-700 text-xs text-gray-600 dark:text-gray-400"> Placa </label>
        <div class="relative">
          <input
              type="text"
              name="search"
              class="is-input"
              placeholder="Nro. placa"
              v-model="stateSearch.objItem.plateNumber"
          />
          <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>

          </div>
        </div>
      </div>

      <div class="relative max-w-xs">
        <button class="btn-secondary mb-1" @click="searchBlack()">Buscar</button>
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
                    PLACA
                  </th>
<!--                  <th scope="col">-->
<!--                    MARCA-->
<!--                  </th>-->
<!--                  <th scope="col">-->
<!--                    MODELO-->
<!--                  </th>-->
<!--                  <th scope="col">-->
<!--                    AÑO-->
<!--                  </th>-->
                  <th scope="col">
                    DECIL
                  </th>
                  <th scope="col">
                    FECHA DE CREACIÓN
                  </th>
                  <th scope="col">
                    ÚLTIMA DE ACTUALIZACIÓN
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

                <template v-if="searchValue === true">
                  <tr v-for="listBlacks in listBlack.items" :key="listBlacks.id">
                    <td>
                      {{listBlacks.plateNumber}}
                    </td>
                    <td>
                      {{listBlacks.decile}}
                    </td>
                    <td>
                      {{ moment(listBlacks.createdDate).format("YYYY-MM-DD") }}
                    </td>
                    <td>
                      {{ moment(listBlacks.lastModifiedDate).format("YYYY-MM-DD") }}
                    </td>
                    <td>
                      <VTooltip>
                        <div @click="editItem(listBlacks)" class="cursor-pointer text-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-red-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        </div>
                        <template #popper>
                          Eliminar
                        </template>

                      </VTooltip>

                    </td>
                  </tr>
                </template>
                <template v-if="listBlack.plateNumber">
                <tr>
                  <td>
                    {{listBlack.plateNumber}}
                  </td>
                  <td>
                    {{listBlack.decile}}
                  </td>
                  <td>
                    {{ moment(listBlack.createdDate).format("YYYY-MM-DD") }}{{searchValue}}
                  </td>
                  <td>
                    {{ moment(listBlack.lastModifiedDate).format("YYYY-MM-DD") }}
                  </td>
                  <td>
                    <VTooltip>
                      <div @click="editItem(listBlack)" class="cursor-pointer text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-red-500">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </div>
                      <template #popper>
                        Eliminar
                      </template>

                    </VTooltip>

                  </td>
                </tr>
                </template>
                </tbody>
              </table>
            </div>

            <div class="flex items-center justify-center  lg:px-0 sm:px-6 px-4">
              <div class="w-full flex items-center justify-between">
                <client-only>
                  <paginate
                      :page-count="parseInt(listBlack.totalPages)"
                      :initial-page="listBlack.currentPage"
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
      content-class="modal-content modal-content-cancel"
      :transition="{
        'enter-active-class': 'transition duration-200 ease-in-out transform',
        'enter-from-class': 'translate-y-full',
        'enter-to-class': 'translate-y-0',
        'leave-active-class': 'transition duration-200 ease-in-out transform',
        'leave-to-class': 'translate-y-full',
        'leave-from-class': 'translate-y-0'
      }"
  >
    <div class="grid p-6 gap-4">
      <p>¿Estás seguro de sacar la placa <span class="font-bold">{{ editingItem.plate }}</span> del Black List?</p>
<!--      <form @submit.prevent="submit" autocomplete="off" class="grid gap-4">-->
<!--        <input type="text" class="is-input" placeholder="Motivo" v-model="state.plate_black">-->
<!--&lt;!&ndash;        {{v$}}&ndash;&gt;-->
<!--        <div class="input-errors" v-for="error of v$.plate_black.$errors" :key="error.$uid">-->
<!--          <div class="text-sm">{{ error.$message }}</div>-->
<!--        </div>-->
        <button type="button" class="btn-secondary" v-show="!loadingDel" @click="submit(editingItem.id)">Confirmar</button>
<!--      </form>-->
      <loader v-show="loadingDel"></loader>
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
    return titleChunk ? `${titleChunk} - Black List` : 'Black List';
  }
})
definePageMeta({
  middleware: ["auth" ]
})

import {useBlackStore} from '~/stores/black'
import Loader from "~/components/widgets/loader.vue";
import {notify,Notification, NotificationGroup} from "notiwind";
import moment from 'moment'
//pinia
const useBlack = useBlackStore()

//Variables
const listBlack = ref([]);
const searchValue = ref(true);
const loading = ref(false);
const loadingDel = ref(false);
const editingItem = reactive({
  plate: "",
  brand: "",
  id: 0,
});
const showModal = ref(false)

const stateSearch = reactive({
  objItem : {
    plateNumber: ''
  }
})
const searchError = ref("");
//methods

const submit = async (plate:any) => {
  loadingDel.value = true
  const res:any = await useBlack.delBlackList(plate)
  if (res.code == 0){
    showModal.value = false
    loadingDel.value = false
    notify({
      group: "foo",
      title: 'Bien hecho',
      type: "success",
      text: "La placa "+editingItem.plate+" salio del black list :)",
    }, 4000) // 4s
    // @ts-ignore
    if (listBlack.value.items){
      // @ts-ignore
      listBlack.value.items = listBlack.value.items.filter(li => li.id !== plate)
    }else{
      await resetInput()
    }
  }else if(res.code == 1) {
    showModal.value = false
    loadingDel.value = false
    notify({
      group: "foo",
      title: 'Error',
      type: "error",
      text: res.message,
    }, 5000) // 4s
  }
}


const searchBlack = async () => {
  searchValue.value = false
  listBlack.value = []
  loading.value = true

  if (stateSearch.objItem.plateNumber.length > 0) {
    const res: any = await useBlack.searchBlack(stateSearch.objItem)

    if (res.code == 0){
      searchError.value = ""
      listBlack.value = res.body
    }else{
      searchError.value = res.message
      listBlack.value = []
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

  stateSearch.objItem.plateNumber = ""
  searchValue.value = true

  const res:any = await useBlack.getBlackList(0)
  listBlack.value = res.body
  // currentPage2.value = res.body.currentPage + 1
  loading.value = false
  // @ts-ignore
  // document.getElementsByClassName("wolf")[0].value = "";
}

const editItem = (item:any) => {
  showModal.value = true
  const { plateNumber, id } = item;
  editingItem.plate = plateNumber;
  editingItem.id = id;
};

const clickCallback = async (pageNum:any) =>{
  loading.value = true
  listBlack.value = []
  const res:any = await useBlack.getBlackList(pageNum - 1)
  listBlack.value = res.body
  loading.value = false
}

//mounted
onMounted(async () => {
  loading.value = true
  const res:any = await useBlack.getBlackList(useBlack.currentPage)
  listBlack.value = res.body
  loading.value = false

})

</script>