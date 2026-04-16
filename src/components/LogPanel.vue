<script setup>
import { useGameStore } from '../stores/game.js'

const gameStore = useGameStore()
</script>

<template>
  <div class="log-panel">
    <div class="turn-indicator">
      <span v-if="gameStore.turn === 'player'" class="turn-text player-turn">Your Turn</span>
      <span v-else class="turn-text enemy-turn">Interviewer Thinking...</span>
    </div>
    <div class="log-content">
      <p v-for="(entry, index) in gameStore.log" :key="index" 
         :class="['log-entry', `log-${entry.type}`]">
        {{ entry.message }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.log-panel {
  background: #607D8B;
  border-radius: 8px;
  padding: 15px;
  border: 4px solid #37474F;
  box-sizing: border-box;
}

.turn-indicator {
  padding: 8px;
  background: #263238;
  border-radius: 6px;
  border: 3px solid #607D8B;
  text-align: center;
  margin-bottom: 12px;
  width: 100%;
  box-sizing: border-box;
}

.turn-text {
  font-size: 14px;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.player-turn {
  color: #81C784;
}

.enemy-turn {
  color: #E57373;
}

.log-content {
  background: #263238;
  border-radius: 6px;
  padding: 12px;
  height: 90px;
  overflow-y: auto;
  border: 2px solid #37474F;
}

.log-entry {
  padding: 8px 12px;
  margin-bottom: 8px;
  border-radius: 4px;
  border-left: 4px solid #607D8B;
  background: #37474F;
  color: #ECEFF1;
  font-size: 14px;
  font-family: 'Courier New', monospace;
  animation: slideIn 0.4s ease-out;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}

.log-player {
  color: #81C784;
  font-weight: bold;
}

.log-enemy {
  color: #E57373;
  font-weight: bold;
}

.log-system {
  color: #B0BEC5;
}

/* Mobile */
@media (max-width: 768px) {
  .log-panel {
    padding: 10px;
  }
  
  .turn-indicator {
    padding: 6px;
    margin-bottom: 8px;
  }
  
  .turn-text {
    font-size: 12px;
  }
  
  .log-content {
    height: 70px;
    padding: 8px;
  }
  
  .log-entry {
    font-size: 12px;
  }
}
</style>
