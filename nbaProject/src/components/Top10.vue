<template>
    <div class="container">
      <h1 class="title">Top 10 NBA Players</h1>
      <label for="seasonSelect">Select Season:</label>
    <select id="seasonSelect" v-model="selectedSeason" @change="fetchData">
      <option v-for="season in availableSeasons" :key="season" :value="season">{{ season }}</option>
    </select>

    <div class="row">
      <div class="col-md-4">
        <h2>Top Scorers</h2>
        <ul class="table">
          <li v-for="(player, index) in topScorers" :key="player.id" :class="{ 'top-three': index < 3 }">
            {{ index + 1 }}. {{ player.player.first_name }} {{ player.player.last_name }} - {{ player.pts }} points
          </li>
        </ul>
      </div>
  
        <div class="col-md-4">
          <h2>Top Assists</h2>
          <ul class="table">
            <li v-for="(player, index) in topAssists" :key="player.id" :class="{ 'top-three': index < 3 }">
              {{ index + 1 }}. {{ player.player.first_name }} {{ player.player.last_name }} - {{ player.ast }} assists
            </li>
          </ul>
        </div>
  
        <div class="col-md-4">
          <h2>Top Rebounders</h2>
          <ul class="table">
            <li v-for="(player, index) in topRebounders" :key="player.id" :class="{ 'top-three': index < 3 }">
              {{ index + 1 }}. {{ player.player.first_name }} {{ player.player.last_name }} - {{ player.reb }} rebounds
            </li>
          </ul>
        </div>
  
        <div class="col-md-4">
          <h2>Top Blockers</h2>
          <ul class="table">
            <li v-for="(player, index) in topBlockers" :key="player.id" :class="{ 'top-three': index < 3 }">
              {{ index + 1 }}. {{ player.player.first_name }} {{ player.player.last_name }} - {{ player.blk }} blocks
            </li>
          </ul>
        </div>
  
        <div class="col-md-4">
          <h2>Top Stealers</h2>
          <ul class="table">
            <li v-for="(player, index) in topStealers" :key="player.id" :class="{ 'top-three': index < 3 }">
              {{ index + 1 }}. {{ player.player.first_name }} {{ player.player.last_name }} - {{ player.stl }} steals
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
  
  
 <script>
import { ref, onMounted } from 'vue';
import { useNBAStore } from '../stores/counter.js';
import * as api from '../api/api.js';

export default {
  setup() {
    const nbaStore = useNBAStore();
    const topScorers = ref([]);
    const topAssists = ref([]);
    const topBlockers = ref([]);
    const topStealers = ref([]);
    const topRebounders = ref([]);
    
    // Add a ref for the selected season
    const selectedSeason = ref('2022');
    // Add a list of available seasons
    const availableSeasons = ref(['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']);
    const fetchData = async () => {
      try {
        const stats = await api.get('https://www.balldontlie.io/api/v1', `stats?seasons[]=${selectedSeason.value}`);
        topScorers.value = getTopScorers(stats.data);
        topAssists.value = getTopAssists(stats.data);
        topBlockers.value = getTopBlockers(stats.data);
        topStealers.value = getTopStealers(stats.data);
        topRebounders.value = getTopRebounders(stats.data);
      } catch (error) {
        console.error(`Error fetching data:`, error);
      }
    };

    onMounted(fetchData);

    const getTopScorers = (stats) => {
      const sortedStats = stats.sort((a, b) => b.pts - a.pts);
      return sortedStats.slice(0, 10);
    };

    const getTopAssists = (stats) => {
      const sortedStats = stats.sort((a, b) => b.ast - a.ast);
      return sortedStats.slice(0, 10);
    };

    const getTopBlockers = (stats) => {
      const sortedStats = stats.sort((a, b) => b.blk - a.blk);
      return sortedStats.slice(0, 10);
    };

    const getTopRebounders = (stats) => {
      const sortedStats = stats.sort((a, b) => b.reb - a.reb);
      return sortedStats.slice(0, 10);
    };

    const getTopStealers = (stats) => {
      const sortedStats = stats.sort((a, b) => b.stl - a.stl);
      return sortedStats.slice(0, 10);
    };

    return {
      topScorers,
      topAssists,
      topBlockers,
      topRebounders,
      topStealers,
      selectedSeason,
      availableSeasons,
      fetchData,
    };
  },
};
</script>
  
<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 80px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.col-md-4 {
  flex: 1;
}

.table {
  list-style: none;
  padding: 0;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.table li {
  border-bottom: 1px solid #ddd;
  padding: 10px;
}

.table li:last-child {
  border-bottom: none;
}

h2 {
  text-align: center;
}

.top-three {
  font-weight: bold;
  color: green;
}

.title {
  text-align: center;
  color: red;
}
</style>