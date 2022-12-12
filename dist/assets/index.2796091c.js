import{_ as e}from"./ConfirmActionModal.vue_vue_type_script_setup_true_lang.bd279331.js";import{_ as a,a as t,b as l}from"./VFlexTable.vue_vue_type_style_index_0_lang.25ade395.js";import{c as s,d as n,_ as o,a as r,b as i}from"./search-7-dark.f359dc05.js";import{_ as u}from"./EmployeeFlexTableDropdown.vue_vue_type_script_setup_true_lang.dee53402.js";import{_ as d}from"./VAvatar.vue_vue_type_style_index_0_lang.738a9fea.js";import{_ as p}from"./VPlaceload.cc73600a.js";import{q as m,o as c,d as _,f as g,ac as v,E as y,H as f,C as b,J as h,r as x,x as w,c as j,y as k,k as V,K as $,e as E,w as C,S as U,g as z,F,l as T,t as A,a as B}from"./index.4a029cdd.js";import{_ as D,a as L,b as M}from"./SearchInput.a1092c94.js";import{_ as N}from"./VBreadcrumb.vue_vue_type_style_index_0_lang.b7e8a70f.js";import{u as P}from"./main.31b19d1c.js";import{u as R}from"./viewWrapper.1a3e0821.js";import"./VModal.vue_vue_type_style_index_0_lang.2b7bd30b.js";import"./VButton.vue_vue_type_style_index_0_lang.3d7c5df0.js";import"./VFlex.vue_vue_type_style_index_0_lang.71b806ec.js";import"./VDropdown.vue_vue_type_style_index_0_lang.a0144077.js";import"./VIcon.vue_vue_type_script_setup_true_lang.16956841.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./VControl.db99b51d.js";const S=m({__name:"VPlaceloadAvatar",props:{size:{default:void 0},rounded:{default:"full"},centered:{type:Boolean},disabled:{type:Boolean}},setup(e){const a=e;return(e,t)=>(c(),_("div",{class:g(["placeload-avatar",[!a.disabled&&"loads",a.size&&`is-${a.size}`,a.centered&&"is-centered",a.rounded&&`is-rounded-${a.rounded}`]])},null,2))}}),q=v();const I={class:"page-content-inner"},H={class:"columns"},J={class:"column is-12"},K={key:0,class:"is-flex-grow-0",textContent:"#"},O={key:0,class:"flex-list-inner"},W={key:1,class:"flex-list-inner"},G=E("img",{class:"light-image",src:s,alt:""},null,-1),Q=E("img",{class:"dark-image",src:n,alt:""},null,-1),X={class:"dark-text"},Y={key:1},Z={class:"dark-text"},ee=m({__name:"index",setup(s){const n=y(),m=f(),{t:g}=b(),v=P();R().setPageTitle(g("Users_List")),h({title:`${g("Users")} - ${v.app.name}`});const ee=x({pagination:{current_page:1,per_page:10,total:10,total_pages:1},result:[]}),ae=w(),te=j({get:()=>ee.pagination.current_page,set:async e=>{await oe(e)}}),le={orderNumber:{format:(e,a,t)=>`${t+1}`,cellClass:"is-flex-grow-0"},name:{label:"Fullname",media:!0,grow:!0,sortable:!0},email:{label:"Email",sortable:!0},role:{label:"Role",sortable:!0},department:{label:"Department",grow:!0,sortable:!0},actions:{label:"",align:"end"}},se=w(!1),ne=j({get:()=>"",async set(e){console.log(e)}});async function oe(e=1){var a,t,l;try{se.value=!0;const a=await async function(e){try{const{data:a}=await q({url:"/api/admin/employee",params:e});return a.data}catch(a){throw a}}({page:e,per_page:ee.pagination.per_page});Object.assign(ee,a)}catch(s){m.error(g(null==(l=null==(t=null==(a=s.response)?void 0:a.data)?void 0:t.error)?void 0:l.message))}finally{se.value=!1}}async function re(){await async function(e){try{const{data:a}=await q({url:`/api/admin/employee/${e}`,method:"DELETE"})}catch(a){throw a}}(ae.value),oe()}return w(),k((()=>ee.pagination.per_page),(async()=>{await oe()})),(s,m)=>{const g=N,y=D,f=L,b=M,h=S,x=o,w=a,j=p,k=r,P=d,R=u,q=t,oe=i,ie=l,ue=e;return c(),_("div",I,[V(g,{"with-icons":"",separator:"bullet",items:[{label:$(v).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:s.$t("Users"),to:{name:"/app/users/"}}]},null,8,["items"]),E("div",H,[E("div",J,[V(ie,{class:"mt-4",columns:$(le),data:ee.result,limit:ee.pagination.per_page,total:ee.pagination.total},{default:C((e=>[V(b,null,{left:C((()=>[V(y,{modelValue:$(ne),"onUpdate:modelValue":m[0]||(m[0]=e=>U(ne)?ne.value=e:null)},null,8,["modelValue"])])),right:C((()=>[V(f,{modelValue:ee.pagination.per_page,"onUpdate:modelValue":m[1]||(m[1]=e=>ee.pagination.per_page=e)},null,8,["modelValue"])])),_:1}),V(q,{rounded:"","no-header":!se.value&&0===ee.result.length},{"header-column":C((({column:e})=>["orderNumber"===e.key?(c(),_("span",K)):z("",!0)])),body:C((()=>[se.value?(c(),_("div",O,[(c(!0),_(F,null,T(ee.pagination.per_page,(e=>(c(),_("div",{key:e,class:"flex-table-item"},[V(w,{column:{grow:!0,media:!0}},{default:C((()=>[V(h,{size:"medium"}),V(x,{lines:2,width:"60%","last-line-width":"20%",class:"mx-2"})])),_:1}),V(w,null,{default:C((()=>[V(j,{width:"60%",class:"mx-1"})])),_:1}),V(w,null,{default:C((()=>[V(j,{width:"60%",class:"mx-1"})])),_:1}),V(w,{column:{align:"end"}},{default:C((()=>[V(j,{width:"45%",class:"mx-1"})])),_:1})])))),128))])):0===ee.result.length?(c(),_("div",W,[V(k,{title:"No matches",subtitle:"There is no data that match your query.",class:"my-6"},{image:C((()=>[G,Q])),_:1})])):z("",!0)])),"body-cell":C((({row:e,column:a})=>["name"===a.key?(c(),_(F,{key:0},[V(P,{size:"medium",picture:e.avatar},null,8,["picture"]),E("div",null,[E("span",X,A(e.firstname)+" "+A(e.lastname),1)])],64)):z("",!0),"role"===a.key?(c(),_("div",Y,[E("span",Z,A(e.role.name),1)])):z("",!0),"actions"===a.key?(c(),B(R,{key:2,onEdit:a=>{return t=e.id,ae.value=t,void n.push(`/app/users/${t}`);var t},onRemove:a=>async function(e){ae.value=e,v.$patch({confirmModalState:!0})}(e.id)},null,8,["onEdit","onRemove"])):z("",!0)])),_:1},8,["no-header"]),ee.result.length?(c(),B(oe,{key:0,"current-page":$(te),"onUpdate:current-page":m[2]||(m[2]=e=>U(te)?te.value=e:null),class:"mt-5","item-per-page":ee.pagination.per_page,"total-items":ee.pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):z("",!0)])),_:1},8,["columns","data","limit","total"])])]),V(ue,{onConfirmAction:re})])}}});export{ee as default};
