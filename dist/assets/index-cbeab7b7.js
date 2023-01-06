import{_ as a,a as e}from"./FilterForm.vue_vue_type_script_setup_true_lang-b8ccb85a.js";import{_ as t,a as l,b as s}from"./VFlexTable.vue_vue_type_style_index_0_lang-f8ff2f75.js";import{_ as o,a as n,b as i,c as r,d as u}from"./search-7-dark-f0facebe.js";import{_}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-d3c7c667.js";import{u as d}from"./chunk-DRAQDPQ2-4514f14e.js";import{a as m,b as p,r as c,l as v,t as f,q as g,Q as y,V as b,p as h,v as j,u as x,$ as V,a0 as k,c as w,ac as D,m as z,y as Y,M as $,W as M,i as C}from"./chunk-BGPNDDXN-dcda8805.js";import{f as U}from"./@vueuse_core-098eb702.js";import{u as B}from"./@vueuse_head-0d019878.js";import{_ as O}from"./lodash-94527813.js";import{u as F}from"./chunk-3UEUFEGV-d557e6b1.js";import{_ as I}from"./VModal.vue_vue_type_style_index_0_lang-b0507e96.js";import{_ as N}from"./SubmitButton.vue_vue_type_script_setup_true_lang-e5001c63.js";import{_ as E}from"./VButton.vue_vue_type_style_index_0_lang-27d6885c.js";import{_ as P}from"./VCheckbox.vue_vue_type_style_index_0_lang-25f2733c.js";import{_ as T}from"./VFlex.vue_vue_type_style_index_0_lang-0938e556.js";import{_ as Q}from"./IMaskDateInput.vue_vue_type_script_setup_true_lang-5ce26ef4.js";import{_ as R}from"./VFlexItem.vue_vue_type_style_index_0_lang-ff50e60d.js";import{b as S,_ as q,a as A}from"./VControl-fc151345.js";import{_ as G}from"./VInput.vue_vue_type_script_setup_true_lang-29181b77.js";import{m as W}from"./moment-e00bdeae.js";import{u as H}from"./useNotyf-1536ae84.js";import{_ as L}from"./_plugin-vue_export-helper-1b428a4d.js";import{u as X}from"./main-a3a6220c.js";import{u as J}from"./viewWrapper-c60f0ce7.js";import{f as K}from"./patient-3eef0e53.js";import"./VTextarea.vue_vue_type_script_setup_true_lang-a017671a.js";import"./VRadio.vue_vue_type_style_index_0_lang-03da69fa.js";import"./VCard.vue_vue_type_script_setup_true_lang-a9232da9.js";import"./VPlaceload-2a65ae53.js";import"./VIMaskInput.vue_vue_type_script_lang-06d40a07.js";import"./pinia-3af6ce52.js";import"./userSession-0c0e9684.js";const Z=a=>(V("data-v-aa72eb25"),a=a(),k(),a),aa={class:"columns"},ea={class:"column"},ta={class:"is-size-5 has-text-weight-medium"},la={class:"box"},sa={class:"has-text-weight-bold"},oa=Z((()=>y("br",null,null,-1))),na={class:"box"},ia={class:"columns is-multiline"},ra={class:"column is-narrow is-flex is-align-items-center"},ua={class:"column is-narrow is-flex is-align-items-center"},_a=Z((()=>y("br",null,null,-1))),da=Z((()=>y("p",{class:"has-text-danger"}," Красным цветом указаны показатели, заданные врачом-терапевтом, как обязательные для определения ",-1))),ma=W.__esModule?W.default:W,pa=L(m({__name:"FormModal",props:{isOpen:{type:Boolean,default:!1},patient:null},emits:["update:isOpen","update:list","emergency-noticing"],setup(a,{emit:e}){H();const{t:t}=F(),l=p(t("Hemotransmission_research_results")),s=p(!1),o=c({leykotsity:"",trombotsity:""}),n=c({blood_samples_taken_date:[],analysis_date:[]});function i(){Object.assign(o,{blood_samples_taken_date:ma().format("YYYY-MM-DD"),analysis_date:ma().format("YYYY-MM-DD")}),Object.assign(n,{blood_samples_taken_date:[],analysis_date:[]}),e("update:isOpen",!1)}function r(){e("emergency-noticing"),i()}return(e,t)=>{const n=S,u=G,_=q,d=A,m=R,p=Q,c=T,V=P,k=E,w=N,D=I;return v(),f(D,{open:a.isOpen,size:"big",title:l.value,actions:"right",onClose:i},{content:g((()=>{var l;return[y("div",aa,[y("div",ea,[y("h5",ta,b(e.$t("Donor_code"))+": "+b(null==(l=a.patient.last_visit)?void 0:l.donation_code),1)])]),y("div",la,[h(c,{"flex-wrap":"wrap","row-gap":"2rem","justify-content":"space-between"},{default:g((()=>[h(m,{"flex-basis":"45%"},{default:g((()=>[h(d,{horizontal:""},{default:g((()=>[h(n,{class:"my-auto mr-3 is-size-6"},{default:g((()=>[j(b(e.$t("Blood_sampling_date")),1)])),_:1}),h(_,null,{default:g((()=>{var e;return[h(u,{value:x(U)(new Date(null==(e=a.patient.last_visit)?void 0:e.updated_at),"YYYY-MM-DD"),disabled:""},null,8,["value"])]})),_:1})])),_:1})])),_:1}),h(m,{"flex-basis":"45%"},{default:g((()=>[h(d,{horizontal:""},{default:g((()=>[h(n,{class:"my-auto mr-3 is-size-6"},{default:g((()=>[j(b(e.$t("Blood_samples_taken_date")),1)])),_:1}),h(_,null,{default:g((()=>[h(p,{modelValue:o.blood_samples_taken_date,"onUpdate:modelValue":t[0]||(t[0]=a=>o.blood_samples_taken_date=a)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),h(m,{"flex-basis":"45%"},{default:g((()=>[h(d,{horizontal:""},{default:g((()=>[h(n,{class:"my-auto mr-3 is-size-6"},{default:g((()=>[j(b(e.$t("Analysis_date")),1)])),_:1}),h(_,null,{default:g((()=>[h(p,{modelValue:o.analysis_date,"onUpdate:modelValue":t[1]||(t[1]=a=>o.analysis_date=a)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),h(m,{"flex-basis":"45%"},{default:g((()=>{var t;return[y("h5",null,[y("span",sa,b(e.$t("Visit_stage")),1),y("span",null,b(null==(t=a.patient.last_visit)?void 0:t.stage),1)])]})),_:1})])),_:1})]),oa,y("div",na,[y("div",ia,[y("div",ra,[h(d,{horizontal:"",class:""},{default:g((()=>[h(_,null,{default:g((()=>[h(V,{modelValue:o.reaction_hendelson_brutsellez,"onUpdate:modelValue":t[2]||(t[2]=a=>o.reaction_hendelson_brutsellez=a),color:"primary",label:"Реакция Хендельсона (бруцеллез)"},null,8,["modelValue"])])),_:1})])),_:1}),h(d,{horizontal:"",class:""},{default:g((()=>[h(_,null,{default:g((()=>[h(V,{modelValue:o.hilez,"onUpdate:modelValue":t[3]||(t[3]=a=>o.hilez=a),color:"primary",label:"Хилез"},null,8,["modelValue"])])),_:1})])),_:1}),h(d,{horizontal:"",class:""},{default:g((()=>[h(_,null,{default:g((()=>[h(V,{modelValue:o.gemoliz,"onUpdate:modelValue":t[4]||(t[4]=a=>o.gemoliz=a),color:"primary",label:"Гемолиз"},null,8,["modelValue"])])),_:1})])),_:1})]),y("div",ua,[h(d,{horizontal:"",class:"is-justify-content-end"},{default:g((()=>[h(n,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:g((()=>[j(" Титр антистафилококковый антител ")])),_:1}),h(_,null,{default:g((()=>[h(u,{modelValue:o.anti_staphylococcal_antibody_titer,"onUpdate:modelValue":t[5]||(t[5]=a=>o.anti_staphylococcal_antibody_titer=a)},null,8,["modelValue"])])),_:1})])),_:1})])]),_a,da])]})),action:g((()=>[h(k,{type:"button",color:"warning",outlined:"",onClick:r},{default:g((()=>[j(" Экстренное извещение ")])),_:1}),h(w,{loading:s.value,form:"blood-sampling-form"},null,8,["loading"])])),_:1},8,["open","title"])}}}),[["__scopeId","data-v-aa72eb25"]]),ca=a=>(V("data-v-3f1c56a0"),a=a(),k(),a),va={class:"page-content-inner"},fa={class:"columns mb-3"},ga={class:"column"},ya={class:"columns mt-1"},ba={class:"column"},ha={class:"columns"},ja={class:"column is-12"},xa={key:0,class:"is-flex-grow-0",textContent:"#"},Va={key:0,class:"flex-list-inner"},ka={key:1,class:"flex-list-inner"},wa=ca((()=>y("img",{class:"light-image",src:r,alt:""},null,-1))),Da=ca((()=>y("img",{class:"dark-image",src:u,alt:""},null,-1))),za=["onClick"],Ya=O.isEmpty,$a=L(m({__name:"index",async setup(r){let u,m;d();const j=H(),{t:V}=F(),k=X(),O=p(!1);J().setPageTitle(V("Buck-laboratory")),B({title:`${V("Donor_list_for_blood_sampling")} - ${k.app.name}`});const I=c({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),N=w({get:()=>I.pagination.current_page,set:async a=>{T.page=a,await q(T)}}),E={orderNumber:{format:(a,e,t)=>`${t+1}`,cellClass:"is-flex-grow-0"},donation_code:{label:V("Donation_code")},blood_sampling_date:{label:V("Blood_sampling_date")},name:{label:V("Donor_fullname")},birth_date:{label:V("Date-of-birth")},visit_type:{label:V("Visit_type"),format:(a,e)=>{var t,l;return(null==(t=e.last_visit)?void 0:t.visit_type)&&V(null==(l=e.last_visit)?void 0:l.visit_type)}},visit_date:{label:V("Visit_date"),format:(a,e)=>{var t,l;return(null==(t=e.last_visit)?void 0:t.created_at)&&U(new Date(null==(l=e.last_visit)?void 0:l.created_at),"YYYY-MM-DD")}},donation_type:{label:V("Donation_type"),format:(a,e)=>{var t;return null==(t=e.last_visit)?void 0:t.personalized_donation}},visit_stage:{label:V("Visit_stage"),format:(a,e)=>{var t,l;return null==(l=null==(t=e.last_visit)?void 0:t.stage)?void 0:l.name}}};p();const P=c({visit_type_id:[],donation_type_id:[],donation_code:[]}),T=c({page:1}),Q=c({}),R=p(!1),S=p(!1);async function q(a){var e,t;try{Object.assign(T,a),O.value=!0;const e=await K(a);Object.assign(I,e.result),Ya(e.result.data)?j.warning(V("Data_not_found")):j.success(`${V("Found")}: ${e.result.pagination.total} ${V("records")}`)}catch(l){Object.assign(P,null==(t=null==(e=l.response)?void 0:e.data)?void 0:t.errors)}finally{O.value=!1}}function A(a){P[a]=""}async function G(){I.data=[]}return[u,m]=D((()=>q(T))),await u,m(),(r,u)=>{const d=_,m=o,p=t,c=n,j=l,V=i,w=s,D=e;return v(),z("div",va,[y("div",fa,[y("div",ga,[h(d,{"with-icons":"",separator:"bullet",items:[{label:x(k).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:r.$t("Buck-laboratory")},{label:r.$t("Research-aimed-donations-list")}]},null,8,["items"])])]),y("div",ya,[y("div",ba,[h(a,{"is-loading":x(O),errors:x(P),onSearch:q,onClearForm:G,onClearError:A},null,8,["is-loading","errors"])])]),y("div",ha,[y("div",ja,[h(w,{columns:x(E),data:x(I).data,limit:x(I).pagination.per_page,total:x(I).pagination.total},{default:g((()=>[h(j,{rounded:"","no-header":!x(O)&&0===x(I).data.length},{"header-column":g((({column:a})=>["orderNumber"===a.key?(v(),z("span",xa)):Y("",!0)])),body:g((()=>[x(O)?(v(),z("div",Va,[(v(!0),z($,null,M(x(I).pagination.per_page,(a=>(v(),z("div",{key:a,class:"flex-table-item"},[h(p,null,{default:g((()=>[h(m,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):Y("",!0),0===x(I).data.length?(v(),z("div",ka,[h(c,{title:r.$t("No_data"),subtitle:r.$t("There_is_no_data_that_match_your_query"),class:"my-6"},{image:g((()=>[wa,Da])),_:1},8,["title","subtitle"])])):Y("",!0)])),"body-cell":g((({row:a,column:e})=>["name"===e.key?(v(),z("a",{key:0,href:"javascript:;",class:"has-text-primary",onClick:e=>{return t=a,Object.assign(Q,t),void(R.value=!0);var t}},b(a.first_name)+" "+b(a.last_name)+" "+b(a.father_name)+" ",9,za)):Y("",!0)])),_:1},8,["no-header"]),x(I).data.length?(v(),f(V,{key:0,"current-page":x(N),"onUpdate:current-page":u[0]||(u[0]=a=>C(N)?N.value=a:null),class:"mt-5","item-per-page":x(I).pagination.per_page,"total-items":x(I).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):Y("",!0)])),_:1},8,["columns","data","limit","total"])])]),h(pa,{"is-open":x(R),"onUpdate:is-open":u[1]||(u[1]=a=>C(R)?R.value=a:null),patient:x(Q),onEmergencyNoticing:u[2]||(u[2]=a=>S.value=!x(S))},null,8,["is-open","patient"]),h(D,{"is-open":x(S),"onUpdate:is-open":u[3]||(u[3]=a=>C(S)?S.value=a:null),patient:x(Q)},null,8,["is-open","patient"])])}}}),[["__scopeId","data-v-3f1c56a0"]]);export{$a as default};
