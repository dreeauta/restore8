import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Global styles – single source of truth (SCSS compiles on build; edit .scss files)
import '../styles/styles.scss'
import '../css/slidebox.css'
import '../css/style.css'
import '../css/menu.css'
import 'swiper/swiper-bundle.css'

createApp(App).use(router).mount('#app')
