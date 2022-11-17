import{_ as a,a as e,b as t,c as s,d as l,e as i,f as n,g as o,h as r}from"./search-7-dark.86fcb46e.js";import{_ as d,a as u}from"./VControl.96f035a3.js";import{_ as c}from"./VBreadcrumb.vue_vue_type_style_index_0_lang.28133e38.js";import{q as p,E as m,H as _,C as v,x as f,J as g,r as y,c as b,aC as h,A as x,y as k,j as w,o as j,d as V,e as $,k as D,K as C,w as P,g as z,F as L,l as M,a as Y,i as A,t as F,P as N,L as U,M as q}from"./index.575ce5b2.js";import{u as T}from"./main.7ee96f0e.js";import{u as B}from"./viewWrapper.79c37ac0.js";import{a as E,p as H}from"./patient.92107f38.js";import{_ as I}from"./_plugin-vue_export-helper.cdc0426e.js";import"./VFlex.vue_vue_type_style_index_0_lang.93e9d589.js";import"./VPlaceload.1a56b8cc.js";const J=a=>(U("data-v-88ccb8e7"),a=a(),q(),a),K={class:"page-content-inner"},O={class:"columns mb-3"},R={class:"column"},S={class:"column is-3"},W={class:"columns"},G={class:"column is-12"},Q={key:0,class:"is-flex-grow-0",textContent:"#"},X={key:0,class:"flex-list-inner"},Z={key:1,class:"flex-list-inner"},aa=J((()=>$("img",{class:"light-image",src:o,alt:""},null,-1))),ea=J((()=>$("img",{class:"dark-image",src:r,alt:""},null,-1))),ta=I(p({__name:"index",setup(o){m();const r=_(),{t:p}=v(),U=T(),q=f(!1);B().setPageTitle(p("Users_List")),g({title:`${p("Donors-list-for-examination")} - ${U.app.name}`});const I=y({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),J=b({get:()=>I.pagination.current_page,set:async a=>{await na(a)}}),ta={orderNumber:{format:(a,e,t)=>`${t+1}`,cellClass:"is-flex-grow-0"},name:{label:p("Fullname")},birth_date:{label:p("Date-of-birth")},visit_date:{label:p("Visit_date"),format:(a,e)=>{var t,s;return(null==(t=e.last_visit)?void 0:t.created_at)&&h(new Date(null==(s=e.last_visit)?void 0:s.created_at),"YYYY-MM-DD")}},visit_type:{label:p("Visit_type"),format:(a,e)=>{var t,s;return(null==(t=e.last_visit)?void 0:t.visit_type)&&p(null==(s=e.last_visit)?void 0:s.visit_type)}},directed_by:{label:p("Directed_by"),format:(a,e)=>{var t,s;return(null==(t=e.last_visit)?void 0:t.directed_by)&&p(null==(s=e.last_visit)?void 0:s.directed_by)}},personalized_donation:{label:p("Personalized_donation"),format:(a,e)=>{var t;return null==(t=e.last_visit)?void 0:t.personalized_donation}},visit_status:{label:p("Visit_status"),format:(a,e)=>{var t;return null==(t=e.status)?void 0:t.name}},actions:{label:p("Actions")}},sa=f(),la=f([{id:0,name:p("All")}]),ia=f("");async function na(a=1){var e,t;try{q.value=!0;const e=await H({page:a,status_id:ia.value});Object.assign(I,e.result)}catch(s){r.error(p(null==(t=null==(e=s.response)?void 0:e.data)?void 0:t.errors))}finally{q.value=!1}}return x((async()=>{const a=await E();la.value=a.result})),k((()=>ia.value),(async a=>{await na()})),(o,r)=>{const p=c,m=w("Multiselect"),_=d,v=u,f=a,g=e,y=t,b=s,h=w("RouterLink"),x=l,k=i,T=n;return j(),V("div",K,[$("div",O,[$("div",R,[D(p,{"with-icons":"",separator:"bullet",items:[{label:C(U).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:o.$t("Physician-therapist")},{label:o.$t("Donors-list-for-examination")}]},null,8,["items"])]),$("div",S,[D(v,{class:"is-curved-select"},{default:P((({id:a})=>[D(_,null,{default:P((()=>[D(m,{modelValue:ia.value,"onUpdate:modelValue":r[0]||(r[0]=a=>ia.value=a),attrs:{id:a},options:la.value,placeholder:o.$t("Select_donor_status"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"])])),_:2},1024)])),_:1})])]),$("div",W,[$("div",G,[D(T,{columns:C(ta),data:I.data,limit:I.pagination.per_page,total:I.pagination.total},{default:P((()=>[D(x,{rounded:"","no-header":!q.value&&0===I.data.length},{"header-column":P((({column:a})=>["orderNumber"===a.key?(j(),V("span",Q)):z("",!0)])),body:P((()=>[q.value?(j(),V("div",X,[(j(!0),V(L,null,M(I.pagination.per_page,(a=>(j(),V("div",{key:a,class:"flex-table-item"},[D(g,null,{default:P((()=>[D(f,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):z("",!0),0===I.data.length?(j(),V("div",Z,[D(y,{title:"No matches",subtitle:"There is no data that match your query.",class:"my-6"},{image:P((()=>[aa,ea])),_:1})])):z("",!0)])),"body-row-pre":P((({row:a})=>[a.id===sa.value?(j(),Y(b,{key:0,size:"tiny",class:"m-0 mb-1"})):z("",!0)])),"body-cell":P((({row:a,column:e})=>["name"===e.key?(j(),Y(h,{key:0,class:"table_link",to:`/app/physician-therapist/donors-for-examination/${a.id}`},{default:P((()=>[A(F(a.first_name)+" "+F(a.last_name)+" "+F(a.father_name),1)])),_:2},1032,["to"])):z("",!0),"actions"===e.key?(j(),Y(h,{key:1,class:"has-text-warning",to:"/app/physician-therapist/donors-for-examination"},{default:P((()=>[A(F(o.$t("Complete")),1)])),_:1})):z("",!0)])),_:1},8,["no-header"]),I.data.length?(j(),Y(k,{key:0,"current-page":C(J),"onUpdate:current-page":r[1]||(r[1]=a=>N(J)?J.value=a:null),class:"mt-5","item-per-page":I.pagination.per_page,"total-items":I.pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):z("",!0)])),_:1},8,["columns","data","limit","total"])])])])}}}),[["__scopeId","data-v-88ccb8e7"]]);export{ta as default};
