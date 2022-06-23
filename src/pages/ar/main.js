import 'normalize.css';
import '../../utils/global.js'
import { createApp } from 'vue'
import ar from './ar.vue'

createApp(ar).mount('#app')


window.addEventListener('camera-init', function () {
    const main = parent.window.document.getElementsByClassName('main')[0]
    if (main) main.parentNode.removeChild(main)
});
