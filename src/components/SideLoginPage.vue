<script setup></script>

<template>
  <div class="overall-container">
    <div class="main-container">
      <span class="mobile">
        <img class="phone" src="@/assets/mobile.png" alt="mobile-image" />
      </span>

      <div class="footer">
        <h1 class="heading-text">Let your customers pay however they want</h1>

        <p class="sub-texts">
          With Swwipe every business enjoy multiple seamless, fast, and easy payments from their
          customers
        </p>

        <div class="image-texts">
          <p class="trio-images">
            <img src="@/assets/Ceo.png" alt="ceo-image" />
            <img src="@/assets/dev.png" alt="ceo-image" />
            <img src="@/assets/Hr.png" alt="ceo-image" />
          </p>

          <span class="trio-texts">
            5000+ <br />
            <span class="sub-trio"> businesses use Swwipe </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overall-container {
  width: 100%;
  background-color: rgba(255, 246, 245, 1);
  height: 100vh;
}

.main-container {
  padding-left: 10%;
  width: 70%;
}

.mobile img {
  width: 70%;
  margin-top: 20%;
}

.image-texts {
  width: 80%;
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
}

.heading-text {
  font-size: 48px;
  font-family: 800;
  line-height: 56px;
  color: #1f2937;
}

.sub-texts {
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  color: #1f2937;
  max-width: 450px;
  margin-top: -1rem;
}

.trio-images img {
  margin-left: -1rem;
}

.trio-texts {
  margin-left: -1rem;
  padding-top: 1.5rem;
  font-size: 20px;
  font-family: 800;
  color: #000000;
  line-height: 15px;
}

.sub-trio {
  color: #667085;
  font-size: 15px;
  font-weight: 400;
  line-height: 16px;
}

@media (width <= 64em) {
  .main-container {
    width: 90%;
    margin: 0 auto;
    padding-left: 0;
  }
  span .phone {
    width: 100%;
    margin-top: 15%;
  }

  .footer {
    width: 100%;
  }

  .heading-text {
    font-size: 38px;
    line-height: 42px;
  }

  .sub-texts {
    font-size: 18px;
    line-height: 25px;
  }

  .image-texts {
    width: 100%;
    display: grid;
    grid-template-columns: 0.5fr 1.5fr;
  }
}

@media (width <= 52.5em) {
  .main-container {
    width: 90%;
    margin: 0 auto;
    padding-left: 0;
  }
  span .phone {
    width: 100%;
    margin-top: 15%;
  }

  .footer {
    width: 100%;
  }

  .heading-text {
    font-size: 34px;
    line-height: 42px;
  }

  .sub-texts {
    font-size: 18px;
    line-height: 25px;
  }

  .image-texts {
    width: 100%;
    display: grid;
    grid-template-columns: 0.6fr 1.4fr;
  }
}

@media (width <= 45em) {
  .main-container {
    width: 90%;
    margin: 0 auto;
    padding-left: 0;
  }
  span .phone {
    width: 100%;
    margin-top: 50%;
  }

  .footer {
    width: 100%;
  }

  .heading-text {
    font-size: 28px;
    line-height: 36px;
  }

  .sub-texts {
    font-size: 12px;
    line-height: 25px;
  }

  .image-texts {
    width: 100%;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
  }
}

@media (width <= 41em) {
  .overall-container {
    display: none;
  }
}
</style>
