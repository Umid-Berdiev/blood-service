import{l as e,m as l,Q as a,P as t,a as s,t as u,q as r,p as o,M as d,W as n,V as p}from"./chunk-BGPNDDXN-dcda8805.js";import{_ as c}from"./_plugin-vue_export-helper-1b428a4d.js";import{_ as i,a as m}from"./VControl-fc151345.js";const v={class:"flex-table-toolbar"},f={class:"left"},_={class:"right"};const h=c({},[["render",function(s,u){return e(),l("div",v,[a("div",f,[t(s.$slots,"left")]),a("div",_,[t(s.$slots,"right")])])}]]),V={class:"select is-rounded"},g=["selected","value"],b=s({__name:"PerPageSelect",props:{modelValue:{default:10}},emits:["update:modelValue"],setup(t,{emit:s}){const c=[5,10,25,50];return(v,f)=>{const _=i,h=m;return e(),u(h,null,{default:r((()=>[o(_,null,{default:r((()=>[a("div",V,[a("select",{onInput:f[0]||(f[0]=e=>{var l;return s("update:modelValue",null==(l=e.target)?void 0:l.value)})},[(e(),l(d,null,n(c,(e=>a("option",{key:e,selected:t.modelValue===e,value:e},p(e)+" results per page ",9,g))),64))],32)])])),_:1})])),_:1})}}}),x=["value","placeholder"],I=c(s({__name:"SearchInput",props:{modelValue:{default:""}},emits:["update:modelValue"],setup:(l,{emit:t})=>(s,d)=>{const n=i,p=m;return e(),u(p,null,{default:r((()=>[o(n,{icon:"feather:search"},{default:r((()=>[a("input",{value:l.modelValue,type:"text",class:"input is-rounded",placeholder:s.$t("Search")+"...",onInput:d[0]||(d[0]=e=>{var l;return t("update:modelValue",null==(l=e.target)?void 0:l.value)})},null,40,x)])),_:1})])),_:1})}}),[["__scopeId","data-v-fdb5281d"]]);export{I as _,b as a,h as b};