import{_ as a}from"./ConfirmActionModal.vue_vue_type_script_setup_true_lang-72d63230.js";import{_ as t,a as e,b as l}from"./VFlexTable.vue_vue_type_style_index_0_lang-0b6ebd63.js";import{_ as s,a as i,b as n,c as o,d as r}from"./search-7-dark-c4e05ee5.js";import{_ as u,a as d}from"./VControl-6db07387.js";import{_}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-8b18b9a3.js";import{q as c,E as p,H as m,C as v,x as g,J as y,r as f,c as b,a7 as h,A as x,y as j,j as k,o as w,d as V,e as $,k as C,K as M,w as D,U as A,g as Y,F,l as P,a as z,i as B,t as L,L as N,M as O}from"./index-f93ac3f8.js";import{u as T}from"./main-ee2e6726.js";import{u as U}from"./viewWrapper-1e6038f3.js";import{b as q}from"./patient-82861498.js";import{f as S,a as E}from"./index-32a33434.js";import{_ as H}from"./_plugin-vue_export-helper-1b428a4d.js";import"./VModal.vue_vue_type_style_index_0_lang-bd9f4090.js";import"./VButton.vue_vue_type_style_index_0_lang-2943ff29.js";import"./VFlex.vue_vue_type_style_index_0_lang-89cd9c2c.js";const I=a=>(N("data-v-e01b09cb"),a=a(),O(),a),J={class:"page-content-inner"},K={class:"columns mb-3"},R={class:"column"},W={class:"column is-3"},Z={class:"columns"},G={class:"column is-12"},Q={key:0,class:"is-flex-grow-0",textContent:"#"},X={key:0,class:"flex-list-inner"},aa={key:1,class:"flex-list-inner"},ta=I((()=>$("img",{class:"light-image",src:o,alt:""},null,-1))),ea=I((()=>$("img",{class:"dark-image",src:r,alt:""},null,-1))),la=["onClick"],sa=H(c({__name:"index",setup(o){p();const r=m(),{t:c}=v(),N=T(),O=g(!1);U().setPageTitle(c("Physician-therapist")),y({title:`${c("Donors-list-for-examination")} - ${N.app.name}`});const H=f({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),I=b({get:()=>H.pagination.current_page,set:async a=>{await ra(a)}}),sa={orderNumber:{format:(a,t,e)=>`${e+1}`,cellClass:"is-flex-grow-0"},name:{label:c("Fullname")},birth_date:{label:c("Date-of-birth")},visit_date:{label:c("Visit_date"),format:(a,t)=>{var e,l;return(null==(e=t.last_visit)?void 0:e.created_at)&&h(new Date(null==(l=t.last_visit)?void 0:l.created_at),"YYYY-MM-DD")}},visit_type:{label:c("Visit_type"),format:(a,t)=>{var e,l;return(null==(e=t.last_visit)?void 0:e.visit_type)&&c(null==(l=t.last_visit)?void 0:l.visit_type)}},directed_by:{label:c("Directed_by"),format:(a,t)=>{var e,l;return(null==(e=t.last_visit)?void 0:e.directed_by)&&c(null==(l=t.last_visit)?void 0:l.directed_by)}},personalized_donation:{label:c("Personalized_donation"),format:(a,t)=>{var e;return null==(e=t.last_visit)?void 0:e.personalized_donation}},visit_status:{label:c("Visit_status"),format:(a,t)=>{var e,l;return null==(l=null==(e=t.last_visit)?void 0:e.status)?void 0:l.name}},actions:{label:c("Actions")}},ia=g([{id:0,name:c("All")}]),na=g(""),oa=g(null);async function ra(a=1){var t,e;try{O.value=!0;const t=await q({page:a,status_id:na.value});Object.assign(H,t.result)}catch(l){r.error(c(null==(e=null==(t=l.response)?void 0:t.data)?void 0:e.errors))}finally{O.value=!1}}async function ua(){var a,t;try{O.value=!0,await E(null==(a=oa.value)?void 0:a.id,null==(t=oa.value)?void 0:t.last_visit.id),await ra(),oa.value=null}catch(e){r.error(e.message)}finally{O.value=!1}}return x((async()=>{const a=await S();ia.value=a.result})),j((()=>na.value),(async a=>{a?await ra():Object.assign(H,{data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}})})),(o,r)=>{const c=_,p=k("Multiselect"),m=u,v=d,g=s,y=t,f=i,b=k("RouterLink"),h=e,x=n,j=l,T=a;return w(),V("div",J,[$("div",K,[$("div",R,[C(c,{"with-icons":"",separator:"bullet",items:[{label:M(N).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:o.$t("Physician-therapist")},{label:o.$t("Donors-list-for-examination")}]},null,8,["items"])]),$("div",W,[C(v,{class:"is-curved-select"},{default:D((({id:a})=>[C(m,null,{default:D((()=>[C(p,{modelValue:M(na),"onUpdate:modelValue":r[0]||(r[0]=a=>A(na)?na.value=a:null),attrs:{id:a},options:M(ia),placeholder:o.$t("Select_donor_status"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"])])),_:2},1024)])),_:1})])]),$("div",Z,[$("div",G,[C(j,{columns:M(sa),data:M(H).data,limit:M(H).pagination.per_page,total:M(H).pagination.total},{default:D((()=>[C(h,{rounded:"","no-header":!M(O)&&0===M(H).data.length},{"header-column":D((({column:a})=>["orderNumber"===a.key?(w(),V("span",Q)):Y("",!0)])),body:D((()=>[M(O)?(w(),V("div",X,[(w(!0),V(F,null,P(M(H).pagination.per_page,(a=>(w(),V("div",{key:a,class:"flex-table-item"},[C(y,null,{default:D((()=>[C(g,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):Y("",!0),0===M(H).data.length?(w(),V("div",aa,[C(f,{title:o.$t("No_data"),subtitle:o.$t("There_is_no_data_that_match_your_query"),class:"my-6"},{image:D((()=>[ta,ea])),_:1},8,["title","subtitle"])])):Y("",!0)])),"body-cell":D((({row:a,column:t})=>["name"===t.key?(w(),z(b,{key:0,class:"table_link",to:`/app/physician-therapist/donors-for-examination/${a.id}`},{default:D((()=>[B(L(a.first_name)+" "+L(a.last_name)+" "+L(a.father_name)+" ",1)])),_:2},1032,["to"])):Y("",!0),"actions"===t.key?(w(),V("a",{key:1,href:"javascript:;",class:"has-text-warning",onClick:t=>async function(a){oa.value=a,N.$patch({confirmModalState:!0}),N.$patch({confirmModalOkButtonColor:"warning"})}(a)},L(o.$t("Complete")),9,la)):Y("",!0)])),_:1},8,["no-header"]),M(H).data.length?(w(),z(x,{key:0,"current-page":M(I),"onUpdate:current-page":r[1]||(r[1]=a=>A(I)?I.value=a:null),class:"mt-5","item-per-page":M(H).pagination.per_page,"total-items":M(H).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):Y("",!0)])),_:1},8,["columns","data","limit","total"])])]),C(T,{onConfirmAction:ua})])}}}),[["__scopeId","data-v-e01b09cb"]]);export{sa as default};