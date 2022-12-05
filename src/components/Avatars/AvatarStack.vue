<template>
  <div>
    <AvatarCircle>
      <slot></slot>
    </AvatarCircle>
  </div>
</template>

<script>
import AvatarCircle from '@/components/Avatars/AvatarCircle.vue'

export default {
  name: 'AvatarStack',
  components: { AvatarCircle },
}
</script>

<style scoped>

</style>
