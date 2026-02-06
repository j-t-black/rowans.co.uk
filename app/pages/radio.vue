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
        src="/design-assets/ROWANS RADIO HERO.png"
        alt="Rowans Radio"
        class="hero-background"
      />

      <!-- Logo at top center -->
      <img
        src="/design-assets/MAIN LOGO.png"
        alt="Rowans Bowling"
        class="hero-logo"
      />

      <!-- Navigation Buttons -->
      <div class="hero-buttons">
        <a href="/" class="hero-button">
          <img
            src="/design-assets/LANE TRANS 1.png"
            alt="Book a Lane"
            class="button-icon"
          />
        </a>
        <a href="/" class="hero-button">
          <img
            src="/design-assets/BURGER TRANS 1.png"
            alt="Menu"
            class="button-icon"
          />
        </a>
      </div>

      <!-- Page Title -->
      <h1 class="hero-heading">Rowans Radio</h1>
    </section>

    <!-- Content Section -->
    <section class="content-section">
      <div class="content-container">
        <p class="content-text">
          Tune in to Rowans Radio for the best in underground music.<br><br>
          Live sets, DJ mixes, and exclusive content from our resident artists.
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Visit Us</h3>
          <p>10 Stroud Green Road<br>Finsbury Park<br>London N4 2DF</p>
        </div>
        <div class="footer-section">
          <h3>Opening Hours</h3>
          <p>Mon-Thu: 5pm - 1am<br>Fri-Sat: 12pm - 3am<br>Sun: 12pm - 12am</p>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <nav>
            <a href="/">Home</a>
            <a href="/radio">Radio</a>
          </nav>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 Rowan's. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
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
  font-size: 36px;
  line-height: 1.32;
  color: #ffffff;
  opacity: 0.9;
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

.content-section {
  background-color: #000000;
  padding: 4rem 2rem;
  min-height: 50vh;
}

.content-container {
  max-width: 800px;
  margin: 0 auto;
}

.content-text {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.8;
  color: #ffffff;
  opacity: 0.9;
  text-align: center;
}

.footer {
  background-color: #17181a;
  color: #ffffff;
  padding: 4rem 2rem;
}

.footer-content {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.footer-section h3 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 1rem;
  color: #ffffff;
}

.footer-section p {
  color: #9ca3af;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  line-height: 1.8;
}

.footer-section nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-section nav a {
  color: #9ca3af;
  text-decoration: none;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-section nav a:hover {
  color: #ffffff;
}

.footer-bottom {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #374151;
  text-align: center;
  color: #9ca3af;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
}

@media (min-width: 1920px) {
  .hero-heading {
    font-size: 48px;
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
</style>
