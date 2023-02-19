<template>
  <div class="text-center flex my-10"  id="vuefire">
    <div class="mx-auto">
      <h1 class="text-xl">
        VueFire CurrentUser:

        <span class="font-bold">
          {{ user?.displayName || "Sign In First! User will display here" }}
        </span>
      </h1>
      <p class="text-lg">Firebase Client for vue3, Nuxt 3 Module is still in development. </p>
      <p class="text-lg"> To create vuefire client, You need to create vuefire plugins. see file /plugins/vuefire_client.ts for more info. </p>
      <button v-if="!user" class="btn btn-blue my-10" @click="signInWithGoogle">
        Sign In with Google
      </button>
      <button v-else class="btn btn-blue my-10" @click="auth?.signOut">
        Sign Out
      </button>
      <div>
        <nuxt-link
          to="https://vuefire.vuejs.org/nuxt/auth.html"
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          VueFire Link
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCurrentUser, getCurrentUser, useFirebaseAuth } from "vuefire";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const user = useCurrentUser();

onMounted(async () => {
  const currentUser = await getCurrentUser();
  if (currentUser) {
    console.log(currentUser);
  }
});
const auth = useFirebaseAuth();
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth!, provider)
    .then((result) => {
      console.log("result", result);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

auth?.onAuthStateChanged((firebaseUser) => {});
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
