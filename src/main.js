// Main JS entry point for the Vue application

// Import Vue’s createApp method to initialize the app// Main JS
import { createApp } from 'vue';

// Import the root component
import App from './App.vue';

// Import the router for handling routes/pages
import router from './router';

// Mount the app and apply the router
createApp(App).use(router).mount('#app');