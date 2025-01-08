<!-- src/views/Dashboard.vue -->

<script setup>
import Navbar from '@/components/TheNavbar.vue';
</script>

<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="title">Welcome to the Dashboard!</div>
    </div>
  </div>
</template>

<style scoped>

.title {
  font-size: 40px;
  font-weight: 600;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>

