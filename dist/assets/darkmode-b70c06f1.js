import{D as a,c as s}from"./chunk-BGPNDDXN-dcda8805.js";import{b as e,u as o}from"./@vueuse_core-098eb702.js";import{d as t}from"./pinia-3af6ce52.js";const r="is-dark",u=()=>{const s=c();a((()=>{const a=document.documentElement;s.isDark?a.classList.add(r):a.classList.remove(r)}))},c=t("darkmode",(()=>{const a=e(),t=o("color-schema","auto"),r=s({get:()=>"auto"===t.value?a.value:"dark"===t.value,set(s){s===a.value?t.value="auto":t.value=s?"dark":"light"}});return{isDark:r,onChange:a=>{const s=a.target;r.value=!s.checked}}}));export{u as i,c as u};
