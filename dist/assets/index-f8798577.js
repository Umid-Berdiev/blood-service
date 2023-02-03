import{_ as t}from"./VModal.vue_vue_type_style_index_0_lang-ac88dda5.js";import{_ as a}from"./SubmitButton.vue_vue_type_script_setup_true_lang-96021f2c.js";import{_ as e}from"./DatePicker.vue_vue_type_script_setup_true_lang-8beaf1b4.js";import{_ as l,a as n}from"./VControl-e7b2630d.js";import{_ as s}from"./VRadio.vue_vue_type_style_index_0_lang-136dcf40.js";import{a6 as o,q as i,H as u,C as r,x as _,a7 as p,r as c,o as d,a as m,w as g,e as y,t as v,k as h,E as b,J as f,af as j,y as $,d as V,K as k,F as w,l as x,g as C,U as O,L as q,M as D}from"./index-21286bdb.js";import{_ as U}from"./_plugin-vue_export-helper-1b428a4d.js";import{_ as M}from"./VCard.vue_vue_type_script_setup_true_lang-1043f916.js";import{a as Q,_ as B,b as R,c as Y,d as F}from"./search-7-dark-81286176.js";import{_ as S}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-69f615bd.js";import{u as I}from"./main-16751c88.js";import{u as L}from"./viewWrapper-6ae5f61c.js";import"./VButton.vue_vue_type_style_index_0_lang-b78df6f3.js";import"./ClientOnly.vue_vue_type_script_lang-52200b90.js";import"./VFlex.vue_vue_type_style_index_0_lang-57370b27.js";const N=o();const P={class:"table-container"},T={class:"table is-fullwidth"},z=U(i({__name:"QualityCheckFormModal",props:{isOpen:{type:Boolean,default:!1},component:null},emits:["update:isOpen","update:list"],setup(o,{emit:i}){u();const{t:b}=r(),f=_(b("Quality_check_result")),j=_(!1),$=p(new Date,"DD.MM.YYYY"),V=c({status:"qualitative",date:$}),k=c({status:[],date:[]});function w(){Object.assign(V,{status:"qualitative",date:$}),Object.assign(k,{status:[],date:[]}),i("update:isOpen",!1)}return(i,u)=>{const r=s,_=l,p=n,c=e,b=a,$=t;return d(),m($,{open:o.isOpen,size:"large",title:f.value,actions:"right",onClose:w},{content:g((()=>[y("div",P,[y("table",T,[y("tbody",null,[y("tr",null,[y("th",null,v(i.$t("Donation_code")),1),y("td",null,v(o.component.donation_code),1)]),y("tr",null,[y("th",null,v(i.$t("Donation_date")),1),y("td",null,v(o.component.donation_date),1)]),y("tr",null,[y("th",null,v(i.$t("Component_name")),1),y("td",null,v(o.component.component_name),1)]),y("tr",null,[y("th",null,v(i.$t("Component_quality")),1),y("td",null,[h(p,null,{default:g((()=>[h(_,null,{default:g((()=>[h(r,{modelValue:V.status,"onUpdate:modelValue":u[0]||(u[0]=t=>V.status=t),value:"qualitative",color:"primary",label:i.$t("Satisfactory")},null,8,["modelValue","label"]),h(r,{modelValue:V.status,"onUpdate:modelValue":u[1]||(u[1]=t=>V.status=t),value:"not_qualitative",color:"primary",label:i.$t("Not_satisfactory")},null,8,["modelValue","label"])])),_:1})])),_:1})])]),y("tr",null,[y("th",null,v(i.$t("Result_date")),1),y("td",null,[h(c,{modelValue:V.date,"onUpdate:modelValue":u[2]||(u[2]=t=>V.date=t)},null,8,["modelValue"])])])])])])])),action:g((()=>[h(b,{loading:j.value,type:"button"},null,8,["loading"])])),_:1},8,["open","title"])}}}),[["__scopeId","data-v-857e50aa"]]),E=t=>(q("data-v-71b705fe"),t=t(),D(),t),H={class:"page-content-inner"},J={class:"columns mb-5"},K={class:"column is-narrow"},W={class:"columns"},Z={class:"column"},A={class:"table-container"},G={key:0,class:"flex-list-inner"},X=E((()=>y("img",{class:"light-image",src:Y,alt:""},null,-1))),tt=E((()=>y("img",{class:"dark-image",src:F,alt:""},null,-1))),at={key:1,class:"table is-hoverable is-fullwidth"},et={colspan:"5"},lt=["onClick"],nt=U(i({__name:"index",async setup(t){let a,e;b();const l=u(),{t:n}=r(),s=I(),o=_(!1),i=L();_(null),i.setPageTitle(n("Quality-control")),f({title:`${n("Received_components_list")} - ${s.app.name}`});const p=c({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),q=c({}),D=_(!1);async function U(){try{o.value=!0;const t=await async function(){try{const{data:t}=await N({url:"/quality-control"});return t}catch(t){throw t}}();Object.assign(p,t.result)}catch(t){l.error(n("Something_went_wrong"))}finally{o.value=!1}}return[a,e]=j((()=>U())),await a,e(),$(D,(function(t){!1===t&&Object.assign(q,{})})),(t,a)=>{const e=S,l=Q,n=B,i=R,u=M,r=z;return d(),V("div",H,[y("div",J,[y("div",K,[h(e,{"with-icons":"",separator:"bullet",items:[{label:k(s).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:t.$t("Quality-control")},{label:t.$t("Received_components_list")}]},null,8,["items"])])]),y("div",W,[y("div",Z,[h(u,null,{default:g((()=>[y("div",A,[0===k(p).data.length?(d(),V("div",G,[h(l,{title:t.$t("No_data"),subtitle:t.$t("There_is_no_data_that_match_your_query"),class:"my-6"},{image:g((()=>[X,tt])),_:1},8,["title","subtitle"])])):(d(),V("table",at,[y("thead",null,[y("tr",null,[y("th",null,v(t.$t("Donation_date")),1),y("th",null,v(t.$t("Donation_code")),1),y("th",null,v(t.$t("Dose")),1),y("th",null,v(t.$t("Quantity_ml")),1),y("th",null,v(t.$t("Component_name")),1)])]),y("tbody",null,[k(o)?(d(!0),V(w,{key:0},x(k(p).pagination.per_page,(t=>(d(),V("tr",{key:t},[y("td",et,[h(n,{lines:2,"last-line-width":"70%"})])])))),128)):(d(!0),V(w,{key:1},x(k(p).data,((t,a)=>(d(),V("tr",{key:a},[y("td",null,v(t.donation_date),1),y("td",null,[y("a",{href:"javascript:;",class:"has-text-primary",onClick:a=>function(t){Object.assign(q,t),D.value=!0}(t)},v(t.donation_code),9,lt)]),y("td",null,v(t.dose),1),y("td",null,v(t.quantity),1),y("td",null,v(t.component_name),1)])))),128))])]))]),k(p).data.length?(d(),m(i,{key:0,"current-page":k(p).pagination.current_page,"onUpdate:current-page":a[0]||(a[0]=t=>k(p).pagination.current_page=t),class:"mt-5","item-per-page":k(p).pagination.per_page,"total-items":k(p).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):C("",!0)])),_:1})])]),h(r,{"is-open":k(D),"onUpdate:is-open":a[1]||(a[1]=t=>O(D)?D.value=t:null),component:k(q),"onUpdate:list":U},null,8,["is-open","component"])])}}}),[["__scopeId","data-v-71b705fe"]]);export{nt as default};
