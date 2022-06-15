import 'normalize.css';
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.mount('.chem-3d')

window.addEventListener('camera-init', function () {
    const main = document.getElementsByClassName('main')[0]
    main.parentNode.removeChild(main)
});


