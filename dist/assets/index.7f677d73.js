import{r as a,o as u,c as f,a as n,w as c,F as p,b as i,d as _}from"./vendor.8d486aaf.js";const m=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};m();const h=i("div",{class:"arjs-loader"},[i("div",null,"Loading, please wait...")],-1),y={setup(d){return(r,l)=>{const o=a("a-entity"),e=a("a-nft"),t=a("a-scene");return u(),f(p,null,[h,n(t,{"vr-mode-ui":"enabled: false;",renderer:"logarithmicDepthBuffer: true;",embedded:"",arjs:"trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"},{default:c(()=>[n(e,{type:"nft",url:"dist/trex/trex-image/all",smooth:"true",smoothCount:"10",smoothTolerance:".01",smoothThreshold:"5"},{default:c(()=>[n(o,{"gltf-model":"./trex/scene.gltf",scale:"5 5 5",position:"50 150 0"})]),_:1}),n(o,{camera:""})]),_:1})],64)}}};document.addEventListener("deviceready",()=>{_(y).mount("#app")});
