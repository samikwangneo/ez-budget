<!-- src/App.vue -->

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import 'animate.css';
import '@/assets/main.css';
</script>

<template>
  <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
  </main>
</template>


<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

</style>
