import{_ as e}from"./ConfirmActionModal.vue_vue_type_script_setup_true_lang-b5488b87.js";import{f as t,r as a,_ as n}from"./DonationContainerFormModal.vue_vue_type_script_setup_true_lang-7f62b428.js";import{_ as s}from"./VCard.vue_vue_type_script_setup_true_lang-8d45bf90.js";import{_ as l,a as i}from"./VPlaceloadText.vue_vue_type_style_index_0_lang-8916ac45.js";import{_ as r}from"./NoDataPlaceholder-50105cc5.js";import{_ as o}from"./VIconButton.vue_vue_type_script_lang-8ce86419.js";import{_ as u}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-e8162493.js";import{q as p,H as _,C as c,x as m,J as d,r as v,ag as g,y,o as f,d as h,e as j,k as x,K as b,w as k,a as C,t as w,F as $,l as V,g as P,U as D,L as M,M as B}from"./index-202d6ef0.js";import{u as S}from"./main-1fdef032.js";import{u as U}from"./viewWrapper-93d6f948.js";import{_ as A}from"./_plugin-vue_export-helper-1b428a4d.js";import"./VModal.vue_vue_type_style_index_0_lang-98b95306.js";import"./VButton.vue_vue_type_style_index_0_lang-8a17f68b.js";import"./SubmitButton.vue_vue_type_script_setup_true_lang-dc9d0236.js";import"./DatePicker.vue_vue_type_script_setup_true_lang-181de8a9.js";import"./ClientOnly.vue_vue_type_script_lang-3cf31693.js";import"./VControl-90e6c9df.js";import"./VInput.vue_vue_type_script_setup_true_lang-6aad6843.js";import"./VFlex.vue_vue_type_style_index_0_lang-5c9a78f5.js";const F={class:"page-content-inner"},I={class:"columns mb-5"},T={class:"column is-narrow"},L={class:"column is-narrow ml-auto"},O={class:"columns"},q={class:"column"},H={class:"table-container"},J={key:1,class:"table is-hoverable is-fullwidth"},K={class:"has-text-centered"},N={colspan:"7"},W=["onClick"],Z={class:"has-text-centered"},z=["onClick"],E=[(e=>(M("data-v-8d69075f"),e=e(),B(),e))((()=>j("span",{class:"iconify","data-icon":"feather:trash"},null,-1)))],G=A(p({__name:"index",async setup(p){let M,B;const A=_(),{t:G}=c(),Q=S(),R=m(!1),X=U(),Y=m(null);X.setPageTitle(G("Donations")),d({title:`${G("Containers_list")} - ${Q.app.name}`});const ee=v({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),te=m(null),ae=m(!1);async function ne(){try{R.value=!0;const e={page:ee.pagination.current_page,per_page:ee.pagination.per_page},a=await t(e);Object.assign(ee,a.result)}catch(e){A.error(G("Something_went_wrong"))}finally{R.value=!1}}function se(e){te.value=e,ae.value=!0}async function le(){R.value=!0,await a(Y.value),await ne()}return[M,B]=g((()=>ne())),await M,B(),y(ae,(function(e){!1===e&&(te.value=null)})),y((()=>ee.pagination.current_page),(async function(e){e&&await ne()})),(t,a)=>{const p=u,_=o,c=r,m=l,d=i,v=s,g=n,y=e;return f(),h("div",F,[j("div",I,[j("div",T,[x(p,{"with-icons":"",separator:"bullet",items:[{label:b(Q).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:t.$t("Donations")},{label:t.$t("Containers_list")}]},null,8,["items"])]),j("div",L,[x(_,{type:"button",icon:"feather:plus",color:"primary",onClick:a[0]||(a[0]=e=>se(null))})])]),j("div",O,[j("div",q,[x(v,null,{default:k((()=>[j("div",H,[0===b(ee).data.length?(f(),C(c,{key:0})):(f(),h("table",J,[j("thead",null,[j("tr",null,[j("th",null,w(t.$t("Title")),1),j("th",null,w(t.$t("Series")),1),j("th",null,w(t.$t("Preservative")),1),j("th",null,w(t.$t("Preservative_volume")),1),j("th",null,w(t.$t("Container_expiration_date")),1),j("th",null,w(t.$t("Preservative_shelf_life_days")),1),j("th",K,w(t.$t("Actions")),1)])]),j("tbody",null,[b(R)?(f(!0),h($,{key:0},V(b(ee).pagination.per_page,(e=>(f(),h("tr",{key:e},[j("td",N,[x(m,{lines:2,"last-line-width":"70%"})])])))),128)):(f(!0),h($,{key:1},V(b(ee).data,((e,t)=>(f(),h("tr",{key:t},[j("td",null,[j("a",{href:"javascript:;",class:"has-text-primary",onClick:t=>se(e)},w(e.name),9,W)]),j("td",null,w(e.series),1),j("td",null,w(e.hemopreservative),1),j("td",null,w(e.count_hemopreservative),1),j("td",null,w(e.expire_date),1),j("td",null,w(e.expire_days),1),j("td",Z,[j("a",{href:"javascript:;",class:"has-text-danger",onClick:t=>{return a=e.id,Y.value=a,void Q.$patch({confirmModalState:!0});var a}},E,8,z)])])))),128))])]))]),b(ee).data.length?(f(),C(d,{key:0,"current-page":b(ee).pagination.current_page,"onUpdate:current-page":a[1]||(a[1]=e=>b(ee).pagination.current_page=e),class:"mt-5","item-per-page":b(ee).pagination.per_page,"total-items":b(ee).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):P("",!0)])),_:1})])]),x(g,{"is-open":b(ae),"onUpdate:is-open":a[2]||(a[2]=e=>D(ae)?ae.value=e:null),container:b(te),"onUpdate:list":ne},null,8,["is-open","container"]),x(y,{onConfirmAction:le})])}}}),[["__scopeId","data-v-8d69075f"]]);export{G as default};