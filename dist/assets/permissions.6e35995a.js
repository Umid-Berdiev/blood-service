import{_ as e}from"./VTabs.vue_vue_type_script_setup_true_lang.1e0edf93.js";import{_ as a,a as s}from"./VControl.ca63cac0.js";import{_ as t}from"./VSwitchBlock.vue_vue_type_style_index_0_lang.49381ac4.js";import{q as l,C as u,G as i,x as o,J as n,c as r,a8 as c,o as d,d as p,k as _,w as v,e as m,t as b,F as f,l as w}from"./index.5a18e8c8.js";import{_ as y}from"./lodash.b14eab3e.js";import{u as h}from"./viewWrapper.fed031e8.js";import{f as j,b as x,d as V}from"./index.57b33b24.js";import{_ as g}from"./_plugin-vue_export-helper.cdc0426e.js";import"./VIcon.vue_vue_type_script_setup_true_lang.0c07e904.js";import"./VInput.vue_vue_type_script_setup_true_lang.052c7129.js";const k={class:"permissions-detail-wrapper"},N={class:"active_tab_content p-5"},I={class:"is-size-5 mb-5"},U={class:"table is-striped is-fullwidth"},$=y.isEmpty,C=g(l({__name:"permissions",async setup(l){var y,g,C;let R,T;const{t:q,locale:z}=u(),B=h(),E=null!=(g=null==(y=i().params)?void 0:y.id)?g:"",F=o(),G=o([]),J=o();function M(e){var a;J.value=(null==(a=G.value)?void 0:a.find((a=>a.value===e)))||G.value[0]}return n({title:r((()=>q("Role_permissions")))}),[R,T]=c((()=>async function(){const e=await j(Number(E));F.value=await e}())),await R,T(),[R,T]=c((()=>async function(){const e=await x(Number(E));G.value=await e,$(G.value)||(J.value=G.value[0])}())),await R,T(),B.setPageTitle(`${q("Role_permissions")}: ${null==(C=F.value)?void 0:C.name[z.value]}`),(l,u)=>{var i;const o=t,n=a,r=s,c=e;return d(),p("div",k,[_(c,{selected:null==(i=J.value)?void 0:i.value,tabs:G.value,type:"boxed",class:"boxed_tabs","onUpdate:selected":M},{tab:v((({activeValue:e})=>{var a;return[m("div",N,[m("h1",I,b(l.$t("Methods"))+": "+b(null==(a=J.value)?void 0:a.label),1),m("table",U,[m("tbody",null,[(d(!0),p(f,null,w(J.value.methods,(e=>(d(),p("tr",null,[m("td",null,b(e.method),1),m("td",null,[_(r,null,{default:v((()=>[_(n,null,{default:v((()=>[_(o,{name:e.id,color:"primary",checked:1===e.value,"onUpdate:modelValue":a=>async function(e,a){if(200===(await V(a,Number(e))).status){const e=await x(Number(E));G.value=await e}}(a,e.id)},null,8,["name","checked","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024)])])))),256))])])])]})),_:1},8,["selected","tabs"])])}}}),[["__scopeId","data-v-ec1838c9"]]);export{C as default};
