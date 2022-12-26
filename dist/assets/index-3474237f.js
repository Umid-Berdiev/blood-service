import{_ as a,a as e,b as t}from"./VFlexTable.vue_vue_type_style_index_0_lang-f8ff2f75.js";import{c as s,d as r,_ as n,a as l,b as i}from"./search-7-dark-f0facebe.js";import{_ as o}from"./VFlex.vue_vue_type_style_index_0_lang-0938e556.js";import{_ as u}from"./VButtons.vue_vue_type_script_setup_true_lang-cc776021.js";import{_ as p}from"./VButton.vue_vue_type_style_index_0_lang-27d6885c.js";import{_}from"./VFlexItem.vue_vue_type_style_index_0_lang-ff50e60d.js";import{_ as m}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-d3c7c667.js";import{u as d}from"./chunk-DRAQDPQ2-4514f14e.js";import{a as c,b as g,r as f,ac as v,l as h,m as y,p as b,q as j,u as w,X as x,v as k,V,Q as $,y as C,M as F,W as D,t as P}from"./chunk-BGPNDDXN-dcda8805.js";import{u as I}from"./@vueuse_head-0d019878.js";import{u as W}from"./chunk-3UEUFEGV-d557e6b1.js";import{u as B}from"./useNotyf-1536ae84.js";import{u as E}from"./viewWrapper-c60f0ce7.js";import{_ as N}from"./RegistrationFilterForm.vue_vue_type_script_setup_true_lang-a076e0f5.js";import{u as R}from"./main-a3a6220c.js";import{l as G}from"./patient-7cc4d60d.js";import{_ as O}from"./lodash-94527813.js";import"./@vueuse_core-098eb702.js";import"./VPlaceload-2a65ae53.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./pinia-3af6ce52.js";import"./VCard.vue_vue_type_script_setup_true_lang-a9232da9.js";import"./VInput.vue_vue_type_script_setup_true_lang-29181b77.js";import"./VControl-fc151345.js";import"./VIMaskInput.vue_vue_type_script_lang-06d40a07.js";import"./userSession-0c0e9684.js";const Q={class:"page-content-inner"},T={class:"columns mt-1"},U={class:"column"},q={class:"columns"},M={class:"column is-12"},S={key:0,class:"is-flex-grow-0",textContent:"#"},X={key:0,class:"flex-list-inner"},A={key:1,class:"flex-list-inner"},H=$("img",{class:"light-image",src:s,alt:""},null,-1),L=$("img",{class:"dark-image",src:r,alt:""},null,-1),z=O.isEmpty,J=c({__name:"index",async setup(s){let r,c;d();const O=B(),{t:J}=W(),K=R(),Y=g(!1),Z=f({lastname:"",firstname:"",middlename:"",passpordId:""});E().setPageTitle(J("Registration")),I({title:`${J("Donation-diverted-register")} - ${K.app.name}`});const aa=f({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),ea=f({page:1}),ta={"#":{format:(a,e,t)=>`${t+1}`,cellClass:"is-flex-grow-0"},name:{label:J("Fullname"),format:(a,e)=>`${e.first_name} ${e.last_name}`},birth_date:{label:J("Date-of-birth")},gender:{label:J("Gender"),format:a=>J(a)},passport:{label:J("Passport_series_number"),format:(a,e)=>`${e.passport_series}${e.passport_number}`},withdrawal_end_date:{label:J("Withdrawal_end_date"),format:(a,e)=>{var t;return null==(t=e.withdrawal)?void 0:t.end_date}},withdrawal_reason:{label:J("Withdrawal_reason"),format:(a,e)=>{var t;return null==(t=e.withdrawal)?void 0:t.reason}},withdrawal_created_by:{label:J("Withdrawal_created_by"),format:(a,e)=>{var t;return null==(t=e.withdrawal)?void 0:t.created_by}}};async function sa(a){var e,t;try{Object.assign(ea,a),Y.value=!0;const e=await G(a);Object.assign(aa,e.result),z(e.result.data)?O.warning(J("Data_not_found")):O.success(`${J("Found")}: ${e.result.pagination.total} ${J("records")}`)}catch(s){Object.assign(Z,null==(t=null==(e=s.response)?void 0:e.data)?void 0:t.errors)}finally{Y.value=!1}}function ra(a){Z[a]=""}async function na(){aa.data=[]}function la(){}return g(),[r,c]=v((()=>sa(ea))),await r,c(),(s,r)=>{const d=m,c=_,g=p,f=u,v=o,I=n,W=a,B=l,E=e,R=i,G=t;return h(),y("div",Q,[b(v,{"justify-content":"space-between","flex-wrap":"wrap"},{default:j((()=>[b(c,null,{default:j((()=>[b(d,{"with-icons":"",separator:"bullet",items:[{label:w(K).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:s.$t("Registration")},{label:s.$t("Donation-diverted-register"),to:{name:"/app/registration/donation-diverted-register/"}}]},null,8,["items"])])),_:1}),b(c,null,{default:j((()=>[b(f,null,{default:j((()=>[b(g,{outlined:"",rounded:"",color:"info",icon:"feather:printer",onClick:x(la,["prevent"])},{default:j((()=>[k(V(s.$t("Print")),1)])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),$("div",T,[$("div",U,[b(N,{"is-loading":w(Y),errors:w(Z),onSearch:sa,onClearForm:na,onClearError:ra},null,8,["is-loading","errors"])])]),$("div",q,[$("div",M,[b(G,{columns:w(ta),data:w(aa).data,limit:w(aa).pagination.per_page,total:w(aa).pagination.total},{default:j((()=>[b(E,{rounded:"","no-header":!w(Y)&&0===w(aa).data.length},{"header-column":j((({column:a})=>["#"===a.key?(h(),y("span",S)):C("",!0)])),body:j((()=>[w(Y)?(h(),y("div",X,[(h(!0),y(F,null,D(w(aa).pagination.per_page,(a=>(h(),y("div",{key:a,class:"flex-table-item"},[b(W,null,{default:j((()=>[b(I,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):C("",!0),0===w(aa).data.length?(h(),y("div",A,[b(B,{title:"No matches",subtitle:"There is no data that match your query.",class:"my-6"},{image:j((()=>[H,L])),_:1})])):C("",!0)])),_:1},8,["no-header"]),w(aa).data.length?(h(),P(R,{key:0,"current-page":w(aa).pagination.current_page,"onUpdate:current-page":r[0]||(r[0]=a=>w(aa).pagination.current_page=a),class:"mt-5","item-per-page":w(aa).pagination.per_page,"total-items":w(aa).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):C("",!0)])),_:1},8,["columns","data","limit","total"])])])])}}});export{J as default};