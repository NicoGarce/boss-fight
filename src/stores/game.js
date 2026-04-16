import { defineStore } from 'pinia'
import { processPlayerAction, processEnemyAction } from '../game/engine.js'
import { getRandomInterviewer } from '../data/interviewers.js'

export const useGameStore = defineStore('game', {
  state: () => ({
    gameStarted: false,
    player: {
      hp: 100,
      maxHp: 100,
      confidence: 50,
      maxConfidence: 50,
      skill: 30,
      luck: 25,
      dodgeActive: false,
      energy: 100,
      maxEnergy: 100,
      cooldowns: {
        buzzword_attack: 0,
        portfolio_flex: 0,
        panic_dodge: 0,
        heal: 0,
        confidence_boost: 0
      }
    },
    enemy: {
      name: 'Interviewer',
      hp: 100,
      maxHp: 100,
      difficulty: 'Medium',
      questions: []
    },
    turn: 'player',
    log: [{ message: 'Interview started...', type: 'system' }],
    gameStatus: 'playing',
    currentQuestion: '',
    gameOverMessage: '',
    enemyShake: false,
    playerShake: false
  }),
  actions: {
    startGame() {
      const interviewer = getRandomInterviewer()
      this.player = {
        hp: 100,
        maxHp: 100,
        confidence: 50,
        maxConfidence: 50,
        skill: 30,
        luck: 25,
        dodgeActive: false,
        energy: 100,
        maxEnergy: 100,
        cooldowns: {
          buzzword_attack: 0,
          portfolio_flex: 0,
          panic_dodge: 0,
          heal: 0
        }
      }
      this.enemy = {
        name: interviewer.name,
        hp: interviewer.hp,
        maxHp: interviewer.hp,
        difficulty: interviewer.difficulty,
        questions: interviewer.questions
      }
      this.turn = 'enemy'
      this.log = [
        { message: 'Interview started...', type: 'system' },
        { message: `${interviewer.name}: "Welcome! Let's begin the interview."`, type: 'enemy' }
      ]
      this.gameStatus = 'playing'
      this.currentQuestion = ''
      this.gameOverMessage = ''
      this.enemyShake = false
      this.playerShake = false
      this.playerHeal = false
      this.enemyDamage = false
      this.gameStarted = true
      this.saveState()
      
      // Enemy speaks first
      setTimeout(() => {
        this.performEnemyAction()
      }, 1500)
    },
    saveState() {
      const stateToSave = {
        gameStarted: this.gameStarted,
        player: this.player,
        enemy: this.enemy,
        turn: this.turn,
        log: this.log,
        gameStatus: this.gameStatus,
        currentQuestion: this.currentQuestion,
        gameOverMessage: this.gameOverMessage
      }
      localStorage.setItem('bossFightState', JSON.stringify(stateToSave))
    },
    loadState() {
      const savedState = localStorage.getItem('bossFightState')
      if (savedState) {
        const parsed = JSON.parse(savedState)
        this.gameStarted = parsed.gameStarted || false
        this.player = {
          ...parsed.player,
          energy: parsed.player.energy || 100,
          maxEnergy: parsed.player.maxEnergy || 100,
          cooldowns: parsed.player.cooldowns || {
            buzzword_attack: 0,
            portfolio_flex: 0,
            panic_dodge: 0,
            heal: 0,
            confidence_boost: 0
          }
        }
        this.enemy = parsed.enemy
        this.turn = parsed.turn
        this.log = parsed.log
        this.gameStatus = parsed.gameStatus
        this.currentQuestion = parsed.currentQuestion
        this.gameOverMessage = parsed.gameOverMessage
        this.enemyShake = false
        this.playerShake = false
        this.playerHeal = false
        this.enemyDamage = false
        return true
      }
      return false
    },
    resetGame() {
      localStorage.removeItem('bossFightState')
      this.gameStarted = false
      this.player = {
        hp: 100,
        maxHp: 100,
        confidence: 50,
        maxConfidence: 50,
        skill: 30,
        luck: 25,
        dodgeActive: false,
        energy: 100,
        maxEnergy: 100,
        cooldowns: {
          buzzword_attack: 0,
          portfolio_flex: 0,
          panic_dodge: 0,
          heal: 0
        }
      }
      this.enemy = {
        name: 'Interviewer',
        hp: 100,
        maxHp: 100,
        difficulty: 'Medium',
        questions: []
      }
      this.turn = 'player'
      this.log = [{ message: 'Interview started...', type: 'system' }]
      this.gameStatus = 'playing'
      this.currentQuestion = ''
      this.gameOverMessage = ''
      this.enemyShake = false
      this.playerShake = false
      this.playerHeal = false
      this.enemyDamage = false
    },
    addLog(message, type = 'system') {
      this.log.push({ message, type })
      if (this.log.length > 10) {
        this.log.shift()
      }
    },
    performPlayerAction(action) {
      if (this.gameStatus !== 'playing' || this.turn !== 'player') return

      // Check cooldown
      if (this.player.cooldowns[action] > 0) {
        this.addLog(`${action} is on cooldown!`, 'system')
        return
      }

      // Check energy cost
      const energyCosts = {
        buzzword_attack: 20,
        portfolio_flex: 30,
        panic_dodge: 15,
        heal: 25,
        confidence_boost: 20
      }

      if (this.player.energy < energyCosts[action]) {
        this.addLog(`Not enough energy for ${action}!`, 'system')
        return
      }

      const state = {
        player: this.player,
        enemy: this.enemy,
        turn: this.turn,
        gameStatus: this.gameStatus
      }

      const newState = processPlayerAction(state, action)
      
      this.player = newState.player
      this.enemy = newState.enemy
      this.turn = newState.turn
      this.gameStatus = newState.gameStatus
      
      // Deduct energy after state update
      this.player.energy = Math.max(0, this.player.energy - energyCosts[action])
      
      // Set cooldown
      const cooldowns = {
        buzzword_attack: 1,
        portfolio_flex: 2,
        panic_dodge: 3,
        heal: 4,
        confidence_boost: 3
      }
      this.player.cooldowns[action] = cooldowns[action]
      this.turn = newState.turn
      this.gameStatus = newState.gameStatus

      // Trigger shake animation on enemy if damage dealt
      if (action !== 'panic_dodge' && this.enemy.hp < state.enemy.hp) {
        this.enemyShake = true
        this.enemyDamage = true
        setTimeout(() => {
          this.enemyShake = false
          this.enemyDamage = false
        }, 600)
      }

      // Add log entry based on action
      switch (action) {
        case 'buzzword_attack':
          const damage = 10 + Math.floor(10 * (this.player.skill / 100))
          this.addLog(`You used Buzzword Attack! Dealt ${damage} damage. (-20 energy)`, 'player')
          break
        case 'portfolio_flex':
          const luckRoll = Math.random() * 100
          if (luckRoll < this.player.luck) {
            this.addLog('You used Portfolio Flex! Critical hit! Dealt 25 damage. (-30 energy)', 'player')
          } else {
            this.addLog('You used Portfolio Flex. Dealt 12 damage. (-30 energy)', 'player')
          }
          break
        case 'panic_dodge':
          this.addLog('You used Honest Panic Dodge! Next damage reduced by 50%. (-15 energy)', 'player')
          break
        case 'heal':
          this.addLog('You took a deep breath! Restored 20 HP and 15 confidence. (-25 energy)', 'player')
          this.playerHeal = true
          setTimeout(() => {
            this.playerHeal = false
          }, 800)
          break
        case 'confidence_boost':
          this.addLog('You gave yourself a pep talk! Restored 25 confidence. (-20 energy)', 'player')
          break
      }

      // Check for win
      if (this.gameStatus === 'won') {
        this.gameOverMessage = 'You got the job!'
        this.addLog('You got the job!', 'system')
        this.saveState()
        return
      }

      this.saveState()

      // Enemy turn
      setTimeout(() => {
        this.performEnemyAction()
      }, 1000)
    },
    performEnemyAction() {
      if (this.gameStatus !== 'playing') return

      // Reduce cooldowns
      for (const action in this.player.cooldowns) {
        if (this.player.cooldowns[action] > 0) {
          this.player.cooldowns[action]--
        }
      }

      // Restore some energy
      this.player.energy = Math.min(this.player.maxEnergy, this.player.energy + 10)

      const state = {
        player: this.player,
        enemy: this.enemy,
        turn: this.turn,
        gameStatus: this.gameStatus
      }

      const newState = processEnemyAction(state, this.enemy.questions)
      
      this.player = newState.player
      this.enemy = newState.enemy
      this.turn = newState.turn
      this.gameStatus = newState.gameStatus
      this.currentQuestion = newState.currentQuestion

      // Add log entry
      this.addLog(`${this.enemy.name} asked: ${this.currentQuestion}`, 'enemy')

      // Check for loss
      if (this.gameStatus === 'lost') {
        if (this.player.confidence <= 0) {
          this.gameOverMessage = 'Rejected. Try again.'
          this.addLog('Rejected. Try again.', 'system')
        } else {
          this.gameOverMessage = 'You failed the interview!'
          this.addLog('You failed the interview!', 'system')
        }
      }

      this.saveState()
    }
  }
})
