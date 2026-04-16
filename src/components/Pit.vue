<script setup>
defineProps({
  id: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="pit">
    <span class="pit-count">0</span>
  </div>
</template>

<style scoped>
.pit {
  width: 60px;
  height: 60px;
  background: #D2691E;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #654321;
}

.pit-count {
  color: white;
  font-size: 24px;
  font-weight: bold;
}
</style>
