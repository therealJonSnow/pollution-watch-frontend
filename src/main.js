import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Markdown from 'vue3-markdown-it';

import './assets/css/index.css'
import './assets/tailwind.css'

createApp(App).use(Markdown).use(router).use(store).mount('#app')
