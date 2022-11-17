import{_ as a,a as e,b as t,c as l,d as s,e as i,f as o,g as n,h as r}from"./search-7-dark.86fcb46e.js";import{_ as d}from"./VCard.vue_vue_type_script_setup_true_lang.71b9ada2.js";import{_ as u}from"./VButton.vue_vue_type_style_index_0_lang.3cd1d2b4.js";import{_,a as c}from"./VControl.96f035a3.js";import{q as p,C as m,H as v,r as b,x as g,j as y,o as f,a as h,w as j,e as x,m as k,k as V,t as $,i as C,E as w,J as D,c as F,aC as L,d as M,K as S,g as B,F as E,l as O,P,L as z,M as U}from"./index.575ce5b2.js";import{_ as Y}from"./lodash.0ccdf46e.js";import{_ as N}from"./VBreadcrumb.vue_vue_type_style_index_0_lang.28133e38.js";import{u as q}from"./main.7ee96f0e.js";import{u as A}from"./viewWrapper.79c37ac0.js";import{f as T}from"./patient.92107f38.js";import{_ as W}from"./_plugin-vue_export-helper.cdc0426e.js";import"./VFlex.vue_vue_type_style_index_0_lang.93e9d589.js";import"./VPlaceload.1a56b8cc.js";const G=["onSubmit"],H={class:"columns"},I={class:"column is-3"},J={class:"help has-text-danger"},K={class:"column is-3"},Q={class:"help has-text-danger"},R={class:"navigation-buttons"},X={class:"buttons is-right"},Z=Y.isEmpty,aa=Y.values,ea=p({__name:"BloodSamplingFilterForm",props:{isLoading:{type:Boolean},errors:null},emits:["search","clearError","clearForm"],setup(a,{emit:e}){const{t:t}=m(),l=v(),s=b({visit_type_id:"",donation_type_id:""}),i=g([{value:"gratuitous",label:t("Gratuitous")},{value:"chargeable",label:t("Chargeable")}]),o=g([{id:1,name:t("Whole_blood_donation")},{id:2,name:t("Plasmapheresis")},{id:3,name:t("Plateletpheresis")}]),n=async()=>{aa(s).every(Z)?l.error(t("Form_fields_are_empty")):e("search",s)},r=async()=>{Object.assign(s,{visit_type_id:"",donation_type_id:""}),e("clearForm")};return(e,t)=>{const l=y("Multiselect"),p=_,m=c,v=u,b=d;return f(),h(b,{radius:"regular"},{default:j((()=>[x("form",{onSubmit:k(n,["prevent"])},[x("div",H,[x("div",I,[V(m,{class:"is-curved-select",label:e.$t("Visit_type")},{default:j((({id:o})=>[V(p,null,{default:j((()=>[V(l,{modelValue:s.visit_type_id,"onUpdate:modelValue":t[0]||(t[0]=a=>s.visit_type_id=a),attrs:{id:o},options:i.value,placeholder:e.$t("All")},null,8,["modelValue","attrs","options","placeholder"]),x("p",J,$(a.errors.visit_type_id[0]),1)])),_:2},1024)])),_:1},8,["label"])]),x("div",K,[V(m,{class:"is-curved-select",label:e.$t("Donation_type")},{default:j((({id:i})=>[V(p,null,{default:j((()=>[V(l,{modelValue:s.donation_type_id,"onUpdate:modelValue":t[1]||(t[1]=a=>s.donation_type_id=a),attrs:{id:i},options:o.value,placeholder:e.$t("All"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"]),x("p",Q,$(a.errors.donation_type_id[0]),1)])),_:2},1024)])),_:1},8,["label"])])]),x("div",R,[x("div",X,[V(v,{type:"button",color:"warning",bold:"",disabled:a.isLoading,tabindex:"0",onClick:r},{default:j((()=>[C($(e.$t("Clear")),1)])),_:1},8,["disabled"]),V(v,{type:"submit",color:"primary",bold:"",loading:a.isLoading,tabindex:"0"},{default:j((()=>[C($(e.$t("Search")),1)])),_:1},8,["loading"])])])],40,G)])),_:1})}}}),ta=a=>(z("data-v-c54d77ba"),a=a(),U(),a),la={class:"page-content-inner"},sa={class:"columns mb-3"},ia={class:"column"},oa={class:"columns mt-1"},na={class:"column"},ra={class:"columns"},da={class:"column is-12"},ua=["textContent"],_a={key:0,class:"flex-list-inner"},ca={key:1,class:"flex-list-inner"},pa=ta((()=>x("img",{class:"light-image",src:n,alt:""},null,-1))),ma=ta((()=>x("img",{class:"dark-image",src:r,alt:""},null,-1))),va=["onClick"],ba=Y.isEmpty,ga=W(p({__name:"index",setup(n){w();const r=v(),{t:d}=m(),u=q(),_=g(!1);A().setPageTitle(d("Users_List")),D({title:`${d("Donor_list_for_blood_sampling")} - ${u.app.name}`});const c=b({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),p=F({get:()=>c.pagination.current_page,set:async a=>{z.page=a,await W(z)}}),y={orderNumber:{format:(a,e,t)=>`${t+1}`},name:{label:d("Fullname")},birth_date:{label:d("Date-of-birth")},visit_date:{label:d("Visit_date"),format:(a,e)=>{var t,l;return(null==(t=e.last_visit)?void 0:t.created_at)&&L(new Date(null==(l=e.last_visit)?void 0:l.created_at),"YYYY-MM-DD")}},visit_type:{label:d("Visit_type"),format:(a,e)=>{var t,l;return(null==(t=e.last_visit)?void 0:t.visit_type)&&d(null==(l=e.last_visit)?void 0:l.visit_type)}},medical_inspection_date:{label:d("Medical_inspection_date"),format:(a,e)=>{var t,l;return(null==(t=e.last_visit)?void 0:t.directed_by)&&d(null==(l=e.last_visit)?void 0:l.directed_by)}},medical_inspection_conclusion:{label:d("Medical_inspection_conclusion"),format:(a,e)=>{var t;return null==(t=e.last_visit)?void 0:t.personalized_donation}},linked_donation_number:{label:d("Linked_donation_number"),format:(a,e)=>{var t;return null==(t=e.last_visit)?void 0:t.personalized_donation}},donation_type:{label:d("Donation_type"),format:(a,e)=>{var t;return null==(t=e.last_visit)?void 0:t.personalized_donation}},blood_component_amount:{label:d("Blood_component_amount"),format:(a,e)=>{var t;return null==(t=e.status)?void 0:t.name}}},k=g(),C=b({visit_type_id:[],donation_type_id:[]}),z=b({page:1}),U=b({}),Y=g(!0);async function W(a){var e,t;try{Object.assign(z,a),_.value=!0;const e=await T(a);Object.assign(c,e.result),ba(e.result.data)?r.warning(d("Data_not_found")):r.success(`${d("Found")}: ${e.result.pagination.total} ${d("records")}`)}catch(l){Object.assign(C,null==(t=null==(e=l.response)?void 0:e.data)?void 0:t.errors)}finally{_.value=!1}}function G(a){C[a]=""}async function H(){c.data=[]}return(n,r)=>{const d=N,m=ea,v=a,b=e,g=t,w=l,D=s,F=i,L=o;return f(),M("div",la,[x("div",sa,[x("div",ia,[V(d,{"with-icons":"",separator:"bullet",items:[{label:S(u).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:n.$t("Screening")},{label:n.$t("Donor_list_for_blood_sampling")}]},null,8,["items"])])]),x("div",oa,[x("div",na,[V(m,{"is-loading":_.value,errors:C,onSearch:W,onClearForm:H,onClearError:G},null,8,["is-loading","errors"])])]),x("div",ra,[x("div",da,[V(L,{columns:S(y),data:c.data,limit:c.pagination.per_page,total:c.pagination.total},{default:j((()=>[V(D,{rounded:"","no-header":!_.value&&0===c.data.length},{"header-column":j((({column:a})=>["orderNumber"===a.key?(f(),M("span",{key:0,textContent:$(n.$t("Donor_register_number"))},null,8,ua)):B("",!0)])),body:j((()=>[_.value?(f(),M("div",_a,[(f(!0),M(E,null,O(c.pagination.per_page,(a=>(f(),M("div",{key:a,class:"flex-table-item"},[V(b,null,{default:j((()=>[V(v,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):B("",!0),0===c.data.length?(f(),M("div",ca,[V(g,{title:"No matches",subtitle:"There is no data that match your query.",class:"my-6"},{image:j((()=>[pa,ma])),_:1})])):B("",!0)])),"body-row-pre":j((({row:a})=>[a.id===k.value?(f(),h(w,{key:0,size:"tiny",class:"m-0 mb-1"})):B("",!0)])),"body-cell":j((({row:a,column:e})=>["name"===e.key?(f(),M("button",{key:0,class:"button button-link",onClick:e=>{return t=a,Object.assign(U,t),void(Y.value=!0);var t}},$(a.first_name)+" "+$(a.last_name)+" "+$(a.father_name),9,va)):B("",!0)])),_:1},8,["no-header"]),c.data.length?(f(),h(F,{key:0,"current-page":S(p),"onUpdate:current-page":r[0]||(r[0]=a=>P(p)?p.value=a:null),class:"mt-5","item-per-page":c.pagination.per_page,"total-items":c.pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):B("",!0)])),_:1},8,["columns","data","limit","total"])])])])}}}),[["__scopeId","data-v-c54d77ba"]]);export{ga as default};
