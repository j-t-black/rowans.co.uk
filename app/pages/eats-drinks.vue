<template>
  <div class="min-h-screen bg-black">
    <section class="hero-section">
      <img
        src="/design-assets/eats-drinks-hero.webp"
        alt="Eats and Drinks"
        class="hero-background"
        loading="lazy"
      />

      <h2 class="page-heading">Eats + Drinks</h2>

      <p class="hero-text">
        Signature Frozen Cocktails, Authentic Southern Mexican Tacos<br>
        Artisan Sourdough Pizza
      </p>

      <div class="hero-buttons">
        <a href="/birthday-cakes" class="hero-button">
          BIRTHDAY<br>CAKES
        </a>
        <a href="/drinks-menu" class="hero-button">
          DRINKS MENU
        </a>
        <a href="/yucatan" class="hero-button">
          YUCATAN<br>TACOS
        </a>
        <a href="/pizza" class="hero-button">
          YARD SALE<br>PIZZA
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "Eats + Drinks — Rowan's" })
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 24px 2rem 2rem;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
  z-index: 0;
}

.page-heading {
  position: relative;
  z-index: 1;
  font-family: 'JetBrains Mono', monospace;
  font-weight: var(--section-heading-weight, 400);
  font-size: var(--section-heading-size, 46px);
  color: var(--color-heading, #ff0000);
  text-align: center;
  margin-bottom: 1rem;
}

.hero-text {
  position: relative;
  z-index: 1;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: #ffffff;
  opacity: 0.8;
  text-align: center;
  margin: 0 0 2.5rem;
  line-height: 1.6;
}

.hero-buttons {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
}

.hero-button {
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/design-assets/BUTTON BASE.webp');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  padding: 1.5rem;
  transition: all 0.2s;
  line-height: 1.3;
}

.hero-button:hover {
  opacity: 0.8;
  transform: scale(1.05);
}

@media (max-width: 600px) {
  .hero-buttons {
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .hero-button {
    width: 78px;
    height: 78px;
    font-size: 9px;
    padding: 0.5rem;
  }

  .page-heading {
    font-size: 28px;
  }

  .hero-text {
    font-size: 12px;
  }
}

@media (min-width: 768px) {
  .page-heading {
    font-size: 70px;
    margin-bottom: 1.5rem;
  }

  .hero-text {
    font-size: 16px;
  }
}

@media (min-width: 1920px) {
  .hero-buttons {
    gap: 3rem;
  }

  .hero-button {
    width: 180px;
    height: 180px;
    font-size: 14px;
  }

  .hero-text {
    font-size: 18px;
  }
}
</style>
