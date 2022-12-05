<template>
  <li>
    <slot>
        <span class="metric-number">{{props.boldedText}}</span>
        <span class="metric-text">{{props.postfix}}</span>
    </slot>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  boldedText?: string,
  postfix?: string,
  markerColor?: string,
}>(), {
  markerColor: 'var(--green-1)',
})

const markerColor = ref(props.markerColor)
</script>

<style lang="scss">
li {
  line-height: 16px;

  &::marker {
    color: v-bind(markerColor)
  }
}

.metric-number {
  font-weight: 600;
  color: var(--grey-0);
}

.metric-text {
  font-weight: 600;
  color: var(--grey-1);
}
</style>
