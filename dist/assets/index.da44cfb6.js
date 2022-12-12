import{_ as l,a as e}from"./FilterForm.vue_vue_type_script_setup_true_lang.f1ea3a1d.js";import{_ as a,a as t,b as s}from"./VFlexTable.vue_vue_type_style_index_0_lang.25ade395.js";import{_ as o,a as i,b as n,c as u,d}from"./search-7-dark.f359dc05.js";import{_ as r}from"./VBreadcrumb.vue_vue_type_style_index_0_lang.b7e8a70f.js";import{q as _,H as m,C as c,x as p,r as f,o as y,a as v,w as b,e as g,t as h,k as V,i as x,K as z,a7 as j,L as k,M as U,E as w,J as D,c as Y,ah as M,d as $,g as C,F as O,l as F,S as I}from"./index.4a029cdd.js";import{_ as B}from"./lodash.b2d9c938.js";import{_ as T}from"./VModal.vue_vue_type_style_index_0_lang.2b7bd30b.js";import{_ as S}from"./SubmitButton.vue_vue_type_script_setup_true_lang.69dc99ac.js";import{_ as E}from"./VCheckbox.vue_vue_type_style_index_0_lang.96c1189b.js";import{_ as L}from"./VFlex.vue_vue_type_style_index_0_lang.71b806ec.js";import{_ as N}from"./IMaskDateInput.vue_vue_type_script_setup_true_lang.a9bf4c2a.js";import{_ as P}from"./VFlexItem.vue_vue_type_style_index_0_lang.4ed71466.js";import{b as q,_ as A,a as H}from"./VControl.db99b51d.js";import{_ as J}from"./VInput.vue_vue_type_script_setup_true_lang.34261dbb.js";import{m as K}from"./moment.48108465.js";import{_ as R}from"./_plugin-vue_export-helper.cdc0426e.js";import{u as W}from"./main.31b19d1c.js";import{u as Z}from"./viewWrapper.1a3e0821.js";import{f as G}from"./patient.664695df.js";import"./VTextarea.vue_vue_type_script_setup_true_lang.a7134e72.js";import"./VRadio.vue_vue_type_style_index_0_lang.6bf49387.js";import"./VCard.vue_vue_type_script_setup_true_lang.b8abd6f0.js";import"./VButton.vue_vue_type_style_index_0_lang.3d7c5df0.js";import"./VPlaceload.cc73600a.js";import"./VIMaskInput.vue_vue_type_script_lang.55c4b218.js";const Q=l=>(k("data-v-866685fa"),l=l(),U(),l),X={class:"columns"},ll={class:"column"},el={class:"is-size-5 has-text-weight-medium"},al={class:"box"},tl={class:"has-text-weight-bold"},sl=Q((()=>g("br",null,null,-1))),ol={class:"box"},il=Q((()=>g("hr",{class:"is-divider"},null,-1))),nl=Q((()=>g("br",null,null,-1))),ul={class:"columns is-multiline"},dl={class:"column is-4-desktop is-6-tablet"},rl={class:"column is-4-desktop is-6-tablet"},_l={class:"column is-4-desktop is-6-tablet"},ml={class:"column is-4-desktop is-6-tablet"},cl=Q((()=>g("span",{class:"has-text-danger"},"*",-1))),pl={class:"column is-4-desktop is-6-tablet"},fl={class:"column is-4-desktop is-6-tablet"},yl={class:"column is-4-desktop is-6-tablet"},vl=Q((()=>g("span",{class:"has-text-danger"},"*",-1))),bl={class:"column is-4-desktop is-6-tablet"},gl=Q((()=>g("br",null,null,-1))),hl=Q((()=>g("p",{class:"has-text-danger"}," Красным цветом указаны показатели, заданные врачом-терапевтом, как обязательные для определения ",-1))),Vl=Q((()=>g("h5",{class:"is-size-5 py-1 has-text-centered"},"Лейкоформула",-1))),xl=Q((()=>g("br",null,null,-1))),zl={class:"box"},jl={class:"columns is-multiline"},kl={class:"column is-4-desktop is-6-tablet"},Ul={class:"column is-4-desktop is-6-tablet"},wl={class:"column is-4-desktop is-6-tablet"},Dl={class:"column is-4-desktop is-6-tablet"},Yl={class:"column is-4-desktop is-6-tablet"},Ml={class:"column is-4-desktop is-6-tablet"},$l=Q((()=>g("hr",{class:"is-divider"},null,-1))),Cl={class:"box"},Ol=K.__esModule?K.default:K,Fl=R(_({__name:"FormModal",props:{isOpen:{type:Boolean,default:!1},patient:null},emits:["update:isOpen","update:list"],setup(l,{emit:e}){m();const{t:a}=c(),t=p(a("Hemotransmission_research_results")),s=p(!1),o=f({leykotsity:"",trombotsity:""}),i=f({blood_samples_taken_date:[],analysis_date:[],clinical_biochemical_laboratory_date:[]});function n(){Object.assign(o,{blood_samples_taken_date:Ol().format("YYYY-MM-DD"),analysis_date:Ol().format("YYYY-MM-DD"),clinical_biochemical_laboratory_date:Ol().format("YYYY-MM-DD")}),Object.assign(i,{blood_samples_taken_date:[],analysis_date:[],clinical_biochemical_laboratory_date:[]}),e("update:isOpen",!1)}return(e,a)=>{const i=q,u=J,d=A,r=H,_=P,m=N,c=L,p=E,f=S,k=T;return y(),v(k,{open:l.isOpen,size:"big",title:t.value,actions:"right",onClose:n},{content:b((()=>{var t;return[g("div",X,[g("div",ll,[g("h5",el,h(e.$t("Donor_code"))+": "+h(null==(t=l.patient.last_visit)?void 0:t.donation_code),1)])]),g("div",al,[V(c,{"flex-wrap":"wrap","row-gap":"2rem","justify-content":"space-between"},{default:b((()=>[V(_,{"flex-basis":"45%"},{default:b((()=>[V(r,{horizontal:""},{default:b((()=>[V(i,{class:"my-auto mr-3 is-size-6"},{default:b((()=>[x(h(e.$t("Blood_sampling_date")),1)])),_:1}),V(d,null,{default:b((()=>{var e;return[V(u,{value:z(j)(new Date(null==(e=l.patient.last_visit)?void 0:e.updated_at),"YYYY-MM-DD"),disabled:""},null,8,["value"])]})),_:1})])),_:1})])),_:1}),V(_,{"flex-basis":"45%"},{default:b((()=>[V(r,{horizontal:""},{default:b((()=>[V(i,{class:"my-auto mr-3 is-size-6"},{default:b((()=>[x(h(e.$t("Blood_samples_taken_date")),1)])),_:1}),V(d,null,{default:b((()=>[V(m,{modelValue:o.blood_samples_taken_date,"onUpdate:modelValue":a[0]||(a[0]=l=>o.blood_samples_taken_date=l)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),V(_,{"flex-basis":"45%"},{default:b((()=>[V(r,{horizontal:""},{default:b((()=>[V(i,{class:"my-auto mr-3 is-size-6"},{default:b((()=>[x(h(e.$t("Analysis_date")),1)])),_:1}),V(d,null,{default:b((()=>[V(m,{modelValue:o.analysis_date,"onUpdate:modelValue":a[1]||(a[1]=l=>o.analysis_date=l)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),V(_,{"flex-basis":"45%"},{default:b((()=>{var a;return[g("h5",null,[g("span",tl,h(e.$t("Visit_stage")),1),g("span",null,h(null==(a=l.patient.last_visit)?void 0:a.stage),1)])]})),_:1})])),_:1})]),sl,g("div",ol,[V(c,{"flex-wrap":"wrap","align-items":"center","column-gap":"2rem"},{default:b((()=>[V(_,null,{default:b((()=>[V(r,{horizontal:""},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3"},{default:b((()=>[x("ALT, ml. mol/l")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.alt,"onUpdate:modelValue":a[2]||(a[2]=l=>o.alt=l)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),V(_,null,{default:b((()=>[V(r,{horizontal:""},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3"},{default:b((()=>[x("Реагент")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.reagent,"onUpdate:modelValue":a[3]||(a[3]=l=>o.reagent=l)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),V(_,null,{default:b((()=>[V(r,{horizontal:""},{default:b((()=>[V(d,null,{default:b((()=>[V(p,{modelValue:o.norma,"onUpdate:modelValue":a[4]||(a[4]=l=>o.norma=l),color:"primary",label:"Норма"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),il,V(_,null,{default:b((()=>[V(r,{horizontal:""},{default:b((()=>[V(d,null,{default:b((()=>[V(p,{modelValue:o.plmal,"onUpdate:modelValue":a[5]||(a[5]=l=>o.plmal=l),color:"primary",label:"Plmal"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),nl,g("div",ul,[g("div",dl,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x("Билирубин, мл.моль/л")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.bilirubin,"onUpdate:modelValue":a[6]||(a[6]=l=>o.bilirubin=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",rl,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x("Общий белок, ед.")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.obshiy_belok,"onUpdate:modelValue":a[7]||(a[7]=l=>o.obshiy_belok=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",_l,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x("Тимоловые пробы")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.timolovye_proby,"onUpdate:modelValue":a[8]||(a[8]=l=>o.timolovye_proby=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",ml,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x(" Лейкоциты (Z), ед/л"),cl])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.leykotsity,"onUpdate:modelValue":a[9]||(a[9]=l=>o.leykotsity=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",pl,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x("СОЭ, мл/ч")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.soe,"onUpdate:modelValue":a[10]||(a[10]=l=>o.soe=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",fl,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x("Эритроциты, ед/л")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.eritrotsity,"onUpdate:modelValue":a[11]||(a[11]=l=>o.eritrotsity=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",yl,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x(" Тромбоциты, л"),vl])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.trombotsity,"onUpdate:modelValue":a[12]||(a[12]=l=>o.trombotsity=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",bl,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x(" Гематокрит, %")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.gematokrit,"onUpdate:modelValue":a[13]||(a[13]=l=>o.gematokrit=l)},null,8,["modelValue"])])),_:1})])),_:1})])]),gl,hl]),Vl,xl,g("div",zl,[g("div",jl,[g("div",kl,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x("Базофилы, %")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.bazofily,"onUpdate:modelValue":a[14]||(a[14]=l=>o.bazofily=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",Ul,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x("Эозинофилы, %")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.eozinofily,"onUpdate:modelValue":a[15]||(a[15]=l=>o.eozinofily=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",wl,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x("Палочкоядерные, %")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.palochkoyadernye,"onUpdate:modelValue":a[16]||(a[16]=l=>o.palochkoyadernye=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",Dl,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x(" Сегментоядерные, % ")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.segmentoyadernye,"onUpdate:modelValue":a[17]||(a[17]=l=>o.segmentoyadernye=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",Yl,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x("Лимфоциты, %")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.limfotsity,"onUpdate:modelValue":a[18]||(a[18]=l=>o.limfotsity=l)},null,8,["modelValue"])])),_:1})])),_:1})]),g("div",Ml,[V(r,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(i,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[x("Моноциты, %")])),_:1}),V(d,null,{default:b((()=>[V(u,{modelValue:o.monotsity,"onUpdate:modelValue":a[19]||(a[19]=l=>o.monotsity=l)},null,8,["modelValue"])])),_:1})])),_:1})])])]),$l,g("div",Cl,[V(c,null,{default:b((()=>[V(_,null,{default:b((()=>[V(r,{horizontal:""},{default:b((()=>[V(d,null,{default:b((()=>[V(p,{modelValue:o.hilez,"onUpdate:modelValue":a[20]||(a[20]=l=>o.hilez=l),color:"primary",label:"Хилез"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),V(_,null,{default:b((()=>[V(r,{horizontal:""},{default:b((()=>[V(d,null,{default:b((()=>[V(p,{modelValue:o.gemoliz,"onUpdate:modelValue":a[21]||(a[21]=l=>o.gemoliz=l),color:"primary",label:"Гемолиз"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])]})),action:b((()=>[V(f,{loading:s.value,form:"blood-sampling-form"},null,8,["loading"])])),_:1},8,["open","title"])}}}),[["__scopeId","data-v-866685fa"]]),Il=l=>(k("data-v-eab874c2"),l=l(),U(),l),Bl={class:"page-content-inner"},Tl={class:"columns mb-3"},Sl={class:"column"},El={class:"columns mt-1"},Ll={class:"column"},Nl={class:"columns"},Pl={class:"column is-12"},ql={key:0,class:"is-flex-grow-0",textContent:"#"},Al={key:0,class:"flex-list-inner"},Hl={key:1,class:"flex-list-inner"},Jl=Il((()=>g("img",{class:"light-image",src:u,alt:""},null,-1))),Kl=Il((()=>g("img",{class:"dark-image",src:d,alt:""},null,-1))),Rl=["onClick"],Wl=B.isEmpty,Zl=R(_({__name:"index",async setup(u){let d,_;w();const x=m(),{t:k}=c(),U=W(),B=p(!1);Z().setPageTitle(k("Clinical-biochemical-laboratory")),D({title:`${k("Donor_list_for_blood_sampling")} - ${U.app.name}`});const T=f({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),S=Y({get:()=>T.pagination.current_page,set:async l=>{N.page=l,await H(N)}}),E={orderNumber:{format:(l,e,a)=>`${a+1}`,cellClass:"is-flex-grow-0"},donation_code:{label:k("Donation_code")},blood_sampling_date:{label:k("Blood_sampling_date")},name:{label:k("Donor_fullname")},birth_date:{label:k("Date-of-birth")},visit_type:{label:k("Visit_type"),format:(l,e)=>{var a,t;return(null==(a=e.last_visit)?void 0:a.visit_type)&&k(null==(t=e.last_visit)?void 0:t.visit_type)}},visit_date:{label:k("Visit_date"),format:(l,e)=>{var a,t;return(null==(a=e.last_visit)?void 0:a.created_at)&&j(new Date(null==(t=e.last_visit)?void 0:t.created_at),"YYYY-MM-DD")}},donation_type:{label:k("Donation_type"),format:(l,e)=>{var a;return null==(a=e.last_visit)?void 0:a.personalized_donation}},visit_stage:{label:k("Visit_stage"),format:(l,e)=>{var a,t;return null==(t=null==(a=e.last_visit)?void 0:a.stage)?void 0:t.name}}};p();const L=f({visit_type_id:[],donation_type_id:[],donation_code:[]}),N=f({page:1}),P=f({}),q=p(!1),A=p(!0);async function H(l){var e,a;try{Object.assign(N,l),B.value=!0;const e=await G(l);Object.assign(T,e.result),Wl(e.result.data)?x.warning(k("Data_not_found")):x.success(`${k("Found")}: ${e.result.pagination.total} ${k("records")}`)}catch(t){Object.assign(L,null==(a=null==(e=t.response)?void 0:e.data)?void 0:a.errors)}finally{B.value=!1}}function J(l){L[l]=""}async function K(){T.data=[]}return[d,_]=M((()=>H(N))),await d,_(),(u,d)=>{const _=r,m=l,c=o,p=a,f=i,x=t,j=n,k=s,w=e;return y(),$("div",Bl,[g("div",Tl,[g("div",Sl,[V(_,{"with-icons":"",separator:"bullet",items:[{label:z(U).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:u.$t("Screening")},{label:u.$t("Donor_list_for_blood_sampling")}]},null,8,["items"])])]),g("div",El,[g("div",Ll,[V(m,{"is-loading":B.value,errors:L,onSearch:H,onClearForm:K,onClearError:J},null,8,["is-loading","errors"])])]),g("div",Nl,[g("div",Pl,[V(k,{columns:z(E),data:T.data,limit:T.pagination.per_page,total:T.pagination.total},{default:b((()=>[V(x,{rounded:"","no-header":!B.value&&0===T.data.length},{"header-column":b((({column:l})=>["orderNumber"===l.key?(y(),$("span",ql)):C("",!0)])),body:b((()=>[B.value?(y(),$("div",Al,[(y(!0),$(O,null,F(T.pagination.per_page,(l=>(y(),$("div",{key:l,class:"flex-table-item"},[V(p,null,{default:b((()=>[V(c,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):C("",!0),0===T.data.length?(y(),$("div",Hl,[V(f,{title:"No matches",subtitle:"There is no data that match your query.",class:"my-6"},{image:b((()=>[Jl,Kl])),_:1})])):C("",!0)])),"body-cell":b((({row:l,column:e})=>["name"===e.key?(y(),$("a",{key:0,href:"javascript:;",class:"has-text-primary",onClick:e=>{return a=l,Object.assign(P,a),void(q.value=!0);var a}},h(l.first_name)+" "+h(l.last_name)+" "+h(l.father_name),9,Rl)):C("",!0)])),_:1},8,["no-header"]),T.data.length?(y(),v(j,{key:0,"current-page":z(S),"onUpdate:current-page":d[0]||(d[0]=l=>I(S)?S.value=l:null),class:"mt-5","item-per-page":T.pagination.per_page,"total-items":T.pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):C("",!0)])),_:1},8,["columns","data","limit","total"])])]),V(Fl,{"is-open":q.value,"onUpdate:is-open":d[1]||(d[1]=l=>q.value=l),patient:P},null,8,["is-open","patient"]),V(w,{"is-open":A.value,"onUpdate:is-open":d[2]||(d[2]=l=>A.value=l),patient:P},null,8,["is-open","patient"])])}}}),[["__scopeId","data-v-eab874c2"]]);export{Zl as default};
