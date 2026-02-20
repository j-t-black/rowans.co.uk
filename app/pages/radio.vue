<template>
  <div class="min-h-screen bg-black">
    <!-- Compact logo header -->
    <header class="logo-header">
      <NuxtLink to="/">
        <img src="/design-assets/MAIN LOGO.webp" alt="Rowans" class="site-logo" />
      </NuxtLink>
    </header>

    <section class="radio-content">
      <h1 class="page-heading">Rowans Radio</h1>

      <div class="player-area">
        <!-- Large speaker on left -->
        <img
          src="/design-assets/ROWANS RADIO HERO.webp"
          alt=""
          class="big-speaker"
        />

        <!-- Audio player mockup -->
        <div class="audio-player">
          <div class="player-top">
            <span class="player-label">VOLUME</span>
            <div class="volume-row">
              <span class="volume-icon">&#x1F50A;</span>
              <div class="slider-track">
                <div class="slider-fill" style="width: 60%"></div>
              </div>
            </div>
          </div>
          <div class="track-info">
            <p>TRACK: ROWANS RADIO</p>
            <p>ARTIST: RICK NOGLE</p>
          </div>
          <div class="waveform">
            <div v-for="i in 40" :key="i" class="wave-bar" :style="{ height: Math.random() * 30 + 5 + 'px' }"></div>
          </div>
          <div class="progress-row">
            <span class="play-btn">&#x25B6;</span>
            <div class="slider-track">
              <div class="slider-fill" style="width: 61%"></div>
            </div>
            <span class="time-display">02:45 / 04:30</span>
          </div>
        </div>
      </div>

      <!-- Area buttons -->
      <div class="area-buttons">
        <button class="area-btn">
          <img src="/design-assets/AUDIO BUTTON.webp" alt="" class="area-btn-icon" />
          <span class="area-btn-label">UPSTAIRS</span>
        </button>
        <button class="area-btn">
          <img src="/design-assets/AUDIO BUTTON.webp" alt="" class="area-btn-icon" />
          <span class="area-btn-label">DOWNSTAIRS</span>
        </button>
        <button class="area-btn">
          <img src="/design-assets/AUDIO BUTTON.webp" alt="" class="area-btn-icon" />
          <span class="area-btn-label">GARDEN</span>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "Rowans Radio — Rowan's" })
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

.radio-content {
  padding: 1rem 2rem 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 80vh;
}

.page-heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 40px;
  color: #ff0000;
  margin: 0 0 2rem;
  line-height: 1.1;
  position: relative;
  z-index: 1;
}

.player-area {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  margin-bottom: 3rem;
}

.big-speaker {
  position: absolute;
  left: -10%;
  top: 50%;
  transform: translateY(-50%);
  height: 350px;
  width: auto;
  opacity: 0.7;
  z-index: 0;
}

.audio-player {
  position: relative;
  z-index: 1;
  background: rgba(40, 40, 40, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.25rem 1.5rem;
  width: 320px;
  text-align: left;
  margin-left: 10%;
}

.player-top {
  margin-bottom: 0.75rem;
}

.player-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
  display: block;
  margin-bottom: 0.25rem;
}

.volume-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.volume-icon {
  font-size: 14px;
  color: #fff;
}

.slider-track {
  flex: 1;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  position: relative;
}

.slider-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
}

.track-info {
  margin-bottom: 0.75rem;
}

.track-info p {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #fff;
  margin: 0.15rem 0;
}

.waveform {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 40px;
  margin-bottom: 0.75rem;
}

.wave-bar {
  width: 4px;
  background: rgba(255, 255, 255, 0.5);
  min-height: 3px;
}

.progress-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.play-btn {
  font-size: 12px;
  color: #fff;
}

.time-display {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
}

.area-buttons {
  display: flex;
  justify-content: center;
  gap: 4rem;
  position: relative;
  z-index: 1;
}

.area-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s;
}

.area-btn:hover {
  transform: scale(1.05);
}

.area-btn-icon {
  width: 100px;
  height: 80px;
  object-fit: contain;
}

.area-btn-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.1em;
}

@media (min-width: 768px) {
  .site-logo {
    height: 150px;
  }

  .page-heading {
    font-size: 70px;
    margin-bottom: 1rem;
  }

  .big-speaker {
    height: 450px;
    left: -5%;
  }

  .audio-player {
    width: 380px;
    padding: 1.5rem 2rem;
  }

  .area-btn-icon {
    width: 130px;
    height: 100px;
  }

  .area-btn-label {
    font-size: 14px;
  }
}

@media (max-width: 600px) {
  .big-speaker {
    height: 250px;
    left: -20%;
  }

  .audio-player {
    width: 260px;
    margin-left: 5%;
  }

  .area-buttons {
    gap: 1.5rem;
  }

  .area-btn-icon {
    width: 70px;
    height: 56px;
  }
}
</style>
