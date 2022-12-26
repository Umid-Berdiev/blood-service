import{_ as a,a as e,b as t}from"./VFlexTable.vue_vue_type_style_index_0_lang-f8ff2f75.js";import{_ as l,a as s,b as o,c as i,d as n}from"./search-7-dark-f0facebe.js";import{_ as r}from"./VCard.vue_vue_type_script_setup_true_lang-a9232da9.js";import{_ as d}from"./VButton.vue_vue_type_style_index_0_lang-27d6885c.js";import{_ as u,a as _}from"./VControl-fc151345.js";import{_ as p}from"./IMaskDateInput.vue_vue_type_script_setup_true_lang-5ce26ef4.js";import{a as m,r as c,ac as v,b as g,s as y,l as b,t as f,q as h,Q as j,X as V,p as x,u as k,V as $,v as D,c as w,m as F,y as C,M as E,W as M,i as P,$ as U,a0 as L}from"./chunk-BGPNDDXN-dcda8805.js";import{_ as N}from"./lodash-94527813.js";import{u as S}from"./chunk-3UEUFEGV-d557e6b1.js";import{u as B}from"./useNotyf-1536ae84.js";import{p as I,f as A}from"./patient-7cc4d60d.js";import{_ as O}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-d3c7c667.js";import{u as Y}from"./chunk-DRAQDPQ2-4514f14e.js";import{f as z}from"./@vueuse_core-098eb702.js";import{u as G}from"./@vueuse_head-0d019878.js";import{u as Q}from"./main-a3a6220c.js";import{u as T}from"./viewWrapper-c60f0ce7.js";import{_ as W}from"./_plugin-vue_export-helper-1b428a4d.js";import"./VFlex.vue_vue_type_style_index_0_lang-0938e556.js";import"./VPlaceload-2a65ae53.js";import"./VIMaskInput.vue_vue_type_script_lang-06d40a07.js";import"./moment-e00bdeae.js";import"./userSession-0c0e9684.js";import"./pinia-3af6ce52.js";const q=["onSubmit"],R={class:"columns"},X={class:"column"},H={class:"help has-text-danger"},J={class:"column"},K={class:"help has-text-danger"},Z={class:"column"},aa={class:"help has-text-danger"},ea={class:"column"},ta={class:"help has-text-danger"},la={class:"column"},sa={class:"help has-text-danger"},oa={class:"navigation-buttons"},ia={class:"buttons is-right"},na=N.isEmpty,ra=N.values,da=m({__name:"ExaminedDonorsFilterForm",props:{isLoading:{type:Boolean},errors:null},emits:["search","clearError","clearForm"],async setup(a,{emit:e}){let t,l;const{t:s}=S(),o=B(),i=c({start_date:"",end_date:"",donor_category_id:"",visit_type_id:"",donation_type_id:""}),n=([t,l]=v((()=>I().then((a=>a.result)))),t=await t,l(),t),m=g([{value:"gratuitous",label:s("Gratuitous")},{value:"chargeable",label:s("Chargeable")}]),w=g([{id:1,name:s("Whole_blood_donation")},{id:2,name:s("Plasmapheresis")},{id:3,name:s("Plateletpheresis")}]),F=async()=>{ra(i).every(na)?o.error(s("Form_fields_are_empty")):e("search",i)},C=async()=>{Object.assign(i,{start_date:"",end_date:"",donor_category_id:"",visit_type_id:"",donation_type_id:""}),e("clearForm")};return(e,t)=>{const l=p,s=u,o=_,c=y("Multiselect"),v=d,g=r;return b(),f(g,null,{default:h((()=>[j("form",{onSubmit:V(F,["prevent"])},[j("div",R,[j("div",X,[x(o,{label:e.$t("Start_date")},{default:h((()=>[x(s,null,{default:h((()=>[x(l,{modelValue:k(i).start_date,"onUpdate:modelValue":t[0]||(t[0]=a=>k(i).start_date=a)},null,8,["modelValue"]),j("p",H,$(a.errors.start_date[0]),1)])),_:1})])),_:1},8,["label"])]),j("div",J,[x(o,{label:e.$t("End_date")},{default:h((()=>[x(s,null,{default:h((()=>[x(l,{modelValue:k(i).end_date,"onUpdate:modelValue":t[1]||(t[1]=a=>k(i).end_date=a)},null,8,["modelValue"]),j("p",K,$(a.errors.end_date[0]),1)])),_:1})])),_:1},8,["label"])]),j("div",Z,[x(o,{class:"is-curved-select",label:e.$t("Donor_categories")},{default:h((({id:l})=>[x(s,null,{default:h((()=>[x(c,{modelValue:k(i).donor_category_id,"onUpdate:modelValue":t[2]||(t[2]=a=>k(i).donor_category_id=a),attrs:{id:l},options:k(n),placeholder:e.$t("All"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"]),j("p",aa,$(a.errors.donor_category_id[0]),1)])),_:2},1024)])),_:1},8,["label"])]),j("div",ea,[x(o,{class:"is-curved-select",label:e.$t("Visit_type")},{default:h((({id:l})=>[x(s,null,{default:h((()=>[x(c,{modelValue:k(i).visit_type_id,"onUpdate:modelValue":t[3]||(t[3]=a=>k(i).visit_type_id=a),attrs:{id:l},options:k(m),placeholder:e.$t("All")},null,8,["modelValue","attrs","options","placeholder"]),j("p",ta,$(a.errors.visit_type_id[0]),1)])),_:2},1024)])),_:1},8,["label"])]),j("div",la,[x(o,{class:"is-curved-select",label:e.$t("Donation_type")},{default:h((({id:l})=>[x(s,null,{default:h((()=>[x(c,{modelValue:k(i).donation_type_id,"onUpdate:modelValue":t[4]||(t[4]=a=>k(i).donation_type_id=a),attrs:{id:l},options:k(w),placeholder:e.$t("All"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"]),j("p",sa,$(a.errors.donation_type_id[0]),1)])),_:2},1024)])),_:1},8,["label"])])]),j("div",oa,[j("div",ia,[x(v,{type:"button",color:"warning",bold:"",disabled:a.isLoading,tabindex:"0",onClick:C},{default:h((()=>[D($(e.$t("Clear")),1)])),_:1},8,["disabled"]),x(v,{type:"submit",color:"primary",bold:"",loading:a.isLoading,tabindex:"0"},{default:h((()=>[D($(e.$t("Search")),1)])),_:1},8,["loading"])])])],40,q)])),_:1})}}}),ua=a=>(U("data-v-4264f806"),a=a(),L(),a),_a={class:"page-content-inner"},pa={class:"columns mb-3"},ma={class:"column"},ca={class:"columns mt-1"},va={class:"column"},ga={class:"columns"},ya={class:"column is-12"},ba=["textContent"],fa={key:0,class:"flex-list-inner"},ha={key:1,class:"flex-list-inner"},ja=ua((()=>j("img",{class:"light-image",src:i,alt:""},null,-1))),Va=ua((()=>j("img",{class:"dark-image",src:n,alt:""},null,-1))),xa=N.isEmpty,ka=W(m({__name:"index",setup(i){Y();const n=B(),{t:r}=S(),d=Q(),u=g(!1);T().setPageTitle(r("Physician-therapist")),G({title:`${r("Donors-list-for-examination")} - ${d.app.name}`});const _=c({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),p=w({get:()=>_.pagination.current_page,set:async a=>{V.page=a,await U(V)}}),m={orderNumber:{format:(a,e,t)=>`${t+1}`},name:{label:r("Fullname")},birth_date:{label:r("Date-of-birth")},visit_date:{label:r("Visit_date"),format:(a,e)=>{var t,l;return(null==(t=e.last_visit)?void 0:t.created_at)&&z(new Date(null==(l=e.last_visit)?void 0:l.created_at),"YYYY-MM-DD")}},visit_type:{label:r("Visit_type"),format:(a,e)=>{var t,l;return(null==(t=e.last_visit)?void 0:t.visit_type)&&r(null==(l=e.last_visit)?void 0:l.visit_type)}},medical_inspection_date:{label:r("Medical_inspection_date"),format:(a,e)=>{var t,l;return(null==(t=e.last_visit)?void 0:t.directed_by)&&r(null==(l=e.last_visit)?void 0:l.directed_by)}},medical_inspection_conclusion:{label:r("Medical_inspection_conclusion"),format:(a,e)=>{var t;return null==(t=e.last_visit)?void 0:t.personalized_donation}},linked_donation_number:{label:r("Linked_donation_number"),format:(a,e)=>{var t;return null==(t=e.last_visit)?void 0:t.personalized_donation}},donation_type:{label:r("Donation_type"),format:(a,e)=>{var t;return null==(t=e.last_visit)?void 0:t.personalized_donation}},blood_component_amount:{label:r("Blood_component_amount"),format:(a,e)=>{var t;return null==(t=e.status)?void 0:t.name}}};g();const v=c({start_date:[],end_date:[],donor_category_id:[],visit_type_id:[],donation_type_id:[]}),V=c({page:1});async function U(a){var e,t;try{Object.assign(V,a),u.value=!0;const e=await A(a);Object.assign(_,e.result),xa(e.result.data)?n.warning(r("Data_not_found")):n.success(`${r("Found")}: ${e.result.pagination.total} ${r("records")}`)}catch(l){Object.assign(v,null==(t=null==(e=l.response)?void 0:e.data)?void 0:t.errors)}finally{u.value=!1}}function L(a){v[a]=""}async function N(){_.data=[]}return(i,n)=>{const r=O,c=da,g=l,V=a,w=s,S=y("RouterLink"),B=e,I=o,A=t;return b(),F("div",_a,[j("div",pa,[j("div",ma,[x(r,{"with-icons":"",separator:"bullet",items:[{label:k(d).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:i.$t("Physician-therapist")},{label:i.$t("Examined-donor-register")}]},null,8,["items"])])]),j("div",ca,[j("div",va,[x(c,{"is-loading":k(u),errors:k(v),onSearch:U,onClearForm:N,onClearError:L},null,8,["is-loading","errors"])])]),j("div",ga,[j("div",ya,[x(A,{columns:k(m),data:k(_).data,limit:k(_).pagination.per_page,total:k(_).pagination.total},{default:h((()=>[x(B,{rounded:"","no-header":!k(u)&&0===k(_).data.length},{"header-column":h((({column:a})=>["orderNumber"===a.key?(b(),F("span",{key:0,textContent:$(i.$t("Donor_register_number"))},null,8,ba)):C("",!0)])),body:h((()=>[k(u)?(b(),F("div",fa,[(b(!0),F(E,null,M(k(_).pagination.per_page,(a=>(b(),F("div",{key:a,class:"flex-table-item"},[x(V,null,{default:h((()=>[x(g,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):C("",!0),0===k(_).data.length?(b(),F("div",ha,[x(w,{title:"No matches",subtitle:"There is no data that match your query.",class:"my-6"},{image:h((()=>[ja,Va])),_:1})])):C("",!0)])),"body-cell":h((({row:a,column:e})=>["name"===e.key?(b(),f(S,{key:0,class:"table_link",to:`/app/physician-therapist/donors-for-examination/${a.id}`},{default:h((()=>[D($(a.first_name)+" "+$(a.last_name)+" "+$(a.father_name)+" ",1)])),_:2},1032,["to"])):C("",!0)])),_:1},8,["no-header"]),k(_).data.length?(b(),f(I,{key:0,"current-page":k(p),"onUpdate:current-page":n[0]||(n[0]=a=>P(p)?p.value=a:null),class:"mt-5","item-per-page":k(_).pagination.per_page,"total-items":k(_).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):C("",!0)])),_:1},8,["columns","data","limit","total"])])])])}}}),[["__scopeId","data-v-4264f806"]]);export{ka as default};