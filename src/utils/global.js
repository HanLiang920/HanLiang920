import { getc3Data } from './index'
// import { ArcballControls } from './ArcballControls.js'
import { ObjectControls } from './ObjectControls.js';

window.showObject = {}

window.atomInfos = {
    type1: {
        radius: 0.4,
        color: "red",
    },
    type2: {
        radius: 0.39,
        color: "#fff",
    },
    type3: {
        radius: 0.39,
        color: "#114ccf",
    },
    type4: {
        radius: 0.05,
        color: "#114ccf",
    },
    type5: {
        radius: 0.16,
        color: "#114ccf",
    },
    C: {
        radius: 0.43,
        color: "black",
    },
    H: {
        radius: 0.39,
        color: "#fff",
    },
    B: {
        radius: 0.43,
        color: "black",
    },
    F: {
        radius: 0.39,
        color: "#fff",
    },
    O: {
        radius: 0.4,
        color: "red",
    },
    N: {
        radius: 0.4,
        color: "#1d0ff9",
    },
    P: {
        radius: 0.4,
        color: "#d76d1e",
    },
    S: {
        radius: 0.4,
        color: "yellow",
    }
}

const c3Data = {}
const requireAll = context => context.keys().map(context);
const allJson = require.context('../c3Data', false);
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

AFRAME.registerGeometry('zahua', {
    schema: {
    },

    init: function (data) {
        const curve = new THREE.CubicBezierCurve(
            new THREE.Vector2(0, 0),
            new THREE.Vector2(1.96, 0),
            new THREE.Vector2(3.27, 2.95),
            new THREE.Vector2(0, 3),
        );
        const points = curve.getPoints(50);

        this.geometry = new THREE.LatheGeometry(points, 30);
    }
});

AFRAME.registerGeometry('s-s', {
    schema: {
    },

    init: function (data) {
        const curve = new THREE.CubicBezierCurve(
            new THREE.Vector2(0, 0),
            new THREE.Vector2(1, 0),
            new THREE.Vector2(1, 2.4),
            new THREE.Vector2(0, 2.4),
        );
        const points = curve.getPoints(50);

        this.geometry = new THREE.LatheGeometry(points, 30);
    }
});

AFRAME.registerGeometry('s-p', {
    schema: {
    },

    init: function (data) {
        const curve = new THREE.CubicBezierCurve(
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0.6, -0.2),
            new THREE.Vector2(1.23, 1.9),
            new THREE.Vector2(0, 1.98),
        );
        const points = curve.getPoints(50);

        this.geometry = new THREE.LatheGeometry(points, 30);
    }
});

AFRAME.registerGeometry('p-pσ', {
    schema: {
    },

    init: function (data) {
        const curve = new THREE.CubicBezierCurve(
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0.8, 0.15),
            new THREE.Vector2(0.8, 1.9),
            new THREE.Vector2(0, 2.05),
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
      controls.setDistance(1, 10); // set min - max distance for zoom
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


// const str1 = `31.5592 45.0697 53.4012 P
// 32.1850 44.6777 56.3904 P
// 34.2710 45.9957 54.5369 P
// 31.6840 47.5133 55.2709 P
// 30.9052 44.5080 52.2531 O
// 31.5213 44.2774 54.8881 O
// 32.0059 43.8157 57.5237 O
// 33.7304 45.0357 55.8180 O
// 31.6233 46.2686 56.4143 O
// 31.1113 46.5907 53.9790 O
// 33.2250 45.3604 53.3808 O
// 35.6741 46.1334 54.2674 O
// 33.3271 47.3489 54.9111 O
// 31.1229 48.8023 55.5555 O`



// const str2 = `1  5
// 1  6
// 1 10
// 1 11
// 2  6
// 2  7
// 2  8
// 2  9
// 3  8
// 3 11
// 3 12
// 3 13
// 4  9
// 4 10
// 4 13
// 4 14`



//  function getatoms (str){
//     const atoms = []
//     str.split('\n').forEach((it,i)=>{
//       const [x,y,z,type] = it.split(" ").filter(it=>it!=='')
//       atoms.push({
//         id: i+1,
//         symbol: type,
//         cartCoords: `${x} ${y} ${z}`
//       }) 
//     })
//     return atoms
//  }

//  function getbonds(str,atoms){
//     const length = atoms.length
//     const bonds = []
//     str.split('\n').forEach((it,i)=>{
//         const [x,y] = it.split(" ").filter(it=>it!=='')
//         bonds.push({
//             id: length+i+1,
//             bondAtom1: x,
//             bondAtom2: y,
//             bondOrderType: "0",
//             bondOrder: "1",
//           })
//     })
//     return bonds
//  }

//  const atom = getatoms(str1)
//  const bond = getbonds(str2,atom)
// console.log(JSON.stringify({atom,bond}));
