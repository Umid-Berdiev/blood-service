import{_ as a}from"./VTabs.vue_vue_type_script_setup_true_lang-b35d55fc.js";import{_ as e,a as s}from"./VControl-fc151345.js";import{_ as t}from"./VSwitchBlock.vue_vue_type_style_index_0_lang-a7242632.js";import{a as l,b as u,c as i,ac as o,l as r,m as n,p,q as m,Q as c,V as _,M as v,W as d}from"./chunk-BGPNDDXN-dcda8805.js";import{b as f}from"./chunk-DRAQDPQ2-4514f14e.js";import{u as b}from"./@vueuse_head-0d019878.js";import{u as j}from"./chunk-3UEUFEGV-d557e6b1.js";import{_ as h}from"./lodash-94527813.js";import{u as w}from"./viewWrapper-c60f0ce7.js";import{f as y,b as V,d as N}from"./index-2ac90bcb.js";import{_ as g}from"./_plugin-vue_export-helper-1b428a4d.js";import"./VIcon.vue_vue_type_script_setup_true_lang-287aecd9.js";import"./VInput.vue_vue_type_script_setup_true_lang-29181b77.js";import"./pinia-3af6ce52.js";import"./userSession-0c0e9684.js";import"./@vueuse_core-098eb702.js";const k={class:"permissions-detail-wrapper"},x={class:"active_tab_content p-5"},U={class:"is-size-5 mb-5"},D={class:"table is-striped is-fullwidth"},E=h.isEmpty,I=g(l({__name:"permissions",async setup(l){var h,g;let I,P;const{t:Q,locale:R}=j(),$=w(),B=(null==(h=f().params)?void 0:h.id)??"",G=u(),M=u([]),S=u();function T(a){var e;S.value=(null==(e=M.value)?void 0:e.find((e=>e.value===a)))||M.value[0]}return b({title:i((()=>Q("Role_permissions")))}),[I,P]=o((()=>async function(){const a=await y(Number(B));G.value=await a}())),await I,P(),[I,P]=o((()=>async function(){const a=await V(Number(B));M.value=await a,E(M.value)||(S.value=M.value[0])}())),await I,P(),$.setPageTitle(`${Q("Role_permissions")}: ${null==(g=G.value)?void 0:g.name[R.value]}`),(l,u)=>{var i;const o=t,f=e,b=s,j=a;return r(),n("div",k,[p(j,{selected:null==(i=S.value)?void 0:i.value,tabs:M.value,type:"boxed",class:"boxed_tabs","onUpdate:selected":T},{tab:m((({activeValue:a})=>{var e;return[c("div",x,[c("h1",U,_(l.$t("Methods"))+": "+_(null==(e=S.value)?void 0:e.label),1),c("table",D,[c("tbody",null,[(r(!0),n(v,null,d(S.value.methods,(a=>(r(),n("tr",null,[c("td",null,_(a.method),1),c("td",null,[p(b,null,{default:m((()=>[p(f,null,{default:m((()=>[p(o,{name:a.id,color:"primary",checked:1===a.value,"onUpdate:modelValue":e=>async function(a,e){if(200===(await N(e,Number(a))).status){const a=await V(Number(B));M.value=await a}}(e,a.id)},null,8,["name","checked","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024)])])))),256))])])])]})),_:1},8,["selected","tabs"])])}}}),[["__scopeId","data-v-ec1838c9"]]);export{I as default};