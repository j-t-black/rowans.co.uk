<template>
  <section class="py-24">
    <UContainer>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        :class="{ 'lg:flex-row-reverse': imageRight }"
      >
        <!-- Image -->
        <div :class="{ 'lg:order-2': imageRight }">
          <img
            v-if="image"
            :src="image"
            :alt="title"
            class="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>

        <!-- Content -->
        <div :class="{ 'lg:order-1': imageRight }">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            {{ title }}
          </h2>

          <p class="text-xl text-gray-300 mb-8 leading-relaxed">
            {{ description }}
          </p>

          <div v-if="ctaText" class="flex gap-4">
            <UButton
              :to="ctaLink"
              size="lg"
              color="primary"
            >
              {{ ctaText }}
            </UButton>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface Props {
  image?: string
  title: string
  description: string
  ctaText?: string
  ctaLink?: string
  imageRight?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  imageRight: false
})
</script>
