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
      <h1 class="page-heading">Kids parties</h1>

      <div class="info-text">
        <p>There is a Kid's DJ every Friday and Saturday 12-6.</p>
        <p>For birthday cakes click <NuxtLink to="/birthday-cakes" class="red-link">here.</NuxtLink></p>
        <p>For in-house Taco menu click <NuxtLink to="/yucatan" class="red-link underline">here.</NuxtLink></p>
      </div>

      <!-- Number inputs -->
      <div class="input-row">
        <div class="input-box">
          <span class="input-label">Number of players</span>
          <span class="input-value">072</span>
        </div>
      </div>

      <p class="input-note">6 players per lane - 1 game takes approximately 1hr</p>

      <div class="input-row">
        <div class="input-box">
          <span class="input-label">Number of lanes</span>
          <span class="input-value">009</span>
        </div>
      </div>

      <!-- Calendar placeholder -->
      <div class="calendar-placeholder">
        <p class="placeholder-text">Calendar picker — coming soon</p>
      </div>

      <p class="peak-notice">Please note that evening and weekends are considered peak times and are more expensive</p>

      <!-- Cost breakdown -->
      <div class="cost-table">
        <div class="cost-row">
          <span class="cost-label">Cost per Player</span>
          <span class="cost-value">&pound;8</span>
        </div>
        <div class="cost-row">
          <span class="cost-label">Cost Per lane</span>
          <span class="cost-value">&pound;48</span>
        </div>
        <div class="cost-row">
          <span class="cost-label">Total Cost</span>
          <span class="cost-value">&pound;432</span>
        </div>
      </div>

      <button class="submit-btn">Submit Booking</button>

      <p class="footer-notice">Sadly due to H+S regulations we cannot allow food to be bought into the centre.</p>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "Kids Parties — Rowan's" })
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
  max-width: 700px;
  margin: 0 auto;
  padding: 1rem 2rem 4rem;
  text-align: center;
}

.page-heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 36px;
  color: #ff0000;
  margin: 0 0 1.5rem;
  line-height: 1.1;
}

.info-text {
  margin-bottom: 2.5rem;
}

.info-text p {
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  color: #fff;
  margin: 0.4rem 0;
  line-height: 1.6;
}

.red-link {
  color: #ff0000;
  text-decoration: none;
}

.red-link.underline {
  text-decoration: underline;
}

.red-link:hover {
  text-decoration: underline;
}

.input-row {
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.input-box {
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  color: #fff;
  width: 340px;
}

.input-label {
  flex: 1;
  padding: 0.75rem 1rem;
  text-align: left;
}

.input-value {
  padding: 0.75rem 1rem;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  min-width: 70px;
  text-align: center;
}

.input-note {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #fff;
  margin-bottom: 1rem;
}

.calendar-placeholder {
  border: 1px dashed rgba(255, 255, 255, 0.3);
  padding: 3rem 2rem;
  margin: 2rem auto;
  max-width: 500px;
}

.placeholder-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
}

.peak-notice {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #fff;
  margin-bottom: 1.5rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.cost-table {
  max-width: 360px;
  margin: 0 auto 2rem;
}

.cost-row {
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  color: #fff;
  margin-bottom: -1px;
}

.cost-label {
  flex: 1;
  padding: 0.75rem 1rem;
  text-align: left;
}

.cost-value {
  padding: 0.75rem 1rem;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  min-width: 80px;
  text-align: left;
}

.submit-btn {
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  color: #fff;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 0.75rem 2.5rem;
  cursor: pointer;
  transition: border-color 0.2s, background-color 0.2s;
  margin-bottom: 3rem;
}

.submit-btn:hover {
  border-color: #fff;
  background: rgba(255, 255, 255, 0.05);
}

.footer-notice {
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  color: #fff;
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .site-logo {
    height: 150px;
  }

  .page-heading {
    font-size: 64px;
    margin-bottom: 2rem;
  }

  .info-text p {
    font-size: 18px;
  }

  .input-box {
    font-size: 18px;
    width: 400px;
  }

  .cost-row {
    font-size: 18px;
  }

  .cost-table {
    max-width: 420px;
  }

  .footer-notice {
    font-size: 18px;
  }
}
</style>
