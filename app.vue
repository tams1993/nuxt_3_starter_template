<template>
  <div class="h-screen py-10">
    <h1 class="text-2xl text-blue-500 text-center">Nuxt 3 Template</h1>
    <h1 class="text-2xl text-blue-500 text-center">Using:</h1>
    <ul class="list-disc text-center">
      <li>TailwindCSS</li>
      <li class="cursor-pointer" @click="scrollToElement('i18n')">I18n</li>
      <li class="cursor-pointer"  @click="scrollToElement('nuxtimage')">NuxtImage</li>
      <li class="cursor-pointer" @click="scrollToElement('colormode')">ColorMode</li>
      <li class="cursor-pointer" @click="scrollToElement('nuxtapollo')">NuxtApollo</li>
      <li class="cursor-pointer" @click="scrollToElement('pinia')">Pinia</li>
      <li class="cursor-pointer" @click="scrollToElement('zod')">Zod</li>
      <li class="cursor-pointer" @click="scrollToElement('vuefire')">VueFire</li>
    </ul>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

    <I18n />

    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

    <NuxtImage />
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

    <ColorMode />
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

    <NuxtApollo />

    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

    <Pinia />
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    <Zod />
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    <VueFire />
  </div>
</template>

<script setup lang="ts">

const scrollToElement = async (element: string) => {
  await nextTick();
  window.scrollTo({
    top: document?.getElementById(element)?.offsetTop,
    left: 0,
    behavior: "smooth",
  });
};
</script>
