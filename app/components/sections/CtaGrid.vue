<template>
  <section class="py-24 bg-black">
    <UContainer>
      <h2 v-if="title" class="text-4xl md:text-5xl font-bold text-red-600 text-center mb-16">
        {{ title }}
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <NuxtLink
          v-for="(cta, index) in ctas"
          :key="index"
          :to="cta.link"
          class="flex items-center justify-center aspect-square rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-white font-bold text-center p-6"
        >
          <span class="text-sm md:text-base uppercase">{{ cta.text }}</span>
        </NuxtLink>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface Cta {
  text: string
  link: string
}

interface Props {
  title?: string
  ctas: Cta[]
}

const props = defineProps<Props>()
</script>
