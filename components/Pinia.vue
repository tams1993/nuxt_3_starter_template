<template>
  <div class="text-center flex">
    <div class="mx-auto">
      <h1 class="text-xl">Pinia for Store management</h1>
      <div>
        <h2>Counter Store</h2>

        <p data-testid="counter-values">
          Counter: {{ counter.n }}. Double: {{ counter.double }}
        </p>

        <p>Increment the Store:</p>

        <button class="btn btn-blue" @click="counter.increment()" data-testid="increment">+1</button>
        <button class="btn btn-blue" @click="counter.increment(10)">+10</button>
        <button class="btn btn-blue" @click="counter.increment(100)">+100</button>
        <button class="btn btn-blue" @click="counter.n++">Direct Increment</button>
        <button
        class="btn btn-blue"
          @click="
            counter.$patch((state) => {
              state.n++;
              state.incrementedTimes++;
            })
          "
        >
          Direct patch
        </button>

        <p>Other actions:</p>

        <button class="btn btn-blue" @click="counter.fail">Test Errors</button>
        <button class="btn btn-blue" @click="counter.decrementToZero()">Decrement to zero</button>
        <button class="btn btn-blue" @click="counter.changeMe()">
          <code>counter.changeMe()</code>
        </button>

        <hr />

        <p>
          Complete store state via
          <code>store.$state</code>:
        </p>

        <pre>{{ counter.$state }}</pre>
      </div>

      <nuxt-link
        to="https://nuxt.com/modules/pinia"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        Pinia Link
      </nuxt-link>
    </div>
  </div>
</template>
<script setup lang="ts">
const counter = useCounter();
</script>
<style>
  .btn {
    @apply font-bold py-2 px-4 rounded mx-2;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
</style>