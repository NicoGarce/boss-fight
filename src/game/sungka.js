// Sungka game logic
// This file will contain the core game rules and mechanics

export const INITIAL_STONES_PER_PIT = 7

export function createInitialBoard() {
  return {
    player1Pits: Array(7).fill(INITIAL_STONES_PER_PIT),
    player2Pits: Array(7).fill(INITIAL_STONES_PER_PIT),
    player1Store: 0,
    player2Store: 0
  }
}
