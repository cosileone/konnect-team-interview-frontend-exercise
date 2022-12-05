import { ref, onBeforeMount } from 'vue'
import axios from 'axios'
import { useServicesStore } from '@/stores/services'
import { storeToRefs } from 'pinia'

export default function useServices(): any {
  const servicesStore = useServicesStore()
  const { services } = storeToRefs(servicesStore)
  const loading = ref<any>(false)

  const getServices = async (params = {}): Promise<any> => {
    // Initialize loading state
    loading.value = true

    // Fetch data from the API
    const result = await axios.get('/api/services', {
      params,
    })

    // Store data in Vue ref
    services.value = result.data

    // Reset loading state
    loading.value = false

    return result.data
  }

  onBeforeMount(async (): Promise<void> => {
    // Fetch services from the API
    await getServices()
  })

  // Return stateful data
  return {
    services,
    loading,
    getServices, // normally this would be wrapped in a debounce function
  }
}
