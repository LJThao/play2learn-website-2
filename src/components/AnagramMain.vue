<template>
  <!-- Anagram Main -->
   <main class="container mt-5 pt-5">
      <h1 class="text-center mb-3">Anagram Hunt</h1>
  
      <!-- Start -->
      <div v-if="!isPlaying && !isGameOver" class="text-center">
        <label for="word-length" class="form-label fw-bold mb-3">Word Length</label>
        <select v-model="localWordLength" id="word-length" class="form-select mx-auto mb-3 mt-2" style="width: 400px;" required>
          <option value="Any">Any</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9+</option>
        </select>
        <ol class="text-start mx-auto mt-3 mb-3" style="max-width: 400px;">
          <li>Choose Word Length.</li>
          <li>Press <strong>Play!</strong></li>
          <li>How many anagrams can you find in a minute?</li>
        </ol>
        <button @click="startGame" class="btn btn-primary mt-3">Play</button>
      </div>
  
      <!-- Play -->
      <div v-if="isPlaying" class="game-panel text-center mt-4">
        <h2>Find Anagrams for: <span class="text-uppercase">{{ currentWord }}</span></h2>
        <p><strong>Time Left:</strong> {{ timeLeft }} seconds</p>
        <p><strong>Score:</strong> {{ score }}</p>
        <p><strong>Remaining Anagrams:</strong> {{ remainingAnagrams }}</p>
  
        <input 
          v-model="localUserGuess" 
          @keyup.enter="submitGuess" 
          placeholder="Enter an anagram" 
          class="form-control w-70 mx-auto mb-2"
          style="width: 200px;"
        />
        <button @click="submitGuess" class="btn btn-primary mt-2">Submit</button>
  
        <!-- Correct Words -->
        <div class="correct-words mt-4">
          <h4>Correct Guesses:</h4>
          <ul class="list-unstyled">
            <li v-for="word in correctWords" :key="word">{{ word }}</li>
          </ul>
        </div>
      </div>
      
      <!-- Game Over -->
      <div v-if="isGameOver" class="text-center mt-5">
      <h2>Time's Up!</h2>
      <p>You Got</p>
      <h1>{{ score }}</h1>
      <p>Anagrams</p>
      <div class="button-container d-flex justify-content-center gap-3 mt-4">
        <button @click="startGame" class="btn btn-primary w-50">Play Again</button>
        <button @click="goHome" class="btn btn-secondary w-50">Back to Start Screen</button>
      </div>
    </div>
</main>
</template>

<script>
export default {
  name: 'AnagramMain',
  props: [
    'wordLength', 'isPlaying', 'isGameOver', 'timeLeft', 
    'score', 'currentWord', 'remainingAnagrams', 'correctWords', 'userGuess'
  ],
  data() {
    return {
      localWordLength: this.wordLength,
      localUserGuess: this.userGuess
    };
  },
  watch: {
    localWordLength(newVal) {
      this.$emit('update:wordLength', newVal);
    },
    localUserGuess(newVal) {
      this.$emit('update:userGuess', newVal);
    }
  },
  methods: {
    startGame() {
      this.$emit('start-game');
    },
    submitGuess() {
      this.$emit('submit-guess');
    },
    goHome() {
      window.location.href = '/';
    }
  }
};
</script>

<style scoped>
.game-panel {
  border: 1px solid #ddd;
  padding: 20px;
  max-width: 500px;
  margin: auto;
}
.correct-words ol {
  list-style-type: decimal;
  padding-left: 1.5rem;
}
.button-container .btn {
  max-width: 200px;
}
</style>