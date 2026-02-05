<template>
  <section class="py-24 bg-dark-bg">
    <UContainer>
      <h2 v-if="title" class="text-4xl md:text-5xl font-bold text-white text-center mb-16">
        {{ title }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="text-center"
        >
          <UCard class="h-full bg-black/40 border-gray-800">
            <div class="p-6">
              <h3 class="text-xl font-bold text-white mb-2">
                {{ feature.title }}
              </h3>
              <p v-if="feature.description" class="text-gray-400">
                {{ feature.description }}
              </p>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface Feature {
  title: string
  description?: string
}

interface Props {
  title?: string
  features: Feature[]
}

const props = defineProps<Props>()
</script>
