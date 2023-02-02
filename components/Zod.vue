<template>
  <div class="w-full text-center flex">
    <div class="mx-auto">
      <h1 class="text-xl">Zod: TypeScript-first schema validation</h1>
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input v-model="formData.name" type="text" id="name" />

        <label for="email">Email:</label>
        <input v-model="formData.email" type="email" id="email" />

        <label for="age">Age:</label>
        <input v-model="formData.age" type="number" id="age" />

        <button type="submit">Submit</button>
      </form>
      <p>{{ parse }}</p>
      <p v-show="error">{{ error }}</p>
      <nuxt-link
        to="https://zod.dev/?id=from-npm-nodebun"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        Zod Documentation Link
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import Z from "zod";

const formData = {
  name: "",
  email: "",
  age: 0,
};

const error = ref();
const parse = ref();

const submitForm = () => {
  const formSchema = Z.object({
    name: Z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    email: Z.string({
      required_error: "email is required",
      invalid_type_error: "email must be a string",
    }).email(),
    age: Z.number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
      .int()
      .positive(),
  });

  try {
    parse.value = formSchema.parse(formData);
    error.value = ""
  } catch (err) {
    if (err instanceof Z.ZodError) {
      error.value = err.issues;

      // for Error Handling https://github.com/colinhacks/zod/blob/master/ERROR_HANDLING.md
    }
  }
};
// Submit the form data to your backend
</script>
