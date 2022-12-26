import{_ as l,a as e}from"./FilterForm.vue_vue_type_script_setup_true_lang-b8ccb85a.js";import{_ as a,a as t,b as s}from"./VFlexTable.vue_vue_type_style_index_0_lang-f8ff2f75.js";import{_ as o,a as i,b as n,c as u,d}from"./search-7-dark-f0facebe.js";import{_ as r}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-d3c7c667.js";import{u as m}from"./chunk-DRAQDPQ2-4514f14e.js";import{a as _,b as c,r as p,l as f,t as y,q as v,Q as g,V as h,p as b,v as V,u as j,$ as x,a0 as z,c as k,ac as U,m as D,y as w,M as Y,W as M,i as $}from"./chunk-BGPNDDXN-dcda8805.js";import{f as C}from"./@vueuse_core-098eb702.js";import{u as O}from"./@vueuse_head-0d019878.js";import{_ as F}from"./lodash-94527813.js";import{u as B}from"./chunk-3UEUFEGV-d557e6b1.js";import{_ as I}from"./VModal.vue_vue_type_style_index_0_lang-b0507e96.js";import{_ as N}from"./SubmitButton.vue_vue_type_script_setup_true_lang-e5001c63.js";import{_ as P}from"./VCheckbox.vue_vue_type_style_index_0_lang-25f2733c.js";import{_ as T}from"./VFlex.vue_vue_type_style_index_0_lang-0938e556.js";import{_ as E}from"./IMaskDateInput.vue_vue_type_script_setup_true_lang-5ce26ef4.js";import{_ as S}from"./VFlexItem.vue_vue_type_style_index_0_lang-ff50e60d.js";import{b as A,_ as Q,a as q}from"./VControl-fc151345.js";import{_ as G}from"./VInput.vue_vue_type_script_setup_true_lang-29181b77.js";import{m as L}from"./moment-e00bdeae.js";import{u as R}from"./useNotyf-1536ae84.js";import{_ as W}from"./_plugin-vue_export-helper-1b428a4d.js";import{u as H}from"./main-a3a6220c.js";import{u as X}from"./viewWrapper-c60f0ce7.js";import{f as Z}from"./patient-7cc4d60d.js";import"./VTextarea.vue_vue_type_script_setup_true_lang-a017671a.js";import"./VRadio.vue_vue_type_style_index_0_lang-03da69fa.js";import"./VCard.vue_vue_type_script_setup_true_lang-a9232da9.js";import"./VButton.vue_vue_type_style_index_0_lang-27d6885c.js";import"./VPlaceload-2a65ae53.js";import"./VIMaskInput.vue_vue_type_script_lang-06d40a07.js";import"./pinia-3af6ce52.js";import"./userSession-0c0e9684.js";const J=l=>(x("data-v-866685fa"),l=l(),z(),l),K={class:"columns"},ll={class:"column"},el={class:"is-size-5 has-text-weight-medium"},al={class:"box"},tl={class:"has-text-weight-bold"},sl=J((()=>g("br",null,null,-1))),ol={class:"box"},il=J((()=>g("hr",{class:"is-divider"},null,-1))),nl=J((()=>g("br",null,null,-1))),ul={class:"columns is-multiline"},dl={class:"column is-4-desktop is-6-tablet"},rl={class:"column is-4-desktop is-6-tablet"},ml={class:"column is-4-desktop is-6-tablet"},_l={class:"column is-4-desktop is-6-tablet"},cl=J((()=>g("span",{class:"has-text-danger"},"*",-1))),pl={class:"column is-4-desktop is-6-tablet"},fl={class:"column is-4-desktop is-6-tablet"},yl={class:"column is-4-desktop is-6-tablet"},vl=J((()=>g("span",{class:"has-text-danger"},"*",-1))),gl={class:"column is-4-desktop is-6-tablet"},hl=J((()=>g("br",null,null,-1))),bl=J((()=>g("p",{class:"has-text-danger"}," Красным цветом указаны показатели, заданные врачом-терапевтом, как обязательные для определения ",-1))),Vl=J((()=>g("h5",{class:"is-size-5 py-1 has-text-centered"},"Лейкоформула",-1))),jl=J((()=>g("br",null,null,-1))),xl={class:"box"},zl={class:"columns is-multiline"},kl={class:"column is-4-desktop is-6-tablet"},Ul={class:"column is-4-desktop is-6-tablet"},Dl={class:"column is-4-desktop is-6-tablet"},wl={class:"column is-4-desktop is-6-tablet"},Yl={class:"column is-4-desktop is-6-tablet"},Ml={class:"column is-4-desktop is-6-tablet"},$l=J((()=>g("hr",{class:"is-divider"},null,-1))),Cl={class:"box"},Ol=L.__esModule?L.default:L,Fl=W(_({__name:"FormModal",props:{isOpen:{type:Boolean,default:!1},patient:null},emits:["update:isOpen","update:list"],setup(l,{emit:e}){R();const{t:a}=B(),t=c(a("Hemotransmission_research_results")),s=c(!1),o=p({leykotsity:"",trombotsity:""}),i=p({blood_samples_taken_date:[],analysis_date:[],clinical_biochemical_laboratory_date:[]});function n(){Object.assign(o,{blood_samples_taken_date:Ol().format("YYYY-MM-DD"),analysis_date:Ol().format("YYYY-MM-DD"),clinical_biochemical_laboratory_date:Ol().format("YYYY-MM-DD")}),Object.assign(i,{blood_samples_taken_date:[],analysis_date:[],clinical_biochemical_laboratory_date:[]}),e("update:isOpen",!1)}return(e,a)=>{const i=A,u=G,d=Q,r=q,m=S,_=E,c=T,p=P,x=N,z=I;return f(),y(z,{open:l.isOpen,size:"big",title:t.value,actions:"right",onClose:n},{content:v((()=>{var t;return[g("div",K,[g("div",ll,[g("h5",el,h(e.$t("Donor_code"))+": "+h(null==(t=l.patient.last_visit)?void 0:t.donation_code),1)])]),g("div",al,[b(c,{"flex-wrap":"wrap","row-gap":"2rem","justify-content":"space-between"},{default:v((()=>[b(m,{"flex-basis":"45%"},{default:v((()=>[b(r,{horizontal:""},{default:v((()=>[b(i,{class:"my-auto mr-3 is-size-6"},{default:v((()=>[V(h(e.$t("Blood_sampling_date")),1)])),_:1}),b(d,null,{default:v((()=>{var e;return[b(u,{value:j(C)(new Date(null==(e=l.patient.last_visit)?void 0:e.updated_at),"YYYY-MM-DD"),disabled:""},null,8,["value"])]})),_:1})])),_:1})])),_:1}),b(m,{"flex-basis":"45%"},{default:v((()=>[b(r,{horizontal:""},{default:v((()=>[b(i,{class:"my-auto mr-3 is-size-6"},{default:v((()=>[V(h(e.$t("Blood_samples_taken_date")),1)])),_:1}),b(d,null,{default:v((()=>[b(_,{modelValue:o.blood_samples_taken_date,"onUpdate:modelValue":a[0]||(a[0]=l=>o.blood_samples_taken_date=l)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),b(m,{"flex-basis":"45%"},{default:v((()=>[b(r,{horizontal:""},{default:v((()=>[b(i,{class:"my-auto mr-3 is-size-6"},{default:v((()=>[V(h(e.$t("Analysis_date")),1)])),_:1}),b(d,null,{default:v((()=>[b(_,{modelValue:o.analysis_date,"onUpdate:modelValue":a[1]||(a[1]=l=>o.analysis_date=l)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),b(m,{"flex-basis":"45%"},{default:v((()=>{var a;return[g("h5",null,[g("span",tl,h(e.$t("Visit_stage")),1),g("span",null,h(null==(a=l.patient.last_visit)?void 0:a.stage),1)])]})),_:1})])),_:1})]),sl,g("div",ol,[b(c,{"flex-wrap":"wrap","align-items":"center","column-gap":"2rem"},{default:v((()=>[b(m,null,{default:v((()=>[b(r,{horizontal:""},{default:v((()=>[b(i,{class:"is-size-6 my-auto mr-3"},{default:v((()=>[V("ALT, ml. mol/l")])),_:1}),b(d,null,{default:v((()=>[b(u,{modelValue:o.alt,"onUpdate:modelValue":a[2]||(a[2]=l=>o.alt=l)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),b(m,null,{default:v((()=>[b(r,{horizontal:""},{default:v((()=>[b(i,{class:"is-size-6 my-auto mr-3"},{default:v((()=>[V("Реагент")])),_:1}),b(d,null,{default:v((()=>[b(u,{modelValue:o.reagent,"onUpdate:modelValue":a[3]||(a[3]=l=>o.reagent=l)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),b(m,null,{default:v((()=>[b(r,{horizontal:""},{default:v((()=>[b(d,null,{default:v((()=>[b(p,{modelValue:o.norma,"onUpdate:modelValue":a[4]||(a[4]=l=>o.norma=l),color:"primary",label:"Норма"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),il,b(m,null,{default:v((()=>[b(r,{horizontal:""},{default:v((()=>[b(d,null,{default:v((()=>[b(p,{modelValue:o.plmal,"onUpdate:modelValue":a[5]||(a[5]=l=>o.plmal=l),color:"primary",label:"Plmal"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),nl,g("div",ul,[g("div",dl,[b(r,{horizontal:"",class:"is-justify-content-end"},{default:v((()=>[b(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:v((()=>[V("Билирубин, мл.моль/л")])),_:1}),b(d,null,{default:v((()=>[b(u,{modelValue:o.bilirubin,"onUpdate:modelValue":a[6]||(a[6]=l=>o.bilirubin=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",rl,[b(r,{horizontal:"",class:"is-justify-content-end"},{default:v((()=>[b(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:v((()=>[V("Общий белок, ед.")])),_:1}),b(d,null,{default:v((()=>[b(u,{modelValue:o.obshiy_belok,"onUpdate:modelValue":a[7]||(a[7]=l=>o.obshiy_belok=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",ml,[b(r,{horizontal:"",class:"is-justify-content-end"},{default:v((()=>[b(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:v((()=>[V("Тимоловые пробы")])),_:1}),b(d,null,{default:v((()=>[b(u,{modelValue:o.timolovye_proby,"onUpdate:modelValue":a[8]||(a[8]=l=>o.timolovye_proby=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",_l,[b(r,{horizontal:"",class:"is-justify-content-end"},{default:v((()=>[b(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:v((()=>[V(" Лейкоциты (Z), ед/л"),cl])),_:1}),b(d,null,{default:v((()=>[b(u,{modelValue:o.leykotsity,"onUpdate:modelValue":a[9]||(a[9]=l=>o.leykotsity=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",pl,[b(r,{horizontal:"",class:"is-justify-content-end"},{default:v((()=>[b(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:v((()=>[V("СОЭ, мл/ч")])),_:1}),b(d,null,{default:v((()=>[b(u,{modelValue:o.soe,"onUpdate:modelValue":a[10]||(a[10]=l=>o.soe=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",fl,[b(r,{horizontal:"",class:"is-justify-content-end"},{default:v((()=>[b(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:v((()=>[V("Эритроциты, ед/л")])),_:1}),b(d,null,{default:v((()=>[b(u,{modelValue:o.eritrotsity,"onUpdate:modelValue":a[11]||(a[11]=l=>o.eritrotsity=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",yl,[b(r,{horizontal:"",class:"is-justify-content-end"},{default:v((()=>[b(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:v((()=>[V(" Тромбоциты, л"),vl])),_:1}),b(d,null,{default:v((()=>[b(u,{modelValue:o.trombotsity,"onUpdate:modelValue":a[12]||(a[12]=l=>o.trombotsity=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",gl,[b(r,{horizontal:"",class:"is-justify-content-end"},{default:v((()=>[b(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:v((()=>[V(" Гематокрит, %")])),_:1}),b(d,null,{default:v((()=>[b(u,{modelValue:o.gematokrit,"onUpdate:modelValue":a[13]||(a[13]=l=>o.gematokrit=l)},null,8,["modelValue"])])),_:1})])),_:1})])]),hl,bl]),Vl,jl,g("div",xl,[g("div",zl,[g("div",kl,[b(r,{horizontal:"",class:"is-justify-content-end"},{default:v((()=>[b(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:v((()=>[V("Базофилы, %")])),_:1}),b(d,null,{default:v((()=>[b(u,{modelValue:o.bazofily,"onUpdate:modelValue":a[14]||(a[14]=l=>o.bazofily=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",Ul,[b(r,{horizontal:"",class:"is-justify-content-end"},{default:v((()=>[b(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:v((()=>[V("Эозинофилы, %")])),_:1}),b(d,null,{default:v((()=>[b(u,{modelValue:o.eozinofily,"onUpdate:modelValue":a[15]||(a[15]=l=>o.eozinofily=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",Dl,[b(r,{horizontal:"",class:"is-justify-content-end"},{default:v((()=>[b(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:v((()=>[V("Палочкоядерные, %")])),_:1}),b(d,null,{default:v((()=>[b(u,{modelValue:o.palochkoyadernye,"onUpdate:modelValue":a[16]||(a[16]=l=>o.palochkoyadernye=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",wl,[b(r,{horizontal:"",class:"is-justify-content-end"},{default:v((()=>[b(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:v((()=>[V(" Сегментоядерные, % ")])),_:1}),b(d,null,{default:v((()=>[b(u,{modelValue:o.segmentoyadernye,"onUpdate:modelValue":a[17]||(a[17]=l=>o.segmentoyadernye=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",Yl,[b(r,{horizontal:"",class:"is-justify-content-end"},{default:v((()=>[b(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:v((()=>[V("Лимфоциты, %")])),_:1}),b(d,null,{default:v((()=>[b(u,{modelValue:o.limfotsity,"onUpdate:modelValue":a[18]||(a[18]=l=>o.limfotsity=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",Ml,[b(r,{horizontal:"",class:"is-justify-content-end"},{default:v((()=>[b(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:v((()=>[V("Моноциты, %")])),_:1}),b(d,null,{default:v((()=>[b(u,{modelValue:o.monotsity,"onUpdate:modelValue":a[19]||(a[19]=l=>o.monotsity=l)},null,8,["modelValue"])])),_:1})])),_:1})])])]),$l,g("div",Cl,[b(c,null,{default:v((()=>[b(m,null,{default:v((()=>[b(r,{horizontal:""},{default:v((()=>[b(d,null,{default:v((()=>[b(p,{modelValue:o.hilez,"onUpdate:modelValue":a[20]||(a[20]=l=>o.hilez=l),color:"primary",label:"Хилез"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),b(m,null,{default:v((()=>[b(r,{horizontal:""},{default:v((()=>[b(d,null,{default:v((()=>[b(p,{modelValue:o.gemoliz,"onUpdate:modelValue":a[21]||(a[21]=l=>o.gemoliz=l),color:"primary",label:"Гемолиз"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])]})),action:v((()=>[b(x,{loading:s.value,form:"blood-sampling-form"},null,8,["loading"])])),_:1},8,["open","title"])}}}),[["__scopeId","data-v-866685fa"]]),Bl=l=>(x("data-v-eab874c2"),l=l(),z(),l),Il={class:"page-content-inner"},Nl={class:"columns mb-3"},Pl={class:"column"},Tl={class:"columns mt-1"},El={class:"column"},Sl={class:"columns"},Al={class:"column is-12"},Ql={key:0,class:"is-flex-grow-0",textContent:"#"},ql={key:0,class:"flex-list-inner"},Gl={key:1,class:"flex-list-inner"},Ll=Bl((()=>g("img",{class:"light-image",src:u,alt:""},null,-1))),Rl=Bl((()=>g("img",{class:"dark-image",src:d,alt:""},null,-1))),Wl=["onClick"],Hl=F.isEmpty,Xl=W(_({__name:"index",async setup(u){let d,_;m();const V=R(),{t:x}=B(),z=H(),F=c(!1);X().setPageTitle(x("Clinical-biochemical-laboratory")),O({title:`${x("Donor_list_for_blood_sampling")} - ${z.app.name}`});const I=p({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),N=k({get:()=>I.pagination.current_page,set:async l=>{E.page=l,await q(E)}}),P={orderNumber:{format:(l,e,a)=>`${a+1}`,cellClass:"is-flex-grow-0"},donation_code:{label:x("Donation_code")},blood_sampling_date:{label:x("Blood_sampling_date")},name:{label:x("Donor_fullname")},birth_date:{label:x("Date-of-birth")},visit_type:{label:x("Visit_type"),format:(l,e)=>{var a,t;return(null==(a=e.last_visit)?void 0:a.visit_type)&&x(null==(t=e.last_visit)?void 0:t.visit_type)}},visit_date:{label:x("Visit_date"),format:(l,e)=>{var a,t;return(null==(a=e.last_visit)?void 0:a.created_at)&&C(new Date(null==(t=e.last_visit)?void 0:t.created_at),"YYYY-MM-DD")}},donation_type:{label:x("Donation_type"),format:(l,e)=>{var a;return null==(a=e.last_visit)?void 0:a.personalized_donation}},visit_stage:{label:x("Visit_stage"),format:(l,e)=>{var a,t;return null==(t=null==(a=e.last_visit)?void 0:a.stage)?void 0:t.name}}};c();const T=p({visit_type_id:[],donation_type_id:[],donation_code:[]}),E=p({page:1}),S=p({}),A=c(!1),Q=c(!0);async function q(l){var e,a;try{Object.assign(E,l),F.value=!0;const e=await Z(l);Object.assign(I,e.result),Hl(e.result.data)?V.warning(x("Data_not_found")):V.success(`${x("Found")}: ${e.result.pagination.total} ${x("records")}`)}catch(t){Object.assign(T,null==(a=null==(e=t.response)?void 0:e.data)?void 0:a.errors)}finally{F.value=!1}}function G(l){T[l]=""}async function L(){I.data=[]}return[d,_]=U((()=>q(E))),await d,_(),(u,d)=>{const m=r,_=l,c=o,p=a,V=i,x=t,k=n,U=s,C=e;return f(),D("div",Il,[g("div",Nl,[g("div",Pl,[b(m,{"with-icons":"",separator:"bullet",items:[{label:j(z).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:u.$t("Screening")},{label:u.$t("Donor_list_for_blood_sampling")}]},null,8,["items"])])]),g("div",Tl,[g("div",El,[b(_,{"is-loading":j(F),errors:j(T),onSearch:q,onClearForm:L,onClearError:G},null,8,["is-loading","errors"])])]),g("div",Sl,[g("div",Al,[b(U,{columns:j(P),data:j(I).data,limit:j(I).pagination.per_page,total:j(I).pagination.total},{default:v((()=>[b(x,{rounded:"","no-header":!j(F)&&0===j(I).data.length},{"header-column":v((({column:l})=>["orderNumber"===l.key?(f(),D("span",Ql)):w("",!0)])),body:v((()=>[j(F)?(f(),D("div",ql,[(f(!0),D(Y,null,M(j(I).pagination.per_page,(l=>(f(),D("div",{key:l,class:"flex-table-item"},[b(p,null,{default:v((()=>[b(c,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):w("",!0),0===j(I).data.length?(f(),D("div",Gl,[b(V,{title:"No matches",subtitle:"There is no data that match your query.",class:"my-6"},{image:v((()=>[Ll,Rl])),_:1})])):w("",!0)])),"body-cell":v((({row:l,column:e})=>["name"===e.key?(f(),D("a",{key:0,href:"javascript:;",class:"has-text-primary",onClick:e=>{return a=l,Object.assign(S,a),void(A.value=!0);var a}},h(l.first_name)+" "+h(l.last_name)+" "+h(l.father_name)+" ",9,Wl)):w("",!0)])),_:1},8,["no-header"]),j(I).data.length?(f(),y(k,{key:0,"current-page":j(N),"onUpdate:current-page":d[0]||(d[0]=l=>$(N)?N.value=l:null),class:"mt-5","item-per-page":j(I).pagination.per_page,"total-items":j(I).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):w("",!0)])),_:1},8,["columns","data","limit","total"])])]),b(Fl,{"is-open":j(A),"onUpdate:is-open":d[1]||(d[1]=l=>$(A)?A.value=l:null),patient:j(S)},null,8,["is-open","patient"]),b(C,{"is-open":j(Q),"onUpdate:is-open":d[2]||(d[2]=l=>$(Q)?Q.value=l:null),patient:j(S)},null,8,["is-open","patient"])])}}}),[["__scopeId","data-v-eab874c2"]]);export{Xl as default};