<template>
  <footer class="bg-dark-bg text-white py-16">
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Location -->
        <div>
          <h3 class="text-xl font-bold mb-4">Visit Us</h3>
          <p class="text-gray-400">
            10 Stroud Green Road<br>
            Finsbury Park<br>
            London N4 2DF
          </p>
        </div>

        <!-- Opening Hours -->
        <div>
          <h3 class="text-xl font-bold mb-4">Opening Hours</h3>
          <p class="text-gray-400">
            Mon-Thu: 5pm - 1am<br>
            Fri-Sat: 12pm - 3am<br>
            Sun: 12pm - 12am
          </p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <nav class="flex flex-col gap-2">
            <NuxtLink
              to="/book-karaoke"
              class="text-gray-400 hover:text-white transition-colors"
            >
              Book Karaoke
            </NuxtLink>
            <NuxtLink
              to="/policies"
              class="text-gray-400 hover:text-white transition-colors"
            >
              Policies
            </NuxtLink>
          </nav>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Rowan's. All rights reserved.</p>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
// Footer component
</script>
