<script setup>
import { defineEmits, ref } from 'vue'
import CancelBar from './icons/CancelBar.vue'
import HandMobile from './icons/HandMobile.vue'
import SuccessfulEmailMessage from './SuccessfulEmailMessage.vue'

const emit = defineEmits(['close', 'submitted'])
const showForgotPassword = ref(false)

const displaySuccessfulMessage = () => {
  showForgotPassword.value = true
}

const closeSuccessfulMessage = () => {
  showForgotPassword.value = false
}

setTimeout(() => {
  closeSuccessfulMessage()
}, 5000)

const handleForgotPassword = (e) => {
  e.preventDefault()
  // const email = e.target.email.value
  emit('submitted ')
  // setTimeout(() => {
  //   this.$router.push('/LoginPage')
  // }, 5000)
  displaySuccessfulMessage()
  console.log('email has been sent')
}

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <div class="overlay">
    <div class="pop-up">
      <div class="bar">
        <CancelBar @click="handleClose" />
      </div>
      <div>
        <div class="password-texts">
          <p class="forget-text">Forgot Password</p>

          <p class="forget-description">
            Don’t worry, it happens. Please provide the email address associated with your account
          </p>
          <p class="">
            <HandMobile />
          </p>

          <div class="label-input">
            <label for="email-address"> Email Address </label> <br />
            <input
              type="email"
              placeholder=" sammymetaverse@gmail.com"
              name="email-address"
              id="email-address"
              required
            />
          </div>

          <div class="btn-submit">
            <button @click="handleForgotPassword" class="btn" type="submit">Submit</button>

            <div v-if="showForgotPassword">
              <SuccessfulEmailMessage @close="closeSuccessfulMessage" />
            </div>
          </div>

          <p class="inbox-text">
            Can’t find the link in your inbox? check your spam folder or
            <span @click="handleForgotPassword" class="inbox-link"> Resend link </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(75, 85, 99, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.pop-up {
  background-color: #ffffff;
  width: 22%;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}

.bar {
  display: flex;
  justify-content: flex-end;
}

.password-texts {
  text-align: center;
  color: #1f2937;
}

.forget-text {
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
}

.forget-description {
  font-size: 16px;
  font-weight: 500;
  line-height: 20.16px;
  max-width: 270px;
  margin: 0 auto;
}

label {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2em;
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

.inbox-text {
  width: 90%;
  margin: 0 auto;
  margin-top: 1rem;
}

.inbox-link {
  color: #00b6ab;
}
</style>
