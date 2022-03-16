import { createApp } from 'vue'
import App from './App.vue'
import AFRAME from 'aframe';
const app = createApp(App);
app.use(AFRAME);
app.mount('#app')


AFRAME.registerPrimitive('a-atom', {
    // Attaches the `ocean` component by default.
    // Defaults the ocean to be parallel to the ground.
    defaultComponents: {
        atom: {},
        geometry: { primitive: 'sphere' }
    },

    // Maps HTML attributes to the `ocean` component's properties.
    mappings: {
        width: 'atom.width',
        depth: 'atom.depth',
        density: 'atom.density',
        color: 'atom.color',
        opacity: 'atom.opacity'
    }
});