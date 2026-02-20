<template>
  <div class="min-h-screen bg-black">
    <!-- Compact logo header -->
    <header class="logo-header">
      <NuxtLink to="/">
        <img src="/design-assets/MAIN LOGO.webp" alt="Rowans" class="site-logo" />
      </NuxtLink>
    </header>

    <!-- Party section with video background -->
    <section class="party-section">
      <video
        class="party-background"
        src="/videos/party-bg.mp4"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
      />

      <h2 class="page-heading">Organise your party</h2>

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
  </div>
</template>

<script setup lang="ts">
useHead({ title: "Organise Your Party — Rowan's" })
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

.party-section {
  position: relative;
  width: 100%;
  min-height: 70vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
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

.page-heading {
  position: relative;
  z-index: 1;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 40px;
  color: #ff0000;
  text-align: center;
  margin-bottom: 2.5rem;
}

.party-buttons {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
}

.party-button {
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/design-assets/BUTTON BASE.webp');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
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

@media (max-width: 600px) {
  .party-buttons {
    gap: 0.4rem;
  }

  .party-button {
    width: 78px;
    height: 78px;
    font-size: 9px;
    padding: 0.5rem;
  }

  .page-heading {
    font-size: 28px;
  }
}

@media (min-width: 768px) {
  .site-logo {
    height: 150px;
  }

  .page-heading {
    font-size: 70px;
    margin-bottom: 3rem;
  }
}

@media (min-width: 1920px) {
  .party-buttons {
    gap: 3rem;
  }

  .party-button {
    width: 180px;
    height: 180px;
    font-size: 14px;
  }
}
</style>
