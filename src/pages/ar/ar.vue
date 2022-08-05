<template>
    <a-scene embedded device-orientation-permission-ui="enabled: false" :renderer="`antialias: true;
    colorManagement: true;
    sortObjects: true;
    physicallyCorrectLights: true;
    logarithmicDepthBuffer: true;
    maxCanvasWidth: -1;
    maxCanvasHeight: -1 ;`"
        :arjs="`sourceType: webcam;sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960;debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 4x4_BCH_13_5_5;cameraParametersUrl:./data/camera_para.dat`"
        vr-mode-ui="enabled: false">
        <BaseMarker id="0" type="4+0" :showData="showData" />
        <BaseMarker id="1" type="3+1" :showData="showData" />
        <BaseMarker id="2" type="H2O" :showData="showData" />
        <BaseMarker id="3" type="NH3" :showData="showData" />
        <a-entity camera look-controls="enabled: false" object-controls="target: 0 0 0; initialPosition: 0 0 0">
        </a-entity>
        <a-entity light="type: ambient; intensity: 1.8;"></a-entity>
        <a-entity light="type: directional;
                   castShadow: true;
                   intensity: 1.6;" position="-5 3 1.5"></a-entity>

    </a-scene>
    <div class="qr-scanner" v-show="isShowScan">
        <div class="box">
            <div class="line"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import BaseMarker from "../../components/BaseMarker.vue";
const hasInit = ref(false)
const showData = reactive({});
// const width = ref(480);
// const height = ref(640);
// const width1 = ref(window.innerWidth);
// const height1 = ref(window.innerHeight);
// if(window.orientation===0){
// width.value = 633
// height.value = 844
// }
// window.addEventListener('camera-init',  ()=>{
//     hasInit.value = true
//     const main = parent.window.document.getElementsByClassName('main')[0]
//     if (main) main.parentNode.removeChild(main)
//     setTimeout(()=>{
//         console.log(document.querySelector('video').style.width);
//     },0)
// });

window.addEventListener('arjs-video-style', (e) => {
    const { width, height } = e.detail
    const canvas = window.document.getElementsByClassName('a-canvas')[0]
    canvas.style.cssText = `position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);width: ${width}px;height:  ${height}px;`

});
// window.dispatchEvent(new CustomEvent("arjs-video-style", {detail: { width:B.domElement.clientWidth,height: B.domElement.clientHeight}}))
window.addEventListener('arjs-video-loaded', (e) => {
    // const videoEl = e.detail.component
    hasInit.value = true
    const main = parent.window.document.getElementsByClassName('main')[0]
    if (main) main.parentNode.removeChild(main)
    // console.log(videoEl);
    // videoEl.play()
    // function doPlay() {
    //     videoEl.play()
    //     WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
    //         videoEl.play()
    //     })
    // }
    // if (window.WeixinJSBridge) {
    //     doPlay()
    // }
    // else {
    //     document.addEventListener("WeixinJSBridgeReady", function () {
    //         doPlay()
    //     }, false);
    // }

});


const isShowScan = computed(() => {
    return Object.keys(showData).length > 0 && hasInit ? false : true
});
</script>

<style lang="scss">
* {
    font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji", sans-serif;
}

body {
    overflow: hidden;
}

#app {
    // overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}

.qr-scanner {
    background-size: 3rem 3rem;
    background-position: -1rem -1rem;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
}

.qr-scanner .box {
    width: 75vw;
    height: 75vw;
    max-height: 75vh;
    max-width: 75vh;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
}

.qr-scanner .line {
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 255, 51, 0) 70%, #00ff33 280%);
    transform: translateY(-100%);
    animation: radar-beam 3s infinite;
    animation-timing-function: cubic-bezier(0.53, 0, 0.43, 0.99);
}

@keyframes radar-beam {
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(0);
    }
}
</style>

