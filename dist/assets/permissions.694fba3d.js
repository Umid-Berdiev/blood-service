import{_ as a}from"./VTabs.vue_vue_type_script_setup_true_lang.1e2fe854.js";import{_ as e,a as s}from"./VControl.c83da2bc.js";import{_ as t}from"./VSwitchBlock.vue_vue_type_style_index_0_lang.993c342e.js";import{q as l,C as u,G as i,x as o,J as n,c as r,a2 as c,o as d,d as p,k as _,w as v,e as m,t as b,F as f,l as w}from"./index.7c55eebc.js";import{_ as y}from"./lodash.ee52b868.js";import{u as h}from"./viewWrapper.36a4ca30.js";import{f as j,b as x,d as V}from"./index.4232be87.js";import{_ as g}from"./_plugin-vue_export-helper.cdc0426e.js";import"./VIcon.vue_vue_type_script_setup_true_lang.a288365d.js";import"./VInput.vue_vue_type_script_setup_true_lang.41205ab3.js";const k={class:"permissions-detail-wrapper"},N={class:"active_tab_content p-5"},I={class:"is-size-5 mb-5"},U={class:"table is-striped is-fullwidth"},$=y.isEmpty,C=g(l({__name:"permissions",async setup(l){var y,g,C;let R,T;const{t:q,locale:z}=u(),B=h(),E=null!=(g=null==(y=i().params)?void 0:y.id)?g:"",F=o(),G=o([]),J=o();function M(a){var e;J.value=(null==(e=G.value)?void 0:e.find((e=>e.value===a)))||G.value[0]}return n({title:r((()=>q("Role_permissions")))}),[R,T]=c((()=>async function(){const a=await j(Number(E));F.value=await a}())),await R,T(),[R,T]=c((()=>async function(){const a=await x(Number(E));G.value=await a,$(G.value)||(J.value=G.value[0])}())),await R,T(),B.setPageTitle(`${q("Role_permissions")}: ${null==(C=F.value)?void 0:C.name[z.value]}`),(l,u)=>{var i;const o=t,n=e,r=s,c=a;return d(),p("div",k,[_(c,{selected:null==(i=J.value)?void 0:i.value,tabs:G.value,type:"boxed",class:"boxed_tabs","onUpdate:selected":M},{tab:v((({activeValue:a})=>{var e;return[m("div",N,[m("h1",I,b(l.$t("Methods"))+": "+b(null==(e=J.value)?void 0:e.label),1),m("table",U,[m("tbody",null,[(d(!0),p(f,null,w(J.value.methods,(a=>(d(),p("tr",null,[m("td",null,b(a.method),1),m("td",null,[_(r,null,{default:v((()=>[_(n,null,{default:v((()=>[_(o,{name:a.id,color:"primary",checked:1===a.value,"onUpdate:modelValue":e=>async function(a,e){if(200===(await V(e,Number(a))).status){const a=await x(Number(E));G.value=await a}}(e,a.id)},null,8,["name","checked","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024)])])))),256))])])])]})),_:1},8,["selected","tabs"])])}}}),[["__scopeId","data-v-47229f90"]]);export{C as default};
