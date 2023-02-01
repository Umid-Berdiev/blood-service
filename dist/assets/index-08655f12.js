import{_ as e,a,b as t}from"./VFlexTable.vue_vue_type_style_index_0_lang-a0c1a611.js";import{_ as l,a as s,b as r,c as n,d as i}from"./search-7-dark-8086cfd0.js";import{_ as o}from"./VCard.vue_vue_type_script_setup_true_lang-bb96f312.js";import{_ as d}from"./VButton.vue_vue_type_style_index_0_lang-8d9e700e.js";import{_,a as u}from"./VControl-f7fb3a1b.js";import{_ as c}from"./IMaskDateInput.vue_vue_type_script_setup_true_lang-6474213d.js";import{q as p,C as m,H as g,r as v,a8 as b,x as y,j as f,o as h,a as x,w as V,e as j,m as $,k,K as w,t as D,i as S,E as C,J as F,c as M,a7 as Y,d as L,g as U,F as I,l as E,U as O,L as B,M as N}from"./index-98bd5d96.js";import{p as P}from"./patient-81564020.js";import{_ as T}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-e0d2add1.js";import{u as q}from"./main-f6ba09a2.js";import{u as A}from"./viewWrapper-68c9a3c0.js";import{f as H}from"./index-8f4a0a65.js";import{_ as K}from"./_plugin-vue_export-helper-1b428a4d.js";import"./VFlex.vue_vue_type_style_index_0_lang-d4822231.js";import"./VIMaskInput.vue_vue_type_script_lang-760644c4.js";import"./moment-29978768.js";const G=["onSubmit"],J={class:"columns"},W={class:"column"},Z={class:"help has-text-danger"},z={class:"column"},Q={class:"help has-text-danger"},R={class:"column"},X={class:"help has-text-danger"},ee={class:"column"},ae={class:"help has-text-danger"},te={class:"navigation-buttons"},le={class:"buttons is-right"},se=p({__name:"ScreeningPassedDonorsFilterForm",props:{isLoading:{type:Boolean},errors:null},emits:["search","clearError","clearForm"],async setup(e,{emit:a}){let t,l;const{t:s}=m();g();const r=v({start_date:"",end_date:"",donor_category_id:"",visit_type_id:""}),n=([t,l]=b((()=>P().then((e=>e.result)))),t=await t,l(),t),i=y([{value:"gratuitous",label:s("Gratuitous")},{value:"chargeable",label:s("Chargeable")}]),p=async()=>{a("search",r)},C=async()=>{Object.assign(r,{start_date:"",end_date:"",donor_category_id:"",visit_type_id:""}),a("clearForm")};return(a,t)=>{const l=c,s=_,m=u,g=f("Multiselect"),v=d,b=o;return h(),x(b,null,{default:V((()=>[j("form",{onSubmit:$(p,["prevent"])},[j("div",J,[j("div",W,[k(m,{label:a.$t("Start_date")},{default:V((()=>[k(s,null,{default:V((()=>[k(l,{modelValue:w(r).start_date,"onUpdate:modelValue":t[0]||(t[0]=e=>w(r).start_date=e)},null,8,["modelValue"]),j("p",Z,D(e.errors.start_date[0]),1)])),_:1})])),_:1},8,["label"])]),j("div",z,[k(m,{label:a.$t("End_date")},{default:V((()=>[k(s,null,{default:V((()=>[k(l,{modelValue:w(r).end_date,"onUpdate:modelValue":t[1]||(t[1]=e=>w(r).end_date=e)},null,8,["modelValue"]),j("p",Q,D(e.errors.end_date[0]),1)])),_:1})])),_:1},8,["label"])]),j("div",R,[k(m,{class:"is-curved-select",label:a.$t("Donor_categories")},{default:V((({id:l})=>[k(s,null,{default:V((()=>[k(g,{modelValue:w(r).donor_category_id,"onUpdate:modelValue":t[2]||(t[2]=e=>w(r).donor_category_id=e),attrs:{id:l},options:w(n),placeholder:a.$t("All"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"]),j("p",X,D(e.errors.donor_category_id[0]),1)])),_:2},1024)])),_:1},8,["label"])]),j("div",ee,[k(m,{class:"is-curved-select",label:a.$t("Visit_type")},{default:V((({id:l})=>[k(s,null,{default:V((()=>[k(g,{modelValue:w(r).visit_type_id,"onUpdate:modelValue":t[3]||(t[3]=e=>w(r).visit_type_id=e),attrs:{id:l},options:w(i),placeholder:a.$t("All")},null,8,["modelValue","attrs","options","placeholder"]),j("p",ae,D(e.errors.visit_type_id[0]),1)])),_:2},1024)])),_:1},8,["label"])])]),j("div",te,[j("div",le,[k(v,{type:"button",color:"warning",bold:"",disabled:e.isLoading,tabindex:"0",onClick:C},{default:V((()=>[S(D(a.$t("Clear")),1)])),_:1},8,["disabled"]),k(v,{type:"submit",color:"primary",bold:"",loading:e.isLoading,tabindex:"0"},{default:V((()=>[S(D(a.$t("Search")),1)])),_:1},8,["loading"])])])],40,G)])),_:1})}}}),re=e=>(B("data-v-1a35a9e0"),e=e(),N(),e),ne={class:"page-content-inner"},ie={class:"columns mb-3"},oe={class:"column"},de={class:"columns mt-1"},_e={class:"column"},ue={class:"columns"},ce={class:"column is-12"},pe=["textContent"],me={key:0,class:"flex-list-inner"},ge={key:1,class:"flex-list-inner"},ve=re((()=>j("img",{class:"light-image",src:n,alt:""},null,-1))),be=re((()=>j("img",{class:"dark-image",src:i,alt:""},null,-1))),ye={key:0},fe=K(p({__name:"index",async setup(n){let i,o;C(),g();const{t:d}=m(),_=q(),u=y(!1);A().setPageTitle(d("Screening")),F({title:`${d("Screening-passed-donors-list")} - ${_.app.name}`});const c=v({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),p=M({get:()=>c.pagination.current_page,set:async e=>{S.page=e,await B(S)}}),f={orderNumber:{format:(e,a,t)=>`${t+1}`,align:"center"},screening_date:{label:d("Screening_date"),format:(e,a)=>{var t,l,s;return(null==(t=a.last_visit)?void 0:t.primary_screening_result)&&Y(new Date(null==(s=null==(l=a.last_visit)?void 0:l.primary_screening_result)?void 0:s.created_at),"YYYY-MM-DD")}},name:{label:d("Donor_fullname")},birth_date:{label:d("Date-of-birth")},visit_date:{label:d("Visit_date"),format:(e,a)=>{var t,l;return(null==(t=a.last_visit)?void 0:t.created_at)&&Y(new Date(null==(l=a.last_visit)?void 0:l.created_at),"YYYY-MM-DD")}},visit_type:{label:d("Visit_type"),format:(e,a)=>{var t,l;return(null==(t=a.last_visit)?void 0:t.visit_type)&&d(null==(l=a.last_visit)?void 0:l.visit_type)}},hemoglobin:{label:`${d("Hemoglobin")}, ${d("g/l")}`,format:(e,a)=>{var t,l;return null==(l=null==(t=a.last_visit)?void 0:t.primary_screening_result)?void 0:l.value},align:"center"},preliminary_blood_type:{label:d("Preliminary_blood_type"),format:(e,a)=>{var t,l,s;return null==(s=null==(l=null==(t=a.last_visit)?void 0:t.primary_screening_result)?void 0:l.blood_type)?void 0:s.label},align:"center"},laboratory_assistant_fullname:{label:d("Laboratory_assistant_fullname"),format:(e,a)=>{var t,l;return null==(l=null==(t=a.last_visit)?void 0:t.primary_screening_result)?void 0:l.created_by}}};y();const $=v({start_date:[],end_date:[],donor_category_id:[],visit_type_id:[]}),S=v({page:1});async function B(e){var a,t;try{Object.assign(S,e),u.value=!0;const a=await H(e);Object.assign(c,a.result)}catch(l){Object.assign($,null==(t=null==(a=l.response)?void 0:a.data)?void 0:t.errors)}finally{u.value=!1}}function N(e){$[e]=""}async function P(){c.data=[]}return[i,o]=b((()=>B(S))),await i,o(),(n,i)=>{const o=T,d=se,m=l,g=e,v=s,b=a,y=r,S=t;return h(),L("div",ne,[j("div",ie,[j("div",oe,[k(o,{"with-icons":"",separator:"bullet",items:[{label:w(_).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:n.$t("Screening")},{label:n.$t("Screening-passed-donors-list")}]},null,8,["items"])])]),j("div",de,[j("div",_e,[k(d,{"is-loading":w(u),errors:w($),onSearch:B,onClearForm:P,onClearError:N},null,8,["is-loading","errors"])])]),j("div",ue,[j("div",ce,[k(S,{columns:w(f),data:w(c).data,limit:w(c).pagination.per_page,total:w(c).pagination.total},{default:V((()=>[k(b,{rounded:"","no-header":!w(u)&&0===w(c).data.length},{"header-column":V((({column:e})=>["orderNumber"===e.key?(h(),L("span",{key:0,textContent:D(n.$t("donor_no"))},null,8,pe)):U("",!0)])),body:V((()=>[w(u)?(h(),L("div",me,[(h(!0),L(I,null,E(w(c).pagination.per_page,(e=>(h(),L("div",{key:e,class:"flex-table-item"},[k(g,null,{default:V((()=>[k(m,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):U("",!0),0===w(c).data.length?(h(),L("div",ge,[k(v,{title:n.$t("No_data"),subtitle:n.$t("There_is_no_data_that_match_your_query"),class:"my-6"},{image:V((()=>[ve,be])),_:1},8,["title","subtitle"])])):U("",!0)])),"body-cell":V((({row:e,column:a})=>["name"===a.key?(h(),L("span",ye,D(e.first_name)+" "+D(e.last_name)+" "+D(e.father_name),1)):U("",!0)])),_:1},8,["no-header"]),w(c).data.length?(h(),x(y,{key:0,"current-page":w(p),"onUpdate:current-page":i[0]||(i[0]=e=>O(p)?p.value=e:null),class:"mt-5","item-per-page":w(c).pagination.per_page,"total-items":w(c).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):U("",!0)])),_:1},8,["columns","data","limit","total"])])])])}}}),[["__scopeId","data-v-1a35a9e0"]]);export{fe as default};
