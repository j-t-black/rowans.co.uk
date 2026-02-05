<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur">
    <UContainer>
      <nav class="flex items-center justify-between py-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <img
            src="/design-assets/MAIN LOGO.png"
            alt="Rowan's"
            class="h-12 w-auto"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navigation"
            :key="link.to"
            :to="link.to"
            class="text-white hover:text-primary transition-colors"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <UButton
          icon="i-heroicons-bars-3"
          color="white"
          variant="ghost"
          class="md:hidden"
          @click="isMenuOpen = true"
        />
      </nav>
    </UContainer>

    <!-- Mobile Menu Overlay -->
    <USlideover v-model="isMenuOpen" side="right">
      <div class="p-8">
        <div class="flex justify-between items-center mb-8">
          <img
            src="/design-assets/MAIN LOGO.png"
            alt="Rowan's"
            class="h-12 w-auto"
          />
          <UButton
            icon="i-heroicons-x-mark"
            color="gray"
            variant="ghost"
            @click="isMenuOpen = false"
          />
        </div>

        <nav class="flex flex-col gap-6">
          <NuxtLink
            v-for="link in navigation"
            :key="link.to"
            :to="link.to"
            class="text-2xl text-white hover:text-primary transition-colors"
            @click="isMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </USlideover>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Eats & Drinks', to: '/eats-drinks' },
  { label: 'Groups', to: '/groups' },
  { label: 'Corporate', to: '/corporate' },
  { label: 'Radio', to: '/radio' },
  { label: 'Policies', to: '/policies' },
]
</script>
