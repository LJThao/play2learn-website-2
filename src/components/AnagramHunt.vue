<template>
  <!-- Global Header -->

  <!-- Anagram Hunt Main -->
  <div id="anagram-app" class="anagram-hunt d-flex flex-column min-vh-100">
    <AnagramMain 
      :wordLength="wordLength"
      :isPlaying="isPlaying"
      :isGameOver="isGameOver"
      :timeLeft="timeLeft"
      :score="score"
      :currentWord="currentWord"
      :remainingAnagrams="remainingAnagrams"
      :correctWords="correctWords"
      :userGuess="userGuess"
      @start-game="startGame"
      @submit-guess="submitGuess"
      @reset-game="resetGame"
      @update:wordLength="updateWordLength"
      @update:userGuess="updateUserGuess"
    />

  <!-- Global Footer -->
  </div>
</template>

<script>
// Imports
import AnagramMain from './AnagramMain.vue';
import anagrams from '../assets/anagram-data.js';

export default {
  name: 'AnagramHunt',
  components: {
    AnagramMain
  },
  data() {
    return {
      wordLength: 'Any',
      isPlaying: false,
      isGameOver: false,
      score: 0,
      timeLeft: 60,
      userGuess: '',
      correctWords: [],
      currentWord: '',
      remainingAnagrams: 0,
      timer: null,
      anagrams
    };
  },
  methods: {
    startGame() {
      this.isPlaying = true;
      this.isGameOver = false;
      this.correctWords = [];
      this.score = 0;
      this.timeLeft = 60;

      this.selectWord();

      // Countdown
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.endGame();
        }
      }, 1000);
    },
    selectWord() {
      let availableAnagrams;
      if (this.wordLength === 'Any') {
        // Select a word randomly
        const allAnagrams = Object.values(this.anagrams).flat();
        availableAnagrams = allAnagrams;
      } else {
        availableAnagrams = this.anagrams[this.wordLength] || [];
      }

      // Choose a random array from the anagram dataset
      const selectedArray = availableAnagrams[Math.floor(Math.random() * availableAnagrams.length)];
      this.currentWord = selectedArray[0];
      this.remainingAnagrams = selectedArray.length - 1;
      this.correctWords = [];
    },
    submitGuess() {
      const guess = this.userGuess.trim().toLowerCase();
      if (guess && !this.correctWords.includes(guess) && this.currentWord !== guess) {
        const currentAnagramSet = Object.values(this.anagrams).flat().find(arr => arr.includes(this.currentWord));
        if (currentAnagramSet && currentAnagramSet.includes(guess)) {
          this.correctWords.push(guess);
          this.score++;
          this.remainingAnagrams--;

          // Check current anagram if all are guessed correctly then select a new word
          if (this.remainingAnagrams === 0) {
            this.selectWord();
          }
        }
      }
      this.userGuess = '';
    },
    endGame() {
      this.isPlaying = false;
      this.isGameOver = true;
      clearInterval(this.timer);
    },
    resetGame() {
      this.isPlaying = false;
      this.isGameOver = false;
      this.wordLength = 'Any';
      this.userGuess = '';
    },
    updateWordLength(newVal) {
      this.wordLength = newVal;
    },
    updateUserGuess(newVal) {
      this.userGuess = newVal;
    }
  }
};
</script>

<style scoped>
.anagram-hunt {
  padding-top: 70px;
}
</style>