import{_ as t}from"./ComponentDistributionProcessingCardModal-30a48731.js";import{_ as e}from"./VCard.vue_vue_type_script_setup_true_lang-a9232da9.js";import{a,_ as o,b as n,c as l,d as s}from"./search-7-dark-f0facebe.js";import{_ as i}from"./VCheckbox.vue_vue_type_style_index_0_lang-25f2733c.js";import{_ as r}from"./VButtons.vue_vue_type_script_setup_true_lang-cc776021.js";import{_ as u}from"./VButton.vue_vue_type_style_index_0_lang-27d6885c.js";import{_ as p}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-d3c7c667.js";import{u as _}from"./chunk-DRAQDPQ2-4514f14e.js";import{a as d,b as m,r as c,c as y,w as g,l as v,m as h,Q as f,p as b,u as j,q as V,v as $,V as x,i as k,M as P,W as D,t as w,y as B,$ as F,a0 as U}from"./chunk-BGPNDDXN-dcda8805.js";import{u as q}from"./@vueuse_head-0d019878.js";import{u as C}from"./chunk-3UEUFEGV-d557e6b1.js";import{u as I}from"./useNotyf-1536ae84.js";import{u as O}from"./main-a3a6220c.js";import{u as R}from"./viewWrapper-c60f0ce7.js";import{_ as N}from"./_plugin-vue_export-helper-1b428a4d.js";import"./VModal.vue_vue_type_style_index_0_lang-b0507e96.js";import"./SubmitButton.vue_vue_type_script_setup_true_lang-e5001c63.js";import"./VControl-fc151345.js";import"./VInput.vue_vue_type_script_setup_true_lang-29181b77.js";import"./additional-00c211e1.js";import"./userSession-0c0e9684.js";import"./pinia-3af6ce52.js";import"./@vueuse_core-098eb702.js";import"./VFlex.vue_vue_type_style_index_0_lang-0938e556.js";import"./VPlaceload-2a65ae53.js";const z=t=>(F("data-v-bccb9a91"),t=t(),U(),t),G={class:"page-content-inner"},M={class:"columns mb-5"},Q={class:"column is-narrow"},S={class:"columns"},T={class:"column"},A={class:"columns"},E={class:"column"},W={class:"table-container"},L={key:0,class:"flex-list-inner"},X=z((()=>f("img",{class:"light-image",src:l,alt:""},null,-1))),H=z((()=>f("img",{class:"dark-image",src:s,alt:""},null,-1))),J={key:1,class:"table is-hoverable is-fullwidth"},K={colspan:"3"},Y=N(d({__name:"index",setup(l){_(),I();const{t:s}=C(),d=O(),F=m(!1),U=R();m(null),U.setPageTitle(s("Processing")),q({title:`${s("FFPs-in-storage")} - ${d.app.name}`});const N=c({data:[{id:11,donation_code:"130100123400",donation_date:"10.12.2022",blood_type:"O(I)",visit_type:"Безвозмезные донации",rh_factor:"Rh+",component_name:"Эритроцитная масса",donation_type:"Донация цельной крови",dose:"0",quantity:"340",come_from:"Республиканский центр крови",personalized_donation:"Николай Резанов",expiry_date:"01.03.2023"},{id:17,donation_code:"130100456500",donation_date:"18.12.2022",blood_type:"O(I)",visit_type:"Платные донации",rh_factor:"Rh+",component_name:"Эритроцитная масса",donation_type:"Тромбоцитаферез",dose:"0",quantity:"340",come_from:"Республиканский центр крови",personalized_donation:"Николай Резанов",expiry_date:"01.03.2023"},{id:21,donation_code:"130100987300",donation_date:"18.12.2022",blood_type:"O(I)",visit_type:"Платные донации",rh_factor:"Rh+",component_name:"Эритроцитная масса",donation_type:"Плазмаферез",dose:"0",quantity:"340",come_from:"Республиканский центр крови",personalized_donation:"Николай Резанов",expiry_date:"01.03.2023"}],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),z=c({}),Y=m([]),Z=m(!1),tt=c({donation_code:[],donation_type_id:[]}),et=y({get:()=>Y.value.length>0&&Y.value.length===N.data.length,set(t){Y.value=t?N.data.map((t=>t.id)):[]}});async function at(t){var e,a;try{F.value=!0;N.pagination.current_page}catch(o){Object.assign(tt,null==(a=null==(e=o.response)?void 0:e.data)?void 0:a.errors)}finally{F.value=!1}}return g(Z,(function(t){!1===t&&Object.assign(z,{})})),(l,s)=>{const _=p,m=u,c=r,y=a,g=i,U=o,q=n,C=e,I=t;return v(),h("div",G,[f("div",M,[f("div",Q,[b(_,{"with-icons":"",separator:"bullet",items:[{label:j(d).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:l.$t("Processing")},{label:l.$t("FFPs-in-storage")}]},null,8,["items"])])]),f("div",S,[f("div",T,[b(c,null,{default:V((()=>[b(m,{type:"button",color:"primary",disabled:0===j(Y).length},{default:V((()=>[$(x(l.$t("Generate_cryoprecipitate_series")),1)])),_:1},8,["disabled"]),b(m,{type:"button",color:"primary",disabled:0===j(Y).length},{default:V((()=>[$(x(l.$t("Submit_series_for_processing")),1)])),_:1},8,["disabled"])])),_:1})])]),f("div",A,[f("div",E,[b(C,null,{default:V((()=>[f("div",W,[0===j(N).data.length?(v(),h("div",L,[b(y,{title:"No matches",subtitle:"There is no data that match your query.",class:"my-6"},{image:V((()=>[X,H])),_:1})])):(v(),h("table",J,[f("thead",null,[f("tr",null,[f("th",null,[b(g,{modelValue:j(et),"onUpdate:modelValue":s[0]||(s[0]=t=>k(et)?et.value=t:null),color:"primary"},null,8,["modelValue"])]),f("th",null,x(l.$t("Donation_date")),1),f("th",null,x(l.$t("Donation_code")),1),f("th",null,x(l.$t("Dose")),1),f("th",null,x(l.$t("Plasma_amount_ml")),1),f("th",null,x(l.$t("Blood_type"))+" && "+x(l.$t("Rh_factor")),1),f("th",null,x(l.$t("Actions")),1)])]),f("tbody",null,[j(F)?(v(!0),h(P,{key:0},D(j(N).pagination.per_page,(t=>(v(),h("tr",{key:t},[f("td",K,[b(U,{lines:2,"last-line-width":"70%"})])])))),128)):(v(!0),h(P,{key:1},D(j(N).data,((t,e)=>(v(),h("tr",{key:e},[f("td",null,[b(g,{modelValue:j(Y),"onUpdate:modelValue":s[1]||(s[1]=t=>k(Y)?Y.value=t:null),value:t.id,color:"primary"},null,8,["modelValue","value"])]),f("td",null,x(t.donation_date),1),f("td",null,x(t.donation_code),1),f("td",null,x(t.dose),1),f("td",null,x(t.quantity),1),f("td",null,x(t.blood_type)+" "+x(t.rh_factor),1),f("td",null,[b(m,{type:"button",color:"primary"},{default:V((()=>[$(x(l.$t("To_forwarding")),1)])),_:1})])])))),128))])]))]),j(N).data.length?(v(),w(q,{key:0,"current-page":j(N).pagination.current_page,"onUpdate:current-page":s[2]||(s[2]=t=>j(N).pagination.current_page=t),class:"mt-5","item-per-page":j(N).pagination.per_page,"total-items":j(N).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):B("",!0)])),_:1})])]),b(I,{"is-open":j(Z),"onUpdate:is-open":s[3]||(s[3]=t=>k(Z)?Z.value=t:null),product:j(z),"onUpdate:list":at},null,8,["is-open","product"])])}}}),[["__scopeId","data-v-bccb9a91"]]);export{Y as default};