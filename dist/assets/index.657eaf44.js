import{_ as a,a as e}from"./FilterForm.vue_vue_type_script_setup_true_lang.202d1552.js";import{_ as t,a as l,b as s,c as o,d as n,e as i,f as r,g as u}from"./search-7-dark.c0e73d3f.js";import{_}from"./VProgress.vue_vue_type_style_index_0_lang.f7b30e9f.js";import{_ as d}from"./VBreadcrumb.vue_vue_type_style_index_0_lang.f307b05f.js";import{q as p,H as m,C as c,x as v,r as f,o as g,a as y,w as b,e as h,t as x,k as V,i as j,K as k,a7 as w,L as z,M as D,E as Y,J as M,c as $,a8 as C,d as O,g as B,F as U,l as F,S as I}from"./index.0abd75ed.js";import{_ as E}from"./lodash.55c10af6.js";import{_ as N}from"./VModal.vue_vue_type_style_index_0_lang.086b7620.js";import{_ as P}from"./SubmitButton.vue_vue_type_script_setup_true_lang.26d507c1.js";import{_ as S}from"./VButton.vue_vue_type_style_index_0_lang.31eed629.js";import{_ as T}from"./VCheckbox.vue_vue_type_style_index_0_lang.3c3f831f.js";import{_ as q}from"./VFlex.vue_vue_type_style_index_0_lang.872f6df6.js";import{_ as H}from"./IMaskDateInput.vue_vue_type_script_setup_true_lang.9f2d62c3.js";import{_ as L}from"./VFlexItem.vue_vue_type_style_index_0_lang.e28ce857.js";import{b as R,_ as A,a as J}from"./VControl.93d0bd46.js";import{_ as K}from"./VInput.vue_vue_type_script_setup_true_lang.bea9a7b4.js";import{m as W}from"./moment.5a333ce6.js";import{_ as G}from"./_plugin-vue_export-helper.cdc0426e.js";import{u as Q}from"./main.e5d49235.js";import{u as X}from"./viewWrapper.04cc5e32.js";import{f as Z}from"./patient.051aee9f.js";import"./VTextarea.vue_vue_type_script_setup_true_lang.932906b5.js";import"./VRadio.vue_vue_type_style_index_0_lang.8389b9b7.js";import"./VCard.vue_vue_type_script_setup_true_lang.f34ac11d.js";import"./VPlaceload.5ce3c270.js";import"./VIMaskInput.vue_vue_type_script_lang.931d2ba1.js";const aa=a=>(z("data-v-aa72eb25"),a=a(),D(),a),ea={class:"columns"},ta={class:"column"},la={class:"is-size-5 has-text-weight-medium"},sa={class:"box"},oa={class:"has-text-weight-bold"},na=aa((()=>h("br",null,null,-1))),ia={class:"box"},ra={class:"columns is-multiline"},ua={class:"column is-narrow is-flex is-align-items-center"},_a={class:"column is-narrow is-flex is-align-items-center"},da=aa((()=>h("br",null,null,-1))),pa=aa((()=>h("p",{class:"has-text-danger"}," Красным цветом указаны показатели, заданные врачом-терапевтом, как обязательные для определения ",-1))),ma=W.__esModule?W.default:W,ca=G(p({__name:"FormModal",props:{isOpen:{type:Boolean,default:!1},patient:null},emits:["update:isOpen","update:list","emergency-noticing"],setup(a,{emit:e}){m();const{t:t}=c(),l=v(t("Hemotransmission_research_results")),s=v(!1),o=f({leykotsity:"",trombotsity:""}),n=f({blood_samples_taken_date:[],analysis_date:[]});function i(){Object.assign(o,{blood_samples_taken_date:ma().format("YYYY-MM-DD"),analysis_date:ma().format("YYYY-MM-DD")}),Object.assign(n,{blood_samples_taken_date:[],analysis_date:[]}),e("update:isOpen",!1)}function r(){e("emergency-noticing"),i()}return(e,t)=>{const n=R,u=K,_=A,d=J,p=L,m=H,c=q,v=T,f=S,z=P,D=N;return g(),y(D,{open:a.isOpen,size:"big",title:l.value,actions:"right",onClose:i},{content:b((()=>{var l;return[h("div",ea,[h("div",ta,[h("h5",la,x(e.$t("Donor_code"))+": "+x(null==(l=a.patient.last_visit)?void 0:l.donation_code),1)])]),h("div",sa,[V(c,{"flex-wrap":"wrap","row-gap":"2rem","justify-content":"space-between"},{default:b((()=>[V(p,{"flex-basis":"45%"},{default:b((()=>[V(d,{horizontal:""},{default:b((()=>[V(n,{class:"my-auto mr-3 is-size-6"},{default:b((()=>[j(x(e.$t("Blood_sampling_date")),1)])),_:1}),V(_,null,{default:b((()=>{var e;return[V(u,{value:k(w)(new Date(null==(e=a.patient.last_visit)?void 0:e.updated_at),"YYYY-MM-DD"),disabled:""},null,8,["value"])]})),_:1})])),_:1})])),_:1}),V(p,{"flex-basis":"45%"},{default:b((()=>[V(d,{horizontal:""},{default:b((()=>[V(n,{class:"my-auto mr-3 is-size-6"},{default:b((()=>[j(x(e.$t("Blood_samples_taken_date")),1)])),_:1}),V(_,null,{default:b((()=>[V(m,{modelValue:o.blood_samples_taken_date,"onUpdate:modelValue":t[0]||(t[0]=a=>o.blood_samples_taken_date=a)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),V(p,{"flex-basis":"45%"},{default:b((()=>[V(d,{horizontal:""},{default:b((()=>[V(n,{class:"my-auto mr-3 is-size-6"},{default:b((()=>[j(x(e.$t("Analysis_date")),1)])),_:1}),V(_,null,{default:b((()=>[V(m,{modelValue:o.analysis_date,"onUpdate:modelValue":t[1]||(t[1]=a=>o.analysis_date=a)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),V(p,{"flex-basis":"45%"},{default:b((()=>{var t;return[h("h5",null,[h("span",oa,x(e.$t("Visit_stage")),1),h("span",null,x(null==(t=a.patient.last_visit)?void 0:t.stage),1)])]})),_:1})])),_:1})]),na,h("div",ia,[h("div",ra,[h("div",ua,[V(d,{horizontal:"",class:""},{default:b((()=>[V(_,null,{default:b((()=>[V(v,{modelValue:o.reaction_hendelson_brutsellez,"onUpdate:modelValue":t[2]||(t[2]=a=>o.reaction_hendelson_brutsellez=a),color:"primary",label:"Реакция Хендельсона (бруцеллез)"},null,8,["modelValue"])])),_:1})])),_:1}),V(d,{horizontal:"",class:""},{default:b((()=>[V(_,null,{default:b((()=>[V(v,{modelValue:o.hilez,"onUpdate:modelValue":t[3]||(t[3]=a=>o.hilez=a),color:"primary",label:"Хилез"},null,8,["modelValue"])])),_:1})])),_:1}),V(d,{horizontal:"",class:""},{default:b((()=>[V(_,null,{default:b((()=>[V(v,{modelValue:o.gemoliz,"onUpdate:modelValue":t[4]||(t[4]=a=>o.gemoliz=a),color:"primary",label:"Гемолиз"},null,8,["modelValue"])])),_:1})])),_:1})]),h("div",_a,[V(d,{horizontal:"",class:"is-justify-content-end"},{default:b((()=>[V(n,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:b((()=>[j(" Титр антистафилококковый антител ")])),_:1}),V(_,null,{default:b((()=>[V(u,{modelValue:o.anti_staphylococcal_antibody_titer,"onUpdate:modelValue":t[5]||(t[5]=a=>o.anti_staphylococcal_antibody_titer=a)},null,8,["modelValue"])])),_:1})])),_:1})])]),da,pa])]})),action:b((()=>[V(f,{type:"button",color:"warning",outlined:"",onClick:r},{default:b((()=>[j(" Экстренное извещение ")])),_:1}),V(z,{loading:s.value,form:"blood-sampling-form"},null,8,["loading"])])),_:1},8,["open","title"])}}}),[["__scopeId","data-v-aa72eb25"]]),va=a=>(z("data-v-39083f2d"),a=a(),D(),a),fa={class:"page-content-inner"},ga={class:"columns mb-3"},ya={class:"column"},ba={class:"columns mt-1"},ha={class:"column"},xa={class:"columns"},Va={class:"column is-12"},ja={key:0,class:"is-flex-grow-0",textContent:"#"},ka={key:0,class:"flex-list-inner"},wa={key:1,class:"flex-list-inner"},za=va((()=>h("img",{class:"light-image",src:r,alt:""},null,-1))),Da=va((()=>h("img",{class:"dark-image",src:u,alt:""},null,-1))),Ya=["onClick"],Ma=E.isEmpty,$a=G(p({__name:"index",async setup(r){let u,p;Y();const j=m(),{t:z}=c(),D=Q(),E=v(!1);X().setPageTitle(z("Buck-laboratory")),M({title:`${z("Donor_list_for_blood_sampling")} - ${D.app.name}`});const N=f({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),P=$({get:()=>N.pagination.current_page,set:async a=>{H.page=a,await J(H)}}),S={orderNumber:{format:(a,e,t)=>`${t+1}`,cellClass:"is-flex-grow-0"},donation_code:{label:z("Donation_code")},blood_sampling_date:{label:z("Blood_sampling_date")},name:{label:z("Donor_fullname")},birth_date:{label:z("Date-of-birth")},visit_type:{label:z("Visit_type"),format:(a,e)=>{var t,l;return(null==(t=e.last_visit)?void 0:t.visit_type)&&z(null==(l=e.last_visit)?void 0:l.visit_type)}},visit_date:{label:z("Visit_date"),format:(a,e)=>{var t,l;return(null==(t=e.last_visit)?void 0:t.created_at)&&w(new Date(null==(l=e.last_visit)?void 0:l.created_at),"YYYY-MM-DD")}},donation_type:{label:z("Donation_type"),format:(a,e)=>{var t;return null==(t=e.last_visit)?void 0:t.personalized_donation}},visit_stage:{label:z("Visit_stage"),format:(a,e)=>{var t,l;return null==(l=null==(t=e.last_visit)?void 0:t.stage)?void 0:l.name}}},T=v(),q=f({visit_type_id:[],donation_type_id:[],donation_code:[]}),H=f({page:1}),L=f({}),R=v(!1),A=v(!1);async function J(a){var e,t;try{Object.assign(H,a),E.value=!0;const e=await Z(a);Object.assign(N,e.result),Ma(e.result.data)?j.warning(z("Data_not_found")):j.success(`${z("Found")}: ${e.result.pagination.total} ${z("records")}`)}catch(l){Object.assign(q,null==(t=null==(e=l.response)?void 0:e.data)?void 0:t.errors)}finally{E.value=!1}}function K(a){q[a]=""}async function W(){N.data=[]}return[u,p]=C((()=>J(H))),await u,p(),(r,u)=>{const p=d,m=t,c=l,v=s,f=_,j=o,w=n,z=i,Y=e;return g(),O("div",fa,[h("div",ga,[h("div",ya,[V(p,{"with-icons":"",separator:"bullet",items:[{label:k(D).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:r.$t("Buck-laboratory")},{label:r.$t("Research-aimed-donations-list")}]},null,8,["items"])])]),h("div",ba,[h("div",ha,[V(a,{"is-loading":E.value,errors:q,onSearch:J,onClearForm:W,onClearError:K},null,8,["is-loading","errors"])])]),h("div",xa,[h("div",Va,[V(z,{columns:k(S),data:N.data,limit:N.pagination.per_page,total:N.pagination.total},{default:b((()=>[V(j,{rounded:"","no-header":!E.value&&0===N.data.length},{"header-column":b((({column:a})=>["orderNumber"===a.key?(g(),O("span",ja)):B("",!0)])),body:b((()=>[E.value?(g(),O("div",ka,[(g(!0),O(U,null,F(N.pagination.per_page,(a=>(g(),O("div",{key:a,class:"flex-table-item"},[V(c,null,{default:b((()=>[V(m,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):B("",!0),0===N.data.length?(g(),O("div",wa,[V(v,{title:"No matches",subtitle:"There is no data that match your query.",class:"my-6"},{image:b((()=>[za,Da])),_:1})])):B("",!0)])),"body-row-pre":b((({row:a})=>[a.id===T.value?(g(),y(f,{key:0,size:"tiny",class:"m-0 mb-1"})):B("",!0)])),"body-cell":b((({row:a,column:e})=>["name"===e.key?(g(),O("a",{key:0,href:"javascript:;",class:"has-text-primary",onClick:e=>{return t=a,Object.assign(L,t),void(R.value=!0);var t}},x(a.first_name)+" "+x(a.last_name)+" "+x(a.father_name),9,Ya)):B("",!0)])),_:1},8,["no-header"]),N.data.length?(g(),y(w,{key:0,"current-page":k(P),"onUpdate:current-page":u[0]||(u[0]=a=>I(P)?P.value=a:null),class:"mt-5","item-per-page":N.pagination.per_page,"total-items":N.pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):B("",!0)])),_:1},8,["columns","data","limit","total"])])]),V(ca,{"is-open":R.value,"onUpdate:is-open":u[1]||(u[1]=a=>R.value=a),patient:L,onEmergencyNoticing:u[2]||(u[2]=a=>A.value=!A.value)},null,8,["is-open","patient"]),V(Y,{"is-open":A.value,"onUpdate:is-open":u[3]||(u[3]=a=>A.value=a),patient:L},null,8,["is-open","patient"])])}}}),[["__scopeId","data-v-39083f2d"]]);export{$a as default};
