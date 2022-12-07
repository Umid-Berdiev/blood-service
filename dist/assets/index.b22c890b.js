import{_ as e}from"./PrimaryScreeningFormModal.vue_vue_type_script_setup_true_lang.f4ce06b6.js";import{_ as a,a as t,b as l,c as s,d as n,e as o,f as i,g as r}from"./search-7-dark.607cbb05.js";import{_ as d}from"./VCard.vue_vue_type_script_setup_true_lang.1f6b49b7.js";import{_ as u}from"./VButton.vue_vue_type_style_index_0_lang.61c9c78b.js";import{_,a as c}from"./VControl.a4292c49.js";import{q as p,C as m,H as v,r as g,x as b,A as y,j as f,o as h,a as j,w as x,e as V,m as k,k as $,t as D,i as w,E as C,J as F,c as M,a7 as S,ag as I,d as L,K as B,g as O,F as P,l as U,S as A,L as E,M as Y}from"./index.5e313a07.js";import{p as z,a as N}from"./patient.83d02e12.js";import{_ as q}from"./VBreadcrumb.vue_vue_type_style_index_0_lang.141f26f3.js";import{_ as T}from"./lodash.6f8ef5ec.js";import{u as W}from"./main.a14c778c.js";import{u as G}from"./viewWrapper.74d08f31.js";import{_ as H}from"./_plugin-vue_export-helper.cdc0426e.js";import"./VModal.vue_vue_type_style_index_0_lang.e01de1da.js";import"./SubmitButton.vue_vue_type_script_setup_true_lang.ff8c9853.js";import"./VFlex.vue_vue_type_style_index_0_lang.19debbcb.js";import"./VFlexItem.vue_vue_type_style_index_0_lang.c03e68c9.js";import"./IMaskDateInput.vue_vue_type_script_setup_true_lang.2fa4ff12.js";import"./VIMaskInput.vue_vue_type_script_lang.1ef138ed.js";import"./moment.bb668042.js";import"./VPlaceload.726b7e5d.js";const J=["onSubmit"],K={class:"columns"},Q={class:"column"},R={class:"help has-text-danger"},X={class:"column"},Z={class:"help has-text-danger"},ee={class:"column"},ae={class:"help has-text-danger"},te={class:"navigation-buttons"},le={class:"buttons is-right"},se=p({__name:"ForScreeningDonorsFilterForm",props:{isLoading:{type:Boolean},errors:null},emits:["search","clearError","clearForm"],setup(e,{emit:a}){const{t:t}=m();v();const l=g({donor_category_id:"",visit_type:"",donation_type_id:""}),s=b([]),n=b([{value:"gratuitous",label:t("Gratuitous")},{value:"chargeable",label:t("Chargeable")}]),o=b([{id:1,name:t("Whole_blood_donation")},{id:2,name:t("Plasmapheresis")},{id:3,name:t("Plateletpheresis")}]);y((async()=>{s.value=await z().then((e=>e.result))}));const i=async()=>{a("search",l)},r=async()=>{Object.assign(l,{donor_category_id:"",visit_type:"",donation_type_id:""}),a("clearForm")};return(a,t)=>{const p=f("Multiselect"),m=_,v=c,g=u,b=d;return h(),j(b,{radius:"regular"},{default:x((()=>[V("form",{onSubmit:k(i,["prevent"])},[V("div",K,[V("div",Q,[$(v,{class:"is-curved-select",label:a.$t("Donor_categories")},{default:x((({id:n})=>[$(m,null,{default:x((()=>[$(p,{modelValue:l.donor_category_id,"onUpdate:modelValue":t[0]||(t[0]=e=>l.donor_category_id=e),attrs:{id:n},options:s.value,placeholder:a.$t("All"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"]),V("p",R,D(e.errors.donor_category_id[0]),1)])),_:2},1024)])),_:1},8,["label"])]),V("div",X,[$(v,{class:"is-curved-select",label:a.$t("Visit_type")},{default:x((({id:s})=>[$(m,null,{default:x((()=>[$(p,{modelValue:l.visit_type,"onUpdate:modelValue":t[1]||(t[1]=e=>l.visit_type=e),attrs:{id:s},options:n.value,placeholder:a.$t("All")},null,8,["modelValue","attrs","options","placeholder"]),V("p",Z,D(e.errors.visit_type[0]),1)])),_:2},1024)])),_:1},8,["label"])]),V("div",ee,[$(v,{class:"is-curved-select",label:a.$t("Donation_type")},{default:x((({id:s})=>[$(m,null,{default:x((()=>[$(p,{modelValue:l.donation_type_id,"onUpdate:modelValue":t[2]||(t[2]=e=>l.donation_type_id=e),attrs:{id:s},options:o.value,placeholder:a.$t("All"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"]),V("p",ae,D(e.errors.donation_type_id[0]),1)])),_:2},1024)])),_:1},8,["label"])])]),V("div",te,[V("div",le,[$(g,{type:"button",color:"warning",bold:"",disabled:e.isLoading,tabindex:"0",onClick:r},{default:x((()=>[w(D(a.$t("Clear")),1)])),_:1},8,["disabled"]),$(g,{type:"submit",color:"primary",bold:"",loading:e.isLoading,tabindex:"0"},{default:x((()=>[w(D(a.$t("Search")),1)])),_:1},8,["loading"])])])],40,J)])),_:1})}}}),ne=e=>(E("data-v-38ef7292"),e=e(),Y(),e),oe={class:"page-content-inner"},ie={class:"columns mb-3"},re={class:"column"},de={class:"columns mt-1"},ue={class:"column"},_e={class:"columns"},ce={class:"column is-12"},pe=["textContent"],me={key:0,class:"flex-list-inner"},ve={key:1,class:"flex-list-inner"},ge=ne((()=>V("img",{class:"light-image",src:i,alt:""},null,-1))),be=ne((()=>V("img",{class:"dark-image",src:r,alt:""},null,-1))),ye=["onClick"],fe=T.isEmpty,he=H(p({__name:"index",async setup(i){let r,d;C();const u=v(),{t:_}=m(),c=W(),p=b(!1);G().setPageTitle(_("Screening")),F({title:`${_("Donors-list-for-primary-screening")} - ${c.app.name}`});const y=g({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),f=M({get:()=>y.pagination.current_page,set:async e=>{E.page=e,await T(E)}}),k={orderNumber:{format:(e,a,t)=>`${t+1}`},name:{label:_("Fullname")},birth_date:{label:_("Date-of-birth")},visit_date:{label:_("Visit_date"),format:(e,a)=>{var t,l;return(null==(t=a.last_visit)?void 0:t.created_at)&&S(new Date(null==(l=a.last_visit)?void 0:l.created_at),"YYYY-MM-DD")}},visit_type:{label:_("Visit_type"),format:(e,a)=>{var t,l;return(null==(t=a.last_visit)?void 0:t.visit_type)&&_(null==(l=a.last_visit)?void 0:l.visit_type)}},medical_inspection_date:{label:_("Medical_inspection_date"),format:(e,a)=>{var t,l;return(null==(t=a.last_visit)?void 0:t.directed_by)&&_(null==(l=a.last_visit)?void 0:l.directed_by)}},medical_inspection_conclusion:{label:_("Medical_inspection_conclusion"),format:(e,a)=>{var t;return null==(t=a.last_visit)?void 0:t.personalized_donation}},linked_donation_number:{label:_("Linked_donation_number"),format:(e,a)=>{var t;return null==(t=a.last_visit)?void 0:t.personalized_donation}},donation_type:{label:_("Donation_type"),format:(e,a)=>{var t;return null==(t=a.last_visit)?void 0:t.personalized_donation}},blood_component_amount:{label:_("Blood_component_amount"),format:(e,a)=>{var t;return null==(t=a.status)?void 0:t.name}}};b();const w=g({donor_category_id:[],visit_type:[],donation_type_id:[]}),E=g({page:1}),Y=g({}),z=b(!1);async function T(e){var a,t;try{Object.assign(E,e),p.value=!0;const a=await N(e);Object.assign(y,a.result),fe(a.result.data)?u.warning(_("Data_not_found")):u.success(`${_("Found")}: ${a.result.pagination.total} ${_("records")}`)}catch(l){Object.assign(w,null==(t=null==(a=l.response)?void 0:a.data)?void 0:t.errors)}finally{p.value=!1}}function H(e){w[e]=""}async function J(){y.data=[]}return[r,d]=I((()=>T(E))),await r,d(),(i,r)=>{const d=q,u=se,_=a,m=t,v=l,g=s,b=n,C=o,F=e;return h(),L("div",oe,[V("div",ie,[V("div",re,[$(d,{"with-icons":"",separator:"bullet",items:[{label:B(c).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:i.$t("Screening")},{label:i.$t("Donors-list-for-primary-screening")}]},null,8,["items"])])]),V("div",de,[V("div",ue,[$(u,{"is-loading":p.value,errors:w,onSearch:T,onClearForm:J,onClearError:H},null,8,["is-loading","errors"])])]),V("div",_e,[V("div",ce,[$(C,{columns:B(k),data:y.data,limit:y.pagination.per_page,total:y.pagination.total},{default:x((()=>[$(g,{rounded:"","no-header":!p.value&&0===y.data.length},{"header-column":x((({column:e})=>["orderNumber"===e.key?(h(),L("span",{key:0,textContent:D(i.$t("Donor_register_number"))},null,8,pe)):O("",!0)])),body:x((()=>[p.value?(h(),L("div",me,[(h(!0),L(P,null,U(y.pagination.per_page,(e=>(h(),L("div",{key:e,class:"flex-table-item"},[$(m,null,{default:x((()=>[$(_,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):O("",!0),0===y.data.length?(h(),L("div",ve,[$(v,{title:"No matches",subtitle:"There is no data that match your query.",class:"my-6"},{image:x((()=>[ge,be])),_:1})])):O("",!0)])),"body-cell":x((({row:e,column:a})=>["name"===a.key?(h(),L("button",{key:0,class:"button button-link",onClick:a=>{return t=e,Object.assign(Y,t),void(z.value=!0);var t}},D(e.first_name)+" "+D(e.last_name)+" "+D(e.father_name),9,ye)):O("",!0)])),_:1},8,["no-header"]),y.data.length?(h(),j(b,{key:0,"current-page":B(f),"onUpdate:current-page":r[0]||(r[0]=e=>A(f)?f.value=e:null),class:"mt-5","item-per-page":y.pagination.per_page,"total-items":y.pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):O("",!0)])),_:1},8,["columns","data","limit","total"])])]),$(F,{"is-open":z.value,"onUpdate:is-open":r[1]||(r[1]=e=>z.value=e),patient:Y},null,8,["is-open","patient"])])}}}),[["__scopeId","data-v-38ef7292"]]);export{he as default};
