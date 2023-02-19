import { initializeApp } from "firebase/app";
import { VueFire, VueFireAuth } from 'vuefire'

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();

    const firebaseApp = initializeApp({
        apiKey: config.FIREBASE_KEY,
        authDomain: config.AUTH_DOMAIN,
        projectId: config.PROJECT_ID,
        appId: config.APP_ID,
    });
    nuxtApp.vueApp.use(VueFire, {
        firebaseApp,
        modules: [
            // ... other modules
            VueFireAuth(),
        ],
    })
})