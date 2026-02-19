<template>
  <div class="page">
    <header class="page-header">
      <h1 class="heading">Rowans Merch</h1>
    </header>
    <div class="image-wrap">
      <img src="/design-assets/merch-vinyl-logo.png" alt="Rowans" class="logo-image" />
    </div>
    <p class="coming-soon">Coming soon.</p>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

.page {
  min-height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-header {
  padding: 2.5rem 1.5rem 1rem;
  text-align: center;
  align-self: flex-start;
}

.heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 24px;
  color: #ff3333;
  margin: 0;
}

.image-wrap {
  width: 100%;
  max-width: 600px;
  padding: 2rem 1.5rem 1rem;
}

.logo-image {
  width: 100%;
  display: block;
  mix-blend-mode: lighten;
}

.coming-soon {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: #ffffff;
  opacity: 0.4;
  text-align: center;
  margin: 0 0 3rem;
}

@media (min-width: 640px) {
  .heading {
    font-size: 32px;
  }
}

@media (min-width: 1280px) {
  .heading {
    font-size: 48px;
  }

  .image-wrap {
    max-width: 800px;
    padding: 3rem 2rem 1.5rem;
  }
}
</style>
