<template>
  <div id="app">
    <!-- Header  -->
    <GlobalHeader />

    <!-- AnagramHunt and AnagramMain route -->
    <router-view />

    <!-- Footer -->
    <GlobalFooter />
  </div>
</template>

<script>
// Import shared layout components
import GlobalHeader from './components/GlobalHeader.vue';
import GlobalFooter from './components/GlobalFooter.vue';

export default {
  name: 'App',
  components: {
    GlobalHeader,
    GlobalFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>