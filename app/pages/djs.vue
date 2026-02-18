
<template>
  <div class="min-h-screen bg-black">
    <section class="hero-section">
      <img src="/design-assets/ROWANS RADIO HERO.png" alt="Djs" class="hero-background" />
      <img src="/design-assets/MAIN LOGO.png" alt="Rowans" class="hero-logo" />
      <h1 class="hero-heading">Djs</h1>
    </section>

    <section class="content-section">
      <div class="content-container">
        <p class="content-text">Coming soon...</p>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Visit Us</h3>
          <p>10 Stroud Green Road<br>Finsbury Park<br>London N4 2DF</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 Rowan's. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');
.hero-section { position: relative; width: 100%; min-height: 100vh; background-color: #000000; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; overflow: hidden; }
.hero-background { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
.hero-logo { position: absolute; top: 60px; left: 50%; transform: translateX(-50%); height: 120px; width: auto; z-index: 10; }
.hero-heading { position: relative; font-family: 'JetBrains Mono', monospace; font-weight: 400; font-size: 36px; color: #ffffff; opacity: 0.9; text-align: center; margin: 0; z-index: 5; }
.content-section { background-color: #000000; padding: 4rem 2rem; min-height: 50vh; }
.content-container { max-width: 800px; margin: 0 auto; }
.content-text { font-family: 'JetBrains Mono', monospace; font-size: 18px; line-height: 1.8; color: #ffffff; opacity: 0.9; text-align: center; }
.footer { background-color: #17181a; color: #ffffff; padding: 4rem 2rem; }
.footer-content { max-width: 1280px; margin: 0 auto; }
.footer-section h3 { font-family: 'JetBrains Mono', monospace; font-size: 18px; margin-bottom: 1rem; }
.footer-section p { color: #9ca3af; font-family: 'JetBrains Mono', monospace; font-size: 14px; line-height: 1.8; }
.footer-bottom { margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #374151; text-align: center; color: #9ca3af; font-family: 'JetBrains Mono', monospace; font-size: 14px; }
</style>
