<template>
  <div class="min-h-screen bg-black">
    <section class="hero-section">
      <img src="/design-assets/rowans-yucatan-assets/Yuc_Hi_Res-24.webp" fetchpriority="high" alt="Yucatan Tacos" class="hero-background" />
      <img src="/design-assets/MAIN LOGO.webp" alt="Rowans" class="hero-logo" />
      <h1 class="hero-heading">Yucatan<br>Tacos</h1>
      <p class="hero-sub">Fiercely Authentic Southern Mexican</p>
    </section>

    <section class="content-section">
      <div class="content-container">

        <!-- Menu image -->
        <img
          src="/design-assets/YUCATAN menu 2.jpg.webp"
          loading="lazy"
          alt="Yucatan Menu"
          class="menu-image"
        />

        <!-- Photos -->
        <div class="photo-grid">
          <img src="/design-assets/rowans-yucatan-assets/Yuc_Hi_Res-17.webp" loading="lazy" alt="Yucatan tacos" class="photo" />
          <img src="/design-assets/rowans-yucatan-assets/Yuc_Hi_Res-12.webp" loading="lazy" alt="Yucatan sides" class="photo" />
        </div>

        <!-- PDF menus -->
        <div class="menu-links">
          <a
            href="/design-assets/rowans-yucatan-assets/Yucatan taco .pdf (1).pdf"
            target="_blank"
            rel="noopener"
            class="menu-btn"
          >
            Taco Menu PDF
          </a>
          <a
            href="/design-assets/rowans-yucatan-assets/YUCATAN menu (4).pdf"
            target="_blank"
            rel="noopener"
            class="menu-btn"
          >
            Full Menu PDF
          </a>
          <a
            href="/design-assets/rowans-yucatan-assets/YUCATAN menu Christmas.pdf"
            target="_blank"
            rel="noopener"
            class="menu-btn"
          >
            Christmas Menu
          </a>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "Yucatan Tacos \u2014 Rowan's" })
</script>

<style scoped>

.hero-section {
  position: relative;
  width: 100%;
  min-height: 60vh;
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
  opacity: 0.5;
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
  color: #ffffff;
  opacity: 0.9;
  text-align: center;
  margin: 0 0 0.5rem;
  z-index: 5;
  line-height: 1.2;
}

.hero-sub {
  position: relative;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #ffffff;
  opacity: 0.5;
  text-align: center;
  letter-spacing: 0.1em;
  z-index: 5;
  margin: 0;
}

.content-section {
  background-color: #000;
  padding: 3rem 1.5rem 4rem;
}

.content-container {
  max-width: 900px;
  margin: 0 auto;
}

.menu-image {
  width: 100%;
  max-width: 700px;
  display: block;
  margin: 0 auto 3rem;
}

.photo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 3rem;
}

.photo {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}

.menu-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.menu-btn {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: #ffffff;
  border: 1px solid rgba(255,255,255,0.4);
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: border-color 0.2s, opacity 0.2s;
  white-space: nowrap;
}

.menu-btn:hover {
  border-color: #ffffff;
}

@media (min-width: 768px) {
  .hero-heading { font-size: 48px; }
  .hero-sub { font-size: 14px; }
  .photo-grid { gap: 2rem; }
  .menu-btn { font-size: 14px; }
}
</style>
