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
    C: {
        radius: 0.43,
        color: "#575555",
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


const str1 = ` 3.2742   -1.4297   -0.0620 C
  3.5714   -0.0192   -0.0850 C
  3.3119    0.7909    1.0789 C
  2.7182   -2.0292    1.1233 C
  2.7702   -1.7990   -1.3612 C
  3.2507    0.4831   -1.3992 C
  2.7332    2.1042    0.9300 C
  2.7559    0.1913    2.2642 C
  1.6574   -2.9989    1.0111 C
  2.4586   -1.2192    2.2872 C
  1.7093   -2.7687   -1.4734 C
  2.7559   -0.6159   -2.1872 C
  2.6725    1.7952   -1.5485 C
  1.8190    2.3154    2.0245 C
  2.4129    2.6056   -0.3832 C
  1.8327    1.1333    2.8495 C
  1.1533   -3.3682   -0.2881 C
  0.7420   -2.7877    2.1063 C
  1.2367   -1.6887    2.8943 C
  0.6344   -2.5573   -2.4125 C
  1.6822   -0.4043   -3.1256 C
  1.5988    2.0068   -2.4870 C
  0.5863    3.0270    1.8062 C
  1.1802    3.3171   -0.6015 C
  0.6120    0.6637    3.4559 C
 -0.2660   -3.5283   -0.4930 C
 -0.6762   -2.9475    1.9021 C
  0.3141   -0.7480    3.4792 C
 -0.5863   -3.0270   -1.8062 C
  0.6207   -1.3752   -3.2375 C
  1.1040    0.9078   -3.2750 C
  0.6762    2.9475   -1.9021 C
  0.2660    3.5283    0.4930 C
 -0.6344    2.5573    2.4125 C
 -0.6207    1.3752    3.2375 C
 -1.1802   -3.3171    0.6015 C
 -1.5988   -2.0068    2.4870 C
 -1.1040   -0.9078    3.2750 C
 -1.8190   -2.3154   -2.0245 C
 -0.6120   -0.6637   -3.4559 C
 -0.3141    0.7480   -3.4792 C
 -0.7420    2.7877   -2.1063 C
 -1.1533    3.3682    0.2881 C
 -1.7093    2.7687    1.4734 C
 -1.6822    0.4043    3.1256 C
 -2.4129   -2.6056    0.3832 C
 -2.6725   -1.7952    1.5485 C
 -2.7332   -2.1042   -0.9300 C
 -1.8327   -1.1333   -2.8495 C
 -1.2367    1.6887   -2.8943 C
 -1.6574    2.9989   -1.0111 C
 -2.7702    1.7990    1.3612 C
 -2.7559    0.6159    2.1872 C
 -3.2507   -0.4831    1.3992 C
 -3.3119   -0.7909   -1.0789 C
 -2.7559   -0.1913   -2.2642 C
 -2.4586    1.2192   -2.2872 C
 -2.7182    2.0292   -1.1233 C
 -3.2742    1.4297    0.0620 C
 -3.5714    0.0192    0.0850 C`

const str2 = `  1  2
1  4
1  5
2  3
2  6
3  7
3  8
4  9
4 10
5 11
5 12
6 12
6 13
7 14
7 15
8 10
8 16
9 17
9 18
10 19
11 17
11 20
12 21
13 15
13 22
14 16
14 23
15 24
16 25
17 26
18 19
18 27
19 28
20 29
20 30
21 30
21 31
22 31
22 32
23 33
23 34
24 32
24 33
25 28
25 35
26 29
26 36
27 36
27 37
28 38
29 39
30 40
31 41
32 42
33 43
34 35
34 44
35 45
36 46
37 38
37 47
38 45
39 48
39 49
40 41
40 49
41 50
42 50
42 51
43 44
43 51
44 52
45 53
46 47
46 48
47 54
48 55
49 56
50 57
51 58
52 53
52 59
53 54
54 60
55 56
55 60
56 57
57 58
58 59
59 60`

 function getatoms (str){
    const atoms = []
    str.split('\n').forEach((it,i)=>{
      const [x,y,z,type] = it.split(" ").filter(it=>it!=='')
      atoms.push({
        id: i+1,
        symbol: type,
        cartCoords: `${x} ${y} ${z}`
      }) 
    })
    return atoms
 }

 function getbonds(str,atoms){
    const length = atoms.length
    const bonds = []
    str.split('\n').forEach((it,i)=>{
        const [x,y] = it.split(" ").filter(it=>it!=='')
        bonds.push({
            id: length+i+1,
            bondAtom1: x,
            bondAtom2: y,
            bondOrderType: "0",
            bondOrder: "1",
            color:'#fff'
          })
    })
    return bonds
 }

 const atom = getatoms(str1)
 const bond = getbonds(str2,atom)
//  console.log(JSON.stringify({atom,bond}));
