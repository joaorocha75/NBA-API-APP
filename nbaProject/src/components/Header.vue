<template>
  <div class="header">
    <div class="nba-icon">
      <img src="https://seeklogo.com/images/N/nba-logo-41668C66DB-seeklogo.com.png" alt="NBA Icon" />
    </div>
    <div class="nav-item" :class="{ 'active': $route.path === '/' }">
      <router-link to="/">Games</router-link>
    </div>
    <div class="nav-item" :class="{ 'active': $route.path === '/live' }">
      <router-link to="/live">Live Games</router-link>
    </div>
    <div class="nav-item" :class="{ 'active': $route.path === '/news' }">
      <router-link to="/news">News</router-link>
    </div>
    <div class="nav-item" :class="{ 'active': $route.path === '/teams' }">
      <router-link to="/teams">Teams</router-link>
    </div>
    <div class="nav-item" :class="{ 'active': $route.path === '/top10' }">
      <router-link to="/top10">TOP 10 Players</router-link>
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
  align-items: center;
  z-index: 1000;
}

.nba-icon img {
  width: 70px;
  height: auto;
  display: block;
  margin-right: 10px;
  margin: 0;
}

.nav-item {
  margin-right: 20px;
  position: relative;
}

.nav-item.active::after {
  content: '';
  display: block;
  position: absolute;
  bottom: 1;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: rgb(255, 0, 0);
}

a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
}
</style>
