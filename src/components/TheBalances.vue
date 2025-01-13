<script setup>
import { ref, onMounted } from 'vue';

const accounts = ref([]);
const transactions = ref([]);
const error = ref(null);
const isLoading = ref(false);

const API_URL = 'http://localhost:8000';

const fetchAccounts = async () => {
  try {
    const response = await fetch(`${API_URL}/api/accounts`);
    if (!response.ok) {
      throw new Error('Failed to fetch accounts');
    }
    const data = await response.json();
    accounts.value = data.accounts;
  } catch (err) {
    error.value = 'Error fetching accounts: ' + err.message;
    console.error('Error fetching accounts:', err);
  }
};

const fetchTransactions = async () => {
  try {
    const response = await fetch(`${API_URL}/api/transactions`);
    if (!response.ok) {
      throw new Error('Failed to fetch transactions');
    }
    const data = await response.json();
    transactions.value = data.latest_transactions || [];
  } catch (err) {
    error.value = 'Error fetching transactions: ' + err.message;
    console.error('Error fetching transactions:', err);
  }
};

const fetchAllData = async () => {
  isLoading.value = true;
  error.value = null;

  try {
    await Promise.all([
      fetchAccounts(),
      fetchTransactions()
    ]);
  } catch (err) {
    error.value = 'Error fetching data: ' + err.message;
  } finally {
    isLoading.value = false;
  }
};

const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
};

const getAccountTypeIcon = (type) => {
  switch (type) {
    case 'depository': return '💳';
    case 'credit': return '💰';
    case 'loan': return '📝';
    case 'investment': return '📈';
    default: return '🏦';
  }
};

// Fetch data when component mounts
onMounted(() => {
  fetchAllData();
});
</script>

<template>
  <div class="container mx-auto p-4 max-w-4xl bg-gray-900 text-white-100">
    <!-- Error Display -->
    <div v-if="error" class="mb-4 p-4 bg-red-900 text-red-100 rounded">
      {{ error }}
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="text-center py-8">
      <div class="text-lg text-white-300">Loading account information...</div>
    </div>

    <div v-else>
      <!-- Accounts Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4 text-white-100">Your Accounts</h2>
        <div v-if="accounts.length === 0" class="text-white-400">
          No accounts linked yet
        </div>
        <div v-else class="grid gap-4 md:grid-cols-2">
          <div
            v-for="account in accounts"
            :key="account.account_id"
            class="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700"
          >
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center">
                <span class="text-2xl mr-2">{{ getAccountTypeIcon(account.type) }}</span>
                <div>
                  <h3 class="font-semibold text-white-100">{{ account.name }}</h3>
                  <p class="text-sm text-white-400">{{ account.official_name }}</p>
                </div>
              </div>
              <div class="text-right">
                <div class="font-bold text-white-100">
                  {{ formatCurrency(account.balances.current, account.balances.iso_currency_code) }}
                </div>
                <div class="text-sm text-white-400">
                  Available: {{ formatCurrency(account.balances.available, account.balances.iso_currency_code) }}
                </div>
              </div>
            </div>
            <div class="text-sm text-white-400">
              {{ account.subtype.charAt(0).toUpperCase() + account.subtype.slice(1) }}
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Transactions Section -->
      <div>
        <h2 class="text-2xl font-bold mb-4 text-white-100">Recent Transactions</h2>
        <div v-if="transactions.length === 0" class="text-white-400">
          No recent transactions
        </div>
        <div v-else class="bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-900">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-white-400 uppercase">Date</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-white-400 uppercase">Description</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-white-400 uppercase">Category</th>
                  <th class="px-6 py-3 text-right text-xs font-medium text-white-400 uppercase">Amount</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white-700">
                <tr v-for="transaction in transactions" :key="transaction.transaction_id" class="hover:bg-gray-700">
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-white-300">
                    {{ new Date(transaction.date).toLocaleDateString() }}
                  </td>
                  <td class="px-6 py-4 text-sm text-white-300">{{ transaction.name }}</td>
                  <td class="px-6 py-4 text-sm text-white-300">
                    {{ transaction.category ? transaction.category[0] : 'Uncategorized' }}
                  </td>
                  <td class="px-6 py-4 text-sm text-right"
                      :class="transaction.amount >= 0 ? 'text-red-400' : 'text-green-400'">
                    {{ formatCurrency(Math.abs(transaction.amount), transaction.iso_currency_code) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Refresh Button -->
      <div class="mt-6 text-center">
        <button
          @click="fetchAllData"
          :disabled="isLoading"
          class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-800 disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          <span v-if="isLoading">Refreshing...</span>
          <span v-else>Refresh Data</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
