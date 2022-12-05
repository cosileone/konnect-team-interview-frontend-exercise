<template>
  <div class="service-detail-container">
    <h1>{{ service.name }}</h1>
    <p>{{ service.description }}</p>
    <h2
      v-if="service.versions.length > 0"
      class="versions-heading"
    >
      Versions ({{ service.versions.length }})
    </h2>
    <table>
      <VersionRow
        v-for="version in service.versions"
        :key="version.id"
        :version="version"
      />
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Service } from '@/utils/types'
import VersionRow from '@/components/ServiceDetail/VersionRow.vue'

const props = defineProps<{
  service: Service
}>()

const service = ref(props.service)
</script>

<style scoped>
.service-detail-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 32px;
  gap: 10px;
  width: 830px;
  background: #FFFFFF;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin: 0 auto;
}

.versions-heading {
  font-weight: 600;
  font-size: 16px;
}
</style>
