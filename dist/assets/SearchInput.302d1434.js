import{o as e,d as a,e as l,b as t,q as s,a as u,w as r,k as o,F as d,l as n,t as c}from"./index.5a18e8c8.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{_ as i,a as m}from"./VControl.ca63cac0.js";const v={class:"flex-table-toolbar"},f={class:"left"},_={class:"right"};const h=p({},[["render",function(s,u){return e(),a("div",v,[l("div",f,[t(s.$slots,"left")]),l("div",_,[t(s.$slots,"right")])])}]]),V={class:"select is-rounded"},g=["selected","value"],b=s({__name:"PerPageSelect",props:{modelValue:{default:10}},emits:["update:modelValue"],setup(t,{emit:s}){const p=[5,10,25,50];return(v,f)=>{const _=i,h=m;return e(),u(h,null,{default:r((()=>[o(_,null,{default:r((()=>[l("div",V,[l("select",{onInput:f[0]||(f[0]=e=>{var a;return s("update:modelValue",null==(a=e.target)?void 0:a.value)})},[(e(),a(d,null,n(p,(e=>l("option",{key:e,selected:t.modelValue===e,value:e},c(e)+" results per page ",9,g))),64))],32)])])),_:1})])),_:1})}}}),x=["value","placeholder"],I=p(s({__name:"SearchInput",props:{modelValue:{default:""}},emits:["update:modelValue"],setup:(a,{emit:t})=>(s,d)=>{const n=i,c=m;return e(),u(c,null,{default:r((()=>[o(n,{icon:"feather:search"},{default:r((()=>[l("input",{value:a.modelValue,type:"text",class:"input is-rounded",placeholder:s.$t("Search")+"...",onInput:d[0]||(d[0]=e=>{var a;return t("update:modelValue",null==(a=e.target)?void 0:a.value)})},null,40,x)])),_:1})])),_:1})}}),[["__scopeId","data-v-fdb5281d"]]);export{I as _,b as a,h as b};
