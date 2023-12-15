<template>
  <div class="nba-players-container">
    <h1 class="text-center mb-4">NBA Players</h1>
    <div class="container">
      <div class="row">
        <div v-for="player in nbaStore.getPlayers" :key="player.id" class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h3 class="card-title">{{ player.first_name }} {{ player.last_name }}</h3>
              <p class="card-text"><strong>Position:</strong> {{ player.position }}</p>
              <p class="card-text"><strong>Team:</strong> {{ player.team.full_name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useNBAStore } from '../stores/counter.js'
  export default {
    data() {
      return {
        nbaStore: useNBAStore(),
        players: [],
      }
    },
    created() {
        try {
            this.nbaStore.fetchPlayers();
        } catch (error) {
            alert(error.message);
        }
    },
  }
</script>

<style scoped>
.nba-players-container {
  padding: 20px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.card-text {
  margin-bottom: 0.3rem;
}
</style>