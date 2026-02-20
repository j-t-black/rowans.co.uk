<template>
  <div class="page">

    <header class="page-header">
      <h1 class="heading">What's on</h1>
      <a href="/line-upsevents" class="click-link">
        Click here for Rowans events and DJ line up for forthcoming weeks
      </a>
      <p class="id-notice">Over 21 ID Required on Fridays and Saturday nights after 7pm</p>
    </header>

    <section class="photo-grid">
      <img src="/design-assets/whats-on-dancefloor.webp" alt="Rowans dancefloor" class="photo" />
      <img src="/design-assets/whats-on-dj.webp" alt="Rowans event" class="photo" />
      <img src="/design-assets/whats-on-underground.webp" alt="Upstairs to the Underground" class="photo" />
      <img src="/design-assets/whats-on-summer-sessions.webp" alt="Rowans Summer Sessions" class="photo" />
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({ title: "What's On \u2014 Rowan's" })
</script>

<style scoped>

.page {
  min-height: 100vh;
  background-color: #000;
  padding: 0;
}

.page-header {
  padding: 2.5rem 1.5rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 28px;
  color: #ff3333;
  margin: 0;
  line-height: 1.1;
}

.click-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: #ffffff;
  opacity: 0.9;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-align: center;
  max-width: 600px;
  line-height: 1.5;
}

.click-link:hover {
  opacity: 0.6;
}

.id-notice {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #ffffff;
  opacity: 0.6;
  margin: 0;
  text-align: center;
  max-width: 500px;
  line-height: 1.5;
}

.photo-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  width: 100%;
}

.photo {
  width: 100%;
  display: block;
  object-fit: cover;
}

/* Tablet+: 2 columns */
@media (min-width: 640px) {
  .heading {
    font-size: 38px;
  }

  .click-link {
    font-size: 14px;
  }

  .id-notice {
    font-size: 12px;
  }

  .photo-grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Desktop */
@media (min-width: 1280px) {
  .page-header {
    padding: 3rem 2rem 2.5rem;
    gap: 1rem;
  }

  .heading {
    font-size: 60px;
  }

  .click-link {
    font-size: 16px;
    max-width: 800px;
  }

  .id-notice {
    font-size: 14px;
    max-width: 700px;
  }
}
</style>
