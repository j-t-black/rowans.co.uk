<template>
  <div class="min-h-screen bg-black">
    <section class="hero-section">
      <h1 class="hero-heading">Yucatan Tacos</h1>
      <p class="hero-sub">Pre-Order for your party.</p>
      <a href="mailto:yucatanldntacos@gmail.com" class="contact-btn">Contact Yucatan Tacos</a>
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
  width: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 2rem 48px;
  gap: 3rem;
}

.hero-heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 48px;
  color: #e8000d;
  text-align: center;
  margin: 0;
  line-height: 1.1;
  letter-spacing: 0.06em;
}

.hero-sub {
  font-family: 'JetBrains Mono', monospace;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  margin: 0;
}

.contact-btn {
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 1.25rem 2.5rem;
  text-decoration: none;
  text-align: center;
  transition: border-color 0.2s;
}

.contact-btn:hover {
  border-color: #ffffff;
}

.content-section {
  background-color: #000;
  padding: 1.5rem 1.5rem 4rem;
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
  .hero-section { padding: 32px 2rem 140px; gap: 3.5rem; }
  .hero-heading { font-size: 96px; }
  .hero-sub { font-size: 28px; }
  .contact-btn { font-size: 22px; padding: 1.5rem 3rem; }
  .photo-grid { gap: 2rem; }
  .menu-btn { font-size: 14px; }
}

@media (min-width: 1024px) {
  .hero-sub { font-size: 24px; }
  .contact-btn { font-size: 22px; }
  .content-container { max-width: 800px; }
  .menu-image { max-width: 600px; }
  .menu-btn { font-size: 16px; padding: 0.85rem 1.75rem; }
}

@media (min-width: 1440px) {
  .hero-sub { font-size: 28px; }
  .contact-btn { font-size: 28px; padding: 1.5rem 3.5rem; }
  .content-container { max-width: 1000px; }
  .menu-image { max-width: 750px; }
  .menu-btn { font-size: 20px; padding: 1rem 2rem; }
}
</style>
