<template>
  <div class="service-catalog">
    <div class="page-header">
      <div class="page-header-titles">
        <h1>
          Service Hub
        </h1>
        <div class="page-header-extras">
          <input
            v-model="searchQuery"
            class="search-input"
            placeholder="Search"
          >
          <button class="cta-primary-button" @click="handleCreateService()">
            + Service Package
          </button>
        </div>
      </div>
      <p>
        Organize services, manage and track versioning and API service documentation.
        <a href="#">Learn More</a>
      </p>
    </div>
    <ul
      class="catalog"
    >
      <ServiceCard
        v-for="service in paginatedServices"
        :key="service.id"
        :service="service"
        @click="navigateToServiceDetail(service.id)"
      />
    </ul>
    <Pagination
      v-model="currentPage"
      collection-name="services"
      :page-size="pageSize"
      :total-count="resultsLength"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import ServiceCard from '@/components/ServiceCard/ServiceCard.vue'
import useServices from '@/composables/useServices'
import useSearchParam from '@/composables/useSearchParam'
import Pagination from '@/components/Pagination/Pagination.vue'
import { useServicesStore } from '@/stores/services'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'ServiceCatalog',
  components: {
    Pagination,
    ServiceCard,
  },
  async setup() {
    const router = useRouter()
    const pageSize = 9
    const currentPage = ref(0)
    const [q, setQ] = useSearchParam('q')
    const searchQuery = ref(q) // Set the search string to a Vue ref

    function navigateToServiceDetail(serviceId: string) {
      router.push({
        name: 'service-detail',
        params: { id: serviceId },
      })
    }

    // Import services from the composable
    const {
      loading,
      getServices,
    } = useServices()
    const servicesStore = useServicesStore()
    const { services } = storeToRefs(servicesStore)

    watch(searchQuery, async (newVal) => {
      await setQ(newVal)
      currentPage.value = 0
      await getServices({ q: searchQuery.value }) // this would normally be debounced
    })

    const paginatedServices = computed(() => {
      const startIndex = currentPage.value * pageSize
      return services.value ? services.value.slice(startIndex, startIndex + pageSize) : []
    })
    const resultsLength = computed(() => services.value.length)

    function handleCreateService() {
      alert('Insert some functionality here')
    }

    return {
      services,
      paginatedServices,
      resultsLength,
      loading,
      searchQuery,
      currentPage,
      pageSize,
      navigateToServiceDetail,
      handleCreateService,
    }
  },
})
</script>

<style lang="scss" scoped>
.page-header-titles {
  display: flex;
  justify-content: space-between;

  & h1 {
    display: inline-block;
  }
}

.page-header-extras {
  display: inline-block;
}

.service-catalog {
  margin: 2rem auto;
  padding: 0 20px;
}

.catalog {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin: 20px 0 24px 0;
  padding: 0;
  list-style: none inside none;
}

.search-input {
  padding: 10px 16px 10px 8px;
  border: 1px solid var(--grey-3);
  margin-right: 24px;
}

.cta-primary-button {
  background: var(--green-500);
  border-radius: 100px;
  color: white;
  padding: 12px 24px;
  border: none;
}
</style>
