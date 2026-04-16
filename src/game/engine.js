// Interview Boss Fight game engine
// Handles turn-based combat logic

export function processPlayerAction(state, action) {
  const newState = JSON.parse(JSON.stringify(state))
  
  switch (action) {
    case 'buzzword_attack':
      // Reduces enemy HP slightly, scales with skill
      const baseDamage = 10
      const skillMultiplier = 1 + (state.player.skill / 100)
      const damage = Math.floor(baseDamage * skillMultiplier)
      newState.enemy.hp = Math.max(0, newState.enemy.hp - damage)
      // Gain small confidence on successful attack
      newState.player.confidence = Math.min(state.player.maxConfidence || 50, state.player.confidence + 3)
      newState.turn = 'enemy'
      break
      
    case 'portfolio_flex':
      // Medium damage, chance-based (luck)
      const luckRoll = Math.random() * 100
      if (luckRoll < state.player.luck) {
        // Critical hit
        const critDamage = 25
        newState.enemy.hp = Math.max(0, newState.enemy.hp - critDamage)
        // Gain more confidence on crit
        newState.player.confidence = Math.min(state.player.maxConfidence || 50, state.player.confidence + 8)
      } else {
        // Normal hit
        const normalDamage = 12
        newState.enemy.hp = Math.max(0, newState.enemy.hp - normalDamage)
        // Gain small confidence on hit
        newState.player.confidence = Math.min(state.player.maxConfidence || 50, state.player.confidence + 3)
      }
      newState.turn = 'enemy'
      break
      
    case 'panic_dodge':
      // Reduces next incoming damage (sets a flag)
      newState.player.dodgeActive = true
      newState.turn = 'enemy'
      break
      
    case 'heal':
      // Restore HP and confidence
      const healAmount = 20
      const confidenceRestore = 15
      newState.player.hp = Math.min(state.player.maxHp || 100, newState.player.hp + healAmount)
      newState.player.confidence = Math.min(state.player.maxConfidence || 50, newState.player.confidence + confidenceRestore)
      newState.turn = 'enemy'
      break
  }
  
  // Check for win condition
  if (newState.enemy.hp <= 0) {
    newState.gameStatus = 'won'
  }
  
  return newState
}

export function processEnemyAction(state, enemyQuestions) {
  const newState = JSON.parse(JSON.stringify(state))
  
  // AI interviewer behavior: select question based on player stats
  let selectedQuestion
  
  // If player has low confidence (< 30), interviewer is more aggressive (harder questions)
  if (state.player.confidence < 30) {
    // Prioritize hard/expert questions
    const hardQuestions = enemyQuestions.filter(q => 
      q.difficulty === 'hard' || q.difficulty === 'expert'
    )
    if (hardQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * hardQuestions.length)
      selectedQuestion = hardQuestions[randomIndex]
    } else {
      // Fallback to random if no hard questions available
      const randomIndex = Math.floor(Math.random() * enemyQuestions.length)
      selectedQuestion = enemyQuestions[randomIndex]
    }
  }
  // If player has high skill (> 50), interviewer challenges with harder questions
  else if (state.player.skill > 50) {
    // Mix of medium/hard questions
    const challengingQuestions = enemyQuestions.filter(q => 
      q.difficulty === 'medium' || q.difficulty === 'hard' || q.difficulty === 'expert'
    )
    if (challengingQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * challengingQuestions.length)
      selectedQuestion = challengingQuestions[randomIndex]
    } else {
      const randomIndex = Math.floor(Math.random() * enemyQuestions.length)
      selectedQuestion = enemyQuestions[randomIndex]
    }
  }
  // Normal behavior: random question selection
  else {
    const randomIndex = Math.floor(Math.random() * enemyQuestions.length)
    selectedQuestion = enemyQuestions[randomIndex]
  }
  
  // Calculate stress damage based on question difficulty
  let stressDamage = 0
  switch (selectedQuestion.difficulty) {
    case 'easy':
      stressDamage = 5
      break
    case 'medium':
      stressDamage = 10
      break
    case 'hard':
      stressDamage = 15
      break
    case 'expert':
      stressDamage = 20
      break
    default:
      stressDamage = 10
  }
  
  // Apply dodge reduction if active
  if (newState.player.dodgeActive) {
    stressDamage = Math.floor(stressDamage * 0.5)
    newState.player.dodgeActive = false
  }
  
  // Deal stress damage to player confidence
  newState.player.confidence = Math.max(0, newState.player.confidence - stressDamage)
  
  // Check for lose condition (confidence reaches 0)
  if (newState.player.confidence <= 0) {
    newState.gameStatus = 'lost'
    return newState
  }
  
  newState.turn = 'player'
  newState.currentQuestion = selectedQuestion.text
  
  // Check for lose condition
  if (newState.player.hp <= 0) {
    newState.gameStatus = 'lost'
  }
  
  return newState
}
