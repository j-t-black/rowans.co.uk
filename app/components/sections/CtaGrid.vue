<template>
  <section class="py-24 bg-black">
    <UContainer>
      <h2 v-if="title" class="text-4xl md:text-5xl font-bold text-white text-center mb-16">
        {{ title }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <UButton
          v-for="(cta, index) in ctas"
          :key="index"
          :to="cta.link"
          size="xl"
          color="white"
          variant="outline"
          class="h-32 text-xl font-bold"
        >
          {{ cta.text }}
        </UButton>
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
