import{_ as a}from"./VTabs.vue_vue_type_script_setup_true_lang-12a2d2cd.js";import{_ as e,a as s}from"./VControl-e7b2630d.js";import{_ as t}from"./VSwitchBlock.vue_vue_type_style_index_0_lang-79fc406f.js";import{q as l,C as u,G as i,x as o,J as n,c as r,af as p,o as _,d,k as v,w as c,e as m,t as f,F as b,l as w}from"./index-21286bdb.js";import{_ as y}from"./lodash-724857a3.js";import{u as h}from"./viewWrapper-6ae5f61c.js";import{f as j,b as x,d as V}from"./index-6f9a18c9.js";import{_ as g}from"./_plugin-vue_export-helper-1b428a4d.js";import"./VIcon.vue_vue_type_script_setup_true_lang-8c9e63cc.js";import"./VInput.vue_vue_type_script_setup_true_lang-9c010bca.js";const k={class:"permissions-detail-wrapper"},N={class:"active_tab_content p-5"},$={class:"is-size-5 mb-5"},I={class:"table is-striped is-fullwidth"},U=y.isEmpty,z=g(l({__name:"permissions",async setup(l){var y,g;let z,C;const{t:J,locale:R}=u(),T=h(),q=(null==(y=i().params)?void 0:y.id)??"",B=o(),E=o([]),F=o();function G(a){var e;F.value=(null==(e=E.value)?void 0:e.find((e=>e.value===a)))||E.value[0]}return n({title:r((()=>J("Role_permissions")))}),[z,C]=p((()=>async function(){const a=await j(Number(q));B.value=await a}())),await z,C(),[z,C]=p((()=>async function(){const a=await x(Number(q));E.value=await a,U(E.value)||(F.value=E.value[0])}())),await z,C(),T.setPageTitle(`${J("Role_permissions")}: ${null==(g=B.value)?void 0:g.name[R.value]}`),(l,u)=>{var i;const o=t,n=e,r=s,p=a;return _(),d("div",k,[v(p,{selected:null==(i=F.value)?void 0:i.value,tabs:E.value,type:"boxed",class:"boxed_tabs","onUpdate:selected":G},{tab:c((({activeValue:a})=>{var e;return[m("div",N,[m("h1",$,f(l.$t("Methods"))+": "+f(null==(e=F.value)?void 0:e.label),1),m("table",I,[m("tbody",null,[(_(!0),d(b,null,w(F.value.methods,(a=>(_(),d("tr",null,[m("td",null,f(a.method),1),m("td",null,[v(r,null,{default:c((()=>[v(n,null,{default:c((()=>[v(o,{name:a.id,color:"primary",checked:1===a.value,"onUpdate:modelValue":e=>async function(a,e){if(200===(await V(e,Number(a))).status){const a=await x(Number(q));E.value=await a}}(e,a.id)},null,8,["name","checked","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024)])])))),256))])])])]})),_:1},8,["selected","tabs"])])}}}),[["__scopeId","data-v-ec1838c9"]]);export{z as default};