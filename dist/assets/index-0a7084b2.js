import{_ as e,a,b as t}from"./VFlexTable.vue_vue_type_style_index_0_lang-0b6ebd63.js";import{_ as l,a as n,b as o,c as s,d as i}from"./search-7-dark-c4e05ee5.js";import{_ as r}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-8b18b9a3.js";import{q as u,H as _,C as d,x as p,r as m,a7 as c,o as g,a as v,w as b,e as y,t as f,k as h,J as j,c as k,d as x,K as V,F as Y,l as D,g as M,U as $,L as w,M as O}from"./index-f93ac3f8.js";import{_ as C}from"./VModal.vue_vue_type_style_index_0_lang-bd9f4090.js";import{_ as S}from"./SubmitButton.vue_vue_type_script_setup_true_lang-cc65dbea.js";import{_ as B}from"./IMaskDateInput.vue_vue_type_script_setup_true_lang-e7f94dfc.js";import{_ as I,a as U}from"./VControl-6db07387.js";import{_ as F}from"./VRadio.vue_vue_type_style_index_0_lang-5d6e929d.js";import{m as T}from"./moment-c7f2cea7.js";import{_ as q}from"./_plugin-vue_export-helper-1b428a4d.js";import{u as L}from"./main-ee2e6726.js";import{u as N}from"./viewWrapper-1e6038f3.js";import"./VFlex.vue_vue_type_style_index_0_lang-89cd9c2c.js";import"./VButton.vue_vue_type_style_index_0_lang-2943ff29.js";import"./VIMaskInput.vue_vue_type_script_lang-a1ff201b.js";const P={class:"table-container"},R={class:"table is-fullwidth"},z=T.__esModule?T.default:T,H=q(u({__name:"SupernatantPlasmaFormModal",props:{isOpen:{type:Boolean,default:!1},item:null},emits:["update:isOpen","update:list"],setup(e,{emit:a}){_();const{t:t}=d(),l=p(t("Supernatant_plasma_test_result")),n=p(!1),o=m({control_result:"sterile",result_date:c(new Date,"YYYY-MM-DD")}),s=m({control_result:[],result_date:[]});function i(){Object.assign(o,{blood_samples_taken_date:z().format("YYYY-MM-DD"),analysis_date:z().format("YYYY-MM-DD"),clinical_biochemical_laboratory_date:z().format("YYYY-MM-DD")}),Object.assign(s,{blood_samples_taken_date:[],analysis_date:[],clinical_biochemical_laboratory_date:[]}),a("update:isOpen",!1)}return(a,t)=>{const s=F,r=I,u=U,_=B,d=S,p=C;return g(),v(p,{open:e.isOpen,size:"large",title:l.value,actions:"right",onClose:i},{content:b((()=>[y("div",P,[y("table",R,[y("tbody",null,[y("tr",null,[y("th",null,f(a.$t("Donation_code")),1),y("td",null,f(e.item.donation_code),1)]),y("tr",null,[y("th",null,f(a.$t("Donation_date")),1),y("td",null,f(e.item.donation_date),1)]),y("tr",null,[y("th",null,f(a.$t("Component_name")),1),y("td",null,f(e.item.component_name),1)]),y("tr",null,[y("th",null,f(a.$t("Come_from")),1),y("td",null,f(e.item.come_from),1)]),y("tr",null,[y("th",null,f(a.$t("Control_result")),1),y("td",null,[h(u,null,{default:b((()=>[h(r,null,{default:b((()=>[h(s,{modelValue:o.control_result,"onUpdate:modelValue":t[0]||(t[0]=e=>o.control_result=e),value:"sterile",color:"primary",label:a.$t("Sterile")},null,8,["modelValue","label"]),h(s,{modelValue:o.control_result,"onUpdate:modelValue":t[1]||(t[1]=e=>o.control_result=e),value:"not_sterile",color:"primary",label:a.$t("Not_sterile")},null,8,["modelValue","label"])])),_:1})])),_:1})])]),y("tr",null,[y("th",null,f(a.$t("Result_date")),1),y("td",null,[h(u,null,{default:b((()=>[h(r,null,{default:b((()=>[h(_,{modelValue:o.result_date,"onUpdate:modelValue":t[2]||(t[2]=e=>o.result_date=e),style:{width:"50%"}},null,8,["modelValue"])])),_:1})])),_:1})])])])])])])),action:b((()=>[h(d,{loading:n.value,type:"button"},null,8,["loading"])])),_:1},8,["open","title"])}}}),[["__scopeId","data-v-c8a2accc"]]),J=e=>(w("data-v-7b3f0ae1"),e=e(),O(),e),K={class:"page-content-inner"},W={class:"columns mb-3"},Z={class:"column"},A={class:"columns"},E={class:"column is-12"},G={key:0,class:"flex-list-inner"},Q={key:1,class:"flex-list-inner"},X=J((()=>y("img",{class:"light-image",src:s,alt:""},null,-1))),ee=J((()=>y("img",{class:"dark-image",src:i,alt:""},null,-1))),ae=["onClick"],te=q(u({__name:"index",setup(s){_();const{t:i}=d(),u=L(),c=p(!1);N().setPageTitle(i("Buck-laboratory")),j({title:`${i("Supernatant-plasma-list")} - ${u.app.name}`});const w=m({data:[{serial_number:"1.07.13",donation_code:"130100121500",donation_date:"05.06.2022"}],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),O=k({get:()=>w.pagination.current_page,set:async e=>{B.page=e,await async function(e){var a,t;try{Object.assign(B,e),c.value=!0}catch(l){Object.assign(S,null==(t=null==(a=l.response)?void 0:a.data)?void 0:t.errors)}finally{c.value=!1}}(B)}}),C={serial_number:{label:i("Serial_number")},donation_code:{label:i("Donation_code")},donation_date:{label:i("Donation_date")}},S=m({visit_type_id:[],donation_type_id:[],donation_code:[]}),B=m({page:1}),I=m({}),U=p(!1);return(s,i)=>{const _=r,d=l,p=e,m=n,j=a,k=o,S=t;return g(),x("div",K,[y("div",W,[y("div",Z,[h(_,{"with-icons":"",separator:"bullet",items:[{label:V(u).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:s.$t("Buck-laboratory")},{label:s.$t("Supernatant-plasma-list")}]},null,8,["items"])])]),y("div",A,[y("div",E,[h(S,{columns:V(C),data:V(w).data,limit:V(w).pagination.per_page,total:V(w).pagination.total},{default:b((()=>[h(j,{rounded:"","no-header":!V(c)&&0===V(w).data.length},{"header-column":b((({column:e})=>[])),body:b((()=>[V(c)?(g(),x("div",G,[(g(!0),x(Y,null,D(V(w).pagination.per_page,(e=>(g(),x("div",{key:e,class:"flex-table-item"},[h(p,null,{default:b((()=>[h(d,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):M("",!0),0===V(w).data.length?(g(),x("div",Q,[h(m,{title:s.$t("No_data"),subtitle:s.$t("There_is_no_data_that_match_your_query"),class:"my-6"},{image:b((()=>[X,ee])),_:1},8,["title","subtitle"])])):M("",!0)])),"body-cell":b((({row:e,column:a})=>["donation_code"===a.key?(g(),x("a",{key:0,href:"javascript:;",class:"has-text-primary",onClick:a=>{return t=e,Object.assign(I,t),void(U.value=!0);var t}},f(e.donation_code),9,ae)):M("",!0)])),_:1},8,["no-header"]),V(w).data.length?(g(),v(k,{key:0,"current-page":V(O),"onUpdate:current-page":i[0]||(i[0]=e=>$(O)?O.value=e:null),class:"mt-5","item-per-page":V(w).pagination.per_page,"total-items":V(w).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):M("",!0)])),_:1},8,["columns","data","limit","total"])])]),h(H,{"is-open":V(U),"onUpdate:is-open":i[1]||(i[1]=e=>$(U)?U.value=e:null),item:V(I)},null,8,["is-open","item"])])}}}),[["__scopeId","data-v-7b3f0ae1"]]);export{te as default};
