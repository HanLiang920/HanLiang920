import 'normalize.css';
import '../../utils/global.js'
import { createApp } from 'vue'
import model from './model.vue'
import { Drawer, Menu } from 'ant-design-vue';

createApp(model).use(Drawer).use(Menu).mount('#app')