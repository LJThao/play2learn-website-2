// Vue Router configuration for the application

// Import Vue Router components
import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AnagramHunt from '../components/AnagramHunt.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/anagram-hunt', component: AnagramHunt },
];

const router = createRouter({
  history: createWebHashHistory(), // Switch to hash history mode
  routes,
});

export default router;
