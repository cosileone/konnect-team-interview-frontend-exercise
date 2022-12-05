<template>
  <div class="circle">
    <slot>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  imageSource?: string,
  size?: number,
}>()

const developerImageCSSUrl = computed(() => (`url("${props.imageSource}")`))
const size = computed(() => (`${props.size ?? 36}px`))
</script>

<style scoped>
.circle {
  width: v-bind('size');
  height: v-bind('size');
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-weight: 600;
  text-align: center;

  background-color: var(--grey-bubble);
  background-image: v-bind('developerImageCSSUrl');
  background-size: contain;
  background-position: center center;
  color: var(--grey-bubble-text);
}
</style>
