<template>
    <div>
        <div class="back-button">
            <router-link :to="{ name: 'team', params: { id: player.team.id } }">Back</router-link>
        </div>
        <div class="player-info">
            <h1>{{player.first_name}} {{player.last_name}}</h1>
            <h2>Team: {{player.team.full_name}}</h2>
            <h2>Position: {{player.position}}</h2>
            <h2>Height: {{player.height_feet}}'{{player.height_inches}}</h2>
            <h2>Weight: {{player.weight_pounds}} lbs</h2>
            <h2>City: {{player.team.city}}</h2>
            <h2>Conference: {{player.team.conference}}</h2>
            <h2>Division: {{player.team.division}}</h2>
        </div>  
    </div>
</template>

<script>
import {useNBAStore} from '../stores/counter.js';
    export default {
        data() {
            return {
                nbaStore: useNBAStore(),
                player:null,
            }
        },
        async created() {
            try {
                await this.nbaStore.fetchPlayer(this.$route.params.id);
                this.player = this.nbaStore.getPlayer;
            } catch (error) {
                console.log(error.message);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>