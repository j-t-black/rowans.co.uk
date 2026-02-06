<template>
  <footer style="background-color: #17181a; color: #ffffff; padding: 4rem 0;">
    <div style="max-width: 1280px; margin: 0 auto; padding: 0 1rem;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem;">
        <!-- Location -->
        <div>
          <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem; color: #ffffff;">Visit Us</h3>
          <p style="color: #9ca3af;">
            10 Stroud Green Road<br>
            Finsbury Park<br>
            London N4 2DF
          </p>
        </div>

        <!-- Opening Hours -->
        <div>
          <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem; color: #ffffff;">Opening Hours</h3>
          <p style="color: #9ca3af;">
            Mon-Thu: 5pm - 1am<br>
            Fri-Sat: 12pm - 3am<br>
            Sun: 12pm - 12am
          </p>
        </div>

        <!-- Links -->
        <div>
          <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem; color: #ffffff;">Quick Links</h3>
          <nav style="display: flex; flex-direction: column; gap: 0.5rem;">
            <NuxtLink
              to="/book-karaoke"
              style="color: #9ca3af; text-decoration: none; transition: color 0.3s;"
            >
              Book Karaoke
            </NuxtLink>
            <NuxtLink
              to="/policies"
              style="color: #9ca3af; text-decoration: none; transition: color 0.3s;"
            >
              Policies
            </NuxtLink>
          </nav>
        </div>
      </div>

      <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #374151; text-align: center; color: #9ca3af;">
        <p>&copy; {{ new Date().getFullYear() }} Rowan's. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component
</script>
