<template>
  <header>
    <TheTopNavbar />
  </header>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheTopNavbar from '@/components/TheTopNavbar/TheTopNavbar.vue'

export default defineComponent({
  name: 'App',
  components: { TheTopNavbar },
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

:root {
  --black-0: #0B172D;

  --blue-0: #09224F;
  --blue-1: #073382;
  --blue-2: #5888DB;
  --blue-4: #F2F6FE;

  --blue-arrow: #1456CB;
  --blue-300: #A6C6FF;

  --grey-0: #3C4557;
  --grey-1: #707888;
  --grey-2: #B6B6BD;
  --grey-3: #E7E7EC;
  --grey-4: #F1F1F5;

  --grey-version-row-text: #8A8A8A;

  --grey-500: #6F7787;
  --grey-search-icon: #B9BABB;

  --grey-bubble: #F1F1F8;
  --grey-bubble-text: #777D8A;
  --grey-icon: #ADB6C8;

  --green-0: #14B59A;
  --green-1: #42D782;
  --green-500: #07A88D;

  --yellow: #FABE5F;
}

html {
  margin: 0;
  padding: 0;
  font-size: 10px;
}

body {
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.2;
  margin: 0 auto;
  background-color: #F8F8FA;
}
</style>
