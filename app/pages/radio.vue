<template>
  <div class="min-h-screen bg-black">
    <section class="radio-content">
      <!-- Large speaker bisected by left edge -->
      <img
        src="/design-assets/ROWANS RADIO HERO.webp"
        alt=""
        class="big-speaker"
      />

      <h1 class="page-heading">Rowans Radio</h1>

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

      <!-- Area buttons -->
      <div class="area-buttons">
        <button class="area-btn">
          <img src="/design-assets/ROWANS RADIO HERO.webp" alt="" class="area-btn-img" />
          <span class="area-btn-label">UPSTAIRS</span>
        </button>
        <button class="area-btn">
          <img src="/design-assets/ROWANS RADIO HERO.webp" alt="" class="area-btn-img" />
          <span class="area-btn-label">DOWNSTAIRS</span>
        </button>
        <button class="area-btn">
          <img src="/design-assets/ROWANS RADIO HERO.webp" alt="" class="area-btn-img" />
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
.radio-content {
  text-align: center;
  position: relative;
  overflow: hidden;
  height: 100vh;
  padding: 2rem;
}

.page-heading {
  font-family: 'JetBrains Mono', monospace;
  font-weight: var(--section-heading-weight, 400);
  font-size: var(--section-heading-size, 46px);
  color: var(--color-heading, #ff0000);
  margin: 0 0 2rem;
  line-height: 1.1;
  position: relative;
  z-index: 1;
}

.big-speaker {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 250px;
  width: auto;
  opacity: 0.7;
  z-index: 0;
}

.audio-player {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background: rgba(40, 40, 40, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.25rem 1.5rem;
  width: 320px;
  max-width: calc(100% - 4rem);
  text-align: left;
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
  gap: 3rem;
  position: absolute;
  bottom: 4rem;
  left: 0;
  right: 0;
  z-index: 1;
}

.area-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s;
  position: relative;
}

.area-btn:hover {
  transform: scale(1.05);
}

.area-btn-img {
  width: 90px;
  height: auto;
  object-fit: contain;
}

.area-btn-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.1em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}

@media (min-width: 768px) {
  .page-heading {
    font-size: 70px;
  }

  .big-speaker {
    height: 350px;
  }

  .audio-player {
    width: 380px;
    padding: 1.5rem 2rem;
  }

  .area-btn-img {
    width: 120px;
  }

  .area-btn-label {
    font-size: 13px;
  }
}

@media (max-width: 1000px) {
  .big-speaker {
    height: 200px;
  }
}

@media (max-width: 600px) {
  .page-heading {
    font-size: 30px;
  }

  .big-speaker {
    height: 180px;
  }

  .audio-player {
    width: 260px;
    max-width: 100%;
  }

  .area-buttons {
    gap: 1.5rem;
  }

  .area-btn-img {
    width: 65px;
  }

  .area-btn-label {
    font-size: 9px;
  }
}
</style>
