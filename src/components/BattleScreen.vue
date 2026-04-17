<script setup>
import PlayerCard from './PlayerCard.vue'
import EnemyCard from './EnemyCard.vue'
import LogPanel from './LogPanel.vue'
import { useGameStore } from '../stores/game.js'

const gameStore = useGameStore()

const getLevelName = (level) => {
  const levelNames = {
    1: 'Resume Screening',
    2: 'HR Interview',
    3: 'Skills/Technical Test',
    4: 'Manager Interview',
    5: 'Final Interview'
  }
  return levelNames[level] || 'Unknown Level'
}

const handleRestart = () => {
  gameStore.resetGame()
}

const handleTryAgain = () => {
  gameStore.restartLevel()
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
    
    <div v-if="gameStore.showLevelPopup" class="game-over-overlay">
      <div class="game-over-content">
        <p class="level-indicator">{{ getLevelName(gameStore.currentLevel) }}</p>
        <p class="level-number">Level {{ gameStore.currentLevel }}/{{ gameStore.totalLevels }}</p>
        <h2 class="game-over-title">Interview Passed!</h2>
      </div>
    </div>
    
    <div v-if="gameStore.gameStatus === 'lost'" class="game-over-overlay">
      <div class="game-over-content">
        <p class="level-indicator">{{ getLevelName(gameStore.currentLevel) }}</p>
        <p class="level-number">Level {{ gameStore.currentLevel }}/{{ gameStore.totalLevels }}</p>
        <h2 class="game-over-title">{{ gameStore.gameOverMessage }}</h2>
        <div class="button-row">
          <button class="restart-btn" @click="handleRestart">Return to Menu</button>
          <button class="restart-btn secondary" @click="handleTryAgain">Try Again</button>
        </div>
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
  
  .screen-title {
    font-size: 18px;
  }
  
  .reset-btn {
    padding: 6px 12px;
    font-size: 11px;
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
  max-width: 500px;
  width: 90%;
}

.level-indicator {
  color: #FFA726;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0 0 8px 0;
}

.level-number {
  color: #B0BEC5;
  font-size: 14px;
  font-family: 'Courier New', monospace;
  margin: 0 0 16px 0;
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
  transition: all 0.3s ease;
}

.restart-btn:hover {
  background: #388E3C;
  transform: scale(1.05);
}

.restart-btn.secondary {
  background: #FF9800;
  border-color: #F57C00;
}

.restart-btn.secondary:hover {
  background: #F57C00;
}

.button-row {
  display: flex;
  gap: 12px;
  justify-content: center;
}

@media (max-width: 768px) {
  .game-over-content {
    padding: 30px 20px;
  }
  
  .level-indicator {
    font-size: 16px;
    margin-bottom: 8px;
  }
  
  .level-number {
    font-size: 12px;
    margin-bottom: 14px;
  }
  
  .game-over-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .restart-btn {
    padding: 14px 28px;
    font-size: 16px;
  }
  
  .button-row {
    flex-direction: column;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .game-over-content {
    padding: 25px 15px;
  }
  
  .level-indicator {
    font-size: 14px;
    margin-bottom: 6px;
  }
  
  .level-number {
    font-size: 11px;
    margin-bottom: 12px;
  }
  
  .game-over-title {
    font-size: 20px;
    margin-bottom: 16px;
  }
  
  .restart-btn {
    padding: 12px 24px;
    font-size: 14px;
  }
}
</style>
