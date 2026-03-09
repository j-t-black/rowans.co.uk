
<template>
  <div class="min-h-screen bg-black flex flex-col items-center justify-center">
    <h1 class="heading">Book Karaoke</h1>
    <p class="body-text">Coming soon.</p>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "Book Karaoke — Rowan's" })
</script>

<style scoped>
.heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: var(--section-heading-size, 46px);
  color: var(--color-heading, #ff0000);
  margin-bottom: 1rem;
}
.body-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  color: #ffffff;
  opacity: 0.5;
}

@media (min-width: 1440px) {
  .heading {
    font-size: 68px;
  }
}
</style>
