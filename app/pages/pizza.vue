<template>
  <div class="min-h-screen bg-black flex flex-col items-center justify-center">
    <img src="/design-assets/MAIN LOGO.webp" alt="Rowans" class="logo" />
    <h1 class="heading">Yard Sale<br>Pizza</h1>
    <p class="subtext">Taking you to the menu...</p>
    <a href="https://yardsalepizza.com/menu/" target="_blank" rel="noopener" class="menu-btn">
      View Menu
    </a>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "Yard Sale Pizza \u2014 Rowan's" })

onMounted(() => {
  setTimeout(() => {
    window.open('https://yardsalepizza.com/menu/', '_blank')
  }, 1200)
})
</script>

<style scoped>

.logo {
  height: 80px;
  width: auto;
  margin-bottom: 2rem;
  opacity: 0.8;
}

.heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 32px;
  color: #ffffff;
  opacity: 0.9;
  text-align: center;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.subtext {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: #ffffff;
  opacity: 0.4;
  margin-bottom: 2rem;
}

.menu-btn {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: #ffffff;
  border: 1px solid rgba(255,255,255,0.4);
  padding: 0.75rem 2rem;
  text-decoration: none;
  letter-spacing: 0.1em;
  transition: border-color 0.2s;
}

.menu-btn:hover {
  border-color: #ffffff;
}
</style>
