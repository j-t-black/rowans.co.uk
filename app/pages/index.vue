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

    </section>

    <!-- Welcome to Rowans Section -->
    <section class="welcome-section">
      <h2 class="welcome-heading">Welcome to Rowans</h2>
      <p class="welcome-text welcome-features">
        2 levels of...<br><br>
        World-class Sound, Intelligent Lighting and video, 2 Distinct Dancefloors,<br>
        24 bowling lanes, 14 Pool tables, 6 Private Karaoke booths,<br>
        4 Bars, Outback Garden with seating and sound system,<br>
        Arcade
      </p>
    </section>

    <!-- Organise Your Party Section -->
    <section class="party-section">
      <!-- Background Image -->
      <img
        src="/design-assets/GROUP HERO.png"
        alt="Party Background"
        class="party-background"
      />

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

      <!-- Food Images -->
      <div class="eats-images">
        <div class="eats-image-wrapper">
          <img src="/design-assets/POSTER 1.jpg" alt="Food" class="eats-image" />
        </div>
        <div class="eats-image-wrapper">
          <img src="/design-assets/POSTER 2.jpg" alt="Food" class="eats-image" />
        </div>
        <div class="eats-image-wrapper">
          <img src="/design-assets/POSTER 3.jpg" alt="Food" class="eats-image" />
        </div>
        <div class="eats-image-wrapper">
          <img src="/design-assets/POSTER 4.jpg" alt="Food" class="eats-image" />
        </div>
      </div>

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
          Void Accoustics and Funktion One sound-systems across the venue<br>
          Playing big basslines.<br>
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
        <div class="visit-card">
          <h3>Rowans Radio</h3>
          <div class="visit-hours">
            <p>Monday - Thursday<br>Live DJ Sets</p>
            <p>Friday - Saturday<br>Late Night Vibes</p>
            <p>Sunday<br>Chill Sessions</p>
          </div>
          <a href="/radio" class="visit-button">LISTEN NOW</a>
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

}

/* Tablet/Medium Desktop */
@media (min-width: 768px) and (max-width: 1919px) {
  .hero-heading {
    font-size: 28px;
  }

  .hero-logo {
    height: 150px;
  }

}

/* Welcome Section */
.welcome-section {
  position: relative;
  width: 100%;
  min-height: 50vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
}

.welcome-heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 32px;
  color: #ff0000;
  margin-bottom: 2rem;
  text-transform: none;
}

.welcome-text {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.8;
  color: #ffffff;
  opacity: 0.85;
  margin: 0;
  max-width: 800px;
}

.welcome-intro {
  margin-bottom: 3rem;
}

.welcome-features {
  line-height: 1.6;
  opacity: 0.9;
}

/* Desktop styles for welcome section */
@media (min-width: 1920px) {
  .welcome-heading {
    font-size: 48px;
    margin-bottom: 2.5rem;
  }

  .welcome-text {
    font-size: 22px;
    line-height: 1.7;
    max-width: 1000px;
  }
}

/* Tablet/Medium Desktop for welcome section */
@media (min-width: 768px) and (max-width: 1919px) {
  .welcome-heading {
    font-size: 40px;
  }

  .welcome-text {
    font-size: 20px;
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
  overflow: hidden;
}

.party-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  z-index: 0;
}

.party-heading {
  position: relative;
  z-index: 1;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  opacity: 0.9;
  margin-bottom: 3rem;
}

.party-buttons {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  justify-content: center;
}

.party-button {
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/design-assets/BUTTON BASE.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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
  opacity: 0.8;
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

.eats-images {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.eats-image-wrapper {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.eats-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Desktop styles for eats images */
@media (min-width: 1920px) {
  .eats-images {
    gap: 3rem;
  }

  .eats-image-wrapper {
    width: 280px;
    height: 280px;
  }
}

/* Tablet/Medium Desktop for eats images */
@media (min-width: 768px) and (max-width: 1919px) {
  .eats-image-wrapper {
    width: 240px;
    height: 240px;
  }
}

.eats-buttons {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  justify-content: center;
}

.eats-button {
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/design-assets/BUTTON BASE.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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
  opacity: 0.8;
  transform: scale(1.05);
}

/* Audio Section */
.audio-section {
  position: relative;
  width: 100%;
  min-height: 60vh;
  background: linear-gradient(180deg, #000000 0%, #1a0a2e 30%, #2d1b4e 50%, #1a0a2e 70%, #000000 100%);
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
  display: flex;
  flex-direction: row;
  gap: 2rem;
  max-width: 650px;
  margin: 0 auto;
  justify-content: center;
}

.audio-button {
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/design-assets/AUDIO BUTTON.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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
  opacity: 0.8;
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
  font-weight: 700;
  font-size: 24px;
  color: #ff0000;
  margin-bottom: 3rem;
}

.visit-cards {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
}

.visit-card {
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 2rem;
  flex: 1;
  min-width: 300px;
  max-width: 500px;
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
  .eats-buttons {
    gap: 3rem;
  }

  .audio-buttons {
    gap: 3rem;
  }

  .party-button,
  .eats-button {
    width: 180px;
    height: 180px;
    font-size: 14px;
  }

  .audio-button {
    width: 180px;
    height: 180px;
    font-size: 14px;
  }

  .audio-logo {
    max-width: 500px;
  }
}
</style>
