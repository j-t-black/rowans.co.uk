<template>
  <div class="min-h-screen bg-black">
    <!-- Compact logo header -->
    <header class="logo-header">
      <NuxtLink to="/">
        <img src="/design-assets/MAIN LOGO.webp" alt="Rowans" class="site-logo" />
      </NuxtLink>
    </header>

    <!-- Content with background image -->
    <section class="hero-content">
      <img
        src="/design-assets/POLICIES HERO.webp"
        fetchpriority="high"
        alt=""
        class="bg-image"
      />

      <div class="content-overlay">
        <h1 class="page-heading">Rowans Policies</h1>

        <p class="info-text">Over 21 ID Required on Fridays and Saturday nights after 7pm</p>
        <p class="info-text">Please Click on the links below for Rowans downloadable policy documents</p>

        <div class="policy-grid">
          <a href="#" class="policy-btn">Admission<br>Policy</a>
          <a href="#" class="policy-btn">Privacy<br>Notice</a>
          <a href="#" class="policy-btn">Facial<br>Recognition</a>
          <a href="#" class="policy-btn">ID Scanner</a>
          <a href="#" class="policy-btn">CCTV</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "Policies — Rowan's" })
</script>

<style scoped>
.logo-header {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem 1rem;
  background: #000;
}

.site-logo {
  height: 120px;
  width: auto;
}

.hero-content {
  position: relative;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  z-index: 0;
}

.content-overlay {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem 2rem 4rem;
  max-width: 900px;
  width: 100%;
}

.page-heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 40px;
  color: #ff0000;
  margin: 0 0 1.5rem;
  line-height: 1.1;
}

.info-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  color: #fff;
  margin: 0.25rem 0;
  line-height: 1.6;
}

.policy-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.policy-btn {
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  background: rgba(30, 30, 30, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  padding: 1.5rem 1rem;
  text-align: center;
  transition: border-color 0.2s, background-color 0.2s;
  line-height: 1.4;
}

.policy-btn:hover {
  border-color: #fff;
  background: rgba(255, 255, 255, 0.08);
}

/* Second row: 2 items centered */
.policy-btn:nth-child(4) {
  grid-column: 1 / 2;
  margin-left: auto;
  width: 100%;
}

.policy-btn:nth-child(5) {
  grid-column: 2 / 3;
}

@media (min-width: 768px) {
  .site-logo {
    height: 150px;
  }

  .page-heading {
    font-size: 70px;
    margin-bottom: 2rem;
  }

  .info-text {
    font-size: 18px;
  }

  .policy-btn {
    font-size: 18px;
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 600px) {
  .policy-grid {
    grid-template-columns: 1fr 1fr;
  }

  .policy-btn:nth-child(4) {
    grid-column: auto;
    margin-left: 0;
  }

  .policy-btn:nth-child(5) {
    grid-column: auto;
  }
}
</style>
