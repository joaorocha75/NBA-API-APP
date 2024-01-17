<template>
    <div class="container">
        <h1>Live NBA Games</h1>
        <div class="live-game">
            <div class="home-team">
                <img :src="homeTeam.logo" id="home-team-logo" alt="home team logo" />
                <p id="home-team-name">{{ homeTeam.name }}</p>
                <p id="home-team-score">Score: {{ gameStore.homeTeamScore }}</p>
            </div>
            <p id="game-time">{{ gameStore.gameTime }}</p>
            <div class="away-team">
                <img :src="awayTeam.logo" id="away-team-logo" alt="away team logo" />
                <p id="away-team-name">{{ awayTeam.name }}</p>
                <p id="away-team-score">Score: {{ gameStore.awayTeamScore }}</p>
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
    width: 110%;
    margin: 20px;
    border: 2px solid green;
    border-radius: 10px;
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
    padding: 20px;
}

#home-team-logo {
    width: 100px;
    height: 100px;
}

#away-team-logo {
    width: 100px;
    height: 100px;
}

#home-team-name {
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
}

#away-team-name {
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
}

#home-team-score {
    font-size: 15px;
}

#away-team-score {
    font-size: 15px;
}

#game-time {
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
}
</style>