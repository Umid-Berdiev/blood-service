import{q as a,o as e,d as n,b as s,f as i,K as l,E as o,I as t,c as r,a as c,w as d,e as u,s as p,m as f,t as h,k as m,i as v,L as g,M as b,C as _,a2 as y,y as k,F as w,l as $,D as x,G as C,x as U,h as B,T as D,j as I,U as W,a1 as P,a3 as S,a4 as j,A as R,g as O,P as M}from"./index-202d6ef0.js";import{u as L}from"./viewWrapper-93d6f948.js";import{_ as V}from"./_plugin-vue_export-helper-1b428a4d.js";import{_ as E}from"./VFlex.vue_vue_type_style_index_0_lang-5c9a78f5.js";import{_ as K,u as F}from"./VDropdown.vue_vue_type_style_index_0_lang-2bccd22e.js";import{_ as A}from"./VButton.vue_vue_type_style_index_0_lang-8a17f68b.js";import{_ as q,o as z}from"./VAvatar.vue_vue_type_style_index_0_lang-acae1e3e.js";import{_ as N}from"./AnimatedLogo-142e1acf.js";import{u as T}from"./main-1fdef032.js";import"./VIcon.vue_vue_type_script_setup_true_lang-773aac4a.js";const J=a({__name:"VViewWrapper",props:{topNav:{type:Boolean},full:{type:Boolean}},setup(a){const o=a,t=L();return(a,r)=>(e(),n("div",{class:i(["view-wrapper",[o.topNav&&"has-top-nav",o.full&&"view-wrapper-full",l(t).isPushed&&"is-pushed-full",l(t).isPushedBlock&&"is-pushed-block"]])},[s(a.$slots,"default")],2))}}),G={class:"page-content-wrapper"};const H=V({},[["render",function(a,i){return e(),n("div",G,[s(a.$slots,"default")])}]]),Q={class:"page-content"};const Z=V({},[["render",function(a,i){return e(),n("div",Q,[s(a.$slots,"default")])}]]),X=a=>(g("data-v-627e776f"),a=a(),b(),a),Y=["onKeydown","onClick"],aa={class:"is-size-4 has-text-primary is-uppercase"},ea={class:"dropdown-head"},na={class:"meta"},sa=X((()=>u("br",null,null,-1))),ia=X((()=>u("span",null,h("Product Manager"),-1))),la=X((()=>u("br",null,null,-1))),oa=X((()=>u("a",{href:"#",role:"menuitem",class:"dropdown-item is-media"},[u("div",{class:"icon"},[u("i",{"aria-hidden":"true",class:"lnil lnil-user-alt"})]),u("div",{class:"meta has-text-left"},[u("span",null,"Profile"),u("span",null,"View your profile")])],-1))),ta=X((()=>u("hr",{class:"dropdown-divider"},null,-1))),ra={class:"dropdown-item is-button"},ca=V(a({__name:"UserProfileDropdown",setup(a){const n=o(),s=t(),i=r((()=>{var a;return null==(a=s.user)?void 0:a.username}));async function g(){await s.logoutUser(),n.push("/")}return(a,n)=>{const o=q,t=A,r=K;return e(),c(r,{right:"",spaced:"",class:"user-dropdown profile-dropdown"},{button:d((({toggle:a})=>[u("a",{tabindex:"0",class:"is-trigger dropdown-trigger","aria-haspopup":"true",onKeydown:p(f(a,["prevent"]),["space"]),onClick:a},[u("p",aa,h(l(i)),1)],40,Y)])),content:d((()=>{var e;return[u("div",ea,[m(o,{size:"large",picture:"/images/avatars/svg/vuero-1.svg"}),u("div",na,[u("span",null,h(null==(e=l(s).user)?void 0:e.email),1),sa,ia])]),la,oa,ta,u("div",ra,[m(t,{class:"logout-button",icon:"feather:log-out",color:"primary",role:"menuitem",raised:"",fullwidth:"",onClick:g},{default:d((()=>[v(h(a.$t("Logout")),1)])),_:1})])]})),_:1})}}}),[["__scopeId","data-v-627e776f"]]),da=["onClick"],ua=["onBlur"],pa=["onClick"],fa=["src","alt"],ha=V(a({__name:"LocalesDropdown",setup(a){const s=o(),{locale:i,availableLocales:t}=_(),p=y("locale","uz");k(i,(()=>{p.value=i.value}));const f=r((()=>t.filter((a=>a!==i.value)))),m=r((()=>a=>{switch(a){case"en":return"/images/svg/flag_en.svg";case"ru":return"/images/svg/flag_ru.svg";default:return"/images/svg/flag_uz.svg"}}));return(a,o)=>{const t=K;return e(),c(t,{right:"",class:"locale-dropdown"},{button:d((({open:a,toggle:e})=>[u("button",{class:"button is-rounded outlined",onClick:e},h(l(i).toUpperCase()),9,da)])),content:d((({close:a})=>[u("div",{class:"p-3",onBlur:a},[(e(!0),n(w,null,$(l(f),((o,t)=>(e(),n("button",{key:t,class:"dropdown-item button is-flex is-align-items-center mb-3",onClick:()=>{var e;e=o,i.value=e,s.go(0),a()}},[u("img",{class:"mr-3",src:l(m)(o),alt:o+"flag"},null,8,fa),u("span",null,h(o.toUpperCase()),1)],8,pa)))),128))],40,ua)])),_:1})}}}),[["__scopeId","data-v-0b602b7b"]]),ma=["checked"],va=(a=>(g("data-v-6b2a94aa"),a=a(),b(),a))((()=>u("span",null,null,-1))),ga=V(a({__name:"DarkModeSwitcher",setup(a){const s=x();return(a,i)=>(e(),n("div",null,[u("label",{tabindex:"0",class:"dark-mode ml-auto",onKeydown:i[1]||(i[1]=p(f((a=>a.target.click()),["prevent"]),["space"]))},[u("input",{"data-cy":"dark-mode-toggle",type:"checkbox",checked:!l(s).isDark,onChange:i[0]||(i[0]=(...a)=>l(s).onChange&&l(s).onChange(...a))},null,40,ma),va],32)]))}}),[["__scopeId","data-v-6b2a94aa"]]);const ba=V({},[["render",function(a,n){const s=ga,i=ha,l=ca,o=E;return e(),c(o,{"column-gap":"1rem"},{default:d((()=>[m(s),m(i),m(l)])),_:1})}]]),_a={class:"sidebar-block-header"},ya={class:"sidebar-block-inner"},ka={class:"sidebar-block-footer"},wa=a({__name:"Sideblock",props:{theme:{default:"default"},isOpen:{type:Boolean}},setup(a){const o=a,t=r((()=>{switch(o.theme){case"color":return"is-colored";case"curved":return"is-curved";case"color-curved":return"is-colored is-curved";default:return""}}));return(a,o)=>(e(),n("div",{class:i(["sidebar-block is-active",[l(t)]])},[u("div",_a,[s(a.$slots,"header")]),u("div",ya,[s(a.$slots,"links")]),u("div",ka,[s(a.$slots,"bottom-links")])],2))}}),$a=V(a({props:{open:{type:[Boolean,String],default:void 0},collapseId:{type:String,default:void 0}},emits:["update:open"],setup(a,{slots:e,emit:n}){var s;const i=C(),o=U(!1),t=(null==(s=e.default)?void 0:s.call(e))??[],r=i.name;t.forEach((a=>{var e,n;(null==(n=null==(e=a.props)?void 0:e.to)?void 0:n.name)&&r===a.props.to.name&&(o.value=!0)}));const c=U(Boolean(o.value||"string"==typeof a.collapseId&&a.open===a.collapseId||void 0===a.collapseId&&!0===a.open));function d(){"string"==typeof a.collapseId?a.collapseId===a.open?n("update:open"):n("update:open",a.collapseId):c.value=!c.value}return k((()=>a.open),(e=>{c.value=Boolean("string"==typeof a.collapseId&&l(e)===a.collapseId||void 0===a.collapseId&&!0===l(e))})),()=>{var a,n;const s=null==(a=e.header)?void 0:a.call(e),i=((null==(n=e.default)?void 0:n.call(e))??[]).map((a=>B("li",{},a))),l=B("a",{tabindex:0,class:"parent-link",onClick:a=>{a.preventDefault(),d()},onKeydown(a){"Space"===a.code&&(a.preventDefault(),a.stopPropagation(),d())}},s),o=B("div",{class:"collapse-wrap"},l),t=c.value?B("ul",{},i):void 0;return B("li",{class:["collapse-links has-children",c.value&&"active"]},[o,B(D,{name:"collapse-links-transition",mode:"out-in",class:"collapse-content"},{default:()=>t})])}}}),[["__scopeId","data-v-baa3b235"]]),xa={id:"sidebar-menu"},Ca=u("span",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:grid"})],-1),Ua=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Ba=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Da=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ia=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Wa=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Pa=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Sa=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ja=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ra=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Oa=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Ma=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),La=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Va=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Ea=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Ka=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Fa=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Aa=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),qa=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),za=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Na=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Ta=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Ja=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ga=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Ha=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Qa=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Za=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Xa=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ya=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),ae=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),ee=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ne=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),se=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),ie=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),le=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),oe=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),te=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),re=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ce=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),de=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ue=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),pe=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),fe=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),he=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),me=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ve=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ge=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),be=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),_e=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ye=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),ke=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),we=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),$e=u("div",{class:"icon"},[u("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),xe=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Ce=u("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ue=a({__name:"MainMenuLinks",setup(a){const s=C(),i=U("");return k((()=>s.path),(a=>{a&&(a.startsWith("/app/registration")&&(i.value="registration"),a.startsWith("/app/physician-therapist")&&(i.value="physician-therapist"),a.startsWith("/app/screening")&&(i.value="screening"),a.startsWith("/app/donations")&&(i.value="donations"),a.startsWith("/app/bloodborne-infections-laboratory")&&(i.value="bloodborne-infections-laboratory"),a.startsWith("/app/clinical-biochemical-laboratory")&&(i.value="clinical-biochemical-laboratory"),a.startsWith("/app/buck-laboratory")&&(i.value="buck-laboratory"),a.startsWith("/app/immunological-research-department")&&(i.value="immunological-research-department"),a.startsWith("/app/processing")&&(i.value="processing"),a.startsWith("/app/quality-control")&&(i.value="quality-control"),a.startsWith("/app/blood-bank")&&(i.value="blood-bank"),a.startsWith("/app/blood-sampling")&&(i.value="blood-sampling"),a.startsWith("/app/scrapping")&&(i.value="scrapping"),a.startsWith("/app/forwarding")&&(i.value="forwarding"))}),{immediate:!0}),(a,s)=>{const o=I("RouterLink"),t=$a;return e(),n("ul",xa,[u("li",null,[m(o,{to:"/app/dashboard",class:"single-link"},{default:d((()=>[Ca,v(" "+h(a.$t("Dashboard")),1)])),_:1})]),m(t,{open:l(i),"onUpdate:open":s[0]||(s[0]=a=>W(i)?i.value=a:null),"collapse-id":"registration"},{header:d((()=>[Ua,v(" "+h(a.$t("Registration"))+" ",1),Ba])),default:d((()=>[m(o,{to:"/app/registration/unified-donor-register",class:"is-submenu mb-3"},{default:d((()=>[Da,u("span",null,h(a.$t("Unified-donor-register")),1)])),_:1}),m(o,{to:"/app/registration/donation-diverted-register",class:"is-submenu mb-3"},{default:d((()=>[Ia,u("span",null,h(a.$t("Donation-diverted-register")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[1]||(s[1]=a=>W(i)?i.value=a:null),"collapse-id":"physician-therapist"},{header:d((()=>[Wa,v(" "+h(a.$t("Physician-therapist"))+" ",1),Pa])),default:d((()=>[m(o,{to:"/app/physician-therapist/donors-for-examination",class:"is-submenu mb-3"},{default:d((()=>[Sa,u("span",null,h(a.$t("Donors-list-for-examination")),1)])),_:1}),m(o,{to:"/app/physician-therapist/examined-donors-list",class:"is-submenu mb-3"},{default:d((()=>[ja,u("span",null,h(a.$t("Examined-donor-register")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[2]||(s[2]=a=>W(i)?i.value=a:null),"collapse-id":"screening"},{header:d((()=>[Ra,v(" "+h(a.$t("Screening"))+" ",1),Oa])),default:d((()=>[m(o,{to:"/app/screening/donors-list-for-primary-screening",class:"is-submenu mb-3"},{default:d((()=>[Ma,u("span",null,h(a.$t("Donors-list-for-primary-screening")),1)])),_:1}),m(o,{to:"/app/screening/screening-passed-donors-list",class:"is-submenu mb-3"},{default:d((()=>[La,u("span",null,h(a.$t("Screening-passed-donors-list")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[3]||(s[3]=a=>W(i)?i.value=a:null),"collapse-id":"blood-sampling"},{header:d((()=>[Va,v(" "+h(a.$t("Blood_sampling"))+" ",1),Ea])),default:d((()=>[m(o,{to:"/app/blood-sampling/list",class:"is-submenu mb-3"},{default:d((()=>[Ka,u("span",null,h(a.$t("Donor_list_for_blood_sampling")),1)])),_:1}),m(o,{to:"/app/blood-sampling/journal-blood-&-components",class:"is-submenu mb-3"},{default:d((()=>[Fa,u("span",null,h(a.$t("Journal-blood-&-components")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[4]||(s[4]=a=>W(i)?i.value=a:null),"collapse-id":"bloodborne-infections-laboratory"},{header:d((()=>[Aa,v(" "+h(a.$t("Bloodborne-infections-laboratory"))+" ",1),qa])),default:d((()=>[m(o,{to:"/app/bloodborne-infections-laboratory/research-aimed-donations",class:"is-submenu mb-3"},{default:d((()=>[za,u("span",null,h(a.$t("Research-aimed-donations-list")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[5]||(s[5]=a=>W(i)?i.value=a:null),"collapse-id":"clinical-biochemical-laboratory"},{header:d((()=>[Na,v(" "+h(a.$t("Clinical-biochemical-laboratory"))+" ",1),Ta])),default:d((()=>[m(o,{to:"/app/clinical-biochemical-laboratory/research-aimed-donations",class:"is-submenu mb-3"},{default:d((()=>[Ja,u("span",null,h(a.$t("Research-aimed-donations-list")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[6]||(s[6]=a=>W(i)?i.value=a:null),"collapse-id":"buck-laboratory"},{header:d((()=>[Ga,v(" "+h(a.$t("Buck-laboratory"))+" ",1),Ha])),default:d((()=>[m(o,{to:"/app/buck-laboratory/research-aimed-donations",class:"is-submenu mb-3"},{default:d((()=>[Qa,u("span",null,h(a.$t("Research-aimed-donations-list")),1)])),_:1}),m(o,{to:"/app/buck-laboratory/supernatant-plasmas",class:"is-submenu mb-3"},{default:d((()=>[Za,u("span",null,h(a.$t("Supernatant-plasma-list")),1)])),_:1}),m(o,{to:"/app/buck-laboratory/components-for-production-sterility-control",class:"is-submenu mb-3"},{default:d((()=>[Xa,u("span",null,h(a.$t("Components_for_production_sterility_control")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[7]||(s[7]=a=>W(i)?i.value=a:null),"collapse-id":"immunological-research-department"},{header:d((()=>[Ya,v(" "+h(a.$t("Immunological-Research-Department"))+" ",1),ae])),default:d((()=>[m(o,{to:"/app/immunological-research-department/research-aimed-donations",class:"is-submenu mb-3"},{default:d((()=>[ee,u("span",null,h(a.$t("Research-aimed-donations-list")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[8]||(s[8]=a=>W(i)?i.value=a:null),"collapse-id":"donations"},{header:d((()=>[ne,v(" "+h(a.$t("Donations"))+" ",1),se])),default:d((()=>[m(o,{to:"/app/donations/donors-for-donation",class:"is-submenu mb-3"},{default:d((()=>[ie,u("span",null,h(a.$t("Donors_for_donation")),1)])),_:1}),m(o,{to:"/app/donations/containers",class:"is-submenu mb-3"},{default:d((()=>[le,u("span",null,h(a.$t("Containers_list")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[9]||(s[9]=a=>W(i)?i.value=a:null),"collapse-id":"processing"},{header:d((()=>[oe,v(" "+h(a.$t("Processing"))+" ",1),te])),default:d((()=>[m(o,{to:"/app/processing/donations-for-processing",class:"is-submenu mb-3"},{default:d((()=>[re,u("span",null,h(a.$t("Donations_list_for_processing")),1)])),_:1}),m(o,{to:"/app/processing/donations-for-component-distribution",class:"is-submenu mb-3"},{default:d((()=>[ce,u("span",null,h(a.$t("Component-distribution-donations")),1)])),_:1}),m(o,{to:"/app/processing/components-for-recycling",class:"is-submenu mb-3"},{default:d((()=>[de,u("span",null,h(a.$t("Recycling-components")),1)])),_:1}),m(o,{to:"/app/processing/cryoprecipitate-batches-in-processing",class:"is-submenu mb-3"},{default:d((()=>[ue,u("span",null,h(a.$t("Cryoprecipitate-processing-batches")),1)])),_:1}),m(o,{to:"/app/processing/FFPs-in-storage",class:"is-submenu mb-3"},{default:d((()=>[pe,u("span",null,h(a.$t("FFPs-in-storage")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[10]||(s[10]=a=>W(i)?i.value=a:null),"collapse-id":"forwarding"},{header:d((()=>[fe,v(" "+h(a.$t("Forwarding"))+" ",1),he])),default:d((()=>[m(o,{to:"/app/forwarding/storage-transferred-products",class:"is-submenu mb-3"},{default:d((()=>[me,u("span",null,h(a.$t("Storage_transferred_products")),1)])),_:1}),m(o,{to:"/app/forwarding/components-transferred-to-drugs-production",class:"is-submenu mb-3"},{default:d((()=>[ve,u("span",null,h(a.$t("Components_transferred_to_drugs_production")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[11]||(s[11]=a=>W(i)?i.value=a:null),"collapse-id":"quality-control"},{header:d((()=>[ge,v(" "+h(a.$t("Quality-control"))+" ",1),be])),default:d((()=>[m(o,{to:"/app/quality-control/received-components",class:"is-submenu mb-3"},{default:d((()=>[_e,u("span",null,h(a.$t("Received_components_list")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[12]||(s[12]=a=>W(i)?i.value=a:null),"collapse-id":"scrapping"},{header:d((()=>[ye,v(" "+h(a.$t("Scrapping"))+" ",1),ke])),default:d((()=>[m(o,{to:"/app/scrapping/components-to-be-scrapped",class:"is-submenu mb-3"},{default:d((()=>[we,u("span",null,h(a.$t("Components_to_be_scrapped")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:l(i),"onUpdate:open":s[13]||(s[13]=a=>W(i)?i.value=a:null),"collapse-id":"handbook"},{header:d((()=>[$e,v(" "+h(a.$t("Handbook"))+" ",1),xe])),default:d((()=>[m(o,{to:"/app/handbook/reagents",class:"is-submenu mb-3"},{default:d((()=>[Ce,u("span",null,h(a.$t("Reagents")),1)])),_:1})])),_:1},8,["open"])])}}}),Be={class:"navbar mobile-navbar is-hidden-desktop is-hidden-tablet","aria-label":"main navigation"},De={class:"container"},Ie={class:"navbar-brand"},We={class:"brand-start"},Pe=[u("span",null,null,-1),u("span",null,null,-1),u("span",null,null,-1)],Se=a({__name:"MobileNavbar",props:{isOpen:{type:Boolean}},emits:["toggle"],setup(a,{emit:l}){const o=a;return(a,t)=>(e(),n("nav",Be,[u("div",De,[u("div",Ie,[u("div",We,[u("div",{class:i(["navbar-burger",[o.isOpen&&"is-active"]]),tabindex:"0",onKeydown:t[0]||(t[0]=p(f((a=>l("toggle")),["prevent"]),["space"])),onClick:t[1]||(t[1]=a=>l("toggle"))},Pe,34)]),s(a.$slots,"brand")])])]))}}),je=[u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:bell"},null,-1),u("span",{class:"new-indicator pulsate"},null,-1)],Re={class:"navbar-dropdown is-boxed is-right"},Oe=P('<div class="heading"><div class="heading-left"><h6 class="heading-title">Notifications</h6></div><div class="heading-right"><a class="notification-link" href="#">See all</a></div></div>',1),Me={class:"inner has-slimscroll"},Le={class:"notification-list"},Ve={class:"notification-item"},Ee={class:"img-left"},Ke=u("div",{class:"user-content"},[u("p",{class:"user-info"},[u("span",{class:"name"},"Alice C."),v(" left a comment. ")]),u("p",{class:"time"},"1 hour ago")],-1),Fe={class:"notification-item"},Ae={class:"img-left"},qe=u("div",{class:"user-content"},[u("p",{class:"user-info"},[u("span",{class:"name"},"Joshua S."),v(" uploaded a file. ")]),u("p",{class:"time"},"2 hours ago")],-1),ze={class:"notification-item"},Ne={class:"img-left"},Te=u("div",{class:"user-content"},[u("p",{class:"user-info"},[u("span",{class:"name"},"Tara S."),v(" sent you a message. ")]),u("p",{class:"time"},"2 hours ago")],-1),Je={class:"notification-item"},Ge={class:"img-left"},He=u("div",{class:"user-content"},[u("p",{class:"user-info"},[u("span",{class:"name"},"Melany W."),v(" left a comment. ")]),u("p",{class:"time"},"3 hours ago")],-1),Qe=a({__name:"NotificationsMobileDropdown",setup(a){const s=U(),i=F(s);return(a,o)=>(e(),n("div",{ref_key:"dropdownElement",ref:s,class:"navbar-item has-dropdown is-notification is-hidden-tablet is-hidden-desktop"},[u("a",{class:"navbar-link is-arrowless",tabindex:"0",onKeydown:o[0]||(o[0]=p(f(((...a)=>l(i).toggle&&l(i).toggle(...a)),["prevent"]),["space"])),onClick:o[1]||(o[1]=(...a)=>l(i).toggle&&l(i).toggle(...a))},je,32),u("div",Re,[Oe,u("div",Me,[u("ul",Le,[u("li",null,[u("a",Ve,[u("div",Ee,[u("img",{class:"user-photo",alt:"",src:"/images/avatars/svg/vuero-4.svg",onErrorOnce:o[2]||(o[2]=a=>l(z)(150))},null,32)]),Ke])]),u("li",null,[u("a",Fe,[u("div",Ae,[u("img",{class:"user-photo",alt:"",src:"/images/avatars/svg/vuero-2.svg",onErrorOnce:o[3]||(o[3]=a=>l(z)(150))},null,32)]),qe])]),u("li",null,[u("a",ze,[u("div",Ne,[u("img",{class:"user-photo",alt:"",src:"/images/avatars/svg/vuero-5.svg",onErrorOnce:o[4]||(o[4]=a=>l(z)(150))},null,32)]),Te])]),u("li",null,[u("a",Je,[u("div",Ge,[u("img",{class:"user-photo",alt:"",src:"/images/avatars/svg/vuero-9.svg",onErrorOnce:o[5]||(o[5]=a=>l(z)(150))},null,32)]),He])])])])])],512))}}),Ze=S("panels",(()=>{const a=y("active-panel","none");return{active:a,setActive:function(e){a.value=e},close:function(){a.value="none"}}})),Xe={class:"app-layout"},Ye=u("div",{class:"app-overlay"},null,-1),an={class:"brand-end"},en={class:"page-title has-text-centered"},nn={class:"menu-toggle has-chevron"},sn=[u("span",{class:"rotate"},[u("i",{"aria-hidden":"true",class:"icon-line-top"}),u("i",{"aria-hidden":"true",class:"icon-line-center"}),u("i",{"aria-hidden":"true",class:"icon-line-bottom"})],-1)],ln={class:"title-wrap"},on={class:"title is-4"},tn={class:"title-wrap ml-auto"},rn={class:"title is-4"},cn=a({__name:"AppLayout",props:{theme:{default:"default"},defaultSideblock:{default:"dashboard"},closeOnChange:{type:Boolean},openOnMounted:{type:Boolean},nowrap:{type:Boolean}},setup(a){const v=a,g=L(),{app:b}=T(),_=t();Ze(),o();const y=C(),w=U(!1),$=U(v.openOnMounted);U(v.defaultSideblock);const x=r((()=>{var a,e;return null==(e=null==(a=_.user)?void 0:a.branch)?void 0:e.name}));return j((()=>{g.setPushedBlock($.value??!1)})),R((()=>{g.setPushed(!1)})),k((()=>y.fullPath),(()=>{w.value=!1,v.closeOnChange&&$.value&&($.value=!1)})),(a,o)=>{const t=N,r=I("RouterLink"),_=Qe,y=ca,k=Se,C=Ue,U=wa,B=ba,W=Z,P=H,S=J;return e(),n("div",Xe,[Ye,m(k,{"is-open":l(w),onToggle:o[0]||(o[0]=a=>w.value=!l(w))},{brand:d((()=>[m(r,{to:"/",class:"navbar-item is-brand"},{default:d((()=>[m(t,{width:"38px",height:"38px"})])),_:1}),u("div",an,[m(_),m(y)])])),_:1},8,["is-open"]),m(D,{name:"slide-x"},{default:d((()=>[l($)?(e(),c(U,{key:0,theme:v.theme},{header:d((()=>[m(r,{to:"/app/dashboard",class:"sidebar-block-logo"},{default:d((()=>[m(t,{width:"36"})])),_:1}),u("h3",null,h(a.$t(l(b).name)),1)])),links:d((()=>[m(C)])),_:1},8,["theme"])):O("",!0)])),_:1}),m(S,{full:""},{default:d((()=>[m(P,null,{default:d((()=>[v.nowrap?s(a.$slots,"default",{key:0}):(e(),c(W,{key:1,class:"is-relative"},{default:d((()=>[u("div",en,[u("div",{class:"vuero-hamburger nav-trigger push-resize",tabindex:"0",onKeydown:o[1]||(o[1]=p(f((a=>$.value=!l($)),["prevent"]),["space"])),onClick:o[2]||(o[2]=a=>$.value=!l($))},[u("span",nn,[u("span",{class:i([[l($)&&"active"],"icon-box-toggle"])},sn,2)])],32),u("div",ln,[u("h1",on,h(l(g).pageTitle),1)]),u("div",tn,[u("h3",rn,h(l(x)),1)]),m(B,{class:"desktop-toolbar ml-auto"})]),s(a.$slots,"default")])),_:3}))])),_:3})])),_:3})])}}}),dn={},un={};"function"==typeof dn&&dn(un);const pn=V(un,[["render",function(a,n){const s=I("RouterView"),i=cn;return e(),c(i,{"open-on-mounted":""},{default:d((()=>[m(s,null,{default:d((({Component:a,route:n})=>[m(D,{name:"fade-slow",mode:"out-in"},{default:d((()=>[(e(),c(M(a),{key:n.fullPath}))])),_:2},1024)])),_:1})])),_:1})}]]);export{pn as default};