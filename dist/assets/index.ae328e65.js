import{_ as e,a,b as t,c as l,d as s,e as r,f as o,g as n}from"./search-7-dark.102b5390.js";import{_ as i}from"./VProgress.vue_vue_type_style_index_0_lang.25603c48.js";import{_ as d}from"./VCard.vue_vue_type_script_setup_true_lang.66705bb8.js";import{_ as u}from"./VButton.vue_vue_type_style_index_0_lang.108743ff.js";import{_,a as c}from"./VControl.c83da2bc.js";import{_ as p}from"./IMaskDateInput.vue_vue_type_script_setup_true_lang.7de6c203.js";import{q as m,C as g,H as v,r as b,a2 as y,x as f,j as h,o as V,a as j,w as x,e as $,m as k,k as w,t as S,K as C,i as D,E as F,J as E,c as L,a1 as M,d as I,g as P,F as U,l as O,a3 as Y,L as B,M as N}from"./index.7c55eebc.js";import{_ as q}from"./lodash.ee52b868.js";import{g as A,f as H}from"./patient.8ce28ef6.js";import{_ as T}from"./VBreadcrumb.vue_vue_type_style_index_0_lang.014f9ced.js";import{u as z}from"./main.77f12ddf.js";import{u as G}from"./viewWrapper.36a4ca30.js";import{_ as J}from"./_plugin-vue_export-helper.cdc0426e.js";import"./VFlex.vue_vue_type_style_index_0_lang.7a5f3769.js";import"./VPlaceload.b6410537.js";import"./VIMaskInput.vue_vue_type_script_lang.ee999b64.js";import"./moment.6db5fb47.js";const K=["onSubmit"],W={class:"columns"},Q={class:"column"},R={class:"help has-text-danger"},X={class:"column"},Z={class:"help has-text-danger"},ee={class:"column"},ae={class:"help has-text-danger"},te={class:"column"},le={class:"help has-text-danger"},se={class:"navigation-buttons"},re={class:"buttons is-right"},oe=q.isEmpty,ne=q.values,ie=m({__name:"ScreeningPassedDonorsFilterForm",props:{isLoading:{type:Boolean},errors:null},emits:["search","clearError","clearForm"],async setup(e,{emit:a}){let t,l;const{t:s}=g(),r=v(),o=b({start_date:"",end_date:"",donor_category_id:"",visit_type_id:""}),n=([t,l]=y((()=>A().then((e=>e.result)))),t=await t,l(),t),i=f([{value:"gratuitous",label:s("Gratuitous")},{value:"chargeable",label:s("Chargeable")}]),m=async()=>{ne(o).every(oe)?r.error(s("Form_fields_are_empty")):a("search",o)},F=async()=>{Object.assign(o,{start_date:"",end_date:"",donor_category_id:"",visit_type_id:""}),a("clearForm")};return(a,t)=>{const l=p,s=_,r=c,g=h("Multiselect"),v=u,b=d;return V(),j(b,{radius:"regular"},{default:x((()=>[$("form",{onSubmit:k(m,["prevent"])},[$("div",W,[$("div",Q,[w(r,{label:a.$t("Start_date")},{default:x((()=>[w(s,null,{default:x((()=>[w(l,{modelValue:o.start_date,"onUpdate:modelValue":t[0]||(t[0]=e=>o.start_date=e)},null,8,["modelValue"]),$("p",R,S(e.errors.start_date[0]),1)])),_:1})])),_:1},8,["label"])]),$("div",X,[w(r,{label:a.$t("End_date")},{default:x((()=>[w(s,null,{default:x((()=>[w(l,{modelValue:o.end_date,"onUpdate:modelValue":t[1]||(t[1]=e=>o.end_date=e)},null,8,["modelValue"]),$("p",Z,S(e.errors.end_date[0]),1)])),_:1})])),_:1},8,["label"])]),$("div",ee,[w(r,{class:"is-curved-select",label:a.$t("Donor_categories")},{default:x((({id:l})=>[w(s,null,{default:x((()=>[w(g,{modelValue:o.donor_category_id,"onUpdate:modelValue":t[2]||(t[2]=e=>o.donor_category_id=e),attrs:{id:l},options:C(n),placeholder:a.$t("All"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"]),$("p",ae,S(e.errors.donor_category_id[0]),1)])),_:2},1024)])),_:1},8,["label"])]),$("div",te,[w(r,{class:"is-curved-select",label:a.$t("Visit_type")},{default:x((({id:l})=>[w(s,null,{default:x((()=>[w(g,{modelValue:o.visit_type_id,"onUpdate:modelValue":t[3]||(t[3]=e=>o.visit_type_id=e),attrs:{id:l},options:i.value,placeholder:a.$t("All")},null,8,["modelValue","attrs","options","placeholder"]),$("p",le,S(e.errors.visit_type_id[0]),1)])),_:2},1024)])),_:1},8,["label"])])]),$("div",se,[$("div",re,[w(v,{type:"button",color:"warning",bold:"",disabled:e.isLoading,tabindex:"0",onClick:F},{default:x((()=>[D(S(a.$t("Clear")),1)])),_:1},8,["disabled"]),w(v,{type:"submit",color:"primary",bold:"",loading:e.isLoading,tabindex:"0"},{default:x((()=>[D(S(a.$t("Search")),1)])),_:1},8,["loading"])])])],40,K)])),_:1})}}}),de=e=>(B("data-v-f3e76c08"),e=e(),N(),e),ue={class:"page-content-inner"},_e={class:"columns mb-3"},ce={class:"column"},pe={class:"columns mt-1"},me={class:"column"},ge={class:"columns"},ve={class:"column is-12"},be=["textContent"],ye={key:0,class:"flex-list-inner"},fe={key:1,class:"flex-list-inner"},he=de((()=>$("img",{class:"light-image",src:o,alt:""},null,-1))),Ve=de((()=>$("img",{class:"dark-image",src:n,alt:""},null,-1))),je={key:0},xe=q.isEmpty,$e=J(m({__name:"index",setup(o){F();const n=v(),{t:d}=g(),u=z(),_=f(!1);G().setPageTitle(d("Screening")),E({title:`${d("Screening-passed-donors-list")} - ${u.app.name}`});const c=b({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),p=L({get:()=>c.pagination.current_page,set:async e=>{k.page=e,await D(k)}}),m={orderNumber:{format:(e,a,t)=>`${t+1}`},screening_date:{label:d("Screening_date")},name:{label:d("Donor_fullname")},birth_date:{label:d("Date-of-birth")},visit_date:{label:d("Visit_date"),format:(e,a)=>{var t,l;return(null==(t=a.last_visit)?void 0:t.created_at)&&M(new Date(null==(l=a.last_visit)?void 0:l.created_at),"YYYY-MM-DD")}},visit_type:{label:d("Visit_type"),format:(e,a)=>{var t,l;return(null==(t=a.last_visit)?void 0:t.visit_type)&&d(null==(l=a.last_visit)?void 0:l.visit_type)}},hemoglobin:{label:`${d("Hemoglobin")}, ${d("g/l")}`},preliminary_blood_type:{label:d("Preliminary_blood_type")},laboratory_assistant_fullname:{label:d("Laboratory_assistant_fullname")}},y=f(),h=b({start_date:[],end_date:[],donor_category_id:[],visit_type_id:[]}),k=b({page:1});async function D(e){var a,t;try{Object.assign(k,e),_.value=!0;const a=await H(e);Object.assign(c,a.result),xe(a.result.data)?n.warning(d("Data_not_found")):n.success(`${d("Found")}: ${a.result.pagination.total} ${d("records")}`)}catch(l){Object.assign(h,null==(t=null==(a=l.response)?void 0:a.data)?void 0:t.errors)}finally{_.value=!1}}function B(e){h[e]=""}async function N(){c.data=[]}return(o,n)=>{const d=T,g=ie,v=e,b=a,f=t,k=i,F=l,E=s,L=r;return V(),I("div",ue,[$("div",_e,[$("div",ce,[w(d,{"with-icons":"",separator:"bullet",items:[{label:C(u).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:o.$t("Screening")},{label:o.$t("Screening-passed-donors-list")}]},null,8,["items"])])]),$("div",pe,[$("div",me,[w(g,{"is-loading":_.value,errors:h,onSearch:D,onClearForm:N,onClearError:B},null,8,["is-loading","errors"])])]),$("div",ge,[$("div",ve,[w(L,{columns:C(m),data:c.data,limit:c.pagination.per_page,total:c.pagination.total},{default:x((()=>[w(F,{rounded:"","no-header":!_.value&&0===c.data.length},{"header-column":x((({column:e})=>["orderNumber"===e.key?(V(),I("span",{key:0,textContent:S(o.$t("Donor_register_number"))},null,8,be)):P("",!0)])),body:x((()=>[_.value?(V(),I("div",ye,[(V(!0),I(U,null,O(c.pagination.per_page,(e=>(V(),I("div",{key:e,class:"flex-table-item"},[w(b,null,{default:x((()=>[w(v,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):P("",!0),0===c.data.length?(V(),I("div",fe,[w(f,{title:"No matches",subtitle:"There is no data that match your query.",class:"my-6"},{image:x((()=>[he,Ve])),_:1})])):P("",!0)])),"body-row-pre":x((({row:e})=>[e.id===y.value?(V(),j(k,{key:0,size:"tiny",class:"m-0 mb-1"})):P("",!0)])),"body-cell":x((({row:e,column:a})=>["name"===a.key?(V(),I("span",je,S(e.first_name)+" "+S(e.last_name)+" "+S(e.father_name),1)):P("",!0)])),_:1},8,["no-header"]),c.data.length?(V(),j(E,{key:0,"current-page":C(p),"onUpdate:current-page":n[0]||(n[0]=e=>Y(p)?p.value=e:null),class:"mt-5","item-per-page":c.pagination.per_page,"total-items":c.pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):P("",!0)])),_:1},8,["columns","data","limit","total"])])])])}}}),[["__scopeId","data-v-f3e76c08"]]);export{$e as default};
