<script>
import UsersData from '@/components/UsersData.vue'
import SideLoginPage from '@/components/SideLoginPage.vue'

export default {
  name: 'CreateAccount',
  components: {
    UsersData,
    SideLoginPage
  },
  data() {
    return {}
  }
}
</script>

<template>
  <div class="app-container">
    <UsersData />
    <SideLoginPage />
  </div>
</template>

<style scoped>
.app-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 80em) {
}

@media (max-width: 41em) {
  .app-container {
    width: 100%;
    grid-template-columns: 1fr 0;
  }
}
</style>
