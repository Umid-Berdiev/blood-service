import{u as a,b as e}from"./VControl-6b9015e2.js";import{q as l,r as s,x as u,c as o,y as d,o as t,a as r,w as i,_ as p,e as n,p as c,K as f,S as v,ah as m,b as V,X as b,Y as w,i as x,t as y,f as C}from"./index-ef344eb7.js";const _=["id","true-value","false-value","value"],h=n("span",null,null,-1),B=l({__name:"VCheckbox",props:{raw:{type:Boolean},label:{default:void 0},color:{default:void 0},trueValue:{default:!0},falseValue:{default:!1},value:{default:void 0},modelValue:{default:!1},circle:{type:Boolean,default:!1},solid:{type:Boolean,default:!1},paddingless:{type:Boolean,default:!1},wrapperClass:{default:void 0}},emits:["update:modelValue"],setup(l,{emit:B}){var g;const k=l,$=s(a()),j=u((null==(g=$.field)?void 0:g.value)??k.modelValue),Y=o((()=>k.raw?[k.wrapperClass]:["checkbox",k.wrapperClass,k.solid?"is-solid":"is-outlined",k.circle&&"is-circle",k.color&&`is-${k.color}`,k.paddingless&&"is-paddingless"]));return d(j,(()=>{B("update:modelValue",j.value)})),d((()=>k.modelValue),(()=>{j.value=k.modelValue})),(a,l)=>{const s=e;return t(),r(s,{raw:"",class:C(f(Y))},{default:i((()=>[p(n("input",c({id:f($).id,"onUpdate:modelValue":l[0]||(l[0]=a=>v(j)?j.value=a:null)},a.$attrs,{"true-value":k.trueValue,"false-value":k.falseValue,value:k.value,type:"checkbox"}),null,16,_),[[m,f(j)]]),h,V(a.$slots,"default",b(w(f($))),(()=>[x(y(k.label),1)]))])),_:3},8,["class"])}}});export{B as _};
