import{e,g as l,a,_ as t,b as s}from"./FilterForm.vue_vue_type_script_setup_true_lang-096ef984.js";import{_ as n}from"./TableForLaboratories.vue_vue_type_script_setup_true_lang-d32c523b.js";import{_ as i}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-e0d2add1.js";import{q as u,H as o,C as d,x as r,r as c,y as _,o as m,a as p,w as f,e as y,t as h,k as v,i as g,d as b,g as V,L as x,M as z,J as j,a8 as k,K as U,U as q}from"./index-98bd5d96.js";import{_ as w}from"./VModal.vue_vue_type_style_index_0_lang-5d90c6b2.js";import{_ as C}from"./SubmitButton.vue_vue_type_script_setup_true_lang-6d2139a4.js";import{_ as O}from"./VCheckbox.vue_vue_type_style_index_0_lang-bf75b12c.js";import{_ as $}from"./VFlex.vue_vue_type_style_index_0_lang-d4822231.js";import{_ as F}from"./IMaskDateInput.vue_vue_type_script_setup_true_lang-6474213d.js";import{_ as I}from"./VFlexItem.vue_vue_type_style_index_0_lang-e1345c6d.js";import{b as B,_ as M,a as T}from"./VControl-f7fb3a1b.js";import{_ as L}from"./VInput.vue_vue_type_script_setup_true_lang-66ceaea3.js";import{_ as D}from"./_plugin-vue_export-helper-1b428a4d.js";import{u as R}from"./main-f6ba09a2.js";import{u as A}from"./viewWrapper-68c9a3c0.js";import"./VTextarea.vue_vue_type_script_setup_true_lang-a7c6e41e.js";import"./VRadio.vue_vue_type_style_index_0_lang-6dace82f.js";import"./moment-29978768.js";import"./VCard.vue_vue_type_script_setup_true_lang-bb96f312.js";import"./VButton.vue_vue_type_style_index_0_lang-8d9e700e.js";import"./additional-acd45769.js";import"./VFlexTable.vue_vue_type_style_index_0_lang-a0c1a611.js";import"./search-7-dark-8086cfd0.js";import"./VIMaskInput.vue_vue_type_script_lang-760644c4.js";const P=e=>(x("data-v-8cff76fe"),e=e(),z(),e),S={class:"columns"},Z={class:"column"},E={class:"is-size-5 has-text-weight-medium"},H={class:"box"},J={class:"has-text-weight-bold"},K=P((()=>y("br",null,null,-1))),W={class:"box"},G=P((()=>y("hr",{class:"is-divider"},null,-1))),N=P((()=>y("br",null,null,-1))),Q={class:"columns is-multiline"},X={class:"column is-4-desktop is-6-tablet"},Y={key:0,class:"has-text-danger"},ee=P((()=>y("span",null,"Билирубин, мл.моль/л",-1))),le={class:"column is-4-desktop is-6-tablet"},ae={key:0,class:"has-text-danger"},te=P((()=>y("span",null,"Общий белок, ед.",-1))),se={class:"column is-4-desktop is-6-tablet"},ne={key:0,class:"has-text-danger"},ie=P((()=>y("span",null,"Тимоловые пробы",-1))),ue={class:"column is-4-desktop is-6-tablet"},oe={key:0,class:"has-text-danger"},de=P((()=>y("span",null,"Лейкоциты (Z), ед/л",-1))),re={class:"column is-4-desktop is-6-tablet"},ce={key:0,class:"has-text-danger"},_e=P((()=>y("span",null,"СОЭ, мл/ч",-1))),me={class:"column is-4-desktop is-6-tablet"},pe={key:0,class:"has-text-danger"},fe=P((()=>y("span",null,"Эритроциты, ед/л",-1))),ye={class:"column is-4-desktop is-6-tablet"},he={key:0,class:"has-text-danger"},ve=P((()=>y("span",null,"Тромбоциты, л",-1))),ge={class:"column is-4-desktop is-6-tablet"},be={key:0,class:"has-text-danger"},Ve=P((()=>y("span",null,"Гематокрит, %",-1))),xe=P((()=>y("br",null,null,-1))),ze=P((()=>y("p",{class:"has-text-danger"}," Красным цветом указаны показатели, заданные врачом-терапевтом, как обязательные для определения ",-1))),je=P((()=>y("h5",{class:"is-size-5 py-1 has-text-centered"},"Лейкоформула",-1))),ke=P((()=>y("br",null,null,-1))),Ue={class:"box"},qe={class:"columns is-multiline"},we={class:"column is-4-desktop is-6-tablet"},Ce={key:0,class:"has-text-danger"},Oe=P((()=>y("span",null,"Базофилы, %",-1))),$e={class:"column is-4-desktop is-6-tablet"},Fe={key:0,class:"has-text-danger"},Ie=P((()=>y("span",null,"Эозинофилы, %",-1))),Be={class:"column is-4-desktop is-6-tablet"},Me={key:0,class:"has-text-danger"},Te=P((()=>y("span",null,"Палочкоядерные, %",-1))),Le={class:"column is-4-desktop is-6-tablet"},De={key:0,class:"has-text-danger"},Re=P((()=>y("span",null,"Сегментоядерные, %",-1))),Ae={class:"column is-4-desktop is-6-tablet"},Pe={key:0,class:"has-text-danger"},Se=P((()=>y("span",null,"Лимфоциты, %",-1))),Ze={class:"column is-4-desktop is-6-tablet"},Ee={key:0,class:"has-text-danger"},He=P((()=>y("span",null,"Моноциты, %",-1))),Je=P((()=>y("hr",{class:"is-divider"},null,-1))),Ke={class:"box"},We=D(u({__name:"FormModal",props:{isOpen:{type:Boolean,default:!1},patient:null},emits:["update:isOpen","update:list"],setup(a,{emit:t}){const s=a,n=o(),{t:i}=d(),u=r(i("clinical_biochemical_research_results")),x=r(!1),z=c({blood_samples_taken_date:[],analysis_date:[],clinical_biochemical_laboratory_date:[]}),j=c({data:{date_analysis:"",alt:"",reagent:"",norm:!1,plmal:!1,bilirubin:"",general:"",thymol:"",leucocyte:"",platelets:"",esr:"",erythrocyte:"",hematocrit:"",basophils:"",eosinophils:"",stab:"",segmented:"",lymphocytes:"",monocytes:"",hemolysis:!1,chilez:!1},required_fields:[]}),k=r(!1);async function U(){var e,a,u,o,d,r;try{x.value=!0,await l(null==(a=null==(e=s.patient)?void 0:e.last_visit)?void 0:a.id,j.data),n.success(i("Data_saved_successfully")),t("update:list"),q()}catch(c){(null==(u=c.response)?void 0:u.data.error)?n.error(null==(o=c.response)?void 0:o.data.error):Object.assign(z,null==(r=null==(d=c.response)?void 0:d.data)?void 0:r.errors)}finally{x.value=!1}}function q(){j.data.date_analysis="",Object.assign(z,{date_analysis:[]}),t("update:isOpen",!1)}return _((()=>{var e,l;return null==(l=null==(e=s.patient)?void 0:e.last_visit)?void 0:l.id}),(async l=>{if(l){const a=await e(l);Object.assign(j,a.result)}})),_([()=>j.data.hemolysis,()=>j.data.chilez],(async e=>{e.includes(!0)?k.value=!0:k.value=!1})),(e,l)=>{const t=B,s=L,n=M,i=T,o=I,d=F,r=$,c=O,_=C,z=w;return m(),p(z,{open:a.isOpen,size:"big",title:u.value,actions:"right",onClose:q},{content:f((()=>{var u,_;return[y("div",S,[y("div",Z,[y("h5",E,h(e.$t("Donation_code"))+": "+h(null==(_=null==(u=a.patient)?void 0:u.last_visit)?void 0:_.donation_code),1)])]),y("div",H,[v(r,{"flex-wrap":"wrap","row-gap":"2rem","justify-content":"space-between"},{default:f((()=>[v(o,{"flex-basis":"45%"},{default:f((()=>[v(i,{horizontal:""},{default:f((()=>[v(t,{class:"my-auto mr-3 is-size-6"},{default:f((()=>[g(h(e.$t("Blood_sampling_date")),1)])),_:1}),v(n,null,{default:f((()=>{var e,l,t;return[v(s,{value:null==(t=null==(l=null==(e=a.patient)?void 0:e.last_visit)?void 0:l.blood_sample)?void 0:t.date,disabled:""},null,8,["value"])]})),_:1})])),_:1})])),_:1}),v(o,{"flex-basis":"45%"},{default:f((()=>[v(i,{horizontal:""},{default:f((()=>{var l,n,i;return[v(t,{class:"my-auto mr-3 is-size-6"},{default:f((()=>[g(h(e.$t("Blood_samples_taken_date")),1)])),_:1}),v(s,{value:null==(i=null==(n=null==(l=a.patient)?void 0:l.last_visit)?void 0:n.blood_sample)?void 0:i.chemical_date,disabled:""},null,8,["value"])]})),_:1})])),_:1}),v(o,{"flex-basis":"45%"},{default:f((()=>[v(i,{horizontal:""},{default:f((()=>[v(t,{class:"my-auto mr-3 is-size-6"},{default:f((()=>[g(h(e.$t("Analysis_date")),1)])),_:1}),v(n,null,{default:f((()=>[v(d,{modelValue:j.data.date_analysis,"onUpdate:modelValue":l[0]||(l[0]=e=>j.data.date_analysis=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),v(o,{"flex-basis":"45%"},{default:f((()=>{var l,t;return[y("h5",null,[y("span",J,h(e.$t("Visit_stage")),1),y("span",null,h(null==(t=null==(l=a.patient)?void 0:l.last_visit)?void 0:t.stage),1)])]})),_:1})])),_:1})]),K,y("div",W,[v(r,{"flex-wrap":"wrap","align-items":"center","column-gap":"2rem"},{default:f((()=>[v(o,null,{default:f((()=>[v(i,{horizontal:""},{default:f((()=>[v(t,{class:"is-size-6 my-auto mr-3"},{default:f((()=>[g("ALT, ml. mol/l")])),_:1}),v(n,null,{default:f((()=>[v(s,{modelValue:j.data.alt,"onUpdate:modelValue":l[1]||(l[1]=e=>j.data.alt=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),v(o,null,{default:f((()=>[v(i,{horizontal:""},{default:f((()=>[v(t,{class:"is-size-6 my-auto mr-3"},{default:f((()=>[g("Реагент")])),_:1}),v(n,null,{default:f((()=>[v(s,{modelValue:j.data.reagent,"onUpdate:modelValue":l[2]||(l[2]=e=>j.data.reagent=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),v(o,null,{default:f((()=>[v(i,{horizontal:""},{default:f((()=>[v(n,null,{default:f((()=>[v(c,{modelValue:j.data.norm,"onUpdate:modelValue":l[3]||(l[3]=e=>j.data.norm=e),color:"primary",label:"Норма"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),G,v(o,null,{default:f((()=>[v(i,{horizontal:""},{default:f((()=>[v(n,null,{default:f((()=>[v(c,{modelValue:j.data.plmal,"onUpdate:modelValue":l[4]||(l[4]=e=>j.data.plmal=e),color:"primary",label:"Plmal"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),N,y("div",Q,[y("div",X,[v(i,{horizontal:"",class:"is-justify-content-end"},{default:f((()=>[v(t,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:f((()=>[j.required_fields.includes("bilirubin")?(m(),b("span",Y,"*")):V("",!0),ee])),_:1}),v(n,null,{default:f((()=>[v(s,{modelValue:j.data.bilirubin,"onUpdate:modelValue":l[5]||(l[5]=e=>j.data.bilirubin=e)},null,8,["modelValue"])])),_:1})])),_:1})]),y("div",le,[v(i,{horizontal:"",class:"is-justify-content-end"},{default:f((()=>[v(t,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:f((()=>[j.required_fields.includes("general")?(m(),b("span",ae,"*")):V("",!0),te])),_:1}),v(n,null,{default:f((()=>[v(s,{modelValue:j.data.general,"onUpdate:modelValue":l[6]||(l[6]=e=>j.data.general=e)},null,8,["modelValue"])])),_:1})])),_:1})]),y("div",se,[v(i,{horizontal:"",class:"is-justify-content-end"},{default:f((()=>[v(t,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:f((()=>[j.required_fields.includes("thymol")?(m(),b("span",ne,"*")):V("",!0),ie])),_:1}),v(n,null,{default:f((()=>[v(s,{modelValue:j.data.thymol,"onUpdate:modelValue":l[7]||(l[7]=e=>j.data.thymol=e)},null,8,["modelValue"])])),_:1})])),_:1})]),y("div",ue,[v(i,{horizontal:"",class:"is-justify-content-end"},{default:f((()=>[v(t,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:f((()=>[j.required_fields.includes("leucocyte")?(m(),b("span",oe,"*")):V("",!0),de])),_:1}),v(n,null,{default:f((()=>[v(s,{modelValue:j.data.leucocyte,"onUpdate:modelValue":l[8]||(l[8]=e=>j.data.leucocyte=e)},null,8,["modelValue"])])),_:1})])),_:1})]),y("div",re,[v(i,{horizontal:"",class:"is-justify-content-end"},{default:f((()=>[v(t,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:f((()=>[j.required_fields.includes("esr")?(m(),b("span",ce,"*")):V("",!0),_e])),_:1}),v(n,null,{default:f((()=>[v(s,{modelValue:j.data.esr,"onUpdate:modelValue":l[9]||(l[9]=e=>j.data.esr=e)},null,8,["modelValue"])])),_:1})])),_:1})]),y("div",me,[v(i,{horizontal:"",class:"is-justify-content-end"},{default:f((()=>[v(t,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:f((()=>[j.required_fields.includes("erythrocyte")?(m(),b("span",pe,"*")):V("",!0),fe])),_:1}),v(n,null,{default:f((()=>[v(s,{modelValue:j.data.erythrocyte,"onUpdate:modelValue":l[10]||(l[10]=e=>j.data.erythrocyte=e)},null,8,["modelValue"])])),_:1})])),_:1})]),y("div",ye,[v(i,{horizontal:"",class:"is-justify-content-end"},{default:f((()=>[v(t,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:f((()=>[j.required_fields.includes("platelets")?(m(),b("span",he,"*")):V("",!0),ve])),_:1}),v(n,null,{default:f((()=>[v(s,{modelValue:j.data.platelets,"onUpdate:modelValue":l[11]||(l[11]=e=>j.data.platelets=e)},null,8,["modelValue"])])),_:1})])),_:1})]),y("div",ge,[v(i,{horizontal:"",class:"is-justify-content-end"},{default:f((()=>[v(t,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:f((()=>[j.required_fields.includes("hematocrit")?(m(),b("span",be,"*")):V("",!0),Ve])),_:1}),v(n,null,{default:f((()=>[v(s,{modelValue:j.data.hematocrit,"onUpdate:modelValue":l[12]||(l[12]=e=>j.data.hematocrit=e)},null,8,["modelValue"])])),_:1})])),_:1})])]),xe,ze]),je,ke,y("div",Ue,[y("div",qe,[y("div",we,[v(i,{horizontal:"",class:"is-justify-content-end"},{default:f((()=>[v(t,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:f((()=>[j.required_fields.includes("basophils")?(m(),b("span",Ce,"*")):V("",!0),Oe])),_:1}),v(n,null,{default:f((()=>[v(s,{modelValue:j.data.basophils,"onUpdate:modelValue":l[13]||(l[13]=e=>j.data.basophils=e)},null,8,["modelValue"])])),_:1})])),_:1})]),y("div",$e,[v(i,{horizontal:"",class:"is-justify-content-end"},{default:f((()=>[v(t,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:f((()=>[j.required_fields.includes("eosinophils")?(m(),b("span",Fe,"*")):V("",!0),Ie])),_:1}),v(n,null,{default:f((()=>[v(s,{modelValue:j.data.eosinophils,"onUpdate:modelValue":l[14]||(l[14]=e=>j.data.eosinophils=e)},null,8,["modelValue"])])),_:1})])),_:1})]),y("div",Be,[v(i,{horizontal:"",class:"is-justify-content-end"},{default:f((()=>[v(t,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:f((()=>[j.required_fields.includes("stab")?(m(),b("span",Me,"*")):V("",!0),Te])),_:1}),v(n,null,{default:f((()=>[v(s,{modelValue:j.data.stab,"onUpdate:modelValue":l[15]||(l[15]=e=>j.data.stab=e)},null,8,["modelValue"])])),_:1})])),_:1})]),y("div",Le,[v(i,{horizontal:"",class:"is-justify-content-end"},{default:f((()=>[v(t,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:f((()=>[j.required_fields.includes("segmented")?(m(),b("span",De,"*")):V("",!0),Re])),_:1}),v(n,null,{default:f((()=>[v(s,{modelValue:j.data.segmented,"onUpdate:modelValue":l[16]||(l[16]=e=>j.data.segmented=e)},null,8,["modelValue"])])),_:1})])),_:1})]),y("div",Ae,[v(i,{horizontal:"",class:"is-justify-content-end"},{default:f((()=>[v(t,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:f((()=>[j.required_fields.includes("lymphocytes")?(m(),b("span",Pe,"*")):V("",!0),Se])),_:1}),v(n,null,{default:f((()=>[v(s,{modelValue:j.data.lymphocytes,"onUpdate:modelValue":l[17]||(l[17]=e=>j.data.lymphocytes=e)},null,8,["modelValue"])])),_:1})])),_:1})]),y("div",Ze,[v(i,{horizontal:"",class:"is-justify-content-end"},{default:f((()=>[v(t,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:f((()=>[j.required_fields.includes("monocytes")?(m(),b("span",Ee,"*")):V("",!0),He])),_:1}),v(n,null,{default:f((()=>[v(s,{modelValue:j.data.monocytes,"onUpdate:modelValue":l[18]||(l[18]=e=>j.data.monocytes=e)},null,8,["modelValue"])])),_:1})])),_:1})])])]),Je,y("div",Ke,[v(r,null,{default:f((()=>[v(o,null,{default:f((()=>[v(i,{horizontal:""},{default:f((()=>[v(n,null,{default:f((()=>[v(c,{modelValue:j.data.chilez,"onUpdate:modelValue":l[19]||(l[19]=e=>j.data.chilez=e),color:"primary",label:"Хилез"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),v(o,null,{default:f((()=>[v(i,{horizontal:""},{default:f((()=>[v(n,null,{default:f((()=>[v(c,{modelValue:j.data.hemolysis,"onUpdate:modelValue":l[20]||(l[20]=e=>j.data.hemolysis=e),color:"primary",label:"Гемолиз"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])]})),action:f((()=>[v(_,{loading:x.value,onClick:U},null,8,["loading"])])),_:1},8,["open","title"])}}}),[["__scopeId","data-v-8cff76fe"]]),Ge={class:"page-content-inner"},Ne={class:"columns mb-3"},Qe={class:"column"},Xe={class:"columns mt-1"},Ye={class:"column"},el=D(u({__name:"index",async setup(e){let l,u;const{t:o}=d(),p=R(),f=r(!1);A().setPageTitle(o("Clinical-biochemical-laboratory")),j({title:`${o("Research-aimed-donations-list")} - ${p.app.name}`});const h=c({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),g=r(1),V=c({visit_type_id:[],donation_type_id:[],donation_code:[]}),x=c({visit_type_id:"",donation_type_id:null,donation_code:""}),z=r(null),w=r(!1),C=r(!1);async function O(e){var l,t;try{f.value=!0,Object.assign(x,e);const l={...e,page:h.pagination.current_page},t=await a(l);Object.assign(h,t.result)}catch(s){Object.assign(V,null==(t=null==(l=s.response)?void 0:l.data)?void 0:t.errors)}finally{f.value=!1}}function $(e){V[e]=""}async function F(){h.data=[]}function I(e){z.value=e,w.value=!0}function B(){z.value=null}return[l,u]=k((()=>O(x))),await l,u(),_(g,(async e=>{e&&await O(x)})),(e,l)=>{const a=i,u=t,o=n,d=s;return m(),b("div",Ge,[y("div",Ne,[y("div",Qe,[v(a,{"with-icons":"",separator:"bullet",items:[{label:U(p).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:e.$t("Clinical-biochemical-laboratory")},{label:e.$t("Research-aimed-donations-list")}]},null,8,["items"])])]),y("div",Xe,[y("div",Ye,[v(u,{"is-loading":U(f),errors:U(V),onSearch:O,onClearForm:F,onClearError:$},null,8,["is-loading","errors"])])]),v(o,{"current-page":U(g),"onUpdate:current-page":l[0]||(l[0]=e=>q(g)?g.value=e:null),data:U(h),"is-loading":U(f),onOpenFormModal:I},null,8,["current-page","data","is-loading"]),v(We,{"is-open":U(w),"onUpdate:is-open":l[1]||(l[1]=e=>q(w)?w.value=e:null),patient:U(z),onClose:B},null,8,["is-open","patient"]),v(d,{"is-open":U(C),"onUpdate:is-open":l[2]||(l[2]=e=>q(C)?C.value=e:null),patient:U(z)},null,8,["is-open","patient"])])}}}),[["__scopeId","data-v-6ccecac6"]]);export{el as default};