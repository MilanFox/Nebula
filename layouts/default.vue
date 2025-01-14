<template>
  <div class="default-layout">
    <HeaderBar/>
    <main>
      <slot/>
    </main>
  </div>
</template>

<style lang="scss">
body:has(.default-layout) {
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 50%, rgba(213, 217, 221, 1) 100%);
}

.default-layout {
  max-width: 1600px;
  padding: 32px;
  margin: auto;
}
</style>
<script setup lang="ts">
</script>
