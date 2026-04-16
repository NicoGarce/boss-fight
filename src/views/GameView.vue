<script setup>
import { onMounted } from 'vue'
import BattleScreen from '../components/BattleScreen.vue'
import StartScreen from '../components/StartScreen.vue'
import { useGameStore } from '../stores/game.js'

const gameStore = useGameStore()

onMounted(() => {
  gameStore.loadState()
})
</script>

<template>
  <div class="game-view">
    <StartScreen v-if="!gameStore.gameStarted" />
    <BattleScreen v-else />
  </div>
</template>

<style scoped>
.game-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #1a1a2e;
}
</style>
