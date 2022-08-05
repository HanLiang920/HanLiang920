import 'normalize.css';
import { createApp } from 'vue'
import App from './App.vue'
import { Drawer, Menu ,Switch,Spin} from 'ant-design-vue';
const app = createApp(App)
app.use(Drawer).use(Menu).use(Switch).use(Spin).mount('.app')