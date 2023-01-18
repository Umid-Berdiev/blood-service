import{q as a,o as e,d as n,b as s,f as i,K as l,E as o,I as t,c as r,a as c,w as d,e as u,s as p,m as f,t as h,k as m,i as v,L as g,M as b,C as _,a2 as y,y as k,F as w,l as $,D as x,G as C,x as I,h as B,T as D,V as U,j as S,S as W,a1 as P,a3 as V,a4 as j,A as O,g as E,O as R}from"./index-ef344eb7.js";import{u as M}from"./viewWrapper-ee1c88fe.js";import{_ as L}from"./_plugin-vue_export-helper-1b428a4d.js";import{_ as K}from"./VFlex.vue_vue_type_style_index_0_lang-8060459e.js";import{_ as F,u as q}from"./VDropdown.vue_vue_type_style_index_0_lang-9795c8c9.js";import{_ as A}from"./VButton.vue_vue_type_style_index_0_lang-114b0359.js";import{_ as z,o as N}from"./VAvatar.vue_vue_type_style_index_0_lang-92d6a823.js";import{_ as T}from"./AnimatedLogo-cbbc83d6.js";import{u as J}from"./main-11940342.js";import"./VIcon.vue_vue_type_script_setup_true_lang-04ec52bd.js";import"./VPlaceload-5927026b.js";const G=a({__name:"VViewWrapper",props:{topNav:{type:Boolean},full:{type:Boolean}},setup(a){const o=a,t=M();return(a,r)=>(e(),n("div",{class:i(["view-wrapper",[o.topNav&&"has-top-nav",o.full&&"view-wrapper-full",l(t).isPushed&&"is-pushed-full",l(t).isPushedBlock&&"is-pushed-block"]])},[s(a.$slots,"default")],2))}}),Q={class:"page-content-wrapper"};const X=L({},[["render",function(a,i){return e(),n("div",Q,[s(a.$slots,"default")])}]]),H={class:"page-content"};const Y=L({},[["render",function(a,i){return e(),n("div",H,[s(a.$slots,"default")])}]]),Z=a=>(g("data-v-627e776f"),a=a(),b(),a),aa=["onKeydown","onClick"],ea={class:"is-size-4 has-text-primary is-uppercase"},na={class:"dropdown-head"},sa={class:"meta"},ia=Z((()=>u("br",null,null,-1))),la=Z((()=>u("span",null,h("Product Manager"),-1))),oa=Z((()=>u("br",null,null,-1))),ta=Z((()=>u("a",{href:"#",role:"menuitem",class:"dropdown-item is-media"},[u("div",{class:"icon"},[u("i",{"aria-hidden":"true",class:"lnil lnil-user-alt"})]),u("div",{class:"meta has-text-left"},[u("span",null,"Profile"),u("span",null,"View your profile")])],-1))),ra=Z((()=>u("hr",{class:"dropdown-divider"},null,-1))),ca={class:"dropdown-item is-button"},da=L(a({__name:"UserProfileDropdown",setup(a){const n=o(),s=t(),i=r((()=>{var a;return null==(a=s.user)?void 0:a.username}));async function g(){await s.logoutUser(),n.push("/")}return(a,n)=>{const o=z,t=A,r=F;return e(),c(r,{right:"",spaced:"",class:"user-dropdown profile-dropdown"},{button:d((({toggle:a})=>[u("a",{tabindex:"0",class:"is-trigger dropdown-trigger","aria-haspopup":"true",onKeydown:p(f(a,["prevent"]),["space"]),onClick:a},[u("p",ea,h(l(i)),1)],40,aa)])),content:d((()=>{var e;return[u("div",na,[m(o,{size:"large",picture:"/images/avatars/svg/vuero-1.svg"}),u("div",sa,[u("span",null,h(null==(e=l(s).user)?void 0:e.email),1),ia,la])]),oa,ta,ra,u("div",ca,[m(t,{class:"logout-button",icon:"feather:log-out",color:"primary",role:"menuitem",raised:"",fullwidth:"",onClick:g},{default:d((()=>[v(h(a.$t("Logout")),1)])),_:1})])]})),_:1})}}}),[["__scopeId","data-v-627e776f"]]),ua=["onClick"],pa=["onBlur"],fa=["onClick"],ha=["src","alt"],ma=L(a({__name:"LocalesDropdown",setup(a){const s=o(),{locale:i,availableLocales:t}=_(),p=y("locale","uz");k(i,(()=>{p.value=i.value}));const f=r((()=>t.filter((a=>a!==i.value)))),m=r((()=>a=>{switch(a){case"en":return"/images/svg/flag_en.svg";case"ru":return"/images/svg/flag_ru.svg";default:return"/images/svg/flag_uz.svg"}}));return(a,o)=>{const t=F;return e(),c(t,{right:"",class:"locale-dropdown"},{button:d((({open:a,toggle:e})=>[u("button",{class:"button is-rounded outlined",onClick:e},h(l(i).toUpperCase()),9,ua)])),content:d((({close:a})=>[u("div",{class:"p-3",onBlur:a},[(e(!0),n(w,null,$(l(f),((o,t)=>(e(),n("button",{key:t,class:"dropdown-item button is-flex is-align-items-center mb-3",onClick:()=>{var e;e=o,i.value=e,s.go(0),a()}},[u("img",{class:"mr-3",src:l(m)(o),alt:o+"flag"},null,8,ha),u("span",null,h(o.toUpperCase()),1)],8,fa)))),128))],40,pa)])),_:1})}}}),[["__scopeId","data-v-0b602b7b"]]),va=["checked"],ga=(a=>(g("data-v-6b2a94aa"),a=a(),b(),a))((()=>u("span",null,null,-1))),ba=L(a({__name:"DarkModeSwitcher",setup(a){const s=x();return(a,i)=>(e(),n("div",null,[u("label",{tabindex:"0",class:"dark-mode ml-auto",onKeydown:i[1]||(i[1]=p(f((a=>a.target.click()),["prevent"]),["space"]))},[u("input",{"data-cy":"dark-mode-toggle",type:"checkbox",checked:!l(s).isDark,onChange:i[0]||(i[0]=(...a)=>l(s).onChange&&l(s).onChange(...a))},null,40,va),ga],32)]))}}),[["__scopeId","data-v-6b2a94aa"]]);const _a=L({},[["render",function(a,n){const s=ba,i=ma,l=da,o=K;return e(),c(o,{"column-gap":"1rem"},{default:d((()=>[m(s),m(i),m(l)])),_:1})}]]),ya={class:"sidebar-block-header"},ka={class:"sidebar-block-inner"},wa={class:"sidebar-block-footer"},$a=a({__name:"Sideblock",props:{theme:{default:"default"},isOpen:{type:Boolean}},setup(a){const o=a,t=r((()=>{switch(o.theme){case"color":return"is-colored";case"curved":return"is-curved";case"color-curved":return"is-colored is-curved";default:return""}}));return(a,o)=>(e(),n("div",{class:i(["sidebar-block is-active",[l(t)]])},[u("div",ya,[s(a.$slots,"header")]),u("div",ka,[s(a.$slots,"links")]),u("div",wa,[s(a.$slots,"bottom-links")])],2))}}),xa=L(a({props:{open:{type:[Boolean,String],default:void 0},collapseId:{type:String,default:void 0}},emits:["update:open"],setup(a,{slots:e,emit:n}){var s;const i=C(),o=I(!1),t=(null==(s=e.default)?void 0:s.call(e))??[],r=i.name;t.forEach((a=>{var e,n;(null==(n=null==(e=a.props)?void 0:e.to)?void 0:n.name)&&r===a.props.to.name&&(o.value=!0)}));const c=I(Boolean(o.value||"string"==typeof a.collapseId&&a.open===a.collapseId||void 0===a.collapseId&&!0===a.open));function d(){"string"==typeof a.collapseId?a.collapseId===a.open?n("update:open"):n("update:open",a.collapseId):c.value=!c.value}return k((()=>a.open),(e=>{c.value=Boolean("string"==typeof a.collapseId&&l(e)===a.collapseId||void 0===a.collapseId&&!0===l(e))})),()=>{var a,n;const s=null==(a=e.header)?void 0:a.call(e),i=((null==(n=e.default)?void 0:n.call(e))??[]).map((a=>B("li",{},a))),l=B("a",{tabindex:0,class:"parent-link",onClick:a=>{a.preventDefault(),d()},onKeydown(a){"Space"===a.code&&(a.preventDefault(),a.stopPropagation(),d())}},s),o=B("div",{class:"collapse-wrap"},l),t=c.value?B("ul",{},i):void 0;return B("li",{class:["collapse-links has-children",c.value&&"active"]},[o,B(D,{name:"collapse-links-transition",mode:"out-in",class:"collapse-content"},{default:()=>t})])}}}),[["__scopeId","data-v-baa3b235"]]),Ca=u("span",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:grid"})],-1),Ia=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Ba=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Da=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ua=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Sa=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Wa=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Pa=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Va=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ja=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Oa=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Ea=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ra=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ma=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),La=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Ka=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Fa=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),qa=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Aa=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),za=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Na=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Ta=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Ja=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ga=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Qa=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Xa=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ha=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ya=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Za=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),ae=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ee=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),ne=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),se=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ie=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),le=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),oe=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),te=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),re=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ce=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),de=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ue=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),pe=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),fe=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),he=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),me=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ve=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),ge=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),be=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),_e=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ye=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),ke=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),we=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),$e=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),xe=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Ce=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Ie=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Be=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),De=a({__name:"MainMenuLinks",setup(a){const s=C(),i=I("");return U((function(){if("donations"==i.value){const a=document.getElementById("donations");console.log({el:a}),null==a||a.scrollIntoView()}})),k((()=>s.path),(a=>{if(a){if(a.startsWith("/app/registration")&&(i.value="registration"),a.startsWith("/app/physician-therapist")&&(i.value="physician-therapist"),a.startsWith("/app/screening")&&(i.value="screening"),a.startsWith("/app/donations")&&(i.value="donations"),a.startsWith("/app/bloodborne-infections-laboratory")&&(i.value="bloodborne-infections-laboratory"),a.startsWith("/app/clinical-biochemical-laboratory")&&(i.value="clinical-biochemical-laboratory"),a.startsWith("/app/buck-laboratory")&&(i.value="buck-laboratory"),a.startsWith("/app/immunological-research-department")&&(i.value="immunological-research-department"),a.startsWith("/app/processing")&&(i.value="processing"),a.startsWith("/app/quality-control")&&(i.value="quality-control"),a.startsWith("/app/blood-bank")){i.value="blood-bank";const a=document.getElementById("blood-bank");null==a||a.scrollIntoView()}if(a.startsWith("/app/blood-sampling")&&(i.value="blood-sampling"),a.startsWith("/app/scrapping")){i.value="scrapping";const a=document.getElementById("scrapping");console.log({el:a}),null==a||a.scrollIntoView()}a.startsWith("/app/forwarding")&&(i.value="forwarding")}}),{immediate:!0}),(a,s)=>{const o=S("RouterLink"),t=xa;return e(),n("ul",null,[u("li",null,[m(o,{to:"/app/dashboard",class:"single-link"},{default:d((()=>[Ca,v(" "+h(a.$t("Dashboard")),1)])),_:1})]),m(t,{open:l(i),"onUpdate:open":s[0]||(s[0]=a=>W(i)?i.value=a:null),"collapse-id":"registration"},{header:d((()=>[Ia,v(" "+h(a.$t("Registration"))+" ",1),Ba])),default:d((()=>[m(o,{to:"/app/registration/unified-donor-register",class:"is-submenu mb-3"},{default:d((()=>[Da,u("span",null,h(a.$t("Unified-donor-register")),1)])),_:1}),m(o,{to:"/app/registration/donation-diverted-register",class:"is-submenu mb-3"},{default:d((()=>[Ua,u("span",null,h(a.$t("Donation-diverted-register")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[1]||(s[1]=a=>W(i)?i.value=a:null),"collapse-id":"physician-therapist"},{header:d((()=>[Sa,v(" "+h(a.$t("Physician-therapist"))+" ",1),Wa])),default:d((()=>[m(o,{to:"/app/physician-therapist/donors-for-examination",class:"is-submenu mb-3"},{default:d((()=>[Pa,u("span",null,h(a.$t("Donors-list-for-examination")),1)])),_:1}),m(o,{to:"/app/physician-therapist/examined-donors-list",class:"is-submenu mb-3"},{default:d((()=>[Va,u("span",null,h(a.$t("Examined-donor-register")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[2]||(s[2]=a=>W(i)?i.value=a:null),"collapse-id":"screening"},{header:d((()=>[ja,v(" "+h(a.$t("Screening"))+" ",1),Oa])),default:d((()=>[m(o,{to:"/app/screening/donors-list-for-primary-screening",class:"is-submenu mb-3"},{default:d((()=>[Ea,u("span",null,h(a.$t("Donors-list-for-primary-screening")),1)])),_:1}),m(o,{to:"/app/screening/screening-passed-donors-list",class:"is-submenu mb-3"},{default:d((()=>[Ra,u("span",null,h(a.$t("Screening-passed-donors-list")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[3]||(s[3]=a=>W(i)?i.value=a:null),"collapse-id":"blood-sampling"},{header:d((()=>[Ma,v(" "+h(a.$t("Blood_sampling"))+" ",1),La])),default:d((()=>[m(o,{to:"/app/blood-sampling/list",class:"is-submenu mb-3"},{default:d((()=>[Ka,u("span",null,h(a.$t("Donor_list_for_blood_sampling")),1)])),_:1}),m(o,{to:"/app/blood-sampling/journal-blood-&-components",class:"is-submenu mb-3"},{default:d((()=>[Fa,u("span",null,h(a.$t("Journal-blood-&-components")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[4]||(s[4]=a=>W(i)?i.value=a:null),"collapse-id":"bloodborne-infections-laboratory"},{header:d((()=>[qa,v(" "+h(a.$t("Bloodborne-infections-laboratory"))+" ",1),Aa])),default:d((()=>[m(o,{to:"/app/bloodborne-infections-laboratory/research-aimed-donations",class:"is-submenu mb-3"},{default:d((()=>[za,u("span",null,h(a.$t("Research-aimed-donations-list")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[5]||(s[5]=a=>W(i)?i.value=a:null),"collapse-id":"clinical-biochemical-laboratory"},{header:d((()=>[Na,v(" "+h(a.$t("Clinical-biochemical-laboratory"))+" ",1),Ta])),default:d((()=>[m(o,{to:"/app/clinical-biochemical-laboratory/research-aimed-donations",class:"is-submenu mb-3"},{default:d((()=>[Ja,u("span",null,h(a.$t("Research-aimed-donations-list")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[6]||(s[6]=a=>W(i)?i.value=a:null),"collapse-id":"buck-laboratory"},{header:d((()=>[Ga,v(" "+h(a.$t("Buck-laboratory"))+" ",1),Qa])),default:d((()=>[m(o,{to:"/app/buck-laboratory/research-aimed-donations",class:"is-submenu mb-3"},{default:d((()=>[Xa,u("span",null,h(a.$t("Research-aimed-donations-list")),1)])),_:1}),m(o,{to:"/app/buck-laboratory/supernatant-plasmas",class:"is-submenu mb-3"},{default:d((()=>[Ha,u("span",null,h(a.$t("Supernatant-plasma-list")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[7]||(s[7]=a=>W(i)?i.value=a:null),"collapse-id":"immunological-research-department"},{header:d((()=>[Ya,v(" "+h(a.$t("Immunological-Research-Department"))+" ",1),Za])),default:d((()=>[m(o,{to:"/app/immunological-research-department/research-aimed-donations",class:"is-submenu mb-3"},{default:d((()=>[ae,u("span",null,h(a.$t("Research-aimed-donations-list")),1)])),_:1})])),_:1},8,["open"]),m(t,{id:"donations",open:l(i),"onUpdate:open":s[8]||(s[8]=a=>W(i)?i.value=a:null),"collapse-id":"donations"},{header:d((()=>[ee,v(" "+h(a.$t("Donations"))+" ",1),ne])),default:d((()=>[m(o,{to:"/app/donations/donors-for-donation",class:"is-submenu mb-3"},{default:d((()=>[se,u("span",null,h(a.$t("Donors_for_donation")),1)])),_:1}),m(o,{to:"/app/donations/containers",class:"is-submenu mb-3"},{default:d((()=>[ie,u("span",null,h(a.$t("Containers_list")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[9]||(s[9]=a=>W(i)?i.value=a:null),"collapse-id":"processing"},{header:d((()=>[le,v(" "+h(a.$t("Processing"))+" ",1),oe])),default:d((()=>[m(o,{to:"/app/processing/donations-for-processing",class:"is-submenu mb-3"},{default:d((()=>[te,u("span",null,h(a.$t("Donations_list_for_processing")),1)])),_:1}),m(o,{to:"/app/processing/donations-for-component-distribution",class:"is-submenu mb-3"},{default:d((()=>[re,u("span",null,h(a.$t("Component-distribution-donations")),1)])),_:1}),m(o,{to:"/app/processing/components-for-recycling",class:"is-submenu mb-3"},{default:d((()=>[ce,u("span",null,h(a.$t("Recycling-components")),1)])),_:1}),m(o,{to:"/app/processing/cryoprecipitate-batches-in-processing",class:"is-submenu mb-3"},{default:d((()=>[de,u("span",null,h(a.$t("Cryoprecipitate-processing-batches")),1)])),_:1}),m(o,{to:"/app/processing/FFPs-in-storage",class:"is-submenu mb-3"},{default:d((()=>[ue,u("span",null,h(a.$t("FFPs-in-storage")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[10]||(s[10]=a=>W(i)?i.value=a:null),"collapse-id":"forwarding"},{header:d((()=>[pe,v(" "+h(a.$t("Forwarding"))+" ",1),fe])),default:d((()=>[m(o,{to:"/app/forwarding/storage-transferred-products",class:"is-submenu mb-3"},{default:d((()=>[he,u("span",null,h(a.$t("Storage_transferred_products")),1)])),_:1}),m(o,{to:"/app/forwarding/components-transferred-to-drugs-production",class:"is-submenu mb-3"},{default:d((()=>[me,u("span",null,h(a.$t("Components_transferred_to_drugs_production")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[11]||(s[11]=a=>W(i)?i.value=a:null),"collapse-id":"quality-control"},{header:d((()=>[ve,v(" "+h(a.$t("Quality-control"))+" ",1),ge])),default:d((()=>[m(o,{to:"/app/quality-control/received-components",class:"is-submenu mb-3"},{default:d((()=>[be,u("span",null,h(a.$t("Received_components_list")),1)])),_:1}),m(o,{to:"/app/quality-control/inspected-components-log",class:"is-submenu mb-3"},{default:d((()=>[_e,u("span",null,h(a.$t("Inspected_components_log")),1)])),_:1})])),_:1},8,["open"]),m(t,{id:"scrapping",open:l(i),"onUpdate:open":s[12]||(s[12]=a=>W(i)?i.value=a:null),"collapse-id":"scrapping"},{header:d((()=>[ye,v(" "+h(a.$t("Scrapping"))+" ",1),ke])),default:d((()=>[m(o,{to:"/app/scrapping/components-to-be-scrapped",class:"is-submenu mb-3"},{default:d((()=>[we,u("span",null,h(a.$t("Components_to_be_scrapped")),1)])),_:1}),m(o,{to:"/app//app/scrapping/scrapped-components-log",class:"is-submenu mb-3"},{default:d((()=>[$e,u("span",null,h(a.$t("Scrapped_components_log")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[13]||(s[13]=a=>W(i)?i.value=a:null),"collapse-id":"blood-bank"},{header:d((()=>[xe,v(" "+h(a.$t("Blood-bank"))+" ",1),Ce])),default:d((()=>[m(o,{to:"/app/blood-bank/sticker-create-form",class:"is-submenu mb-3"},{default:d((()=>[Ie,u("span",null,h(a.$t("Sticker-create-form")),1)])),_:1}),m(o,{to:"/app/blood-bank/donor-system-directories",class:"is-submenu mb-3"},{default:d((()=>[Be,u("span",null,h(a.$t("Donor-system-directories")),1)])),_:1})])),_:1},8,["open"])])}}}),Ue={class:"navbar mobile-navbar is-hidden-desktop is-hidden-tablet","aria-label":"main navigation"},Se={class:"container"},We={class:"navbar-brand"},Pe={class:"brand-start"},Ve=[u("span",null,null,-1),u("span",null,null,-1),u("span",null,null,-1)],je=a({__name:"MobileNavbar",props:{isOpen:{type:Boolean}},emits:["toggle"],setup(a,{emit:l}){const o=a;return(a,t)=>(e(),n("nav",Ue,[u("div",Se,[u("div",We,[u("div",Pe,[u("div",{class:i(["navbar-burger",[o.isOpen&&"is-active"]]),tabindex:"0",onKeydown:t[0]||(t[0]=p(f((a=>l("toggle")),["prevent"]),["space"])),onClick:t[1]||(t[1]=a=>l("toggle"))},Ve,34)]),s(a.$slots,"brand")])])]))}}),Oe=[u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:bell"},null,-1),u("span",{class:"new-indicator pulsate"},null,-1)],Ee={class:"navbar-dropdown is-boxed is-right"},Re=P('<div class="heading"><div class="heading-left"><h6 class="heading-title">Notifications</h6></div><div class="heading-right"><a class="notification-link" href="#">See all</a></div></div>',1),Me={class:"inner has-slimscroll"},Le={class:"notification-list"},Ke={class:"notification-item"},Fe={class:"img-left"},qe=u("div",{class:"user-content"},[u("p",{class:"user-info"},[u("span",{class:"name"},"Alice C."),v(" left a comment. ")]),u("p",{class:"time"},"1 hour ago")],-1),Ae={class:"notification-item"},ze={class:"img-left"},Ne=u("div",{class:"user-content"},[u("p",{class:"user-info"},[u("span",{class:"name"},"Joshua S."),v(" uploaded a file. ")]),u("p",{class:"time"},"2 hours ago")],-1),Te={class:"notification-item"},Je={class:"img-left"},Ge=u("div",{class:"user-content"},[u("p",{class:"user-info"},[u("span",{class:"name"},"Tara S."),v(" sent you a message. ")]),u("p",{class:"time"},"2 hours ago")],-1),Qe={class:"notification-item"},Xe={class:"img-left"},He=u("div",{class:"user-content"},[u("p",{class:"user-info"},[u("span",{class:"name"},"Melany W."),v(" left a comment. ")]),u("p",{class:"time"},"3 hours ago")],-1),Ye=a({__name:"NotificationsMobileDropdown",setup(a){const s=I(),i=q(s);return(a,o)=>(e(),n("div",{ref_key:"dropdownElement",ref:s,class:"navbar-item has-dropdown is-notification is-hidden-tablet is-hidden-desktop"},[u("a",{class:"navbar-link is-arrowless",tabindex:"0",onKeydown:o[0]||(o[0]=p(f(((...a)=>l(i).toggle&&l(i).toggle(...a)),["prevent"]),["space"])),onClick:o[1]||(o[1]=(...a)=>l(i).toggle&&l(i).toggle(...a))},Oe,32),u("div",Ee,[Re,u("div",Me,[u("ul",Le,[u("li",null,[u("a",Ke,[u("div",Fe,[u("img",{class:"user-photo",alt:"",src:"/images/avatars/svg/vuero-4.svg",onErrorOnce:o[2]||(o[2]=a=>l(N)(150))},null,32)]),qe])]),u("li",null,[u("a",Ae,[u("div",ze,[u("img",{class:"user-photo",alt:"",src:"/images/avatars/svg/vuero-2.svg",onErrorOnce:o[3]||(o[3]=a=>l(N)(150))},null,32)]),Ne])]),u("li",null,[u("a",Te,[u("div",Je,[u("img",{class:"user-photo",alt:"",src:"/images/avatars/svg/vuero-5.svg",onErrorOnce:o[4]||(o[4]=a=>l(N)(150))},null,32)]),Ge])]),u("li",null,[u("a",Qe,[u("div",Xe,[u("img",{class:"user-photo",alt:"",src:"/images/avatars/svg/vuero-9.svg",onErrorOnce:o[5]||(o[5]=a=>l(N)(150))},null,32)]),He])])])])])],512))}}),Ze=V("panels",(()=>{const a=y("active-panel","none");return{active:a,setActive:function(e){a.value=e},close:function(){a.value="none"}}})),an={class:"app-layout"},en=u("div",{class:"app-overlay"},null,-1),nn={class:"brand-end"},sn={class:"page-title has-text-centered"},ln={class:"menu-toggle has-chevron"},on=[u("span",{class:"rotate"},[u("i",{"aria-hidden":"true",class:"icon-line-top"}),u("i",{"aria-hidden":"true",class:"icon-line-center"}),u("i",{"aria-hidden":"true",class:"icon-line-bottom"})],-1)],tn={class:"title-wrap"},rn={class:"title is-4"},cn={class:"title-wrap ml-auto"},dn={class:"title is-4"},un=a({__name:"AppLayout",props:{theme:{default:"default"},defaultSideblock:{default:"dashboard"},closeOnChange:{type:Boolean},openOnMounted:{type:Boolean},nowrap:{type:Boolean}},setup(a){const v=a,g=M(),{app:b}=J(),_=t();Ze(),o();const y=C(),w=I(!1),$=I(v.openOnMounted);I(v.defaultSideblock);const x=r((()=>{var a,e;return null==(e=null==(a=_.user)?void 0:a.branch)?void 0:e.name}));return j((()=>{g.setPushedBlock($.value??!1)})),O((()=>{g.setPushed(!1)})),k((()=>y.fullPath),(()=>{w.value=!1,v.closeOnChange&&$.value&&($.value=!1)})),(a,o)=>{const t=T,r=S("RouterLink"),_=Ye,y=da,k=je,C=De,I=$a,B=_a,U=Y,W=X,P=G;return e(),n("div",an,[en,m(k,{"is-open":l(w),onToggle:o[0]||(o[0]=a=>w.value=!l(w))},{brand:d((()=>[m(r,{to:"/",class:"navbar-item is-brand"},{default:d((()=>[m(t,{width:"38px",height:"38px"})])),_:1}),u("div",nn,[m(_),m(y)])])),_:1},8,["is-open"]),m(D,{name:"slide-x"},{default:d((()=>[l($)?(e(),c(I,{key:0,theme:v.theme},{header:d((()=>[m(r,{to:"/app/dashboard",class:"sidebar-block-logo"},{default:d((()=>[m(t,{width:"36"})])),_:1}),u("h3",null,h(a.$t(l(b).name)),1)])),links:d((()=>[m(C)])),_:1},8,["theme"])):E("",!0)])),_:1}),m(P,{full:""},{default:d((()=>[m(W,null,{default:d((()=>[v.nowrap?s(a.$slots,"default",{key:0}):(e(),c(U,{key:1,class:"is-relative"},{default:d((()=>[u("div",sn,[u("div",{class:"vuero-hamburger nav-trigger push-resize",tabindex:"0",onKeydown:o[1]||(o[1]=p(f((a=>$.value=!l($)),["prevent"]),["space"])),onClick:o[2]||(o[2]=a=>$.value=!l($))},[u("span",ln,[u("span",{class:i([[l($)&&"active"],"icon-box-toggle"])},on,2)])],32),u("div",tn,[u("h1",rn,h(l(g).pageTitle),1)]),u("div",cn,[u("h3",dn,h(l(x)),1)]),m(B,{class:"desktop-toolbar ml-auto"})]),s(a.$slots,"default")])),_:3}))])),_:3})])),_:3})])}}}),pn={},fn={};"function"==typeof pn&&pn(fn);const hn=L(fn,[["render",function(a,n){const s=S("RouterView"),i=un;return e(),c(i,{"open-on-mounted":""},{default:d((()=>[m(s,null,{default:d((({Component:a,route:n})=>[m(D,{name:"fade-slow",mode:"out-in"},{default:d((()=>[(e(),c(R(a),{key:n.fullPath}))])),_:2},1024)])),_:1})])),_:1})}]]);export{hn as default};
