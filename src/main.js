import { createApp } from 'vue'
import { createStore } from 'vuex'
import { Drawer, Menu } from 'ant-design-vue';
import {getc3Data} from './utils'
import App from './App.vue'
import store from './store'

const c3Data = {}
const modules = import.meta.globEager('./c3Data/*.json')
for (const path in modules) {
    const name = path.split('/').pop().replace('.json', '')
    c3Data[name] = getc3Data(modules[path].default)
}
window.c3Data = c3Data

window.atomInfos = {
    C: {
        radius: 0.43,
        color: "black",
    },
    H: {
        radius: 0.39,
        color: "#cdcdcd",
    },
};

const app = createApp(App);
app.use(Drawer).use(Menu).use(createStore(store))
app.mount('.chem-3d')
