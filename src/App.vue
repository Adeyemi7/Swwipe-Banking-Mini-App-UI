<script>
// import CreateAccount from '@/pages/CreateAccount.vue'

export default {
  name: 'App',
  components: {
    // CreateAccount
  },
  data() {
    return {}
  }
}
</script>

<template>
  <div class="container">
    <router-link to="/CreateAccount"></router-link>
    <router-view> </router-view>
  </div>
</template>

<style scoped>
container {
  background-color: black;
}
</style>
