<script setup>
definePageMeta({
  layout: false
})
</script>

<template>
  <div class="min-h-screen bg-black">
    <!-- Hero Section -->
    <section class="hero-section">
      <h1 class="hero-heading">
        Iconic Venue in<br>
        London's Finsbury Park
      </h1>
      <button class="book-lane-button">
        book a<br>
        lane
      </button>
    </section>
  </div>
</template>

<style scoped>
/* Import JetBrains Mono font */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

.hero-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.hero-heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.32;
  color: #ffffff;
  opacity: 0.8;
  text-align: center;
  margin: 0;
  margin-bottom: 8rem;
}

.book-lane-button {
  position: fixed;
  top: 55px;
  left: 18px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 8px;
  line-height: 1.32;
  color: #ffffff;
  opacity: 0.75;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: center;
  padding: 0;
  z-index: 9999;
}

.book-lane-button:hover {
  opacity: 1;
}

/* Desktop styles (1920px+) */
@media (min-width: 1920px) {
  .hero-heading {
    font-size: 36px;
    line-height: 1.32;
  }

  .book-lane-button {
    font-size: 12px;
  }
}

/* Tablet/Medium Desktop */
@media (min-width: 768px) and (max-width: 1919px) {
  .hero-heading {
    font-size: 28px;
  }

  .book-lane-button {
    font-size: 10px;
  }
}
</style>
