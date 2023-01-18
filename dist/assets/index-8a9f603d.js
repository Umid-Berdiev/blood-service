import{_ as e}from"./ConfirmActionModal.vue_vue_type_script_setup_true_lang-ff3c9183.js";import{_ as a,a as t,b as l}from"./VFlexTable.vue_vue_type_style_index_0_lang-abb495dd.js";import{c as s,d as n,_ as o,a as r,b as i}from"./search-7-dark-2f8f64c6.js";import{_ as u}from"./EmployeeFlexTableDropdown.vue_vue_type_script_setup_true_lang-c53b9c53.js";import{_ as p}from"./VAvatar.vue_vue_type_style_index_0_lang-92d6a823.js";import{_ as d}from"./VPlaceload-5927026b.js";import{q as m,o as _,d as c,f as g,a6 as y,E as v,H as f,C as h,J as b,r as x,x as w,c as j,y as k,k as V,K as $,e as E,w as C,S as U,g as z,F as B,l as D,t as F,a as T}from"./index-ef344eb7.js";import{_ as A,a as q,b as L}from"./SearchInput-ba3d23f5.js";import{_ as M}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-5d57fce7.js";import{u as N}from"./main-11940342.js";import{u as P}from"./viewWrapper-ee1c88fe.js";import"./VModal.vue_vue_type_style_index_0_lang-63c92034.js";import"./VButton.vue_vue_type_style_index_0_lang-114b0359.js";import"./VFlex.vue_vue_type_style_index_0_lang-8060459e.js";import"./VDropdown.vue_vue_type_style_index_0_lang-9795c8c9.js";import"./VIcon.vue_vue_type_script_setup_true_lang-04ec52bd.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./VControl-6b9015e2.js";const R=m({__name:"VPlaceloadAvatar",props:{size:{default:void 0},rounded:{default:"full"},centered:{type:Boolean},disabled:{type:Boolean}},setup(e){const a=e;return(e,t)=>(_(),c("div",{class:g(["placeload-avatar",[!a.disabled&&"loads",a.size&&`is-${a.size}`,a.centered&&"is-centered",a.rounded&&`is-rounded-${a.rounded}`]])},null,2))}}),S=y();const I={class:"page-content-inner"},H={class:"columns"},J={class:"column is-12"},K={key:0,class:"is-flex-grow-0",textContent:"#"},O={key:0,class:"flex-list-inner"},W={key:1,class:"flex-list-inner"},X=E("img",{class:"light-image",src:s,alt:""},null,-1),Y=E("img",{class:"dark-image",src:n,alt:""},null,-1),G={class:"dark-text"},Q={key:1},Z={class:"dark-text"},ee=m({__name:"index",setup(s){const n=v(),m=f(),{t:g}=h(),y=N();P().setPageTitle(g("Users_List")),b({title:`${g("Users")} - ${y.app.name}`});const ee=x({pagination:{current_page:1,per_page:10,total:10,total_pages:1},result:[]}),ae=w(),te=j({get:()=>ee.pagination.current_page,set:async e=>{await oe(e)}}),le={orderNumber:{format:(e,a,t)=>`${t+1}`,cellClass:"is-flex-grow-0"},name:{label:"Fullname",media:!0,grow:!0,sortable:!0},email:{label:"Email",sortable:!0},role:{label:"Role",sortable:!0},department:{label:"Department",grow:!0,sortable:!0},actions:{label:"",align:"end"}},se=w(!1),ne=j({get:()=>"",async set(e){console.log(e)}});async function oe(e=1){var a,t,l;try{se.value=!0;const a=await async function(e){try{const{data:a}=await S({url:"/api/admin/employee",params:e});return a.data}catch(a){throw a}}({page:e,per_page:ee.pagination.per_page});Object.assign(ee,a)}catch(s){m.error(g(null==(l=null==(t=null==(a=s.response)?void 0:a.data)?void 0:t.error)?void 0:l.message))}finally{se.value=!1}}async function re(){await async function(e){try{const{data:a}=await S({url:`/api/admin/employee/${e}`,method:"DELETE"})}catch(a){throw a}}(ae.value),oe()}return w(),k((()=>ee.pagination.per_page),(async()=>{await oe()})),(s,m)=>{const g=M,v=A,f=q,h=L,b=R,x=o,w=a,j=d,k=r,N=p,P=u,S=t,oe=i,ie=l,ue=e;return _(),c("div",I,[V(g,{"with-icons":"",separator:"bullet",items:[{label:$(y).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:s.$t("Users"),to:{name:"/app/users/"}}]},null,8,["items"]),E("div",H,[E("div",J,[V(ie,{class:"mt-4",columns:$(le),data:$(ee).result,limit:$(ee).pagination.per_page,total:$(ee).pagination.total},{default:C((e=>[V(h,null,{left:C((()=>[V(v,{modelValue:$(ne),"onUpdate:modelValue":m[0]||(m[0]=e=>U(ne)?ne.value=e:null)},null,8,["modelValue"])])),right:C((()=>[V(f,{modelValue:$(ee).pagination.per_page,"onUpdate:modelValue":m[1]||(m[1]=e=>$(ee).pagination.per_page=e)},null,8,["modelValue"])])),_:1}),V(S,{rounded:"","no-header":!$(se)&&0===$(ee).result.length},{"header-column":C((({column:e})=>["orderNumber"===e.key?(_(),c("span",K)):z("",!0)])),body:C((()=>[$(se)?(_(),c("div",O,[(_(!0),c(B,null,D($(ee).pagination.per_page,(e=>(_(),c("div",{key:e,class:"flex-table-item"},[V(w,{column:{grow:!0,media:!0}},{default:C((()=>[V(b,{size:"medium"}),V(x,{lines:2,width:"60%","last-line-width":"20%",class:"mx-2"})])),_:1}),V(w,null,{default:C((()=>[V(j,{width:"60%",class:"mx-1"})])),_:1}),V(w,null,{default:C((()=>[V(j,{width:"60%",class:"mx-1"})])),_:1}),V(w,{column:{align:"end"}},{default:C((()=>[V(j,{width:"45%",class:"mx-1"})])),_:1})])))),128))])):0===$(ee).result.length?(_(),c("div",W,[V(k,{title:s.$t("No_data"),subtitle:s.$t("There_is_no_data_that_match_your_query"),class:"my-6"},{image:C((()=>[X,Y])),_:1},8,["title","subtitle"])])):z("",!0)])),"body-cell":C((({row:e,column:a})=>["name"===a.key?(_(),c(B,{key:0},[V(N,{size:"medium",picture:e.avatar},null,8,["picture"]),E("div",null,[E("span",G,F(e.firstname)+" "+F(e.lastname),1)])],64)):z("",!0),"role"===a.key?(_(),c("div",Q,[E("span",Z,F(e.role.name),1)])):z("",!0),"actions"===a.key?(_(),T(P,{key:2,onEdit:a=>{return t=e.id,ae.value=t,void n.push(`/app/users/${t}`);var t},onRemove:a=>async function(e){ae.value=e,y.$patch({confirmModalState:!0})}(e.id)},null,8,["onEdit","onRemove"])):z("",!0)])),_:1},8,["no-header"]),$(ee).result.length?(_(),T(oe,{key:0,"current-page":$(te),"onUpdate:current-page":m[2]||(m[2]=e=>U(te)?te.value=e:null),class:"mt-5","item-per-page":$(ee).pagination.per_page,"total-items":$(ee).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):z("",!0)])),_:1},8,["columns","data","limit","total"])])]),V(ue,{onConfirmAction:re})])}}});export{ee as default};
