<script setup>
import { ref } from 'vue'
import { useGameStore } from '../stores/game.js'

const gameStore = useGameStore()
const hoveredAction = ref(null)

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

const handleStartGame = () => {
  gameStore.startGame()
}

const actionTooltips = {
  buzzword_attack: {
    name: 'Buzzword Attack',
    damage: '10-15 (scales with Skill), +3 Confidence',
    energy: 20,
    cooldown: 1,
    description: 'Use corporate jargon to impress. Reliable damage.'
  },
  portfolio_flex: {
    name: 'Portfolio Flex',
    damage: '12 (25 on crit, based on Luck), +3 Confidence (+8 on crit)',
    energy: 30,
    cooldown: 2,
    description: 'Show off your projects. High risk, high reward.'
  },
  panic_dodge: {
    name: 'Honest Panic Dodge',
    damage: 'Reduces next damage by 50%',
    energy: 15,
    cooldown: 3,
    description: 'Admit you don\'t know. Defensive move.'
  },
  heal: {
    name: 'Heal',
    damage: '+20 HP, +15 Confidence',
    energy: 25,
    cooldown: 4,
    description: 'Take a deep breath. Recovery move.'
  },
  confidence_boost: {
    name: 'Confidence Boost',
    damage: '+25 Confidence',
    energy: 20,
    cooldown: 3,
    description: 'Give yourself a pep talk. Pure confidence gain.'
  }
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
            <button class="action-btn" @click="handleBuzzwordAttack" :disabled="gameStore.player.cooldowns.buzzword_attack > 0 || gameStore.player.energy < 20" @mouseenter="hoveredAction = 'buzzword_attack'" @mouseleave="hoveredAction = null">
              Buzzword
              <span v-if="gameStore.player.cooldowns.buzzword_attack > 0" class="cooldown">({{ gameStore.player.cooldowns.buzzword_attack }})</span>
            </button>
            <button class="action-btn" @click="handlePortfolioFlex" :disabled="gameStore.player.cooldowns.portfolio_flex > 0 || gameStore.player.energy < 30" @mouseenter="hoveredAction = 'portfolio_flex'" @mouseleave="hoveredAction = null">
              Flex
              <span v-if="gameStore.player.cooldowns.portfolio_flex > 0" class="cooldown">({{ gameStore.player.cooldowns.portfolio_flex }})</span>
            </button>
            <button class="action-btn" @click="handlePanicDodge" :disabled="gameStore.player.cooldowns.panic_dodge > 0 || gameStore.player.energy < 15" @mouseenter="hoveredAction = 'panic_dodge'" @mouseleave="hoveredAction = null">
              Dodge
              <span v-if="gameStore.player.cooldowns.panic_dodge > 0" class="cooldown">({{ gameStore.player.cooldowns.panic_dodge }})</span>
            </button>
            <button class="action-btn" @click="handleHeal" :disabled="gameStore.player.cooldowns.heal > 0 || gameStore.player.energy < 25" @mouseenter="hoveredAction = 'heal'" @mouseleave="hoveredAction = null">
              Heal
              <span v-if="gameStore.player.cooldowns.heal > 0" class="cooldown">({{ gameStore.player.cooldowns.heal }})</span>
            </button>
            <button class="action-btn" @click="handleConfidenceBoost" :disabled="gameStore.player.cooldowns.confidence_boost > 0 || gameStore.player.energy < 20" @mouseenter="hoveredAction = 'confidence_boost'" @mouseleave="hoveredAction = null">
              Boost
              <span v-if="gameStore.player.cooldowns.confidence_boost > 0" class="cooldown">({{ gameStore.player.cooldowns.confidence_boost }})</span>
            </button>
          </div>
          <div v-if="hoveredAction" class="action-tooltip">
            <h4>{{ actionTooltips[hoveredAction].name }}</h4>
            <p><strong>Effect:</strong> {{ actionTooltips[hoveredAction].damage }}</p>
            <p><strong>Energy Cost:</strong> {{ actionTooltips[hoveredAction].energy }}</p>
            <p><strong>Cooldown:</strong> {{ actionTooltips[hoveredAction].cooldown }} turn(s)</p>
            <p class="tooltip-desc">{{ actionTooltips[hoveredAction].description }}</p>
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
  background: #BDBDBD;
  transform: none;
  box-shadow: none;
}

.cooldown {
  font-size: 10px;
  color: #f44336;
}

.action-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #263238;
  border: 2px solid #607D8B;
  border-radius: 8px;
  padding: 12px;
  min-width: 200px;
  z-index: 100;
  margin-bottom: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
}

.action-tooltip h4 {
  margin: 0 0 8px 0;
  color: #FFA726;
  font-size: 14px;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
}

.action-tooltip p {
  margin: 4px 0;
  color: #B0BEC5;
  font-size: 12px;
  font-family: 'Courier New', monospace;
}

.tooltip-desc {
  color: #90A4AE;
  font-style: italic;
  margin-top: 8px;
}

.stats-actions-row {
  position: relative;
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
