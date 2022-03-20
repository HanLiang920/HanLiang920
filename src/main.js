import { createApp } from 'vue'
import App from './App.vue'
import AFRAME from 'aframe';

const c3Data = {}
const modules = import.meta.globEager('./c3Data/*.json')
for (const path in modules) {
    console.log(path);
    const name = path.split('/').pop().replace('.json', '')
    c3Data[name] = getc3Data(modules[path].default)
}
window.c3Data = c3Data
function getc3Data(data) {
    const atom = {}
    data.atom.forEach(it => {
        const { id, symbol, cartCoords } = it
        const [y, z, x] = cartCoords.split(" ").map(it => Number(it))
        atom[id] = { symbol, x, y, z }
    });
    return { atom, bond: data.bond }
}
window.atomInfos = {
    C: {
        radius: 0.43,
        color: "black",
    },
    H: {
        radius: 0.39,
        color: "white",
    },
};

const app = createApp(App);
app.use(AFRAME);
app.mount('#app')