<template>
  <div class="header">
    <div class="nba-icon">
      <img src="https://seeklogo.com/images/N/nba-logo-41668C66DB-seeklogo.com.png" alt="NBA Icon" />
    </div>
    <div class="nav-item">
      <router-link to="/">Games</router-link>
    </div>
    <div class="nav-item">
      <router-link to="/players">Players</router-link>
    </div>
    <div class="nav-item">
      <router-link to="/teams">Equipas</router-link>
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
  z-index: 1000; /* Ensure the header appears above other content */
}

.nba-icon img {
  width: 30px; /* Adjust the width as needed */
  height: auto;
  /* baixa um bocado mais sem alterar a altura do header */
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


