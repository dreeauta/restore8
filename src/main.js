import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// New design system only (Figma-driven components/pages).
import './styles/index.scss'
import 'swiper/swiper-bundle.css'

createApp(App).use(router).mount('#app')
