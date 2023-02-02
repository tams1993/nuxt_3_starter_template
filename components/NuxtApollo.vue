<template>
  <div class="text-center flex">
    <div class="mx-auto">
      <h1 class="text-xl">Nuxt Apollo: if data display below then it is work!</h1>
      <p>{{ apolloData }}</p>
      <nuxt-link
        to="https://apollo.nuxtjs.org/getting-started/quick-start"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        NuxtApollo Link
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const query = gql`
  query ($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;
const variables = {
  options: {
    paginate: {
      page: 1,
      limit: 5,
    },
  },
};
const { data: apolloData } = await useAsyncQuery(query, variables);
</script>
