<script setup>
import { useGameStore } from '../stores/game.js'

const gameStore = useGameStore()
</script>

<template>
  <div class="enemy-card" :class="{ shake: gameStore.enemyShake, damage: gameStore.enemyDamage }">
    <div class="card-header">
      <h3 class="boss-name">{{ gameStore.enemy.name }}</h3>
      <div class="header-badges">
        <span class="level-badge">Level {{ gameStore.currentLevel }}/{{ gameStore.totalLevels }}</span>
        <span class="difficulty-badge">{{ gameStore.enemy.difficulty }}</span>
      </div>
    </div>
    <div class="card-body">
      <div class="avatar">👔</div>
      <div class="stats">
        <div class="stat-row">
          <span class="stat-label">HP:</span>
          <div class="progress-bar">
            <div class="progress-fill hp-bar" :style="{ width: (gameStore.enemy.hp / gameStore.enemy.maxHp * 100) + '%' }"></div>
          </div>
          <span class="stat-value">{{ gameStore.enemy.hp }}/{{ gameStore.enemy.maxHp }}</span>
        </div>
        <div class="inline-stats">
          <span>Stress: {{ gameStore.enemy.maxHp - gameStore.enemy.hp }}/{{ gameStore.enemy.maxHp }}</span>
          <span>Patience: {{ gameStore.enemy.hp }}/{{ gameStore.enemy.maxHp }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.enemy-card {
  background: #D32F2F;
  border-radius: 8px;
  padding: 15px;
  border: 4px solid #B71C1C;
  position: relative;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  position: relative;
}

.card-header h3 {
  margin: 0;
  color: white;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
}

.boss-name {
  position: relative;
}

.level-badge {
  background: #2196F3;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  border: 2px solid #1976D2;
}

.difficulty-badge {
  background: #FFA726;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  border: 2px solid #F57C00;
}

.card-body {
  display: flex;
  align-items: center;
  gap: 18px;
}

.avatar {
  font-size: 52px;
}

.stats {
  color: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  font-family: 'Courier New', monospace;
  flex: 1;
}

.stat-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stat-label {
  min-width: 35px;
}

.progress-bar {
  flex: 1;
  height: 16px;
  background: #424242;
  border-radius: 4px;
  overflow: hidden;
  border: 2px solid #616161;
}

.progress-fill {
  height: 100%;
  transition: width 0.5s ease-out, background-color 0.3s ease;
}

.hp-bar {
  background: linear-gradient(90deg, #EF5350, #E57373);
}

.stat-value {
  min-width: 50px;
  text-align: right;
}

.inline-stats {
  display: flex;
  gap: 20px;
  font-size: 14px;
}

/* Mobile */
@media (max-width: 768px) {
  .enemy-card {
    padding: 10px;
  }
  
  .card-body {
    flex-direction: column;
    gap: 10px;
  }
  
  .avatar {
    font-size: 40px;
  }
  
  .stats {
    width: 100%;
  }
  
  .inline-stats {
    gap: 15px;
    font-size: 13px;
  }
  
  .boss-tooltip {
    min-width: 220px;
    padding: 10px;
  }
  
  .boss-tooltip h4 {
    font-size: 13px;
  }
  
  .boss-tooltip p {
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .enemy-card {
    padding: 8px;
  }
  
  .card-header {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
  
  .card-header h3 {
    font-size: 16px;
  }
  
  .header-badges {
    width: 100%;
    justify-content: flex-start;
  }
  
  .level-badge,
  .difficulty-badge {
    font-size: 10px;
    padding: 3px 6px;
  }
  
  .card-body {
    flex-direction: column;
    gap: 8px;
  }
  
  .avatar {
    font-size: 36px;
  }
  
  .stat-row {
    gap: 6px;
  }
  
  .stat-label {
    min-width: 40px;
    font-size: 13px;
  }
  
  .stat-value {
    min-width: 45px;
    font-size: 13px;
  }
  
  .inline-stats {
    flex-direction: column;
    gap: 6px;
    font-size: 12px;
  }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

.shake {
  animation: shake 0.5s ease-in-out;
}
</style>
