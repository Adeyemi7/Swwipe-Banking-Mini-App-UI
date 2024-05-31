<script setup>
import SwwipeLogo from './icons/SwwipeLogo.vue'
</script>

<template>
  <div class="real-container">
    <SwwipeLogo class="s-logo" />

    <section class="login-details">
      <p class="Create-texts">Create a Swwipe account</p>
      <p class="header-texts">Start receiving payments for your business</p>

      <form @submit="handleSubmit" class="registration-inputs">
        <div class="label-input">
          <label for="business-name"> Business Name </label> <br />
          <input
            type="text"
            placeholder="Enter Business Name"
            name="business-name"
            id="business-name"
            required
          />
        </div>

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
            placeholder="Create Password"
            name="password"
            id="password"
            required
          />
        </div>

        <div class="label-input">
          <label for="password-repeat"> Repeat Password </label> <br />
          <input
            type="password"
            placeholder="Re-enter Password"
            name="psw-repeat"
            id="psw-repeat"
            required
          />
        </div>

        <div class="container signin">
          <p>
            By Creating an account, you agree to Swwipe’s
            <span class="login-texts"> Terms & Conditions </span> and
            <span class="login-texts"> Privacy Policy </span>
          </p>
        </div>

        <button class="btn" type="submit">Create Account</button>

        <p>
          Already have a Swwipe account?
          <router-link class="login-router" to="/LoginPage">
            <span class="login-texts">
              Login
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
  </div>
</template>

<style scoped>
.real-container {
  width: 50%;
  margin-left: 30%;
  margin-top: 5%;
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
  width: 100%;
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

.header-texts {
  font-size: 16px;
  font-weight: 600;
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
}

@media (max-width: 64em) {
  .real-container {
    width: 90%;
    margin: 0 auto;
    padding-left: 2em;
  }

  .s-logo {
    margin-top: 10%;
  }

  input,
  button {
    width: 80%;
  }

  .forgot-password {
    width: 80%;
  }
}

@media (max-width: 45em) {
  .real-container {
    width: 90%;
    margin: 0 auto;
  }

  .s-logo {
    margin-top: 10%;
  }

  .Create-texts {
    font-size: 25px;
  }
  input,
  button {
    width: 90%;
  }

  .forgot-password {
    width: 90%;
  }
}

@media (max-width: 41em) {
  .real-container {
    width: 90%;
    margin: 0 auto;
  }

  .s-logo {
    margin-top: 10%;
  }
}
</style>
