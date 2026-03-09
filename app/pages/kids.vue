<template>
  <div class="min-h-screen bg-black">
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
.page-content {
  max-width: 700px;
  margin: 0 auto;
  padding: 1rem 2rem 4rem;
  text-align: center;
}

.page-heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: var(--section-heading-weight, 400);
  font-size: 24px;
  color: var(--color-heading, #ff0000);
  margin: 0 0 0.5rem;
  line-height: 1.1;
  white-space: nowrap;
}

.info-text {
  margin-bottom: 1rem;
}

.info-text p {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #fff;
  margin: 0.15rem 0;
  line-height: 1.6;
  font-weight: 700;
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
  font-size: 14px;
  color: #fff;
  width: 320px;
  max-width: 100%;
}

.input-label {
  flex: 1;
  padding: 0.5rem 1rem;
  text-align: left;
}

.input-value {
  padding: 0.5rem 1rem;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  min-width: 60px;
  text-align: center;
}

.input-note {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #fff;
  margin-bottom: 0.5rem;
}

.calendar-placeholder {
  border: 1px dashed rgba(255, 255, 255, 0.3);
  padding: 1.5rem 2rem;
  margin: 1rem auto;
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
  margin-bottom: 0.75rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.cost-table {
  max-width: 320px;
  margin: 0 auto 1rem;
}

.cost-row {
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: #fff;
  margin-bottom: -1px;
}

.cost-label {
  flex: 1;
  padding: 0.5rem 1rem;
  text-align: left;
}

.cost-value {
  padding: 0.5rem 1rem;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  min-width: 70px;
  text-align: left;
}

.submit-btn {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: #fff;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 0.5rem 2rem;
  cursor: pointer;
  transition: border-color 0.2s, background-color 0.2s;
  margin-bottom: 2rem;
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
  .page-heading {
    font-size: 46px;
    margin-bottom: 0.5rem;
  }

  .info-text p {
    font-size: 14px;
  }

  .input-box {
    font-size: 16px;
    width: 360px;
  }

  .cost-row {
    font-size: 16px;
  }

  .cost-table {
    max-width: 360px;
  }

  .footer-notice {
    font-size: 16px;
  }
}

@media (min-width: 1024px) {
  .info-text p {
    font-size: 16px;
  }

  .input-box {
    font-size: 18px;
    width: 420px;
  }

  .input-note {
    font-size: 16px;
  }

  .peak-notice {
    font-size: 16px;
    max-width: 500px;
  }

  .cost-row {
    font-size: 18px;
  }

  .cost-table {
    max-width: 420px;
  }

  .calendar-placeholder {
    max-width: 600px;
  }

  .submit-btn {
    font-size: 18px;
  }

  .footer-notice {
    font-size: 20px;
  }

  .page-content {
    max-width: 800px;
  }
}

@media (min-width: 1100px) {
  .page-heading {
    font-size: 64px;
  }
}

/* 1440px+ Figma Desktop */
@media (min-width: 1440px) {
  .page-content {
    max-width: 1000px;
  }

  .page-heading {
    font-size: 68px;
  }

  .info-text p {
    font-size: 36px;
  }

  .input-box {
    font-size: 35px;
    width: 550px;
  }

  .input-note {
    font-size: 24px;
  }

  .calendar-placeholder {
    max-width: 919px;
    padding: 2rem 3rem;
  }

  .peak-notice {
    font-size: 24px;
    max-width: 700px;
    font-style: normal;
  }

  .cost-row {
    font-size: 35px;
  }

  .cost-table {
    max-width: 550px;
  }

  .submit-btn {
    font-size: 35px;
    background: #17181a;
    border: 1px solid #535353;
    border-radius: 10px;
    padding: 12px 16px;
    width: 367px;
    height: 119px;
  }

  .footer-notice {
    font-size: 36px;
    max-width: 800px;
  }
}
</style>
