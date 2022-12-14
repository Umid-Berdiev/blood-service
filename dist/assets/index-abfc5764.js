import{_ as a,a as e,b as t}from"./VFlexTable.vue_vue_type_style_index_0_lang-68179e43.js";import{_ as l,a as s,b as r,c as n,d as o}from"./search-7-dark-b6479367.js";import{_ as i}from"./VCard.vue_vue_type_script_setup_true_lang-3b674ece.js";import{_ as d}from"./VButton.vue_vue_type_style_index_0_lang-fc4409cd.js";import{_,a as u}from"./VControl-b713a764.js";import{_ as c}from"./IMaskDateInput.vue_vue_type_script_setup_true_lang-38070980.js";import{q as p,C as m,H as g,r as v,ag as b,x as y,j as f,o as h,a as x,w as V,e as j,m as $,k,K as S,t as w,i as C,E as D,J as F,c as E,a6 as L,d as M,g as I,F as U,l as O,S as P,L as T,M as Y}from"./index-568ad137.js";import{_ as B}from"./lodash-c54dbb06.js";import{p as N,f as q}from"./patient-33059bc9.js";import{_ as A}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-faf20e2b.js";import{u as H}from"./main-7fc6984e.js";import{u as W}from"./viewWrapper-feca89b2.js";import{_ as G}from"./_plugin-vue_export-helper-1b428a4d.js";import"./VFlex.vue_vue_type_style_index_0_lang-8f30b873.js";import"./VPlaceload-33f57994.js";import"./VIMaskInput.vue_vue_type_script_lang-6492e1cb.js";import"./moment-78dc6435.js";const J=["onSubmit"],K={class:"columns"},X={class:"column"},Z={class:"help has-text-danger"},z={class:"column"},Q={class:"help has-text-danger"},R={class:"column"},aa={class:"help has-text-danger"},ea={class:"column"},ta={class:"help has-text-danger"},la={class:"navigation-buttons"},sa={class:"buttons is-right"},ra=B.isEmpty,na=B.values,oa=p({__name:"ScreeningPassedDonorsFilterForm",props:{isLoading:{type:Boolean},errors:null},emits:["search","clearError","clearForm"],async setup(a,{emit:e}){let t,l;const{t:s}=m(),r=g(),n=v({start_date:"",end_date:"",donor_category_id:"",visit_type_id:""}),o=([t,l]=b((()=>N().then((a=>a.result)))),t=await t,l(),t),p=y([{value:"gratuitous",label:s("Gratuitous")},{value:"chargeable",label:s("Chargeable")}]),D=async()=>{na(n).every(ra)?r.error(s("Form_fields_are_empty")):e("search",n)},F=async()=>{Object.assign(n,{start_date:"",end_date:"",donor_category_id:"",visit_type_id:""}),e("clearForm")};return(e,t)=>{const l=c,s=_,r=u,m=f("Multiselect"),g=d,v=i;return h(),x(v,null,{default:V((()=>[j("form",{onSubmit:$(D,["prevent"])},[j("div",K,[j("div",X,[k(r,{label:e.$t("Start_date")},{default:V((()=>[k(s,null,{default:V((()=>[k(l,{modelValue:S(n).start_date,"onUpdate:modelValue":t[0]||(t[0]=a=>S(n).start_date=a)},null,8,["modelValue"]),j("p",Z,w(a.errors.start_date[0]),1)])),_:1})])),_:1},8,["label"])]),j("div",z,[k(r,{label:e.$t("End_date")},{default:V((()=>[k(s,null,{default:V((()=>[k(l,{modelValue:S(n).end_date,"onUpdate:modelValue":t[1]||(t[1]=a=>S(n).end_date=a)},null,8,["modelValue"]),j("p",Q,w(a.errors.end_date[0]),1)])),_:1})])),_:1},8,["label"])]),j("div",R,[k(r,{class:"is-curved-select",label:e.$t("Donor_categories")},{default:V((({id:l})=>[k(s,null,{default:V((()=>[k(m,{modelValue:S(n).donor_category_id,"onUpdate:modelValue":t[2]||(t[2]=a=>S(n).donor_category_id=a),attrs:{id:l},options:S(o),placeholder:e.$t("All"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"]),j("p",aa,w(a.errors.donor_category_id[0]),1)])),_:2},1024)])),_:1},8,["label"])]),j("div",ea,[k(r,{class:"is-curved-select",label:e.$t("Visit_type")},{default:V((({id:l})=>[k(s,null,{default:V((()=>[k(m,{modelValue:S(n).visit_type_id,"onUpdate:modelValue":t[3]||(t[3]=a=>S(n).visit_type_id=a),attrs:{id:l},options:S(p),placeholder:e.$t("All")},null,8,["modelValue","attrs","options","placeholder"]),j("p",ta,w(a.errors.visit_type_id[0]),1)])),_:2},1024)])),_:1},8,["label"])])]),j("div",la,[j("div",sa,[k(g,{type:"button",color:"warning",bold:"",disabled:a.isLoading,tabindex:"0",onClick:F},{default:V((()=>[C(w(e.$t("Clear")),1)])),_:1},8,["disabled"]),k(g,{type:"submit",color:"primary",bold:"",loading:a.isLoading,tabindex:"0"},{default:V((()=>[C(w(e.$t("Search")),1)])),_:1},8,["loading"])])])],40,J)])),_:1})}}}),ia=a=>(T("data-v-c27de69b"),a=a(),Y(),a),da={class:"page-content-inner"},_a={class:"columns mb-3"},ua={class:"column"},ca={class:"columns mt-1"},pa={class:"column"},ma={class:"columns"},ga={class:"column is-12"},va=["textContent"],ba={key:0,class:"flex-list-inner"},ya={key:1,class:"flex-list-inner"},fa=ia((()=>j("img",{class:"light-image",src:n,alt:""},null,-1))),ha=ia((()=>j("img",{class:"dark-image",src:o,alt:""},null,-1))),xa={key:0},Va=B.isEmpty,ja=G(p({__name:"index",setup(n){D();const o=g(),{t:i}=m(),d=H(),_=y(!1);W().setPageTitle(i("Screening")),F({title:`${i("Screening-passed-donors-list")} - ${d.app.name}`});const u=v({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),c=E({get:()=>u.pagination.current_page,set:async a=>{f.page=a,await $(f)}}),p={orderNumber:{format:(a,e,t)=>`${t+1}`},screening_date:{label:i("Screening_date")},name:{label:i("Donor_fullname")},birth_date:{label:i("Date-of-birth")},visit_date:{label:i("Visit_date"),format:(a,e)=>{var t,l;return(null==(t=e.last_visit)?void 0:t.created_at)&&L(new Date(null==(l=e.last_visit)?void 0:l.created_at),"YYYY-MM-DD")}},visit_type:{label:i("Visit_type"),format:(a,e)=>{var t,l;return(null==(t=e.last_visit)?void 0:t.visit_type)&&i(null==(l=e.last_visit)?void 0:l.visit_type)}},hemoglobin:{label:`${i("Hemoglobin")}, ${i("g/l")}`},preliminary_blood_type:{label:i("Preliminary_blood_type")},laboratory_assistant_fullname:{label:i("Laboratory_assistant_fullname")}};y();const b=v({start_date:[],end_date:[],donor_category_id:[],visit_type_id:[]}),f=v({page:1});async function $(a){var e,t;try{Object.assign(f,a),_.value=!0;const e=await q(a);Object.assign(u,e.result),Va(e.result.data)?o.warning(i("Data_not_found")):o.success(`${i("Found")}: ${e.result.pagination.total} ${i("records")}`)}catch(l){Object.assign(b,null==(t=null==(e=l.response)?void 0:e.data)?void 0:t.errors)}finally{_.value=!1}}function C(a){b[a]=""}async function T(){u.data=[]}return(n,o)=>{const i=A,m=oa,g=l,v=a,y=s,f=e,D=r,F=t;return h(),M("div",da,[j("div",_a,[j("div",ua,[k(i,{"with-icons":"",separator:"bullet",items:[{label:S(d).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:n.$t("Screening")},{label:n.$t("Screening-passed-donors-list")}]},null,8,["items"])])]),j("div",ca,[j("div",pa,[k(m,{"is-loading":S(_),errors:S(b),onSearch:$,onClearForm:T,onClearError:C},null,8,["is-loading","errors"])])]),j("div",ma,[j("div",ga,[k(F,{columns:S(p),data:S(u).data,limit:S(u).pagination.per_page,total:S(u).pagination.total},{default:V((()=>[k(f,{rounded:"","no-header":!S(_)&&0===S(u).data.length},{"header-column":V((({column:a})=>["orderNumber"===a.key?(h(),M("span",{key:0,textContent:w(n.$t("Donor_register_number"))},null,8,va)):I("",!0)])),body:V((()=>[S(_)?(h(),M("div",ba,[(h(!0),M(U,null,O(S(u).pagination.per_page,(a=>(h(),M("div",{key:a,class:"flex-table-item"},[k(v,null,{default:V((()=>[k(g,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):I("",!0),0===S(u).data.length?(h(),M("div",ya,[k(y,{title:"No matches",subtitle:"There is no data that match your query.",class:"my-6"},{image:V((()=>[fa,ha])),_:1})])):I("",!0)])),"body-cell":V((({row:a,column:e})=>["name"===e.key?(h(),M("span",xa,w(a.first_name)+" "+w(a.last_name)+" "+w(a.father_name),1)):I("",!0)])),_:1},8,["no-header"]),S(u).data.length?(h(),x(D,{key:0,"current-page":S(c),"onUpdate:current-page":o[0]||(o[0]=a=>P(c)?c.value=a:null),class:"mt-5","item-per-page":S(u).pagination.per_page,"total-items":S(u).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):I("",!0)])),_:1},8,["columns","data","limit","total"])])])])}}}),[["__scopeId","data-v-c27de69b"]]);export{ja as default};
