<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
import { SpeedInsights } from '@vercel/speed-insights/vue'

const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <SpeedInsights/>
  <div class="text-center font-sans text-gray-700 antialiased">
    <!-- text-center: center the text of an element; 
     anitaliased: to render text using grayscale antialiasing: -->
    <header>
      <div class="animate-fade" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <h1>Deploy with Vercel</h1>
      <div class="wrapper">
        <nav class="py-6">
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'event-list-view' }">Event</RouterLink> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'about' }">About</RouterLink> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'info' }">Info</RouterLink>         
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
</style>
