import { getc3Data } from './index'
// import { ArcballControls } from './ArcballControls.js'
import { ObjectControls } from './ObjectControls.js';

window.showObject = {}

window.atomInfos = {
    C: {
        radius: 0.43,
        color: "black",
    },
    H: {
        radius: 0.39,
        color: "#fff",
    },
    O: {
        radius: 0.4,
        color: "red",
    }
}

const c3Data = {}
const requireAll = context => context.keys().map(context);
const allJson = require.context('../c3Data', false, /.json/);
const paths = allJson.keys()
requireAll(allJson).forEach((data, i) => {
    const name = paths[i].split('/').pop().replace('.json', '')
    c3Data[name] = getc3Data(data)
});

window.c3Data = c3Data

AFRAME.registerGeometry('electronPair', {
    schema: {
    },

    init: function (data) {
        const curve = new THREE.CubicBezierCurve(
            new THREE.Vector2(0, 0),
            new THREE.Vector2(1.05, 0.05),
            new THREE.Vector2(0.7, 1.46),
            new THREE.Vector2(0, 1.91),
        );
        const points = curve.getPoints(50);

        this.geometry = new THREE.LatheGeometry(points, 30);
    }
});

AFRAME.registerComponent("axes-helper", {
    schema: {
        size: {
            type: "number",
	        default: 1
        }
    },
    init: function () {
        var data = this.data;
        this.axes = new THREE.AxesHelper(data.size);
        this.el.setObject3D("axes-helper", this.axes);
    }
});

AFRAME.registerComponent('shadow-material', {
    init() {
        this.material = new THREE.ShadowMaterial();
        this.el.getOrCreateObject3D('mesh').material = this.material;
        this.material.opacity = 0.2;
    }
});


AFRAME.registerComponent('use-rotate', {
    init() {
        window.showObject[this.el.object3D.uuid] = this.el.object3D
        
        setObjectToMove()
    },
    remove: function () {
        delete window.showObject[this.el.object3D.uuid]
        setObjectToMove()
    }
});

function setObjectToMove(){
    const vals =  Object.values(window.showObject)
    if(vals.length===0){
        window.objectControls.setObjectToMove([])
        return
    } 
    if(vals.length===1){
        window.objectControls.setObjectToMove(vals[0])
        return
    } 
    window.objectControls.setObjectToMove(vals)
}

// AFRAME.registerComponent('arcball-controls', {

//     schema: {
  
//       initialPosition: { type: 'vec3' },
  
//       target: { type: 'vec3' },
//     },
//     init: function () {
//       var el = this.el;
//       this.target = new THREE.Vector3();
//       el.getObject3D('camera').position.copy(this.data.initialPosition);
//     },
  
//     pause: function () {
//       this.controls.dispose();
//     },
  
//     play: function () {
//       const el = this.el;
  
//       this.controls = new ArcballControls(el.getObject3D('camera'), el.sceneEl.renderer.domElement, document.querySelector('a-scene').object3D);
//       this.controls.setGizmosVisible(false)
//       this.update();
//     },
  
//     update: function (oldData) {
//       var controls = this.controls;
//       var data = this.data;
  
//       if (!controls) { return; }
//       controls.target = this.target.copy(data.target);
//     },
  
//     tick: function () {
//       var controls = this.controls;
  
//       this.controls.update();
//     },
  
//     remove: function () {
//       this.controls.reset();
//       this.controls.dispose();
//     }
//   });
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
        this.controls.dispose&&this.controls.dispose();
    },
  
    play: function () {
      const el = this.el;
      const camera = el.getObject3D('camera')
      const domElement = el.sceneEl.renderer.domElement
  
      const controls = new ObjectControls(camera, domElement, []);
      controls.setDistance(-10, 10); // set min - max distance for zoom
      controls.setZoomSpeed(0.5); // set zoom speed
      controls.enableVerticalRotation();
      controls.setMaxVerticalRotationAngle(Math.PI, Math.PI);
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
      this.controls.dispose&&this.controls.dispose();
    }
  });