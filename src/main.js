import { createApp } from 'vue'
import App from './App.vue'

document.addEventListener('deviceready', () => {
    createApp(App).mount('#app')
})
