import{_ as e}from"./VTabs.vue_vue_type_script_setup_true_lang.1d2640dd.js";import{q as a,G as l,H as t,C as i,x as s,r as n,A as o,U as r,j as d,o as u,a as _,w as c,e as p,m,k as b,t as v,d as y,F as g,l as f,g as h,i as z,E as V,J as k,c as w,aO as j,y as x,K as $,Q as P,_ as U,L as C,M as I,N as O}from"./index.c63bfefe.js";import{f as M,_ as S,a as E,b as q,c as A}from"./PatientPersonalInfoForm.vue_vue_type_script_setup_true_lang.91b73932.js";import{_ as T,a as D}from"./VControl.aaed4574.js";import{u as N}from"./viewWrapper.c89515a2.js";import{_ as F}from"./VModal.vue_vue_type_style_index_0_lang.1b6ed9bc.js";import{_ as H}from"./SubmitButton.vue_vue_type_script_setup_true_lang.309106e5.js";import{_ as B}from"./VCheckbox.vue_vue_type_style_index_0_lang.9a918fa9.js";import{_ as G}from"./VInput.vue_vue_type_script_setup_true_lang.4047524f.js";import{_ as R}from"./lodash.3c9c43e7.js";import{h as J,i as K,j as L,v as Q,r as W,a as X,b as Y,d as Z}from"./patient.0a2597b8.js";import{_ as ee}from"./ConfirmActionModal.vue_vue_type_script_setup_true_lang.bd260b9f.js";import{g as ae,h as le,_ as te,a as ie,b as se,c as ne,d as oe,e as re,f as de}from"./search-7-dark.f40bb9f7.js";import{_ as ue}from"./EmployeeFlexTableDropdown.vue_vue_type_script_setup_true_lang.84cb7fa9.js";import{_ as _e}from"./VIcon.vue_vue_type_script_setup_true_lang.ba3e4222.js";import{_ as ce}from"./VFlex.vue_vue_type_style_index_0_lang.9024072c.js";import{u as pe}from"./main.fb0b2bc3.js";import"./VIMaskInput.vue_vue_type_script_lang.ef30de37.js";import"./VTextarea.vue_vue_type_script_setup_true_lang.1aec8d11.js";import"./VDropdown.vue_vue_type_style_index_0_lang.d3f897f4.js";const me=["onSubmit"],be={class:"help has-text-danger"},ve=p("br",null,null,-1),ye={class:"help has-text-danger"},ge={class:"help has-text-danger"},fe={class:"columns"},he={class:"column is-6"},ze={class:"column is-6"},Ve={class:"columns"},ke={class:"column is-6"},we={class:"column is-6"},je=R.isEmpty,xe=a({__name:"PatientVisitCardFormModal",props:{isOpen:{type:Boolean},cardId:null},emits:["update:isOpen","update:list"],setup(e,{emit:a}){var V;const k=e,w=l(),j=t(),{t:x}=i(),$=s(x("Add")),P=(null==(V=w.params)?void 0:V.id)||null,U=s(!1),C=n({patient_id:P,visit_type:"gratuitous",directed_by:"medical_organization",medical_organization_id:"",public_organization:"",is_personalized_donation:"",is_mobile_team:"",personalized_donation:"",mobile_team:""}),I=s([{value:"gratuitous",label:x("Gratuitous")},{value:"chargeable",label:x("Chargeable")}]),O=s([{value:"medical_organization",label:x("Healthcare_facilities")},{value:"public_organization",label:x("Public_organizations")},{value:"independently",label:x("Independently")}]),E=s([]),q=n({visit_type:[],directed_by:[],medical_organization_id:[],public_organization:[],is_personalized_donation:[],is_mobile_team:[],personalized_donation:[],mobile_team:[]});async function A(){var e,l;try{U.value=!0,k.cardId?await K(k.cardId,C):await L(C),a("update:list"),j.success(x("Updated_successfully")),N()}catch(t){Object.assign(q,null==(l=null==(e=t.response)?void 0:e.data)?void 0:l.errors),j.error(t.message)}finally{U.value=!1}}function N(){$.value=x("Add"),Object.assign(C,{patient_id:P,visit_type:"gratuitous",directed_by:"medical_organization",medical_organization_id:"",public_organization:"",is_personalized_donation:"",is_mobile_team:"",personalized_donation:"",mobile_team:""}),Object.assign(q,{visit_type:[],directed_by:[],medical_organization_id:[],public_organization:[],is_personalized_donation:[],is_mobile_team:[],personalized_donation:[],mobile_team:[]}),a("update:isOpen",!1)}return o((async()=>{const e=await M();je(e.result)||(E.value=e.result)})),r((async()=>{if(Number(k.cardId)){$.value=x("Edit");const e=await J(Number(k.cardId),P);Object.assign(C,e.result)}})),(a,l)=>{const t=d("Multiselect"),i=T,s=D,n=S,o=G,r=B,V=H,k=F;return u(),_(k,{open:e.isOpen,size:"large",title:$.value,actions:"right",onClose:N},{content:c((()=>[p("form",{id:"visitcard-form",class:"modal-form",onSubmit:m(A,["prevent"])},[b(s,{label:a.$t("Visit_type"),required:""},{default:c((()=>[b(i,null,{default:c((()=>[b(t,{modelValue:C.visit_type,"onUpdate:modelValue":l[0]||(l[0]=e=>C.visit_type=e),options:I.value,placeholder:a.$t("Visit_type"),label:"label","value-prop":"value"},null,8,["modelValue","options","placeholder"]),p("p",be,v(q.visit_type[0]),1)])),_:1})])),_:1},8,["label"]),ve,b(s,{label:a.$t("Directed_by"),required:""},{default:c((()=>[b(i,null,{default:c((()=>[(u(!0),y(g,null,f(O.value,((e,a)=>(u(),_(n,{key:a,modelValue:C.directed_by,"onUpdate:modelValue":l[1]||(l[1]=e=>C.directed_by=e),value:e.value,label:e.label,color:"primary"},null,8,["modelValue","value","label"])))),128))])),_:1})])),_:1},8,["label"]),"medical_organization"===C.directed_by?(u(),_(s,{key:0,label:a.$t("Healthcare_facilities_list"),required:""},{default:c((()=>[b(i,null,{default:c((()=>[b(t,{modelValue:C.medical_organization_id,"onUpdate:modelValue":l[2]||(l[2]=e=>C.medical_organization_id=e),options:E.value,placeholder:a.$t("Medical_organizations_list"),label:"name","value-prop":"id"},null,8,["modelValue","options","placeholder"]),p("p",ye,v(q.medical_organization_id[0]),1)])),_:1})])),_:1},8,["label"])):h("",!0),"public_organization"===C.directed_by?(u(),_(s,{key:1,label:a.$t("Public_organization_title"),required:""},{default:c((()=>[b(i,null,{default:c((()=>[b(o,{modelValue:C.public_organization,"onUpdate:modelValue":l[3]||(l[3]=e=>C.public_organization=e),placeholder:a.$t("Public_organization_title")},null,8,["modelValue","placeholder"]),p("p",ge,v(q.public_organization[0]),1)])),_:1})])),_:1},8,["label"])):h("",!0),p("div",fe,[p("div",he,[b(s,null,{default:c((()=>[b(i,null,{default:c((()=>[b(r,{modelValue:C.is_personalized_donation,"onUpdate:modelValue":l[4]||(l[4]=e=>C.is_personalized_donation=e),label:a.$t("Personalized_donation"),color:"primary"},null,8,["modelValue","label"])])),_:1})])),_:1})]),p("div",ze,[b(s,null,{default:c((()=>[b(i,null,{default:c((()=>[C.is_personalized_donation?(u(),_(o,{key:0,modelValue:C.personalized_donation,"onUpdate:modelValue":l[5]||(l[5]=e=>C.personalized_donation=e)},null,8,["modelValue"])):h("",!0)])),_:1})])),_:1})])]),p("div",Ve,[p("div",ke,[b(s,null,{default:c((()=>[b(i,null,{default:c((()=>[b(r,{modelValue:C.is_mobile_team,"onUpdate:modelValue":l[6]||(l[6]=e=>C.is_mobile_team=e),label:a.$t("Mobile_team"),color:"primary"},null,8,["modelValue","label"])])),_:1})])),_:1})]),p("div",we,[b(s,null,{default:c((()=>[b(i,null,{default:c((()=>[C.is_mobile_team?(u(),_(o,{key:0,modelValue:C.mobile_team,"onUpdate:modelValue":l[7]||(l[7]=e=>C.mobile_team=e)},null,8,["modelValue"])):h("",!0)])),_:1})])),_:1})])])],40,me)])),action:c((({close:e})=>[b(V,{loading:U.value,form:"visitcard-form"},{default:c((()=>[z(v(a.$t("Send_for_examination")),1)])),_:1},8,["loading"])])),_:1},8,["open","title"])}}}),$e={class:"page-content-inner"},Pe={class:"columns"},Ue={class:"column is-12"},Ce={key:0,class:"is-flex-grow-0",textContent:"#"},Ie={key:0,class:"flex-list-inner"},Oe={key:1,class:"flex-list-inner"},Me=p("img",{class:"light-image",src:ae,alt:""},null,-1),Se=p("img",{class:"dark-image",src:le,alt:""},null,-1),Ee={key:0,class:"dark-text"},qe={key:1,class:"dark-text"},Ae={key:3},Te={key:4},De=a({__name:"PatientVisitCardTable",async setup(e){var a;let o,r;const d=l();V();const m=t(),{t:C}=i(),I=pe();N().setPageTitle(C("Patient_cards_list")),k({title:`${C("Patient_cards")} - ${I.app.name}`});const O=n({current_page:1,per_page:10,total:10,data:[]}),M=s(null),S=(null==(a=d.params)?void 0:a.id)||null,E=s(!1),q=w({get:()=>O.current_page,set:async e=>{await F(e)}}),A={orderNumber:{format:(e,a,l)=>`${l+1}`,cellClass:"is-flex-grow-0"},visit_type:{label:C("Visit_type")},directed_by:{label:C("Directed_by")},medical_organization:{label:C("Healthcare_facilities")},public_organization:{label:C("Public_organizations")},independently:{label:C("Independently")},is_personalized_donation:{label:C("Personalized_donation")},is_mobile_team:{label:C("Mobile_team")},actions:{label:"",align:"end"}},T=s(!1),D=s();async function F(e=1){try{T.value=!0;const a=await Q(S,{page:e,per_page:O.per_page});Object.assign(O,a.result)}catch(a){m.error(C(a.message))}finally{T.value=!1}}function H(e){M.value=e,E.value=!0}async function B(){await W(S,M.value),F()}function G(){F(),M.value=null}return[o,r]=j((()=>F())),await o,r(),x((()=>O.per_page),(async()=>{await F()})),(e,a)=>{const l=U,t=ce,i=te,s=ie,n=se,o=ne,r=_e,d=ue,m=oe,V=re,k=de,w=ee,j=xe;return u(),y("div",$e,[b(t,null,{default:c((()=>[b(l,{color:"primary",rounded:"",outlined:"",icon:"feather:plus",class:"ml-auto",onClick:a[0]||(a[0]=e=>H(null))},{default:c((()=>[z(v(e.$t("Add")),1)])),_:1})])),_:1}),p("div",Pe,[p("div",Ue,[b(k,{class:"mt-4",columns:$(A),data:O.data,limit:O.per_page,total:O.total},{default:c((()=>[b(m,{rounded:"","no-header":!T.value&&0===O.data.length},{"header-column":c((({column:e})=>["orderNumber"===e.key?(u(),y("span",Ce)):h("",!0)])),body:c((()=>[T.value?(u(),y("div",Ie,[(u(!0),y(g,null,f(O.per_page,(e=>(u(),y("div",{key:e,class:"flex-table-item"},[b(s,null,{default:c((()=>[b(i,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):0===O.data.length?(u(),y("div",Oe,[b(n,{title:"No matches",subtitle:"There is no data that match your query.",class:"my-6"},{image:c((()=>[Me,Se])),_:1})])):h("",!0)])),"body-row-pre":c((({row:e})=>[e.id===D.value?(u(),_(o,{key:0,size:"tiny",class:"m-0 mb-1"})):h("",!0)])),"body-cell":c((({row:a,column:l,value:t})=>["visit_type"===l.key?(u(),y("span",Ee,v(e.$t(t)),1)):h("",!0),"directed_by"===l.key?(u(),y("span",qe,v(e.$t(t)),1)):h("",!0),"independently"===l.key?(u(),y(g,{key:2},["independently"===a.directed_by?(u(),_(r,{key:0,class:"has-text-primary",icon:"feather:check"})):(u(),_(r,{key:1,class:"has-text-danger",icon:"feather:minus"}))],64)):h("",!0),"is_personalized_donation"===l.key?(u(),y("span",Ae,v(a.personalized_donation),1)):h("",!0),"is_mobile_team"===l.key?(u(),y("span",Te,v(a.mobile_team),1)):h("",!0),"actions"===l.key?(u(),_(d,{key:5,onEdit:e=>H(a.id),onRemove:e=>async function(e){M.value=e,I.$patch({confirmModalState:!0})}(a.id)},null,8,["onEdit","onRemove"])):h("",!0)])),_:1},8,["no-header"]),O.data.length?(u(),_(V,{key:0,"current-page":$(q),"onUpdate:current-page":a[1]||(a[1]=e=>P(q)?q.value=e:null),class:"mt-5","item-per-page":O.per_page,"total-items":O.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):h("",!0)])),_:1},8,["columns","data","limit","total"])])]),b(w,{onConfirmAction:B}),b(j,{"is-open":E.value,"onUpdate:is-open":a[2]||(a[2]=e=>E.value=e),"card-id":M.value,"onUpdate:list":G,onClose:a[3]||(a[3]=e=>M.value=null)},null,8,["is-open","card-id"])])}}}),Ne={class:"patient-detail-wrapper"},Fe=["onSubmit"],He={class:"columns mt-5"},Be={class:"column"},Ge={class:"is-size-5"},Re=(e=>(C("data-v-848aa8e6"),e=e(),I(),e))((()=>p("br",null,null,-1))),Je={class:"help has-text-danger"},Ke={class:"column"},Le={class:"is-size-5"},Qe={class:"column"},We={class:"is-size-5"},Xe={class:"navigation-buttons"},Ye={class:"buttons is-right"},Ze={key:1,class:"mt-5"},ea=O(a({__name:"[id]",async setup(a){var r;let _,g;const f=l();V();const x=t(),{t:$}=i(),P=n({patient_category_id:null,last_name:"",first_name:"",father_name:"",birth_date:new Date,gender:"male",pinfl:null,passport_series:"",passport_number:"",issued_by:"",when_issued:new Date,region_id:null,district_id:null,work_study_place:"",email:"",phone_number:"",phone_home:"",phone_work:"",address:"",avatar:""}),C=n({patient_category_id:[],last_name:[],first_name:[],father_name:[],birth_date:[],gender:[],pinfl:[],passport_series:[],passport_number:[],issued_by:[],when_issued:[],region_id:[],district_id:[],work_study_place:[],email:[],phone_number:[],phone_home:[],phone_work:[],address:[],avatar:[]}),I=s(!1),O=(null==(r=f.params)?void 0:r.id)||null,M=s([{label:$("Patient_details"),value:"#details",icon:"feather:info",to:`${f.path}#details`},{label:$("Patient_card"),value:"#patient_visit_cards",icon:"feather:file-text",to:`${f.path}#patient_visit_cards`}]),S=s([]),F=s(f.hash||"#details");function H(e){C[e]=""}async function B(){var e,a;try{I.value=!0;await Z(O,P);x.success($("Updated_successfully"))}catch(l){(null==(e=l.response)?void 0:e.data.errors)?Object.assign(C,null==(a=l.response)?void 0:a.data.errors):x.error($("Something_went_wrong"))}finally{I.value=!1}}return N().setPageTitle($("Patient_info")),k({title:w((()=>$("Patient_info")))}),[_,g]=j((()=>async function(){try{const e=await Y(O);Object.assign(P,e.result)}catch(e){x.error(e.message)}}())),await _,g(),o((async()=>{const e=await X();S.value=e.result})),(a,l)=>{const t=E,i=d("Multiselect"),s=T,n=D,o=q,r=A,_=U,g=e;return u(),y("div",Ne,[b(g,{selected:F.value,tabs:M.value},{tab:c((({activeValue:e})=>["#details"===e?(u(),y("form",{key:0,onSubmit:m(B,["prevent"])},[p("div",He,[p("div",Be,[p("p",Ge,v(a.$t("Personal_Info")),1),b(t,{patient:P,errors:C,onEditing:H},null,8,["patient","errors"]),Re,b(n,{label:a.$t("Category"),required:""},{default:c((()=>[b(s,null,{default:c((()=>[b(i,{modelValue:P.patient_category_id,"onUpdate:modelValue":l[0]||(l[0]=e=>P.patient_category_id=e),options:S.value,placeholder:a.$t("Select_category"),label:"name","value-prop":"id"},null,8,["modelValue","options","placeholder"]),p("p",Je,v(C.patient_category_id[0]),1)])),_:1})])),_:1},8,["label"])]),p("div",Ke,[p("p",Le,v(a.$t("Passport_info")),1),b(o,{patient:P,errors:C,onEditing:H},null,8,["patient","errors"])]),p("div",Qe,[p("p",We,v(a.$t("Address")),1),b(r,{patient:P,errors:C,onEditing:H},null,8,["patient","errors"])])]),p("div",Xe,[p("div",Ye,[b(_,{type:"submit",color:"primary",bold:"",loading:I.value,disabled:I.value,tabindex:"0"},{default:c((()=>[z(v(a.$t("Save")),1)])),_:1},8,["loading","disabled"])])])],40,Fe)):"#patient_visit_cards"===e?(u(),y("div",Ze,[b(De)])):h("",!0)])),_:1},8,["selected","tabs"])])}}}),[["__scopeId","data-v-848aa8e6"]]);export{ea as default};