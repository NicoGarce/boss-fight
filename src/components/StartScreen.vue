<script setup>
import { ref } from 'vue'
import { useGameStore } from '../stores/game.js'
import { INTERVIEWERS } from '../data/interviewers.js'

const gameStore = useGameStore()
const showInstructions = ref(false)
const selectedCareer = ref('dog_surfing')

const careers = [
  { id: 'professional_sleeper', name: 'Professional Sleeper', icon: '😴' },
  { id: 'dog_surfing', name: 'Dog Surfing Instructor', icon: '🏄' },
  { id: 'ice_cream_taster', name: 'Ice Cream Taster', icon: '🍦' },
  { id: 'water_slide_tester', name: 'Water Slide Tester', icon: '💦' },
  { id: 'professional_mourner', name: 'Professional Mourner', icon: '😢' },
  { id: 'chicken_sexer', name: 'Chicken Sexer', icon: '🐥' },
  { id: 'snake_milker', name: 'Snake Milker', icon: '🐍' },
  { id: 'pet_food_taster', name: 'Pet Food Taster', icon: '🐕' },
  { id: 'face_feeler', name: 'Face Feeler', icon: '👃' },
  { id: 'golf_ball_diver', name: 'Golf Ball Diver', icon: '⛳' },
  { id: 'line_stand_in', name: 'Line Stand-In', icon: '🚶' },
  { id: 'fortune_cookie_writer', name: 'Fortune Cookie Writer', icon: '🥠' },
  { id: 'odor_judge', name: 'Odor Judge', icon: '😅' },
  { id: 'professional_cuddler', name: 'Professional Cuddler', icon: '🤗' },
  { id: 'video_game_tester', name: 'Video Game Tester', icon: '🎮' },
  { id: 'fake_wedding_guest', name: 'Fake Wedding Guest', icon: '💒' },
  { id: 'train_pusher', name: 'Train Pusher', icon: '🚆' },
  { id: 'bed_warmer', name: 'Bed Warmer', icon: '🛏️' },
  { id: 'human_statue', name: 'Human Statue Performer', icon: '🗿' },
  { id: 'toilet_paper_tester', name: 'Toilet Paper Tester', icon: '🧻' },
  { id: 'software_developer', name: 'Software Developer', icon: '💻' }
]

const handleStartGame = () => {
  gameStore.startGame(selectedCareer.value)
}

const toggleInstructions = () => {
  showInstructions.value = !showInstructions.value
}

const getBossLore = (name) => {
  return 'A mysterious interviewer with unknown motives.'
}
</script>

<template>
  <div class="start-screen">
    <div class="start-content">
      <h1 class="game-title">Boss Fight</h1>
      <p class="game-subtitle">Interview Survival Mode</p>
      
      <div class="career-selection">
        <h3 class="section-label">Choose Your Career</h3>
        <select v-model="selectedCareer" class="career-dropdown">
          <option v-for="career in careers" :key="career.id" :value="career.id">
            {{ career.icon }} {{ career.name }}
          </option>
        </select>
      </div>
      
      <div class="button-row">
        <button class="start-btn" @click="handleStartGame">Start Interview</button>
        <button class="instructions-btn" @click="toggleInstructions">Instructions</button>
      </div>
    </div>
    
    <div v-if="showInstructions" class="modal-overlay" @click="toggleInstructions">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="toggleInstructions">✕</button>
        <div class="instructions-panel">
          <div class="panel-section">
            <h2 class="section-title">🎯 How to Play</h2>
            <p class="instruction-text">
              Survive the interview by managing your confidence and dealing with the interviewer's questions.
              Each question reduces your confidence based on difficulty. Use your actions strategically!
            </p>
          </div>
          
          <div class="panel-section">
            <h2 class="section-title">⚔️ Your Actions</h2>
            <div class="actions-info">
              <div class="action-info">
                <div class="action-icon">💬</div>
                <div class="action-details">
                  <h3>Buzzword Attack</h3>
                  <p class="action-stat">Effect: 10-15 damage, +3 Confidence</p>
                  <p class="action-stat">Energy: 20 | Cooldown: 1 turn</p>
                  <p class="action-desc">Use corporate jargon to impress. Reliable damage.</p>
                </div>
              </div>
              <div class="action-info">
                <div class="action-icon">📁</div>
                <div class="action-details">
                  <h3>Portfolio Flex</h3>
                  <p class="action-stat">Effect: 12 damage (25 on crit), +3 Confidence (+8 on crit)</p>
                  <p class="action-stat">Energy: 30 | Cooldown: 2 turns</p>
                  <p class="action-desc">Show off your projects. High risk, high reward.</p>
                </div>
              </div>
              <div class="action-info">
                <div class="action-icon">🛡️</div>
                <div class="action-details">
                  <h3>Honest Panic Dodge</h3>
                  <p class="action-stat">Effect: Reduces next damage by 50%</p>
                  <p class="action-stat">Energy: 15 | Cooldown: 3 turns</p>
                  <p class="action-desc">Admit you don't know. Defensive move.</p>
                </div>
              </div>
              <div class="action-info">
                <div class="action-icon">💚</div>
                <div class="action-details">
                  <h3>Heal</h3>
                  <p class="action-stat">Effect: +20 HP, +15 Confidence</p>
                  <p class="action-stat">Energy: 25 | Cooldown: 4 turns</p>
                  <p class="action-desc">Take a deep breath. Recovery move.</p>
                </div>
              </div>
              <div class="action-info">
                <div class="action-icon">💪</div>
                <div class="action-details">
                  <h3>Confidence Boost</h3>
                  <p class="action-stat">Effect: +25 Confidence</p>
                  <p class="action-stat">Energy: 20 | Cooldown: 3 turns</p>
                  <p class="action-desc">Give yourself a pep talk. Pure confidence gain.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="panel-section">
            <h2 class="section-title">👔 Interview Bosses</h2>
            <div class="bosses-info">
              <div v-for="boss in INTERVIEWERS" :key="boss.id" class="boss-info">
                <div class="boss-header">
                  <h3>{{ boss.name }}</h3>
                  <span class="boss-badge">{{ boss.difficulty }}</span>
                </div>
                <div class="boss-stats">
                  <span>HP: {{ boss.hp }}</span>
                  <span>Questions: {{ boss.questions.length }}</span>
                </div>
                <p class="boss-lore">{{ getBossLore(boss.name) }}</p>
              </div>
            </div>
          </div>
          
          <div class="panel-section">
            <h2 class="section-title">📊 Resources</h2>
            <div class="resources-grid">
              <div class="resource-item">
                <span class="resource-icon">⚡</span>
                <div class="resource-text">
                  <strong>Energy</strong>
                  <p>Regenerates +10 each turn. Max 100.</p>
                </div>
              </div>
              <div class="resource-item">
                <span class="resource-icon">😊</span>
                <div class="resource-text">
                  <strong>Confidence</strong>
                  <p>Lost from questions. Gain +3 on attacks (+8 on crits). Game over at 0.</p>
                </div>
              </div>
              <div class="resource-item">
                <span class="resource-icon">🎯</span>
                <div class="resource-text">
                  <strong>Skill</strong>
                  <p>Increases Buzzword Attack damage.</p>
                </div>
              </div>
              <div class="resource-item">
                <span class="resource-icon">🍀</span>
                <div class="resource-text">
                  <strong>Luck</strong>
                  <p>Increases Portfolio Flex crit chance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.start-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #1a1a2e;
  padding: 20px;
}

.start-content {
  max-width: 500px;
  width: 100%;
  text-align: center;
  padding: 40px;
  background: #263238;
  border-radius: 16px;
  border: 4px solid #607D8B;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}

.game-title {
  margin: 0 0 20px 0;
  color: white;
  font-size: 48px;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.game-subtitle {
  margin: 0 0 30px 0;
  color: #B0BEC5;
  font-size: 18px;
  font-family: 'Courier New', monospace;
  letter-spacing: 2px;
}

.career-selection {
  margin-bottom: 30px;
}

.section-label {
  margin: 0 0 15px 0;
  color: #81C784;
  font-size: 14px;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.career-dropdown {
  width: 100%;
  padding: 12px 16px;
  background: #37474F;
  color: #ECEFF1;
  border: 3px solid #607D8B;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  cursor: pointer;
  transition: all 0.3s ease;
}

.career-dropdown:hover {
  border-color: #81C784;
  background: #455A64;
}

.career-dropdown:focus {
  outline: none;
  border-color: #81C784;
  box-shadow: 0 0 0 3px rgba(129, 199, 132, 0.2);
}

.button-row {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.start-btn {
  background: #4CAF50;
  color: white;
  border: 4px solid #2E7D32;
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  font-family: 'Courier New', monospace;
  letter-spacing: 2px;
  transition: all 0.3s ease;
}

.start-btn:hover {
  background: #388E3C;
  transform: scale(1.05);
  box-shadow: 0 4px 16px rgba(76, 175, 80, 0.4);
}

.instructions-btn {
  background: #2196F3;
  color: white;
  border: 4px solid #1565C0;
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  font-family: 'Courier New', monospace;
  letter-spacing: 2px;
  transition: all 0.3s ease;
}

.instructions-btn:hover {
  background: #1976D2;
  transform: scale(1.05);
  box-shadow: 0 4px 16px rgba(33, 150, 243, 0.4);
}

.modal-overlay {
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
  padding: 20px;
}

.modal-content {
  background: #263238;
  border-radius: 16px;
  border: 4px solid #607D8B;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  max-width: 700px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  padding: 25px;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #f44336;
  color: white;
  border: 3px solid #c62828;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: #d32f2f;
  transform: scale(1.1);
}

.instructions-panel {
  text-align: left;
}

.panel-section {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #455A64;
}

.panel-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.section-title {
  margin: 0 0 10px 0;
  color: #81C784;
  font-size: 18px;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 2px solid #81C784;
  padding-bottom: 6px;
}

.instruction-text {
  color: #ECEFF1;
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 20px;
  font-family: 'Courier New', monospace;
}

.actions-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  margin-bottom: 25px;
}

.action-info {
  background: #263238;
  padding: 15px;
  border-radius: 8px;
  border: 2px solid #455A64;
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.action-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.action-details {
  flex: 1;
}

.action-details h3 {
  margin: 0 0 8px 0;
  color: #FFA726;
  font-size: 16px;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
}

.action-stat {
  margin: 4px 0;
  color: #B0BEC5;
  font-size: 13px;
  font-family: 'Courier New', monospace;
}

.action-desc {
  color: #90A4AE;
  font-style: italic;
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.4;
}

.bosses-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  margin-bottom: 25px;
}

.boss-info {
  background: #263238;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid #455A64;
}

.boss-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.boss-header h3 {
  margin: 0;
  color: #EF5350;
  font-size: 16px;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
}

.boss-badge {
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

.boss-stats {
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
}

.boss-stats span {
  color: #B0BEC5;
  font-size: 13px;
  font-family: 'Courier New', monospace;
}

.boss-lore {
  color: #90A4AE;
  font-style: italic;
  margin-top: 10px;
  line-height: 1.4;
  font-size: 13px;
  font-family: 'Courier New', monospace;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.resource-item {
  background: #263238;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid #455A64;
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.resource-icon {
  font-size: 28px;
  flex-shrink: 0;
}

.resource-text {
  flex: 1;
}

.resource-text strong {
  display: block;
  color: #81C784;
  font-size: 14px;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.resource-text p {
  margin: 0;
  color: #B0BEC5;
  font-size: 13px;
  font-family: 'Courier New', monospace;
  line-height: 1.4;
}

.start-btn {
  background: #4CAF50;
  color: white;
  border: 4px solid #2E7D32;
  border-radius: 8px;
  padding: 16px 48px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  font-family: 'Courier New', monospace;
  letter-spacing: 2px;
  transition: all 0.3s ease;
}

.start-btn:hover {
  background: #388E3C;
  transform: scale(1.05);
  box-shadow: 0 4px 16px rgba(76, 175, 80, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  .start-screen {
    padding: 10px;
  }
  
  .start-content {
    max-width: 100%;
    padding: 20px;
  }
  
  .game-title {
    font-size: 32px;
    letter-spacing: 2px;
  }
  
  .game-subtitle {
    font-size: 14px;
  }
  
  .career-selection {
    margin-bottom: 20px;
  }
  
  .section-label {
    font-size: 12px;
    margin-bottom: 12px;
  }
  
  .career-dropdown {
    padding: 10px 14px;
    font-size: 13px;
  }
  
  .button-row {
    flex-direction: column;
    gap: 10px;
  }
  
  .start-btn,
  .instructions-btn {
    width: 100%;
    padding: 14px 24px;
    font-size: 16px;
  }
  
  .modal-overlay {
    padding: 10px;
  }
  
  .modal-content {
    max-width: 100%;
    max-height: 90vh;
    padding: 20px;
  }
  
  .close-btn {
    width: 35px;
    height: 35px;
    font-size: 18px;
  }
  
  .section-title {
    font-size: 16px;
  }
  
  .instruction-text {
    font-size: 14px;
  }
  
  .actions-info {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  
  .action-info {
    padding: 12px;
  }
  
  .action-icon {
    font-size: 28px;
  }
  
  .action-details h3 {
    font-size: 14px;
  }
  
  .action-stat {
    font-size: 12px;
  }
  
  .action-desc {
    font-size: 12px;
  }
  
  .bosses-info {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  
  .boss-info {
    padding: 12px;
  }
  
  .boss-header h3 {
    font-size: 14px;
  }
  
  .boss-stats {
    flex-direction: column;
    gap: 5px;
  }
  
  .boss-lore {
    font-size: 12px;
  }
  
  .resources-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  
  .resource-item {
    padding: 12px;
  }
  
  .resource-icon {
    font-size: 24px;
  }
  
  .resource-text strong {
    font-size: 13px;
  }
  
  .resource-text p {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .game-title {
    font-size: 24px;
    letter-spacing: 1px;
  }
  
  .start-content {
    padding: 15px;
  }
  
  .start-btn,
  .instructions-btn {
    padding: 12px 20px;
    font-size: 14px;
  }
  
  .modal-content {
    padding: 15px;
  }
}
</style>
