<template>
    <div>
        <!-- mostrar uma lista de jogos com data, home_team.abbreviation and visitor_team.abbreviation -->
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Data</th>
                    <th scope="col">Equipa da casa</th>
                    <th scope="col">Equipa visitante</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="game in nbaStore.getGames" :key="game.id">
                    <td>{{ game.date }}</td>
                    <td>{{ game.home_team.abbreviation }} - {{ game.home_team_score }}</td>
                    <td>{{ game.visitor_team.abbreviation }} - {{ game.visitor_team_score }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { useNBAStore } from '../stores/counter.js'
    export default {
        data() {
            return {
                nbaStore: useNBAStore(),
                games: [],
            }
        },
        created () {
            try {
                this.nbaStore.fetchGames();
            } catch (error) {
                alert(error.message);
            }
        },
    }
</script>

<style scoped>
  /* Add your custom styles here if needed */
  .table {
    width: 100%;
    margin-bottom: 1rem;
    color: white; /* Use a darker color for better contrast */
  }

  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #dee2e6;
    /* bordas redondas */
    border-radius: 3px;
  }

  th {
    background-color: grey; /* Use a softer background color */
    font-weight: bold;
  }

  tbody tr:hover {
    background-color: burlywood;
  }
</style>
