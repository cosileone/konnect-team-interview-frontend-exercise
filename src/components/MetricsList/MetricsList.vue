<template>
  <ul class="metrics-list">
    <MetricListItem
      :bolded-text="`${props.metrics.latency.toFixed(2)}ms`"
      postfix=" latency"
    />
    <MetricListItem
      :bolded-text="`${(props.metrics.uptime*100).toFixed(2)}%`"
      postfix=" uptime"
    />
    <MetricListItem>
      <span class="metric-number">{{ formatter.format(props.metrics.requests) }}</span>
      <span class="metric-text"> requests · </span>
      <span class="metric-number">{{ props.metrics.errors.toFixed(2) }}%</span>
      <span class="metric-text"> errors</span>
    </MetricListItem>
  </ul>
</template>

<script setup lang="ts">
import { Metrics } from '@/utils/types'
import MetricListItem from '@/components/MetricsList/MetricListItem.vue'

const props = defineProps<{
  metrics: Metrics
}>()
const locale = Intl.NumberFormat().resolvedOptions().locale
const formatter = Intl.NumberFormat(locale, { notation: 'compact' })
</script>

<style lang="scss" scoped>
.metrics-list {
  font-size: 12px;
  list-style-type: disc;
  padding: 12px;
}
</style>
