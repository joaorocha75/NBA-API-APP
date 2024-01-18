<template>
    <div class="player-info-container">
    <h1 class="title">Player Averges Information</h1>


      <div v-if="playerInfo" class="player-details">
        <p><strong>Player Name:</strong> {{ playerInfo.first_name }} {{ playerInfo.last_name }}</p>
        <p><strong>Position:</strong> {{ playerInfo.position }}</p>
      </div>
  
      <h2 class="player-name">Season Averages</h2>
      <label for="seasonSelect">Select Season:</label>
      <select id="seasonSelect" v-model="selectedSeason" @change="fetchSeasonAverages">
        <option v-for="season in availableSeasons" :key="season" :value="season">{{ season }}</option>
      </select>
      <div v-if="seasonAverages" class="season-averages">
        <table>
          <thead>
            <tr>
                <th>Games Played</th>
                <th>Minutes per Game</th>
                <th>Field Goals Made</th>
                <th>Field Goals Attempted</th>
                <th>Three-Point Field Goals Made</th>
                <th>Three-Point Field Goals Attempted</th>
                <th>Rebounds</th>
                <th>Assists</th>
                <th>Steals</th>
                <th>Blocks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>{{ seasonAverages.games_played }}</td>
                <td>{{ seasonAverages.min }}</td>
                <td>{{ seasonAverages.fgm }}</td>
                <td>{{ seasonAverages.fga }}</td>
                <td>{{ seasonAverages.fg3m }}</td>
                <td>{{ seasonAverages.fg3a }}</td>
                <td>{{ seasonAverages.reb }}</td>
                <td>{{ seasonAverages.ast }}</td>
                <td>{{ seasonAverages.stl }}</td>
                <td>{{ seasonAverages.blk }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        playerInfo: null,
        seasonAverages: null,
        selectedSeason: '2023',
        availableSeasons: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
      };
    },
    mounted() {
      const playerId = this.$route.params.id; 
      this.fetchPlayerInfo(playerId);
      this.fetchSeasonAverages(playerId);
    },
    methods: {
      async fetchPlayerInfo(playerId) {
        try {
          const response = await fetch(`https://www.balldontlie.io/api/v1/players/${playerId}`);
          const data = await response.json();

          this.playerInfo = data;
        } catch (error) {
          console.error(`Error fetching player information:`, error);
        }
      },
      async fetchSeasonAverages() {
        try {
          const playerId = this.$route.params.id;
          const response = await fetch(`https://www.balldontlie.io/api/v1/season_averages?season=${this.selectedSeason}&player_ids[]=${playerId}`);
          const data = await response.json();

          this.seasonAverages = data.data[0];
        } catch (error) {
          console.error(`Error fetching season averages:`, error);
        }
      },
    },
  };
</script>
  
<style scoped>
.player-info-container {
  margin: 20px;
}
.player-name {
    font-size: 1.5em;
    flex: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.player-details, .season-averages {
    margin-top: 10px;
    font-size: 1.6em;
    flex: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
.title {
    flex: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: red;
}
</style>