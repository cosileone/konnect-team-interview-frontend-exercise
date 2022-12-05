import { defineStore } from 'pinia'
import { Service } from '@/utils/types'
import { computed, ref } from 'vue'

export const useServicesStore = defineStore('services', () => {
  const services = ref<Service[]>([])

  const getServiceById = computed(() => (id: string | string[]): Service | undefined => {
    return services.value.find((service: Service) => service.id === id)
  })

  return {
    services,
    getServiceById,
  }
})
