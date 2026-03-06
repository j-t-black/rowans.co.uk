<template>
  <div>
    <!-- Fixed button stack - top right, always visible -->
    <div class="fixed-buttons">
      <div class="btn-group">
        <button class="icon-btn" @click="navOpen = true" aria-label="Open menu">
          <img src="/design-assets/BURGER TRANS 1.webp" alt="" class="btn-icon" />
        </button>
        <span class="btn-label">menu</span>
      </div>
      <div v-if="!hideLaneButton" class="btn-group">
        <a
          href="https://www.mybowlingpassport.com/112/6615/book"
          class="icon-btn"
          target="_blank"
          rel="noopener"
          aria-label="Book a lane"
        >
          <img src="/design-assets/LANE TRANS 1.webp" alt="" class="btn-icon" />
        </a>
        <span class="btn-label">book a<br>lane</span>
      </div>
    </div>

    <BurgerNav :is-open="navOpen" @close="navOpen = false" />

    <slot />
  </div>
</template>

<script setup lang="ts">
const navOpen = ref(false)
const route = useRoute()
const hideLaneButton = computed(() => ['/groups', '/kids'].includes(route.path))
</script>

<style scoped>
.fixed-buttons {
  position: fixed;
  top: 22px;
  right: 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 9000;
}

.icon-btn {
  width: 52px;
  height: 51px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 1;
  filter: brightness(1.3);
  transform: scale(1);
  transition: filter 0.2s ease, transform 0.2s ease;
  display: block;
}

.icon-btn:hover {
  filter: brightness(1.6);
  transform: scale(1.12);
}

.btn-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 8px;
  color: #ffffff;
  text-align: center;
  margin-top: 3px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  opacity: 0.9;
}

.btn-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

@media (min-width: 1920px) {
  .fixed-buttons {
    top: 33px;
    right: 30px;
    gap: 16px;
  }

  .icon-btn {
    width: 99px;
    height: 98px;
  }

  .btn-label {
    font-size: 16px;
    margin-top: 6px;
  }
}

@media (min-width: 768px) and (max-width: 1919px) {
  .icon-btn {
    width: 60px;
    height: 59px;
  }

  .btn-label {
    font-size: 9px;
  }
}
</style>
