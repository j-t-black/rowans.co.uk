<script setup>
definePageMeta({
  layout: false
})
</script>

<template>
  <div class="min-h-screen bg-black">
    <!-- Hero Section -->
    <section class="hero-section">
      <!-- Background Image -->
      <img
        src="/design-assets/HERO 1.4 CLEAN LINES - NEW 16.png"
        alt="Rowans Venue"
        class="hero-background"
      />

      <!-- Logo at top center -->
      <img
        src="/design-assets/MAIN LOGO.png"
        alt="Rowans Bowling"
        class="hero-logo"
      />

      <!-- Heading -->
      <h1 class="hero-heading">
        Iconic Venue in<br>
        London's Finsbury Park
      </h1>

      <!-- Buttons on right side -->
      <div class="hero-buttons">
        <a href="#book" class="hero-button">
          <img
            src="/design-assets/LANE TRANS 1.png"
            alt="Book a Lane"
            class="button-icon"
          />
        </a>
        <a href="#menu" class="hero-button">
          <img
            src="/design-assets/BURGER TRANS 1.png"
            alt="Menu"
            class="button-icon"
          />
        </a>
      </div>
    </section>

    <!-- Venue Features Section -->
    <section class="venue-features-section">
      <p class="venue-features-text">
        2 levels of...<br><br>
        World-class Sound,<br>
        Intelligent Lighting + video,<br>
        2 Dancefloors,<br>
        24 Bowling lanes,<br>
        14 Pool tables,<br>
        6 Karaoke booths, 4 Bars,<br>
        Garden with seating + sound,<br>
        Arcade
      </p>
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
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-logo {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  height: 120px;
  width: auto;
  z-index: 10;
}

.hero-heading {
  position: relative;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.32;
  color: #ffffff;
  opacity: 0.8;
  text-align: center;
  margin: 0;
  z-index: 5;
}

.hero-buttons {
  position: fixed;
  top: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 9999;
}

.hero-button {
  width: 45px;
  height: 44px;
  display: block;
  transition: opacity 0.2s;
}

.hero-button:hover {
  opacity: 0.8;
}

.button-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Desktop styles (1920px+) */
@media (min-width: 1920px) {
  .hero-heading {
    font-size: 36px;
    line-height: 1.32;
  }

  .hero-logo {
    top: 100px;
    height: 180px;
  }

  .hero-buttons {
    top: 20px;
    right: 20px;
    gap: 16px;
  }

  .hero-button {
    width: 60px;
    height: 58px;
  }
}

/* Tablet/Medium Desktop */
@media (min-width: 768px) and (max-width: 1919px) {
  .hero-heading {
    font-size: 28px;
  }

  .hero-logo {
    height: 150px;
  }

  .hero-button {
    width: 52px;
    height: 51px;
  }
}

/* Venue Features Section */
.venue-features-section {
  position: relative;
  width: 100%;
  min-height: 60vh;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
}

.venue-features-text {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.45;
  color: #ffffff;
  opacity: 0.9;
  text-align: center;
  margin: 0;
  max-width: 600px;
}

/* Desktop styles for venue features */
@media (min-width: 1920px) {
  .venue-features-text {
    font-size: 24px;
    line-height: 1.5;
    max-width: 1920px;
  }
}

/* Tablet/Medium Desktop for venue features */
@media (min-width: 768px) and (max-width: 1919px) {
  .venue-features-text {
    font-size: 22px;
    max-width: 900px;
  }
}
</style>
