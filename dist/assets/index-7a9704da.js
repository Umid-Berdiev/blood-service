import{c as a,d as e,a as t,_ as l,b as s}from"./FilterForm.vue_vue_type_script_setup_true_lang-e92ad149.js";import{_ as i,a as n,b as o}from"./VFlexTable.vue_vue_type_style_index_0_lang-03a54f1c.js";import{_ as r,a as u,b as d,c as _,d as p}from"./search-7-dark-81286176.js";import{_ as c}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-69f615bd.js";import{q as m,H as v,C as g,x as y,r as f,a7 as h,y as b,j as x,o as j,a as V,w as k,e as w,t as C,k as $,d as z,g as D,i as O,L as B,M as U,E as F,J as q,K as M,F as I,l as N,U as S}from"./index-21286bdb.js";import{_ as T}from"./VModal.vue_vue_type_style_index_0_lang-ac88dda5.js";import{_ as Y}from"./SubmitButton.vue_vue_type_script_setup_true_lang-96021f2c.js";import{_ as E}from"./VButton.vue_vue_type_style_index_0_lang-b78df6f3.js";import{_ as L}from"./VCheckbox.vue_vue_type_style_index_0_lang-d46d394c.js";import{_ as P}from"./VInput.vue_vue_type_script_setup_true_lang-9c010bca.js";import{b as R,_ as A,a as H}from"./VControl-e7b2630d.js";import{_ as J}from"./VFlex.vue_vue_type_style_index_0_lang-57370b27.js";import{_ as K}from"./DatePicker.vue_vue_type_script_setup_true_lang-8beaf1b4.js";import{_ as W}from"./VFlexItem.vue_vue_type_style_index_0_lang-a32e2ae4.js";import{_ as Z}from"./_plugin-vue_export-helper-1b428a4d.js";import{u as G}from"./main-16751c88.js";import{u as Q}from"./viewWrapper-6ae5f61c.js";import"./VTextarea.vue_vue_type_script_setup_true_lang-736b6c44.js";import"./VRadio.vue_vue_type_style_index_0_lang-136dcf40.js";import"./moment-b3d9eb32.js";import"./VCard.vue_vue_type_script_setup_true_lang-1043f916.js";import"./ClearButton.vue_vue_type_script_setup_true_lang-7aff0300.js";import"./additional-f442439b.js";import"./ClientOnly.vue_vue_type_script_lang-52200b90.js";const X=a=>(B("data-v-80820cad"),a=a(),U(),a),aa={class:"columns"},ea={class:"column"},ta={class:"is-size-5 has-text-weight-medium"},la={class:"box"},sa={class:"my-auto mr-3 is-size-6"},ia={class:"has-text-weight-bold"},na=X((()=>w("br",null,null,-1))),oa={class:"box"},ra={class:"columns is-multiline"},ua={class:"column is-6 is-flex is-align-items-center"},da={key:0,class:"has-text-danger"},_a=X((()=>w("span",null,"Реакция Хендельсона (бруцеллез)",-1))),pa={class:"column is-6 is-flex is-align-items-center"},ca={key:0,class:"has-text-danger"},ma=X((()=>w("span",null,"Титр антистафилококковый антител",-1))),va={class:"column is-narrow is-flex is-align-items-center"},ga=X((()=>w("br",null,null,-1))),ya=X((()=>w("p",{class:"has-text-danger"}," Красным цветом указаны показатели, заданные врачом-терапевтом, как обязательные для определения ",-1))),fa=Z(m({__name:"FormModal",props:{isOpen:{type:Boolean,default:!1},patient:null},emits:["update:isOpen","update:list","emergency-noticing"],setup(t,{emit:l}){const s=t,i=v(),{t:n}=g(),o=y(n("Serological_research_results")),r=y(!1),u=f({blood_samples_taken_date:[],analysis_date:[]}),d=h(new Date,"YYYY-MM-DD"),_=f({data:{date_analysis:d,heddelson:"",staphylococcal:"",hemolysis:!1,chilez:!1},required_fields:[]}),p=y(!1),c=y([{value:0,label:n("negative")},{value:1,label:n("positive")},{value:2,label:n("doubtful")}]);async function m(){var a,t,o,d,p,c;try{r.value=!0,await e(null==(t=null==(a=s.patient)?void 0:a.last_visit)?void 0:t.id,_.data),i.success(n("Data_saved_successfully")),l("update:list"),B()}catch(m){(null==(o=m.response)?void 0:o.data.error)?i.error(null==(d=m.response)?void 0:d.data.error):Object.assign(u,null==(c=null==(p=m.response)?void 0:p.data)?void 0:c.errors)}finally{r.value=!1}}function B(){_.data={date_analysis:d,heddelson:"",staphylococcal:"",hemolysis:!1,chilez:!1},Object.assign(u,{date_analysis:[]}),l("update:isOpen",!1)}function U(){l("emergency-noticing"),B()}return b((()=>{var a,e;return null==(e=null==(a=s.patient)?void 0:a.last_visit)?void 0:e.id}),(async e=>{if(e){const t=await a(e);Object.assign(_,t.result)}})),b([()=>_.data.hemolysis,()=>_.data.chilez],(async a=>{a.includes(!0)?p.value=!0:p.value=!1})),(a,e)=>{const l=W,s=K,i=J,n=R,u=x("Multiselect"),d=A,p=H,v=P,g=L,y=E,f=Y,h=T;return j(),V(h,{open:t.isOpen,size:"big",title:o.value,actions:"right",onClose:B},{content:k((()=>{var o,r;return[w("div",aa,[w("div",ea,[w("h5",ta,C(a.$t("Donation_code"))+": "+C(null==(r=null==(o=t.patient)?void 0:o.last_visit)?void 0:r.donation_code),1)])]),w("div",la,[$(i,{"flex-wrap":"wrap","row-gap":"2rem","justify-content":"space-between"},{default:k((()=>[$(l,{"flex-basis":"45%"},{default:k((()=>{var e,l,s;return[w("span",null,C(a.$t("Blood_sampling_date"))+": ",1),w("span",null,C(null==(s=null==(l=null==(e=t.patient)?void 0:e.last_visit)?void 0:l.blood_sample)?void 0:s.date),1)]})),_:1}),$(l,{"flex-basis":"45%"},{default:k((()=>{var e,l,s;return[w("span",null,C(a.$t("Blood_samples_taken_date"))+": ",1),w("span",null,C(null==(s=null==(l=null==(e=t.patient)?void 0:e.last_visit)?void 0:l.blood_sample)?void 0:s.chemical_date),1)]})),_:1}),$(l,{"flex-basis":"45%"},{default:k((()=>[w("span",sa,C(a.$t("Analysis_date")),1),$(s,{modelValue:_.data.date_analysis,"onUpdate:modelValue":e[0]||(e[0]=a=>_.data.date_analysis=a)},null,8,["modelValue"])])),_:1}),$(l,{"flex-basis":"45%"},{default:k((()=>{var e,l;return[w("h5",null,[w("span",ia,C(a.$t("Visit_stage")),1),w("span",null,C(null==(l=null==(e=t.patient)?void 0:e.last_visit)?void 0:l.stage),1)])]})),_:1})])),_:1})]),na,w("div",oa,[w("div",ra,[w("div",ua,[$(p,null,{default:k((()=>[$(n,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:k((()=>[_.required_fields.includes("heddelson")?(j(),z("span",da,"*")):D("",!0),_a])),_:1}),$(d,null,{default:k((()=>[$(u,{modelValue:_.data.heddelson,"onUpdate:modelValue":e[1]||(e[1]=a=>_.data.heddelson=a),options:c.value,placeholder:a.$t("Select"),style:{"min-width":"15rem"}},null,8,["modelValue","options","placeholder"])])),_:1})])),_:1})]),w("div",pa,[$(p,{class:"is-justify-content-end"},{default:k((()=>[$(n,{class:"is-size-6 my-auto mr-3 has-text-right"},{default:k((()=>[_.required_fields.includes("staphylococcal")?(j(),z("span",ca,"*")):D("",!0),ma])),_:1}),$(d,null,{default:k((()=>[$(v,{modelValue:_.data.staphylococcal,"onUpdate:modelValue":e[2]||(e[2]=a=>_.data.staphylococcal=a)},null,8,["modelValue"])])),_:1})])),_:1})]),w("div",va,[$(p,{horizontal:""},{default:k((()=>[$(d,null,{default:k((()=>[$(g,{modelValue:_.data.chilez,"onUpdate:modelValue":e[3]||(e[3]=a=>_.data.chilez=a),color:"primary",label:"Хилез"},null,8,["modelValue"])])),_:1})])),_:1}),$(p,{horizontal:"",style:{"margin-bottom":"0.75rem"}},{default:k((()=>[$(d,null,{default:k((()=>[$(g,{modelValue:_.data.hemolysis,"onUpdate:modelValue":e[4]||(e[4]=a=>_.data.hemolysis=a),color:"primary",label:"Гемолиз"},null,8,["modelValue"])])),_:1})])),_:1})])]),ga,ya])]})),action:k((()=>[$(y,{type:"button",color:"warning",outlined:"",onClick:U},{default:k((()=>[O(" Экстренное извещение ")])),_:1}),$(f,{loading:r.value,onClick:m},null,8,["loading"])])),_:1},8,["open","title"])}}}),[["__scopeId","data-v-80820cad"]]),ha=a=>(B("data-v-9ae2e07e"),a=a(),U(),a),ba={class:"page-content-inner"},xa={class:"columns mb-3"},ja={class:"column"},Va={class:"columns mt-1"},ka={class:"column"},wa={class:"columns"},Ca={class:"column is-12"},$a={key:0,class:"is-flex-grow-0",textContent:"#"},za={key:0,class:"flex-list-inner"},Da={key:1,class:"flex-list-inner"},Oa=ha((()=>w("img",{class:"light-image",src:_,alt:""},null,-1))),Ba=ha((()=>w("img",{class:"dark-image",src:p,alt:""},null,-1))),Ua=["onClick"],Fa=Z(m({__name:"index",setup(a){F(),v();const{t:e}=g(),_=G(),p=y(!1);Q().setPageTitle(e("Clinical-biochemical-laboratory")),q({title:`${e("Donor_list_for_blood_sampling")} - ${_.app.name}`});const m=f({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),h={orderNumber:{format:(a,e,t)=>`${t+1}`,cellClass:"is-flex-grow-0"},donation_code:{label:e("Donation_code"),format:(a,e)=>{var t;return null==(t=e.last_visit)?void 0:t.donation_code}},blood_sampling_date:{label:e("Blood_sampling_date"),format:(a,e)=>{var t,l;return null==(l=null==(t=e.last_visit)?void 0:t.blood_sample)?void 0:l.date}},name:{label:e("Donor_fullname")},birth_date:{label:e("Date-of-birth")},visit_type:{label:e("Visit_type"),format:(a,t)=>{var l,s;return(null==(l=t.last_visit)?void 0:l.visit_type)&&e(null==(s=t.last_visit)?void 0:s.visit_type)}},visit_date:{label:e("Visit_date"),format:(a,e)=>{var t;return null==(t=e.last_visit)?void 0:t.created_at}},donation_type:{label:e("Donation_type"),format:(a,e)=>{var t,l;return null==(l=null==(t=e.last_visit)?void 0:t.donation_type)?void 0:l.name}},visit_stage:{label:e("Visit_stage"),format:(a,e)=>{var t,l;return null==(l=null==(t=e.last_visit)?void 0:t.stage)?void 0:l.name}}},x=f({visit_type_id:[],donation_type_id:[],donation_code:[]}),O=f({visit_type_id:"",donation_type_id:null,donation_code:""}),B=y(null),U=y(!1),T=y(!1);async function Y(a){var e,l;try{p.value=!0,Object.assign(O,a);const e={...a,page:m.pagination.current_page},l=await t(e);Object.assign(m,l.result)}catch(s){Object.assign(x,null==(l=null==(e=s.response)?void 0:e.data)?void 0:l.errors)}finally{p.value=!1}}function E(a){x[a]=""}async function L(){await Y(O)}function P(){B.value=null}return b((()=>m.pagination.current_page),(async a=>{a&&await Y(O)}),{immediate:!0}),(a,e)=>{const t=c,v=l,g=r,y=i,f=u,b=n,O=d,F=o,q=s;return j(),z("div",ba,[w("div",xa,[w("div",ja,[$(t,{"with-icons":"",separator:"bullet",items:[{label:M(_).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:a.$t("Buck-laboratory")},{label:a.$t("Research-aimed-donations-list")}]},null,8,["items"])])]),w("div",Va,[w("div",ka,[$(v,{"is-loading":M(p),errors:M(x),onSearch:Y,onClearForm:L,onClearError:E},null,8,["is-loading","errors"])])]),w("div",wa,[w("div",Ca,[$(F,{columns:M(h),data:M(m).data,limit:M(m).pagination.per_page,total:M(m).pagination.total},{default:k((()=>[$(b,{rounded:"","no-header":!M(p)&&0===M(m).data.length},{"header-column":k((({column:a})=>["orderNumber"===a.key?(j(),z("span",$a)):D("",!0)])),body:k((()=>[M(p)?(j(),z("div",za,[(j(!0),z(I,null,N(M(m).pagination.per_page,(a=>(j(),z("div",{key:a,class:"flex-table-item"},[$(y,null,{default:k((()=>[$(g,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):D("",!0),0===M(m).data.length?(j(),z("div",Da,[$(f,{title:a.$t("No_data"),subtitle:a.$t("There_is_no_data_that_match_your_query"),class:"my-6"},{image:k((()=>[Oa,Ba])),_:1},8,["title","subtitle"])])):D("",!0)])),"body-cell":k((({row:a,column:e})=>["name"===e.key?(j(),z("a",{key:0,href:"javascript:;",class:"has-text-primary",onClick:e=>{return t=a,B.value=t,void(U.value=!0);var t}},C(a.first_name)+" "+C(a.last_name)+" "+C(a.father_name),9,Ua)):D("",!0)])),_:1},8,["no-header"]),M(m).data.length?(j(),V(O,{key:0,"current-page":M(m).pagination.current_page,"onUpdate:current-page":e[0]||(e[0]=a=>M(m).pagination.current_page=a),class:"mt-5","item-per-page":M(m).pagination.per_page,"total-items":M(m).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):D("",!0)])),_:1},8,["columns","data","limit","total"])])]),$(fa,{"is-open":M(U),"onUpdate:is-open":e[1]||(e[1]=a=>S(U)?U.value=a:null),patient:M(B),onClose:P,onEmergencyNoticing:e[2]||(e[2]=a=>T.value=!M(T))},null,8,["is-open","patient"]),$(q,{"is-open":M(T),"onUpdate:is-open":e[3]||(e[3]=a=>S(T)?T.value=a:null),patient:M(B)},null,8,["is-open","patient"])])}}}),[["__scopeId","data-v-9ae2e07e"]]);export{Fa as default};
