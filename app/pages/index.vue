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

    <!-- Organise Your Party Section -->
    <section class="party-section">
      <h2 class="party-heading">Organise your party...</h2>
      <div class="party-buttons">
        <a href="/groups" class="party-button">
          LARGE<br>GROUPS
        </a>
        <a href="/kids" class="party-button">
          KIDS
        </a>
        <a href="/corporate" class="party-button">
          CORPORATE
        </a>
        <a href="/launch" class="party-button">
          LAUNCH<br>PARTIES
        </a>
      </div>
    </section>

    <!-- Eats + Drinks Section -->
    <section class="eats-section">
      <h2 class="eats-heading">Eats + Drinks</h2>
      <p class="eats-text">
        Signature frozen cocktails, Authentic southern Mexican taco's, Artisan sourdough pizza
      </p>
      <div class="eats-buttons">
        <a href="/birthday-cakes" class="eats-button">
          BIRTHDAY<br>CAKES
        </a>
        <a href="/drinks-menu" class="eats-button">
          DRINKS MENU
        </a>
        <a href="/yucatan" class="eats-button">
          YUCATAN<br>TACOS
        </a>
        <a href="/pizza" class="eats-button">
          YARD SALE<br>PIZZA
        </a>
      </div>
    </section>

    <!-- Audio Section -->
    <section class="audio-section">
      <img
        src="/design-assets/ROWANS AUDIO LOGO.png"
        alt="Audio"
        class="audio-logo"
      />
      <div class="audio-content">
        <h2 class="audio-heading">AUDIO</h2>
        <p class="audio-text">
          Void Accoustics + Funktion One sound-systems.<br>
          Playing Booty-shaking Classics and Big Basslines.<br>
          Ever evolving line-up and weekly events.
        </p>
      </div>
      <div class="audio-buttons">
        <a href="/whats-on" class="audio-button">
          WHAT'S<br>ON
        </a>
        <a href="/radio" class="audio-button">
          ROWANS<br>RADIO
        </a>
        <a href="/djs" class="audio-button">
          RESIDENT<br>DJ'S
        </a>
      </div>
    </section>

    <!-- Visit Us Section -->
    <section class="visit-section">
      <h2 class="visit-heading">Visit Us</h2>
      <div class="visit-cards">
        <div class="visit-card">
          <h3>Finsbury Park</h3>
          <div class="visit-hours">
            <p>Monday - Thursday<br>5pm - 1am</p>
            <p>Friday - Saturday<br>12pm - 3am</p>
            <p>Sunday<br>12pm - 12am</p>
          </div>
          <a href="#location" class="visit-button">FIND US</a>
        </div>
      </div>
    </section>

    <!-- Location Section -->
    <section class="location-section" id="location">
      <h2 class="location-heading">Location</h2>
      <div class="location-card">
        <h3>Finsbury Park</h3>
        <p class="location-address">
          10 Stroud Green Road<br>
          Finsbury Park<br>
          London N4 2DF
        </p>
        <div class="location-map">
          <p>📍 Map View</p>
        </div>
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
            <a href="/policies">Policies</a>
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

/* Party Section */
.party-section {
  position: relative;
  width: 100%;
  min-height: 60vh;
  background-color: #000000;
  padding: 4rem 2rem;
  text-align: center;
}

.party-heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  opacity: 0.9;
  margin-bottom: 3rem;
}

.party-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 150px));
  gap: 2rem;
  max-width: 700px;
  margin: 0 auto;
  justify-content: center;
}

.party-button {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #ffffff;
  color: #ffffff;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  padding: 1.5rem;
  transition: all 0.2s;
  line-height: 1.3;
}

.party-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
}

/* Eats Section */
.eats-section {
  position: relative;
  width: 100%;
  min-height: 60vh;
  background-color: #000000;
  padding: 4rem 2rem;
  text-align: center;
}

.eats-heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

.eats-text {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  opacity: 0.8;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.eats-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 150px));
  gap: 2rem;
  max-width: 700px;
  margin: 0 auto;
  justify-content: center;
}

.eats-button {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #ffffff;
  color: #ffffff;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  padding: 1.5rem;
  transition: all 0.2s;
  line-height: 1.3;
}

.eats-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
}

/* Audio Section */
.audio-section {
  position: relative;
  width: 100%;
  min-height: 60vh;
  background-color: #000000;
  padding: 4rem 2rem;
  text-align: center;
}

.audio-logo {
  max-width: 400px;
  width: 100%;
  height: auto;
  margin: 0 auto 2rem;
  display: block;
}

.audio-content {
  margin-bottom: 3rem;
}

.audio-heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

.audio-text {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  opacity: 0.8;
  margin: 0 auto;
  max-width: 700px;
  line-height: 1.6;
}

.audio-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 150px));
  gap: 2rem;
  max-width: 550px;
  margin: 0 auto;
  justify-content: center;
}

.audio-button {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #ffffff;
  color: #ffffff;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  padding: 1.5rem;
  transition: all 0.2s;
  line-height: 1.3;
}

.audio-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
}

/* Visit Section */
.visit-section {
  position: relative;
  width: 100%;
  min-height: 50vh;
  background-color: #000000;
  padding: 4rem 2rem;
  text-align: center;
}

.visit-heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  opacity: 0.9;
  margin-bottom: 3rem;
}

.visit-cards {
  max-width: 500px;
  margin: 0 auto;
}

.visit-card {
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 2rem;
}

.visit-card h3 {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

.visit-hours {
  color: #9ca3af;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.visit-hours p {
  margin: 1rem 0;
}

.visit-button {
  display: block;
  background-color: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  transition: all 0.2s;
}

.visit-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Location Section */
.location-section {
  position: relative;
  width: 100%;
  min-height: 50vh;
  background-color: #000000;
  padding: 4rem 2rem;
  text-align: center;
}

.location-heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  opacity: 0.9;
  margin-bottom: 3rem;
}

.location-card {
  max-width: 800px;
  margin: 0 auto;
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 2rem;
}

.location-card h3 {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 1rem;
}

.location-address {
  color: #9ca3af;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.location-map {
  background-color: #e5e7eb;
  height: 300px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 1.125rem;
}

/* Footer */
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

/* Desktop Responsive */
@media (min-width: 1920px) {
  .party-heading,
  .eats-heading,
  .audio-heading,
  .visit-heading,
  .location-heading {
    font-size: 32px;
  }

  .party-buttons,
  .eats-buttons,
  .audio-buttons {
    grid-template-columns: repeat(4, 180px);
    gap: 3rem;
  }

  .party-button,
  .eats-button,
  .audio-button {
    font-size: 14px;
    padding: 2rem;
  }

  .audio-logo {
    max-width: 500px;
  }
}
</style>
