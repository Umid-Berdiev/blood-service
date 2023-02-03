import{_ as e,a,b as t}from"./VFlexTable.vue_vue_type_style_index_0_lang-03a54f1c.js";import{_ as l,a as s,b as r,c as n,d as i}from"./search-7-dark-81286176.js";import{_ as o}from"./VCard.vue_vue_type_script_setup_true_lang-1043f916.js";import{_ as d}from"./SubmitButton.vue_vue_type_script_setup_true_lang-96021f2c.js";import{_}from"./ClearButton.vue_vue_type_script_setup_true_lang-7aff0300.js";import{a as u,_ as c}from"./VControl-e7b2630d.js";import{_ as p}from"./DatePicker.vue_vue_type_script_setup_true_lang-8beaf1b4.js";import{q as m,C as v,H as g,r as y,af as b,x as f,y as h,j,o as x,a as V,w as $,e as k,m as S,k as C,K as w,t as D,i as F,E as L,J as O,c as U,a7 as B,d as E,g as M,F as P,l as Y,U as N,L as T,M as q}from"./index-21286bdb.js";import{p as A}from"./patient-26cab0f6.js";import{_ as H}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-69f615bd.js";import{u as K}from"./main-16751c88.js";import{u as G}from"./viewWrapper-6ae5f61c.js";import{f as I}from"./index-2c297abb.js";import{_ as J}from"./_plugin-vue_export-helper-1b428a4d.js";import"./VFlex.vue_vue_type_style_index_0_lang-57370b27.js";import"./VButton.vue_vue_type_style_index_0_lang-b78df6f3.js";import"./ClientOnly.vue_vue_type_script_lang-52200b90.js";const W=["onSubmit"],Z={class:"columns"},z={class:"column"},Q={class:"help has-text-danger"},R={class:"column"},X={class:"help has-text-danger"},ee={class:"column"},ae={class:"help has-text-danger"},te={class:"column"},le={class:"help has-text-danger"},se={class:"navigation-buttons"},re={class:"buttons is-right"},ne=m({__name:"ScreeningPassedDonorsFilterForm",props:{isLoading:{type:Boolean},errors:null},emits:["search","clearError","clearForm"],async setup(e,{emit:a}){let t,l;const{t:s}=v();g();const r=y({start_date:"",end_date:"",donor_category_id:"",visit_type_id:""}),n=([t,l]=b((()=>A().then((e=>e.result)))),t=await t,l(),t),i=f([{value:"gratuitous",label:s("Gratuitous")},{value:"chargeable",label:s("Chargeable")}]),m=f(!1);h(r,(e=>{e&&(m.value=Object.values(e).some((e=>!!e)))}),{deep:!0});const L=async()=>{a("search",r)},O=async()=>{Object.assign(r,{start_date:"",end_date:"",donor_category_id:"",visit_type_id:""}),a("clearForm")};return(a,t)=>{const l=p,s=u,v=j("Multiselect"),g=c,y=_,b=d,f=o;return x(),V(f,null,{default:$((()=>[k("form",{onSubmit:S(L,["prevent"])},[k("div",Z,[k("div",z,[C(s,{label:a.$t("Start_date")},{default:$((()=>[C(l,{modelValue:w(r).start_date,"onUpdate:modelValue":t[0]||(t[0]=e=>w(r).start_date=e)},null,8,["modelValue"]),k("p",Q,D(e.errors.start_date[0]),1)])),_:1},8,["label"])]),k("div",R,[C(s,{label:a.$t("End_date")},{default:$((()=>[C(l,{modelValue:w(r).end_date,"onUpdate:modelValue":t[1]||(t[1]=e=>w(r).end_date=e)},null,8,["modelValue"]),k("p",X,D(e.errors.end_date[0]),1)])),_:1},8,["label"])]),k("div",ee,[C(s,{class:"is-curved-select",label:a.$t("Donor_categories")},{default:$((({id:l})=>[C(g,null,{default:$((()=>[C(v,{modelValue:w(r).donor_category_id,"onUpdate:modelValue":t[2]||(t[2]=e=>w(r).donor_category_id=e),attrs:{id:l},options:w(n),placeholder:a.$t("All"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"]),k("p",ae,D(e.errors.donor_category_id[0]),1)])),_:2},1024)])),_:1},8,["label"])]),k("div",te,[C(s,{class:"is-curved-select",label:a.$t("Visit_type")},{default:$((({id:l})=>[C(g,null,{default:$((()=>[C(v,{modelValue:w(r).visit_type_id,"onUpdate:modelValue":t[3]||(t[3]=e=>w(r).visit_type_id=e),attrs:{id:l},options:w(i),placeholder:a.$t("All")},null,8,["modelValue","attrs","options","placeholder"]),k("p",le,D(e.errors.visit_type_id[0]),1)])),_:2},1024)])),_:1},8,["label"])])]),k("div",se,[k("div",re,[C(y,{disabled:e.isLoading||!w(m),onClear:O},null,8,["disabled"]),C(b,{loading:e.isLoading},{default:$((()=>[F(D(a.$t("Search")),1)])),_:1},8,["loading"])])])],40,W)])),_:1})}}}),ie=e=>(T("data-v-51cee482"),e=e(),q(),e),oe={class:"page-content-inner"},de={class:"columns mb-3"},_e={class:"column"},ue={class:"columns mt-1"},ce={class:"column"},pe={class:"columns"},me={class:"column is-12"},ve=["textContent"],ge={key:0,class:"flex-list-inner"},ye={key:1,class:"flex-list-inner"},be=ie((()=>k("img",{class:"light-image",src:n,alt:""},null,-1))),fe=ie((()=>k("img",{class:"dark-image",src:i,alt:""},null,-1))),he={key:0},je=J(m({__name:"index",async setup(n){let i,o;L(),g();const{t:d}=v(),_=K(),u=f(!1);G().setPageTitle(d("Screening")),O({title:`${d("Screening-passed-donors-list")} - ${_.app.name}`});const c=y({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),p=U({get:()=>c.pagination.current_page,set:async e=>{j.page=e,await S(j)}}),m={orderNumber:{format:(e,a,t)=>`${t+1}`,align:"center"},screening_date:{label:d("Screening_date"),format:(e,a)=>{var t,l,s;return(null==(t=a.last_visit)?void 0:t.primary_screening_result)&&B(new Date(null==(s=null==(l=a.last_visit)?void 0:l.primary_screening_result)?void 0:s.created_at),"YYYY-MM-DD")}},name:{label:d("Donor_fullname")},birth_date:{label:d("Date-of-birth")},visit_date:{label:d("Visit_date"),format:(e,a)=>{var t;return null==(t=a.last_visit)?void 0:t.created_at}},visit_type:{label:d("Visit_type"),format:(e,a)=>{var t,l;return(null==(t=a.last_visit)?void 0:t.visit_type)&&d(null==(l=a.last_visit)?void 0:l.visit_type)}},hemoglobin:{label:`${d("Hemoglobin")}, ${d("g/l")}`,format:(e,a)=>{var t,l;return null==(l=null==(t=a.last_visit)?void 0:t.primary_screening_result)?void 0:l.value},align:"center"},preliminary_blood_type:{label:d("Preliminary_blood_type"),format:(e,a)=>{var t,l,s;return null==(s=null==(l=null==(t=a.last_visit)?void 0:t.primary_screening_result)?void 0:l.blood_type)?void 0:s.label},align:"center"},laboratory_assistant_fullname:{label:d("Laboratory_assistant_fullname"),format:(e,a)=>{var t,l;return null==(l=null==(t=a.last_visit)?void 0:t.primary_screening_result)?void 0:l.created_by}}};f();const h=y({start_date:[],end_date:[],donor_category_id:[],visit_type_id:[]}),j=y({page:1});async function S(e){var a,t;try{Object.assign(j,e),u.value=!0;const a=await I(e);Object.assign(c,a.result)}catch(l){Object.assign(h,null==(t=null==(a=l.response)?void 0:a.data)?void 0:t.errors)}finally{u.value=!1}}function F(e){h[e]=""}async function T(){c.data=[]}return[i,o]=b((()=>S(j))),await i,o(),(n,i)=>{const o=H,d=ne,v=l,g=e,y=s,b=a,f=r,j=t;return x(),E("div",oe,[k("div",de,[k("div",_e,[C(o,{"with-icons":"",separator:"bullet",items:[{label:w(_).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:n.$t("Screening")},{label:n.$t("Screening-passed-donors-list")}]},null,8,["items"])])]),k("div",ue,[k("div",ce,[C(d,{"is-loading":w(u),errors:w(h),onSearch:S,onClearForm:T,onClearError:F},null,8,["is-loading","errors"])])]),k("div",pe,[k("div",me,[C(j,{columns:w(m),data:w(c).data,limit:w(c).pagination.per_page,total:w(c).pagination.total},{default:$((()=>[C(b,{rounded:"","no-header":!w(u)&&0===w(c).data.length},{"header-column":$((({column:e})=>["orderNumber"===e.key?(x(),E("span",{key:0,textContent:D(n.$t("donor_no"))},null,8,ve)):M("",!0)])),body:$((()=>[w(u)?(x(),E("div",ge,[(x(!0),E(P,null,Y(w(c).pagination.per_page,(e=>(x(),E("div",{key:e,class:"flex-table-item"},[C(g,null,{default:$((()=>[C(v,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):M("",!0),0===w(c).data.length?(x(),E("div",ye,[C(y,{title:n.$t("No_data"),subtitle:n.$t("There_is_no_data_that_match_your_query"),class:"my-6"},{image:$((()=>[be,fe])),_:1},8,["title","subtitle"])])):M("",!0)])),"body-cell":$((({row:e,column:a})=>["name"===a.key?(x(),E("span",he,D(e.first_name)+" "+D(e.last_name)+" "+D(e.father_name),1)):M("",!0)])),_:1},8,["no-header"]),w(c).data.length?(x(),V(f,{key:0,"current-page":w(p),"onUpdate:current-page":i[0]||(i[0]=e=>N(p)?p.value=e:null),class:"mt-5","item-per-page":w(c).pagination.per_page,"total-items":w(c).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):M("",!0)])),_:1},8,["columns","data","limit","total"])])])])}}}),[["__scopeId","data-v-51cee482"]]);export{je as default};