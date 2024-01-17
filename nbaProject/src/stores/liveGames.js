import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
  state: () => ({
    homeTeamScore: 0,
    awayTeamScore: 0,
    gameTime: '00:00',
    seconds: 0,
  }),
  actions: {
    updateScores(homeScore, awayScore) {
      this.homeTeamScore = homeScore;
      this.awayTeamScore = awayScore;
    },
    updateGameTime(time) {
      this.gameTime = time;
    },
    updateSeconds() {
      this.seconds += 1;
    },
    generateRandomIncrement() {
      return Math.floor(Math.random() * 3) + 1;
    },
    generateFakeTime() {
      const formattedMinutes = Math.floor(this.seconds / 60)
        .toString()
        .padStart(2, '0');
      const formattedSeconds = (this.seconds % 60).toString().padStart(2, '0');
      return `${formattedMinutes}:${formattedSeconds}`;
    },
    generateFakeGameData() {
      // Increment scores and seconds
      this.homeTeamScore += this.generateRandomIncrement();
      this.awayTeamScore += this.generateRandomIncrement();
      this.seconds += 1;

      // Generate fake game time
      const gameTime = this.generateFakeTime();

      // Update scores every 10 seconds
      const updateInterval = 10;
      if (this.seconds % updateInterval === 0) {
        this.homeTeamScore += this.generateRandomIncrement();
        this.awayTeamScore += this.generateRandomIncrement();
      }

      // Reset scores and seconds after every 90 seconds
      if (this.seconds >= 90) {
        this.homeTeamScore = 0;
        this.awayTeamScore = 0;
        this.seconds = 0;
      }

      return {
        homeTeamScore: this.homeTeamScore,
        awayTeamScore: this.awayTeamScore,
        gameTime,
      };
    },
    simulateGameUpdate() {
      // Update gameTime every second
      const timeIntervalId = setInterval(() => {
        this.updateSeconds();
        const gameTime = this.generateFakeTime();
        this.updateGameTime(gameTime);
      }, 1000);

      // Update scores every 10 seconds
      const gameUpdateIntervalId = setInterval(() => {
        this.updateSeconds();
        const { homeTeamScore, awayTeamScore, gameTime } = this.generateFakeGameData();
        this.updateScores(homeTeamScore, awayTeamScore);
        this.updateGameTime(gameTime);
        console.log('Scores updated');
      }, 10000); // Update every 10 seconds

      // Save the interval IDs in the store for later use
      this.timeIntervalId = timeIntervalId;
      this.gameUpdateIntervalId = gameUpdateIntervalId;
    },

    stopGameUpdate() {
      // Use the saved interval IDs to clear the intervals
      clearInterval(this.timeIntervalId);
      clearInterval(this.gameUpdateIntervalId);
    },
  },
});
