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

const handleHeal = () => {
  gameStore.performPlayerAction('heal')
}

const handleConfidenceBoost = () => {
  gameStore.performPlayerAction('confidence_boost')
}

const handleAnswerQuestion = () => {
  const answer = prompt(gameStore.currentSpecialQuestion?.text || '')
  if (answer) {
    gameStore.submitAnswer(answer)
  }
}

const handleStartGame = () => {
  gameStore.startGame()
}
</script>

<template>
  <div class="player-card" :class="{ shake: gameStore.playerShake, heal: gameStore.playerHeal }">
    <div class="card-header">
      <h3>Player</h3>
    </div>
    <div class="card-body">
      <div class="avatar">👤</div>
      <div class="stats">
        <div class="stat-row">
          <span class="stat-label">HP:</span>
          <div class="progress-bar">
            <div class="progress-fill hp-bar" :style="{ width: (gameStore.player.hp / gameStore.player.maxHp * 100) + '%' }"></div>
          </div>
          <span class="stat-value">{{ gameStore.player.hp }}/{{ gameStore.player.maxHp }}</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Conf:</span>
          <div class="progress-bar">
            <div class="progress-fill conf-bar" :style="{ width: (gameStore.player.confidence / gameStore.player.maxConfidence * 100) + '%' }"></div>
          </div>
          <span class="stat-value">{{ gameStore.player.confidence }}/{{ gameStore.player.maxConfidence }}</span>
        </div>
        <div class="stats-actions-row">
          <div class="inline-stats">
            <span>Skill: {{ gameStore.player.skill }}</span>
            <span>Luck: {{ gameStore.player.luck }}</span>
            <span>Energy: {{ gameStore.player.energy }}/100</span>
          </div>
          <div class="actions">
            <button 
              class="action-btn" 
              @click="handleBuzzwordAttack" 
              :disabled="gameStore.player.cooldowns.buzzword_attack > 0 || gameStore.player.energy < 20">
              Buzzword
              <span v-if="gameStore.player.cooldowns.buzzword_attack > 0" class="cooldown">({{ gameStore.player.cooldowns.buzzword_attack }})</span>
            </button>
            <button 
              class="action-btn" 
              @click="handlePortfolioFlex" 
              :disabled="gameStore.player.cooldowns.portfolio_flex > 0 || gameStore.player.energy < 30">
              Flex
              <span v-if="gameStore.player.cooldowns.portfolio_flex > 0" class="cooldown">({{ gameStore.player.cooldowns.portfolio_flex }})</span>
            </button>
            <button 
              class="action-btn" 
              @click="handlePanicDodge" 
              :disabled="gameStore.player.cooldowns.panic_dodge > 0 || gameStore.player.energy < 15">
              Dodge
              <span v-if="gameStore.player.cooldowns.panic_dodge > 0" class="cooldown">({{ gameStore.player.cooldowns.panic_dodge }})</span>
            </button>
            <button 
              class="action-btn" 
              @click="handleHeal" 
              :disabled="gameStore.player.cooldowns.heal > 0 || gameStore.player.energy < 25">
              Heal
              <span v-if="gameStore.player.cooldowns.heal > 0" class="cooldown">({{ gameStore.player.cooldowns.heal }})</span>
            </button>
            <button 
              class="action-btn" 
              @click="handleConfidenceBoost" 
              :disabled="gameStore.player.cooldowns.confidence_boost > 0 || gameStore.player.energy < 20">
              Boost
              <span v-if="gameStore.player.cooldowns.confidence_boost > 0" class="cooldown">({{ gameStore.player.cooldowns.confidence_boost }})</span>
            </button>
            <button 
              v-if="gameStore.specialQuestionActive"
              class="action-btn special-action" 
              @click="handleAnswerQuestion">
              Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.player-card {
  background: #388E3C;
  border-radius: 8px;
  padding: 15px;
  border: 4px solid #1B5E20;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.card-header h3 {
  margin: 0;
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hp {
  color: white;
  font-weight: bold;
  font-size: 16px;
  font-family: 'Courier New', monospace;
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
  min-width: 45px;
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
  transition: width 0.3s ease;
}

.hp-bar {
  background: linear-gradient(90deg, #66BB6A, #81C784);
}

.conf-bar {
  background: linear-gradient(90deg, #42A5F5, #64B5F6);
}

.stat-value {
  min-width: 50px;
  text-align: right;
}

.stats-actions-row {
  display: flex;
  gap: 15px;
  align-items: center;
}

.inline-stats {
  display: flex;
  gap: 15px;
  font-size: 14px;
  flex-shrink: 0;
}

.actions {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
  flex: 1;
}

.action-btn {
  background: #FFF3E0;
  border: 3px solid #1B5E20;
  border-radius: 6px;
  padding: 8px 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  color: #1B5E20;
  text-transform: uppercase;
  font-family: 'Courier New', monospace;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.action-btn:hover:not(:disabled) {
  background: #FFE0B2;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(27, 94, 32, 0.3);
}

.action-btn:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(27, 94, 32, 0.3);
}

.action-btn:disabled {
  background: #BDBDBD;
  border-color: #757575;
  cursor: not-allowed;
  opacity: 0.6;
  transform: none;
  box-shadow: none;
}

.action-btn:disabled:hover {
  transform: none;
  box-shadow: none;
}

.special-action {
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #1a1a2e;
  border-color: #FF8C00;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(255, 215, 0, 0);
  }
}

/* Mobile */
@media (max-width: 768px) {
  .player-card {
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
  
  .stats-actions-row {
    flex-direction: column;
    gap: 10px;
  }
  
  .actions {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    grid-template-rows: repeat(3, 1fr);
  }
  
  .action-btn {
    font-size: 11px;
    padding: 8px 4px;
  }
}

@media (max-width: 480px) {
  .player-card {
    padding: 8px;
  }
  
  .card-header h3 {
    font-size: 16px;
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
  
  .actions {
    gap: 4px;
  }
  
  .action-btn {
    font-size: 10px;
    padding: 6px 3px;
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

.heal {
  animation: heal-glow 0.8s ease-out;
}

@keyframes heal-glow {
  0% {
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
    border-color: #4CAF50;
  }
  50% {
    box-shadow: 0 0 30px 10px rgba(76, 175, 80, 0.3);
    border-color: #81C784;
  }
  100% {
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
    border-color: #1B5E20;
  }
}
</style>
