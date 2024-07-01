<script setup>
import topNavigation from '@/components/topNavigation.vue'
import sideBar from '@/components/sideBar.vue'
import mainDashBoard from '@/components/mainDashBoard.vue'
</script>

<template>
  <div class="app-container">
    <div class="top-Nav">
      <topNavigation />
    </div>

    <div class="side-Bar">
      <sideBar />
    </div>

    <div class="main">
      <mainDashBoard />
    </div>
  </div>
</template>

<style scoped></style>
