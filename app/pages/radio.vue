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

      <!-- Hidden audio element for stream playback -->
      <audio ref="audioEl" :src="currentStream" preload="none" />

      <!-- Audio player -->
      <div class="audio-player">
        <div class="player-top">
          <span class="player-label">VOLUME</span>
          <div class="volume-row">
            <span class="volume-icon">&#x1F50A;</span>
            <div class="slider-track" @click="setVolume">
              <div class="slider-fill" :style="{ width: volume * 100 + '%' }"></div>
            </div>
          </div>
        </div>
        <div class="track-info">
          <p>STREAM: {{ currentArea }}</p>
          <p>{{ isPlaying ? 'LIVE' : 'STOPPED' }}</p>
        </div>
        <div class="waveform" :class="{ 'waveform-active': isPlaying }">
          <div v-for="i in 40" :key="i" class="wave-bar" :style="{ height: waveBars[i - 1] + 'px' }"></div>
        </div>
        <div class="progress-row">
          <span class="play-btn" @click="togglePlay">{{ isPlaying ? '&#x23F8;' : '&#x25B6;' }}</span>
          <div class="live-indicator" :class="{ active: isPlaying }">
            <span class="live-dot"></span>
            <span class="live-text">LIVE</span>
          </div>
          <span class="time-display">{{ currentArea }}</span>
        </div>
      </div>

      <!-- Area buttons — stream URLs for sonic.onlineaudience.co.uk -->
      <div class="area-buttons">
        <button class="area-btn" data-stream="https://sonic.onlineaudience.co.uk/8162/stream" @click="selectStream('https://sonic.onlineaudience.co.uk/8162/stream', 'UPSTAIRS')">
          <img src="/design-assets/ROWANS RADIO HERO.webp" alt="" class="area-btn-img" />
          <span class="area-btn-label">UPSTAIRS</span>
        </button>
        <button class="area-btn" data-stream="https://sonic.onlineaudience.co.uk/8074/;" @click="selectStream('https://sonic.onlineaudience.co.uk/8074/;', 'DOWNSTAIRS')">
          <img src="/design-assets/ROWANS RADIO HERO.webp" alt="" class="area-btn-img" />
          <span class="area-btn-label">DOWNSTAIRS</span>
        </button>
        <button class="area-btn" data-stream="https://sonic.onlineaudience.co.uk:8254" @click="selectStream('https://sonic.onlineaudience.co.uk:8254', 'GARDEN')">
          <img src="/design-assets/ROWANS RADIO HERO.webp" alt="" class="area-btn-img" />
          <span class="area-btn-label">GARDEN</span>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "Rowans Radio — Rowan's" })

const audioEl = ref<HTMLAudioElement | null>(null)
const currentStream = ref('')
const currentArea = ref('ROWANS RADIO')
const isPlaying = ref(false)
const volume = ref(0.6)

// Web Audio API analyser for real waveform
let audioCtx: AudioContext | null = null
let analyser: AnalyserNode | null = null
let sourceNode: MediaElementAudioSourceNode | null = null
let animFrameId: number | null = null
let analyserWorking = false

const BAR_COUNT = 40
const waveBars = ref(Array.from({ length: BAR_COUNT }, () => Math.random() * 30 + 5))

function initAudioContext() {
  if (audioCtx || !audioEl.value) return
  audioCtx = new AudioContext()
  analyser = audioCtx.createAnalyser()
  analyser.fftSize = 128 // 64 frequency bins — enough for 40 bars
  sourceNode = audioCtx.createMediaElementSource(audioEl.value)
  sourceNode.connect(analyser)
  analyser.connect(audioCtx.destination)
}

function updateWaveform() {
  if (!analyser) return
  const data = new Uint8Array(analyser.frequencyBinCount)
  analyser.getByteFrequencyData(data)

  // Check if analyser is returning real data (CORS may block it)
  const hasData = data.some(v => v > 0)
  if (hasData) analyserWorking = true

  if (analyserWorking) {
    // Map frequency bins to bar heights (5–35px range)
    const step = data.length / BAR_COUNT
    for (let i = 0; i < BAR_COUNT; i++) {
      const idx = Math.floor(i * step)
      waveBars.value[i] = (data[idx] / 255) * 30 + 5
    }
  } else {
    // Fallback: random bars if CORS blocks frequency data
    for (let i = 0; i < BAR_COUNT; i++) {
      waveBars.value[i] = Math.random() * 30 + 5
    }
  }

  animFrameId = requestAnimationFrame(updateWaveform)
}

function startWaveform() {
  if (animFrameId) return
  initAudioContext()
  if (audioCtx?.state === 'suspended') audioCtx.resume()
  analyserWorking = false
  updateWaveform()
}

function stopWaveform() {
  if (animFrameId) {
    cancelAnimationFrame(animFrameId)
    animFrameId = null
  }
  // Settle bars to low idle
  for (let i = 0; i < BAR_COUNT; i++) {
    waveBars.value[i] = 5
  }
}

function selectStream(url: string, area: string) {
  const wasPlaying = isPlaying.value
  // Stop current playback
  if (audioEl.value) {
    audioEl.value.pause()
    isPlaying.value = false
    stopWaveform()
  }

  currentStream.value = url
  currentArea.value = area

  // Auto-play the new stream
  nextTick(() => {
    if (audioEl.value && wasPlaying) {
      audioEl.value.load()
      audioEl.value.volume = volume.value
      audioEl.value.play().catch(() => {
        isPlaying.value = false
        stopWaveform()
      })
      isPlaying.value = true
      startWaveform()
    }
  })
}

function togglePlay() {
  if (!audioEl.value) return

  if (!currentStream.value) {
    // Default to downstairs if nothing selected
    selectStream('https://sonic.onlineaudience.co.uk/8074/;', 'DOWNSTAIRS')
  }

  if (isPlaying.value) {
    audioEl.value.pause()
    isPlaying.value = false
    stopWaveform()
  } else {
    audioEl.value.load()
    audioEl.value.volume = volume.value
    audioEl.value.play().catch(() => {
      isPlaying.value = false
      stopWaveform()
    })
    isPlaying.value = true
    animateWaveform()
  }
}

function setVolume(e: MouseEvent) {
  const track = e.currentTarget as HTMLElement
  const rect = track.getBoundingClientRect()
  const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
  volume.value = pct
  if (audioEl.value) {
    audioEl.value.volume = pct
  }
}

onBeforeUnmount(() => {
  stopWaveform()
  if (audioEl.value) {
    audioEl.value.pause()
  }
  if (audioCtx) {
    audioCtx.close()
    audioCtx = null
  }
})
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
  left: -40px;
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
  cursor: pointer;
  user-select: none;
}

.play-btn:hover {
  color: #e8000d;
}

.slider-track {
  cursor: pointer;
}

.live-indicator {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  opacity: 0.3;
  transition: opacity 0.3s;
}

.live-indicator.active {
  opacity: 1;
}

.live-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e8000d;
}

.live-indicator.active .live-dot {
  animation: pulse-dot 1.5s infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.live-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #e8000d;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.waveform-active .wave-bar {
  transition: height 0.15s ease;
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

/* 1024px intermediate */
@media (min-width: 1024px) {
  .page-heading {
    font-size: 68px;
  }

  .big-speaker {
    height: 450px;
  }

  .audio-player {
    width: 450px;
    padding: 1.5rem 2rem;
  }

  .player-label {
    font-size: 12px;
  }

  .track-info p {
    font-size: 13px;
  }

  .waveform {
    height: 45px;
  }

  .time-display {
    font-size: 12px;
  }

  .area-btn-img {
    width: 150px;
    height: auto;
  }

  .area-btn-label {
    font-size: 16px;
  }

  .area-buttons {
    gap: 3rem;
  }
}

/* 1440px+ Figma Desktop */
@media (min-width: 1440px) {
  .page-heading {
    font-size: 68px;
  }

  .big-speaker {
    height: 744px;
    opacity: 0.6;
  }

  .audio-player {
    width: 669px;
    padding: 2rem 2.5rem;
    opacity: 0.75;
  }

  .player-label {
    font-size: 14px;
  }

  .track-info p {
    font-size: 16px;
  }

  .waveform {
    height: 60px;
  }

  .time-display {
    font-size: 14px;
  }

  .area-btn-img {
    width: 235px;
    height: 148px;
    object-fit: cover;
    opacity: 0.75;
  }

  .area-btn-label {
    font-size: 32px;
    font-weight: 400;
    letter-spacing: normal;
  }

  .area-buttons {
    gap: 4rem;
    bottom: 117px;
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
