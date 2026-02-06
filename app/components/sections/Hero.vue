<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/60" />
    </div>

    <!-- Content -->
    <UContainer class="relative z-10 text-center">
      <p v-if="subtitle" class="text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto">
        {{ subtitle }}
      </p>

      <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-red-600 mb-6">
        {{ title }}
      </h1>

      <div v-if="$slots.actions" class="flex flex-wrap gap-4 justify-center">
        <slot name="actions" />
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface Props {
  image: string
  title: string
  subtitle?: string
}

const props = defineProps<Props>()
</script>
