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
        2 levels of...
      </p>
      <p class="welcome-text welcome-features">
        World-class Sound, Intelligent Lighting and video, 2 Distinct Dancefloors,<br>
        24 bowling lanes, 14 Pool tables, 6 Private Karaoke booths,<br>
        4 Bars, Outback Garden with seating and sound system,<br>
        Arcade
      </p>
    </section>

    <!-- Organise Your Party Section -->
    <section class="party-section">
      <!-- Background Video -->
      <video
        class="party-background"
        src="/videos/party-bg.mp4"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
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

      <div class="eats-image-container">
        <img src="/design-assets/eats-drinks-hero.png" alt="Eats and Drinks" class="eats-hero-image" />
        <div class="eats-gradient-top" />
        <div class="eats-gradient-bottom" />
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
      </div>
    </section>

    <!-- Audio Section -->
    <section class="audio-section">
      <!-- Background Video -->
      <video
        class="audio-background"
        src="/videos/audio-bg.mp4"
        autoplay
        muted
        loop
        playsinline
        preload="none"
      />
      <img
        src="/design-assets/ROWANS AUDIO LOGO.png"
        alt="Audio"
        class="audio-logo"
      />
      <div class="audio-content">
        <h2 class="audio-heading">AUDIO</h2>
        <p class="audio-text">
          Void Acoustics and Funktion One sound-systems across the venue. Playing big basslines. Ever evolving line-up and weekly events.
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
          <h3>Location</h3>
          <div class="visit-hours">
            <p>Rowans Tenpin Bowl<br>10 Stroud Green Road</p>
            <p>Finsbury Park<br>London N4 2DF</p>
          </div>
          <a href="https://maps.google.com/?q=Rowans+Tenpin+Bowl,+10+Stroud+Green+Road,+Finsbury+Park,+London+N4+2DF" target="_blank" rel="noopener" class="visit-button">FIND US</a>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section" id="location">
      <a
        href="https://maps.google.com/?q=Rowans+Tenpin+Bowl,+10+Stroud+Green+Road,+Finsbury+Park,+London+N4+2DF"
        target="_blank"
        rel="noopener"
        class="map-link"
      >
        <span class="map-pin">📍</span>
      </a>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p class="footer-copy">© {{ new Date().getFullYear() }} Rowan's. All rights reserved.</p>
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
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2rem;
  text-align: center;
}

.welcome-heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 32px;
  color: #ff0000;
  margin-bottom: 1rem;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 2rem 2rem;
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
  opacity: 0.6;
  z-index: 0;
}

.party-heading {
  position: relative;
  z-index: 1;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  opacity: 0.9;
  margin-bottom: 1.5rem;
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
  background-color: #000000;
  padding: 1.25rem 2rem;
  text-align: center;
}

.eats-heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 24px;
  color: #ff0000;
  opacity: 0.9;
  margin-bottom: 0.75rem;
}

.eats-text {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  opacity: 0.8;
  margin-bottom: 1rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.eats-image-container {
  position: relative;
  width: 100%;
}

.eats-hero-image {
  width: 100%;
  height: auto;
  display: block;
}

.eats-gradient-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 35%;
  background: linear-gradient(to bottom, #000000, transparent);
  pointer-events: none;
  z-index: 1;
}

.eats-gradient-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55%;
  background: linear-gradient(to bottom, transparent, #000000);
  pointer-events: none;
  z-index: 1;
}

.eats-buttons {
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: center;
  padding: 0 1rem;
  z-index: 2;
}

.eats-button {
  position: relative;
  width: 80px;
  height: 80px;
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
  font-size: 9px;
  text-align: center;
  text-decoration: none;
  padding: 0.75rem;
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
  background-color: #000;
  padding: 4rem 2rem;
  text-align: center;
  overflow: hidden;
}

.audio-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.55;
  z-index: 0;
}

.audio-logo {
  position: relative;
  z-index: 1;
  max-width: 400px;
  width: 100%;
  height: auto;
  margin: 0 auto 2rem;
  display: block;
}

.audio-content {
  position: relative;
  z-index: 1;
  margin-bottom: 3rem;
}

.audio-heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 24px;
  color: #ff0000;
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
  position: relative;
  z-index: 1;
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
  display: flex;
  flex-direction: column;
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
  margin-top: auto;
}

.visit-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Map Section */
.map-section {
  background-color: #000000;
  padding: 3rem 2rem;
  text-align: center;
}

.map-link {
  display: inline-block;
  text-decoration: none;
}

.map-pin {
  font-size: 48px;
}

/* Footer */
.footer {
  background-color: #000000;
  padding: 2rem;
  text-align: center;
}

.footer-copy {
  color: #9ca3af;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
}

/* Mobile fixes */
@media (max-width: 767px) {
  .welcome-heading {
    font-size: 24px;
  }

  .welcome-text {
    font-size: 15px;
    width: 100%;
    overflow-wrap: break-word;
    word-break: break-word;
  }

  .welcome-text br {
    display: none;
  }

  /* Party: 4-in-a-row on mobile */
  .party-section {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .party-buttons {
    display: flex;
    flex-direction: row;
    gap: 0.4rem;
    max-width: none;
    justify-content: center;
  }

  .party-button {
    width: 78px;
    height: 78px;
    font-size: 9px;
    padding: 0.5rem;
  }

  /* Audio: shrink to fit 3 across */
  .audio-buttons {
    gap: 1rem;
  }

  .audio-button {
    width: 90px;
    height: 90px;
    font-size: 10px;
  }

  .audio-text {
    font-size: 14px;
    overflow-wrap: break-word;
    word-break: break-word;
    padding: 0 0.5rem;
  }

  /* Visit cards: full-width stacked */
  .visit-cards {
    flex-direction: column;
    align-items: stretch;
  }

  .visit-card {
    min-width: unset;
    max-width: unset;
    width: 100%;
  }

  /* Eats: full-width image on mobile, padding only on text */
  .eats-section {
    padding-left: 0;
    padding-right: 0;
  }

  .eats-heading,
  .eats-text {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* Eats buttons: 4-in-a-row below image */
  .eats-buttons {
    position: static;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 0.4rem;
    padding: 1rem 0.5rem;
    margin-top: -1rem;
  }

  .eats-button {
    width: 82px;
    height: 82px;
    font-size: 9px;
    padding: 0.5rem;
  }

  /* Reduce bottom gradient overlap since buttons aren't overlaid */
  .eats-gradient-bottom {
    height: 25%;
  }
}

/* Desktop Responsive */
@media (min-width: 1920px) {
  .party-heading,
  .eats-heading,
  .audio-heading,
  .visit-heading {
    font-size: 32px;
  }

  .party-buttons,
  .eats-buttons {
    gap: 3rem;
  }

  .audio-buttons {
    gap: 3rem;
  }

  .party-button {
    width: 180px;
    height: 180px;
    font-size: 14px;
  }

  .eats-button {
    width: 140px;
    height: 140px;
    font-size: 12px;
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
