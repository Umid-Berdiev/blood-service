import{_ as t}from"./VCard.vue_vue_type_script_setup_true_lang-bb96f312.js";import{a,_ as e,b as l,c as n,d as o}from"./search-7-dark-8086cfd0.js";import{_ as s}from"./VFlex.vue_vue_type_style_index_0_lang-d4822231.js";import{_ as i}from"./VButton.vue_vue_type_style_index_0_lang-8d9e700e.js";import{_ as r}from"./DatePicker.vue_vue_type_script_setup_true_lang-b74769d0.js";import{_,a as p,b as d}from"./VControl-f7fb3a1b.js";import{_ as u}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-e0d2add1.js";import{q as c,E as m,H as y,C as g,x as f,r as h,J as v,c as b,y as $,j,o as x,d as w,e as k,k as V,K as q,w as C,i as S,t as P,F as D,l as O,a as I,g as T,L as z,M as R}from"./index-98bd5d96.js";import{u as U}from"./main-f6ba09a2.js";import{u as B}from"./viewWrapper-68c9a3c0.js";import{_ as F}from"./_plugin-vue_export-helper-1b428a4d.js";import"./ClientOnly.vue_vue_type_script_lang-c4665ea8.js";const L=t=>(z("data-v-8dda62a1"),t=t(),R(),t),M={class:"page-content-inner"},W={class:"columns mb-5"},E={class:"column is-narrow"},H={class:"columns"},J={class:"column"},K={class:"columns"},N={class:"column"},Z={class:"table-container"},A={key:0,class:"flex-list-inner"},G=L((()=>k("img",{class:"light-image",src:n,alt:""},null,-1))),Q=L((()=>k("img",{class:"dark-image",src:o,alt:""},null,-1))),X={key:1,class:"table is-hoverable is-fullwidth"},Y={rowspan:2},tt={rowspan:2},at={rowspan:2},et={rowspan:2},lt={rowspan:2},nt={colspan:2},ot={colspan:2},st={colspan:"3"},it={href:"javascript:;",class:"has-text-primary"},rt=L((()=>k("td",null,null,-1))),_t=L((()=>k("td",null,null,-1))),pt=L((()=>k("td",null,null,-1))),dt=F(c({__name:"index",setup(n){m(),y();const{t:o}=g(),c=U(),z=f(!1),R=B();f(null);const F=f([]),L=h({cryoprecipitate_series_id:null,processing_date:(new Date).toDateString()});R.setPageTitle(o("Processing")),v({title:`${o("Cryoprecipitate_processing")} - ${c.app.name}`});const dt=h({data:[{id:11,donation_code:"130100123400",donation_date:"10.12.2022",cryoprecipitate_quantities:55,supernatant_plasma_amount:65,plasma_sample_for_sterility_control:"Передать",blood_type:"O(I)",visit_type:"Безвозмезные донации",rh_factor:"Rh+",component_name:"Эритроцитная масса",donation_type:"Донация цельной крови",dose:"0",quantity:"340",come_from:"Республиканский центр крови",personalized_donation:"Николай Резанов",expiry_date:"01.03.2023"},{id:17,donation_code:"130100456500",donation_date:"18.12.2022",cryoprecipitate_quantities:55,supernatant_plasma_amount:65,plasma_sample_for_sterility_control:"Передать",blood_type:"O(I)",visit_type:"Платные донации",rh_factor:"Rh+",component_name:"Эритроцитная масса",donation_type:"Тромбоцитаферез",dose:"0",quantity:"340",come_from:"Республиканский центр крови",personalized_donation:"Николай Резанов",expiry_date:"01.03.2023"},{id:21,donation_code:"130100987300",donation_date:"18.12.2022",cryoprecipitate_quantities:55,supernatant_plasma_amount:65,plasma_sample_for_sterility_control:"Передать",blood_type:"O(I)",visit_type:"Платные донации",rh_factor:"Rh+",component_name:"Эритроцитная масса",donation_type:"Плазмаферез",dose:"0",quantity:"340",come_from:"Республиканский центр крови",personalized_donation:"Николай Резанов",expiry_date:"01.03.2023"}],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),ut=h({}),ct=f([]),mt=f(!1);return h({donation_code:[],donation_type_id:[]}),b({get:()=>ct.value.length>0&&ct.value.length===dt.data.length,set(t){ct.value=t?dt.data.map((t=>t.id)):[]}}),$(mt,(function(t){!1===t&&Object.assign(ut,{})})),(n,o)=>{const m=u,y=j("Multiselect"),g=_,f=p,h=d,v=r,b=i,$=s,R=a,U=e,B=l,ut=t;return x(),w("div",M,[k("div",W,[k("div",E,[V(m,{"with-icons":"",separator:"bullet",items:[{label:q(c).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:n.$t("Processing")},{label:n.$t("Cryoprecipitate_processing")}]},null,8,["items"])])]),k("div",H,[k("div",J,[V($,{"align-items":"end","column-gap":"1rem"},{default:C((()=>[V(f,{class:"is-align-items-center",label:n.$t("Suitability_decision")},{default:C((()=>[V(g,null,{default:C((()=>[V(y,{modelValue:q(L).cryoprecipitate_series_id,"onUpdate:modelValue":o[0]||(o[0]=t=>q(L).cryoprecipitate_series_id=t),options:q(F),placeholder:n.$t("Select"),label:"name","value-prop":"id",style:{minWidth:"15rem"}},null,8,["modelValue","options","placeholder"])])),_:1})])),_:1},8,["label"]),V(f,{class:"mb-0"},{default:C((()=>[V(h,null,{default:C((()=>[S(P(n.$t("Transfer_date_for_debiting")),1)])),_:1}),V(v,{modelValue:q(L).processing_date,"onUpdate:modelValue":o[1]||(o[1]=t=>q(L).processing_date=t)},null,8,["modelValue"])])),_:1}),V(b,{class:"mb-3",type:"button",color:"info"},{default:C((()=>[S(P(n.$t("Save")),1)])),_:1}),V(b,{class:"mb-3 ml-auto",type:"button",color:"info"},{default:C((()=>[S(P(n.$t("To_forwarding")),1)])),_:1})])),_:1})])]),k("div",K,[k("div",N,[V(ut,null,{default:C((()=>[k("div",Z,[0===q(dt).data.length?(x(),w("div",A,[V(R,{title:n.$t("No_data"),subtitle:n.$t("There_is_no_data_that_match_your_query"),class:"my-6"},{image:C((()=>[G,Q])),_:1},8,["title","subtitle"])])):(x(),w("table",X,[k("thead",null,[k("tr",null,[k("th",Y,P(n.$t("Donation_date")),1),k("th",tt,P(n.$t("Donation_code")),1),k("th",at,P(n.$t("Cryoprecipitate_quantities_ml")),1),k("th",et,P(n.$t("Supernatant_plasma_amount_ml")),1),k("th",lt,P(n.$t("Plasma_sample_for_sterility_control_ml")),1),k("th",nt,P(n.$t("Sterility_control_results")),1),k("th",ot,P(n.$t("Printing_label")),1)]),k("tr",null,[k("th",null,P(n.$t("Supernatant_plasma_samples")),1),k("th",null,P(n.$t("Cryoprecipitate_doses")),1),k("th",null,P(n.$t("Supernatant_plasma")),1),k("th",null,P(n.$t("Cryoprecipitate")),1)])]),k("tbody",null,[q(z)?(x(!0),w(D,{key:0},O(q(dt).pagination.per_page,(t=>(x(),w("tr",{key:t},[k("td",st,[V(U,{lines:2,"last-line-width":"70%"})])])))),128)):(x(!0),w(D,{key:1},O(q(dt).data,((t,a)=>(x(),w("tr",{key:a},[k("td",null,P(t.donation_date),1),k("td",null,P(t.donation_code),1),k("td",null,P(t.cryoprecipitate_quantities),1),k("td",null,P(t.supernatant_plasma_amount),1),k("td",null,[k("a",it,P(t.plasma_sample_for_sterility_control),1)]),rt,_t,pt,k("td",null,[V(b,{class:"mb-3 ml-auto",type:"button",color:"info"},{default:C((()=>[S(P(n.$t("Print")),1)])),_:1})])])))),128))])]))]),q(dt).data.length?(x(),I(B,{key:0,"current-page":q(dt).pagination.current_page,"onUpdate:current-page":o[2]||(o[2]=t=>q(dt).pagination.current_page=t),class:"mt-5","item-per-page":q(dt).pagination.per_page,"total-items":q(dt).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):T("",!0)])),_:1})])])])}}}),[["__scopeId","data-v-8dda62a1"]]);export{dt as default};
