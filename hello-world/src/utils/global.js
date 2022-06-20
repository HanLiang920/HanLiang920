import { getc3Data } from './index'
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
requireAll(allJson).forEach((data,i) => {
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

AFRAME.registerComponent('shadow-material', {
    init() {
        this.material = new THREE.ShadowMaterial();
        this.el.getOrCreateObject3D('mesh').material = this.material;
        this.material.opacity = 0.2;
    }
  });