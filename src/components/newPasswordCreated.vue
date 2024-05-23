<script setup>
import sentLogo from './icons/sent.svg'
import CancelBar from './icons/CancelBar.vue'

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <div class="container">
    <div>
      <sentLogo />
    </div>
    <p class="message">Password created successfully</p>

    <div>
      <CancelBar @click="handleClose" />
    </div>
  </div>
</template>

<style scoped>
.container {
  justify-items: center;
  align-items: center;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  background-color: #ffffff;
  position: absolute;
  top: 15%;
  right: 10%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border: 1px solid #95c9b4;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 0 2em 0 2em;
}
</style>
