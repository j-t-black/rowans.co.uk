
<template>
  <div class="min-h-screen bg-black">
    <!-- Hero Section -->
    <section class="hero-section">
      <!-- Background Image -->
      <img
        src="/design-assets/LAUNCH HERO.png"
        alt="Launch Parties"
        class="hero-background"
      />

      <!-- Logo at top center -->
      <img
        src="/design-assets/MAIN LOGO.png"
        alt="Rowans Bowling"
        class="hero-logo"
      />

      <!-- Navigation Buttons -->
      <!-- Page Title -->
      <h1 class="hero-heading">Launch Parties</h1>
    </section>

    <!-- Content Section -->
    <section class="content-section">
      <div class="content-container">
        <p class="content-text">
          Make your product launch unforgettable at Rowan's.<br><br>
          2 levels of entertainment, world-class sound, and a venue<br>
          that will leave a lasting impression on your guests.
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
            <a href="/launch">Launch Parties</a>
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

  }
</style>
