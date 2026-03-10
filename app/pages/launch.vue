<template>
  <div class="min-h-screen bg-black">
    <!-- Content with background image -->
    <section class="hero-content">
      <img
        src="/design-assets/LAUNCH HERO.webp"
        fetchpriority="high"
        alt=""
        class="bg-image"
      />

      <div class="content-overlay">
        <h1 class="page-heading">Launch Parties</h1>

        <p class="subtitle">We can host your event</p>

        <div class="contact-events-btn">Contact Events<br>Team</div>

        <div class="contact-box">
          <a href="mailto:rick@rowans.co.uk" class="contact-link">rick@rowans.co.uk</a>
          <a href="tel:+447949722472" class="contact-link">+44 7949 722 472</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "Launch Parties — Rowan's" })
</script>

<style scoped>
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
  padding: calc(4rem + 45px) 2rem 4rem;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: var(--section-heading-weight, 400);
  font-size: 30px;
  color: var(--color-heading, #ff0000);
  margin: 0 0 1.5rem;
  line-height: 1.1;
}

.subtitle {
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  color: #fff;
  margin-bottom: 2rem;
}

.contact-events-btn {
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 1rem 2.5rem;
  display: inline-block;
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

.contact-box {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 1.25rem 2.5rem;
}

.contact-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s;
}

.contact-link:hover {
  opacity: 0.7;
}

@media (min-width: 768px) {
  .page-heading {
    font-size: 70px;
    margin-bottom: 2rem;
  }

  .subtitle {
    font-size: 20px;
    margin-bottom: 2.5rem;
  }

  .contact-events-btn {
    font-size: 18px;
    padding: 1.25rem 3rem;
  }

  .contact-box {
    padding: 1.5rem 3rem;
  }

  .contact-link {
    font-size: 20px;
  }
}

/* 1024px — tablet/small laptop */
@media (min-width: 1024px) {
  .subtitle { font-size: 24px; }
  .contact-events-btn {
    font-size: 22px;
    padding: 1.25rem 3rem;
  }
  .contact-link { font-size: 24px; }
  .content-overlay { max-width: 800px; }
  .contact-box { padding: 1.5rem 3rem; }
}

/* 1440px+ Desktop */
@media (min-width: 1440px) {
  .page-heading {
    font-size: 68px;
  }

  .subtitle {
    font-size: 36px;
  }

  .bg-image {
    opacity: 0.45;
  }

  .content-overlay {
    max-width: 1000px;
  }

  .contact-events-btn {
    font-size: 35px;
    background: #17181a;
    border: 1px solid #535353;
    border-radius: 10px;
    padding: 12px 16px;
    width: 367px;
    height: 119px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 36px;
  }

  .contact-box {
    width: 522px;
    height: 128px;
    background: #17181a;
    border: 1px solid #535353;
    border-radius: 10px;
    padding: 12px 16px;
    justify-content: center;
  }

  .contact-link {
    font-size: 48px;
    line-height: 49px;
  }
}
</style>
