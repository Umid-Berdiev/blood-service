import{q as e,r as l,x as a,y as u,c as d,$ as n,a0 as o,o as t,d as r,f as s,K as i}from"./index.0abd75ed.js";import{u as p}from"./VControl.93d0bd46.js";const v=["id","name","true-value","false-value"],m=e({__name:"VInput",props:{raw:{type:Boolean},modelValue:{default:""},trueValue:{type:Boolean,default:!0},falseValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:m}){var f,V;const h=e,c=l(p({create:!1,help:"VInput"})),B=a(null!=(V=null==(f=c.field)?void 0:f.value)?V:h.modelValue);u(B,(()=>{m("update:modelValue",B.value)})),u((()=>h.modelValue),(()=>{B.value=h.modelValue}));const y=d((()=>h.raw?[]:["input"]));return(e,l)=>n((t(),r("input",{id:c.id,"onUpdate:modelValue":l[0]||(l[0]=e=>B.value=e),class:s(i(y)),name:c.id,"true-value":h.trueValue,"false-value":h.falseValue,onChange:l[1]||(l[1]=(...e)=>{var l,a;return(null==(l=c.field)?void 0:l.handleChange)&&(null==(a=c.field)?void 0:a.handleChange(...e))}),onBlur:l[2]||(l[2]=(...e)=>{var l,a;return(null==(l=c.field)?void 0:l.handleBlur)&&(null==(a=c.field)?void 0:a.handleBlur(...e))})},null,42,v)),[[o,B.value]])}});export{m as _};
