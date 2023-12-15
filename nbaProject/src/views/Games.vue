<template>
    <div>
        <!-- faz-me um input date para mudar o start_Date -->
        <input type="date" v-model="start_date" @change="handleStartDateChange" />
        <!-- mostrar uma lista de jogos com data, home_team.abbreviation and visitor_team.abbreviation -->
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Data</th>
                    <th scope="col">Equipa da casa</th>
                    <th scope="col">Equipa visitante</th>
                    <th scope="col">Info do Jogo</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="game in nbaStore.getGames" :key="game.id">
                    <td>{{ game.date }}</td>
                    <td>{{ game.home_team.abbreviation }} - {{ game.home_team_score }}</td>
                    <td>{{ game.visitor_team.abbreviation }} - {{ game.visitor_team_score }}</td>
                    <td><button id="verInfo">Ver</button></td>
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
                start_date: new Date().toISOString().split('T')[0],
                end_date: '',
            }
        },
        created () {
            try {
                this.end_date = this.start_date
                this.nbaStore.fetchGames(this.start_date, this.end_date);
            } catch (error) {
                alert(error.message);
            }
        },
        methods: {
            handleStartDateChange() {
                try {
                    this.end_date = this.start_date
                    this.nbaStore.fetchGames(this.start_date, this.end_date);
                } catch (error) {
                    alert(error.message);
                }
            }
        }
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
  /* trabalha bem o button com id= "verInfo */
    #verInfo {
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 5px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 12px;
        border-radius: 3px;
        display: block;
        margin: 0 auto;
    }
</style>
