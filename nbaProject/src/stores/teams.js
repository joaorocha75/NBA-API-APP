import { defineStore } from 'pinia';

export const useTeamsStore = defineStore('team', {
  state: () => ({
    teams: [
      {
        id: 'lakers',
        name: 'Los Angeles Lakers',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg',
      },
      {
        id: 'warriors',
        name: 'Golden State Warriors',
        logo: 'https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg',
      },
      {
        id: 'heat',
        name: 'Miami Heat',
        logo: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg',
      },
      {
        id: 'spurs',
        name: 'San Antonio Spurs',
        logo: 'https://upload.wikimedia.org/wikipedia/en/a/a2/San_Antonio_Spurs.svg',
      },
      {
        id: 'raptors',
        name: 'Toronto Raptors',
        logo: 'https://upload.wikimedia.org/wikipedia/en/3/36/Toronto_Raptors_logo.svg',
      },
      {
        id: 'cavaliers',
        name: 'Cleveland Cavaliers',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cleveland_Cavaliers_logo.svg/400px-Cleveland_Cavaliers_logo.svg.png',
      },
      {
        id: 'bulls',
        name: 'Chicago Bulls',
        logo: 'https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg',
      },
      {
        id: 'knicks',
        name: 'New York Knicks',
        logo: 'https://upload.wikimedia.org/wikipedia/en/2/25/New_York_Knicks_logo.svg',
      },
      {
        id: 'rockets',
        name: 'Houston Rockets',
        logo: 'https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Rockets.svg',
      },
      {
        id: 'thunder',
        name: 'Oklahoma City Thunder',
        logo: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg',
      },
      {
        id: 'clippers',
        name: 'Los Angeles Clippers',
        logo: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Los_Angeles_Clippers_%282015%29.svg',
      },
      {
        id: 'celtics',
        name: 'Boston Celtics',
        logo: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg',
      },
      {
        id: 'mavericks',
        name: 'Dallas Mavericks',
        logo: 'https://upload.wikimedia.org/wikipedia/en/9/97/Dallas_Mavericks_logo.svg',
      },
      {
        id: 'nuggets',
        name: 'Denver Nuggets',
        logo: 'https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg',
      },
    ],
  }),
  getters: {
    getTeams: (state) => state.teams,
    getTeamById: (state) => (id) => state.teams.find((team) => team.id === id),
    getTeamNameById: (state) => (id) => state.teams.find((team) => team.id === id).name,
  },
});
