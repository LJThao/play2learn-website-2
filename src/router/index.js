// Router for HomePage and AnagramHunt
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AnagramHunt from '../components/AnagramHunt.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/anagram-hunt', component: AnagramHunt },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;