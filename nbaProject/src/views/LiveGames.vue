<template>
    <div class="container">
        <h1>Live NBA Game</h1>
        <div class="live-game">
            <div class="home-team">
                <img :src="homeTeam.logo" id="home-team-logo" alt="home team logo" />
                <p>{{ homeTeam.name }} Score: {{ gameStore.homeTeamScore }}</p>
            </div>
            <p>Game Time: {{ gameStore.gameTime }}</p>
            <div class="away-team">
                <img :src="awayTeam.logo" id="away-team-logo" alt="away team logo" />
                <p>{{ awayTeam.name }} Score: {{ gameStore.awayTeamScore }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { onBeforeUnmount } from 'vue';
import { useGameStore } from '@/stores/liveGames';
import { useTeamsStore } from '@/stores/teams';

export default {
    name: 'LiveGame',
    setup() {
        const gameStore = useGameStore();
        const teamsStore = useTeamsStore();

        const homeTeam = teamsStore.teams[Math.floor(Math.random() * teamsStore.teams.length)];
        let awayTeam = teamsStore.teams[Math.floor(Math.random() * teamsStore.teams.length)];
        while (awayTeam.name === homeTeam.name) {
            awayTeam = teamsStore.teams[Math.floor(Math.random() * teamsStore.teams.length)];
        }

        // Simulate game updates when the component is mounted
        gameStore.simulateGameUpdate();

        // Cleanup when the component is about to be unmounted
        onBeforeUnmount(() => {
            gameStore.stopGameUpdate();
        });

        return {
            gameStore,
            homeTeam,
            awayTeam,
        };
    },
};
</script>


<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.live-game {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px;
}

.home-team {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.away-team {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#home-team-logo {
    width: 100px;
    height: 100px;
}

#away-team-logo {
    width: 100px;
    height: 100px;
}
</style>