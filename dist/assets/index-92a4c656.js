import{f as a,_ as e}from"./BuckControlSterilityFormModal-68244655.js";import{_ as t,a as s,b as l}from"./VFlexTable.vue_vue_type_style_index_0_lang-a0c1a611.js";import{_ as o,a as n,b as i,c as r,d as _}from"./search-7-dark-8086cfd0.js";import{_ as p}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-e0d2add1.js";import{q as u,H as d,C as m,x as c,J as g,r as v,c as y,a8 as b,o as f,d as j,e as h,k as x,K as k,w as C,F as w,l as V,g as B,t as $,a as I,U as M,L as D,M as F}from"./index-98bd5d96.js";import{u as q}from"./main-f6ba09a2.js";import{u as O}from"./viewWrapper-68c9a3c0.js";import{_ as T}from"./_plugin-vue_export-helper-1b428a4d.js";import"./VModal.vue_vue_type_style_index_0_lang-5d90c6b2.js";import"./SubmitButton.vue_vue_type_script_setup_true_lang-6d2139a4.js";import"./VButton.vue_vue_type_style_index_0_lang-8d9e700e.js";import"./IMaskDateInput.vue_vue_type_script_setup_true_lang-6474213d.js";import"./VIMaskInput.vue_vue_type_script_lang-760644c4.js";import"./moment-29978768.js";import"./VControl-f7fb3a1b.js";import"./VRadio.vue_vue_type_style_index_0_lang-6dace82f.js";import"./VFlex.vue_vue_type_style_index_0_lang-d4822231.js";const U=a=>(D("data-v-9f3d55ae"),a=a(),F(),a),L={class:"page-content-inner"},S={class:"columns mb-3"},H={class:"column"},J={class:"columns"},K={class:"column is-12"},N={key:0,class:"flex-list-inner"},P={key:1,class:"flex-list-inner"},Q=U((()=>h("img",{class:"light-image",src:r,alt:""},null,-1))),R=U((()=>h("img",{class:"dark-image",src:_,alt:""},null,-1))),W=["onClick"],Z=T(u({__name:"index",async setup(r){let _,u;d();const{t:D}=m(),F=q(),T=c(!1);O().setPageTitle(D("Buck-laboratory")),g({title:`${D("Components_for_production_sterility_control")} - ${F.app.name}`});const U=v({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),Z=y({get:()=>U.pagination.current_page,set:async a=>{E.page=a,await Y(E)}}),z={date:{label:D("Donation_date")},donation_code:{label:D("Donation_code")},dose:{label:D("Dose")},amount:{label:D("Quantity_ml")},product_name:{label:D("Component_name")},sent_from:{label:D("Come_from"),format:a=>D(a)}},A=v({visit_type_id:[],donation_type_id:[],donation_code:[]}),E=v({page:1}),G=c(null),X=c(!1);async function Y(e){var t,s;try{Object.assign(E,e),T.value=!0;const t=await a(E);Object.assign(U,t.result)}catch(l){Object.assign(A,null==(s=null==(t=l.response)?void 0:t.data)?void 0:s.errors)}finally{T.value=!1}}return[_,u]=b((()=>Y(E))),await _,u(),(a,r)=>{const _=p,u=o,d=t,m=n,c=s,g=i,v=l,y=e;return f(),j("div",L,[h("div",S,[h("div",H,[x(_,{"with-icons":"",separator:"bullet",items:[{label:k(F).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:a.$t("Buck-laboratory")},{label:a.$t("Components_for_production_sterility_control")}]},null,8,["items"])])]),h("div",J,[h("div",K,[x(v,{columns:k(z),data:k(U).data,limit:k(U).pagination.per_page,total:k(U).pagination.total},{default:C((()=>[x(c,{rounded:"","no-header":!k(T)&&0===k(U).data.length},{body:C((()=>[k(T)?(f(),j("div",N,[(f(!0),j(w,null,V(k(U).pagination.per_page,(a=>(f(),j("div",{key:a,class:"flex-table-item"},[x(d,null,{default:C((()=>[x(u,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):B("",!0),0===k(U).data.length?(f(),j("div",P,[x(m,{title:a.$t("No_data"),subtitle:a.$t("There_is_no_data_that_match_your_query"),class:"my-6"},{image:C((()=>[Q,R])),_:1},8,["title","subtitle"])])):B("",!0)])),"body-cell":C((({row:a,column:e})=>["donation_code"===e.key?(f(),j("a",{key:0,href:"javascript:;",class:"has-text-primary",onClick:e=>{return t=a,G.value=t,void(X.value=!0);var t}},$(a.donation_code),9,W)):B("",!0)])),_:1},8,["no-header"]),k(U).data.length?(f(),I(g,{key:0,"current-page":k(Z),"onUpdate:current-page":r[0]||(r[0]=a=>M(Z)?Z.value=a:null),class:"mt-5","item-per-page":k(U).pagination.per_page,"total-items":k(U).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):B("",!0)])),_:1},8,["columns","data","limit","total"])])]),x(y,{"is-open":k(X),"onUpdate:is-open":r[1]||(r[1]=a=>M(X)?X.value=a:null),item:k(G)},null,8,["is-open","item"])])}}}),[["__scopeId","data-v-9f3d55ae"]]);export{Z as default};