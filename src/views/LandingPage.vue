<!-- src/views/LandingPage.vue -->

<script setup>
import Navbar from '@/components/TheNavbar.vue';
import { useRouter } from 'vue-router';

const router = useRouter(); // Get the router instance

// Function to handle button click
const goToLoginSignup = () => {
  router.push('/loginsignup'); // Navigate to the /loginsignup route
};

</script>

<template>
  <div class="landing-page">
    <Navbar />
    <div class="content">
      <h1>Welcome to the Landing Page</h1>
      <button class="main-button" @click="goToLoginSignup">Log In / Sign Up</button>
    </div>
  </div>
</template>

<style scoped>
/* Center the content */
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.content {
  text-align: center;
}

/* Style the button */
.main-button {
  margin-top: 20px;
  font-size: 24px; /* Larger text */
  padding: 15px 40px; /* Adjust size */
  color: white;
  background-color: #42b983; /* Blue */
  border: none;
  border-radius: 8px; /* Rounded corners */
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add shadow */
}

.main-button:hover {
  background-color: #4caf50; /* Darker blue on hover */
  transform: scale(1.1); /* Slightly bigger on hover */
}

.main-button:active {
  transform: scale(0.95); /* Slightly smaller on click */
}
</style>

