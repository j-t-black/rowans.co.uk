<template>
  <div class="page">

    <header class="page-header">
      <h1 class="heading">Eats + Drinks</h1>
    </header>

    <section class="menu-section">
      <img
        src="/design-assets/YUCATAN menu 2.jpg.jpeg"
        alt="Yucatan Tacos Menu"
        class="menu-image"
      />
      <p class="pre-order">Pre-Order for your party.</p>
    </section>

    <nav class="links-section">
      <a href="/yucatan" class="link-item">
        <span class="link-title">Yucatan Tacos</span>
        <span class="link-arrow">→</span>
      </a>
      <a href="/drinks-menu" class="link-item">
        <span class="link-title">Drinks Menu</span>
        <span class="link-arrow">→</span>
      </a>
      <a href="/birthday-cakes" class="link-item">
        <span class="link-title">Birthday Cakes</span>
        <span class="link-arrow">→</span>
      </a>
      <a href="/pizza" class="link-item">
        <span class="link-title">Pizza</span>
        <span class="link-arrow">→</span>
      </a>
    </nav>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

.page {
  min-height: 100vh;
  background-color: #000;
}

.page-header {
  padding: 2.5rem 1.5rem 1.5rem;
  text-align: center;
}

.heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 28px;
  color: #ff3333;
  margin: 0;
  line-height: 1.1;
}

.menu-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem 2rem;
  gap: 1.5rem;
}

.menu-image {
  width: 100%;
  max-width: 500px;
  display: block;
}

.pre-order {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: #ffffff;
  opacity: 0.8;
  margin: 0;
  text-align: center;
}

.links-section {
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
}

.link-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  text-decoration: none;
  transition: background-color 0.15s;
}

.link-item:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.link-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  color: #ffffff;
  opacity: 0.9;
}

.link-arrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  color: #ffffff;
  opacity: 0.5;
}

@media (min-width: 640px) {
  .heading {
    font-size: 42px;
  }

  .link-title {
    font-size: 18px;
  }
}

@media (min-width: 1280px) {
  .heading {
    font-size: 60px;
  }

  .menu-image {
    max-width: 600px;
  }

  .pre-order {
    font-size: 16px;
  }

  .links-section {
    max-width: 800px;
  }

  .link-item {
    padding: 1.5rem 2rem;
  }

  .link-title {
    font-size: 22px;
  }
}
</style>
