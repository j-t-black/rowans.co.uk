<template>
  <div class="min-h-screen bg-black">
    <!-- Compact logo header -->
    <header class="logo-header">
      <NuxtLink to="/">
        <img src="/design-assets/MAIN LOGO.webp" alt="Rowans" class="site-logo" />
      </NuxtLink>
    </header>

    <!-- Content with background image -->
    <section class="hero-content">
      <img
        src="/design-assets/GROUP HERO.webp"
        fetchpriority="high"
        alt=""
        class="bg-image"
      />

      <div class="content-overlay">
        <h1 class="page-heading">Large Group Bookings</h1>
        <p class="subtitle">25-100 people</p>

        <div class="links-section">
          <p>For smaller groups please click <a href="https://www.mybowlingpassport.com/112/6615/book" target="_blank" rel="noopener" class="red-link">here</a></p>
          <p>For larger groups click <a href="mailto:rick@rowans.co.uk" class="red-link">here</a></p>
          <p>For food options click <NuxtLink to="/eats-drinks" class="red-link">here</NuxtLink></p>
        </div>

        <p class="notice">Group booking cannot be made on Friday and Saturdays after 6pm</p>

        <!-- Number inputs -->
        <div class="input-row">
          <div class="input-box">
            <span class="input-label">Number of players</span>
            <span class="input-value">072</span>
          </div>
        </div>

        <p class="input-note">6 players per lane</p>

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
            <span class="cost-value">&pound;9</span>
          </div>
          <div class="cost-row">
            <span class="cost-label">Cost Per lane</span>
            <span class="cost-value">&pound;55</span>
          </div>
          <div class="cost-row">
            <span class="cost-label">Total Cost</span>
            <span class="cost-value">&pound;495</span>
          </div>
        </div>

        <button class="submit-btn">Submit Booking</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "Group Bookings — Rowan's" })
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
  opacity: 0.25;
  z-index: 0;
}

.content-overlay {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 1rem 2rem 4rem;
  max-width: 700px;
  width: 100%;
}

.page-heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 36px;
  color: #ff0000;
  margin: 0 0 0.5rem;
  line-height: 1.1;
}

.subtitle {
  font-family: 'JetBrains Mono', monospace;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
}

.links-section {
  margin-bottom: 1rem;
}

.links-section p {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #fff;
  margin: 0.15rem 0;
  font-weight: 700;
}

.red-link {
  color: #ff0000;
  text-decoration: none;
}

.red-link:hover {
  text-decoration: underline;
}

.notice {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #fff;
  margin-bottom: 2rem;
  font-style: italic;
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
  font-style: italic;
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
}

.submit-btn:hover {
  border-color: #fff;
  background: rgba(255, 255, 255, 0.05);
}

@media (min-width: 768px) {
  .site-logo {
    height: 150px;
  }

  .page-heading {
    font-size: 64px;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 24px;
  }

  .links-section p {
    font-size: 14px;
  }

  .notice {
    font-size: 14px;
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
}
</style>
