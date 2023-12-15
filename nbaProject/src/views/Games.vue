<template>
    <div>
        <!-- mostrar uma lista de jogos com data, home_team.abbreviation and visitor_team.abbreviation -->
        <table class="table table-striped" border="1">
            <thead>
                <tr>
                    <th scope="col">Data</th>
                    <th scope="col">Time da casa</th>
                    <th scope="col">Time visitante</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="game in nbaStore.getGames" :key="game.id">
                    <td>{{ game.date }}</td>
                    <td>{{ game.home_team.abbreviation }}-{{game.home_team_score}}</td>
                    <td>{{ game.visitor_team.abbreviation }}-{{game.visitor_team_score}}</td>
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

<style lang="scss" scoped>

</style>