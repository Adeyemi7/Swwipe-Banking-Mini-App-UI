<script setup>
import sentLogo from './icons/sentLogo.vue'
import CancelBar from './icons/CancelBar.vue'

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <div class="container-password">
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
.container-password {
  justify-items: center;
  align-items: center;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  background-color: #ffffff;
  position: absolute;
  top: -10%;
  right: -500px;
  transform: translate(-50%, -50%);
  padding: 10px;
  border: 1px solid #95c9b4;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 0 1em 0 1em;
}

@media (width <= 64em) {
  .container-password {
    gap: 20px;
    top: -5%;
    right: -380px;
  }
}

@media (width <= 48em) {
  .container-password {
    gap: 20px;
    top: -5%;
    right: -270px;
  }
}

@media (width <= 26.9625em) {
  .container-password {
    gap: 20px;
    top: -5%;
    right: -150px;
  }
}

@media (width <= 20em) {
  .container-password {
    gap: 10px;
    top: 10%;
    right: -170px;
  }
}
</style>
