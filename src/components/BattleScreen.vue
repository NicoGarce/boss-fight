<script setup>
import PlayerCard from './PlayerCard.vue'
import EnemyCard from './EnemyCard.vue'
import LogPanel from './LogPanel.vue'
import { useGameStore } from '../stores/game.js'

const gameStore = useGameStore()

const handleRestart = () => {
  gameStore.resetGame()
}
</script>

<template>
  <div class="battle-screen">
    <div class="battle-container">
      <div class="header-row">
        <h2 class="screen-title">Boss Fight</h2>
        <button class="reset-btn" @click="handleRestart">Reset</button>
      </div>
      <EnemyCard />
      <LogPanel />
      <PlayerCard />
    </div>
    
    <div v-if="gameStore.gameStatus !== 'playing'" class="game-over-overlay">
      <div class="game-over-content">
        <h2 class="game-over-title">{{ gameStore.gameOverMessage }}</h2>
        <button class="restart-btn" @click="handleRestart">Return to Menu</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.battle-screen {
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
}

.battle-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.screen-title {
  margin: 0;
  color: white;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.reset-btn {
  background: #f44336;
  color: white;
  border: 3px solid #c62828;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  font-family: 'Courier New', monospace;
  transition: background 0.3s ease;
}

.reset-btn:hover {
  background: #d32f2f;
}

/* Tablet */
@media (max-width: 1024px) {
  .battle-screen {
    max-width: 900px;
    padding: 15px;
  }
  
  .battle-container {
    gap: 12px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .battle-screen {
    max-width: 100%;
    padding: 10px;
  }
  
  .battle-container {
    gap: 10px;
  }
}

.game-over-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.game-over-content {
  background: #263238;
  padding: 40px;
  border-radius: 12px;
  border: 4px solid #607D8B;
  text-align: center;
}

.game-over-title {
  color: white;
  font-size: 32px;
  margin: 0 0 24px 0;
  font-family: 'Courier New', monospace;
}

.restart-btn {
  background: #4CAF50;
  color: white;
  border: 3px solid #2E7D32;
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  font-family: 'Courier New', monospace;
}

.restart-btn:hover {
  background: #388E3C;
}
</style>
