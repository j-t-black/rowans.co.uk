<template>
  <div>
    <!-- Hero Section -->
    <SectionsHero
      image="/design-assets/HERO 1.4 CLEAN LINES - NEW 16.png"
      title="Iconic Venue in London's Finsbury Park"
      subtitle="Welcome to Rowans"
    />

    <!-- Venue Features -->
    <SectionsFeatures
      title="World-Class Venue"
      :features="venueFeatures"
    />

    <!-- Organize Your Party -->
    <SectionsCtaGrid
      title="Organise Your Party"
      :ctas="partyCtas"
    />

    <!-- Audio Section -->
    <SectionsContentImage
      image="/design-assets/ROWANS AUDIO LOGO.png"
      title="AUDIO"
      description="Void Acoustics and Funktion One sound-systems across the venue playing big basslines. Ever evolving line-up and weekly events."
      :image-right="false"
    />

    <!-- Events CTAs -->
    <SectionsCtaGrid
      :ctas="eventsCtas"
    />

    <!-- Eats & Drinks -->
    <SectionsContentImage
      image="/design-assets/HERO 3 - EATS AND DRINKS.png"
      title="Eats + Drinks"
      description="Signature frozen cocktails, Authentic southern Mexican taco's, Artisan sourdough pizza"
      :image-right="true"
    />

    <!-- Food CTAs -->
    <SectionsCtaGrid
      :ctas="foodCtas"
    />
  </div>
</template>

<script setup lang="ts">
// Define page metadata
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: "Rowan's - Iconic Venue in Finsbury Park",
  description: 'World-class sound, bowling, karaoke, and events in the heart of Finsbury Park, London',
  ogImage: '/design-assets/HERO 1.4 CLEAN LINES - NEW 16.png'
})

// Venue features data
const venueFeatures = [
  {
    title: '2 Distinct Dancefloors',
    description: 'World-class sound and intelligent lighting'
  },
  {
    title: '24 Bowling Lanes',
    description: 'State-of-the-art bowling experience'
  },
  {
    title: '6 Private Karaoke Booths',
    description: 'Perfect for your group'
  },
  {
    title: '14 Pool Tables',
    description: 'Plus arcade and outdoor garden'
  }
]

// Party booking CTAs
const partyCtas = [
  { text: 'LARGE GROUPS', link: '/groups' },
  { text: 'Kids parties', link: '/groups#kids' },
  { text: 'CORPORATE', link: '/corporate' },
  { text: 'LAUNCH PARTIES', link: '/groups#launch' }
]

// Events CTAs
const eventsCtas = [
  { text: "WHAT'S ON", link: '/events' },
  { text: 'ROWANS RADIO', link: '/radio' },
  { text: "RESIDENT DJ'S", link: '/events#djs' }
]

// Food & Drinks CTAs
const foodCtas = [
  { text: 'BIRTHDAY CAKES', link: '/eats-drinks#cakes' },
  { text: 'DRINKS MENU', link: '/eats-drinks#drinks' },
  { text: 'Yucatan Tacos', link: '/eats-drinks#yucatan' },
  { text: 'YARD SALE PIZZA', link: '/eats-drinks#pizza' }
]
</script>
