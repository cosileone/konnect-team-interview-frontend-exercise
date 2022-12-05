<template>
  <div class="pill">
    <slot>
      {{ value }}
    </slot>
  </div>
</template>

<script setup>

</script>

<style scoped>
.pill {
  background-color: var(--blue-4);
  box-sizing: border-box;
  border-radius: 100px;
  padding: 9px 16px;
  text-align: center;
  white-space: nowrap;

  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  color: var(--blue-2);
}
</style>
