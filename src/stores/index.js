import { defineStore } from 'pinia'
import { getc3Data } from '../utils'
const atomInfos = {
    C: {
        radius: 0.43,
        color: "black",
    },
    H: {
        radius: 0.39,
        color: "#cdcdcd",
    },
    O:{
        radius: 0.4,
        color: "red",
    }
}

const c3Data = {}
const modules = import.meta.globEager('../c3Data/*.json')
for (const path in modules) {
    const name = path.split('/').pop().replace('.json', '')
    c3Data[name] = getc3Data(modules[path].default)
}

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useStore = defineStore('main', {
    state: () => ({
        atomInfos,
        c3Data,
        globalMarker: {}
    }),
    actions: {
        addMarker(id, data) {
            this.globalMarker[id] = data
        },
        removeMarker(id) {
            delete this.globalMarker[id]
        }
    }
})