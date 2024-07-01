<script setup>
import dropDown from './icons/dropDown.vue'
</script>

<template>
  <div class="sidebar-container">
    <div class="users-profile">
      <div class="user-image">
        <img src="@/assets/users-image.png" alt="users-image" />
      </div>
      <div class="users-name">
        <p>Tonia Stores</p>
        <p>Fashion</p>
      </div>

      <div class="drop-down">
        <dropDown />
      </div>
    </div>

    <div class="dash-section-one">
      <div class="">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 14.8334V9.22255C16.5 8.77043 16.408 8.32303 16.2297 7.90757C16.0513 7.49211 15.7903 7.11728 15.4625 6.80588L10.1483 1.75838C9.83858 1.46412 9.42766 1.30005 9.00042 1.30005C8.57318 1.30005 8.16225 1.46412 7.8525 1.75838L2.5375 6.80588C2.20971 7.11728 1.9487 7.49211 1.77034 7.90757C1.59198 8.32303 1.5 8.77043 1.5 9.22255V14.8334C1.5 15.2754 1.67559 15.6993 1.98816 16.0119C2.30072 16.3245 2.72464 16.5001 3.16667 16.5001H14.8333C15.2754 16.5001 15.6993 16.3245 16.0118 16.0119C16.3244 15.6993 16.5 15.2754 16.5 14.8334Z"
            stroke="#6B7280"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>

    <div class="dash-section-two"></div>

    <div class="da"></div>
  </div>
</template>

<style scoped>
.sidebar-container {
  width: 10vw;
  height: 100vh;
  background-color: #ffffff;
}

.users-profile {
  display: grid;
  grid-template-columns: 30px 80px 1fr;
  padding-top: 2rem;
  gap: 10px;
  margin-left: 10px;
}

.users-profile img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.users-name {
  font-size: 14px;
}

.users-name p:nth-child(1) {
  font-weight: 700;
}

.drop-down {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.dash-section-one {
  margin-top: 2rem;
  border-top: 1px solid #f1f3f9;
}
</style>
