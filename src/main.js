import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDuviZ0N6TUPAKy-cmaYyThSgQu8R5AYG4",
  authDomain: "ez-budget-b00dd.firebaseapp.com",
  projectId: "ez-budget-b00dd",
  storageBucket: "ez-budget-b00dd.firebasestorage.app",
  messagingSenderId: "558256228406",
  appId: "1:558256228406:web:91158546475ab3dbd57097",
  measurementId: "G-8FJ15JWKRV"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
