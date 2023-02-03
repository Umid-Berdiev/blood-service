import{_ as a}from"./ConfirmActionModal.vue_vue_type_script_setup_true_lang-13822492.js";import{_ as t,a as e,b as l}from"./VFlexTable.vue_vue_type_style_index_0_lang-03a54f1c.js";import{_ as s,a as i,b as n,c as o,d as r}from"./search-7-dark-81286176.js";import{_ as u,a as _}from"./VControl-e7b2630d.js";import{_ as d}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-69f615bd.js";import{q as p,H as c,C as m,x as v,J as g,r as y,A as f,y as b,j as h,o as x,d as j,e as k,k as w,K as V,w as $,U as C,g as M,F as A,l as D,a as F,i as P,t as z,L as B,M as L}from"./index-21286bdb.js";import{u as N}from"./main-16751c88.js";import{u as O}from"./viewWrapper-6ae5f61c.js";import{b as T}from"./patient-26cab0f6.js";import{f as U,a as q}from"./index-4eb52e74.js";import{_ as S}from"./_plugin-vue_export-helper-1b428a4d.js";import"./VModal.vue_vue_type_style_index_0_lang-ac88dda5.js";import"./VButton.vue_vue_type_style_index_0_lang-b78df6f3.js";import"./VFlex.vue_vue_type_style_index_0_lang-57370b27.js";const H=a=>(B("data-v-13b24676"),a=a(),L(),a),I={class:"page-content-inner"},J={class:"columns mb-3"},K={class:"column"},R={class:"column is-3"},W={class:"columns"},Z={class:"column is-12"},E={key:0,class:"is-flex-grow-0",textContent:"#"},G={key:0,class:"flex-list-inner"},Q={key:1,class:"flex-list-inner"},X=H((()=>k("img",{class:"light-image",src:o,alt:""},null,-1))),Y=H((()=>k("img",{class:"dark-image",src:r,alt:""},null,-1))),aa=["onClick"],ta=S(p({__name:"index",setup(o){const r=c(),{t:p}=m(),B=N(),L=v(!1);O().setPageTitle(p("Physician-therapist")),g({title:`${p("Donors-list-for-examination")} - ${B.app.name}`});const S=y({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),H={orderNumber:{format:(a,t,e)=>`${e+1}`,cellClass:"is-flex-grow-0"},name:{label:p("Fullname")},birth_date:{label:p("Date-of-birth")},visit_date:{label:p("Visit_date"),format:(a,t)=>{var e;return null==(e=t.last_visit)?void 0:e.created_at}},visit_type:{label:p("Visit_type"),format:(a,t)=>{var e,l;return(null==(e=t.last_visit)?void 0:e.visit_type)&&p(null==(l=t.last_visit)?void 0:l.visit_type)}},directed_by:{label:p("Directed_by"),format:(a,t)=>{var e,l;return(null==(e=t.last_visit)?void 0:e.directed_by)&&p(null==(l=t.last_visit)?void 0:l.directed_by)}},personalized_donation:{label:p("Personalized_donation"),format:(a,t)=>{var e;return(null==(e=t.last_visit)?void 0:e.personalized_donation)||"-"},align:"center"},visit_status:{label:p("Visit_status"),format:(a,t)=>{var e,l;return null==(l=null==(e=t.last_visit)?void 0:e.status)?void 0:l.name}},actions:{label:p("Actions")}},ta=v([{id:0,name:p("All")}]),ea=v(""),la=v(null);async function sa(){var a,t;try{L.value=!0;const a={page:S.pagination.current_page,status_id:ea.value},t=await T(a);Object.assign(S,t.result)}catch(e){r.error(p(null==(t=null==(a=e.response)?void 0:a.data)?void 0:t.errors))}finally{L.value=!1}}async function ia(){var a,t;try{L.value=!0,await q(null==(a=la.value)?void 0:a.id,null==(t=la.value)?void 0:t.last_visit.id),await sa(),la.value=null}catch(e){r.error(e.message)}finally{L.value=!1}}return f((async()=>{const a=await U();ta.value=a.result})),b((()=>S.pagination.current_page),(async a=>{a&&await sa()})),b((()=>ea.value),(async a=>{a?await sa():Object.assign(S,{data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}})})),(o,r)=>{const p=d,c=h("Multiselect"),m=u,v=_,g=s,y=t,f=i,b=h("RouterLink"),N=e,O=n,T=l,U=a;return x(),j("div",I,[k("div",J,[k("div",K,[w(p,{"with-icons":"",separator:"bullet",items:[{label:V(B).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:o.$t("Physician-therapist")},{label:o.$t("Donors-list-for-examination")}]},null,8,["items"])]),k("div",R,[w(v,{class:"is-curved-select"},{default:$((({id:a})=>[w(m,null,{default:$((()=>[w(c,{modelValue:V(ea),"onUpdate:modelValue":r[0]||(r[0]=a=>C(ea)?ea.value=a:null),attrs:{id:a},options:V(ta),placeholder:o.$t("Select_donor_status"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"])])),_:2},1024)])),_:1})])]),k("div",W,[k("div",Z,[w(T,{columns:V(H),data:V(S).data,limit:V(S).pagination.per_page,total:V(S).pagination.total},{default:$((()=>[w(N,{rounded:"","no-header":!V(L)&&0===V(S).data.length},{"header-column":$((({column:a})=>["orderNumber"===a.key?(x(),j("span",E)):M("",!0)])),body:$((()=>[V(L)?(x(),j("div",G,[(x(!0),j(A,null,D(V(S).pagination.per_page,(a=>(x(),j("div",{key:a,class:"flex-table-item"},[w(y,null,{default:$((()=>[w(g,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):M("",!0),0===V(S).data.length?(x(),j("div",Q,[w(f,{title:o.$t("No_data"),subtitle:o.$t("There_is_no_data_that_match_your_query"),class:"my-6"},{image:$((()=>[X,Y])),_:1},8,["title","subtitle"])])):M("",!0)])),"body-cell":$((({row:a,column:t})=>["name"===t.key?(x(),F(b,{key:0,class:"table_link",to:`/app/physician-therapist/donors-for-examination/${a.id}`},{default:$((()=>[P(z(a.first_name)+" "+z(a.last_name)+" "+z(a.father_name)+" ",1)])),_:2},1032,["to"])):M("",!0),"actions"===t.key?(x(),j("a",{key:1,href:"javascript:;",class:"has-text-warning",onClick:t=>async function(a){la.value=a,B.$patch({confirmModalState:!0}),B.$patch({confirmModalOkButtonColor:"warning"})}(a)},z(o.$t("Complete")),9,aa)):M("",!0)])),_:1},8,["no-header"]),V(S).data.length?(x(),F(O,{key:0,"current-page":V(S).pagination.current_page,"onUpdate:current-page":r[1]||(r[1]=a=>V(S).pagination.current_page=a),class:"mt-5","item-per-page":V(S).pagination.per_page,"total-items":V(S).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):M("",!0)])),_:1},8,["columns","data","limit","total"])])]),w(U,{onConfirmAction:ia})])}}}),[["__scopeId","data-v-13b24676"]]);export{ta as default};
