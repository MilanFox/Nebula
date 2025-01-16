<template>
  <div class="default-layout">
    <HeaderBar/>
    <hr aria-hidden="true">
    <main id="main">
      <slot/>
    </main>
    <SpeedInsights/>
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
</script>

<style lang="scss">
body:has(.default-layout) {
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 50%, rgba(213, 217, 221, 1) 100%);
  background-attachment: fixed;
}

.default-layout {
  max-width: 1600px;
  padding: 32px;
  margin: auto;
}
</style>
