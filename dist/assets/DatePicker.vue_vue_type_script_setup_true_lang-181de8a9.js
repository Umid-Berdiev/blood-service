import{_ as e}from"./ClientOnly.vue_vue_type_script_lang-3cf31693.js";import{_ as a,a as l}from"./VControl-90e6c9df.js";import{q as t,C as s,x as o,r as n,c as u,j as i,o as r,a as p,w as m,k as d,K as c,U as _,e as f,p as V,ac as g,t as v}from"./index-202d6ef0.js";const k=["value"],Y={class:"help has-text-danger"},x=t({__name:"DatePicker",props:{modelValue:null,label:null,errorText:null},emits:["update:modelValue","editing"],setup(t,{emit:x}){const D=t,{locale:b}=s(),y=o({input:"DD.MM.YYYY"}),j=n({type:"string",mask:"YYYY-MM-DD"}),M=u({get:()=>D.modelValue,set(e){x("update:modelValue",e)}});return(s,o)=>{const n=a,u=l,x=i("VDatePicker"),D=e;return r(),p(D,null,{default:m((()=>[d(x,{modelValue:c(M),"onUpdate:modelValue":o[1]||(o[1]=e=>_(M)?M.value=e:null),mode:"date",locale:c(b),masks:c(y),"model-config":c(j),color:"green","trim-weeks":"",popover:{visibility:"click"}},{default:m((({inputValue:e,inputEvents:a})=>[d(u,{label:t.label},{default:m((()=>[d(n,{icon:"feather:calendar"},{default:m((()=>[f("input",V({class:"input v-input",type:"text",value:e},g(a,!0),{onInput:o[0]||(o[0]=e=>s.$emit("editing"))}),null,16,k)])),_:2},1024),f("p",Y,v(t.errorText),1)])),_:2},1032,["label"])])),_:1},8,["modelValue","locale","masks","model-config"])])),_:1})}}});export{x as _};
