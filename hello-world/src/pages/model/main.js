import 'normalize.css';
import '../../utils/global.js'
import { ArcballControls } from '../../utils/ArcballControls.js'
import { createApp } from 'vue'
import model from './model.vue'

createApp(model).mount('#app')
AFRAME.registerComponent('arcball-controls', {

  schema: {

    initialPosition: {type: 'vec3'},

    target: {type: 'vec3'},
  },
  init: function () {
    var el = this.el;
    this.target = new THREE.Vector3();
    el.getObject3D('camera').position.copy(this.data.initialPosition);
  },

  pause: function () {
    this.controls.dispose();
  },

  play: function () {
    const el = this.el;

    this.controls = new ArcballControls(el.getObject3D('camera'), el.sceneEl.renderer.domElement, document.querySelector('a-scene').object3D);
    this. controls.setGizmosVisible(false)
    this.update();
  },

  update: function (oldData) {
    var controls = this.controls;
    var data = this.data;

    if (!controls) { return; }
    controls.target = this.target.copy(data.target);
  },

  tick: function () {
    var controls = this.controls;

    this.controls.update();
  },

  remove: function () {
    this.controls.reset();
    this.controls.dispose();
  }
});