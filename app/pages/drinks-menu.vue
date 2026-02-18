<template>
  <div class="min-h-screen bg-black">
    <section class="hero-section">
      <img src="/design-assets/HERO 3 - EATS AND DRINKS.png" alt="Drinks Menu" class="hero-background" />
      <img src="/design-assets/MAIN LOGO.png" alt="Rowans" class="hero-logo" />
      <h1 class="hero-heading">Bar Menu</h1>
    </section>

    <section class="menu-section">
      <iframe
        src="/design-assets/DRINKS MENU HTML 5/index.html"
        class="menu-frame"
        title="Rowans Bar Menu"
        scrolling="yes"
      />
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

.hero-section {
  position: relative;
  width: 100%;
  min-height: 40vh;
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
}

.menu-section {
  background-color: #000;
  width: 100%;
}

.menu-frame {
  width: 100%;
  min-height: 100vh;
  border: none;
  display: block;
  background-color: #000;
}

@media (min-width: 768px) {
  .hero-heading { font-size: 36px; }
}
</style>
