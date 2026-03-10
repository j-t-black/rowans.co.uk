<template>
  <div class="min-h-screen bg-black">
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
        <p class="info-text second-info">Please Click on the links below for Rowans downloadable policy documents</p>

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
  opacity: 0.35;
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
  font-weight: var(--section-heading-weight, 400);
  font-size: var(--section-heading-size, 46px);
  color: var(--color-heading, #ff0000);
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

/* 1024px intermediate */
@media (min-width: 1024px) {
  .info-text {
    font-size: 24px;
  }

  .content-overlay {
    max-width: 1000px;
  }

  .policy-grid {
    max-width: 800px;
  }

  .policy-btn {
    font-size: 22px;
    padding: 2rem 1.5rem;
  }
}

/* 1440px+ Figma Desktop */
@media (min-width: 1440px) {
  .page-heading {
    font-size: 68px;
    margin-bottom: 2rem;
  }

  .info-text {
    font-size: 36px;
  }

  .content-overlay {
    max-width: 1400px;
    padding-top: 5rem;
  }

  .policy-grid {
    max-width: 1200px;
    gap: 2rem;
    margin-top: 4rem;
  }

  .policy-btn {
    font-size: 35px;
    width: 367px;
    height: 119px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #17181a;
    border: 1px solid #535353;
    border-radius: 10px;
    padding: 12px 16px;
    line-height: 36px;
  }
}

@media (max-width: 767px) {
  .content-overlay {
    padding-top: calc(4rem + 45px);
  }

  .page-heading {
    font-size: 30px;
  }

  .second-info {
    margin-top: 0.5rem;
  }

  .policy-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 250px;
    margin: calc(1.5rem + 20px) auto 0;
  }

  .policy-btn {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1rem;
  }
}

@media (max-width: 600px) {
  .policy-grid {
    grid-template-columns: 1fr;
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
