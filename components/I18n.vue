<template>
     <div class="w-full text-center flex" id="i18n">
      <div class="mx-auto">
        <h1 class="text-xl">i18n:</h1>
        <form class="mx-4">
          <select v-model="locale" class="border rounded p-4">
            <option value="en">en</option>
            <option value="lo">lao</option>
          </select>
          <p>{{ $t("welcome") }}</p>
          <nuxt-link
            to="https://nuxt.com/modules/i18n"
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            i18n documentation link
          </nuxt-link>
        </form>
      </div>
    </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

</script>