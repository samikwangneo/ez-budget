<!-- src/views/DashboardPage.vue -->

<script setup>
import Navbar from '@/components/TheNavbar.vue';
import PlaidLink from '@/components/ThePlaidLink.vue';
import Balances from '@/components/TheBalances.vue';
import { ref } from 'vue';

const isLinked = ref(false);

const handleLinkSuccess = () => {
  isLinked.value = true;
}
</script>

<template>
    <div class="container">
      <Navbar />
      <div class="title">Welcome to the Dashboard!</div>
      <PlaidLink />
      <Balances />
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

</style>


