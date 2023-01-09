import{_ as e,a}from"./FilterForm.vue_vue_type_script_setup_true_lang-b8ccb85a.js";import{_ as l}from"./VModal.vue_vue_type_style_index_0_lang-b0507e96.js";import{_ as t}from"./SubmitButton.vue_vue_type_script_setup_true_lang-e5001c63.js";import{_ as s}from"./VCheckbox.vue_vue_type_style_index_0_lang-25f2733c.js";import{_ as n}from"./VFlex.vue_vue_type_style_index_0_lang-0938e556.js";import{_ as o}from"./IMaskDateInput.vue_vue_type_script_setup_true_lang-5ce26ef4.js";import{_ as i}from"./VFlexItem.vue_vue_type_style_index_0_lang-ff50e60d.js";import{b as u,_ as r,a as _}from"./VControl-fc151345.js";import{_ as d}from"./VInput.vue_vue_type_script_setup_true_lang-29181b77.js";import{a as m,b as p,r as c,l as f,t as v,q as g,Q as y,V as b,p as h,v as V,u as j,$ as x,a0 as D,c as Y,ac as k,m as $,y as w,M,W as U,i as z}from"./chunk-BGPNDDXN-dcda8805.js";import{f as C}from"./@vueuse_core-098eb702.js";import{m as O}from"./moment-e00bdeae.js";import{u as B}from"./chunk-3UEUFEGV-d557e6b1.js";import{u as I}from"./useNotyf-1536ae84.js";import{f as F}from"./patient-3eef0e53.js";import{_ as T}from"./_plugin-vue_export-helper-1b428a4d.js";import{_ as A,a as H,b as R}from"./VFlexTable.vue_vue_type_style_index_0_lang-f8ff2f75.js";import{_ as N,a as S,b as P,c as W,d as E}from"./search-7-dark-f0facebe.js";import{_ as Q}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-d3c7c667.js";import{u as q}from"./chunk-DRAQDPQ2-4514f14e.js";import{u as G}from"./@vueuse_head-0d019878.js";import{u as L}from"./main-a3a6220c.js";import{u as X}from"./viewWrapper-c60f0ce7.js";import"./VTextarea.vue_vue_type_script_setup_true_lang-a017671a.js";import"./VRadio.vue_vue_type_style_index_0_lang-03da69fa.js";import"./VCard.vue_vue_type_script_setup_true_lang-a9232da9.js";import"./VButton.vue_vue_type_style_index_0_lang-27d6885c.js";import"./VPlaceload-2a65ae53.js";import"./lodash-94527813.js";import"./VIMaskInput.vue_vue_type_script_lang-06d40a07.js";import"./userSession-0c0e9684.js";import"./pinia-3af6ce52.js";const J=e=>(x("data-v-73efce38"),e=e(),D(),e),K={class:"columns"},Z={class:"column"},ee={class:"is-size-5 has-text-weight-medium"},ae={class:"box"},le={class:"has-text-weight-bold"},te=J((()=>y("br",null,null,-1))),se={class:"table-container"},ne={class:"table box is-fullwidth"},oe=J((()=>y("p",{class:"has-text-danger"}," Красным цветом указаны показатели, заданные врачом-терапевтом, как обязательные для определения ",-1))),ie=O.__esModule?O.default:O,ue=T(m({__name:"ResearchAimedFormModal",props:{isOpen:{type:Boolean,default:!1},patient:null},emits:["update:isOpen","update:list"],setup(e,{emit:a}){I();const{t:m}=B(),x=p(m("Hemotransmission_research_results")),D=p(!1),Y=c({blood_samples_taken_date:ie().format("YYYY-MM-DD"),analysis_date:ie().format("YYYY-MM-DD")}),k=c({blood_samples_taken_date:[],analysis_date:[],clinical_biochemical_laboratory_date:[]});function $(){Object.assign(Y,{blood_samples_taken_date:ie().format("YYYY-MM-DD"),analysis_date:ie().format("YYYY-MM-DD"),clinical_biochemical_laboratory_date:ie().format("YYYY-MM-DD")}),Object.assign(k,{blood_samples_taken_date:[],analysis_date:[],clinical_biochemical_laboratory_date:[]}),a("update:isOpen",!1)}return(a,m)=>{const p=u,c=d,k=r,w=_,M=i,U=o,z=n,O=s,B=t,I=l;return f(),v(I,{open:e.isOpen,size:"big",title:x.value,actions:"right",onClose:$},{content:g((()=>{var l;return[y("div",K,[y("div",Z,[y("h5",ee,b(a.$t("Donor_code"))+": "+b(null==(l=e.patient.last_visit)?void 0:l.donation_code),1)])]),y("div",ae,[h(z,{"flex-wrap":"wrap","row-gap":"2rem","justify-content":"space-between"},{default:g((()=>[h(M,{"flex-basis":"45%"},{default:g((()=>[h(w,{horizontal:""},{default:g((()=>[h(p,{class:"my-auto mr-3 is-size-6"},{default:g((()=>[V(b(a.$t("Blood_sampling_date")),1)])),_:1}),h(k,null,{default:g((()=>{var a;return[h(c,{value:j(C)(new Date(null==(a=e.patient.last_visit)?void 0:a.updated_at),"YYYY-MM-DD"),disabled:""},null,8,["value"])]})),_:1})])),_:1})])),_:1}),h(M,{"flex-basis":"45%"},{default:g((()=>[h(w,{horizontal:""},{default:g((()=>[h(p,{class:"my-auto mr-3 is-size-6"},{default:g((()=>[V(b(a.$t("Blood_samples_taken_date")),1)])),_:1}),h(k,null,{default:g((()=>[h(U,{modelValue:Y.blood_samples_taken_date,"onUpdate:modelValue":m[0]||(m[0]=e=>Y.blood_samples_taken_date=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),h(M,{"flex-basis":"45%"},{default:g((()=>[h(w,{horizontal:""},{default:g((()=>[h(p,{class:"my-auto mr-3 is-size-6"},{default:g((()=>[V(b(a.$t("Analysis_date")),1)])),_:1}),h(k,null,{default:g((()=>[h(U,{modelValue:Y.analysis_date,"onUpdate:modelValue":m[1]||(m[1]=e=>Y.analysis_date=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),h(M,{"flex-basis":"45%"},{default:g((()=>{var l;return[y("h5",null,[y("span",le,b(a.$t("Visit_stage")),1),y("span",null,b(null==(l=e.patient.last_visit)?void 0:l.stage),1)])]})),_:1})])),_:1})]),te,y("div",se,[y("table",ne,[y("tbody",null,[y("tr",null,[y("td",null,[h(w,null,{default:g((()=>[h(k,null,{default:g((()=>[h(O,{modelValue:Y.hbsag,"onUpdate:modelValue":m[2]||(m[2]=e=>Y.hbsag=e),class:"p-2",color:"primary",label:"HBsAg"},null,8,["modelValue"])])),_:1})])),_:1})]),y("td",null,[h(w,{horizontal:"",class:"is-justify-content-end"},{default:g((()=>[h(p,{class:"is-size-6 my-auto mr-3"},{default:g((()=>[V(b(a.$t("Testing_system"))+" (HBsAg)",1)])),_:1}),h(k,null,{default:g((()=>[h(c,{modelValue:Y.testing_system_hbsag,"onUpdate:modelValue":m[3]||(m[3]=e=>Y.testing_system_hbsag=e)},null,8,["modelValue"])])),_:1})])),_:1})])]),y("tr",null,[y("td",null,[h(w,null,{default:g((()=>[h(k,null,{default:g((()=>[h(O,{modelValue:Y.oids,"onUpdate:modelValue":m[4]||(m[4]=e=>Y.oids=e),class:"p-2",color:"primary",label:a.$t("OIDS")},null,8,["modelValue","label"])])),_:1})])),_:1})]),y("td",null,[h(w,{horizontal:"",class:"is-justify-content-end"},{default:g((()=>[h(p,{class:"is-size-6 my-auto mr-3"},{default:g((()=>[V(b(a.$t("Testing_system"))+" ("+b(a.$t("OIDS"))+")",1)])),_:1}),h(k,null,{default:g((()=>[h(c,{modelValue:Y.testing_system_oids,"onUpdate:modelValue":m[5]||(m[5]=e=>Y.testing_system_oids=e)},null,8,["modelValue"])])),_:1})])),_:1})])]),y("tr",null,[y("td",null,[h(w,null,{default:g((()=>[h(k,null,{default:g((()=>[h(O,{modelValue:Y.antihcv,"onUpdate:modelValue":m[6]||(m[6]=e=>Y.antihcv=e),class:"has-text-danger p-2",color:"danger",label:a.$t("AntiHCV")},null,8,["modelValue","label"])])),_:1})])),_:1})]),y("td",null,[h(w,{horizontal:"",class:"is-justify-content-end"},{default:g((()=>[h(p,{class:"is-size-6 my-auto mr-3"},{default:g((()=>[V(b(a.$t("Testing_system"))+" ("+b(a.$t("AntiHCV"))+")",1)])),_:1}),h(k,null,{default:g((()=>[h(c,{modelValue:Y.testing_system_antihcv,"onUpdate:modelValue":m[7]||(m[7]=e=>Y.testing_system_antihcv=e)},null,8,["modelValue"])])),_:1})])),_:1})])]),y("tr",null,[y("td",null,[h(w,null,{default:g((()=>[h(k,null,{default:g((()=>[h(O,{modelValue:Y.rw,"onUpdate:modelValue":m[8]||(m[8]=e=>Y.rw=e),class:"p-2",color:"primary",label:a.$t("RW")},null,8,["modelValue","label"])])),_:1})])),_:1})]),y("td",null,[h(w,{horizontal:"",class:"is-justify-content-end"},{default:g((()=>[h(p,{class:"is-size-6 my-auto mr-3"},{default:g((()=>[V(b(a.$t("Testing_system"))+" ("+b(a.$t("RW"))+")",1)])),_:1}),h(k,null,{default:g((()=>[h(c,{modelValue:Y.testing_system_rw,"onUpdate:modelValue":m[9]||(m[9]=e=>Y.testing_system_rw=e)},null,8,["modelValue"])])),_:1})])),_:1})])]),y("tr",null,[y("td",null,[h(w,null,{default:g((()=>[h(k,null,{default:g((()=>[h(O,{modelValue:Y.hemolis,"onUpdate:modelValue":m[10]||(m[10]=e=>Y.hemolis=e),class:"p-2",color:"primary",label:a.$t("Hemolis")},null,8,["modelValue","label"])])),_:1})])),_:1})])]),y("tr",null,[y("td",null,[h(w,null,{default:g((()=>[h(k,null,{default:g((()=>[h(O,{modelValue:Y.hiles,"onUpdate:modelValue":m[11]||(m[11]=e=>Y.hiles=e),class:"p-2",color:"primary",label:a.$t("Hiles")},null,8,["modelValue","label"])])),_:1})])),_:1})])])])]),oe])]})),action:g((()=>[h(B,{loading:D.value,form:"blood-sampling-form"},null,8,["loading"])])),_:1},8,["open","title"])}}}),[["__scopeId","data-v-73efce38"]]),re=e=>(x("data-v-2cc88e05"),e=e(),D(),e),_e={class:"page-content-inner"},de={class:"columns mb-3"},me={class:"column"},pe={class:"columns mt-1"},ce={class:"column"},fe={class:"columns"},ve={class:"column is-12"},ge={key:0,class:"is-flex-grow-0",textContent:"#"},ye={key:0,class:"flex-list-inner"},be={key:1,class:"flex-list-inner"},he=re((()=>y("img",{class:"light-image",src:W,alt:""},null,-1))),Ve=re((()=>y("img",{class:"dark-image",src:E,alt:""},null,-1))),je=["onClick"],xe=T(m({__name:"index",async setup(l){let t,s;q(),I();const{t:n}=B(),o=L(),i=p(!1);X().setPageTitle(n("Bloodborne-infections-laboratory")),G({title:`${n("Research-aimed-donations-list")} - ${o.app.name}`});const u=c({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),r=Y({get:()=>u.pagination.current_page,set:async e=>{m.page=e,await O(m)}}),_={orderNumber:{format:(e,a,l)=>`${l+1}`,cellClass:"is-flex-grow-0"},donation_code:{label:n("Donation_code"),format:(e,a)=>{var l;return null==(l=a.last_visit)?void 0:l.donation_code}},blood_sampling_date:{label:n("Blood_sampling_date")},name:{label:n("Donor_fullname")},birth_date:{label:n("Date-of-birth")},visit_type:{label:n("Visit_type"),format:(e,a)=>{var l,t;return(null==(l=a.last_visit)?void 0:l.visit_type)&&n(null==(t=a.last_visit)?void 0:t.visit_type)}},visit_date:{label:n("Visit_date"),format:(e,a)=>{var l,t;return(null==(l=a.last_visit)?void 0:l.created_at)&&C(new Date(null==(t=a.last_visit)?void 0:t.created_at),"YYYY-MM-DD")}},donation_type:{label:n("Donation_type"),format:(e,a)=>{var l,t;return null==(t=null==(l=a.last_visit)?void 0:l.donation_type)?void 0:t.name}},visit_stage:{label:n("Visit_stage"),format:(e,a)=>{var l,t;return null==(t=null==(l=a.last_visit)?void 0:l.stage)?void 0:t.name}}};p();const d=c({visit_type_id:[],donation_type_id:[],donation_code:[]}),m=c({page:1,status_id:5}),V=c({}),x=p(!1),D=p(!0);async function O(e){var a,l;try{Object.assign(m,e),i.value=!0;const a=await F(e);Object.assign(u,a.result)}catch(t){Object.assign(d,null==(l=null==(a=t.response)?void 0:a.data)?void 0:l.errors)}finally{i.value=!1}}function T(e){d[e]=""}async function W(){u.data=[]}return[t,s]=k((()=>O(m))),await t,s(),(l,t)=>{const s=Q,n=N,m=A,p=S,c=H,Y=P,k=R,C=ue,B=a;return f(),$("div",_e,[y("div",de,[y("div",me,[h(s,{"with-icons":"",separator:"bullet",items:[{label:j(o).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:l.$t("Screening")},{label:l.$t("Research-aimed-donations-list")}]},null,8,["items"])])]),y("div",pe,[y("div",ce,[h(e,{"is-loading":j(i),errors:j(d),onSearch:O,onClearForm:W,onClearError:T},null,8,["is-loading","errors"])])]),y("div",fe,[y("div",ve,[h(k,{columns:j(_),data:j(u).data,limit:j(u).pagination.per_page,total:j(u).pagination.total},{default:g((()=>[h(c,{rounded:"","no-header":!j(i)&&0===j(u).data.length},{"header-column":g((({column:e})=>["orderNumber"===e.key?(f(),$("span",ge)):w("",!0)])),body:g((()=>[j(i)?(f(),$("div",ye,[(f(!0),$(M,null,U(j(u).pagination.per_page,(e=>(f(),$("div",{key:e,class:"flex-table-item"},[h(m,null,{default:g((()=>[h(n,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):w("",!0),0===j(u).data.length?(f(),$("div",be,[h(p,{title:l.$t("No_data"),subtitle:l.$t("There_is_no_data_that_match_your_query"),class:"my-6"},{image:g((()=>[he,Ve])),_:1},8,["title","subtitle"])])):w("",!0)])),"body-cell":g((({row:e,column:a})=>["name"===a.key?(f(),$("a",{key:0,href:"javascript:;",class:"has-text-primary",onClick:a=>{return l=e,Object.assign(V,l),void(x.value=!0);var l}},b(e.first_name)+" "+b(e.last_name)+" "+b(e.father_name)+" ",9,je)):w("",!0)])),_:1},8,["no-header"]),j(u).data.length?(f(),v(Y,{key:0,"current-page":j(r),"onUpdate:current-page":t[0]||(t[0]=e=>z(r)?r.value=e:null),class:"mt-5","item-per-page":j(u).pagination.per_page,"total-items":j(u).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):w("",!0)])),_:1},8,["columns","data","limit","total"])])]),h(C,{"is-open":j(x),"onUpdate:is-open":t[1]||(t[1]=e=>z(x)?x.value=e:null),patient:j(V)},null,8,["is-open","patient"]),h(B,{"is-open":j(D),"onUpdate:is-open":t[2]||(t[2]=e=>z(D)?D.value=e:null),patient:j(V)},null,8,["is-open","patient"])])}}}),[["__scopeId","data-v-2cc88e05"]]);export{xe as default};