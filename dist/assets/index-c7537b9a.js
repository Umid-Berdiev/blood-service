import{_ as e}from"./ConfirmActionModal.vue_vue_type_script_setup_true_lang-6a39ce1b.js";import{f as t,r as a,_ as n}from"./DonationContainerFormModal.vue_vue_type_script_setup_true_lang-30f62be5.js";import{_ as l}from"./VCard.vue_vue_type_script_setup_true_lang-9ddefd9d.js";import{_ as i,a as o}from"./VPlaceloadText.vue_vue_type_style_index_0_lang-1679fcf5.js";import{_ as s}from"./NoDataPlaceholder-02547c33.js";import{q as r,c as u,h as d,j as p,H as c,C as _,x as v,J as g,r as m,ag as f,y,o as h,d as b,e as k,k as j,K as x,w,a as $,t as C,F as B,l as S,g as V,U as O,L as P,M as D}from"./index-c5546e3f.js";import{_ as M}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-d20f193a.js";import{u as I}from"./main-94385ff1.js";import{u as U}from"./viewWrapper-911093a6.js";import{_ as A}from"./_plugin-vue_export-helper-1b428a4d.js";import"./VModal.vue_vue_type_style_index_0_lang-52241399.js";import"./VButton.vue_vue_type_style_index_0_lang-6deaaf11.js";import"./SubmitButton.vue_vue_type_script_setup_true_lang-9075dd9c.js";import"./DatePicker.vue_vue_type_script_setup_true_lang-30441cda.js";import"./ClientOnly.vue_vue_type_script_lang-fed4a332.js";import"./VControl-c4bfd6d4.js";import"./VInput.vue_vue_type_script_setup_true_lang-fcf9b43c.js";import"./VFlex.vue_vue_type_style_index_0_lang-84415715.js";const F=r({props:{icon:{type:String,required:!0},to:{type:Object,default:void 0},href:{type:String,default:void 0},color:{type:String,default:void 0,validator:e=>-1!==[void 0,"primary","info","success","warning","danger","white"].indexOf(e)||(console.warn(`VIconButton: invalid "${e}" color. Should be primary, info, success, warning, danger, white or undefined`),!1)},dark:{type:String,default:void 0,validator:e=>!e||(-1!==["1","2","3","4","5","6"].indexOf(e)||(console.warn(`VIconButton: invalid "${e}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`),!1))},circle:{type:Boolean,default:!1},bold:{type:Boolean,default:!1},light:{type:Boolean,default:!1},raised:{type:Boolean,default:!1},elevated:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},darkOutlined:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e,{attrs:t}){const a=u((()=>[...(null==t?void 0:t.class)||[],e.disabled&&"is-disabled",e.circle&&"is-circle",e.bold&&"is-bold",e.outlined&&"is-outlined",e.raised&&"is-raised",e.dark&&`is-dark-bg-${e.dark}`,e.darkOutlined&&"is-dark-outlined",e.elevated&&"is-elevated",e.loading&&"is-loading",e.color&&`is-${e.color}`,e.light&&"is-light"])),n=u((()=>e.icon&&-1!==e.icon.indexOf(":")));return()=>{let l;l=n.value?d("i",{"aria-hidden":!0,class:"iconify","data-icon":e.icon}):d("i",{"aria-hidden":!0,class:e.icon});const i=d("span",{class:"icon"},l);return e.to?d(p("RouterLink"),{...t,to:e.to,class:["button",...a.value]},i):e.href?d("a",{...t,href:e.href,class:a.value},i):d("button",{type:"button",...t,disabled:e.disabled,class:["button",...a.value]},i)}}}),L={class:"page-content-inner"},T={class:"columns mb-5"},q={class:"column is-narrow"},H={class:"column is-narrow ml-auto"},J={class:"columns"},K={class:"column"},N={class:"table-container"},R={key:1,class:"table is-hoverable is-fullwidth"},W={class:"has-text-centered"},Z={colspan:"7"},z=["onClick"],E={class:"has-text-centered"},G=["onClick"],Q=[(e=>(P("data-v-8d69075f"),e=e(),D(),e))((()=>k("span",{class:"iconify","data-icon":"feather:trash"},null,-1)))],X=A(r({__name:"index",async setup(r){let u,d;const p=c(),{t:P}=_(),D=I(),A=v(!1),X=U(),Y=v(null);X.setPageTitle(P("Donations")),g({title:`${P("Containers_list")} - ${D.app.name}`});const ee=m({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),te=v(null),ae=v(!1);async function ne(){try{A.value=!0;const e={page:ee.pagination.current_page,per_page:ee.pagination.per_page},a=await t(e);Object.assign(ee,a.result)}catch(e){p.error(P("Something_went_wrong"))}finally{A.value=!1}}function le(e){te.value=e,ae.value=!0}async function ie(){A.value=!0,await a(Y.value),await ne()}return[u,d]=f((()=>ne())),await u,d(),y(ae,(function(e){!1===e&&(te.value=null)})),y((()=>ee.pagination.current_page),(async function(e){e&&await ne()})),(t,a)=>{const r=M,u=F,d=s,p=i,c=o,_=l,v=n,g=e;return h(),b("div",L,[k("div",T,[k("div",q,[j(r,{"with-icons":"",separator:"bullet",items:[{label:x(D).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:t.$t("Donations")},{label:t.$t("Containers_list")}]},null,8,["items"])]),k("div",H,[j(u,{type:"button",icon:"feather:plus",color:"primary",onClick:a[0]||(a[0]=e=>le(null))})])]),k("div",J,[k("div",K,[j(_,null,{default:w((()=>[k("div",N,[0===x(ee).data.length?(h(),$(d,{key:0})):(h(),b("table",R,[k("thead",null,[k("tr",null,[k("th",null,C(t.$t("Title")),1),k("th",null,C(t.$t("Series")),1),k("th",null,C(t.$t("Preservative")),1),k("th",null,C(t.$t("Preservative_volume")),1),k("th",null,C(t.$t("Container_expiration_date")),1),k("th",null,C(t.$t("Preservative_shelf_life_days")),1),k("th",W,C(t.$t("Actions")),1)])]),k("tbody",null,[x(A)?(h(!0),b(B,{key:0},S(x(ee).pagination.per_page,(e=>(h(),b("tr",{key:e},[k("td",Z,[j(p,{lines:2,"last-line-width":"70%"})])])))),128)):(h(!0),b(B,{key:1},S(x(ee).data,((e,t)=>(h(),b("tr",{key:t},[k("td",null,[k("a",{href:"javascript:;",class:"has-text-primary",onClick:t=>le(e)},C(e.name),9,z)]),k("td",null,C(e.series),1),k("td",null,C(e.hemopreservative),1),k("td",null,C(e.count_hemopreservative),1),k("td",null,C(e.expire_date),1),k("td",null,C(e.expire_days),1),k("td",E,[k("a",{href:"javascript:;",class:"has-text-danger",onClick:t=>{return a=e.id,Y.value=a,void D.$patch({confirmModalState:!0});var a}},Q,8,G)])])))),128))])]))]),x(ee).data.length?(h(),$(c,{key:0,"current-page":x(ee).pagination.current_page,"onUpdate:current-page":a[1]||(a[1]=e=>x(ee).pagination.current_page=e),class:"mt-5","item-per-page":x(ee).pagination.per_page,"total-items":x(ee).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):V("",!0)])),_:1})])]),j(v,{"is-open":x(ae),"onUpdate:is-open":a[2]||(a[2]=e=>O(ae)?ae.value=e:null),container:x(te),"onUpdate:list":ne},null,8,["is-open","container"]),j(g,{onConfirmAction:ie})])}}}),[["__scopeId","data-v-8d69075f"]]);export{X as default};
