import{b as e}from"./VControl.6c3280e9.js";import{_ as a}from"./VInput.vue_vue_type_script_setup_true_lang.cd1d6ea2.js";import{q as l,x as s,aU as o,y as t,o as u,d,a as c,w as i,k as n,p as r,K as m,f as p,s as h,m as V,e as _,t as f,g as v}from"./index.64f80ae1.js";const w=_("div",{class:"slider"},null,-1),b=_("i",{"aria-hidden":"true"},null,-1),k={key:2,class:"text"},y=l({__name:"VSwitchBlock",props:{modelValue:{default:!1},label:{default:void 0},color:{default:void 0},thin:{type:Boolean}},emits:["update:modelValue"],setup(l,{emit:y}){const x=l,g=s(x.modelValue),j=o();return t(g,(()=>{y("update:modelValue",g.value)})),t((()=>x.modelValue),(()=>{g.value=x.modelValue})),(l,s)=>{const o=a,t=e;return u(),d("div",{class:p([x.label&&"switch-block",x.thin&&x.label&&"thin-switch-block"])},[x.thin?(u(),c(t,{key:0,raw:"",class:p(["thin-switch",[x.color&&`is-${x.color}`]]),tabindex:"0",onKeydown:s[1]||(s[1]=h(V((()=>y("update:modelValue",!x.modelValue)),["prevent"]),["space"]))},{default:i((()=>[n(o,r({modelValue:g.value,"onUpdate:modelValue":s[0]||(s[0]=e=>g.value=e),type:"checkbox"},m(j)),null,16,["modelValue"]),w])),_:1},8,["class"])):(u(),c(t,{key:1,raw:"",class:p(["form-switch",[x.color&&`is-${x.color}`]])},{default:i((()=>[n(o,r({raw:"",checked:x.modelValue,type:"checkbox",class:"is-switch"},l.$attrs,{onChange:s[2]||(s[2]=e=>y("update:modelValue",!x.modelValue))}),null,16,["checked"]),b])),_:1},8,["class"])),x.label?(u(),d("div",k,[n(t,{raw:""},{default:i((()=>[_("span",null,f(x.label),1)])),_:1})])):v("",!0)],2)}}});export{y as _};