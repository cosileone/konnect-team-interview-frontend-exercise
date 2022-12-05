<template>
  <div class="nav">
    <router-link to="/">
      <div class="logo-container">
        <Kong />
        <KonnectLogo />
      </div>
    </router-link>
  </div>
</template>

<script>
import Kong from '@/components/Icons/KongLogo.vue'
import KonnectLogo from '@/components/Icons/KonnectLogo.vue'

export default {
  name: 'TheTopNavbar',
  components: {
    KonnectLogo,
    Kong,
  },
}
</script>

<style scoped lang="scss">
.nav {
  padding: 16px;
  margin-bottom: 4rem;
  background: linear-gradient(180deg, var(--blue-0) 0%, var(--blue-1) 100%);

  a {
    font-weight: 700;
    color: blue;

    & .router-link-exact-active {
      color: green;
    }

  }
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 14px;
}
</style>
