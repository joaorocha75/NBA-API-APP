let homeTeamScore = 0;
let awayTeamScore = 0;
let seconds = 0;

function generateRandomIncrement() {
  return Math.floor(Math.random() * 3) + 1; // Random value between 1, 2, and 3
}

function generateFakeTime() {
  const formattedMinutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const formattedSeconds = (seconds % 60).toString().padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}

function generateFakeGameData() {
  // Increment scores and seconds
  homeTeamScore += generateRandomIncrement();
  awayTeamScore += generateRandomIncrement();
  seconds += 1;

  // Generate fake game time
  const gameTime = generateFakeTime();

  // Update scores every 10 seconds
  const updateInterval = 10;
  if (seconds % updateInterval === 0) {
    homeTeamScore += generateRandomIncrement();
    awayTeamScore += generateRandomIncrement();
  }

  // Reset scores and seconds after every 20 seconds
  if (seconds >= 90) {
    homeTeamScore = 0;
    awayTeamScore = 0;
    seconds = 0;
  }

  return {
    homeTeamScore,
    awayTeamScore,
    gameTime,
  };
}
