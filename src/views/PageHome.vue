<template>
  <Suspense>
    <ServiceCatalog />
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ServiceCatalog from '@/components/ServiceCatalog/ServiceCatalog.vue'

export default defineComponent({
  name: 'PageHome',
  components: {
    ServiceCatalog,
  },
})
</script>

<style lang="scss">
</style>
