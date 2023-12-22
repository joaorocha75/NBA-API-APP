<template>
  <div class="header">
    <div class="nba-icon">
      <img src="https://seeklogo.com/images/N/nba-logo-41668C66DB-seeklogo.com.png" alt="NBA Icon" />
    </div>
    <div class="nav-item">
      <router-link to="/">Games</router-link>
    </div>
    <div class="nav-item">
      <router-link to="/news">News</router-link>
    </div>
    <div class="nav-item">
      <router-link to="/teams">Teams</router-link>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  components: {
    RouterLink,
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center; /* Center items vertically */
  z-index: 1000;
}

.nba-icon img {
  width: 70px; /* Increase the width as needed */
  height: auto;
  display: block;
  margin-right: 10px;
  margin: 0; /* Remove any default margin */
}

.nav-item {
  margin-right: 20px;
}

a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
}
</style>
