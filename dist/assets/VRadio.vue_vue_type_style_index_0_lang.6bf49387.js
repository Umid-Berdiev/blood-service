import{u as a,b as l}from"./VControl.db99b51d.js";import{q as e,r as s,x as d,y as o,o as u,a as i,w as t,$ as n,e as r,p,aj as m,b as v,Y as f,Z as c,i as V,t as b,f as y}from"./index.4a029cdd.js";const q=["id","value","name"],$=r("span",null,null,-1),_=e({__name:"VRadio",props:{id:{default:void 0},value:null,modelValue:{default:void 0},name:{default:void 0},label:{default:void 0},color:{default:void 0},square:{type:Boolean},solid:{type:Boolean},paddingless:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:_}){var g,j;const x=e,B=s(a({id:x.id,inherit:!1})),w=d(null!=(j=null==(g=null==B?void 0:B.field)?void 0:g.value)?j:x.modelValue);return o(w,(()=>{_("update:modelValue",w.value)})),o((()=>x.modelValue),(()=>{w.value=x.modelValue})),(a,e)=>{const s=l;return u(),i(s,{raw:"",class:y(["radio",[x.solid?"is-solid":"is-outlined",x.square&&"is-square",x.color&&`is-${x.color}`,x.paddingless&&"is-paddingless"]])},{default:t((()=>[n(r("input",p({id:B.id,"onUpdate:modelValue":e[0]||(e[0]=a=>w.value=a),type:"radio",value:x.value,name:x.name},a.$attrs),null,16,q),[[m,w.value]]),$,v(a.$slots,"default",f(c(B)),(()=>[V(b(x.label),1)]))])),_:3},8,["class"])}}});export{_};
