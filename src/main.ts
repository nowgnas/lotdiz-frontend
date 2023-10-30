import { createApp } from 'vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { LoadingPlugin } from 'vue-loading-overlay';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import pinia from './stores/store';

// fontawesome import
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue'
import router from './router'

import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import '@/assets/css/main.css'
import '@/assets/css/fonts.css'

library.add(fas, fab, far);

const app = createApp(App)
// const pinia = createPinia()

app.use(pinia)
app.component('VueDatePicker', VueDatePicker)
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(LoadingPlugin)
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')