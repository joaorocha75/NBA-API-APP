import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as api from '../api/api.js'

const NBA_API_URL = 'https://www.balldontlie.io/api/v1'

export const useNBAStore = defineStore('nbastore', {
  state: () => ({
    players:[],
    player:{},
    games:[]
  }),
  getters: {
    getPlayers: (state) => state.players,
    getPlayer: (state) => state.player,
    getGames: (state) => state.games
  },
  actions:{
    async fetchPlayers() {
      try {
        const players = await api.get(NBA_API_URL, 'players')
        this.players = players.data
      } catch (error) {
        console.error(`Error fetching players:`, error)
        throw error
      }
    },
    async fetchPlayer(id) {
      try {
        const player = await api.get(NBA_API_URL, `players/${id}`)
        this.player = player
      } catch (error) {
        console.error(`Error fetching player:`, error)
        throw error
      }
    },
    async fetchGames(start_date,end_date) {
      try {
        const games = await api.get(NBA_API_URL, `games?dates[]=${start_date}&dates[]=${end_date}`)
        this.games = games.data
      } catch (error) {
        console.error(`Error fetching games:`, error)
        throw error
      }
    }
  }
})
