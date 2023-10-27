import { createApp } from 'vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { LoadingPlugin } from 'vue-loading-overlay';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import pinia from './stores/store';

// fontawesome import
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";


import App from './App.vue'
import router from './router'

library.add(fas, fab, far);

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(LoadingPlugin)
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')