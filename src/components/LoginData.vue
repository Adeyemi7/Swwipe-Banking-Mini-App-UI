<script setup>
import { ref } from 'vue'
import SwwipeLogo from './icons/SwwipeLogo.vue'
import ForgotPassword from './ForgotPassword.vue'

const showForgotPassword = ref(false)

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(username.value)
  console.log(password.value)
}

const openForgotPassword = () => {
  showForgotPassword.value = true
}

const closeForgotPassword = () => {
  showForgotPassword.value = false
}

const username = ref('')
const password = ref('')
</script>

<template>
  <div class="real-container">
    <SwwipeLogo />

    <p class="back">
      <svg
        width="71"
        height="24"
        viewBox="0 0 71 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.0005 11.0003L7.83047 11.0003L12.7105 6.12027C13.1005 5.73027 13.1005 5.09027 12.7105 4.70027C12.3205 4.31027 11.6905 4.31027 11.3005 4.70027L4.71047 11.2903C4.32047 11.6803 4.32047 12.3103 4.71047 12.7003L11.2905 19.3003C11.6805 19.6903 12.3105 19.6903 12.7005 19.3003C13.0905 18.9103 13.0905 18.2803 12.7005 17.8903L7.83047 13.0003L19.0005 13.0003C19.5505 13.0003 20.0005 12.5503 20.0005 12.0003C20.0005 11.4503 19.5505 11.0003 19.0005 11.0003Z"
          fill="#1F2937"
        />
        <path
          d="M33.328 19V7.08H38.336C39.0507 7.08 39.664 7.208 40.176 7.464C40.6987 7.72 41.0987 8.08267 41.376 8.552C41.664 9.01067 41.808 9.56 41.808 10.2C41.808 10.7867 41.6533 11.32 41.344 11.8C41.0453 12.2693 40.6027 12.6373 40.016 12.904L40 12.312C40.512 12.504 40.9333 12.76 41.264 13.08C41.6053 13.3893 41.8613 13.752 42.032 14.168C42.2027 14.5733 42.288 15.0053 42.288 15.464C42.288 16.5627 41.936 17.4267 41.232 18.056C40.528 18.6853 39.568 19 38.352 19H33.328ZM34.896 17.56H38.416C39.1093 17.56 39.664 17.3733 40.08 17C40.496 16.6267 40.704 16.12 40.704 15.48C40.704 14.84 40.496 14.3333 40.08 13.96C39.664 13.576 39.1093 13.384 38.416 13.384H34.896V17.56ZM34.896 11.976H38.304C38.88 11.976 39.344 11.8107 39.696 11.48C40.048 11.1387 40.224 10.7067 40.224 10.184C40.224 9.64 40.048 9.224 39.696 8.936C39.344 8.648 38.88 8.504 38.304 8.504H34.896V11.976ZM46.7581 19.192C46.1928 19.192 45.6915 19.0907 45.2541 18.888C44.8275 18.6747 44.4915 18.3867 44.2461 18.024C44.0008 17.6507 43.8781 17.224 43.8781 16.744C43.8781 16.2853 43.9741 15.8747 44.1661 15.512C44.3688 15.1387 44.6781 14.824 45.0941 14.568C45.5208 14.312 46.0541 14.1307 46.6941 14.024L49.8941 13.496V14.744L47.0301 15.224C46.4755 15.32 46.0701 15.496 45.8141 15.752C45.5688 16.008 45.4461 16.3227 45.4461 16.696C45.4461 17.048 45.5848 17.3413 45.8621 17.576C46.1501 17.8107 46.5075 17.928 46.9341 17.928C47.4781 17.928 47.9475 17.816 48.3421 17.592C48.7475 17.3573 49.0621 17.0427 49.2861 16.648C49.5208 16.2533 49.6381 15.816 49.6381 15.336V13.144C49.6381 12.6747 49.4621 12.296 49.1101 12.008C48.7688 11.7093 48.3155 11.56 47.7501 11.56C47.2595 11.56 46.8221 11.688 46.4381 11.944C46.0648 12.1893 45.7875 12.52 45.6061 12.936L44.3101 12.264C44.4701 11.8693 44.7261 11.5173 45.0781 11.208C45.4301 10.888 45.8408 10.6373 46.3101 10.456C46.7795 10.2747 47.2701 10.184 47.7821 10.184C48.4435 10.184 49.0248 10.312 49.5261 10.568C50.0275 10.8133 50.4168 11.16 50.6941 11.608C50.9821 12.0453 51.1261 12.5573 51.1261 13.144V19H49.6701V17.368L49.9421 17.464C49.7608 17.8053 49.5155 18.104 49.2061 18.36C48.8968 18.616 48.5341 18.8187 48.1181 18.968C47.7021 19.1173 47.2488 19.192 46.7581 19.192ZM57.4333 19.192C56.5906 19.192 55.8386 18.9947 55.1773 18.6C54.5266 18.2053 54.0146 17.6667 53.6413 16.984C53.2679 16.3013 53.0813 15.5333 53.0813 14.68C53.0813 13.816 53.2679 13.048 53.6413 12.376C54.0146 11.704 54.5266 11.1707 55.1773 10.776C55.8386 10.3813 56.5906 10.184 57.4333 10.184C57.9986 10.184 58.5266 10.2853 59.0173 10.488C59.5079 10.6907 59.9399 10.9627 60.3133 11.304C60.6866 11.6453 60.9586 12.0453 61.1293 12.504L59.8013 13.144C59.5986 12.696 59.2893 12.3333 58.8733 12.056C58.4573 11.768 57.9773 11.624 57.4333 11.624C56.9106 11.624 56.4359 11.7573 56.0093 12.024C55.5933 12.2907 55.2626 12.6533 55.0173 13.112C54.7719 13.5707 54.6493 14.0987 54.6493 14.696C54.6493 15.272 54.7719 15.7947 55.0173 16.264C55.2626 16.7227 55.5933 17.0853 56.0093 17.352C56.4359 17.6187 56.9106 17.752 57.4333 17.752C57.9773 17.752 58.4573 17.6133 58.8733 17.336C59.2893 17.048 59.5986 16.6693 59.8013 16.2L61.1293 16.872C60.9586 17.32 60.6866 17.72 60.3133 18.072C59.9399 18.4133 59.5079 18.6853 59.0173 18.888C58.5266 19.0907 57.9986 19.192 57.4333 19.192ZM63.0739 19V6.888H64.5619V15.192L63.9539 15.048L68.5299 10.376H70.4339L67.1219 13.848L70.6579 19H68.8979L65.6659 14.328L66.5939 14.28L64.0819 16.904L64.5619 15.816V19H63.0739Z"
          fill="#1F2937"
        />
      </svg>
    </p>

    <section class="login-details">
      <p class="Create-texts">Login</p>

      <form @submit="handleSubmit" class="registration-inputs">
        <div class="label-input">
          <label for="email-address"> Email Address </label> <br />
          <input
            type="email"
            placeholder="Enter Email Address"
            name="email-address"
            id="email-address"
            required
          />
        </div>

        <div class="label-input">
          <label for="password"> Password </label> <br />
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            required
          />
        </div>

        <div class="forgot-password">
          <p @click="openForgotPassword">Forgot password ?</p>

          <div v-if="showForgotPassword">
            <ForgotPassword @close="closeForgotPassword" />
          </div>
        </div>

        <div class="container-signin">
          <span class="checkbox-con">
            <input type="checkbox" name="checkbox" class="check-box" />
          </span>
          <span>Stay signed into your Swwipe account</span>
        </div>

        <button class="btn" type="submit">Login to your account</button>

        <p>
          Don’t have a Swwipe account?
          <router-link class="login-router" to="/CreateAccount">
            <span class="login-texts">
              Create account
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33302 7.33319L10.7797 7.33319L7.52635 4.07986C7.26635 3.81986 7.26635 3.39319 7.52635 3.13319C7.78635 2.87319 8.20635 2.87319 8.46635 3.13319L12.8597 7.52652C13.1197 7.78652 13.1197 8.20652 12.8597 8.46652L8.47302 12.8665C8.21302 13.1265 7.79302 13.1265 7.53302 12.8665C7.27302 12.6065 7.27302 12.1865 7.53302 11.9265L10.7797 8.66652L3.33302 8.66652C2.96635 8.66652 2.66635 8.36652 2.66635 7.99986C2.66635 7.63319 2.96635 7.33319 3.33302 7.33319Z"
                  fill="#00B6AB"
                /></svg
            ></span>
          </router-link>
        </p>
      </form>
    </section>
    <!-- <SuccessfulEmailMessage v-if="showSuccessfulMessage" @close="closeSuccessfulMessage" /> -->
  </div>
</template>

<style scoped>
.real-container {
  width: 50%;
  margin-left: 40%;
  margin-top: 10%;
  background-color: white;
}

.login-details {
  margin-top: 10%;
  color: #4b5563;
}

.label-input {
  margin-top: 1rem;
  display: block;
}

input,
button {
  width: 70%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 5px;
  font-weight: 400;
}

button {
  background-color: #edeef2;
  color: #9ea2b3;
}

.btn:hover {
  background-color: #00b6ab;
  color: white;
}

.Create-texts {
  font-size: 30px;
  font-weight: 800;
  color: #1f2937;
}

.login-router {
  text-decoration: none;
}

.login-texts {
  font-size: 16px;
  color: #00b6ab;
}

.login-texts svg {
  margin-bottom: -0.1rem;
  text-decoration: none;
}

.container-signin {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
}

.checkbox-con {
  display: flex;
  align-items: center;
}
.forgot-password {
  margin-top: -1rem;
  color: #00b6ab;
  text-align: right;
  width: 70%;
}

.forgot-password p {
  cursor: pointer;
  color: #00b6ab;
}
</style>
