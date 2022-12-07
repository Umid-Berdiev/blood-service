import{_ as e,a as l}from"./FilterForm.vue_vue_type_script_setup_true_lang.46c57ff2.js";import{_ as a,a as t,b as s,c as o,d as i,e as n,f as u,g as d}from"./search-7-dark.607cbb05.js";import{_ as r}from"./VBreadcrumb.vue_vue_type_style_index_0_lang.141f26f3.js";import{q as _,H as m,C as c,x as p,r as f,o as y,a as v,w as b,e as g,t as h,k as V,i as x,K as z,a7 as j,L as k,M as U,E as w,J as D,c as Y,ag as M,d as $,g as C,F as O,l as F,S as I}from"./index.5e313a07.js";import{_ as B}from"./lodash.6f8ef5ec.js";import{_ as S}from"./VModal.vue_vue_type_style_index_0_lang.e01de1da.js";import{_ as T}from"./SubmitButton.vue_vue_type_script_setup_true_lang.ff8c9853.js";import{_ as E}from"./VCheckbox.vue_vue_type_style_index_0_lang.ec6d3c7e.js";import{_ as L}from"./VFlex.vue_vue_type_style_index_0_lang.19debbcb.js";import{_ as N}from"./IMaskDateInput.vue_vue_type_script_setup_true_lang.2fa4ff12.js";import{_ as P}from"./VFlexItem.vue_vue_type_style_index_0_lang.c03e68c9.js";import{b as q,_ as A,a as H}from"./VControl.a4292c49.js";import{_ as J}from"./VInput.vue_vue_type_script_setup_true_lang.132fca0f.js";import{m as K}from"./moment.bb668042.js";import{_ as R}from"./_plugin-vue_export-helper.cdc0426e.js";import{u as W}from"./main.a14c778c.js";import{u as Z}from"./viewWrapper.74d08f31.js";import{f as G}from"./patient.83d02e12.js";import"./VTextarea.vue_vue_type_script_setup_true_lang.87140159.js";import"./VRadio.vue_vue_type_style_index_0_lang.188d102e.js";import"./VCard.vue_vue_type_script_setup_true_lang.1f6b49b7.js";import"./VButton.vue_vue_type_style_index_0_lang.61c9c78b.js";import"./VPlaceload.726b7e5d.js";import"./VIMaskInput.vue_vue_type_script_lang.1ef138ed.js";const Q=e=>(k("data-v-866685fa"),e=e(),U(),e),X={class:"columns"},ee={class:"column"},le={class:"is-size-5 has-text-weight-medium"},ae={class:"box"},te={class:"has-text-weight-bold"},se=Q((()=>g("br",null,null,-1))),oe={class:"box"},ie=Q((()=>g("hr",{class:"is-divider"},null,-1))),ne=Q((()=>g("br",null,null,-1))),ue={class:"columns is-multiline"},de={class:"column is-4-desktop is-6-tablet"},re={class:"column is-4-desktop is-6-tablet"},_e={class:"column is-4-desktop is-6-tablet"},me={class:"column is-4-desktop is-6-tablet"},ce=Q((()=>g("span",{class:"has-text-danger"},"*",-1))),pe={class:"column is-4-desktop is-6-tablet"},fe={class:"column is-4-desktop is-6-tablet"},ye={class:"column is-4-desktop is-6-tablet"},ve=Q((()=>g("span",{class:"has-text-danger"},"*",-1))),be={class:"column is-4-desktop is-6-tablet"},ge=Q((()=>g("br",null,null,-1))),he=Q((()=>g("p",{class:"has-text-danger"}," Красным цветом указаны показатели, заданные врачом-терапевтом, как обязательные для определения ",-1))),Ve=Q((()=>g("h5",{class:"is-size-5 py-1 has-text-centered"},"Лейкоформула",-1))),xe=Q((()=>g("br",null,null,-1))),ze={class:"box"},je={class:"columns is-multiline"},ke={class:"column is-4-desktop is-6-tablet"},Ue={class:"column is-4-desktop is-6-tablet"},we={class:"column is-4-desktop is-6-tablet"},De={class:"column is-4-desktop is-6-tablet"},Ye={class:"column is-4-desktop is-6-tablet"},Me={class:"column is-4-desktop is-6-tablet"},$e=Q((()=>g("hr",{class:"is-divider"},null,-1))),Ce={class:"box"},Oe=K.__esModule?K.default:K,Fe=R(_({__name:"FormModal",props:{isOpen:{type:Boolean,default:!1},patient:null},emits:["update:isOpen","update:list"],setup(e,{emit:l}){m();const{t:a}=c(),t=p(a("Hemotransmission_research_results")),s=p(!1),o=f({leykotsity:"",trombotsity:""}),i=f({blood_samples_taken_date:[],analysis_date:[],clinical_biochemical_laboratory_date:[]});function n(){Object.assign(o,{blood_samples_taken_date:Oe().format("YYYY-MM-DD"),analysis_date:Oe().format("YYYY-MM-DD"),clinical_biochemical_laboratory_date:Oe().format("YYYY-MM-DD")}),Object.assign(i,{blood_samples_taken_date:[],analysis_date:[],clinical_biochemical_laboratory_date:[]}),l("update:isOpen",!1)}return(l,a)=>{const i=q,u=J,d=A,r=H,_=P,m=N,c=L,p=E,f=T,k=S;return y(),v(k,{open:e.isOpen,size:"big",title:t.value,actions:"right",onClose:n},{content:b((()=>{var t;return[g("div",X,[g("div",ee,[g("h5",le,h(l.$t("Donor_code"))+": "+h(null==(t=e.patient.last_visit)?void 0:t.donation_code),1)])]),g("div",ae,[V(c,{"flex-wrap":"wrap","row-gap":"2rem","justify-content":"space-between"},{default:b((()=>[V(_,{"flex-basis":"45%"},{default:b((()=>[V(r,{horizontal:""},{default:b((()=>[V(i,{class:"my-auto mr-3 is-size-6"},{default:b((()=>[x(h(l.$t("Blood_sampling_date")),1)])),_:1}),V(d,null,{default:b((()=>{var l;return[V(u,{value:z(j)(new Date(null==(l=e.patient.last_visit)?void 0:l.updated_at),"YYYY-MM-DD"),disabled:""},null,8,["value"])]})),_:1})])),_:1})])),_:1}),V(_,{"flex-basis":"45%"},{default:b((()=>[V(r,{horizontal:""},{default:b((()=>[V(i,{class:"my-auto mr-3 is-size-6"},{default:b((()=>[x(h(l.$t("Blood_samples_taken_date")),1)])),_:1}),V(d,null,{default:b((()=>[V(m,{modelValue:o.blood_samples_taken_date,"onUpdate:modelValue":a[0]||(a[0]=e=>o.blood_samples_taken_date=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),V(_,{"flex-basis":"45%"},{default:b((()=>[V(r,{horizontal:""},{default:b((()=>[V(i,{class:"my-auto mr-3 is-size-6"},{default:b((()=>[x(h(l.$t("Analysis_date")),1)])),_:1}),V(d,null,{default:b((()=>[V(m,{modelValue:o.analysis_date,"onUpdate:modelValue":a[1]||(a[1]=e=>o.analysis_date=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),V(_,{"flex-basis":"45%"},{default:b((()=>{var a;return[g("h5",null,[g("span",te,h(l.$t("Visit_stage")),1),g("span",null,h(null==(a=e.patient.last_visit)?void 0:a.stage),1)])]})),_:1})])),_:1})]),se,g("div",oe,[V(c,{"flex-wrap":"wrap","align-items":"center","column-gap":"2rem"},{default:b((()=>[V(_,null,{default:b((()=>[V(r,{horizontal:""},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3"},{default:b((()=>[x("ALT, ml. mol/l")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.alt,"onUpdate:modelValue":a[2]||(a[2]=e=>o.alt=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),V(_,null,{default:b((()=>[V(r,{horizontal:""},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3"},{default:b((()=>[x("Реагент")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.reagent,"onUpdate:modelValue":a[3]||(a[3]=e=>o.reagent=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),V(_,null,{default:b((()=>[V(r,{horizontal:""},{default:b((()=>[V(d,null,{default:b((()=>[V(p,{modelValue:o.norma,"onUpdate:modelValue":a[4]||(a[4]=e=>o.norma=e),color:"primary",label:"Норма"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),ie,V(_,null,{default:b((()=>[V(r,{horizontal:""},{default:b((()=>[V(d,null,{default:b((()=>[V(p,{modelValue:o.plmal,"onUpdate:modelValue":a[5]||(a[5]=e=>o.plmal=e),color:"primary",label:"Plmal"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),ne,g("div",ue,[g("div",de,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x("Билирубин, мл.моль/л")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.bilirubin,"onUpdate:modelValue":a[6]||(a[6]=e=>o.bilirubin=e)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",re,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x("Общий белок, ед.")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.obshiy_belok,"onUpdate:modelValue":a[7]||(a[7]=e=>o.obshiy_belok=e)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",_e,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x("Тимоловые пробы")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.timolovye_proby,"onUpdate:modelValue":a[8]||(a[8]=e=>o.timolovye_proby=e)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",me,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x(" Лейкоциты (Z), ед/л"),ce])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.leykotsity,"onUpdate:modelValue":a[9]||(a[9]=e=>o.leykotsity=e)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",pe,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x("СОЭ, мл/ч")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.soe,"onUpdate:modelValue":a[10]||(a[10]=e=>o.soe=e)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",fe,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x("Эритроциты, ед/л")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.eritrotsity,"onUpdate:modelValue":a[11]||(a[11]=e=>o.eritrotsity=e)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",ye,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x(" Тромбоциты, л"),ve])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.trombotsity,"onUpdate:modelValue":a[12]||(a[12]=e=>o.trombotsity=e)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",be,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x(" Гематокрит, %")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.gematokrit,"onUpdate:modelValue":a[13]||(a[13]=e=>o.gematokrit=e)},null,8,["modelValue"])])),_:1})])),_:1})])]),ge,he]),Ve,xe,g("div",ze,[g("div",je,[g("div",ke,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x("Базофилы, %")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.bazofily,"onUpdate:modelValue":a[14]||(a[14]=e=>o.bazofily=e)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",Ue,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x("Эозинофилы, %")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.eozinofily,"onUpdate:modelValue":a[15]||(a[15]=e=>o.eozinofily=e)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",we,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x("Палочкоядерные, %")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.palochkoyadernye,"onUpdate:modelValue":a[16]||(a[16]=e=>o.palochkoyadernye=e)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",De,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x(" Сегментоядерные, % ")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.segmentoyadernye,"onUpdate:modelValue":a[17]||(a[17]=e=>o.segmentoyadernye=e)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",Ye,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x("Лимфоциты, %")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.limfotsity,"onUpdate:modelValue":a[18]||(a[18]=e=>o.limfotsity=e)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",Me,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x("Моноциты, %")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.monotsity,"onUpdate:modelValue":a[19]||(a[19]=e=>o.monotsity=e)},null,8,["modelValue"])])),_:1})])),_:1})])])]),$e,g("div",Ce,[V(c,null,{default:b((()=>[V(_,null,{default:b((()=>[V(r,{horizontal:""},{default:b((()=>[V(d,null,{default:b((()=>[V(p,{modelValue:o.hilez,"onUpdate:modelValue":a[20]||(a[20]=e=>o.hilez=e),color:"primary",label:"Хилез"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),V(_,null,{default:b((()=>[V(r,{horizontal:""},{default:b((()=>[V(d,null,{default:b((()=>[V(p,{modelValue:o.gemoliz,"onUpdate:modelValue":a[21]||(a[21]=e=>o.gemoliz=e),color:"primary",label:"Гемолиз"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])]})),action:b((()=>[V(f,{loading:s.value,form:"blood-sampling-form"},null,8,["loading"])])),_:1},8,["open","title"])}}}),[["__scopeId","data-v-866685fa"]]),Ie=e=>(k("data-v-eab874c2"),e=e(),U(),e),Be={class:"page-content-inner"},Se={class:"columns mb-3"},Te={class:"column"},Ee={class:"columns mt-1"},Le={class:"column"},Ne={class:"columns"},Pe={class:"column is-12"},qe={key:0,class:"is-flex-grow-0",textContent:"#"},Ae={key:0,class:"flex-list-inner"},He={key:1,class:"flex-list-inner"},Je=Ie((()=>g("img",{class:"light-image",src:u,alt:""},null,-1))),Ke=Ie((()=>g("img",{class:"dark-image",src:d,alt:""},null,-1))),Re=["onClick"],We=B.isEmpty,Ze=R(_({__name:"index",async setup(u){let d,_;w();const x=m(),{t:k}=c(),U=W(),B=p(!1);Z().setPageTitle(k("Clinical-biochemical-laboratory")),D({title:`${k("Donor_list_for_blood_sampling")} - ${U.app.name}`});const S=f({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),T=Y({get:()=>S.pagination.current_page,set:async e=>{N.page=e,await H(N)}}),E={orderNumber:{format:(e,l,a)=>`${a+1}`,cellClass:"is-flex-grow-0"},donation_code:{label:k("Donation_code")},blood_sampling_date:{label:k("Blood_sampling_date")},name:{label:k("Donor_fullname")},birth_date:{label:k("Date-of-birth")},visit_type:{label:k("Visit_type"),format:(e,l)=>{var a,t;return(null==(a=l.last_visit)?void 0:a.visit_type)&&k(null==(t=l.last_visit)?void 0:t.visit_type)}},visit_date:{label:k("Visit_date"),format:(e,l)=>{var a,t;return(null==(a=l.last_visit)?void 0:a.created_at)&&j(new Date(null==(t=l.last_visit)?void 0:t.created_at),"YYYY-MM-DD")}},donation_type:{label:k("Donation_type"),format:(e,l)=>{var a;return null==(a=l.last_visit)?void 0:a.personalized_donation}},visit_stage:{label:k("Visit_stage"),format:(e,l)=>{var a,t;return null==(t=null==(a=l.last_visit)?void 0:a.stage)?void 0:t.name}}};p();const L=f({visit_type_id:[],donation_type_id:[],donation_code:[]}),N=f({page:1}),P=f({}),q=p(!1),A=p(!0);async function H(e){var l,a;try{Object.assign(N,e),B.value=!0;const l=await G(e);Object.assign(S,l.result),We(l.result.data)?x.warning(k("Data_not_found")):x.success(`${k("Found")}: ${l.result.pagination.total} ${k("records")}`)}catch(t){Object.assign(L,null==(a=null==(l=t.response)?void 0:l.data)?void 0:a.errors)}finally{B.value=!1}}function J(e){L[e]=""}async function K(){S.data=[]}return[d,_]=M((()=>H(N))),await d,_(),(u,d)=>{const _=r,m=e,c=a,p=t,f=s,x=o,j=i,k=n,w=l;return y(),$("div",Be,[g("div",Se,[g("div",Te,[V(_,{"with-icons":"",separator:"bullet",items:[{label:z(U).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:u.$t("Screening")},{label:u.$t("Donor_list_for_blood_sampling")}]},null,8,["items"])])]),g("div",Ee,[g("div",Le,[V(m,{"is-loading":B.value,errors:L,onSearch:H,onClearForm:K,onClearError:J},null,8,["is-loading","errors"])])]),g("div",Ne,[g("div",Pe,[V(k,{columns:z(E),data:S.data,limit:S.pagination.per_page,total:S.pagination.total},{default:b((()=>[V(x,{rounded:"","no-header":!B.value&&0===S.data.length},{"header-column":b((({column:e})=>["orderNumber"===e.key?(y(),$("span",qe)):C("",!0)])),body:b((()=>[B.value?(y(),$("div",Ae,[(y(!0),$(O,null,F(S.pagination.per_page,(e=>(y(),$("div",{key:e,class:"flex-table-item"},[V(p,null,{default:b((()=>[V(c,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):C("",!0),0===S.data.length?(y(),$("div",He,[V(f,{title:"No matches",subtitle:"There is no data that match your query.",class:"my-6"},{image:b((()=>[Je,Ke])),_:1})])):C("",!0)])),"body-cell":b((({row:e,column:l})=>["name"===l.key?(y(),$("a",{key:0,href:"javascript:;",class:"has-text-primary",onClick:l=>{return a=e,Object.assign(P,a),void(q.value=!0);var a}},h(e.first_name)+" "+h(e.last_name)+" "+h(e.father_name),9,Re)):C("",!0)])),_:1},8,["no-header"]),S.data.length?(y(),v(j,{key:0,"current-page":z(T),"onUpdate:current-page":d[0]||(d[0]=e=>I(T)?T.value=e:null),class:"mt-5","item-per-page":S.pagination.per_page,"total-items":S.pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):C("",!0)])),_:1},8,["columns","data","limit","total"])])]),V(Fe,{"is-open":q.value,"onUpdate:is-open":d[1]||(d[1]=e=>q.value=e),patient:P},null,8,["is-open","patient"]),V(w,{"is-open":A.value,"onUpdate:is-open":d[2]||(d[2]=e=>A.value=e),patient:P},null,8,["is-open","patient"])])}}}),[["__scopeId","data-v-eab874c2"]]);export{Ze as default};
