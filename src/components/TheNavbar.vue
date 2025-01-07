<!-- src/components/TheNavbar.vue -->

<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar">
    <div class="nav-left">
      <RouterLink to="/" class="nav-item">Home</RouterLink>
    </div>

    <div class="nav-right">
      <RouterLink to="/dashboard" class="nav-item">Dashboard</RouterLink>
      <RouterLink to="/budget" class="nav-item">Budget</RouterLink>
      <RouterLink to="/analytics" class="nav-item">Analytics</RouterLink>
      <RouterLink to="/account" class="nav-item">Account</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
/* Navbar Styling */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: linear-gradient(90deg, #373737 0%, #42b983 100%);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

/* Navbar Right Section */
.nav-right {
  display: flex;
  gap: 2rem;
}

.nav-item {
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  padding: 8px 16px;
  border-radius: 8px;
  position: relative;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

/* Hover Effect on Links */
.nav-item:hover {
  background-color: #42b983;
  transform: translateY(-4px); /* Slight lift effect */
}

/* Underline Effect for Links */
.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0%;
  height: 2px;
  background: white;
  transition: width 0.3s ease, left 0.3s ease;
}

.nav-item:hover::after {
  width: 100%;
  left: 0;
}

/* Remove margin-right for last link */
.nav-right a:last-child {
  margin-right: 0;
}

/* Navbar Hover Effect */
.navbar:hover {
  background: linear-gradient(90deg, #333333 0%, #4caf50 100%);
}
</style>
