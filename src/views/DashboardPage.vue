<!-- src/views/DashboardPage.vue -->

<script setup>
import Navbar from '@/components/TheNavbar.vue';
</script>

<template>
    <div class="container">
      <Navbar />
      <div class="title">Welcome to the Dashboard!</div>
    </div>
</template>

<style scoped>

.title {
  font-size: 40px;
  font-weight: 600;
  color: var(--color-heading);
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>


