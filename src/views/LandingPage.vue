<!-- src/views/LandingPage.vue -->

<script setup>
import Navbar from '@/components/TheNavbar.vue';
import { useRouter } from 'vue-router';
const router = useRouter();


const goToLoginSignup = () => {
  router.push('/loginsignup');
};

</script>

<script>
  export default {
  methods: {
    showAlert() {
      alert('Login or signup first lil bro');
    }
  }
};
</script>

<template>
  <div class="landing-page">
    <Navbar />
    <div class="content">
      <h1 class="animate__animated animate__bounceInDown">Get started with EZ budget</h1>
      <div class = "animate__animated animate__bounceInUp animate__delay-2s">
        <button class="main-button" @click="goToLoginSignup">Log In / Sign Up</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.4)
    ),
    url('../../public/background_budget_image.jpg') no-repeat center center / cover;
}

.content {
  text-align: center;
  color: var(--color-heading);
  margin: 0 auto;
}

.main-button {
  margin-top: 20px;
  font-size: 24px;
  padding: 15px 40px;
  color: white;
  background-color: var(--color-green-mute);
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.main-button:hover {
  background-color: var(--color-green);
  transform: scale(1.1);
}

.main-button:active {
  transform: scale(0.95);
}

.animate__animated.animate__bounceInDown {
  --animate-duration: 1.5s;
}

.animate__animated.animate__bounceInUp {
  --animate-duration: 1.5s;
  --animate-delay: 0.7s;
}

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

