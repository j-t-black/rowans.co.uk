<template>
  <div class="min-h-screen bg-black">
    <!-- Compact logo header -->
    <header class="logo-header">
      <NuxtLink to="/">
        <img src="/design-assets/MAIN LOGO.webp" alt="Rowans" class="site-logo" />
      </NuxtLink>
    </header>

    <!-- Page content -->
    <section class="page-content">
      <h1 class="page-heading">Birthday Cake</h1>

      <p class="intro-text">
        To facilitate your party Rowans has links with 2 local businesses
        who supply a range of delicious cupcakes for your birthday party.
        Click below for info
      </p>

      <div class="supplier-logos">
        <a href="https://www.eggfreecake.co.uk" target="_blank" rel="noopener" class="supplier-link">
          <div class="cake-box-placeholder">
            <span>Cake Box</span>
          </div>
        </a>
        <a href="https://www.punkcake.co.uk" target="_blank" rel="noopener" class="supplier-link">
          <img src="/design-assets/PUNK CAKES.webp" loading="lazy" alt="Punk Cake" class="supplier-logo punk" />
        </a>
      </div>

      <p class="warning-text">
        Sadly, due to H+S regulations we cannot allow other cakes and
        food to be bought into the centre.
      </p>

      <p class="warning-text">
        Sparklers, Candles, Knives are also obviously not allowed.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "Birthday Cake — Rowan's" })
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

.page-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem 2rem 4rem;
  text-align: center;
}

.page-heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 48px;
  color: #ff0000;
  margin: 0 0 2rem;
  line-height: 1.1;
}

.intro-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  line-height: 1.7;
  color: #fff;
  margin-bottom: 3rem;
  text-align: left;
}

.supplier-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin-bottom: 3rem;
}

.supplier-link {
  display: block;
}

.cake-box-placeholder {
  width: 180px;
  height: 180px;
  background: #d4b8c8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: #333;
}

.supplier-logo.punk {
  width: 180px;
  height: 180px;
  object-fit: contain;
  border-radius: 50%;
  background: #fff;
}

.warning-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  line-height: 1.7;
  color: #fff;
  margin-bottom: 1.5rem;
  text-align: center;
}

@media (min-width: 768px) {
  .site-logo {
    height: 150px;
  }

  .page-heading {
    font-size: 80px;
    margin-bottom: 2.5rem;
  }

  .intro-text {
    font-size: 20px;
  }

  .warning-text {
    font-size: 20px;
  }
}

@media (max-width: 500px) {
  .supplier-logos {
    gap: 2rem;
  }

  .cake-box-placeholder,
  .supplier-logo.punk {
    width: 130px;
    height: 130px;
  }
}
</style>
