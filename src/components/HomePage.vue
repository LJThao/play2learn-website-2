<template>
    <div>
        <!-- Global Header -->

         <!-- Main -->
          <main class="container mt-5 pt-5 pb-5">
            <section class="text-left mb-4 mx-auto mt-5">
                <h2>Happy Clients Say...</h2>
            </section>
            
            <!-- Quotes -->
             <section class="quote-section text-center mb-5">
                <blockquote id="quote" class="blockquote">
                    {{ currentQuote }}
                </blockquote>
            </section>
            
            <!-- Games -->
             <section class="games-list row">
                <div class="game col-md-6 mb-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h2 class="card-title">Anagram Hunt</h2>
                            <p class="card-text">Words are just puzzles waiting to be solved. Dive into Anagram Hunt and discover the magic hidden in every letter!</p>
                            <router-link to="/anagram-hunt" class="btn btn-primary">Play</router-link>
                        </div>
                    </div>
                </div>
                <div class="game col-md-6 mb-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h2 class="card-title">Math Facts Practice</h2>
                            <p class="card-text">Math is the language of the universe. Sharpen your skills and unlock endless possibilities with Math Facts Practice!</p>
                            <a href="games/math-facts.html" class="btn btn-primary">Play</a>
                        </div>
                    </div>
                </div>
            </section>
        </main> 
    </div>
    
    <!-- Global Footer-->

</template>
  
<script>
export default {
  name: 'HomePage',
  data() {
    return {
      quotes: [
        "\"I've never had more fun than I do playing Anagram Hunt. It is the best game ever invented!\" - Justin Jest",
        "\"Math Facts Practice! Let's go!\" - Jack Johnson",
        "\"Anagram Hunt or Math Facts Practice!!? Math it is!!\" - Jones Jefferson"
      ],
      currentQuote: "",
      quoteIndex: 0,
      intervalId: null,
    };
  },
  mounted() {
    // Display the first quote
    this.currentQuote = this.quotes[this.quoteIndex];

    // Setting intervals to 10 seconds
    this.intervalId = setInterval(() => {
      this.quoteIndex = (this.quoteIndex + 1) % this.quotes.length;
      this.currentQuote = this.quotes[this.quoteIndex];
    }, 10000);
  },
  beforeUnmount() {
    // Clear and stop the interval if it's not running
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
};
</script>

<style scoped>
</style>