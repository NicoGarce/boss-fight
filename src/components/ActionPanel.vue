<script setup>
import { useGameStore } from '../stores/game.js'

const gameStore = useGameStore()

const handleBuzzwordAttack = () => {
  gameStore.performPlayerAction('buzzword_attack')
}

const handlePortfolioFlex = () => {
  gameStore.performPlayerAction('portfolio_flex')
}

const handlePanicDodge = () => {
  gameStore.performPlayerAction('panic_dodge')
}

const handleStartGame = () => {
  gameStore.startGame()
}
</script>

<template>
  <div class="action-panel">
    <h3>Actions</h3>
    <div class="actions">
      <button class="action-btn" @click="handleBuzzwordAttack">Buzzword Attack</button>
      <button class="action-btn" @click="handlePortfolioFlex">Portfolio Flex</button>
      <button class="action-btn" @click="handlePanicDodge">Panic Dodge</button>
      <button class="action-btn" @click="handleStartGame">Start Game</button>
    </div>
  </div>
</template>

<style scoped>
.action-panel {
  background: #FF9800;
  border-radius: 8px;
  padding: 15px;
  border: 4px solid #E65100;
}

.action-panel h3 {
  margin: 0 0 15px 0;
  color: white;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.actions {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.action-btn {
  background: #FFF3E0;
  border: 3px solid #E65100;
  border-radius: 4px;
  padding: 12px 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  color: #E65100;
  text-transform: uppercase;
  font-family: 'Courier New', monospace;
}

.action-btn:hover {
  background: #FFE0B2;
}
</style>
