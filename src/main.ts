// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from "@fortawesome/fontawesome-svg-core";
import { LoadingPlugin } from 'vue-loading-overlay';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// fontawesome import
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import App from './App.vue'
import router from './router'

library.add(fas, fab, far);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(LoadingPlugin)
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')
