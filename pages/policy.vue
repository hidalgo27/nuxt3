<template>
  <policy></policy>
</template>
<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Pólizas` : 'Pólizas';
  }
})
definePageMeta({
  middleware: ["auth" ]
})
</script>