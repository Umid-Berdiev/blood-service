import{q as e,C as o,x as s,c as a,U as l,B as n,o as c,a as t,e as d,s as i,m as r,t as m,f as u,b as v,K as p,aL as b}from"./index.ce4ddab7.js";const y={class:"modal-content"},f={class:"modal-card"},h={class:"modal-card-head"},x=[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"},null,-1)],B={class:"inner-content"},L=e({__name:"VModal",props:{title:null,size:{default:void 0},actions:{default:void 0},open:{type:Boolean},rounded:{type:Boolean},noscroll:{type:Boolean},noclose:{type:Boolean},tabs:{type:Boolean},cancelLabel:{default:void 0}},emits:["close"],setup(e,{emit:L}){const k=e,{t:C}=o(),K=s(!1),$=a((()=>k.cancelLabel||C("cancel-label")));return l((()=>{k.noscroll&&k.open?(document.documentElement.classList.add("no-scroll"),K.value=!0):K.value&&k.noscroll&&!k.open&&(document.documentElement.classList.remove("no-scroll"),K.value=!1)})),n((()=>{document.documentElement.classList.remove("no-scroll")})),(o,s)=>(c(),t(b,{to:"body"},[d("div",{class:u([[e.open&&"is-active",e.size&&`is-${e.size}`],"modal v-modal"])},[d("div",{class:"modal-background v-modal-close",tabindex:"0",onKeydown:s[0]||(s[0]=i(r((()=>!1===e.noclose&&L("close")),["prevent"]),["space"])),onClick:s[1]||(s[1]=()=>!1===e.noclose&&L("close"))},null,32),d("div",y,[d("div",f,[d("header",h,[d("h3",null,m(e.title),1),d("button",{class:"v-modal-close ml-auto","aria-label":"close",tabindex:"0",onKeydown:s[2]||(s[2]=i(r((e=>L("close")),["prevent"]),["space"])),onClick:s[3]||(s[3]=e=>L("close"))},x,32)]),d("div",{class:u(["modal-card-body",[k.tabs&&"has-tabs"]])},[d("div",B,[v(o.$slots,"content")])],2),d("div",{class:u(["modal-card-foot",["center"===e.actions&&"is-centered","right"===e.actions&&"is-end"]])},[v(o.$slots,"cancel",{close:()=>L("close")},(()=>[d("a",{tabindex:"0",class:u(["button v-button v-modal-close",[e.rounded&&"is-rounded"]]),onKeydown:s[4]||(s[4]=i(r((e=>L("close")),["prevent"]),["space"])),onClick:s[5]||(s[5]=e=>L("close"))},m(p($)),35)])),v(o.$slots,"action",{close:()=>L("close")})],2)])])],2)]))}});export{L as _};