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
              v-model="stateSearch.item_search.policyNumber"
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
              v-model="stateSearch.item_search.plateNumber"
          />
          <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>

          </div>
        </div>
      </div>

      <div class="relative max-w-xs">
        <label for="search" class="text-gray-700 text-xs text-gray-600 dark:text-gray-400"> Documento </label>
        <div class="relative">
          <input
              type="text"
              name="search"
              class="is-input"
              placeholder="DNI, RUC, etc"
              v-model="stateSearch.item_search.documentNumber"
          />
          <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
            </svg>

          </div>
        </div>
      </div>

      <div class="relative w-1/4">
        <label for="search" class="text-gray-700 text-xs text-gray-600 dark:text-gray-400"> Fecha de venta </label>
        <client-only>
        <vue-tailwind-datepicker i18n="es-us.js" v-model="dateValue" :options="options" :formatter="formatter" separator=" hasta " input-classes="wolf block w-full p-3 text-sm outline-0 bg-purple-100 text-gray-800 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"/>
        </client-only>

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
        <button class="btn-secondary mb-1" @click="searchPolicy(listPolicy.currentPage)">Buscar</button>
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
                  MARCA
                </th>
                <th scope="col">
                  MODELO
                </th>
                <th scope="col">
                  AÑO
                </th>
                <th scope="col">
                  FECHA DE VENTA
                </th>
                <th scope="col">
                  ESTADO
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
              <tr v-for="listPolicies in listPolicy.items">
                <td>
                  {{listPolicies.policyNumber}}
                </td>
                <td>
                  <span v-if="listPolicies.plateNumber">
                    {{listPolicies.plateNumber}}
                  </span>
                  <span v-else>
                    {{listPolicies.vehicle.plateNumber}}
                  </span>
                </td>
                <td>
                  <span v-if="listPolicies.brand">
                    {{listPolicies.brand}}
                  </span>
                  <span v-else>
                    {{listPolicies.vehicle.model.brand.name}}
                  </span>
                </td>
                <td>
                  <span v-if="listPolicies.model">
                    {{listPolicies.model}}
                  </span>
                  <span v-else>
                    {{listPolicies.vehicle.model.name}}
                  </span>
                </td>
                <td>
                  <span v-if="listPolicies.modelYear">
                    {{listPolicies.modelYear}}
                  </span>
                  <span v-else>
                    {{listPolicies.vehicle.modelYear}}
                  </span>

                </td>
                <td>
                  {{listPolicies.sellDate}}
                </td>
                <td v-if="listPolicies.policyStatusId">
                  <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300" v-if="listPolicies.policyStatusId == 1">Pendiente</span>
                  <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300" v-if="listPolicies.policyStatusId == 2">Enviado</span>
                  <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300" v-if="listPolicies.policyStatusId == 3">Activo</span>
                  <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300" v-if="listPolicies.policyStatusId == 4">Suspendido</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300" v-if="listPolicies.policyStatusId == 5">Cancelado</span>
                  <span class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300" v-if="listPolicies.policyStatusId == 6">Indigo</span>
                  <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300" v-if="listPolicies.policyStatusId == 7">Revoke</span>
                  <span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300" v-if="listPolicies.policyStatusId == 8">Pendiente renovación</span>
                  <span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300" v-if="listPolicies.policyStatusId == 9">Cancelado Renovación</span>
                  <span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300" v-if="listPolicies.policyStatusId == 10">Límite de accidentes</span>
                  <span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300" v-if="listPolicies.policyStatusId == 11">Límite de intentos</span>
                </td>
                <td v-else>
                  <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300" v-if="listPolicies.status.id == 1">Pendiente</span>
                  <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300" v-if="listPolicies.status.id == 2">Enviado</span>
                  <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300" v-if="listPolicies.status.id == 3">Activo</span>
                  <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300" v-if="listPolicies.status.id == 4">Suspendido</span>
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300" v-if="listPolicies.status.id == 5">Cancelado</span>
                  <span class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300" v-if="listPolicies.status.id == 6">Indigo</span>
                  <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300" v-if="listPolicies.status.id == 7">Revoke</span>
                  <span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300" v-if="listPolicies.status.id == 8">Pendiente renovación</span>
                  <span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300" v-if="listPolicies.status.id == 9">Cancelado Renovación</span>
                  <span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300" v-if="listPolicies.status.id == 10">Límite de accidentes</span>
                  <span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300" v-if="listPolicies.status.id == 11">Límite de intentos</span>
                </td>


                <td class="gap-2 flex">
                  <VTooltip>
                    <div @click="editItemPolicy(listPolicies.id)" class="cursor-pointer text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-purple-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                    </div>
                    <template #popper>
                      Cancelar póliza
                    </template>

                  </VTooltip>

                  <VTooltip>
                    <div @click="viewItemPolicy(listPolicies.id)" class="cursor-pointer text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-teal-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <template #popper>
                      Ver detalle
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
                      :page-count="parseInt(listPolicy.totalPages)"

                      v-model="currentPage2"

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
      v-model="showModalView"
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
    <div class="relative px-6 pb-6 flex-auto" v-if="viewPolicyItem.item_policies.policyNumber">
      <div class="grid space-y-4" >

        <div class="text-center">
          <h3 class="text-lg font-semibold text-center">
            Detalle
          </h3>
        </div>

        <div class="flex flex-col">
          <div class="overflow-x-auto">
            <div class=" w-full inline-block align-middle space-y-6">

              <div class="box-table">
                <table class="table-is">

                  <thead class="blue">
                  <tr>
                    <th
                        colspan="2"
                        scope="col"
                        class="px-6 py-3 w-1/4 text-xs font-bold text-left  uppercase"
                    >
                      <h3 class="font-semibold text-primary-700">Detalle de la póliza</h3>
                    </th>

                  </tr>
                  </thead>

                  <tbody>
                  <tr>
                    <td class="td-side blue">
                      Numero de póliza
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {{viewPolicyItem.item_policies.policyNumber}}
                    </td>
                  </tr>
                  <tr>
                    <td class="td-side blue">
                      Fecha de venta
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {{viewPolicyItem.item_policies.sellDate}}
                    </td>
                  </tr>
                  <tr>
                    <td class="td-side blue">
                      Frecuencia
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      <span v-if="viewPolicyItem.item_policies.plan.id == 4">
                        BASICO
                      </span>
                      <span v-if="viewPolicyItem.item_policies.plan.id == 3 || viewPolicyItem.item_policies.plan.id == 10">
                        FULL
                      </span>
                      <span v-if="viewPolicyItem.item_policies.plan.id == 6">
                        INTERMEDIO
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="td-side blue">
                      Frecuencia
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {{viewPolicyItem.item_policies.applyFrequency}}
                    </td>
                  </tr>
                  <tr>
                    <td class="td-side blue">
                      Valor Comercial
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {{viewPolicyItem.item_policies.commercialValue}} <span class="text-xs text-gray-500">{{viewPolicyItem.item_policies.currency}}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="td-side blue">
                      Precio Calculado
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {{viewPolicyItem.item_policies.calculatedPrice}} <span class="text-xs text-gray-500">{{viewPolicyItem.item_policies.currency}}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="td-side blue">
                      Monto de la Póliza
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {{viewPolicyItem.item_policies.policyAmount}} <span class="text-xs text-gray-500">{{viewPolicyItem.item_policies.currency}}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="td-side blue">
                      Número de Renovación
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {{viewPolicyItem.item_policies.renewNumber}}
                    </td>
                  </tr>
                  <tr>
                    <td class="td-side blue">
                      GPS
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {{viewPolicyItem.item_policies.gps}}
                    </td>
                  </tr>
                  <tr>
                    <td class="td-side blue">
                      Inspección
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {{viewPolicyItem.item_policies.inspection}}
                    </td>
                  </tr>

                  <tr>
                    <td class="td-side blue">
                      Empresa
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {{viewPolicyItem.item_policies.business}}
                    </td>
                  </tr>

                  <tr>
                    <td class="td-side blue">
                      Canal
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {{viewPolicyItem.item_policies.channel}}
                    </td>
                  </tr>
                  <tr>
                    <td class="td-side blue">
                      Cero Kilómetro
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {{viewPolicyItem.item_policies.zeroKm}}
                    </td>
                  </tr>

                  <tr>
                    <td class="td-side blue">
                      Estado de Póliza
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300" v-if="viewPolicyItem.item_policies.status.id == 1">Pendiente</span>
                      <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300" v-if="viewPolicyItem.item_policies.status.id == 2">Enviado</span>
                      <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300" v-if="viewPolicyItem.item_policies.status.id == 3">Activo</span>
                      <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300" v-if="viewPolicyItem.item_policies.status.id == 4">Suspendido</span>
                      <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300" v-if="viewPolicyItem.item_policies.status.id == 5">Cancelado</span>
                      <span class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300" v-if="viewPolicyItem.item_policies.status.id == 6">Indigo</span>
                      <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300" v-if="viewPolicyItem.item_policies.status.id == 7">Revoke</span>
                      <span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300" v-if="viewPolicyItem.item_policies.status.id == 8">Pendiente renovación</span>
                      <span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300" v-if="viewPolicyItem.item_policies.status.id == 9">Cancelado Renovación</span>
                      <span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300" v-if="viewPolicyItem.item_policies.status.id == 10">Límite de accidentes</span>
                      <span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300" v-if="viewPolicyItem.item_policies.status.id == 11">Límite de intentos</span>
                    </td>
                  </tr>

                  </tbody>
                </table>
              </div>

              <div class="box-table">
                <table class="table-is">

                  <thead class="purple">
                  <tr>
                    <th
                        scope="col"
                        class="px-6 py-3 text-xs font-bold text-left  uppercase"
                        colspan="2"
                    >
                      <h3 class="font-semibold text-purple-700">Datos del vehiculo</h3>
                    </th>

                  </tr>
                  </thead>

                  <tbody>
                  <tr>
                    <td class="td-side purple">
                      Placa
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {{viewPolicyItem.item_policies.vehicle.plateNumber}}
                    </td>
                  </tr>
                  <tr>
                    <td class="td-side purple">
                      Marca
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {{viewPolicyItem.item_policies.vehicle.model.brand.name}}
                    </td>
                  </tr>
                  <tr>
                    <td class="td-side purple">
                      Modelo
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {{viewPolicyItem.item_policies.vehicle.model.name}}
                    </td>
                  </tr>
                  <tr>
                    <td class="td-side purple">
                      Año Modelo
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {{viewPolicyItem.item_policies.vehicle.modelYear}}
                    </td>
                  </tr>

                  </tbody>
                </table>
              </div>

              <div class="box-table">
                <table class="table-is">

                  <thead class="teal">
                  <tr>
                    <th
                        colspan="2"
                        scope="col"
                        class="px-6 py-3 w-1/4 text-xs font-bold text-left  uppercase"
                    >
                      <h3 class="font-semibold text-teal-700">Datos del cliente</h3>
                    </th>

                  </tr>
                  </thead>

                  <tbody>
                  <tr>
                    <td class="td-side teal">
                      Nombre completo
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {{viewPolicyItem.item_policies.account.client.firstName}}
                      {{viewPolicyItem.item_policies.account.client.firstLastName}}
                      {{viewPolicyItem.item_policies.account.client.secondLastName}}
                    </td>
                  </tr>
                  <tr>
                    <td class="td-side teal">
                      Numero de documento
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {{viewPolicyItem.item_policies.account.client.documentNumber}}
                    </td>
                  </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="modal-close" @click="showModalView = false">
      x
    </button>
  </vue-final-modal>
  <vue-final-modal
      v-model="showModalDel"
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
    <div class="relative px-6 pb-6 flex-auto">
      <div class="grid space-y-4" >

        <div class="text-center">
          <h3 class="text-lg font-semibold text-center">
            Cancelación de póliza
          </h3>
        </div>

        <div class="relative  flex-auto text-center grid space-y-4">
          <p>¿Estás seguro de cancelar la póliza <span class="font-bold">{{ viewPolicyItem.item_policies.policyNumber }}</span> ?</p>
          <!--            <input type="text" class="is-input" placeholder="Motivo">-->
          <button type="button" class="btn-secondary" @click="cancelItemPolicy(viewPolicyItem.item_policies.id, useLogin.userData.userDatabaseModel.id)">Confirmar</button>
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
import {notify,Notification, NotificationGroup} from "notiwind";
import {usePolicyStore} from '~/stores/policy'
import {useLoginStore} from '~/stores/login2'
import Loader from "~/components/widgets/loader.vue";

const usePolicy = usePolicyStore()
const useLogin = useLoginStore()
//VARIABLES
const listPolicy = ref([]);
const searchError = ref("");
const showModalDel = ref(false)
const showModalView = ref(false)
const loading = ref(false);
const searchActive = ref(false)
const dateValue = ref({
  startDate: '',
  endDate: ''
})
const currentPage2 = ref(0)
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

const loading_cancel = ref(false);

const stateSearch = reactive({
  item_search: {
    policyNumber: '',
    plateNumber: '',
    documentNumber: '',
    sellDateFrom: '',
    sellDateTo: ''
  }
})

const viewPolicyItem = reactive({
  item_policies: []
});

//METHODS
const viewItemPolicy = async (item_policy:any) => {
  showModalView.value = true
  const res:any = await usePolicy.viewPolicy(item_policy)
  viewPolicyItem.item_policies = res.body
};

const editItemPolicy = async (item_policy:any) => {
  showModalDel.value = true
  const res:any = await usePolicy.viewPolicy(item_policy)
  viewPolicyItem.item_policies = res.body
};

const searchPolicy = async () => {
  loading.value = true
  // showModalDel.value = true
  if (stateSearch.item_search) {

    stateSearch.item_search.sellDateFrom = dateValue.value.startDate
    stateSearch.item_search.sellDateTo = dateValue.value.endDate

    const res: any = await usePolicy.searchPolicy(stateSearch.item_search, 0)
    if (res.body.totalItems > 0){
      searchError.value = ""
      searchActive.value = true
      listPolicy.value = res.body
      currentPage2.value = res.body.currentPage + 1
    }else{
      searchError.value = "No hay datos o no ingreso ningún campo de busqueda"
    }
  }
  loading.value = false
};

const cancelItemPolicy = async (idPolicy:any, idUser:any) => {
  loading_cancel.value = true
  showModalDel.value = true
  const res:any = await usePolicy.cancelPolicy(idPolicy, idUser)
  if (res.code == 0){
    showModalDel.value = false
    loading_cancel.value = false
    notify({
      group: "foo",
      title: 'Bien hecho',
      type: "success",
      // @ts-ignore
      text: "La póliza "+viewPolicyItem.item_policies.policyNumber+" Se cancelo :)",
    }, 4000) // 4s
    // @ts-ignore
    listPolicy.value.items = listPolicy.value.items.map(li => {
      if (li.id === res.body.id){
        // console.log(li)
        li = res.body
      }
      return li
    })

  }else if(res.code == 1) {
    showModalDel.value = false
    loading_cancel.value = false
    notify({
      group: "foo",
      title: 'Error',
      type: "error",
      text: res.message,
    }, 5000) // 4s
  }
};

const clickCallback = async (pageNum:any) =>{
  loading.value = true
  listPolicy.value = []
  if (searchActive.value){

      stateSearch.item_search.sellDateFrom = dateValue.value.startDate
      stateSearch.item_search.sellDateTo = dateValue.value.endDate

      const res: any = await usePolicy.searchPolicy(stateSearch.item_search, pageNum - 1)
      if (res.body.totalItems > 0){
        searchError.value = ""
        listPolicy.value = res.body
        currentPage2.value = res.body.currentPage + 1
      }else{
        searchError.value = "No hay datos o no ingreso ningún campo de busqueda"
      }

  }else{
    const res:any = await usePolicy.getPolicy(pageNum - 1)
    listPolicy.value = res.body
  }
  loading.value = false
}

const resetInput = async () => {
  // usePolicy.currentPage = 0
  loading.value = true
  searchActive.value = false
  dateValue.value.startDate = ""
  dateValue.value.endDate = ""

  stateSearch.item_search.policyNumber = ""
  stateSearch.item_search.plateNumber = ""
  stateSearch.item_search.documentNumber = ""
  stateSearch.item_search.sellDateFrom = ""
  stateSearch.item_search.sellDateTo = ""
  searchError.value = ""

  const res:any = await usePolicy.getPolicy(0)
  listPolicy.value = res.body
  currentPage2.value = res.body.currentPage + 1
  loading.value = false
  // @ts-ignore
  document.getElementsByClassName("wolf")[0].value = "";
}

const getPolicy = async () => {
  loading.value = true
  const res:any = await usePolicy.getPolicy(usePolicy.currentPage)
  listPolicy.value = res.body
  currentPage2.value = res.body.currentPage + 1
  loading.value = false
};
onMounted(async () => {
  await getPolicy()
})

</script>