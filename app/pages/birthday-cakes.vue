<template>
  <div class="min-h-screen bg-black">
    <section class="hero-section">
      <img src="/design-assets/HERO 3 - EATS AND DRINKS.png" alt="Birthday Cakes" class="hero-background" />
      <img src="/design-assets/MAIN LOGO.png" alt="Rowans" class="hero-logo" />
      <h1 class="hero-heading">Birthday<br>Cakes</h1>
    </section>

    <section class="content-section">
      <div class="content-container">
        <img src="/design-assets/PUNK CAKES.png" alt="Punk Cake" class="punk-logo" />

        <p class="content-text">
          Sadly, due to H+S regulations we cannot allow cakes and other food to be brought into the centre.
        </p>
        <p class="content-text">
          Sparklers, candles and knives are also not allowed.
        </p>
        <p class="content-subtext">
          To facilitate your party, Rowans has links with local businesses who supply a range of delicious cupcakes. Click below for info.
        </p>

        <div class="supplier-buttons">
          <a
            href="https://www.punkcake.co.uk"
            target="_blank"
            rel="noopener"
            class="supplier-btn"
          >
            Order Cakes
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

.hero-section {
  position: relative;
  width: 100%;
  min-height: 50vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  opacity: 0.4;
  z-index: 0;
}

.hero-logo {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  height: 100px;
  width: auto;
  z-index: 10;
}

.hero-heading {
  position: relative;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 24px;
  color: #ff0000;
  text-align: center;
  margin: 0;
  z-index: 5;
  line-height: 1.2;
}

.content-section {
  background-color: #000;
  padding: 4rem 2rem;
}

.content-container {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.punk-logo {
  width: 160px;
  height: 160px;
  object-fit: contain;
  margin: 0 auto 2.5rem;
  display: block;
}

.content-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  line-height: 1.8;
  color: #ffffff;
  opacity: 0.85;
  margin-bottom: 1.5rem;
}

.content-subtext {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  line-height: 1.8;
  color: #ffffff;
  opacity: 0.6;
  margin-bottom: 3rem;
}

.supplier-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.supplier-btn {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: #ffffff;
  border: 1px solid rgba(255,255,255,0.4);
  padding: 0.75rem 2rem;
  text-decoration: none;
  letter-spacing: 0.1em;
  transition: border-color 0.2s, opacity 0.2s;
}

.supplier-btn:hover {
  border-color: #ffffff;
  opacity: 0.8;
}

@media (min-width: 768px) {
  .hero-heading { font-size: 36px; }
  .content-text { font-size: 18px; }
  .punk-logo { width: 200px; height: 200px; }
}
</style>
