import{_ as a}from"./VModal.vue_vue_type_style_index_0_lang.086b7620.js";import{_ as e}from"./SubmitButton.vue_vue_type_script_setup_true_lang.26d507c1.js";import{_ as t}from"./VFlex.vue_vue_type_style_index_0_lang.872f6df6.js";import{_ as l,a as o}from"./VControl.93d0bd46.js";import{_ as n}from"./IMaskDateInput.vue_vue_type_script_setup_true_lang.9f2d62c3.js";import{_ as i}from"./VFlexItem.vue_vue_type_style_index_0_lang.e28ce857.js";import{q as s,H as r,C as d,x as _,r as u,o as p,a as m,w as c,e as b,t as f,m as v,k as g,i as y,j as h,E as x,J as j,c as V,a7 as $,d as Y,K as D,g as w,F as M,l as k,S as C,L as F,M as O}from"./index.0abd75ed.js";import{m as S}from"./moment.5a333ce6.js";import{c as B,f as z}from"./patient.051aee9f.js";import{_ as I,a as U,b as L,c as P,d as E,e as q,f as N,g as A}from"./search-7-dark.c0e73d3f.js";import{_ as G}from"./VProgress.vue_vue_type_style_index_0_lang.f7b30e9f.js";import{_ as T}from"./VCard.vue_vue_type_script_setup_true_lang.f34ac11d.js";import{_ as W}from"./VButton.vue_vue_type_style_index_0_lang.31eed629.js";import{_ as H}from"./lodash.55c10af6.js";import{_ as J}from"./VBreadcrumb.vue_vue_type_style_index_0_lang.f307b05f.js";import{u as K}from"./main.e5d49235.js";import{u as Q}from"./viewWrapper.04cc5e32.js";import{_ as R}from"./_plugin-vue_export-helper.cdc0426e.js";import"./VIMaskInput.vue_vue_type_script_lang.931d2ba1.js";import"./VPlaceload.5ce3c270.js";const X={class:"columns"},Z={class:"column"},aa={class:"is-size-5 has-text-weight-medium"},ea={class:"column"},ta={class:"is-size-5 has-text-weight-medium"},la={class:"table"},oa=["onSubmit"],na={class:"is-size-5 has-text-weight-medium"},ia=b("br",null,null,-1),sa={class:"help has-text-danger"},ra=b("br",null,null,-1),da={class:"table is-fullwidth"},_a={class:"help has-text-danger"},ua={class:"help has-text-danger"},pa=S.__esModule?S.default:S,ma=s({__name:"BloodSamplingFormModal",props:{isOpen:{type:Boolean,default:!1},patient:null},emits:["update:isOpen","update:list"],setup(s,{emit:h}){const x=s,j=r(),{t:V}=d(),$=_(V("Sampling_data_entry_form")),Y=_(!1),D=u({blood_sampling_date:pa().format("YYYY-MM-DD"),bloodborne_infections_laboratory_date:pa().format("YYYY-MM-DD"),clinical_biochemical_laboratory_date:pa().format("YYYY-MM-DD")}),w=u({blood_sampling_date:[],bloodborne_infections_laboratory_date:[],clinical_biochemical_laboratory_date:[]});async function M(){var a,e,t,l,o;try{Y.value=!0,await B(null==(a=x.patient)?void 0:a.id,D),h("update:list"),k()}catch(n){(null==(e=n.response)?void 0:e.data.error)?j.error(null==(t=n.response)?void 0:t.data.error):Object.assign(w,null==(o=null==(l=n.response)?void 0:l.data)?void 0:o.errors)}finally{Y.value=!1}}function k(){Object.assign(D,{blood_sampling_date:pa().format("YYYY-MM-DD"),bloodborne_infections_laboratory_date:pa().format("YYYY-MM-DD"),clinical_biochemical_laboratory_date:pa().format("YYYY-MM-DD")}),Object.assign(w,{blood_sampling_date:[],bloodborne_infections_laboratory_date:[],clinical_biochemical_laboratory_date:[]}),h("update:isOpen",!1)}return(r,d)=>{const _=i,u=n,h=l,x=o,j=t,V=e,C=a;return p(),m(C,{open:s.isOpen,size:"big",title:$.value,actions:"right",onClose:k},{content:c((()=>{var a;return[b("div",X,[b("div",Z,[b("h5",aa,f(r.$t("Donor_information"))+" # "+f(s.patient.id),1)]),b("div",ea,[b("h5",ta,f(r.$t("Visit_date"))+": "+f(s.patient.created_at),1)])]),b("table",la,[b("tbody",null,[b("tr",null,[b("th",null,f(r.$t("Last_name")),1),b("td",null,f(s.patient.last_name),1)]),b("tr",null,[b("th",null,f(r.$t("First_name")),1),b("td",null,f(s.patient.first_name),1)]),b("tr",null,[b("th",null,f(r.$t("Middlename")),1),b("td",null,f(s.patient.father_name),1)]),b("tr",null,[b("th",null,f(r.$t("Date-of-birth")),1),b("td",null,f(s.patient.birth_date),1)]),b("tr",null,[b("th",null,f(r.$t("Gender")),1),b("td",null,f(s.patient.gender),1)]),b("tr",null,[b("th",null,f(r.$t("Visit_type")),1),b("td",null,f(null==(a=s.patient.visit)?void 0:a.visit_type),1)]),b("tr",null,[b("th",null,f(r.$t("Donor_category")),1),b("td",null,f(s.patient.patient_category_id),1)]),b("tr",null,[b("th",null,f(r.$t("Passport_series_number")),1),b("td",null,f(s.patient.passport_series)+f(s.patient.passport_number)+", "+f(s.patient.issued_by)+", "+f(s.patient.when_issued),1)])])]),b("form",{id:"blood-sampling-form",class:"modal-form",onSubmit:v(M,["prevent"])},[b("h5",na,f(r.$t("Information_about_blood_sampling")),1),ia,g(j,{"column-gap":"1rem","align-items":"center"},{default:c((()=>[g(_,null,{default:c((()=>[y(f(r.$t("Blood_sampling_date")),1)])),_:1}),g(_,null,{default:c((()=>[g(x,null,{default:c((()=>[g(h,null,{default:c((()=>[g(u,{modelValue:D.blood_sampling_date,"onUpdate:modelValue":d[0]||(d[0]=a=>D.blood_sampling_date=a)},null,8,["modelValue"]),b("p",sa,f(w.blood_sampling_date[0]),1)])),_:1})])),_:1})])),_:1})])),_:1}),ra,b("table",da,[b("thead",null,[b("tr",null,[b("th",null,f(r.$t("Blood_sample_transferred_where")),1),b("th",null,f(r.$t("Blood_sample_transferred_when")),1)])]),b("tbody",null,[b("tr",null,[b("td",null,f(r.$t("Bloodborne-infections-laboratory")),1),b("td",null,[g(x,{required:""},{default:c((()=>[g(h,null,{default:c((()=>[g(u,{modelValue:D.bloodborne_infections_laboratory_date,"onUpdate:modelValue":d[1]||(d[1]=a=>D.bloodborne_infections_laboratory_date=a)},null,8,["modelValue"]),b("p",_a,f(w.bloodborne_infections_laboratory_date[0]),1)])),_:1})])),_:1})])]),b("tr",null,[b("td",null,f(r.$t("Clinical-biochemical-laboratory")),1),b("td",null,[g(x,{required:""},{default:c((()=>[g(h,null,{default:c((()=>[g(u,{modelValue:D.clinical_biochemical_laboratory_date,"onUpdate:modelValue":d[2]||(d[2]=a=>D.clinical_biochemical_laboratory_date=a)},null,8,["modelValue"]),b("p",ua,f(w.clinical_biochemical_laboratory_date[0]),1)])),_:1})])),_:1})])])])])],40,oa)]})),action:c((({close:a})=>[g(V,{loading:Y.value,form:"blood-sampling-form"},null,8,["loading"])])),_:1},8,["open","title"])}}}),ca=["onSubmit"],ba={class:"columns"},fa={class:"column is-3"},va={class:"help has-text-danger"},ga={class:"column is-3"},ya={class:"help has-text-danger"},ha={class:"navigation-buttons"},xa={class:"buttons is-right"},ja=H.isEmpty,Va=H.values,$a=s({__name:"BloodSamplingFilterForm",props:{isLoading:{type:Boolean},errors:null},emits:["search","clearError","clearForm"],setup(a,{emit:e}){const{t:t}=d(),n=r(),i=u({visit_type_id:"",donation_type_id:""}),s=_([{value:"gratuitous",label:t("Gratuitous")},{value:"chargeable",label:t("Chargeable")}]),x=_([{id:1,name:t("Whole_blood_donation")},{id:2,name:t("Plasmapheresis")},{id:3,name:t("Plateletpheresis")}]),j=async()=>{Va(i).every(ja)?n.error(t("Form_fields_are_empty")):e("search",i)},V=async()=>{Object.assign(i,{visit_type_id:"",donation_type_id:""}),e("clearForm")};return(e,t)=>{const n=h("Multiselect"),r=l,d=o,_=W,u=T;return p(),m(u,{radius:"regular"},{default:c((()=>[b("form",{onSubmit:v(j,["prevent"])},[b("div",ba,[b("div",fa,[g(d,{class:"is-curved-select",label:e.$t("Visit_type")},{default:c((({id:l})=>[g(r,null,{default:c((()=>[g(n,{modelValue:i.visit_type_id,"onUpdate:modelValue":t[0]||(t[0]=a=>i.visit_type_id=a),attrs:{id:l},options:s.value,placeholder:e.$t("All")},null,8,["modelValue","attrs","options","placeholder"]),b("p",va,f(a.errors.visit_type_id[0]),1)])),_:2},1024)])),_:1},8,["label"])]),b("div",ga,[g(d,{class:"is-curved-select",label:e.$t("Donation_type")},{default:c((({id:l})=>[g(r,null,{default:c((()=>[g(n,{modelValue:i.donation_type_id,"onUpdate:modelValue":t[1]||(t[1]=a=>i.donation_type_id=a),attrs:{id:l},options:x.value,placeholder:e.$t("All"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"]),b("p",ya,f(a.errors.donation_type_id[0]),1)])),_:2},1024)])),_:1},8,["label"])])]),b("div",ha,[b("div",xa,[g(_,{type:"button",color:"warning",bold:"",disabled:a.isLoading,tabindex:"0",onClick:V},{default:c((()=>[y(f(e.$t("Clear")),1)])),_:1},8,["disabled"]),g(_,{type:"submit",color:"primary",bold:"",loading:a.isLoading,tabindex:"0"},{default:c((()=>[y(f(e.$t("Search")),1)])),_:1},8,["loading"])])])],40,ca)])),_:1})}}}),Ya=a=>(F("data-v-a5f9f810"),a=a(),O(),a),Da={class:"page-content-inner"},wa={class:"columns mb-3"},Ma={class:"column"},ka={class:"columns mt-1"},Ca={class:"column"},Fa={class:"columns"},Oa={class:"column is-12"},Sa={key:0,class:"is-flex-grow-0",textContent:"#"},Ba={key:0,class:"flex-list-inner"},za={key:1,class:"flex-list-inner"},Ia=Ya((()=>b("img",{class:"light-image",src:N,alt:""},null,-1))),Ua=Ya((()=>b("img",{class:"dark-image",src:A,alt:""},null,-1))),La=["onClick"],Pa=H.isEmpty,Ea=R(s({__name:"index",setup(a){x();const e=r(),{t:t}=d(),l=K(),o=_(!1);Q().setPageTitle(t("Donation")),j({title:`${t("Donor_list_for_blood_sampling")} - ${l.app.name}`});const n=u({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),i=V({get:()=>n.pagination.current_page,set:async a=>{h.page=a,await S(h)}}),s={orderNumber:{format:(a,e,t)=>`${t+1}`,cellClass:"is-flex-grow-0"},name:{label:t("Fullname")},birth_date:{label:t("Date-of-birth")},visit_date:{label:t("Visit_date"),format:(a,e)=>{var t,l;return(null==(t=e.last_visit)?void 0:t.created_at)&&$(new Date(null==(l=e.last_visit)?void 0:l.created_at),"YYYY-MM-DD")}},visit_type:{label:t("Visit_type"),format:(a,e)=>{var l,o;return(null==(l=e.last_visit)?void 0:l.visit_type)&&t(null==(o=e.last_visit)?void 0:o.visit_type)}},donation_number:{label:t("Donation_number"),format:(a,e)=>{var t;return null==(t=e.last_visit)?void 0:t.personalized_donation}},donation_type:{label:t("Donation_type"),format:(a,e)=>{var t;return null==(t=e.last_visit)?void 0:t.personalized_donation}}},v=_(),y=u({visit_type_id:[],donation_type_id:[]}),h=u({page:1}),F=u({}),O=_(!1);async function S(a){var l,i;try{Object.assign(h,a),o.value=!0;const l=await z(a);Object.assign(n,l.result),Pa(l.result.data)?e.warning(t("Data_not_found")):e.success(`${t("Found")}: ${l.result.pagination.total} ${t("records")}`)}catch(s){Object.assign(y,null==(i=null==(l=s.response)?void 0:l.data)?void 0:i.errors)}finally{o.value=!1}}function B(a){y[a]=""}async function N(){n.data=[]}return(a,e)=>{const t=J,r=$a,d=I,_=U,u=L,h=G,x=P,j=E,V=q,$=ma;return p(),Y("div",Da,[b("div",wa,[b("div",Ma,[g(t,{"with-icons":"",separator:"bullet",items:[{label:D(l).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:a.$t("Screening")},{label:a.$t("Donor_list_for_blood_sampling")}]},null,8,["items"])])]),b("div",ka,[b("div",Ca,[g(r,{"is-loading":o.value,errors:y,onSearch:S,onClearForm:N,onClearError:B},null,8,["is-loading","errors"])])]),b("div",Fa,[b("div",Oa,[g(V,{columns:D(s),data:n.data,limit:n.pagination.per_page,total:n.pagination.total},{default:c((()=>[g(x,{rounded:"","no-header":!o.value&&0===n.data.length},{"header-column":c((({column:a})=>["orderNumber"===a.key?(p(),Y("span",Sa)):w("",!0)])),body:c((()=>[o.value?(p(),Y("div",Ba,[(p(!0),Y(M,null,k(n.pagination.per_page,(a=>(p(),Y("div",{key:a,class:"flex-table-item"},[g(_,null,{default:c((()=>[g(d,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):w("",!0),0===n.data.length?(p(),Y("div",za,[g(u,{title:"No matches",subtitle:"There is no data that match your query.",class:"my-6"},{image:c((()=>[Ia,Ua])),_:1})])):w("",!0)])),"body-row-pre":c((({row:a})=>[a.id===v.value?(p(),m(h,{key:0,size:"tiny",class:"m-0 mb-1"})):w("",!0)])),"body-cell":c((({row:a,column:e})=>["name"===e.key?(p(),Y("a",{key:0,href:"javascript:;",class:"has-text-primary",onClick:e=>{return t=a,Object.assign(F,t),void(O.value=!0);var t}},f(a.first_name)+" "+f(a.last_name)+" "+f(a.father_name),9,La)):w("",!0)])),_:1},8,["no-header"]),n.data.length?(p(),m(j,{key:0,"current-page":D(i),"onUpdate:current-page":e[0]||(e[0]=a=>C(i)?i.value=a:null),class:"mt-5","item-per-page":n.pagination.per_page,"total-items":n.pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):w("",!0)])),_:1},8,["columns","data","limit","total"])])]),g($,{"is-open":O.value,"onUpdate:is-open":e[1]||(e[1]=a=>O.value=a),patient:F},null,8,["is-open","patient"])])}}}),[["__scopeId","data-v-a5f9f810"]]);export{Ea as default};
