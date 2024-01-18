<template>
    <div class="container">
        <h1>Live NBA Games</h1>

        <div class="live-game" v-for="(teamPair, index) in teamPairs" :key="index">
            <div class="home-team">
                <img id="home-team-logo" :src="teamPair.homeTeam.logo" />
                <p id="home-team-name">{{ teamPair.homeTeam.name }}</p>
            </div>
            <div class="time-info">
                <p id="game-time">{{ gameStore.gameTime }}</p>
                <button id="infoButton" @click=showMoreInfo(index)>More Info</button>
            </div>
            <div class="away-team">
                <img id="away-team-logo" :src="teamPair.awayTeam.logo" />
                <p id="away-team-name">{{ teamPair.awayTeam.name }}</p>
            </div>
        </div>

    </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue';
import { useGameStore } from '@/stores/liveGames';
import { useTeamsStore } from '@/stores/teams';

export default {
    name: 'LiveGame',
    setup() {
        const gameStore = useGameStore();
        const teamsStore = useTeamsStore();

        const teamPairs = [];

        // Generate unique team pairs
        for (let i = 0; i < teamsStore.teams.length - 1; i++) {
            for (let j = i + 1; j < teamsStore.teams.length; j++) {
                const homeTeam = teamsStore.teams[i];
                const awayTeam = teamsStore.teams[j];

                // Check if either team is already part of a pair
                const teamAlreadyHasGame = teamPairs.some(pair =>
                    pair.homeTeam === homeTeam || pair.homeTeam === awayTeam ||
                    pair.awayTeam === homeTeam || pair.awayTeam === awayTeam
                );

                if (!teamAlreadyHasGame) {
                    teamPairs.push({ homeTeam, awayTeam });
                }
            }
        }

        // Shuffle teamPairs array to make all pairs different
        for (let i = teamPairs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [teamPairs[i], teamPairs[j]] = [teamPairs[j], teamPairs[i]];
        }

        const showMoreInfo = (index) => {
            const teamPair = teamPairs[index];
            const homeTeam = teamPair.homeTeam;
            const awayTeam = teamPair.awayTeam;

            alert(`HOME TEAM: ${homeTeam.name}\nAWAY TEAM: ${awayTeam.name}\n\nSCORE:\n${homeTeam.name} ${gameStore.homeTeamScore} - ${gameStore.awayTeamScore} ${awayTeam.name}\n\nGame Time: ${gameStore.gameTime} minutes\n\nLocation: Madison Square Garden\n\nReferees: John Smith, Jane Doe, John Doe`);
        };

        // Simulate game updates for each pair when the component is mounted
        onMounted(() => {
            teamPairs.forEach((teamPair) => {
                gameStore.simulateGameUpdate(teamPair.homeTeam, teamPair.awayTeam);
            });

            //Reset game scores
            gameStore.resetGame();

            // Start automatic game updates
            gameStore.startGameUpdate();
        });

        // Cleanup when the component is about to be unmounted
        onBeforeUnmount(() => {
            gameStore.stopGameUpdate();
        });

        return {
            teamPairs,
            gameStore,
            showMoreInfo,
        };
    },
};
</script>

<style scoped>
.container {
    margin-top: 10vh;
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
    border: 2px solid darkgreen;
    border-radius: 10px;
    background-color: green;
}

.home-team {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
}

.away-team {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 20px;
}

.time-info {
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
    margin-left: 20px;
}

#away-team-name {
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    margin-right: 20px;
}

#home-team-score {
    font-size: 25px;
    font-weight: bold;
}

#away-team-score {
    font-size: 25px;
    font-weight: bold;
}

#game-time {
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
}

#infoButton {
    font-weight: bold;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    color: black;
}
</style>
