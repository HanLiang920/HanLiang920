import 'normalize.css';
import { createApp ,watchEffect} from 'vue'
import App from './App.vue'
import { Drawer, Menu } from 'ant-design-vue';
const app = createApp(App)
app.use(Drawer).use(Menu).mount('#app')
window.watchEffect = watchEffect