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
</style>
