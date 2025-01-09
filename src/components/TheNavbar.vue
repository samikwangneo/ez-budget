<!-- src/components/TheNavbar.vue -->

<script setup>

</script>

<template>
  <nav class="navbar">
    <div class="nav-left">
      <RouterLink to="/dashboard">
        <img src="../../public/logo.png" alt="Logo" class="nav-logo" />
      </RouterLink>
      <RouterLink to="/dashboard" class="nav-home">Budget</RouterLink>
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
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: linear-gradient(90deg, var(--color-green-mute) 20%, var(--color-green) 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: background 1s ease, height 0.5s ease;
}

.nav-right {
  display: flex;
  gap: 2rem;
}

.nav-left {
  display: flex;
  align-items: center;
}

.nav-item {
  text-decoration: none;
  color: var(--color-heading);
  font-size: 1.2rem;
  padding: 8px 16px;
  border-radius: 8px;
  position: relative;
  transition: transform 0.3s ease, background-color 0.3s ease;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

.nav-item:hover {
  background-color: #42b983;
  transform: translateY(-4px);
}

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

.nav-right a:last-child {
  margin-right: 0;
}

.navbar:hover {
  background: linear-gradient(90deg, #72a137 20%, #90d134 100%);
  height: 80px;
}

.nav-logo {
  width: 60px;
  height: auto;
  margin-left: -20px;
}

.nav-home {
  color: var(--color-heading);
  font-size: 1.5rem;
  font-weight: 500;

}
</style>
