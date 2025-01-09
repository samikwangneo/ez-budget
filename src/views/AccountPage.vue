<!-- src/views/AccountPage.vue -->

<script setup>
import Navbar from '@/components/TheNavbar.vue';
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const auth = getAuth();
const userEmail = ref("");

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userEmail.value = user.email
      userPassword.value = user.password
    }
    else {
      router.push('/');
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
}

</script>

<template>
    <div class="container">
      <Navbar />
      <div class="title">Welcome to the Account!</div>
      <div class = "text">Your email is {{ userEmail }}</div>
      <div class = "text">Your password is</div>
      <div class="sign-out" @click="handleSignOut">Sign Out</div>
    </div>
</template>

<style scoped>

.title {
  font-size: 40px;
  font-weight: 600;
  color: var(--color-heading);
}

.text {
  font-size: 20px;
  color: var(--color-text);
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sign-out {
  margin-top: 20px;
  font-size: 24px;
  padding: 15px 40px;
  color: white;
  background-color: #b33b43;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.sign-out:hover {
  background-color: #d94851;
  transform: scale(1.1);
}

.sign-out:active {
  transform: scale(0.95);
}

</style>
