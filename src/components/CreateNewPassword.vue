<script setup>
import { defineEmits, ref } from 'vue'
import HandMobile from './icons/HandMobile.vue'
import SwwipeLogo from './icons/SwwipeLogo.vue'
import newPasswordCreated from './newPasswordCreated.vue'

const emit = defineEmits(['close'])
const showPasswordCreated = ref(false)

const handleClose = () => {
  emit('close')
}

const displayPasswordCreatedMessage = () => {
  showPasswordCreated.value = true
}

const closePasswordCreatedMessage = () => {
  showPasswordCreated.value = false
}

setTimeout(() => {
  handleClose()
  // displayPasswordCreatedMessage()
}, 3000)

const handleCreatePassword = (e) => {
  e.preventDefault()
  emit('close')
  displayPasswordCreatedMessage()
  console.log('Password created successfully')
}
</script>

<template>
  <div class="container">
    <div class="logo-container">
      <SwwipeLogo />
    </div>
    <div class="form-container">
      <h1>Create New Password</h1>
      <p>Create a new password to login to your account</p>

      <div class="handy">
        <HandMobile />
      </div>

      <form class="form-content">
        <div class="label-input">
          <label for="password"> New Password </label> <br />
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            required
          />
        </div>

        <div class="label-password">
          <label for="password"> Confirm Password </label> <br />
          <input
            v-model="password"
            type="password"
            placeholder="Re-enter new password"
            name="new-password"
            id="new-password"
            required
          />
        </div>
        <button @click="handleCreatePassword">Create Password</button>

        <div>
          <newPasswordCreated v-if="showPasswordCreated" @close="closePasswordCreatedMessage" />
        </div>

        <p class="login-texts">
          Go back to
          <router-link to="/LoginPage">
            <span>Login</span>
          </router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 22%;
  top: 10%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  color: #20102b;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
}

.form-container {
  background-color: #ffffff;
  width: 100%;
  margin-top: 2em;
  position: absolute;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
}

label {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 1.5em;
}

.form-content {
  margin-top: 1em;
}
.label-password {
  margin-top: 1rem;
}
input,
button {
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 0 auto;
}
input {
  width: 85%;
}
button {
  width: 90%;
  margin-top: 3em;
  background-color: #edeef2;
  color: #9ea2b3;
}

button:hover {
  background-color: #00b6ab;
  color: white;
}

.login-texts {
  color: #20102b;
}

.login-texts span {
  color: #00b6ab;
  text-decoration: none;
}

@media (width <= 64em) {
  .container {
    width: 45%;
  }
}

@media (width <= 42em) {
  .container {
    width: 90%;
  }
}

@media (width <= 20em) {
  .container {
    width: 70%;
  }

  .form-container {
    width: 90%;
  }

  .handy {
    margin-left: -1em;
  }
}
</style>
