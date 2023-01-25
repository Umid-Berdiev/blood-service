import{_ as e}from"./VModal.vue_vue_type_style_index_0_lang-7e83e39e.js";import{_ as t}from"./SubmitButton.vue_vue_type_script_setup_true_lang-6ac3b45a.js";import{_ as a}from"./VFlex.vue_vue_type_style_index_0_lang-71ef6e79.js";import{_ as l}from"./VFlexItem.vue_vue_type_style_index_0_lang-fd71fae1.js";import{_ as n}from"./VInput.vue_vue_type_script_setup_true_lang-705097fe.js";import{_ as s,a as o}from"./VControl-786e135c.js";import{_ as i}from"./IMaskDateInput.vue_vue_type_script_setup_true_lang-3b830ff4.js";import{q as r,H as u,C as d,x as _,r as p,A as m,y as c,j as v,o as y,a as g,w as b,e as f,t as h,K as x,a7 as $,m as j,k as V,i as w,f as D,E as M,J as Y,c as k,a8 as C,d as F,g as O,F as S,l as P,S as U,L as I,M as B}from"./index-e3f64991.js";import{m as L}from"./moment-e3587e24.js";import{g as q}from"./additional-14b8c762.js";import{s as A,p as z}from"./index-5786dacc.js";import{_ as N,a as E,b as H}from"./VFlexTable.vue_vue_type_style_index_0_lang-963b0d23.js";import{_ as T,a as G,b as W,c as J,d as K}from"./search-7-dark-47707eb8.js";import{_ as Z}from"./VCard.vue_vue_type_script_setup_true_lang-31199b72.js";import{_ as Q}from"./VButton.vue_vue_type_style_index_0_lang-43587e05.js";import{p as R}from"./patient-937e223c.js";import{_ as X}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-09742679.js";import{u as ee}from"./main-7469f747.js";import{u as te}from"./viewWrapper-5fb27d85.js";import{_ as ae}from"./_plugin-vue_export-helper-1b428a4d.js";import"./VIMaskInput.vue_vue_type_script_lang-112dd082.js";import"./VPlaceload-d2cb982c.js";const le={class:"columns"},ne={class:"column"},se={class:"is-size-5 has-text-weight-medium ml-3"},oe={class:"column"},ie={class:"is-size-5 has-text-weight-medium"},re={class:"table"},ue=["onSubmit"],de={class:"is-size-5 has-text-weight-medium ml-3"},_e={class:"table is-fullwidth"},pe={class:"help has-text-danger"},me={class:"help has-text-danger"},ce={class:"help has-text-danger"},ve=L.__esModule?L.default:L,ye=r({__name:"PrimaryScreeningFormModal",props:{isOpen:{type:Boolean,default:!1},patient:null},emits:["update:isOpen","update:list"],setup(r,{emit:M}){const Y=r,k=u(),{t:C}=d(),F=_(C("Primary_screening_form")),O=_(!1),S=_([]);_([{value:"normal",label:C("Normal")},{value:"below_normal",label:C("Below_normal")},{value:"above_normal",label:C("Above_normal")}]);const P=p({date:ve().format("YYYY-MM-DD"),blood_type_id:null,type:"normal",value:null}),U=p({date:[],blood_type_id:[],type:[],value:[]});async function I(){var e,t,a,l,n,s;try{O.value=!0,await A(null==(t=null==(e=Y.patient)?void 0:e.last_visit)?void 0:t.id,P),k.success(C("Data_saved_successfully")),M("update:list"),B()}catch(o){(null==(a=o.response)?void 0:a.data.error)?k.error(null==(l=o.response)?void 0:l.data.error):Object.assign(U,null==(s=null==(n=o.response)?void 0:n.data)?void 0:s.errors)}finally{O.value=!1}}function B(){Object.assign(P,{date:ve().format("YYYY-MM-DD"),blood_type_id:null,type:"normal",value:""}),Object.assign(U,{date:[],blood_type_id:[],type:[],value:[]}),M("update:isOpen",!1)}return m((async()=>{const e=await q();S.value=e.result})),c((()=>{var e,t;return null==(t=null==(e=Y.patient)?void 0:e.last_visit)?void 0:t.primary_screening_result}),(e=>{e&&Object.assign(P,e)})),c((()=>P.value),(e=>{var t,a;let l="normal";e&&("male"===(null==(t=Y.patient)?void 0:t.gender)?e<128?l="below_normal":e>160&&(l="above_normal"):"female"===(null==(a=Y.patient)?void 0:a.gender)?e<120?l="below_normal":e>140&&(l="above_normal"):l="normal"),P.type=l})),(u,d)=>{const _=i,p=s,m=o,c=v("Multiselect"),M=n,Y=l,k=a,C=t,L=e;return y(),g(L,{open:r.isOpen,size:"big",title:F.value,actions:"right",onClose:B},{content:b((()=>{var e,t,a,l,n,s,o,i;return[f("div",le,[f("div",ne,[f("h5",se,h(u.$t("Information_about_donor"))+" # "+h(null==(e=r.patient.last_visit)?void 0:e.donation_code),1)]),f("div",oe,[f("h5",ie,h(u.$t("Visit_date"))+": "+h(x($)(new Date(r.patient.created_at),"YYYY-MM-DD")),1)])]),f("table",re,[f("tbody",null,[f("tr",null,[f("th",null,h(u.$t("Last_name")),1),f("td",null,h(r.patient.last_name),1)]),f("tr",null,[f("th",null,h(u.$t("First_name")),1),f("td",null,h(r.patient.first_name),1)]),f("tr",null,[f("th",null,h(u.$t("Middlename")),1),f("td",null,h(r.patient.father_name),1)]),f("tr",null,[f("th",null,h(u.$t("Date-of-birth")),1),f("td",null,h(r.patient.birth_date),1)]),f("tr",null,[f("th",null,h(u.$t("Gender")),1),f("td",null,h(r.patient.gender&&u.$t(r.patient.gender)),1)]),f("tr",null,[f("th",null,h(u.$t("Visit_type")),1),f("td",null,h((null==(t=r.patient.last_visit)?void 0:t.visit_type)&&u.$t(null==(a=r.patient.last_visit)?void 0:a.visit_type)),1)]),f("tr",null,[f("th",null,h(u.$t("Donation_type")),1),f("td",null,h((null==(n=null==(l=r.patient.last_visit)?void 0:l.donation_type)?void 0:n.name)&&u.$t(null==(o=null==(s=r.patient.last_visit)?void 0:s.donation_type)?void 0:o.name)),1)]),f("tr",null,[f("th",null,h(u.$t("Donor_category")),1),f("td",null,h(null==(i=r.patient.category)?void 0:i.name),1)]),f("tr",null,[f("th",null,h(u.$t("Passport_series_number")),1),f("td",null,h(r.patient.passport_series)+h(r.patient.passport_number)+", "+h(r.patient.issued_by)+", "+h(r.patient.when_issued),1)])])]),f("form",{id:"primary-screening-form",class:"modal-form",onSubmit:j(I,["prevent"])},[f("h5",de,h(u.$t("Primary_screening_results")),1),f("table",_e,[f("tbody",null,[f("tr",null,[f("th",null,h(u.$t("Date_of_an_analysis")),1),f("td",null,[V(m,{required:""},{default:b((()=>[V(p,null,{default:b((()=>[V(_,{modelValue:P.date,"onUpdate:modelValue":d[0]||(d[0]=e=>P.date=e)},null,8,["modelValue"]),f("p",pe,h(U.date[0]),1)])),_:1})])),_:1})])]),f("tr",null,[f("th",null,h(u.$t("Preliminary_blood_type")),1),f("td",null,[V(m,{required:""},{default:b((()=>[V(p,null,{default:b((()=>[V(c,{modelValue:P.blood_type_id,"onUpdate:modelValue":d[1]||(d[1]=e=>P.blood_type_id=e),options:S.value,placeholder:u.$t("Select"),"value-prop":"id"},null,8,["modelValue","options","placeholder"]),f("p",me,h(U.blood_type_id[0]),1)])),_:1})])),_:1})])]),f("tr",null,[f("th",null,h(u.$t("Hemoglobin")),1),f("td",null,[V(m,{required:""},{default:b((()=>[V(p,null,{default:b((()=>[V(k,{"column-gap":"1rem","align-items":"center"},{default:b((()=>[V(Y,null,{default:b((()=>[V(M,{modelValue:P.value,"onUpdate:modelValue":d[2]||(d[2]=e=>P.value=e),type:"number",min:"0"},null,8,["modelValue"])])),_:1}),V(Y,null,{default:b((()=>[w(h(u.$t("g/l")),1)])),_:1}),V(Y,{"flex-grow":1},{default:b((()=>[V(M,{class:D(["normal"===P.type&&"has-text-primary",("below_normal"===P.type||"above_normal"===P.type)&&"has-text-danger"]),value:P.type,disabled:""},null,8,["class","value"])])),_:1})])),_:1}),f("p",ce,h(U.value[0]),1)])),_:1})])),_:1})])])])])],40,ue)]})),action:b((()=>[V(C,{loading:O.value,form:"primary-screening-form"},null,8,["loading"])])),_:1},8,["open","title"])}}}),ge=["onSubmit"],be={class:"columns"},fe={class:"column"},he={class:"help has-text-danger"},xe={class:"column"},$e={class:"help has-text-danger"},je={class:"column"},Ve={class:"help has-text-danger"},we={class:"navigation-buttons"},De={class:"buttons is-right"},Me=r({__name:"ForScreeningDonorsFilterForm",props:{isLoading:{type:Boolean},errors:null},emits:["search","clearError","clearForm"],setup(e,{emit:t}){const{t:a}=d();u();const l=p({donor_category_id:"",visit_type:"",donation_type_id:""}),n=_([]),i=_([{value:"gratuitous",label:a("Gratuitous")},{value:"chargeable",label:a("Chargeable")}]),r=_([{id:1,name:a("Whole_blood_donation")},{id:2,name:a("Plasmapheresis")},{id:3,name:a("Plateletpheresis")}]);m((async()=>{n.value=await R().then((e=>e.result))}));const c=async()=>{t("search",l)},$=async()=>{Object.assign(l,{donor_category_id:"",visit_type:"",donation_type_id:""}),t("clearForm")};return(t,a)=>{const u=v("Multiselect"),d=s,_=o,p=Q,m=Z;return y(),g(m,null,{default:b((()=>[f("form",{onSubmit:j(c,["prevent"])},[f("div",be,[f("div",fe,[V(_,{class:"is-curved-select",label:t.$t("Donor_categories")},{default:b((({id:s})=>[V(d,null,{default:b((()=>[V(u,{modelValue:x(l).donor_category_id,"onUpdate:modelValue":a[0]||(a[0]=e=>x(l).donor_category_id=e),attrs:{id:s},options:x(n),placeholder:t.$t("All"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"]),f("p",he,h(e.errors.donor_category_id[0]),1)])),_:2},1024)])),_:1},8,["label"])]),f("div",xe,[V(_,{class:"is-curved-select",label:t.$t("Visit_type")},{default:b((({id:n})=>[V(d,null,{default:b((()=>[V(u,{modelValue:x(l).visit_type,"onUpdate:modelValue":a[1]||(a[1]=e=>x(l).visit_type=e),attrs:{id:n},options:x(i),placeholder:t.$t("All")},null,8,["modelValue","attrs","options","placeholder"]),f("p",$e,h(e.errors.visit_type[0]),1)])),_:2},1024)])),_:1},8,["label"])]),f("div",je,[V(_,{class:"is-curved-select",label:t.$t("Donation_type")},{default:b((({id:n})=>[V(d,null,{default:b((()=>[V(u,{modelValue:x(l).donation_type_id,"onUpdate:modelValue":a[2]||(a[2]=e=>x(l).donation_type_id=e),attrs:{id:n},options:x(r),placeholder:t.$t("All"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"]),f("p",Ve,h(e.errors.donation_type_id[0]),1)])),_:2},1024)])),_:1},8,["label"])])]),f("div",we,[f("div",De,[V(p,{type:"button",color:"warning",bold:"",disabled:e.isLoading,tabindex:"0",onClick:$},{default:b((()=>[w(h(t.$t("Clear")),1)])),_:1},8,["disabled"]),V(p,{type:"submit",color:"primary",bold:"",loading:e.isLoading,tabindex:"0"},{default:b((()=>[w(h(t.$t("Search")),1)])),_:1},8,["loading"])])])],40,ge)])),_:1})}}}),Ye=e=>(I("data-v-a888c163"),e=e(),B(),e),ke={class:"page-content-inner"},Ce={class:"columns mb-3"},Fe={class:"column"},Oe={class:"columns mt-1"},Se={class:"column"},Pe={class:"columns"},Ue={class:"column is-12"},Ie=["textContent"],Be={key:0,class:"flex-list-inner"},Le={key:1,class:"flex-list-inner"},qe=Ye((()=>f("img",{class:"light-image",src:J,alt:""},null,-1))),Ae=Ye((()=>f("img",{class:"dark-image",src:K,alt:""},null,-1))),ze=["onClick"],Ne=ae(r({__name:"index",async setup(e){let t,a;M(),u();const{t:l}=d(),n=ee(),s=_(!1);te().setPageTitle(l("Screening")),Y({title:`${l("Donors-list-for-primary-screening")} - ${n.app.name}`});const o=p({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),i=k({get:()=>o.pagination.current_page,set:async e=>{c.page=e,await w(c)}}),r={orderNumber:{format:(e,t,a)=>`${a+1}`},name:{label:l("Fullname")},birth_date:{label:l("Date-of-birth")},visit_date:{label:l("Visit_date"),format:(e,t)=>{var a,l;return(null==(a=t.last_visit)?void 0:a.created_at)&&$(new Date(null==(l=t.last_visit)?void 0:l.created_at),"YYYY-MM-DD")}},visit_type:{label:l("Visit_type"),format:(e,t)=>{var a,n;return(null==(a=t.last_visit)?void 0:a.visit_type)&&l(null==(n=t.last_visit)?void 0:n.visit_type)}},donation_type:{label:l("Donation_type"),format:(e,t)=>{var a,l;return null==(l=null==(a=t.last_visit)?void 0:a.donation_type)?void 0:l.name}},donor_category:{label:l("Donor_category"),format:(e,t)=>{var a;return null==(a=t.category)?void 0:a.name}}};_();const m=p({donor_category_id:[],visit_type:[],donation_type_id:[]}),c=p({page:1}),v=p({}),j=_(!1);async function w(e){var t,a;try{Object.assign(c,e),s.value=!0;const t=await z(e);Object.assign(o,t.result)}catch(l){Object.assign(m,null==(a=null==(t=l.response)?void 0:t.data)?void 0:a.errors)}finally{s.value=!1}}function D(e){m[e]=""}async function I(){o.data=[]}return[t,a]=C((()=>w(c))),await t,a(),(e,t)=>{const a=X,l=Me,u=T,d=N,_=G,p=E,c=W,$=H,M=ye;return y(),F("div",ke,[f("div",Ce,[f("div",Fe,[V(a,{"with-icons":"",separator:"bullet",items:[{label:x(n).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:e.$t("Screening")},{label:e.$t("Donors-list-for-primary-screening")}]},null,8,["items"])])]),f("div",Oe,[f("div",Se,[V(l,{"is-loading":x(s),errors:x(m),onSearch:w,onClearForm:I,onClearError:D},null,8,["is-loading","errors"])])]),f("div",Pe,[f("div",Ue,[V($,{columns:x(r),data:x(o).data,limit:x(o).pagination.per_page,total:x(o).pagination.total},{default:b((()=>[V(p,{rounded:"","no-header":!x(s)&&0===x(o).data.length},{"header-column":b((({column:t})=>["orderNumber"===t.key?(y(),F("span",{key:0,textContent:h(e.$t("donor_no"))},null,8,Ie)):O("",!0)])),body:b((()=>[x(s)?(y(),F("div",Be,[(y(!0),F(S,null,P(x(o).pagination.per_page,(e=>(y(),F("div",{key:e,class:"flex-table-item"},[V(d,null,{default:b((()=>[V(u,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):O("",!0),0===x(o).data.length?(y(),F("div",Le,[V(_,{title:e.$t("No_data"),subtitle:e.$t("There_is_no_data_that_match_your_query"),class:"my-6"},{image:b((()=>[qe,Ae])),_:1},8,["title","subtitle"])])):O("",!0)])),"body-cell":b((({row:e,column:t})=>["name"===t.key?(y(),F("a",{key:0,href:"javascript:;",class:"has-text-primary",onClick:t=>{return a=e,Object.assign(v,a),void(j.value=!0);var a}},h(e.first_name)+" "+h(e.last_name)+" "+h(e.father_name)+" ",9,ze)):O("",!0)])),_:1},8,["no-header"]),x(o).data.length?(y(),g(c,{key:0,"current-page":x(i),"onUpdate:current-page":t[0]||(t[0]=e=>U(i)?i.value=e:null),class:"mt-5","item-per-page":x(o).pagination.per_page,"total-items":x(o).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):O("",!0)])),_:1},8,["columns","data","limit","total"])])]),V(M,{"is-open":x(j),"onUpdate:is-open":t[1]||(t[1]=e=>U(j)?j.value=e:null),patient:x(v),"onUpdate:list":w},null,8,["is-open","patient"])])}}}),[["__scopeId","data-v-a888c163"]]);export{Ne as default};
