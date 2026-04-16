<script setup>
import Pit from './Pit.vue'
import Store from './Store.vue'
</script>

<template>
  <div class="board">
    <div class="board-row">
      <Store />
      <div class="pits-container">
        <Pit v-for="i in 7" :key="i" :id="i" />
      </div>
      <Store />
    </div>
    <div class="board-row">
      <div class="pits-container">
        <Pit v-for="i in 7" :key="`row2-${i}`" :id="i" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: #8B4513;
  border-radius: 10px;
}

.board-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.pits-container {
  display: flex;
  gap: 10px;
}
</style>
