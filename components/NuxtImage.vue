<template>
     <div class="text-center flex" id="nuxtimage">
      <div class="mx-auto">
        <h1 class="text-xl mx-4">Nuxt-image:</h1>
        <nuxt-img
          src="https://imageio.forbes.com/specials-images/imageserve/5ef8c07bd656580007e6d984/Dog-reading-newspaper/960x0.jpg?format=jpg&width=960"
          sizes="sm:100vw md:50vw lg:150px"
        />
        <nuxt-link
          to="https://v1.image.nuxtjs.org/components/nuxt-img"
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          nuxt-img link
        </nuxt-link>
      </div>
    </div>
</template>