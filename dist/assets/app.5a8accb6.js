import{q as a,o as e,d as n,b as s,f as i,K as l,E as o,I as t,c as r,a as c,w as u,e as d,s as p,m as f,t as h,k as m,i as v,L as b,M as g,C as y,a3 as _,y as k,F as $,l as w,D as x,G as C,x as B,h as j,T as D,j as I,a2 as U,a4 as R,a5 as S,A as W,g as P}from"./index.4a029cdd.js";import{u as O}from"./viewWrapper.1a3e0821.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";import{_ as M}from"./VFlex.vue_vue_type_style_index_0_lang.71b806ec.js";import{_ as V,u as E}from"./VDropdown.vue_vue_type_style_index_0_lang.a0144077.js";import{_ as K}from"./VButton.vue_vue_type_style_index_0_lang.3d7c5df0.js";import{_ as F,o as q}from"./VAvatar.vue_vue_type_style_index_0_lang.738a9fea.js";import{_ as A}from"./AnimatedLogo.964e016d.js";import{u as z}from"./main.31b19d1c.js";import"./VIcon.vue_vue_type_script_setup_true_lang.16956841.js";import"./VPlaceload.cc73600a.js";const N=a({__name:"VViewWrapper",props:{topNav:{type:Boolean},full:{type:Boolean}},setup(a){const o=a,t=O();return(a,r)=>(e(),n("div",{class:i(["view-wrapper",[o.topNav&&"has-top-nav",o.full&&"view-wrapper-full",l(t).isPushed&&"is-pushed-full",l(t).isPushedBlock&&"is-pushed-block"]])},[s(a.$slots,"default")],2))}}),T={class:"page-content-wrapper"};const J=L({},[["render",function(a,i){return e(),n("div",T,[s(a.$slots,"default")])}]]),G={class:"page-content"};const Q=L({},[["render",function(a,i){return e(),n("div",G,[s(a.$slots,"default")])}]]),H=a=>(b("data-v-627e776f"),a=a(),g(),a),X=["onKeydown","onClick"],Y={class:"is-size-4 has-text-primary is-uppercase"},Z={class:"dropdown-head"},aa={class:"meta"},ea=H((()=>d("br",null,null,-1))),na=H((()=>d("span",null,h("Product Manager"),-1))),sa=H((()=>d("br",null,null,-1))),ia=H((()=>d("a",{href:"#",role:"menuitem",class:"dropdown-item is-media"},[d("div",{class:"icon"},[d("i",{"aria-hidden":"true",class:"lnil lnil-user-alt"})]),d("div",{class:"meta has-text-left"},[d("span",null,"Profile"),d("span",null,"View your profile")])],-1))),la=H((()=>d("hr",{class:"dropdown-divider"},null,-1))),oa={class:"dropdown-item is-button"},ta=L(a({__name:"UserProfileDropdown",setup(a){const n=o(),s=t(),i=r((()=>{var a;return null==(a=s.user)?void 0:a.username}));async function b(){await s.logoutUser(),n.push("/")}return(a,n)=>{const o=F,t=K,r=V;return e(),c(r,{right:"",spaced:"",class:"user-dropdown profile-dropdown"},{button:u((({toggle:a})=>[d("a",{tabindex:"0",class:"is-trigger dropdown-trigger","aria-haspopup":"true",onKeydown:p(f(a,["prevent"]),["space"]),onClick:a},[d("p",Y,h(l(i)),1)],40,X)])),content:u((()=>{var e;return[d("div",Z,[m(o,{size:"large",picture:"/images/avatars/svg/vuero-1.svg"}),d("div",aa,[d("span",null,h(null==(e=l(s).user)?void 0:e.email),1),ea,na])]),sa,ia,la,d("div",oa,[m(t,{class:"logout-button",icon:"feather:log-out",color:"primary",role:"menuitem",raised:"",fullwidth:"",onClick:b},{default:u((()=>[v(h(a.$t("Logout")),1)])),_:1})])]})),_:1})}}}),[["__scopeId","data-v-627e776f"]]),ra=["onClick"],ca=["onBlur"],ua=["onClick"],da=["src","alt"],pa=L(a({__name:"LocalesDropdown",setup(a){const s=o(),{locale:i,availableLocales:t}=y(),p=_("locale","uz");k(i,(()=>{p.value=i.value}));const f=r((()=>t.filter((a=>a!==i.value)))),m=r((()=>a=>{switch(a){case"en":return"/images/svg/flag_en.svg";case"ru":return"/images/svg/flag_ru.svg";default:return"/images/svg/flag_uz.svg"}}));return(a,o)=>{const t=V;return e(),c(t,{right:"",class:"locale-dropdown"},{button:u((({open:a,toggle:e})=>[d("button",{class:"button is-rounded outlined",onClick:e},h(l(i).toUpperCase()),9,ra)])),content:u((({close:a})=>[d("div",{class:"p-3",onBlur:a},[(e(!0),n($,null,w(l(f),((o,t)=>(e(),n("button",{key:t,class:"dropdown-item button is-flex is-align-items-center mb-3",onClick:()=>{var e;e=o,i.value=e,s.go(0),a()}},[d("img",{class:"mr-3",src:l(m)(o),alt:o+"flag"},null,8,da),d("span",null,h(o.toUpperCase()),1)],8,ua)))),128))],40,ca)])),_:1})}}}),[["__scopeId","data-v-0b602b7b"]]),fa=["checked"],ha=(a=>(b("data-v-6b2a94aa"),a=a(),g(),a))((()=>d("span",null,null,-1))),ma=L(a({__name:"DarkModeSwitcher",setup(a){const s=x();return(a,i)=>(e(),n("div",null,[d("label",{tabindex:"0",class:"dark-mode ml-auto",onKeydown:i[1]||(i[1]=p(f((a=>a.target.click()),["prevent"]),["space"]))},[d("input",{"data-cy":"dark-mode-toggle",type:"checkbox",checked:!l(s).isDark,onChange:i[0]||(i[0]=(...a)=>l(s).onChange&&l(s).onChange(...a))},null,40,fa),ha],32)]))}}),[["__scopeId","data-v-6b2a94aa"]]);const va=L({},[["render",function(a,n){const s=ma,i=pa,l=ta,o=M;return e(),c(o,{"column-gap":"1rem"},{default:u((()=>[m(s),m(i),m(l)])),_:1})}]]),ba={class:"sidebar-block-header"},ga={class:"sidebar-block-inner"},ya={class:"sidebar-block-footer"},_a=a({__name:"Sideblock",props:{theme:{default:"default"},isOpen:{type:Boolean}},setup(a){const o=a,t=r((()=>{switch(o.theme){case"color":return"is-colored";case"curved":return"is-curved";case"color-curved":return"is-colored is-curved";default:return""}}));return(a,o)=>(e(),n("div",{class:i(["sidebar-block is-active",[l(t)]])},[d("div",ba,[s(a.$slots,"header")]),d("div",ga,[s(a.$slots,"links")]),d("div",ya,[s(a.$slots,"bottom-links")])],2))}}),ka=L(a({props:{open:{type:[Boolean,String],default:void 0},collapseId:{type:String,default:void 0}},emits:["update:open"],setup(a,{slots:e,emit:n}){var s,i;const o=C(),t=B(!1),r=null!=(i=null==(s=e.default)?void 0:s.call(e))?i:[],c=o.name;r.forEach((a=>{var e,n;(null==(n=null==(e=a.props)?void 0:e.to)?void 0:n.name)&&c===a.props.to.name&&(t.value=!0)}));const u=B(Boolean(t.value||"string"==typeof a.collapseId&&a.open===a.collapseId||void 0===a.collapseId&&!0===a.open));function d(){"string"==typeof a.collapseId?a.collapseId===a.open?n("update:open"):n("update:open",a.collapseId):u.value=!u.value}return k((()=>a.open),(e=>{u.value=Boolean("string"==typeof a.collapseId&&l(e)===a.collapseId||void 0===a.collapseId&&!0===l(e))})),()=>{var a,n,s;const i=null==(a=e.header)?void 0:a.call(e),l=(null!=(s=null==(n=e.default)?void 0:n.call(e))?s:[]).map((a=>j("li",{},a))),o=j("a",{tabindex:0,class:"parent-link",onClick:a=>{a.preventDefault(),d()},onKeydown(a){"Space"===a.code&&(a.preventDefault(),a.stopPropagation(),d())}},i),t=j("div",{class:"collapse-wrap"},o),r=u.value?j("ul",{},l):void 0;return j("li",{class:["collapse-links has-children",u.value&&"active"]},[t,j(D,{name:"collapse-links-transition",mode:"out-in",class:"collapse-content"},{default:()=>r})])}}}),[["__scopeId","data-v-baa3b235"]]),$a=d("span",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:grid"})],-1),wa=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),xa=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Ca=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ba=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ja=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Da=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Ia=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ua=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ra=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Sa=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Wa=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Pa=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Oa=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),La=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Ma=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Va=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ea=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Ka=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Fa=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),qa=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Aa=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),za=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Na=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ta=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ja=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Ga=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Qa=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ha=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Xa=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ya=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Za=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),ae=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),ee=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ne=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),se=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),ie=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),le=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),oe=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),te=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),re=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),ce=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ue=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),de=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),pe=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),fe=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),he=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),me=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),ve=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),be=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ge=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ye=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),_e=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),ke=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),$e=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),we=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),xe=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Ce=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Be=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),je=a({__name:"MainMenuLinks",setup(a){const s=C(),i=B("");return k((()=>s.path),(a=>{a&&(a.startsWith("/app/registration")&&(i.value="registration"),a.startsWith("/app/physician-therapist")&&(i.value="physician-therapist"),a.startsWith("/app/screening")&&(i.value="screening"),a.startsWith("/app/donations")&&(i.value="donations"),a.startsWith("/app/bloodborne-infections-laboratory")&&(i.value="bloodborne-infections-laboratory"),a.startsWith("/app/clinical-biochemical-laboratory")&&(i.value="clinical-biochemical-laboratory"),a.startsWith("/app/buck-laboratory")&&(i.value="buck-laboratory"),a.startsWith("/app/immunological-research-department")&&(i.value="immunological-research-department"),a.startsWith("/app/recycling")&&(i.value="recycling"),a.startsWith("/app/quality-control")&&(i.value="quality-control"),a.startsWith("/app/blood-bank")&&(i.value="blood-bank"),a.startsWith("/app/blood-sampling")&&(i.value="blood-sampling"))}),{immediate:!0}),(a,s)=>{const l=I("RouterLink"),o=ka;return e(),n("ul",null,[d("li",null,[m(l,{to:"/app/dashboard",class:"single-link"},{default:u((()=>[$a,v(" "+h(a.$t("Dashboard")),1)])),_:1})]),m(o,{open:i.value,"onUpdate:open":s[0]||(s[0]=a=>i.value=a),"collapse-id":"registration"},{header:u((()=>[wa,v(" "+h(a.$t("Registration"))+" ",1),xa])),default:u((()=>[m(l,{to:"/app/registration/unified-donor-register",class:"is-submenu mb-3"},{default:u((()=>[Ca,d("span",null,h(a.$t("Unified-donor-register")),1)])),_:1}),m(l,{to:"/app/registration/donation-diverted-register",class:"is-submenu mb-3"},{default:u((()=>[Ba,d("span",null,h(a.$t("Donation-diverted-register")),1)])),_:1})])),_:1},8,["open"]),m(o,{open:i.value,"onUpdate:open":s[1]||(s[1]=a=>i.value=a),"collapse-id":"physician-therapist"},{header:u((()=>[ja,v(" "+h(a.$t("Physician-therapist"))+" ",1),Da])),default:u((()=>[m(l,{to:"/app/physician-therapist/donors-for-examination",class:"is-submenu mb-3"},{default:u((()=>[Ia,d("span",null,h(a.$t("Donors-list-for-examination")),1)])),_:1}),m(l,{to:"/app/physician-therapist/examined-donors-list",class:"is-submenu mb-3"},{default:u((()=>[Ua,d("span",null,h(a.$t("Examined-donor-register")),1)])),_:1})])),_:1},8,["open"]),m(o,{open:i.value,"onUpdate:open":s[2]||(s[2]=a=>i.value=a),"collapse-id":"screening"},{header:u((()=>[Ra,v(" "+h(a.$t("Screening"))+" ",1),Sa])),default:u((()=>[m(l,{to:"/app/screening/donors-list-for-primary-screening",class:"is-submenu mb-3"},{default:u((()=>[Wa,d("span",null,h(a.$t("Donors-list-for-primary-screening")),1)])),_:1}),m(l,{to:"/app/screening/screening-passed-donors-list",class:"is-submenu mb-3"},{default:u((()=>[Pa,d("span",null,h(a.$t("Screening-passed-donors-list")),1)])),_:1})])),_:1},8,["open"]),m(o,{open:i.value,"onUpdate:open":s[3]||(s[3]=a=>i.value=a),"collapse-id":"blood-sampling"},{header:u((()=>[Oa,v(" "+h(a.$t("Blood_sampling"))+" ",1),La])),default:u((()=>[m(l,{to:"/app/blood-sampling/list",class:"is-submenu mb-3"},{default:u((()=>[Ma,d("span",null,h(a.$t("Donor_list_for_blood_sampling")),1)])),_:1}),m(l,{to:"/app/blood-sampling/journal-blood-&-components",class:"is-submenu mb-3"},{default:u((()=>[Va,d("span",null,h(a.$t("Journal-blood-&-components")),1)])),_:1})])),_:1},8,["open"]),m(o,{open:i.value,"onUpdate:open":s[4]||(s[4]=a=>i.value=a),"collapse-id":"bloodborne-infections-laboratory"},{header:u((()=>[Ea,v(" "+h(a.$t("Bloodborne-infections-laboratory"))+" ",1),Ka])),default:u((()=>[m(l,{to:"/app/bloodborne-infections-laboratory/research-aimed-donations",class:"is-submenu mb-3"},{default:u((()=>[Fa,d("span",null,h(a.$t("Research-aimed-donations-list")),1)])),_:1}),m(l,{to:"/app/bloodborne-infections-laboratory/research-journal",class:"is-submenu mb-3"},{default:u((()=>[qa,d("span",null,h(a.$t("Bloodborne-infections-research-journal")),1)])),_:1})])),_:1},8,["open"]),m(o,{open:i.value,"onUpdate:open":s[5]||(s[5]=a=>i.value=a),"collapse-id":"clinical-biochemical-laboratory"},{header:u((()=>[Aa,v(" "+h(a.$t("Clinical-biochemical-laboratory"))+" ",1),za])),default:u((()=>[m(l,{to:"/app/clinical-biochemical-laboratory/research-aimed-donations",class:"is-submenu mb-3"},{default:u((()=>[Na,d("span",null,h(a.$t("Research-aimed-donations-list")),1)])),_:1}),m(l,{to:"/app/clinical-biochemical-laboratory/research-journal",class:"is-submenu mb-3"},{default:u((()=>[Ta,d("span",null,h(a.$t("Clinical-biochemical-research-journal")),1)])),_:1})])),_:1},8,["open"]),m(o,{open:i.value,"onUpdate:open":s[6]||(s[6]=a=>i.value=a),"collapse-id":"buck-laboratory"},{header:u((()=>[Ja,v(" "+h(a.$t("Buck-laboratory"))+" ",1),Ga])),default:u((()=>[m(l,{to:"/app/buck-laboratory/research-aimed-donations",class:"is-submenu mb-3"},{default:u((()=>[Qa,d("span",null,h(a.$t("Research-aimed-donations-list")),1)])),_:1}),m(l,{to:"/app/buck-laboratory/supernatant-plasmas",class:"is-submenu mb-3"},{default:u((()=>[Ha,d("span",null,h(a.$t("Supernatant-plasma-list")),1)])),_:1}),m(l,{to:"/app/buck-laboratory/serological-research-journal",class:"is-submenu mb-3"},{default:u((()=>[Xa,d("span",null,h(a.$t("Serological-Research-Journal")),1)])),_:1}),m(l,{to:"/app/buck-laboratory/buck-control-sterility",class:"is-submenu mb-3"},{default:u((()=>[Ya,d("span",null,h(a.$t("Buck-control-sterility")),1)])),_:1})])),_:1},8,["open"]),m(o,{open:i.value,"onUpdate:open":s[7]||(s[7]=a=>i.value=a),"collapse-id":"immunological-research-department"},{header:u((()=>[Za,v(" "+h(a.$t("Immunological-Research-Department"))+" ",1),ae])),default:u((()=>[m(l,{to:"/app/immunological-research-department/research-aimed-donations",class:"is-submenu mb-3"},{default:u((()=>[ee,d("span",null,h(a.$t("Research-aimed-donations-list")),1)])),_:1}),m(l,{to:"/app/immunological-research-department/research-journal",class:"is-submenu mb-3"},{default:u((()=>[ne,d("span",null,h(a.$t("Research-journal")),1)])),_:1})])),_:1},8,["open"]),m(o,{open:i.value,"onUpdate:open":s[8]||(s[8]=a=>i.value=a),"collapse-id":"donations"},{header:u((()=>[se,v(" "+h(a.$t("Donations"))+" ",1),ie])),default:u((()=>[m(l,{to:"/app/donations/donors-for-donation",class:"is-submenu mb-3"},{default:u((()=>[le,d("span",null,h(a.$t("Donors_for_donation")),1)])),_:1}),m(l,{to:"/app/donations/containers",class:"is-submenu mb-3"},{default:u((()=>[oe,d("span",null,h(a.$t("Containers_list")),1)])),_:1})])),_:1},8,["open"]),m(o,{open:i.value,"onUpdate:open":s[9]||(s[9]=a=>i.value=a),"collapse-id":"recycling"},{header:u((()=>[te,v(" "+h(a.$t("Recycling"))+" ",1),re])),default:u((()=>[m(l,{to:"/app/recycling/recycling-donations-list",class:"is-submenu mb-3"},{default:u((()=>[ce,d("span",null,h(a.$t("Recycling-donations-list")),1)])),_:1}),m(l,{to:"/app/recycling/component-distribution-donations",class:"is-submenu mb-3"},{default:u((()=>[ue,d("span",null,h(a.$t("Component-distribution-donations")),1)])),_:1}),m(l,{to:"/app/recycling/recycling-components",class:"is-submenu mb-3"},{default:u((()=>[de,d("span",null,h(a.$t("Recycling-components")),1)])),_:1}),m(l,{to:"/app/recycling/cryoprecipitate-processing-batches",class:"is-submenu mb-3"},{default:u((()=>[pe,d("span",null,h(a.$t("Cryoprecipitate-processing-batches")),1)])),_:1}),m(l,{to:"/app/recycling/FFPs-in-storage",class:"is-submenu mb-3"},{default:u((()=>[fe,d("span",null,h(a.$t("FFPs-in-storage")),1)])),_:1}),m(l,{to:"/app/recycling/component-recycling-distribution-log",class:"is-submenu mb-3"},{default:u((()=>[he,d("span",null,h(a.$t("Component-Recycling-Distribution-Log")),1)])),_:1})])),_:1},8,["open"]),m(o,{open:i.value,"onUpdate:open":s[10]||(s[10]=a=>i.value=a),"collapse-id":"forwarding"},{header:u((()=>[me,v(" "+h(a.$t("Forwarding"))+" ",1),ve])),default:u((()=>[m(l,{to:"/app/forwarding/storage-transferred-products",class:"is-submenu mb-3"},{default:u((()=>[be,d("span",null,h(a.$t("Storage_transferred_products")),1)])),_:1}),m(l,{to:"/app/forwarding/components-transferred-to-drugs-production",class:"is-submenu mb-3"},{default:u((()=>[ge,d("span",null,h(a.$t("Components_transferred_to_drugs_production")),1)])),_:1})])),_:1},8,["open"]),m(o,{open:i.value,"onUpdate:open":s[11]||(s[11]=a=>i.value=a),"collapse-id":"quality-control"},{header:u((()=>[ye,v(" "+h(a.$t("Quality-control"))+" ",1),_e])),default:u((()=>[m(l,{to:"/app/quality-control/received-components",class:"is-submenu mb-3"},{default:u((()=>[ke,d("span",null,h(a.$t("Received_components_list")),1)])),_:1}),m(l,{to:"/app/quality-control/inspected-components-log",class:"is-submenu mb-3"},{default:u((()=>[$e,d("span",null,h(a.$t("Inspected_components_log")),1)])),_:1})])),_:1},8,["open"]),m(o,{open:i.value,"onUpdate:open":s[12]||(s[12]=a=>i.value=a),"collapse-id":"blood-bank"},{header:u((()=>[we,v(" "+h(a.$t("Blood-bank"))+" ",1),xe])),default:u((()=>[m(l,{to:"/app/blood-bank/sticker-create-form",class:"is-submenu mb-3"},{default:u((()=>[Ce,d("span",null,h(a.$t("Sticker-create-form")),1)])),_:1}),m(l,{to:"/app/blood-bank/donor-system-directories",class:"is-submenu mb-3"},{default:u((()=>[Be,d("span",null,h(a.$t("Donor-system-directories")),1)])),_:1})])),_:1},8,["open"])])}}}),De={class:"navbar mobile-navbar is-hidden-desktop is-hidden-tablet","aria-label":"main navigation"},Ie={class:"container"},Ue={class:"navbar-brand"},Re={class:"brand-start"},Se=[d("span",null,null,-1),d("span",null,null,-1),d("span",null,null,-1)],We=a({__name:"MobileNavbar",props:{isOpen:{type:Boolean}},emits:["toggle"],setup(a,{emit:l}){const o=a;return(a,t)=>(e(),n("nav",De,[d("div",Ie,[d("div",Ue,[d("div",Re,[d("div",{class:i(["navbar-burger",[o.isOpen&&"is-active"]]),tabindex:"0",onKeydown:t[0]||(t[0]=p(f((a=>l("toggle")),["prevent"]),["space"])),onClick:t[1]||(t[1]=a=>l("toggle"))},Se,34)]),s(a.$slots,"brand")])])]))}}),Pe=[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:bell"},null,-1),d("span",{class:"new-indicator pulsate"},null,-1)],Oe={class:"navbar-dropdown is-boxed is-right"},Le=U('<div class="heading"><div class="heading-left"><h6 class="heading-title">Notifications</h6></div><div class="heading-right"><a class="notification-link" href="#">See all</a></div></div>',1),Me={class:"inner has-slimscroll"},Ve={class:"notification-list"},Ee={class:"notification-item"},Ke={class:"img-left"},Fe=d("div",{class:"user-content"},[d("p",{class:"user-info"},[d("span",{class:"name"},"Alice C."),v(" left a comment. ")]),d("p",{class:"time"},"1 hour ago")],-1),qe={class:"notification-item"},Ae={class:"img-left"},ze=d("div",{class:"user-content"},[d("p",{class:"user-info"},[d("span",{class:"name"},"Joshua S."),v(" uploaded a file. ")]),d("p",{class:"time"},"2 hours ago")],-1),Ne={class:"notification-item"},Te={class:"img-left"},Je=d("div",{class:"user-content"},[d("p",{class:"user-info"},[d("span",{class:"name"},"Tara S."),v(" sent you a message. ")]),d("p",{class:"time"},"2 hours ago")],-1),Ge={class:"notification-item"},Qe={class:"img-left"},He=d("div",{class:"user-content"},[d("p",{class:"user-info"},[d("span",{class:"name"},"Melany W."),v(" left a comment. ")]),d("p",{class:"time"},"3 hours ago")],-1),Xe=a({__name:"NotificationsMobileDropdown",setup(a){const s=B(),i=E(s);return(a,o)=>(e(),n("div",{ref_key:"dropdownElement",ref:s,class:"navbar-item has-dropdown is-notification is-hidden-tablet is-hidden-desktop"},[d("a",{class:"navbar-link is-arrowless",tabindex:"0",onKeydown:o[0]||(o[0]=p(f(((...a)=>l(i).toggle&&l(i).toggle(...a)),["prevent"]),["space"])),onClick:o[1]||(o[1]=(...a)=>l(i).toggle&&l(i).toggle(...a))},Pe,32),d("div",Oe,[Le,d("div",Me,[d("ul",Ve,[d("li",null,[d("a",Ee,[d("div",Ke,[d("img",{class:"user-photo",alt:"",src:"/images/avatars/svg/vuero-4.svg",onErrorOnce:o[2]||(o[2]=a=>l(q)(150))},null,32)]),Fe])]),d("li",null,[d("a",qe,[d("div",Ae,[d("img",{class:"user-photo",alt:"",src:"/images/avatars/svg/vuero-2.svg",onErrorOnce:o[3]||(o[3]=a=>l(q)(150))},null,32)]),ze])]),d("li",null,[d("a",Ne,[d("div",Te,[d("img",{class:"user-photo",alt:"",src:"/images/avatars/svg/vuero-5.svg",onErrorOnce:o[4]||(o[4]=a=>l(q)(150))},null,32)]),Je])]),d("li",null,[d("a",Ge,[d("div",Qe,[d("img",{class:"user-photo",alt:"",src:"/images/avatars/svg/vuero-9.svg",onErrorOnce:o[5]||(o[5]=a=>l(q)(150))},null,32)]),He])])])])])],512))}}),Ye=R("panels",(()=>{const a=_("active-panel","none");return{active:a,setActive:function(e){a.value=e},close:function(){a.value="none"}}})),Ze={class:"app-layout"},an=d("div",{class:"app-overlay"},null,-1),en={class:"brand-end"},nn={class:"page-title has-text-centered"},sn={class:"menu-toggle has-chevron"},ln=[d("span",{class:"rotate"},[d("i",{"aria-hidden":"true",class:"icon-line-top"}),d("i",{"aria-hidden":"true",class:"icon-line-center"}),d("i",{"aria-hidden":"true",class:"icon-line-bottom"})],-1)],on={class:"title-wrap"},tn={class:"title is-4"},rn={class:"title-wrap ml-auto"},cn={class:"title is-4"},un=a({__name:"AppLayout",props:{theme:{default:"default"},defaultSideblock:{default:"dashboard"},closeOnChange:{type:Boolean},openOnMounted:{type:Boolean},nowrap:{type:Boolean}},setup(a){const v=a,b=O(),{app:g}=z(),y=t();Ye(),o();const _=C(),$=B(!1),w=B(v.openOnMounted);B(v.defaultSideblock);const x=r((()=>{var a,e;return null==(e=null==(a=y.user)?void 0:a.branch)?void 0:e.name}));return S((()=>{var a;b.setPushedBlock(null!=(a=w.value)&&a)})),W((()=>{b.setPushed(!1)})),k((()=>_.fullPath),(()=>{$.value=!1,v.closeOnChange&&w.value&&(w.value=!1)})),(a,o)=>{const t=A,r=I("RouterLink"),y=Xe,_=ta,k=We,C=je,B=_a,j=va,U=Q,R=J,S=N;return e(),n("div",Ze,[an,m(k,{"is-open":$.value,onToggle:o[0]||(o[0]=a=>$.value=!$.value)},{brand:u((()=>[m(r,{to:"/",class:"navbar-item is-brand"},{default:u((()=>[m(t,{width:"38px",height:"38px"})])),_:1}),d("div",en,[m(y),m(_)])])),_:1},8,["is-open"]),m(D,{name:"slide-x"},{default:u((()=>[w.value?(e(),c(B,{key:0,theme:v.theme},{header:u((()=>[m(r,{to:"/app/dashboard",class:"sidebar-block-logo"},{default:u((()=>[m(t,{width:"36"})])),_:1}),d("h3",null,h(a.$t(l(g).name)),1)])),links:u((()=>[m(C)])),_:1},8,["theme"])):P("",!0)])),_:1}),m(S,{full:""},{default:u((()=>[m(R,null,{default:u((()=>[v.nowrap?s(a.$slots,"default",{key:0}):(e(),c(U,{key:1,class:"is-relative"},{default:u((()=>[d("div",nn,[d("div",{class:"vuero-hamburger nav-trigger push-resize",tabindex:"0",onKeydown:o[1]||(o[1]=p(f((a=>w.value=!w.value),["prevent"]),["space"])),onClick:o[2]||(o[2]=a=>w.value=!w.value)},[d("span",sn,[d("span",{class:i([[w.value&&"active"],"icon-box-toggle"])},ln,2)])],32),d("div",on,[d("h1",tn,h(l(b).pageTitle),1)]),d("div",rn,[d("h3",cn,h(l(x)),1)]),m(j,{class:"desktop-toolbar ml-auto"})]),s(a.$slots,"default")])),_:3}))])),_:3})])),_:3})])}}}),dn={},pn={};"function"==typeof dn&&dn(pn);const fn=L(pn,[["render",function(a,n){const s=I("RouterView"),i=un;return e(),c(i,{"open-on-mounted":""},{default:u((()=>[m(s)])),_:1})}]]);export{fn as default};
