import { initializeApp } from "firebase/app";
import { VueFire, VueFireAuth } from 'vuefire'

export default defineNuxtPlugin(nuxtApp => {
    const firebaseApp = initializeApp({
        apiKey: "AIzaSyB-qOnMymzSmhtR3f236U3V8dJjVgU0xw0",
        authDomain: "nuxt-intern-auth.firebaseapp.com",
        projectId: "nuxt-intern-auth",
        appId: "1:572787349994:web:b996f501e07897281f7a93",
    });
    nuxtApp.vueApp.use(VueFire, {
        firebaseApp,
        modules: [
            // ... other modules
            VueFireAuth(),
        ],
    })
})