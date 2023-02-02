<template>
  <div class="text-center flex">
    <div class="mx-auto">
      <h1 class="text-xl">Nuxt Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference" class="border rounded p-4">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
      <nuxt-link
        to="https://color-mode.nuxtjs.org/"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        NuxtColorMode Link
      </nuxt-link>
    </div>
  </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode();

</script>

<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>