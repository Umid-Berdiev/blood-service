import{_ as e}from"./VTabs.vue_vue_type_script_setup_true_lang.a01ed400.js";import{_ as a}from"./VButton.vue_vue_type_style_index_0_lang.3cd1d2b4.js";import{f as l,_ as t,a as i,b as s,c as n}from"./PatientPersonalInfoForm.vue_vue_type_script_setup_true_lang.a214fe17.js";import{_ as o,a as r}from"./VControl.96f035a3.js";import{q as d,G as u,H as _,C as c,x as p,r as m,A as b,U as v,j as y,o as g,a as f,w as h,e as z,m as V,k,t as w,d as j,F as x,l as $,g as P,i as I,E as U,J as C,c as M,aI as O,y as S,K as E,P as q,L as A,M as T}from"./index.575ce5b2.js";import{u as D}from"./viewWrapper.79c37ac0.js";import{_ as F}from"./VModal.vue_vue_type_style_index_0_lang.19c1c22e.js";import{_ as N}from"./SubmitButton.vue_vue_type_script_setup_true_lang.678df89f.js";import{_ as H}from"./VCheckbox.vue_vue_type_style_index_0_lang.b7e0dcf0.js";import{_ as B}from"./VInput.vue_vue_type_script_setup_true_lang.592b040e.js";import{_ as G}from"./lodash.0ccdf46e.js";import{j as R,k as J,l as K,v as L,r as W,b as Q,d as X,e as Y}from"./patient.92107f38.js";import{_ as Z}from"./ConfirmActionModal.vue_vue_type_script_setup_true_lang.28ad2a2c.js";import{g as ee,h as ae,_ as le,a as te,b as ie,c as se,d as ne,e as oe,f as re}from"./search-7-dark.86fcb46e.js";import{_ as de}from"./EmployeeFlexTableDropdown.vue_vue_type_script_setup_true_lang.23a5f2f1.js";import{_ as ue}from"./VIcon.vue_vue_type_script_setup_true_lang.58a81c84.js";import{_ as _e}from"./VFlex.vue_vue_type_style_index_0_lang.93e9d589.js";import{u as ce}from"./main.7ee96f0e.js";import{_ as pe}from"./_plugin-vue_export-helper.cdc0426e.js";import"./VPlaceload.1a56b8cc.js";import"./VIMaskInput.vue_vue_type_script_lang.dc02f214.js";import"./VTextarea.vue_vue_type_script_setup_true_lang.ff9ad1ac.js";import"./VDropdown.vue_vue_type_style_index_0_lang.7f74ad75.js";const me=["onSubmit"],be={class:"help has-text-danger"},ve=z("br",null,null,-1),ye={class:"help has-text-danger"},ge={class:"help has-text-danger"},fe={class:"columns"},he={class:"column is-6"},ze={class:"column is-6"},Ve={class:"columns"},ke={class:"column is-6"},we={class:"column is-6"},je=G.isEmpty,xe=d({__name:"PatientVisitCardFormModal",props:{isOpen:{type:Boolean},cardId:null},emits:["update:isOpen","update:list"],setup(e,{emit:a}){var i;const s=e,n=u(),d=_(),{t:U}=c(),C=p(U("Add")),M=(null==(i=n.params)?void 0:i.id)||null,O=p(!1),S=m({patient_id:M,visit_type:"gratuitous",directed_by:"medical_organization",medical_organization_id:"",public_organization:"",is_personalized_donation:"",is_mobile_team:"",personalized_donation:"",mobile_team:""}),E=p([{value:"gratuitous",label:U("Gratuitous")},{value:"chargeable",label:U("Chargeable")}]),q=p([{value:"medical_organization",label:U("Healthcare_facilities")},{value:"public_organization",label:U("Public_organizations")},{value:"independently",label:U("Independently")}]),A=p([]),T=m({visit_type:[],directed_by:[],medical_organization_id:[],public_organization:[],is_personalized_donation:[],is_mobile_team:[],personalized_donation:[],mobile_team:[]});async function D(){var e,l;try{O.value=!0,s.cardId?await J(s.cardId,S):await K(S),a("update:list"),d.success(U("Updated_successfully")),G()}catch(t){Object.assign(T,null==(l=null==(e=t.response)?void 0:e.data)?void 0:l.errors),d.error(t.message)}finally{O.value=!1}}function G(){C.value=U("Add"),Object.assign(S,{patient_id:M,visit_type:"gratuitous",directed_by:"medical_organization",medical_organization_id:"",public_organization:"",is_personalized_donation:"",is_mobile_team:"",personalized_donation:"",mobile_team:""}),Object.assign(T,{visit_type:[],directed_by:[],medical_organization_id:[],public_organization:[],is_personalized_donation:[],is_mobile_team:[],personalized_donation:[],mobile_team:[]}),a("update:isOpen",!1)}return b((async()=>{const e=await l();je(e.result)||(A.value=e.result)})),v((async()=>{if(Number(s.cardId)){C.value=U("Edit");const e=await R(Number(s.cardId),M);Object.assign(S,e.result)}})),(a,l)=>{const i=y("Multiselect"),s=o,n=r,d=t,u=B,_=H,c=N,p=F;return g(),f(p,{open:e.isOpen,size:"large",title:C.value,actions:"right",onClose:G},{content:h((()=>[z("form",{id:"visitcard-form",class:"modal-form",onSubmit:V(D,["prevent"])},[k(n,{label:a.$t("Visit_type"),required:""},{default:h((()=>[k(s,null,{default:h((()=>[k(i,{modelValue:S.visit_type,"onUpdate:modelValue":l[0]||(l[0]=e=>S.visit_type=e),options:E.value,placeholder:a.$t("Visit_type"),label:"label","value-prop":"value"},null,8,["modelValue","options","placeholder"]),z("p",be,w(T.visit_type[0]),1)])),_:1})])),_:1},8,["label"]),ve,k(n,{label:a.$t("Directed_by"),required:""},{default:h((()=>[k(s,null,{default:h((()=>[(g(!0),j(x,null,$(q.value,((e,a)=>(g(),f(d,{key:a,modelValue:S.directed_by,"onUpdate:modelValue":l[1]||(l[1]=e=>S.directed_by=e),value:e.value,label:e.label,color:"primary"},null,8,["modelValue","value","label"])))),128))])),_:1})])),_:1},8,["label"]),"medical_organization"===S.directed_by?(g(),f(n,{key:0,label:a.$t("Healthcare_facilities_list"),required:""},{default:h((()=>[k(s,null,{default:h((()=>[k(i,{modelValue:S.medical_organization_id,"onUpdate:modelValue":l[2]||(l[2]=e=>S.medical_organization_id=e),options:A.value,placeholder:a.$t("Medical_organizations_list"),label:"name",searchable:"","value-prop":"id"},null,8,["modelValue","options","placeholder"]),z("p",ye,w(T.medical_organization_id[0]),1)])),_:1})])),_:1},8,["label"])):P("",!0),"public_organization"===S.directed_by?(g(),f(n,{key:1,label:a.$t("Public_organization_title"),required:""},{default:h((()=>[k(s,null,{default:h((()=>[k(u,{modelValue:S.public_organization,"onUpdate:modelValue":l[3]||(l[3]=e=>S.public_organization=e),placeholder:a.$t("Public_organization_title")},null,8,["modelValue","placeholder"]),z("p",ge,w(T.public_organization[0]),1)])),_:1})])),_:1},8,["label"])):P("",!0),z("div",fe,[z("div",he,[k(n,null,{default:h((()=>[k(s,null,{default:h((()=>[k(_,{modelValue:S.is_personalized_donation,"onUpdate:modelValue":l[4]||(l[4]=e=>S.is_personalized_donation=e),label:a.$t("Personalized_donation"),color:"primary"},null,8,["modelValue","label"])])),_:1})])),_:1})]),z("div",ze,[k(n,null,{default:h((()=>[k(s,null,{default:h((()=>[S.is_personalized_donation?(g(),f(u,{key:0,modelValue:S.personalized_donation,"onUpdate:modelValue":l[5]||(l[5]=e=>S.personalized_donation=e)},null,8,["modelValue"])):P("",!0)])),_:1})])),_:1})])]),z("div",Ve,[z("div",ke,[k(n,null,{default:h((()=>[k(s,null,{default:h((()=>[k(_,{modelValue:S.is_mobile_team,"onUpdate:modelValue":l[6]||(l[6]=e=>S.is_mobile_team=e),label:a.$t("Mobile_team"),color:"primary"},null,8,["modelValue","label"])])),_:1})])),_:1})]),z("div",we,[k(n,null,{default:h((()=>[k(s,null,{default:h((()=>[S.is_mobile_team?(g(),f(u,{key:0,modelValue:S.mobile_team,"onUpdate:modelValue":l[7]||(l[7]=e=>S.mobile_team=e)},null,8,["modelValue"])):P("",!0)])),_:1})])),_:1})])])],40,me)])),action:h((({close:e})=>[k(c,{loading:O.value,form:"visitcard-form"},{default:h((()=>[I(w(a.$t("Send_for_examination")),1)])),_:1},8,["loading"])])),_:1},8,["open","title"])}}}),$e={class:"page-content-inner"},Pe={class:"columns"},Ie={class:"column is-12"},Ue={key:0,class:"is-flex-grow-0",textContent:"#"},Ce={key:0,class:"flex-list-inner"},Me={key:1,class:"flex-list-inner"},Oe=z("img",{class:"light-image",src:ee,alt:""},null,-1),Se=z("img",{class:"dark-image",src:ae,alt:""},null,-1),Ee={key:0,class:"dark-text"},qe={key:1,class:"dark-text"},Ae={key:3},Te={key:4},De=d({__name:"PatientVisitCardTable",async setup(e){var l;let t,i;const s=u();U();const n=_(),{t:o}=c(),r=ce();D().setPageTitle(o("Patient_cards_list")),C({title:`${o("Patient_cards")} - ${r.app.name}`});const d=m({current_page:1,per_page:10,total:10,data:[]}),b=p(null),v=(null==(l=s.params)?void 0:l.id)||null,y=p(!1),V=M({get:()=>d.current_page,set:async e=>{await N(e)}}),A={orderNumber:{format:(e,a,l)=>`${l+1}`,cellClass:"is-flex-grow-0"},visit_type:{label:o("Visit_type")},directed_by:{label:o("Directed_by")},medical_organization:{label:o("Healthcare_facilities")},public_organization:{label:o("Public_organizations")},independently:{label:o("Independently")},is_personalized_donation:{label:o("Personalized_donation")},is_mobile_team:{label:o("Mobile_team")},actions:{label:"",align:"end"}},T=p(!1),F=p();async function N(e=1){try{T.value=!0;const a=await L(v,{page:e,per_page:d.per_page});Object.assign(d,a.result)}catch(a){n.error(o(a.message))}finally{T.value=!1}}function H(e){b.value=e,y.value=!0}async function B(){await W(v,b.value),N()}function G(){N(),b.value=null}return[t,i]=O((()=>N())),await t,i(),S((()=>d.per_page),(async()=>{await N()})),(e,l)=>{const t=a,i=_e,s=le,n=te,o=ie,u=se,_=ue,c=de,p=ne,m=oe,v=re,U=Z,C=xe;return g(),j("div",$e,[k(i,null,{default:h((()=>[k(t,{color:"primary",rounded:"",outlined:"",icon:"feather:plus",class:"ml-auto",onClick:l[0]||(l[0]=e=>H(null))},{default:h((()=>[I(w(e.$t("Add")),1)])),_:1})])),_:1}),z("div",Pe,[z("div",Ie,[k(v,{class:"mt-4",columns:E(A),data:d.data,limit:d.per_page,total:d.total},{default:h((()=>[k(p,{rounded:"","no-header":!T.value&&0===d.data.length},{"header-column":h((({column:e})=>["orderNumber"===e.key?(g(),j("span",Ue)):P("",!0)])),body:h((()=>[T.value?(g(),j("div",Ce,[(g(!0),j(x,null,$(d.per_page,(e=>(g(),j("div",{key:e,class:"flex-table-item"},[k(n,null,{default:h((()=>[k(s,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):0===d.data.length?(g(),j("div",Me,[k(o,{title:"No matches",subtitle:"There is no data that match your query.",class:"my-6"},{image:h((()=>[Oe,Se])),_:1})])):P("",!0)])),"body-row-pre":h((({row:e})=>[e.id===F.value?(g(),f(u,{key:0,size:"tiny",class:"m-0 mb-1"})):P("",!0)])),"body-cell":h((({row:a,column:l,value:t})=>["visit_type"===l.key?(g(),j("span",Ee,w(e.$t(t)),1)):P("",!0),"directed_by"===l.key?(g(),j("span",qe,w(e.$t(t)),1)):P("",!0),"independently"===l.key?(g(),j(x,{key:2},["independently"===a.directed_by?(g(),f(_,{key:0,class:"has-text-primary",icon:"feather:check"})):(g(),f(_,{key:1,class:"has-text-danger",icon:"feather:minus"}))],64)):P("",!0),"is_personalized_donation"===l.key?(g(),j("span",Ae,w(a.personalized_donation),1)):P("",!0),"is_mobile_team"===l.key?(g(),j("span",Te,w(a.mobile_team),1)):P("",!0),"actions"===l.key?(g(),f(c,{key:5,onEdit:e=>H(a.id),onRemove:e=>async function(e){b.value=e,r.$patch({confirmModalState:!0})}(a.id)},null,8,["onEdit","onRemove"])):P("",!0)])),_:1},8,["no-header"]),d.data.length?(g(),f(m,{key:0,"current-page":E(V),"onUpdate:current-page":l[1]||(l[1]=e=>q(V)?V.value=e:null),class:"mt-5","item-per-page":d.per_page,"total-items":d.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):P("",!0)])),_:1},8,["columns","data","limit","total"])])]),k(U,{onConfirmAction:B}),k(C,{"is-open":y.value,"onUpdate:is-open":l[2]||(l[2]=e=>y.value=e),"card-id":b.value,"onUpdate:list":G,onClose:l[3]||(l[3]=e=>b.value=null)},null,8,["is-open","card-id"])])}}}),Fe={class:"patient-detail-wrapper"},Ne=["onSubmit"],He={class:"columns mt-5"},Be={class:"column"},Ge={class:"is-size-5"},Re=(e=>(A("data-v-848aa8e6"),e=e(),T(),e))((()=>z("br",null,null,-1))),Je={class:"help has-text-danger"},Ke={class:"column"},Le={class:"is-size-5"},We={class:"column"},Qe={class:"is-size-5"},Xe={class:"navigation-buttons"},Ye={class:"buttons is-right"},Ze={key:1,class:"mt-5"},ea=pe(d({__name:"[id]",async setup(l){var t;let d,v;const f=u();U();const x=_(),{t:$}=c(),S=m({patient_category_id:null,last_name:"",first_name:"",father_name:"",birth_date:new Date,gender:"male",pinfl:null,passport_series:"",passport_number:"",issued_by:"",when_issued:new Date,region_id:null,district_id:null,work_study_place:"",email:"",phone_number:"",phone_home:"",phone_work:"",address:"",avatar:""}),E=m({patient_category_id:[],last_name:[],first_name:[],father_name:[],birth_date:[],gender:[],pinfl:[],passport_series:[],passport_number:[],issued_by:[],when_issued:[],region_id:[],district_id:[],work_study_place:[],email:[],phone_number:[],phone_home:[],phone_work:[],address:[],avatar:[]}),q=p(!1),A=(null==(t=f.params)?void 0:t.id)||null,T=p([{label:$("Patient_details"),value:"#details",icon:"feather:info",to:`${f.path}#details`},{label:$("Patient_card"),value:"#patient_visit_cards",icon:"feather:file-text",to:`${f.path}#patient_visit_cards`}]),F=p([]),N=p(f.hash||"#details");function H(e){E[e]=""}async function B(){var e,a;try{q.value=!0;await Y(A,S);x.success($("Updated_successfully"))}catch(l){(null==(e=l.response)?void 0:e.data.errors)?Object.assign(E,null==(a=l.response)?void 0:a.data.errors):x.error($("Something_went_wrong"))}finally{q.value=!1}}return D().setPageTitle($("Patient_info")),C({title:M((()=>$("Patient_info")))}),[d,v]=O((()=>async function(){try{const e=await X(A);Object.assign(S,e.result)}catch(e){x.error(e.message)}}())),await d,v(),b((async()=>{const e=await Q();F.value=e.result})),(l,t)=>{const d=i,u=y("Multiselect"),_=o,c=r,p=s,m=n,b=a,v=e;return g(),j("div",Fe,[k(v,{selected:N.value,tabs:T.value},{tab:h((({activeValue:e})=>["#details"===e?(g(),j("form",{key:0,onSubmit:V(B,["prevent"])},[z("div",He,[z("div",Be,[z("p",Ge,w(l.$t("Personal_Info")),1),k(d,{patient:S,errors:E,onEditing:H},null,8,["patient","errors"]),Re,k(c,{label:l.$t("Category"),required:""},{default:h((()=>[k(_,null,{default:h((()=>[k(u,{modelValue:S.patient_category_id,"onUpdate:modelValue":t[0]||(t[0]=e=>S.patient_category_id=e),options:F.value,placeholder:l.$t("Select_category"),label:"name","value-prop":"id"},null,8,["modelValue","options","placeholder"]),z("p",Je,w(E.patient_category_id[0]),1)])),_:1})])),_:1},8,["label"])]),z("div",Ke,[z("p",Le,w(l.$t("Passport_info")),1),k(p,{patient:S,errors:E,onEditing:H},null,8,["patient","errors"])]),z("div",We,[z("p",Qe,w(l.$t("Address")),1),k(m,{patient:S,errors:E,onEditing:H},null,8,["patient","errors"])])]),z("div",Xe,[z("div",Ye,[k(b,{type:"submit",color:"primary",bold:"",loading:q.value,disabled:q.value,tabindex:"0"},{default:h((()=>[I(w(l.$t("Save")),1)])),_:1},8,["loading","disabled"])])])],40,Ne)):"#patient_visit_cards"===e?(g(),j("div",Ze,[k(De)])):P("",!0)])),_:1},8,["selected","tabs"])])}}}),[["__scopeId","data-v-848aa8e6"]]);export{ea as default};