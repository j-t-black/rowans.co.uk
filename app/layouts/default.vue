<template>
  <div>
    <!-- Fixed button stack - top right, always visible -->
    <div class="fixed-buttons">
      <button class="icon-btn" @click="navOpen = true" aria-label="Open menu">
        <img src="/design-assets/BURGER TRANS 1.png" alt="" class="btn-icon" />
      </button>
      <a
        href="https://www.mybowlingpassport.com/112/6615/book"
        class="icon-btn"
        target="_blank"
        rel="noopener"
        aria-label="Book a lane"
      >
        <img src="/design-assets/LANE TRANS 1.png" alt="" class="btn-icon" />
      </a>
    </div>

    <BurgerNav :is-open="navOpen" @close="navOpen = false" />

    <slot />
  </div>
</template>

<script setup lang="ts">
const navOpen = ref(false)
</script>

<style scoped>
.fixed-buttons {
  position: fixed;
  top: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 9000;
}

.icon-btn {
  width: 45px;
  height: 44px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.75;
  transition: opacity 0.2s;
  display: block;
}

.icon-btn:hover {
  opacity: 1;
}

.btn-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

@media (min-width: 1920px) {
  .fixed-buttons {
    top: 20px;
    right: 20px;
    gap: 16px;
  }

  .icon-btn {
    width: 60px;
    height: 58px;
  }
}

@media (min-width: 768px) and (max-width: 1919px) {
  .icon-btn {
    width: 52px;
    height: 51px;
  }
}
</style>
