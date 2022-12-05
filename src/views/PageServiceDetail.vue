<template>
  <ServiceDetail :service="service" />
</template>

<script setup lang="ts">
import { useServicesStore } from '@/stores/services'
import { useRoute } from 'vue-router'
import ServiceDetail from '@/components/ServiceDetail/ServiceDetail.vue'
import { Service } from '@/utils/types'

const route = useRoute()
const store = useServicesStore()
const service = store.getServiceById(route.params.id) as Service
</script>

<style scoped>

</style>
