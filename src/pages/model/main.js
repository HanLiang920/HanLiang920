import 'normalize.css';
import '../../utils/global.js'
import { createApp } from 'vue'
import model from './model.vue'
const app =createApp(model)
app.config.globalProperties.parentWindow = parent.window
app.mount('#app')


// effect
// console.log(parent.window.currentModel,parent.window.app,11111111);
