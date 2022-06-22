import 'normalize.css';
import '../../utils/global.js'
import { ArcballControls } from '../../utils/ArcballControls.js'
import { ObjectControls } from '../../utils/ObjectControls.js';
import { createApp } from 'vue'
import model from './model.vue'

createApp(model).mount('#app')
AFRAME.registerComponent('arcball-controls', {

  schema: {

    initialPosition: { type: 'vec3' },

    target: { type: 'vec3' },
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
    this.controls.setGizmosVisible(false)
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
AFRAME.registerComponent('object-controls', {
  schema: {
    initialPosition: { type: 'vec3' },
    target: { type: 'vec3' },
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
    const camera = el.getObject3D('camera')
    const domElement = el.sceneEl.renderer.domElement

    const controls = new ObjectControls(camera, domElement, []);
    controls.setDistance(8, 200); // set min - max distance for zoom
    controls.setZoomSpeed(0.5); // set zoom speed
    controls.enableVerticalRotation();
    controls.setMaxVerticalRotationAngle(Math.PI / 4, Math.PI / 4);
    controls.setRotationSpeed(0.05);
    this.controls = controls
    window.objectControls = controls
    this.update();
  },

  update: function (oldData) {
    var controls = this.controls;
    var data = this.data;

    if (!controls) { return; }
    controls.target = this.target.copy(data.target);
  },

  tick: function () {
    // var controls = this.controls;

    // this.controls.update();
  },

  remove: function () {
    this.controls.reset();
    this.controls.dispose();
  }
});