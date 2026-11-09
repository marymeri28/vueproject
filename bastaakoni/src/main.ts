import { createApp } from 'vue'
import App from './App.vue'
import "tailwindcss";
import './assets/index.css'
import router from './router'

createApp(App).use(router).mount('#app')
