<template>
  <div class="center-container">
    <div class="team-details">
      <h2>{{ team.full_name }}</h2>
      <p>City: {{ team.city }}</p>
      <p>Conference: {{ team.conference }}</p>
      <p>Division: {{ team.division }}</p>
      <p>Abbreviation: {{ team.abbreviation }}</p>
      <p>Team Name: {{ team.name }}</p>
      <br>
    </div>
    <br>
    <h1>Plantel - {{ team.full_name }}</h1>
    <table id="playersTable">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Position</th>
          <th>Info Jogador</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in players" :key="player.id">
          <td>{{ player.first_name }}</td>
          <td>{{ player.last_name }}</td>
          <td>{{ player.position }}</td>
          <td>
            <router-link :to="{ name: 'player', params: { id: player.id } }">Info</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <br>
    <div>
      <button @click="goBack" class="back-button">Back</button>
    </div>
  </div>
</template>

<script>
import { useNBAStore } from '../stores/counter.js';

export default {
  data() {
    return {
      nbaStore: useNBAStore(),
      team: null,
      players: [],
    };
  },
  async created() {
    try {
      await this.nbaStore.fetchTeam(this.$route.params.id);
      this.team = this.nbaStore.getTeam;
      await this.nbaStore.fetchPlayers();
      this.players = this.nbaStore.playersByTeam(parseInt(this.$route.params.id));
    } catch (error) {
      console.error(error.message);
    }
  },
  methods: {
    goBack() {
      this.$router.push(
        { name: 'teams' },
      )
    },
  },
};
</script>

<style scoped>
/* Estilo global */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  color: #333;
  margin: 0;
  padding: 0;
}

/* Estilo para o container centralizado */
.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 40px;
}

/* Estilo para o botão de voltar */
.back-button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

/* Estilo para a tabela de jogadores */
#playersTable {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

#playersTable th,
#playersTable td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

/* mete um hover no back-button e mete uma cor simples */
.back-button:hover {
  background-color: 'blue';
}
</style>