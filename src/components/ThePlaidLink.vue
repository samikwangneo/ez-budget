<script setup>
import { ref, onMounted } from 'vue';

const handler = ref(null);

const createLinkToken = async () => {
  try {
    const response = await fetch('/api/create_link_token', {
      method: 'POST',
    });
    const { link_token } = await response.json();
    return link_token;
  } catch (error) {
    console.error('Error creating link token:', error);
    throw error;
  }
};

const initializePlaidLink = async () => {
  try {
    const token = await createLinkToken();

    handler.value = Plaid.create({
      token,
      onSuccess: async (public_token, metadata) => {
        console.log('Success:', public_token, metadata);
        try {
          const response = await fetch('/api/set_access_token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ public_token }),
          });
          const data = await response.json();
          console.log('Access token set:', data);
        } catch (error) {
          console.error('Error exchanging public token:', error);
        }
      },
      onLoad: () => {
        console.log('Plaid Link loaded');
      },
      onExit: (err, metadata) => {
        console.log('Exit:', err, metadata);
      },
      onEvent: (eventName, metadata) => {
        console.log('Event:', eventName, metadata);
      },
    });

    handleLinkSuccess();
  } catch (error) {
    console.error('Error initializing Plaid Link:', error);
  }
};

onMounted(() => {
  initializePlaidLink();
});

const isLinked = ref(false);

const handleLinkSuccess = () => {
  isLinked.value = true;
}
</script>

<template>
  <div class="container">
    <div v-if="!isLinked" class="bank_link" @click="handler?.open()">Link Bank Account</div>
    <div v-if="isLinked" class="bank_link_more" @click="handler?.open()">Link Another Account</div>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bank_link {
  margin-top: 20px;
  font-size: 24px;
  padding: 15px 40px;
  color: white;
  background-color: var(--color-green-mute);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.bank_link:hover {
  background-color: var(--color-green);
  transform: scale(1.1);
}

.bank_link:active {
  transform: scale(0.95);
}

.bank_link_more {
  position: absolute;
  top: 5vw;
  left: 75vw;
  margin-top: 20px;
  font-size: 24px;
  padding: 15px 40px;
  color: white;
  background-color: var(--color-green-mute);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.bank_link_more:hover {
  background-color: var(--color-green);
  transform: scale(1.1);
}

.bank_link_more:active {
  transform: scale(0.95);
}

</style>
