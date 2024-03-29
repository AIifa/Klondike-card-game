import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {DraggablePlugin} from '@braks/revue-draggable';

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(DraggablePlugin);

app.mount('#app')
