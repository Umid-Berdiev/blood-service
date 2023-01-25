import{_ as t}from"./VModal.vue_vue_type_style_index_0_lang-7e83e39e.js";import{_ as e}from"./SubmitButton.vue_vue_type_script_setup_true_lang-6ac3b45a.js";import{_ as a}from"./VCheckbox.vue_vue_type_style_index_0_lang-ac284439.js";import{_ as l,a as s}from"./VControl-786e135c.js";import{_ as o}from"./VInput.vue_vue_type_script_setup_true_lang-705097fe.js";import{q as n,H as i,C as r,x as u,r as d,A as _,o as c,a as p,w as m,d as y,F as v,e as f,t as g,k as h,K as b,l as V,g as $,L as j,M as x,a6 as k,E as w,J as q,a8 as D,y as U,S as C}from"./index-e3f64991.js";import{a as P}from"./additional-14b8c762.js";import{_ as z}from"./_plugin-vue_export-helper-1b428a4d.js";import{_ as F}from"./VCard.vue_vue_type_script_setup_true_lang-31199b72.js";import{a as O,_ as S,b as B,c as E,d as I}from"./search-7-dark-47707eb8.js";import{_ as M}from"./DonationForProcessingFilter.vue_vue_type_script_setup_true_lang-5790cf06.js";import{_ as A}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-09742679.js";import{u as L}from"./main-7469f747.js";import{u as T}from"./viewWrapper-5fb27d85.js";import"./VButton.vue_vue_type_style_index_0_lang-43587e05.js";import"./VPlaceload-d2cb982c.js";import"./VFlex.vue_vue_type_style_index_0_lang-71ef6e79.js";const H=t=>(j("data-v-fe2b2d36"),t=t(),x(),t),J={class:"box"},K={class:"table is-fullwidth"},N={class:""},Q={class:"has-text-info"},W={class:""},Y={class:"has-text-info"},Z={class:""},G={class:"has-text-info"},R={class:""},X={class:"has-text-info"},tt={class:""},et={class:"has-text-info"},at=H((()=>f("hr",{class:"is-divider"},null,-1))),lt={class:"box"},st={class:"is-size-5"},ot=H((()=>f("br",null,null,-1))),nt={class:"table is-fullwidth"},it={class:""},rt={class:"mr-3"},ut={class:"mr-3"},dt={class:"mr-3"},_t={class:"mr-3"},ct={class:"mr-3"},pt=z(n({__name:"ProcessingCardModal",props:{product:null,isOpen:{type:Boolean,default:!1}},emits:["update:isOpen","update:status"],setup(n,{emit:j}){const x=i(),{t:k}=r(),w=u(!1),q=u(k("Processing_card")),D=d({divided_into_doses:1,plasma:[{value:"",sent_for_quality_control:!1},{value:"",sent_for_quality_control:!1},{value:"",sent_for_quality_control:!1},{value:"",sent_for_quality_control:!1}],erythrocyte_mass:{value:"",sent_for_quality_control:!1,sent_for_sterility_control:!1},dose:{first:"",second:""}}),U=d({plasma:[],erythrocyte_mass:[],sent_for_quality_control:[],divided_into_doses:[],sent_for_sterility_control:[]}),C=u([]);async function z(){var t,e;try{w.value=!0,x.success(k("Data_saved_successfully")),F()}catch(a){x.error(a.message),Object.assign(U,null==(e=null==(t=a.response)?void 0:t.data)?void 0:e.errors)}finally{w.value=!1}}function F(){j("update:isOpen",!1)}return _((async()=>{await P().then((t=>C.value=t.result))})),(i,r)=>{const u=o,d=l,_=s,j=a,x=e,k=t;return c(),p(k,{open:n.isOpen,size:"big",title:b(q),actions:"right",onClose:F},{content:m((()=>{var t,e,a;return[n.product?(c(),y(v,{key:0},[f("div",J,[f("table",K,[f("tbody",null,[f("tr",null,[f("td",null,[f("span",N,g(i.$t("Donation_type"))+": ",1),f("span",Q,g(null==(t=n.product.donation_type)?void 0:t.name),1)]),f("td",null,[f("span",W,g(i.$t("Donation_code"))+": ",1),f("span",Y,g(n.product.donation_code),1)])]),f("tr",null,[f("td",null,[f("span",Z,g(i.$t("Donation_date"))+": ",1),f("span",G,g(n.product.date),1)]),f("td",null,[f("span",R,g(i.$t("Visit_type"))+": ",1),f("span",X,g(i.$t(n.product.visit_type)),1)])]),f("tr",null,[f("td",null,[f("span",tt,g(i.$t("Quantity_ml"))+": ",1),f("span",et,g(n.product.amount),1)])])])])]),at,f("div",lt,[3===(null==(e=n.product.donation_type)?void 0:e.id)?(c(),y(v,{key:0},[f("h5",st,g(i.$t("Components_received"))+":",1),ot,f("table",nt,[f("tbody",null,[f("tr",null,[f("td",it,[f("div",null,[h(_,{horizontal:"",class:"is-align-items-center"},{default:m((()=>[f("h5",rt,g(i.$t("Divided_into_doses")),1),h(d,null,{default:m((()=>[h(u,{modelValue:b(D).divided_into_doses,"onUpdate:modelValue":r[0]||(r[0]=t=>b(D).divided_into_doses=t),type:"number",min:1,max:4,style:{width:"5rem"}},null,8,["modelValue"])])),_:1})])),_:1})]),(c(!0),y(v,null,V(b(D).divided_into_doses,((t,e)=>(c(),p(_,{key:e,horizontal:"",class:"is-align-items-center"},{default:m((()=>[f("h5",ut,g(i.$t("Plasma_FFP_ml"))+" ("+g(t)+"-"+g(i.$t("Dose"))+") ",1),h(d,{raw:"",subcontrol:""},{default:m((()=>[h(u,{modelValue:b(D).plasma[e].value,"onUpdate:modelValue":t=>b(D).plasma[e].value=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),h(d,{raw:"",subcontrol:""},{default:m((()=>[h(j,{modelValue:b(D).plasma[e].sent_for_quality_control,"onUpdate:modelValue":t=>b(D).plasma[e].sent_for_quality_control=t,label:i.$t("Sample_sent_for_quality_control")},null,8,["modelValue","onUpdate:modelValue","label"])])),_:2},1024)])),_:2},1024)))),128))])]),f("tr",null,[f("td",null,[h(_,{horizontal:"",class:"is-align-items-center"},{default:m((()=>[f("h5",dt,g(i.$t("Erythrocyte_mass_ml")),1),h(d,null,{default:m((()=>[h(u,{modelValue:b(D).erythrocyte_mass.value,"onUpdate:modelValue":r[1]||(r[1]=t=>b(D).erythrocyte_mass.value=t)},null,8,["modelValue"])])),_:1}),h(d,null,{default:m((()=>[h(j,{modelValue:b(D).erythrocyte_mass.sent_for_quality_control,"onUpdate:modelValue":r[2]||(r[2]=t=>b(D).erythrocyte_mass.sent_for_quality_control=t),label:i.$t("Sample_sent_for_quality_control")},null,8,["modelValue","label"])])),_:1}),h(d,null,{default:m((()=>[h(j,{modelValue:b(D).erythrocyte_mass.sent_for_sterility_control,"onUpdate:modelValue":r[3]||(r[3]=t=>b(D).erythrocyte_mass.sent_for_sterility_control=t),label:i.$t("Sample_sent_for_sterility_control")},null,8,["modelValue","label"])])),_:1})])),_:1})])])])])],64)):$("",!0),2===(null==(a=n.product.donation_type)?void 0:a.id)?(c(),y(v,{key:1},[h(_,{horizontal:"",class:"is-align-items-center"},{default:m((()=>[f("h5",_t,g(i.$t("Dose"))+" 1, ml",1),h(d,null,{default:m((()=>[h(u,{modelValue:b(D).dose.first,"onUpdate:modelValue":r[4]||(r[4]=t=>b(D).dose.first=t)},null,8,["modelValue"])])),_:1})])),_:1}),h(_,{horizontal:"",class:"is-align-items-center"},{default:m((()=>[f("h5",ct,g(i.$t("Dose"))+" 2, ml",1),h(d,null,{default:m((()=>[h(u,{modelValue:b(D).dose.second,"onUpdate:modelValue":r[5]||(r[5]=t=>b(D).dose.second=t)},null,8,["modelValue"])])),_:1})])),_:1})],64)):$("",!0)])],64)):$("",!0)]})),action:m((()=>[h(x,{type:"button",loading:b(w),onClick:z},null,8,["loading"])])),_:1},8,["open","title"])}}}),[["__scopeId","data-v-fe2b2d36"]]),mt=k();const yt=t=>(j("data-v-306fb40d"),t=t(),x(),t),vt={class:"page-content-inner"},ft={class:"columns mb-5"},gt={class:"column is-narrow"},ht={class:"columns"},bt={class:"column"},Vt={class:"columns"},$t={class:"column"},jt={class:"table-container"},xt={key:0,class:"flex-list-inner"},kt=yt((()=>f("img",{class:"light-image",src:E,alt:""},null,-1))),wt=yt((()=>f("img",{class:"dark-image",src:I,alt:""},null,-1))),qt={key:1,class:"table is-hoverable is-fullwidth"},Dt={colspan:"3"},Ut=["onClick"],Ct=z(n({__name:"index",async setup(t){let e,a;w(),i();const{t:l}=r(),s=L(),o=u(!1),n=T();u(null),n.setPageTitle(l("Processing")),q({title:`${l("Donations_list_for_processing")} - ${s.app.name}`});const _=d({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),j=u(null),x=u(!1),k=d({donation_code:[],donation_type_id:[]}),P=d({visit_type_id:"",donation_type_id:null,donation_code:"",category_id:""});async function z(t){var e,a;try{o.value=!0;const e={...t,page:_.pagination.current_page},a=await async function(t){try{const{data:e}=await mt({url:"/visit-cards/donation-results/recycling",params:t});return e}catch(e){throw e}}(e);Object.assign(_,a.result)}catch(l){Object.assign(k,null==(a=null==(e=l.response)?void 0:e.data)?void 0:a.errors)}finally{o.value=!1}}function E(t){errors[t]=""}async function I(){_.data=[]}return[e,a]=D((()=>z(P))),await e,a(),U(x,(function(t){!1===t&&(j.value=null)})),(t,e)=>{const a=A,l=M,n=O,i=S,r=B,u=F,d=pt;return c(),y("div",vt,[f("div",ft,[f("div",gt,[h(a,{"with-icons":"",separator:"bullet",items:[{label:b(s).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:t.$t("Processing")},{label:t.$t("Donations_list_for_processing")}]},null,8,["items"])])]),f("div",ht,[f("div",bt,[h(l,{"is-loading":b(o),errors:b(k),onSearch:z,onClearForm:I,onClearError:E},null,8,["is-loading","errors"])])]),f("div",Vt,[f("div",$t,[h(u,null,{default:m((()=>[f("div",jt,[0===b(_).data.length?(c(),y("div",xt,[h(n,{title:t.$t("No_data"),subtitle:t.$t("There_is_no_data_that_match_your_query"),class:"my-6"},{image:m((()=>[kt,wt])),_:1},8,["title","subtitle"])])):(c(),y("table",qt,[f("thead",null,[f("tr",null,[f("th",null,g(t.$t("Donation_code")),1),f("th",null,g(t.$t("Donation_date")),1),f("th",null,g(t.$t("Donation_type")),1)])]),f("tbody",null,[b(o)?(c(!0),y(v,{key:0},V(b(_).pagination.per_page,(t=>(c(),y("tr",{key:t},[f("td",Dt,[h(i,{lines:2,"last-line-width":"70%"})])])))),128)):(c(!0),y(v,{key:1},V(b(_).data,((t,e)=>{var a;return c(),y("tr",{key:e},[f("td",null,[f("a",{href:"javascript:;",class:"has-text-primary",onClick:e=>function(t){j.value=t,x.value=!0}(t)},g(t.donation_code),9,Ut)]),f("td",null,g(t.date),1),f("td",null,g(null==(a=t.donation_type)?void 0:a.name),1)])})),128))])]))]),b(_).data.length?(c(),p(r,{key:0,"current-page":b(_).pagination.current_page,"onUpdate:current-page":e[0]||(e[0]=t=>b(_).pagination.current_page=t),class:"mt-5","item-per-page":b(_).pagination.per_page,"total-items":b(_).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):$("",!0)])),_:1})])]),h(d,{"is-open":b(x),"onUpdate:is-open":e[1]||(e[1]=t=>C(x)?x.value=t:null),product:b(j),"onUpdate:list":z},null,8,["is-open","product"])])}}}),[["__scopeId","data-v-306fb40d"]]);export{Ct as default};
