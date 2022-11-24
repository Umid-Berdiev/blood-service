import{_ as e}from"./VModal.vue_vue_type_style_index_0_lang.19c1c22e.js";import{_ as a}from"./SubmitButton.vue_vue_type_script_setup_true_lang.678df89f.js";import{_ as t}from"./VFlex.vue_vue_type_style_index_0_lang.93e9d589.js";import{_ as l}from"./VFlexItem.vue_vue_type_style_index_0_lang.164f06fb.js";import{_ as n,a as s}from"./VControl.96f035a3.js";import{m as i,_ as o}from"./IMaskDateInput.vue_vue_type_script_setup_true_lang.c6c10483.js";import{q as r,H as d,C as u,x as _,r as p,j as m,o as c,a as v,w as b,e as y,t as g,m as f,k as h,aI as V,K as $,i as x,E as j,J as w,c as k,aC as D,d as M,g as I,F as C,l as F,P as O,L as Y,M as P}from"./index.575ce5b2.js";import{c as S,b as B,f as U}from"./patient.92107f38.js";import{_ as z,a as L,b as A,c as q,d as E,e as N,f as G,g as H,h as T}from"./search-7-dark.86fcb46e.js";import{_ as W}from"./VCard.vue_vue_type_script_setup_true_lang.71b9ada2.js";import{_ as J}from"./VButton.vue_vue_type_style_index_0_lang.3cd1d2b4.js";import{_ as K}from"./lodash.0ccdf46e.js";import{_ as Q}from"./VBreadcrumb.vue_vue_type_style_index_0_lang.28133e38.js";import{u as R}from"./main.7ee96f0e.js";import{u as X}from"./viewWrapper.79c37ac0.js";import{_ as Z}from"./_plugin-vue_export-helper.cdc0426e.js";import"./VIMaskInput.vue_vue_type_script_lang.dc02f214.js";import"./VPlaceload.1a56b8cc.js";const ee={class:"columns"},ae={class:"column"},te={class:"is-size-5 has-text-weight-medium"},le={class:"column"},ne={class:"is-size-5 has-text-weight-medium"},se={class:"table"},ie=["onSubmit"],oe={class:"is-size-5 has-text-weight-medium"},re={class:"table is-fullwidth"},de={class:"help has-text-danger"},ue={class:"help has-text-danger"},_e=["value"],pe={class:"help has-text-danger"},me=i.__esModule?i.default:i,ce=r({__name:"PrimaryScreeningFormModal",props:{isOpen:{type:Boolean,default:!1},patient:null},emits:["update:isOpen","update:list"],setup(i,{emit:r}){const V=i,$=d(),{t:x}=u(),j=_(x("Primary_screening_form")),w=_(!1),k=_([{value:"o1",label:"O(I)"},{value:"a2",label:"A(II)"},{value:"b3",label:"B(III)"},{value:"ab4",label:"AB(IV)"}]),D=_([{value:"normal",label:x("Normal")},{value:"below_normal",label:x("Below_normal")},{value:"above_normal",label:x("Above_normal")}]),M=p({analysis_date:me().format("YYYY-MM-DD"),preliminary_blood_type:"o1",hemoglobin:"normal"}),I=p({analysis_date:[],preliminary_blood_type:[],hemoglobin:[]});async function C(){var e,a,t,l,n;try{w.value=!0,await S(null==(e=V.patient)?void 0:e.id,M),r("update:list"),F()}catch(s){(null==(a=s.response)?void 0:a.data.error)?$.error(null==(t=s.response)?void 0:t.data.error):Object.assign(I,null==(n=null==(l=s.response)?void 0:l.data)?void 0:n.errors)}finally{w.value=!1}}function F(){Object.assign(M,{analysis_date:me().format("YYYY-MM-DD"),preliminary_blood_type:"o1",hemoglobin:"normal"}),Object.assign(I,{analysis_date:[],preliminary_blood_type:[],hemoglobin:[]}),r("update:isOpen",!1)}return(r,d)=>{const u=o,_=n,p=s,V=m("Multiselect"),$=l,x=t,O=a,Y=e;return c(),v(Y,{open:i.isOpen,size:"big",title:j.value,actions:"right",onClose:F},{content:b((()=>{var e;return[y("div",ee,[y("div",ae,[y("h5",te,g(r.$t("Information_about_donor"))+" # "+g(i.patient.id),1)]),y("div",le,[y("h5",ne,g(r.$t("Visit_date"))+": "+g(i.patient.created_at),1)])]),y("table",se,[y("tbody",null,[y("tr",null,[y("th",null,g(r.$t("Last_name")),1),y("td",null,g(i.patient.last_name),1)]),y("tr",null,[y("th",null,g(r.$t("First_name")),1),y("td",null,g(i.patient.first_name),1)]),y("tr",null,[y("th",null,g(r.$t("Middlename")),1),y("td",null,g(i.patient.father_name),1)]),y("tr",null,[y("th",null,g(r.$t("Date-of-birth")),1),y("td",null,g(i.patient.birth_date),1)]),y("tr",null,[y("th",null,g(r.$t("Gender")),1),y("td",null,g(i.patient.gender),1)]),y("tr",null,[y("th",null,g(r.$t("Visit_type")),1),y("td",null,g(null==(e=i.patient.visit)?void 0:e.visit_type),1)]),y("tr",null,[y("th",null,g(r.$t("Donor_category")),1),y("td",null,g(i.patient.patient_category_id),1)]),y("tr",null,[y("th",null,g(r.$t("Passport_series_number")),1),y("td",null,g(i.patient.passport_series)+g(i.patient.passport_number)+", "+g(i.patient.issued_by)+", "+g(i.patient.when_issued),1)])])]),y("form",{id:"primary-screening-form",class:"modal-form",onSubmit:f(C,["prevent"])},[y("h5",oe,g(r.$t("Primary_screening_results")),1),y("table",re,[y("tbody",null,[y("tr",null,[y("th",null,g(r.$t("Date_of_an_analysis")),1),y("td",null,[h(p,{required:""},{default:b((()=>[h(_,null,{default:b((()=>[h(u,{modelValue:M.analysis_date,"onUpdate:modelValue":d[0]||(d[0]=e=>M.analysis_date=e)},null,8,["modelValue"]),y("p",de,g(I.analysis_date[0]),1)])),_:1})])),_:1})])]),y("tr",null,[y("th",null,g(r.$t("Preliminary_blood_type")),1),y("td",null,[h(p,{required:""},{default:b((()=>[h(_,null,{default:b((()=>[h(V,{modelValue:M.preliminary_blood_type,"onUpdate:modelValue":d[1]||(d[1]=e=>M.preliminary_blood_type=e),options:k.value},null,8,["modelValue","options"]),y("p",ue,g(I.analysis_date[0]),1)])),_:1})])),_:1})])]),y("tr",null,[y("th",null,g(r.$t("Hemoglobin")),1),y("td",null,[h(p,{required:""},{default:b((()=>[h(_,null,{default:b((()=>[h(x,null,{default:b((()=>[h($,{"flex-grow":1},{default:b((()=>[h(V,{modelValue:M.hemoglobin,"onUpdate:modelValue":d[2]||(d[2]=e=>M.hemoglobin=e),options:D.value},null,8,["modelValue","options"])])),_:1}),h($,null,{default:b((()=>[y("input",{class:"input",type:"text",value:r.$t("g/l"),style:{width:"3rem"}},null,8,_e)])),_:1})])),_:1}),y("p",pe,g(I.analysis_date[0]),1)])),_:1})])),_:1})])])])])],40,ie)]})),action:b((({close:e})=>[h(O,{loading:w.value,form:"primary-screening-form"},null,8,["loading"])])),_:1},8,["open","title"])}}}),ve=["onSubmit"],be={class:"columns"},ye={class:"column"},ge={class:"help has-text-danger"},fe={class:"column"},he={class:"help has-text-danger"},Ve={class:"column"},$e={class:"help has-text-danger"},xe={class:"navigation-buttons"},je={class:"buttons is-right"},we=K.isEmpty,ke=K.values,De=r({__name:"ForScreeningDonorsFilterForm",props:{isLoading:{type:Boolean},errors:null},emits:["search","clearError","clearForm"],async setup(e,{emit:a}){let t,l;const{t:i}=u(),o=d(),r=p({donor_category_id:"",visit_type_id:"",donation_type_id:""}),j=([t,l]=V((()=>B().then((e=>e.result)))),t=await t,l(),t),w=_([{value:"gratuitous",label:i("Gratuitous")},{value:"chargeable",label:i("Chargeable")}]),k=_([{id:1,name:i("Whole_blood_donation")},{id:2,name:i("Plasmapheresis")},{id:3,name:i("Plateletpheresis")}]),D=async()=>{ke(r).every(we)?o.error(i("Form_fields_are_empty")):a("search",r)},M=async()=>{Object.assign(r,{donor_category_id:"",visit_type_id:"",donation_type_id:""}),a("clearForm")};return(a,t)=>{const l=m("Multiselect"),i=n,o=s,d=J,u=W;return c(),v(u,{radius:"regular"},{default:b((()=>[y("form",{onSubmit:f(D,["prevent"])},[y("div",be,[y("div",ye,[h(o,{class:"is-curved-select",label:a.$t("Donor_categories")},{default:b((({id:n})=>[h(i,null,{default:b((()=>[h(l,{modelValue:r.donor_category_id,"onUpdate:modelValue":t[0]||(t[0]=e=>r.donor_category_id=e),attrs:{id:n},options:$(j),placeholder:a.$t("All"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"]),y("p",ge,g(e.errors.donor_category_id[0]),1)])),_:2},1024)])),_:1},8,["label"])]),y("div",fe,[h(o,{class:"is-curved-select",label:a.$t("Visit_type")},{default:b((({id:n})=>[h(i,null,{default:b((()=>[h(l,{modelValue:r.visit_type_id,"onUpdate:modelValue":t[1]||(t[1]=e=>r.visit_type_id=e),attrs:{id:n},options:w.value,placeholder:a.$t("All")},null,8,["modelValue","attrs","options","placeholder"]),y("p",he,g(e.errors.visit_type_id[0]),1)])),_:2},1024)])),_:1},8,["label"])]),y("div",Ve,[h(o,{class:"is-curved-select",label:a.$t("Donation_type")},{default:b((({id:n})=>[h(i,null,{default:b((()=>[h(l,{modelValue:r.donation_type_id,"onUpdate:modelValue":t[2]||(t[2]=e=>r.donation_type_id=e),attrs:{id:n},options:k.value,placeholder:a.$t("All"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"]),y("p",$e,g(e.errors.donation_type_id[0]),1)])),_:2},1024)])),_:1},8,["label"])])]),y("div",xe,[y("div",je,[h(d,{type:"button",color:"warning",bold:"",disabled:e.isLoading,tabindex:"0",onClick:M},{default:b((()=>[x(g(a.$t("Clear")),1)])),_:1},8,["disabled"]),h(d,{type:"submit",color:"primary",bold:"",loading:e.isLoading,tabindex:"0"},{default:b((()=>[x(g(a.$t("Search")),1)])),_:1},8,["loading"])])])],40,ve)])),_:1})}}}),Me=e=>(Y("data-v-bd1b9ead"),e=e(),P(),e),Ie={class:"page-content-inner"},Ce={class:"columns mb-3"},Fe={class:"column"},Oe={class:"columns mt-1"},Ye={class:"column"},Pe={class:"columns"},Se={class:"column is-12"},Be=["textContent"],Ue={key:0,class:"flex-list-inner"},ze={key:1,class:"flex-list-inner"},Le=Me((()=>y("img",{class:"light-image",src:H,alt:""},null,-1))),Ae=Me((()=>y("img",{class:"dark-image",src:T,alt:""},null,-1))),qe=["onClick"],Ee=K.isEmpty,Ne=Z(r({__name:"index",setup(e){j();const a=d(),{t:t}=u(),l=R(),n=_(!1);X().setPageTitle(t("Users_List")),w({title:`${t("Donors-list-for-primary-screening")} - ${l.app.name}`});const s=p({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),i=k({get:()=>s.pagination.current_page,set:async e=>{f.page=e,await Y(f)}}),o={orderNumber:{format:(e,a,t)=>`${t+1}`},name:{label:t("Fullname")},birth_date:{label:t("Date-of-birth")},visit_date:{label:t("Visit_date"),format:(e,a)=>{var t,l;return(null==(t=a.last_visit)?void 0:t.created_at)&&D(new Date(null==(l=a.last_visit)?void 0:l.created_at),"YYYY-MM-DD")}},visit_type:{label:t("Visit_type"),format:(e,a)=>{var l,n;return(null==(l=a.last_visit)?void 0:l.visit_type)&&t(null==(n=a.last_visit)?void 0:n.visit_type)}},medical_inspection_date:{label:t("Medical_inspection_date"),format:(e,a)=>{var l,n;return(null==(l=a.last_visit)?void 0:l.directed_by)&&t(null==(n=a.last_visit)?void 0:n.directed_by)}},medical_inspection_conclusion:{label:t("Medical_inspection_conclusion"),format:(e,a)=>{var t;return null==(t=a.last_visit)?void 0:t.personalized_donation}},linked_donation_number:{label:t("Linked_donation_number"),format:(e,a)=>{var t;return null==(t=a.last_visit)?void 0:t.personalized_donation}},donation_type:{label:t("Donation_type"),format:(e,a)=>{var t;return null==(t=a.last_visit)?void 0:t.personalized_donation}},blood_component_amount:{label:t("Blood_component_amount"),format:(e,a)=>{var t;return null==(t=a.status)?void 0:t.name}}},r=_(),m=p({start_date:[],end_date:[],donor_category_id:[],visit_type_id:[],donation_type_id:[]}),f=p({page:1}),V=p({}),x=_(!1);async function Y(e){var l,i;try{Object.assign(f,e),n.value=!0;const l=await U(e);Object.assign(s,l.result),Ee(l.result.data)?a.warning(t("Data_not_found")):a.success(`${t("Found")}: ${l.result.pagination.total} ${t("records")}`)}catch(o){Object.assign(m,null==(i=null==(l=o.response)?void 0:l.data)?void 0:i.errors)}finally{n.value=!1}}function P(e){m[e]=""}async function S(){s.data=[]}return(e,a)=>{const t=Q,d=De,u=z,_=L,p=A,f=q,j=E,w=N,k=G,D=ce;return c(),M("div",Ie,[y("div",Ce,[y("div",Fe,[h(t,{"with-icons":"",separator:"bullet",items:[{label:$(l).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:e.$t("Screening")},{label:e.$t("Donors-list-for-primary-screening")}]},null,8,["items"])])]),y("div",Oe,[y("div",Ye,[h(d,{"is-loading":n.value,errors:m,onSearch:Y,onClearForm:S,onClearError:P},null,8,["is-loading","errors"])])]),y("div",Pe,[y("div",Se,[h(k,{columns:$(o),data:s.data,limit:s.pagination.per_page,total:s.pagination.total},{default:b((()=>[h(j,{rounded:"","no-header":!n.value&&0===s.data.length},{"header-column":b((({column:a})=>["orderNumber"===a.key?(c(),M("span",{key:0,textContent:g(e.$t("Donor_register_number"))},null,8,Be)):I("",!0)])),body:b((()=>[n.value?(c(),M("div",Ue,[(c(!0),M(C,null,F(s.pagination.per_page,(e=>(c(),M("div",{key:e,class:"flex-table-item"},[h(_,null,{default:b((()=>[h(u,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):I("",!0),0===s.data.length?(c(),M("div",ze,[h(p,{title:"No matches",subtitle:"There is no data that match your query.",class:"my-6"},{image:b((()=>[Le,Ae])),_:1})])):I("",!0)])),"body-row-pre":b((({row:e})=>[e.id===r.value?(c(),v(f,{key:0,size:"tiny",class:"m-0 mb-1"})):I("",!0)])),"body-cell":b((({row:e,column:a})=>["name"===a.key?(c(),M("button",{key:0,class:"button button-link",onClick:a=>{return t=e,Object.assign(V,t),void(x.value=!0);var t}},g(e.first_name)+" "+g(e.last_name)+" "+g(e.father_name),9,qe)):I("",!0)])),_:1},8,["no-header"]),s.data.length?(c(),v(w,{key:0,"current-page":$(i),"onUpdate:current-page":a[0]||(a[0]=e=>O(i)?i.value=e:null),class:"mt-5","item-per-page":s.pagination.per_page,"total-items":s.pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):I("",!0)])),_:1},8,["columns","data","limit","total"])])]),h(D,{"is-open":x.value,"onUpdate:is-open":a[1]||(a[1]=e=>x.value=e),patient:V},null,8,["is-open","patient"])])}}}),[["__scopeId","data-v-bd1b9ead"]]);export{Ne as default};