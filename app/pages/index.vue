<template>
  <div style="background-color: #000000; min-height: 100vh;">
    <!-- Hero Section -->
    <section style="position: relative; height: 100vh; display: flex; flex-direction: column; overflow: hidden;">
      <img
        src="/design-assets/HERO 1.4 CLEAN LINES - NEW 16.png"
        alt="Rowan's Venue"
        style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;"
      />
      <div style="position: absolute; inset: 0; background-color: rgba(0,0,0,0.4); z-index: 1;"></div>

      <!-- Logo at top -->
      <div style="position: relative; z-index: 2; text-align: center; padding: 2rem 2rem 0;">
        <img
          src="/design-assets/MAIN LOGO.png"
          alt="Rowan's"
          style="height: 8rem; width: auto; margin: 0 auto;"
        />
      </div>

      <!-- Hero content centered -->
      <div style="position: relative; z-index: 2; text-align: center; padding: 2rem; flex: 1; display: flex; flex-direction: column; justify-content: center; margin-top: -4rem;">
        <p style="color: #ffffff; font-size: 1.25rem; margin-bottom: 1rem; font-weight: 300;">Iconic Venue in London's Finsbury Park</p>
        <h1 style="color: #ff0000; font-size: 4rem; font-weight: bold; margin-bottom: 2rem; line-height: 1.1;">Welcome to Rowans</h1>
        <p style="color: #ffffff; font-size: 1rem; max-width: 800px; margin: 0 auto; line-height: 1.6;">
          World-class Sound, Intelligent Lighting and video, 2 Distinct Dancefloors,
          24 Bowling Lanes, 16 Pool Tables, 6 Private Karaoke Booths,
          4 Bars, Outback Garden with seating and sound system, Arcade
        </p>
      </div>
    </section>

    <!-- Organise Your Party -->
    <section style="padding: 6rem 2rem; background-color: #000000;">
      <h2 style="color: #ff0000; font-size: 3rem; font-weight: bold; text-align: center; margin-bottom: 3rem;">Organise Your Party</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 2rem; max-width: 800px; margin: 0 auto;">
        <a v-for="cta in partyCtas" :key="cta.text" :href="cta.link"
           style="aspect-ratio: 1; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 2px solid #ffffff; color: #ffffff; font-weight: bold; text-align: center; padding: 1.5rem; text-decoration: none; font-size: 0.9rem;">
          {{ cta.text }}
        </a>
      </div>
    </section>

    <!-- Eats + Drinks -->
    <section style="padding: 6rem 2rem; background-color: #000000;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; max-width: 1200px; margin: 0 auto; align-items: center;">
        <div style="order: 2;">
          <img src="/design-assets/HERO 3 - EATS AND DRINKS.png" alt="Eats and Drinks" style="width: 100%; height: auto; border-radius: 8px;" />
        </div>
        <div style="order: 1;">
          <h2 style="color: #ff0000; font-size: 3rem; font-weight: bold; margin-bottom: 1.5rem;">Eats + Drinks</h2>
          <p style="color: #ffffff; font-size: 1.125rem; line-height: 1.75;">Signature frozen cocktails, Authentic southern Mexican taco's, Artisan sourdough pizza</p>
        </div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 2rem; max-width: 800px; margin: 3rem auto 0;">
        <a v-for="cta in foodCtas" :key="cta.text" :href="cta.link"
           style="aspect-ratio: 1; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 2px solid #ffffff; color: #ffffff; font-weight: bold; text-align: center; padding: 1.5rem; text-decoration: none; font-size: 0.9rem;">
          {{ cta.text }}
        </a>
      </div>
    </section>

    <!-- Audio Section -->
    <section style="padding: 6rem 2rem; background-color: #000000;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; max-width: 1200px; margin: 0 auto; align-items: center;">
        <div>
          <img src="/design-assets/ROWANS AUDIO LOGO.png" alt="Audio" style="width: 100%; height: auto;" />
        </div>
        <div>
          <h2 style="color: #ff0000; font-size: 3rem; font-weight: bold; margin-bottom: 1.5rem;">AUDIO</h2>
          <p style="color: #ffffff; font-size: 1.125rem; line-height: 1.75;">Void Acoustics and Funktion One sound-systems across the venue playing big basslines. Ever evolving line-up and weekly events.</p>
        </div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 2rem; max-width: 600px; margin: 3rem auto 0;">
        <a v-for="cta in eventsCtas" :key="cta.text" :href="cta.link"
           style="aspect-ratio: 1; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 2px solid #ffffff; color: #ffffff; font-weight: bold; text-align: center; padding: 1.5rem; text-decoration: none; font-size: 0.9rem;">
          {{ cta.text }}
        </a>
      </div>
    </section>

    <!-- Visit Us Section -->
    <section style="padding: 6rem 2rem; background-color: #000000;">
      <h2 style="color: #ff0000; font-size: 3rem; font-weight: bold; text-align: center; margin-bottom: 3rem;">Visit us</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 900px; margin: 0 auto 3rem;">
        <!-- Finsbury Park Location -->
        <div style="background-color: #1a1a1a; border: 1px solid #333; border-radius: 8px; padding: 2rem;">
          <h3 style="color: #ffffff; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem; text-align: center;">Finsbury Park</h3>
          <div style="color: #9ca3af; text-align: center; margin-bottom: 2rem; line-height: 1.8;">
            <p>Monday - Thursday</p>
            <p>5pm - 1am</p>
            <p style="margin-top: 1rem;">Friday - Saturday</p>
            <p>12pm - 3am</p>
            <p style="margin-top: 1rem;">Sunday</p>
            <p>12pm - 12am</p>
          </div>
          <a href="#location" style="display: block; background-color: transparent; border: 2px solid #ffffff; color: #ffffff; padding: 1rem 2rem; text-align: center; text-decoration: none; border-radius: 4px; font-weight: bold;">
            FIND US
          </a>
        </div>

        <!-- Second location box -->
        <div style="background-color: #1a1a1a; border: 1px solid #333; border-radius: 8px; padding: 2rem;">
          <h3 style="color: #ffffff; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem; text-align: center;">Finsbury Park</h3>
          <div style="color: #9ca3af; text-align: center; margin-bottom: 2rem; line-height: 1.8;">
            <p>Monday - Thursday</p>
            <p>5pm - 1am</p>
            <p style="margin-top: 1rem;">Friday - Saturday</p>
            <p>12pm - 3am</p>
            <p style="margin-top: 1rem;">Sunday</p>
            <p>12pm - 12am</p>
          </div>
          <a href="#location" style="display: block; background-color: transparent; border: 2px solid #ffffff; color: #ffffff; padding: 1rem 2rem; text-align: center; text-decoration: none; border-radius: 4px; font-weight: bold;">
            FIND US
          </a>
        </div>
      </div>
    </section>

    <!-- Location Section -->
    <section id="location" style="padding: 6rem 2rem; background-color: #000000;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <h2 style="color: #ff0000; font-size: 3rem; font-weight: bold; text-align: center; margin-bottom: 3rem;">Location</h2>

        <div style="background-color: #1a1a1a; border: 1px solid #333; border-radius: 8px; padding: 2rem; text-align: center;">
          <h3 style="color: #ffffff; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">Finsbury Park</h3>
          <p style="color: #9ca3af; margin-bottom: 2rem;">
            10 Stroud Green Road<br>
            Finsbury Park<br>
            London N4 2DF
          </p>

          <!-- Map placeholder -->
          <div style="background-color: #e5e7eb; height: 400px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            <span style="color: #6b7280; font-size: 1.125rem;">📍 Map View</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

useSeoMeta({
  title: "Rowan's - Iconic Venue in Finsbury Park",
  description: 'World-class sound, bowling, karaoke, and events in the heart of Finsbury Park, London'
})

const partyCtas = [
  { text: 'LARGE GROUPS', link: '/groups' },
  { text: 'Kids parties', link: '/groups#kids' },
  { text: 'CORPORATE', link: '/corporate' },
  { text: 'LAUNCH PARTIES', link: '/groups#launch' }
]

const eventsCtas = [
  { text: "WHAT'S ON", link: '/events' },
  { text: 'ROWANS RADIO', link: '/radio' },
  { text: "RESIDENT DJ'S", link: '/events#djs' }
]

const foodCtas = [
  { text: 'BIRTHDAY CAKES', link: '/eats-drinks#cakes' },
  { text: 'DRINKS MENU', link: '/eats-drinks#drinks' },
  { text: 'Yucatan Tacos', link: '/eats-drinks#yucatan' },
  { text: 'YARD SALE PIZZA', link: '/eats-drinks#pizza' }
]
</script>
