<template>
  <div class="page">
    <header class="page-header">
      <h1 class="heading">Rowans Merch</h1>
    </header>
    <div class="image-wrap">
      <img src="/design-assets/merch-vinyl-logo.webp" alt="Rowans" class="logo-image" />
    </div>
    <p class="coming-soon">Coming soon.</p>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "Merch — Rowan's" })
</script>

<style scoped>

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
  font-weight: var(--section-heading-weight, 400);
  font-size: var(--section-heading-size, 46px);
  color: var(--color-heading, #ff0000);
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

@media (min-width: 1024px) {
  .heading {
    font-size: 42px;
  }

  .image-wrap {
    max-width: 700px;
    padding: 2.5rem 1.5rem 1rem;
  }

  .coming-soon {
    font-size: 16px;
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

/* 1440px+ Figma Desktop */
@media (min-width: 1440px) {
  .page {
    position: relative;
    overflow: hidden;
  }

  /* Heading: centered across full viewport — explicit width + text-align */
  .page-header {
    width: 100%;
    text-align: center;
    align-self: center;
    padding: 2rem 0 0;
  }

  .heading {
    font-size: 68px;
  }

  /* Logo: positioned at left edge, half-clipped, filling viewport height */
  .image-wrap {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
    width: 70%;
    max-width: none;
    padding: 0;
  }

  .logo-image {
    opacity: 0.35;
    width: 100%;
  }

  .coming-soon {
    display: none;
  }
}
</style>
