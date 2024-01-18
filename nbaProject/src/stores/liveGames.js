import { defineStore } from 'pinia';

export const useGameStore = defineStore({
  id: 'game',
  state: () => ({
    gameTime: '00:00',
    homeTeamScore: 0,
    awayTeamScore: 0,
    gameInterval: null,
    lastResetTime: new Date(),
  }),
  actions: {
    setGameTime(newTime) {
      this.gameTime = newTime;
    },

    setHomeTeamScore(newScore) {
      this.homeTeamScore = newScore;
    },

    setAwayTeamScore(newScore) {
      this.awayTeamScore = newScore;
    },

    simulateGameUpdate(homeTeam, awayTeam) {
      const currentTime = new Date();
      const elapsedMinutes = Math.floor((currentTime - this.lastResetTime) / (1000 * 60));

      if (elapsedMinutes >= 5) {
        this.lastResetTime = currentTime;
        this.setGameTime('00:00');
        this.setHomeTeamScore(0);
        this.setAwayTeamScore(0);
      } else {
        const formattedTime = `${String(currentTime.getMinutes()).padStart(2, '0')}:${String(
          currentTime.getSeconds()
        ).padStart(2, '0')}`;
        this.setGameTime(formattedTime);

        if (currentTime.getSeconds() % 5 === 0) {
          const homeTeamPointsToAdd = Math.floor(Math.random() * 3) + 1;
          this.setHomeTeamScore(this.homeTeamScore + homeTeamPointsToAdd);

          const awayTeamPointsToAdd = Math.floor(Math.random() * 3) + 1;
          this.setAwayTeamScore(this.awayTeamScore + awayTeamPointsToAdd);
        }
      }
    },

    startGameUpdate() {
      this.gameInterval = setInterval(() => {
        this.simulateGameUpdate();
      }, 1000); // 1 second interval
    },

    stopGameUpdate() {
      clearInterval(this.gameInterval);
    },

    resetGame() {
      this.lastResetTime = new Date();
      this.setGameTime('00:00');
      this.setHomeTeamScore(0);
      this.setAwayTeamScore(0);
      this.gameInterval = null;
    },
  },
});
