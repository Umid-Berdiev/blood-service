import{q as e,r as l,x as a,y as u,c as n,$ as d,a0 as o,K as t,o as s,d as r,U as i,f as p}from"./index-f93ac3f8.js";import{u as m}from"./VControl-6db07387.js";const v=["id","name","true-value","false-value"],f=e({__name:"VInput",props:{raw:{type:Boolean},modelValue:{default:""},trueValue:{type:Boolean,default:!0},falseValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:f}){var V;const h=e,c=l(m({create:!1,help:"VInput"})),B=a((null==(V=c.field)?void 0:V.value)??h.modelValue);u(B,(()=>{f("update:modelValue",B.value)})),u((()=>h.modelValue),(()=>{B.value=h.modelValue}));const y=n((()=>h.raw?[]:["input"]));return(e,l)=>d((s(),r("input",{id:t(c).id,"onUpdate:modelValue":l[0]||(l[0]=e=>i(B)?B.value=e:null),class:p(t(y)),name:t(c).id,"true-value":h.trueValue,"false-value":h.falseValue,onChange:l[1]||(l[1]=(...e)=>{var l,a;return(null==(l=t(c).field)?void 0:l.handleChange)&&(null==(a=t(c).field)?void 0:a.handleChange(...e))}),onBlur:l[2]||(l[2]=(...e)=>{var l,a;return(null==(l=t(c).field)?void 0:l.handleBlur)&&(null==(a=t(c).field)?void 0:a.handleBlur(...e))})},null,42,v)),[[o,t(B)]])}});export{f as _};
