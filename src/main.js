import { createApp } from 'vue'
import { createPinia, defineStore } from 'pinia'
import { Drawer, Menu } from 'ant-design-vue';
import App from './App.vue'

AFRAME.registerGeometry('box1', {
    schema: {
    },

    init: function (data) {
        const curve = new THREE.CubicBezierCurve(
            new THREE.Vector2( 0, 0 ),
            new THREE.Vector2( 0.47, 0.28 ),
            new THREE.Vector2( 0.42, 0.96 ),
            new THREE.Vector2( 0, 2.29 ),
           
        );
        const points = curve.getPoints( 50 );

        this.geometry = new THREE.LatheGeometry(points);
    }
});


const app = createApp(App);
app.use(Drawer).use(Menu).use(createPinia())
app.mount('.chem-3d')


