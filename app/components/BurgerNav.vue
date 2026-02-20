<template>
  <Teleport to="body">
    <Transition name="nav-fade">
      <div v-if="isOpen" class="burger-overlay" @click.self="close">
        <!-- Close button -->
        <button class="close-btn" @click="close" aria-label="Close menu">
          <span class="close-line close-line-1"></span>
          <span class="close-line close-line-2"></span>
        </button>

        <!-- Nav items -->
        <nav class="nav-list">
          <a href="/" class="nav-item" @click="close">Home</a>
          <a href="/about" class="nav-item" @click="close">About us</a>
          <a href="https://www.mybowlingpassport.com/112/6615/book" class="nav-item" target="_blank" rel="noopener">Book a lane</a>
          <a href="/organise" class="nav-item" @click="close">Organise your Party</a>
          <a href="/karaoke" class="nav-item" @click="close">Book Karaoke</a>
          <a href="/#audio" class="nav-item" @click="close">Audio</a>
          <a href="/eats-drinks" class="nav-item" @click="close">Eats + Drinks</a>
          <a href="/whats-on" class="nav-item" @click="close">What's On</a>
          <a href="/radio" class="nav-item" @click="close">Rowans Radio</a>
          <a href="/djs" class="nav-item" @click="close">Djs</a>
          <a href="/merch" class="nav-item" @click="close">Merch</a>
          <a href="/policies" class="nav-item" @click="close">Policies + FAQ</a>
          <a href="/contact" class="nav-item" @click="close">Contact us</a>
          <a href="/#visit" class="nav-item" @click="close">Visit Us</a>
        </nav>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{ isOpen: boolean }>()
const emit = defineEmits<{ (e: 'close'): void }>()

function close() {
  emit('close')
}

// Lock body scroll when open
watch(() => props.isOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.burger-overlay {
  position: fixed;
  inset: 0;
  background-color: #000000;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow-y: auto;
}

.close-btn {
  position: fixed;
  top: 12px;
  right: 12px;
  width: 45px;
  height: 44px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px;
  z-index: 10001;
  opacity: 0.75;
  transition: opacity 0.2s;
}

.close-btn:hover {
  opacity: 1;
}

.close-line {
  display: block;
  width: 28px;
  height: 2px;
  background-color: #ffffff;
  transform-origin: center;
  transition: transform 0.2s;
}

.close-line-1 {
  transform: translateY(5px) rotate(45deg);
}

.close-line-2 {
  transform: translateY(-5px) rotate(-45deg);
}

.nav-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  width: 100%;
}

.nav-item {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 400;
  font-size: 38px;
  line-height: 1.2;
  color: #ffffff;
  text-decoration: none;
  text-align: center;
  opacity: 0.9;
  transition: opacity 0.15s;
  padding: 0.25rem 1rem;
  white-space: nowrap;
}

.nav-item:hover {
  opacity: 0.5;
}

/* Mobile - slightly smaller */
@media (max-width: 767px) {
  .nav-item {
    font-size: 24px;
    gap: 0;
    padding: 0.2rem 1rem;
  }
}

/* Desktop */
@media (min-width: 1920px) {
  .nav-item {
    font-size: 68px;
  }

  .close-btn {
    top: 20px;
    right: 20px;
    width: 60px;
    height: 58px;
  }
}

/* Transition */
.nav-fade-enter-active,
.nav-fade-leave-active {
  transition: opacity 0.25s ease;
}

.nav-fade-enter-from,
.nav-fade-leave-to {
  opacity: 0;
}
</style>
