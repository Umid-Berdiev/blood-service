import{_ as a,a as e,b as t}from"./VFlexTable.vue_vue_type_style_index_0_lang-0b6ebd63.js";import{_ as l,a as n,b as s,c as i,d as o}from"./search-7-dark-c4e05ee5.js";import{_ as r}from"./VCard.vue_vue_type_script_setup_true_lang-34c1a38f.js";import{_ as d}from"./VButton.vue_vue_type_style_index_0_lang-2943ff29.js";import{_ as u,a as _,b as c}from"./VControl-6db07387.js";import{_ as p}from"./ClientOnly.vue_vue_type_script_lang-4537ec76.js";import{q as m,C as v,r as g,c as y,j as f,o as b,d as h,k as x,w as V,K as k,U as j,e as $,p as w,al as D,H as C,a8 as F,x as Y,a as M,i as P,t as U,E,J as L,a7 as O,y as B,g as A,F as N,l as T,L as q,M as z}from"./index-f93ac3f8.js";import{p as R,i as S}from"./patient-82861498.js";import{_ as W}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-8b18b9a3.js";import{u as G}from"./main-ee2e6726.js";import{u as H}from"./viewWrapper-1e6038f3.js";import{_ as I}from"./_plugin-vue_export-helper-1b428a4d.js";import"./VFlex.vue_vue_type_style_index_0_lang-89cd9c2c.js";const J=["value"],K=$("i",{class:"fas fa-angle-double-right","aria-hidden":"true"},null,-1),Z=["value"],Q=m({__name:"DateRangePicker",props:{start:null,end:null},emits:["update:start","update:end"],setup(a,{emit:e}){const t=a,{t:l,locale:n}=v(),s=g({type:"string",mask:"YYYY-MM-DD"}),i=y({get:()=>({start:t.start,end:t.end}),set(a){e("update:start",a.start),e("update:end",a.end)}});return(a,e)=>{const t=u,l=d,o=_,r=f("VDatePicker"),c=p;return b(),h("div",null,[x(c,null,{default:V((()=>[x(r,{modelValue:k(i),"onUpdate:modelValue":e[0]||(e[0]=a=>j(i)?i.value=a:null),locale:k(n),"is-range":"",color:"green","trim-weeks":"","model-config":k(s)},{default:V((({inputValue:a,inputEvents:e})=>[x(o,{addons:""},{default:V((()=>[x(t,{expanded:"",icon:"feather:corner-down-right"},{default:V((()=>[$("input",w({class:"input v-input",type:"text",value:a.start},D(e.start,!0)),null,16,J)])),_:2},1024),x(t,null,{default:V((()=>[x(l,{static:""},{default:V((()=>[K])),_:1})])),_:1}),x(t,{expanded:"",icon:"feather:corner-right-up",subcontrol:""},{default:V((()=>[$("input",w({class:"input v-input",type:"text",value:a.end},D(e.end,!0)),null,16,Z)])),_:2},1024)])),_:2},1024)])),_:1},8,["modelValue","locale","model-config"])])),_:1})])}}}),X={class:"columns"},aa={class:"column"},ea={class:"column"},ta={class:"help has-text-danger"},la={class:"column"},na={class:"help has-text-danger"},sa={class:"column"},ia={class:"help has-text-danger"},oa={class:"navigation-buttons"},ra={class:"buttons is-right"},da=m({__name:"ExaminedDonorsFilterForm",props:{isLoading:{type:Boolean},errors:null},emits:["search","clearError","clearForm"],async setup(a,{emit:e}){let t,l;const{t:n}=v();C();const s=g({start_date:"",end_date:"",donor_category_id:"",visit_type_id:"",donation_type_id:""}),i=([t,l]=F((()=>R().then((a=>a.result)))),t=await t,l(),t),o=Y([{value:"gratuitous",label:n("Gratuitous")},{value:"chargeable",label:n("Chargeable")}]),p=Y([{id:1,name:n("Whole_blood_donation")},{id:2,name:n("Plasmapheresis")},{id:3,name:n("Plateletpheresis")}]),m=async()=>{e("search",s)},y=async()=>{Object.assign(s,{start_date:"",end_date:"",donor_category_id:"",visit_type_id:"",donation_type_id:""}),e("clearForm")};return(e,t)=>{const l=c,n=Q,v=_,g=f("Multiselect"),h=u,j=d,w=r;return b(),M(w,null,{default:V((()=>[$("div",null,[$("div",X,[$("div",aa,[x(v,null,{default:V((()=>[x(l,null,{default:V((()=>[P(U(e.$t("Period")),1)])),_:1}),x(n,{start:k(s).start_date,"onUpdate:start":t[0]||(t[0]=a=>k(s).start_date=a),end:k(s).end_date,"onUpdate:end":t[1]||(t[1]=a=>k(s).end_date=a)},null,8,["start","end"])])),_:1})]),$("div",ea,[x(v,{class:"is-curved-select",label:e.$t("Donor_categories")},{default:V((({id:l})=>[x(h,null,{default:V((()=>[x(g,{modelValue:k(s).donor_category_id,"onUpdate:modelValue":t[2]||(t[2]=a=>k(s).donor_category_id=a),attrs:{id:l},options:k(i),placeholder:e.$t("All"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"]),$("p",ta,U(a.errors.donor_category_id[0]),1)])),_:2},1024)])),_:1},8,["label"])]),$("div",la,[x(v,{class:"is-curved-select",label:e.$t("Visit_type")},{default:V((({id:l})=>[x(h,null,{default:V((()=>[x(g,{modelValue:k(s).visit_type_id,"onUpdate:modelValue":t[3]||(t[3]=a=>k(s).visit_type_id=a),attrs:{id:l},options:k(o),placeholder:e.$t("All")},null,8,["modelValue","attrs","options","placeholder"]),$("p",na,U(a.errors.visit_type_id[0]),1)])),_:2},1024)])),_:1},8,["label"])]),$("div",sa,[x(v,{class:"is-curved-select",label:e.$t("Donation_type")},{default:V((({id:l})=>[x(h,null,{default:V((()=>[x(g,{modelValue:k(s).donation_type_id,"onUpdate:modelValue":t[4]||(t[4]=a=>k(s).donation_type_id=a),attrs:{id:l},options:k(p),placeholder:e.$t("All"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"]),$("p",ia,U(a.errors.donation_type_id[0]),1)])),_:2},1024)])),_:1},8,["label"])])]),$("div",oa,[$("div",ra,[x(j,{type:"button",color:"warning",bold:"",disabled:a.isLoading,tabindex:"0",onClick:y},{default:V((()=>[P(U(e.$t("Clear")),1)])),_:1},8,["disabled"]),x(j,{type:"button",color:"primary",bold:"",loading:a.isLoading,tabindex:"0",onClick:m},{default:V((()=>[P(U(e.$t("Search")),1)])),_:1},8,["loading"])])])])])),_:1})}}}),ua=a=>(q("data-v-f12d0c59"),a=a(),z(),a),_a={class:"page-content-inner"},ca={class:"columns mb-3"},pa={class:"column"},ma={class:"columns mt-1"},va={class:"column"},ga={class:"columns"},ya={class:"column is-12"},fa={key:0,class:"is-flex-grow-0",textContent:"#"},ba={key:0,class:"flex-list-inner"},ha={key:1,class:"flex-list-inner"},xa=ua((()=>$("img",{class:"light-image",src:i,alt:""},null,-1))),Va=ua((()=>$("img",{class:"dark-image",src:o,alt:""},null,-1))),ka=I(m({__name:"index",setup(i){E();const o=C(),{t:r}=v(),d=G(),u=Y(!1);H().setPageTitle(r("Physician-therapist")),L({title:`${r("Donors-list-for-examination")} - ${d.app.name}`});const _=g({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),c={orderNumber:{format:(a,e,t)=>`${t+1}`,cellClass:"is-flex-grow-0"},name:{label:r("Fullname")},birth_date:{label:r("Date-of-birth")},visit_date:{label:r("Visit_date"),format:(a,e)=>{var t,l;return(null==(t=e.last_visit)?void 0:t.created_at)&&O(new Date(null==(l=e.last_visit)?void 0:l.created_at),"YYYY-MM-DD")}},visit_type:{label:r("Visit_type"),format:(a,e)=>{var t,l;return(null==(t=e.last_visit)?void 0:t.visit_type)&&r(null==(l=e.last_visit)?void 0:l.visit_type)}},medical_inspection_date:{label:r("Medical_inspection_date"),format:(a,e)=>{var t,l;return(null==(t=e.last_visit)?void 0:t.directed_by)&&r(null==(l=e.last_visit)?void 0:l.directed_by)}},medical_inspection_conclusion:{label:r("Medical_inspection_conclusion"),format:(a,e)=>{var t;return null==(t=e.last_visit)?void 0:t.personalized_donation}},donation_code:{label:r("Donation_code"),format:(a,e)=>{var t;return null==(t=e.last_visit)?void 0:t.donation_code}},donation_type:{label:r("Donation_type"),format:(a,e)=>{var t;return null==(t=e.last_visit)?void 0:t.personalized_donation}},blood_component_amount:{label:r("Blood_component_amount"),format:(a,e)=>{var t;return null==(t=e.status)?void 0:t.name}}};Y();const p=g({start_date:[],end_date:[],donor_category_id:[],visit_type_id:[],donation_type_id:[]}),m=g({status:6});async function y(a){var e,t;try{Object.assign(m,{...m,...a,page:_.pagination.current_page}),u.value=!0;const e=await S(m);Object.assign(_,e.result)}catch(l){o.error(l.message),Object.assign(p,null==(t=null==(e=l.response)?void 0:e.data)?void 0:t.errors)}finally{u.value=!1}}function j(a){p[a]=""}async function w(){_.data=[]}return B((()=>_.pagination.current_page),(async function(a){a&&await y(m)})),(i,o)=>{const r=W,m=da,v=l,g=a,D=n,C=f("RouterLink"),F=e,Y=s,E=t;return b(),h("div",_a,[$("div",ca,[$("div",pa,[x(r,{"with-icons":"",separator:"bullet",items:[{label:k(d).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:i.$t("Physician-therapist")},{label:i.$t("Examined-donor-register")}]},null,8,["items"])])]),$("div",ma,[$("div",va,[x(m,{"is-loading":k(u),errors:k(p),onSearch:y,onClearForm:w,onClearError:j},null,8,["is-loading","errors"])])]),$("div",ga,[$("div",ya,[x(E,{columns:k(c),data:k(_).data,limit:k(_).pagination.per_page,total:k(_).pagination.total},{default:V((()=>[x(F,{rounded:"","no-header":!k(u)&&0===k(_).data.length},{"header-column":V((({column:a})=>["orderNumber"===a.key?(b(),h("span",fa)):A("",!0)])),body:V((()=>[k(u)?(b(),h("div",ba,[(b(!0),h(N,null,T(k(_).pagination.per_page,(a=>(b(),h("div",{key:a,class:"flex-table-item"},[x(g,null,{default:V((()=>[x(v,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):A("",!0),0===k(_).data.length?(b(),h("div",ha,[x(D,{title:i.$t("No_data"),subtitle:i.$t("There_is_no_data_that_match_your_query"),class:"my-6"},{image:V((()=>[xa,Va])),_:1},8,["title","subtitle"])])):A("",!0)])),"body-cell":V((({row:a,column:e})=>["name"===e.key?(b(),M(C,{key:0,class:"table_link",to:`/app/physician-therapist/donors-for-examination/${a.id}`},{default:V((()=>[P(U(a.first_name)+" "+U(a.last_name)+" "+U(a.father_name)+" ",1)])),_:2},1032,["to"])):A("",!0)])),_:1},8,["no-header"]),k(_).data.length?(b(),M(Y,{key:0,"current-page":k(_).pagination.current_page,"onUpdate:current-page":o[0]||(o[0]=a=>k(_).pagination.current_page=a),class:"mt-5","item-per-page":k(_).pagination.per_page,"total-items":k(_).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):A("",!0)])),_:1},8,["columns","data","limit","total"])])])])}}}),[["__scopeId","data-v-f12d0c59"]]);export{ka as default};
