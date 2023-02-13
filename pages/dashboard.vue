<template>
  <div class="grid grid-cols-4 gap-6">
    <div class="is-box grid p-6 space-y-1 relative">
      <div class="float-right bg-primary-100 absolute top-4 right-5 p-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-700">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </div>
      <h5 class="text-sm text-gray-400">Pólizas</h5>
      <div class="text-lg dark:text-white">152</div>
      <div class="text-gray-500">
        <span class="text-green-500">24 nuevos</span> desde la última visita
      </div>
    </div>

    <div class="is-box grid p-6 space-y-1 relative">
      <div class="float-right bg-red-100 absolute top-4 right-5 p-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-700">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
        </svg>
      </div>
      <h5 class="text-sm text-gray-400">Renovaciones</h5>
      <div class="text-lg dark:text-white">1522</div>
      <div class="text-gray-500">
        <span class="text-green-500">%52+</span> desde la ultima semana
      </div>
    </div>

    <div class="is-box grid p-6 space-y-1 relative">
      <div class="float-right bg-teal-100 absolute top-4 right-5 p-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-teal-700">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      </div>
      <h5 class="text-sm text-gray-400">153 en black list</h5>
      <div class="text-lg dark:text-white">152</div>
      <div class="text-gray-500">
        <span class="text-green-500">12%</span> la ultima semana
      </div>
    </div>

    <div class="is-box grid p-6 space-y-1 relative">
      <div class="float-right bg-purple-100 absolute top-4 right-5 p-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-purple-700">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>

      </div>
      <h5 class="text-sm text-gray-400">Clientes</h5>
      <div class="text-lg dark:text-white">252</div>
      <div class="text-gray-500">
        <span class="text-green-500">32%</span> la ultima semana
      </div>
    </div>

  </div>

  <div class="mt-6">
    <policy></policy>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth" ]
})
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Dashboard` : 'Dashboard';
  }
})
</script>