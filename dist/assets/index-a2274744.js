import{_ as t}from"./VCard.vue_vue_type_script_setup_true_lang-8d45bf90.js";import{_ as e,a as n}from"./VPlaceloadText.vue_vue_type_style_index_0_lang-8916ac45.js";import{_ as a}from"./NoDataPlaceholder-50105cc5.js";import{_ as l}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-e8162493.js";import{q as o,H as s,C as i,x as r,a7 as u,r as _,o as p,a as d,w as c,e as m,t as g,k as y,E as v,J as h,y as f,d as b,K as j,F as $,l as k,g as x,U as D}from"./index-202d6ef0.js";import{_ as w}from"./VModal.vue_vue_type_style_index_0_lang-98b95306.js";import{_ as O}from"./SubmitButton.vue_vue_type_script_setup_true_lang-dc9d0236.js";import{_ as V}from"./DatePicker.vue_vue_type_script_setup_true_lang-181de8a9.js";import{_ as C}from"./_plugin-vue_export-helper-1b428a4d.js";import{u as B}from"./main-1fdef032.js";import{u as P}from"./viewWrapper-93d6f948.js";import"./VFlex.vue_vue_type_style_index_0_lang-5c9a78f5.js";import"./VButton.vue_vue_type_style_index_0_lang-8a17f68b.js";import"./ClientOnly.vue_vue_type_script_lang-3cf31693.js";import"./VControl-90e6c9df.js";const R={class:"table-container"},U={class:"table is-fullwidth"},M=C(o({__name:"DrugProductionFormModal",props:{isOpen:{type:Boolean,default:!1},component:null},emits:["update:isOpen","update:list"],setup(t,{emit:e}){s();const{t:n}=i(),a=r(n("Quality_check_result")),l=r(!1),o=u(new Date,"YYYY-MM-DD"),v=_({transfer_date:o}),h=_({transfer_date:[]});function f(){Object.assign(v,{transfer_date:o}),Object.assign(h,{transfer_date:[]}),e("update:isOpen",!1)}return(e,n)=>{const o=V,s=O,i=w;return p(),d(i,{open:t.isOpen,size:"large",title:a.value,actions:"right",onClose:f},{content:c((()=>[m("div",R,[m("table",U,[m("tbody",null,[m("tr",null,[m("th",null,g(e.$t("Donation_code")),1),m("td",null,g(t.component.donation_code),1)]),m("tr",null,[m("th",null,g(e.$t("Donation_date")),1),m("td",null,g(t.component.donation_date),1)]),m("tr",null,[m("th",null,g(e.$t("Component_name")),1),m("td",null,g(t.component.component_name),1)]),m("tr",null,[m("th",null,g(e.$t("Blood_type"))+" & "+g(e.$t("Rh_factor")),1),m("td",null,g(t.component.blood_type)+" "+g(t.component.rh_factor),1)]),m("tr",null,[m("th",null,g(e.$t("Transfer_date")),1),m("td",null,[y(o,{modelValue:v.transfer_date,"onUpdate:modelValue":n[0]||(n[0]=t=>v.transfer_date=t)},null,8,["modelValue"])])])])])])])),action:c((()=>[y(s,{loading:l.value,type:"button"},null,8,["loading"])])),_:1},8,["open","title"])}}}),[["__scopeId","data-v-54a2411e"]]),Q={class:"page-content-inner"},Y={class:"columns mb-5"},q={class:"column is-narrow"},F={class:"columns"},I={class:"column"},T={class:"table-container"},S={key:1,class:"table is-hoverable is-fullwidth"},z={colspan:"5"},E=["onClick"],H=C(o({__name:"index",setup(o){v();const u=s(),{t:w}=i(),O=B(),V=r(!1),C=P();r(null),C.setPageTitle(w("Quality-control")),h({title:`${w("Received_components_list")} - ${O.app.name}`});const R=_({data:[{id:11,donation_date:"10.12.2022",donation_code:"130100123400",dose:"0",quantity:"300",component_name:"Эритроцитная масса",blood_type:"O(I)",rh_factor:"Rh+"}],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),U=_({}),H=r(!1);async function J(){try{V.value=!0}catch(t){u.error(w("Something_went_wrong"))}finally{V.value=!1}}return f(H,(function(t){!1===t&&Object.assign(U,{})})),(o,s)=>{const i=l,r=a,u=e,_=n,v=t;return p(),b("div",Q,[m("div",Y,[m("div",q,[y(i,{"with-icons":"",separator:"bullet",items:[{label:j(O).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:o.$t("Quality-control")},{label:o.$t("Received_components_list")}]},null,8,["items"])])]),m("div",F,[m("div",I,[y(v,null,{default:c((()=>[m("div",T,[0===j(R).data.length?(p(),d(r,{key:0})):(p(),b("table",S,[m("thead",null,[m("tr",null,[m("th",null,g(o.$t("Donation_date")),1),m("th",null,g(o.$t("Donation_code")),1),m("th",null,g(o.$t("Dose")),1),m("th",null,g(o.$t("Quantity_ml")),1),m("th",null,g(o.$t("Blood_type"))+" & "+g(o.$t("Rh_factor")),1),m("th",null,g(o.$t("Component_name")),1)])]),m("tbody",null,[j(V)?(p(!0),b($,{key:0},k(j(R).pagination.per_page,(t=>(p(),b("tr",{key:t},[m("td",z,[y(u,{lines:2,"last-line-width":"70%"})])])))),128)):(p(!0),b($,{key:1},k(j(R).data,((t,e)=>(p(),b("tr",{key:e},[m("td",null,g(t.donation_date),1),m("td",null,[m("a",{href:"javascript:;",class:"has-text-primary",onClick:e=>function(t){Object.assign(U,t),H.value=!0}(t)},g(t.donation_code),9,E)]),m("td",null,g(t.dose),1),m("td",null,g(t.quantity),1),m("td",null,g(t.blood_type)+" "+g(t.rh_factor),1),m("td",null,g(t.component_name),1)])))),128))])]))]),j(R).data.length?(p(),d(_,{key:0,"current-page":j(R).pagination.current_page,"onUpdate:current-page":s[0]||(s[0]=t=>j(R).pagination.current_page=t),class:"mt-5","item-per-page":j(R).pagination.per_page,"total-items":j(R).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):x("",!0)])),_:1})])]),y(M,{"is-open":j(H),"onUpdate:is-open":s[1]||(s[1]=t=>D(H)?H.value=t:null),component:j(U),"onUpdate:list":J},null,8,["is-open","component"])])}}}),[["__scopeId","data-v-e18d00c9"]]);export{H as default};