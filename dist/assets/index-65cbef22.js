import{_ as e}from"./ConfirmActionModal.vue_vue_type_script_setup_true_lang-fb992459.js";import{_ as a}from"./VModal.vue_vue_type_style_index_0_lang-5d90c6b2.js";import{_ as l,a as t}from"./VButton.vue_vue_type_style_index_0_lang-8d9e700e.js";import{_ as n}from"./VTabs.vue_vue_type_script_setup_true_lang-8b8d98ce.js";import{_ as s}from"./VTextarea.vue_vue_type_script_setup_true_lang-a7c6e41e.js";import{_ as o,a as i}from"./VControl-f7fb3a1b.js";import{_ as r}from"./VInput.vue_vue_type_script_setup_true_lang-66ceaea3.js";import{q as u,H as d,C as p,x as c,r as m,y as _,o as v,a as f,w as g,e as y,m as b,k as h,d as V,K as x,t as j,g as w,i as z,j as k,E as $,c as C,J as U,a8 as I,U as R,F as A,l as N}from"./index-98bd5d96.js";import{f as O,u as T,c as D,a as E,s as S,r as q}from"./index-00ecf710.js";import{_ as F,a as M,b as B}from"./VFlexTable.vue_vue_type_style_index_0_lang-a0c1a611.js";import{c as P,d as H,_ as L,a as J,b as K}from"./search-7-dark-8086cfd0.js";import{_ as W}from"./VDropdown.vue_vue_type_style_index_0_lang-6f903962.js";import{_ as Z,a as G,b as Q}from"./SearchInput-cfd290fe.js";import{_ as X}from"./VFlex.vue_vue_type_style_index_0_lang-d4822231.js";import{_ as Y}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-e0d2add1.js";import{u as ee}from"./viewWrapper-68c9a3c0.js";import{u as ae}from"./main-f6ba09a2.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./VIcon.vue_vue_type_script_setup_true_lang-c6ee2bdc.js";const le=["onSubmit"],te={key:0,class:"columns is-multiline pt-5"},ne={class:"column is-12"},se={class:"help has-text-danger"},oe={class:"help has-text-danger"},ie={key:1,class:"columns is-multiline pt-5"},re={class:"column is-12"},ue={key:2,class:"columns is-multiline pt-5"},de={class:"column is-12"},pe=u({__name:"RoleFormModal",props:{modelValue:{type:Boolean,default:!1},roleId:{default:null}},emits:["update:modelValue","update:list"],setup(e,{emit:t}){const u=e,k=d(),{t:$}=p(),C=c($("Add")),U=c(!1),I=m({uz:"",ru:"",en:""}),R=m({uz:"",ru:"",en:""}),A=m({"name.uz":[],"name.en":[],"name.ru":[],"description.uz":[],"description.en":[],"description.ru":[]});async function N(){var e,a,l,n;try{U.value=!0,u.roleId?await T(u.roleId,{name:I,description:R}):await D({name:I,description:R}),t("update:list"),E()}catch(s){(null==(e=s.response)?void 0:e.data.error)?k.error(null==(a=s.response)?void 0:a.data.error):Object.assign(A,null==(n=null==(l=s.response)?void 0:l.data)?void 0:n.errors)}finally{U.value=!1}}function E(){C.value=$("Add"),Object.assign(I,{uz:"",ru:"",en:""}),Object.assign(R,{uz:"",ru:"",en:""}),Object.assign(A,{"name.uz":[],"name.en":[],"name.ru":[],"description.uz":[],"description.en":[],"description.ru":[]}),t("update:modelValue",!1)}return _((()=>u.roleId),(async e=>{if(e){console.log(e),C.value=$("Edit");const a=await O(Number(u.roleId));Object.assign(I,a.name),Object.assign(R,a.description)}}),{deep:!0}),(t,u)=>{const d=r,p=o,c=i,m=s,_=n,k=l,O=a;return v(),f(O,{open:e.modelValue,size:"large",title:C.value,actions:"right",onClose:E},{content:g((()=>[y("form",{id:"role-form",class:"modal-form",onSubmit:b(N,["prevent"])},[h(_,{type:"boxed",selected:"uz",tabs:[{label:t.$t("Uzbek"),value:"uz"},{label:t.$t("Russian"),value:"ru"},{label:t.$t("English"),value:"en"}]},{tab:g((({activeValue:e})=>["uz"===e?(v(),V("div",te,[y("div",ne,[h(c,{label:t.$t("Name_uz"),required:""},{default:g((()=>[h(p,null,{default:g((()=>[h(d,{modelValue:I.uz,"onUpdate:modelValue":u[0]||(u[0]=e=>I.uz=e),name:"name_uz",type:"text",placeholder:x($)("Type_name_uz")},null,8,["modelValue","placeholder"]),y("p",se,j(A["name.uz"][0]),1)])),_:1})])),_:1},8,["label"]),h(c,{label:t.$t("Description_uz"),required:""},{default:g((()=>[h(p,null,{default:g((()=>[h(m,{modelValue:R.uz,"onUpdate:modelValue":u[1]||(u[1]=e=>R.uz=e),name:"description_uz",placeholder:x($)("Add_description_uz")},null,8,["modelValue","placeholder"]),y("p",oe,j(A["description.uz"][0]),1)])),_:1})])),_:1},8,["label"])])])):"ru"===e?(v(),V("div",ie,[y("div",re,[h(c,{label:t.$t("Name_ru")},{default:g((()=>[h(p,null,{default:g((()=>[h(d,{modelValue:I.ru,"onUpdate:modelValue":u[2]||(u[2]=e=>I.ru=e),name:"name_ru",type:"text",placeholder:x($)("Type_name_ru")},null,8,["modelValue","placeholder"])])),_:1})])),_:1},8,["label"]),h(c,{label:t.$t("Description_ru")},{default:g((()=>[h(p,null,{default:g((()=>[h(m,{modelValue:R.ru,"onUpdate:modelValue":u[3]||(u[3]=e=>R.ru=e),name:"description_ru",placeholder:x($)("Add_description_ru")},null,8,["modelValue","placeholder"])])),_:1})])),_:1},8,["label"])])])):"en"===e?(v(),V("div",ue,[y("div",de,[h(c,{label:t.$t("Name_en")},{default:g((()=>[h(p,null,{default:g((()=>[h(d,{modelValue:I.en,"onUpdate:modelValue":u[4]||(u[4]=e=>I.en=e),name:"name_en",type:"text",placeholder:x($)("Type_name_en")},null,8,["modelValue","placeholder"])])),_:1})])),_:1},8,["label"]),h(c,{label:t.$t("Description_en")},{default:g((()=>[h(p,null,{default:g((()=>[h(m,{modelValue:R.en,"onUpdate:modelValue":u[5]||(u[5]=e=>R.en=e),name:"description_en",placeholder:x($)("Add_description_en")},null,8,["modelValue","placeholder"])])),_:1})])),_:1},8,["label"])])])):w("",!0)])),_:1},8,["tabs"])],40,le)])),action:g((({close:e})=>[h(k,{loading:U.value,color:"primary",outlined:"",type:"submit",form:"role-form",disabled:U.value},{default:g((()=>[z(j(t.$t("Save")),1)])),_:1},8,["loading","disabled"])])),_:1},8,["open","title"])}}}),ce=["onClick"],me={class:"icon"},_e={class:"meta"},ve=["onClick"],fe={class:"icon"},ge={class:"meta"},ye=y("hr",{class:"dropdown-divider"},null,-1),be=["onClick"],he={class:"icon"},Ve={class:"meta"},xe=u({__name:"RoleDropdown",emits:["edit","remove","permissions"],setup:(e,{emit:a})=>(e,l)=>{const t=k("VueIconify"),n=W;return v(),f(n,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:g((({close:l})=>[y("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:b((()=>{a("edit"),l()}),["prevent"])},[y("div",me,[h(t,{icon:"feather:edit-2"})]),y("div",_e,[y("span",null,j(e.$t("Edit")),1)])],8,ce),y("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:b((()=>{a("permissions"),l()}),["prevent"])},[y("div",fe,[h(t,{icon:"feather:shield"})]),y("div",ge,[y("span",null,j(e.$t("Role_permissions")),1)])],8,ve),ye,y("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:b((()=>{a("remove"),l()}),["prevent"])},[y("div",he,[h(t,{icon:"feather:trash"})]),y("div",Ve,[y("span",null,j(e.$t("Remove")),1)])],8,be)])),_:1})}}),je={class:"applicant-list-wrapper"},we={class:"columns"},ze={class:"column is-12"},ke={key:0,class:"is-flex-grow-0",textContent:"#"},$e={key:0,class:"flex-list-inner"},Ce={key:1,class:"flex-list-inner"},Ue=y("img",{class:"light-image",src:P,alt:""},null,-1),Ie=y("img",{class:"dark-image",src:H,alt:""},null,-1),Re=u({__name:"index",async setup(a){let n,s;const o=d(),i=$(),{t:r}=p(),u=ae(),k=m({pagination:{current_page:1,per_page:10,total:10},result:[]}),O=c(!1),T=c(null),D=C({get:()=>"",async set(e){await async function(e){const a=await S(e);Object.assign(k,a)}(e)}}),P=C((()=>({orderNumber:{format:(e,a,l)=>`${l+1}`,cellClass:"is-flex-grow-0"},name:{label:r("Name"),searchable:!0},description:{label:r("Description")},actions:{label:r("Actions"),align:"center"}}))),H=c(!1);c();const W=ee(),le=C({get:()=>k.pagination.current_page,set:async e=>{await se(e)}});function te(e=null){console.log({rowId:e}),O.value=!0,T.value=e}async function ne(){await q(T.value),await se(),oe()}async function se(e=1){var a;try{H.value=!0;const a=await E({page:e,per_page:k.pagination.per_page});Object.assign(k,a)}catch(l){o.error(r(null==(a=l.response)?void 0:a.data.error.message))}finally{H.value=!1}}function oe(){o.success(r("Success"))}return W.setPageTitle(r("Roles_List")),U({title:r("Roles")}),[n,s]=I((()=>se())),await n,s(),_((()=>k.pagination.per_page),(async()=>{await se()})),(a,n)=>{const s=Y,o=l,r=X,d=Z,p=G,c=Q,m=L,_=F,$=t,C=J,U=xe,I=M,E=K,S=B,q=pe,W=e;return v(),V("div",je,[h(r,{"justify-content":"space-between"},{default:g((()=>[h(s,{"with-icons":"",separator:"bullet",items:[{label:"Vuero",hideLabel:!0,icon:"feather:home",to:{name:"/app"}},{label:a.$t("Roles"),to:{name:"/app/roles/"}}]},null,8,["items"]),h(o,{outlined:"",rounded:"",color:"primary",icon:"feather:plus",onClick:n[0]||(n[0]=b((e=>te(null)),["prevent"]))},{default:g((()=>[z(j(a.$t("Add")),1)])),_:1})])),_:1}),y("div",we,[y("div",ze,[h(S,{class:"mt-4",columns:x(P),data:k.result,limit:k.pagination.per_page,total:k.pagination.total},{default:g((e=>[h(c,null,{left:g((()=>[h(d,{modelValue:x(D),"onUpdate:modelValue":n[1]||(n[1]=e=>R(D)?D.value=e:null)},null,8,["modelValue"])])),right:g((()=>[h(p,{modelValue:k.pagination.per_page,"onUpdate:modelValue":n[2]||(n[2]=e=>k.pagination.per_page=e)},null,8,["modelValue"])])),_:1}),h(I,{rounded:"","no-header":!H.value&&0===k.result.length},{"header-column":g((({column:e})=>["orderNumber"===e.key?(v(),V("span",ke)):w("",!0)])),body:g((()=>[H.value?(v(),V("div",$e,[(v(!0),V(A,null,N(k.pagination.per_page,(e=>(v(),V("div",{key:e,class:"flex-table-item"},[h(_,null,{default:g((()=>[h(m,{lines:2,width:"40%","last-line-width":"20%",class:"mx-2"})])),_:1}),h(_,null,{default:g((()=>[h($,{class:"mx-1"})])),_:1}),h(_,{column:{align:"center"}},{default:g((()=>[h($,{width:"45%",class:"mx-1"})])),_:1})])))),128))])):0===k.result.length?(v(),V("div",Ce,[h(C,{title:a.$t("No_data"),subtitle:a.$t("There_is_no_data_that_match_your_query"),class:"my-6"},{image:g((()=>[Ue,Ie])),_:1},8,["title","subtitle"])])):w("",!0)])),"body-cell":g((({row:e,column:a})=>["actions"===a.key?(v(),f(U,{key:0,onEdit:a=>te(e.id),onRemove:a=>async function(e){T.value=e,u.$patch({confirmModalState:!0})}(e.id),onPermissions:a=>{return l=e.id,void i.push(`/app/roles/${l}/permissions`);var l}},null,8,["onEdit","onRemove","onPermissions"])):w("",!0)])),_:1},8,["no-header"]),k.result.length?(v(),f(E,{key:0,"current-page":x(le),"onUpdate:current-page":n[3]||(n[3]=e=>R(le)?le.value=e:null),class:"mt-5","item-per-page":k.pagination.per_page,"total-items":k.pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):w("",!0)])),_:1},8,["columns","data","limit","total"])])]),h(q,{modelValue:O.value,"onUpdate:modelValue":n[4]||(n[4]=e=>O.value=e),"role-id":T.value,"onUpdate:list":n[5]||(n[5]=()=>{se(),oe(),T.value=null}),onClose:n[6]||(n[6]=e=>T.value=null)},null,8,["modelValue","role-id"]),h(W,{onConfirmAction:ne})])}}});export{Re as default};