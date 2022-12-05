import{q as a,o as e,d as n,b as s,f as i,K as l,E as t,I as o,c as r,a as c,w as u,e as d,s as p,m as h,t as f,k as m,i as v,L as b,M as g,C as y,Y as _,y as k,F as $,l as w,D as x,G as C,x as j,h as B,T as D,j as I,X as U,Z as R,_ as S,A as P,g as W}from"./index.7c55eebc.js";import{u as O}from"./viewWrapper.36a4ca30.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";import{_ as M}from"./VFlex.vue_vue_type_style_index_0_lang.7a5f3769.js";import{_ as V,u as E}from"./VDropdown.vue_vue_type_style_index_0_lang.45a721e8.js";import{_ as K}from"./VButton.vue_vue_type_style_index_0_lang.108743ff.js";import{_ as q,o as A}from"./VAvatar.vue_vue_type_style_index_0_lang.06391b00.js";import{_ as F}from"./AnimatedLogo.1a9aa003.js";import{u as z}from"./main.77f12ddf.js";import"./VIcon.vue_vue_type_script_setup_true_lang.a288365d.js";import"./VPlaceload.b6410537.js";const N=a({__name:"VViewWrapper",props:{topNav:{type:Boolean},full:{type:Boolean}},setup(a){const t=a,o=O();return(a,r)=>(e(),n("div",{class:i(["view-wrapper",[t.topNav&&"has-top-nav",t.full&&"view-wrapper-full",l(o).isPushed&&"is-pushed-full",l(o).isPushedBlock&&"is-pushed-block"]])},[s(a.$slots,"default")],2))}}),T={class:"page-content-wrapper"};const J=L({},[["render",function(a,i){return e(),n("div",T,[s(a.$slots,"default")])}]]),Q={class:"page-content"};const G=L({},[["render",function(a,i){return e(),n("div",Q,[s(a.$slots,"default")])}]]),X=a=>(b("data-v-72d50ed2"),a=a(),g(),a),Y=["onKeydown","onClick"],Z={class:"is-size-4 has-text-primary is-uppercase"},H={class:"dropdown-head"},aa={class:"meta"},ea=X((()=>d("br",null,null,-1))),na=X((()=>d("span",null,f("Product Manager"),-1))),sa=X((()=>d("br",null,null,-1))),ia=X((()=>d("a",{href:"#",role:"menuitem",class:"dropdown-item is-media"},[d("div",{class:"icon"},[d("i",{"aria-hidden":"true",class:"lnil lnil-user-alt"})]),d("div",{class:"meta has-text-left"},[d("span",null,"Profile"),d("span",null,"View your profile")])],-1))),la=X((()=>d("hr",{class:"dropdown-divider"},null,-1))),ta={class:"dropdown-item is-button"},oa=L(a({__name:"UserProfileDropdown",setup(a){const n=t(),s=o(),i=r((()=>{var a;return null==(a=s.user)?void 0:a.username}));async function b(){await s.logoutUser(),n.push("/")}return(a,n)=>{const t=q,o=K,r=V;return e(),c(r,{right:"",spaced:"",class:"user-dropdown profile-dropdown"},{button:u((({toggle:a})=>[d("a",{tabindex:"0",class:"is-trigger dropdown-trigger","aria-haspopup":"true",onKeydown:p(h(a,["prevent"]),["space"]),onClick:a},[d("p",Z,f(l(i)),1)],40,Y)])),content:u((()=>{var e;return[d("div",H,[m(t,{size:"large",picture:"/images/avatars/svg/vuero-1.svg"}),d("div",aa,[d("span",null,f(null==(e=l(s).user)?void 0:e.email),1),ea,na])]),sa,ia,la,d("div",ta,[m(o,{class:"logout-button",icon:"feather:log-out",color:"primary",role:"menuitem",raised:"",fullwidth:"",onClick:b},{default:u((()=>[v(f(a.$t("Logout")),1)])),_:1})])]})),_:1})}}}),[["__scopeId","data-v-72d50ed2"]]),ra=["onClick"],ca=["onBlur"],ua=["onClick"],da=["src","alt"],pa=L(a({__name:"LocalesDropdown",setup(a){const s=t(),{locale:i,availableLocales:o}=y(),p=_("locale","uz");k(i,(()=>{p.value=i.value}));const h=r((()=>o.filter((a=>a!==i.value)))),m=r((()=>a=>{switch(a){case"en":return"/images/svg/flag_en.svg";case"ru":return"/images/svg/flag_ru.svg";default:return"/images/svg/flag_uz.svg"}}));return(a,t)=>{const o=V;return e(),c(o,{right:"",class:"locale-dropdown"},{button:u((({open:a,toggle:e})=>[d("button",{class:"button is-rounded outlined",onClick:e},f(l(i).toUpperCase()),9,ra)])),content:u((({close:a})=>[d("div",{class:"p-3",onBlur:a},[(e(!0),n($,null,w(l(h),((t,o)=>(e(),n("button",{key:o,class:"dropdown-item button is-flex is-align-items-center mb-3",onClick:()=>{var e;e=t,i.value=e,s.go(0),a()}},[d("img",{class:"mr-3",src:l(m)(t),alt:t+"flag"},null,8,da),d("span",null,f(t.toUpperCase()),1)],8,ua)))),128))],40,ca)])),_:1})}}}),[["__scopeId","data-v-6292fb4f"]]),ha=["checked"],fa=(a=>(b("data-v-0eeabb61"),a=a(),g(),a))((()=>d("span",null,null,-1))),ma=L(a({__name:"DarkModeSwitcher",setup(a){const s=x();return(a,i)=>(e(),n("div",null,[d("label",{tabindex:"0",class:"dark-mode ml-auto",onKeydown:i[1]||(i[1]=p(h((a=>a.target.click()),["prevent"]),["space"]))},[d("input",{"data-cy":"dark-mode-toggle",type:"checkbox",checked:!l(s).isDark,onChange:i[0]||(i[0]=(...a)=>l(s).onChange&&l(s).onChange(...a))},null,40,ha),fa],32)]))}}),[["__scopeId","data-v-0eeabb61"]]);const va=L({},[["render",function(a,n){const s=ma,i=pa,l=oa,t=M;return e(),c(t,{"column-gap":"1rem"},{default:u((()=>[m(s),m(i),m(l)])),_:1})}]]),ba={class:"sidebar-block-header"},ga={class:"sidebar-block-inner"},ya={class:"sidebar-block-footer"},_a=a({__name:"Sideblock",props:{theme:{default:"default"},isOpen:{type:Boolean}},setup(a){const t=a,o=r((()=>{switch(t.theme){case"color":return"is-colored";case"curved":return"is-curved";case"color-curved":return"is-colored is-curved";default:return""}}));return(a,t)=>(e(),n("div",{class:i(["sidebar-block is-active",[l(o)]])},[d("div",ba,[s(a.$slots,"header")]),d("div",ga,[s(a.$slots,"links")]),d("div",ya,[s(a.$slots,"bottom-links")])],2))}}),ka=L(a({props:{open:{type:[Boolean,String],default:void 0},collapseId:{type:String,default:void 0}},emits:["update:open"],setup(a,{slots:e,emit:n}){var s,i;const t=C(),o=j(!1),r=null!=(i=null==(s=e.default)?void 0:s.call(e))?i:[],c=t.name;r.forEach((a=>{var e,n;(null==(n=null==(e=a.props)?void 0:e.to)?void 0:n.name)&&c===a.props.to.name&&(o.value=!0)}));const u=j(Boolean(o.value||"string"==typeof a.collapseId&&a.open===a.collapseId||void 0===a.collapseId&&!0===a.open));function d(){"string"==typeof a.collapseId?a.collapseId===a.open?n("update:open"):n("update:open",a.collapseId):u.value=!u.value}return k((()=>a.open),(e=>{u.value=Boolean("string"==typeof a.collapseId&&l(e)===a.collapseId||void 0===a.collapseId&&!0===l(e))})),()=>{var a,n,s;const i=null==(a=e.header)?void 0:a.call(e),l=(null!=(s=null==(n=e.default)?void 0:n.call(e))?s:[]).map((a=>B("li",{},a))),t=B("a",{tabindex:0,class:"parent-link",onClick:a=>{a.preventDefault(),d()},onKeydown(a){"Space"===a.code&&(a.preventDefault(),a.stopPropagation(),d())}},i),o=B("div",{class:"collapse-wrap"},t),r=u.value?B("ul",{},l):void 0;return B("li",{class:["collapse-links has-children",u.value&&"active"]},[o,B(D,{name:"collapse-links-transition",mode:"out-in",class:"collapse-content"},{default:()=>r})])}}}),[["__scopeId","data-v-66703287"]]),$a=d("span",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:grid"})],-1),wa=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),xa=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Ca=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ja=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ba=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Da=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Ia=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ua=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ra=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Sa=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Pa=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Wa=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Oa=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),La=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Ma=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Va=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ea=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Ka=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),qa=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Aa=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Fa=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),za=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Na=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ta=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ja=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),Qa=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Ga=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Xa=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ya=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Za=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),Ha=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),ae=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),ee=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ne=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),se=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),ie=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),le=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),te=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),oe=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),re=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ce=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ue=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),de=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),pe=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),he=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),fe=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),me=d("div",{class:"icon"},[d("i",{class:"iconify","data-icon":"feather:folder-plus","aria-hidden":"true"})],-1),ve=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),be=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ge=d("i",{class:"iconify","data-icon":"feather:minus","aria-hidden":"true"},null,-1),ye=a({__name:"MainMenuLinks",setup(a){const s=C(),i=j("");return k((()=>s.path),(a=>{a&&(a.startsWith("/app/registration")&&(i.value="registration"),a.startsWith("/app/physician-therapist")&&(i.value="physician-therapist"),a.startsWith("/app/screening")&&(i.value="screening"),a.startsWith("/app/donation")&&(i.value="donation"),a.startsWith("/app/bloodborne-infections-laboratory")&&(i.value="bloodborne-infections-laboratory"),a.startsWith("/app/clinical-biochemical-laboratory")&&(i.value="clinical-biochemical-laboratory"),a.startsWith("/app/buck-laboratory")&&(i.value="buck-laboratory"),a.startsWith("/app/immunological-research-department")&&(i.value="immunological-research-department"),a.startsWith("/app/recycling")&&(i.value="recycling"),a.startsWith("/app/quality-control")&&(i.value="quality-control"),a.startsWith("/app/blood-bank")&&(i.value="blood-bank"))}),{immediate:!0}),(a,s)=>{const l=I("RouterLink"),t=ka;return e(),n("ul",null,[d("li",null,[m(l,{to:"/app/dashboard",class:"single-link"},{default:u((()=>[$a,v(" "+f(a.$t("Dashboard")),1)])),_:1})]),m(t,{open:i.value,"onUpdate:open":s[0]||(s[0]=a=>i.value=a),"collapse-id":"registration"},{header:u((()=>[wa,v(" "+f(a.$t("Registration"))+" ",1),xa])),default:u((()=>[m(l,{to:"/app/registration/unified-donor-register",class:"is-submenu mb-3"},{default:u((()=>[Ca,d("span",null,f(a.$t("Unified-donor-register")),1)])),_:1}),m(l,{to:"/app/registration/donation-diverted-register",class:"is-submenu mb-3"},{default:u((()=>[ja,d("span",null,f(a.$t("Donation-diverted-register")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:i.value,"onUpdate:open":s[1]||(s[1]=a=>i.value=a),"collapse-id":"physician-therapist"},{header:u((()=>[Ba,v(" "+f(a.$t("Physician-therapist"))+" ",1),Da])),default:u((()=>[m(l,{to:"/app/physician-therapist/donors-for-examination",class:"is-submenu mb-3"},{default:u((()=>[Ia,d("span",null,f(a.$t("Donors-list-for-examination")),1)])),_:1}),m(l,{to:"/app/physician-therapist/examined-donors-list",class:"is-submenu mb-3"},{default:u((()=>[Ua,d("span",null,f(a.$t("Examined-donor-register")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:i.value,"onUpdate:open":s[2]||(s[2]=a=>i.value=a),"collapse-id":"screening"},{header:u((()=>[Ra,v(" "+f(a.$t("Screening"))+" ",1),Sa])),default:u((()=>[m(l,{to:"/app/screening/donors-list-for-primary-screening",class:"is-submenu mb-3"},{default:u((()=>[Pa,d("span",null,f(a.$t("Donors-list-for-primary-screening")),1)])),_:1}),m(l,{to:"/app/screening/screening-passed-donors-list",class:"is-submenu mb-3"},{default:u((()=>[Wa,d("span",null,f(a.$t("Screening-passed-donors-list")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:i.value,"onUpdate:open":s[3]||(s[3]=a=>i.value=a),"collapse-id":"donation"},{header:u((()=>[Oa,v(" "+f(a.$t("Donation"))+" ",1),La])),default:u((()=>[m(l,{to:"/app/donation/donation-list",class:"is-submenu mb-3"},{default:u((()=>[Ma,d("span",null,f(a.$t("Donor_list_for_blood_sampling")),1)])),_:1}),m(l,{to:"/app/donation/journal-blood-&-components",class:"is-submenu mb-3"},{default:u((()=>[Va,d("span",null,f(a.$t("Journal-blood-&-components")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:i.value,"onUpdate:open":s[4]||(s[4]=a=>i.value=a),"collapse-id":"bloodborne-infections-laboratory"},{header:u((()=>[Ea,v(" "+f(a.$t("Bloodborne-infections-laboratory"))+" ",1),Ka])),default:u((()=>[m(l,{to:"/app/bloodborne-infections-laboratory/research-aimed-donations",class:"is-submenu mb-3"},{default:u((()=>[qa,d("span",null,f(a.$t("Research-aimed-donations-list")),1)])),_:1}),m(l,{to:"/app/bloodborne-infections-laboratory/research-journal",class:"is-submenu mb-3"},{default:u((()=>[Aa,d("span",null,f(a.$t("Bloodborne-infections-research-journal")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:i.value,"onUpdate:open":s[5]||(s[5]=a=>i.value=a),"collapse-id":"clinical-biochemical-laboratory"},{header:u((()=>[Fa,v(" "+f(a.$t("Clinical-biochemical-laboratory"))+" ",1),za])),default:u((()=>[m(l,{to:"/app/clinical-biochemical-laboratory/research-aimed-donations",class:"is-submenu mb-3"},{default:u((()=>[Na,d("span",null,f(a.$t("Research-aimed-donations-list")),1)])),_:1}),m(l,{to:"/app/clinical-biochemical-laboratory/research-journal",class:"is-submenu mb-3"},{default:u((()=>[Ta,d("span",null,f(a.$t("Clinical-biochemical-research-journal")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:i.value,"onUpdate:open":s[6]||(s[6]=a=>i.value=a),"collapse-id":"buck-laboratory"},{header:u((()=>[Ja,v(" "+f(a.$t("Buck-laboratory"))+" ",1),Qa])),default:u((()=>[m(l,{to:"/app/buck-laboratory/research-aimed-donations",class:"is-submenu mb-3"},{default:u((()=>[Ga,d("span",null,f(a.$t("Research-aimed-donations-list")),1)])),_:1}),m(l,{to:"/app/buck-laboratory/supernatant-plasmas",class:"is-submenu mb-3"},{default:u((()=>[Xa,d("span",null,f(a.$t("Supernatant-plasma-list")),1)])),_:1}),m(l,{to:"/app/buck-laboratory/serological-research-journal",class:"is-submenu mb-3"},{default:u((()=>[Ya,d("span",null,f(a.$t("Serological-Research-Journal")),1)])),_:1}),m(l,{to:"/app/buck-laboratory/buck-control-sterility",class:"is-submenu mb-3"},{default:u((()=>[Za,d("span",null,f(a.$t("Buck-control-sterility")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:i.value,"onUpdate:open":s[7]||(s[7]=a=>i.value=a),"collapse-id":"immunological-research-department"},{header:u((()=>[Ha,v(" "+f(a.$t("Immunological-Research-Department"))+" ",1),ae])),default:u((()=>[m(l,{to:"/app/immunological-research-department/research-aimed-donations-list",class:"is-submenu mb-3"},{default:u((()=>[ee,d("span",null,f(a.$t("Research-aimed-donations-list")),1)])),_:1}),m(l,{to:"/app/immunological-research-department/research-journal",class:"is-submenu mb-3"},{default:u((()=>[ne,d("span",null,f(a.$t("Research-journal")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:i.value,"onUpdate:open":s[8]||(s[8]=a=>i.value=a),"collapse-id":"recycling"},{header:u((()=>[se,v(" "+f(a.$t("Recycling"))+" ",1),ie])),default:u((()=>[m(l,{to:"/app/recycling/recycling-donations-list",class:"is-submenu mb-3"},{default:u((()=>[le,d("span",null,f(a.$t("Recycling-donations-list")),1)])),_:1}),m(l,{to:"/app/recycling/component-distribution-donations",class:"is-submenu mb-3"},{default:u((()=>[te,d("span",null,f(a.$t("Component-distribution-donations")),1)])),_:1}),m(l,{to:"/app/recycling/recycling-components",class:"is-submenu mb-3"},{default:u((()=>[oe,d("span",null,f(a.$t("Recycling-components")),1)])),_:1}),m(l,{to:"/app/recycling/cryoprecipitate-processing-batches",class:"is-submenu mb-3"},{default:u((()=>[re,d("span",null,f(a.$t("Cryoprecipitate-processing-batches")),1)])),_:1}),m(l,{to:"/app/recycling/FFPs-in-storage",class:"is-submenu mb-3"},{default:u((()=>[ce,d("span",null,f(a.$t("FFPs-in-storage")),1)])),_:1}),m(l,{to:"/app/recycling/component-recycling-distribution-log",class:"is-submenu mb-3"},{default:u((()=>[ue,d("span",null,f(a.$t("Component-Recycling-Distribution-Log")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:i.value,"onUpdate:open":s[9]||(s[9]=a=>i.value=a),"collapse-id":"quality-control"},{header:u((()=>[de,v(" "+f(a.$t("Quality-control"))+" ",1),pe])),default:u((()=>[m(l,{to:"/app/quality-control/quality-control-products",class:"is-submenu mb-3"},{default:u((()=>[he,d("span",null,f(a.$t("Quality-control-products")),1)])),_:1}),m(l,{to:"/app/quality-control/print",class:"is-submenu mb-3"},{default:u((()=>[fe,d("span",null,f(a.$t("Print")),1)])),_:1})])),_:1},8,["open"]),m(t,{open:i.value,"onUpdate:open":s[10]||(s[10]=a=>i.value=a),"collapse-id":"blood-bank"},{header:u((()=>[me,v(" "+f(a.$t("Blood-bank"))+" ",1),ve])),default:u((()=>[m(l,{to:"/app/blood-bank/sticker-create-form",class:"is-submenu mb-3"},{default:u((()=>[be,d("span",null,f(a.$t("Sticker-create-form")),1)])),_:1}),m(l,{to:"/app/blood-bank/donor-system-directories",class:"is-submenu mb-3"},{default:u((()=>[ge,d("span",null,f(a.$t("Donor-system-directories")),1)])),_:1})])),_:1},8,["open"])])}}}),_e={class:"navbar mobile-navbar is-hidden-desktop is-hidden-tablet","aria-label":"main navigation"},ke={class:"container"},$e={class:"navbar-brand"},we={class:"brand-start"},xe=[d("span",null,null,-1),d("span",null,null,-1),d("span",null,null,-1)],Ce=a({__name:"MobileNavbar",props:{isOpen:{type:Boolean}},emits:["toggle"],setup(a,{emit:l}){const t=a;return(a,o)=>(e(),n("nav",_e,[d("div",ke,[d("div",$e,[d("div",we,[d("div",{class:i(["navbar-burger",[t.isOpen&&"is-active"]]),tabindex:"0",onKeydown:o[0]||(o[0]=p(h((a=>l("toggle")),["prevent"]),["space"])),onClick:o[1]||(o[1]=a=>l("toggle"))},xe,34)]),s(a.$slots,"brand")])])]))}}),je=[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:bell"},null,-1),d("span",{class:"new-indicator pulsate"},null,-1)],Be={class:"navbar-dropdown is-boxed is-right"},De=U('<div class="heading"><div class="heading-left"><h6 class="heading-title">Notifications</h6></div><div class="heading-right"><a class="notification-link" href="#">See all</a></div></div>',1),Ie={class:"inner has-slimscroll"},Ue={class:"notification-list"},Re={class:"notification-item"},Se={class:"img-left"},Pe=d("div",{class:"user-content"},[d("p",{class:"user-info"},[d("span",{class:"name"},"Alice C."),v(" left a comment. ")]),d("p",{class:"time"},"1 hour ago")],-1),We={class:"notification-item"},Oe={class:"img-left"},Le=d("div",{class:"user-content"},[d("p",{class:"user-info"},[d("span",{class:"name"},"Joshua S."),v(" uploaded a file. ")]),d("p",{class:"time"},"2 hours ago")],-1),Me={class:"notification-item"},Ve={class:"img-left"},Ee=d("div",{class:"user-content"},[d("p",{class:"user-info"},[d("span",{class:"name"},"Tara S."),v(" sent you a message. ")]),d("p",{class:"time"},"2 hours ago")],-1),Ke={class:"notification-item"},qe={class:"img-left"},Ae=d("div",{class:"user-content"},[d("p",{class:"user-info"},[d("span",{class:"name"},"Melany W."),v(" left a comment. ")]),d("p",{class:"time"},"3 hours ago")],-1),Fe=a({__name:"NotificationsMobileDropdown",setup(a){const s=j(),i=E(s);return(a,t)=>(e(),n("div",{ref_key:"dropdownElement",ref:s,class:"navbar-item has-dropdown is-notification is-hidden-tablet is-hidden-desktop"},[d("a",{class:"navbar-link is-arrowless",tabindex:"0",onKeydown:t[0]||(t[0]=p(h(((...a)=>l(i).toggle&&l(i).toggle(...a)),["prevent"]),["space"])),onClick:t[1]||(t[1]=(...a)=>l(i).toggle&&l(i).toggle(...a))},je,32),d("div",Be,[De,d("div",Ie,[d("ul",Ue,[d("li",null,[d("a",Re,[d("div",Se,[d("img",{class:"user-photo",alt:"",src:"/images/avatars/svg/vuero-4.svg",onErrorOnce:t[2]||(t[2]=a=>l(A)(150))},null,32)]),Pe])]),d("li",null,[d("a",We,[d("div",Oe,[d("img",{class:"user-photo",alt:"",src:"/images/avatars/svg/vuero-2.svg",onErrorOnce:t[3]||(t[3]=a=>l(A)(150))},null,32)]),Le])]),d("li",null,[d("a",Me,[d("div",Ve,[d("img",{class:"user-photo",alt:"",src:"/images/avatars/svg/vuero-5.svg",onErrorOnce:t[4]||(t[4]=a=>l(A)(150))},null,32)]),Ee])]),d("li",null,[d("a",Ke,[d("div",qe,[d("img",{class:"user-photo",alt:"",src:"/images/avatars/svg/vuero-9.svg",onErrorOnce:t[5]||(t[5]=a=>l(A)(150))},null,32)]),Ae])])])])])],512))}}),ze=R("panels",(()=>{const a=_("active-panel","none");return{active:a,setActive:function(e){a.value=e},close:function(){a.value="none"}}})),Ne={class:"app-layout"},Te=d("div",{class:"app-overlay"},null,-1),Je={class:"brand-end"},Qe={class:"page-title has-text-centered"},Ge={class:"menu-toggle has-chevron"},Xe=[d("span",{class:"rotate"},[d("i",{"aria-hidden":"true",class:"icon-line-top"}),d("i",{"aria-hidden":"true",class:"icon-line-center"}),d("i",{"aria-hidden":"true",class:"icon-line-bottom"})],-1)],Ye={class:"title-wrap"},Ze={class:"title is-4"},He={class:"title-wrap ml-auto"},an={class:"title is-4"},en=a({__name:"AppLayout",props:{theme:{default:"default"},defaultSideblock:{default:"dashboard"},closeOnChange:{type:Boolean},openOnMounted:{type:Boolean},nowrap:{type:Boolean}},setup(a){const v=a,b=O(),{app:g}=z(),y=o();ze(),t();const _=C(),$=j(!1),w=j(v.openOnMounted);j(v.defaultSideblock);const x=r((()=>{var a,e;return null==(e=null==(a=y.user)?void 0:a.branch)?void 0:e.name}));return S((()=>{var a;b.setPushedBlock(null!=(a=w.value)&&a)})),P((()=>{b.setPushed(!1)})),k((()=>_.fullPath),(()=>{$.value=!1,v.closeOnChange&&w.value&&(w.value=!1)})),(a,t)=>{const o=F,r=I("RouterLink"),y=Fe,_=oa,k=Ce,C=ye,j=_a,B=va,U=G,R=J,S=N;return e(),n("div",Ne,[Te,m(k,{"is-open":$.value,onToggle:t[0]||(t[0]=a=>$.value=!$.value)},{brand:u((()=>[m(r,{to:"/",class:"navbar-item is-brand"},{default:u((()=>[m(o,{width:"38px",height:"38px"})])),_:1}),d("div",Je,[m(y),m(_)])])),_:1},8,["is-open"]),m(D,{name:"slide-x"},{default:u((()=>[w.value?(e(),c(j,{key:0,theme:v.theme},{header:u((()=>[m(r,{to:"/app/dashboard",class:"sidebar-block-logo"},{default:u((()=>[m(o,{width:"36"})])),_:1}),d("h3",null,f(a.$t(l(g).name)),1)])),links:u((()=>[m(C)])),_:1},8,["theme"])):W("",!0)])),_:1}),m(S,{full:""},{default:u((()=>[m(R,null,{default:u((()=>[v.nowrap?s(a.$slots,"default",{key:0}):(e(),c(U,{key:1,class:"is-relative"},{default:u((()=>[d("div",Qe,[d("div",{class:"vuero-hamburger nav-trigger push-resize",tabindex:"0",onKeydown:t[1]||(t[1]=p(h((a=>w.value=!w.value),["prevent"]),["space"])),onClick:t[2]||(t[2]=a=>w.value=!w.value)},[d("span",Ge,[d("span",{class:i([[w.value&&"active"],"icon-box-toggle"])},Xe,2)])],32),d("div",Ye,[d("h1",Ze,f(l(b).pageTitle),1)]),d("div",He,[d("h3",an,f(l(x)),1)]),m(B,{class:"desktop-toolbar ml-auto"})]),s(a.$slots,"default")])),_:3}))])),_:3})])),_:3})])}}}),nn={},sn={};"function"==typeof nn&&nn(sn);const ln=L(sn,[["render",function(a,n){const s=I("RouterView"),i=en;return e(),c(i,{"open-on-mounted":""},{default:u((()=>[m(s)])),_:1})}]]);export{ln as default};
