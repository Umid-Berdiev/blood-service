import{_ as s}from"./VButton.vue_vue_type_style_index_0_lang-27d6885c.js";import{_ as e}from"./VCheckbox.vue_vue_type_style_index_0_lang-25f2733c.js";import{_ as a,a as o}from"./VControl-fc151345.js";import{_ as l}from"./VInput.vue_vue_type_script_setup_true_lang-29181b77.js";import{_ as t}from"./AnimatedLogo-42a25192.js";import{a as i,b as r,s as n,l as u,m as d,Q as c,Z as m,X as p,u as h,p as g,q as v,v as _,a8 as f}from"./chunk-BGPNDDXN-dcda8805.js";import{u as b,b as k}from"./chunk-DRAQDPQ2-4514f14e.js";import{u as y}from"./@vueuse_head-0d019878.js";import{u as j}from"./darkmode-b70c06f1.js";import{u as w}from"./userSession-0c0e9684.js";import{u as x}from"./useNotyf-1536ae84.js";import{s as P}from"./sleep-fd7a5d8b.js";import"./VPlaceload-2a65ae53.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./@vueuse_core-098eb702.js";import"./pinia-3af6ce52.js";const V={class:"auth-wrapper-inner columns is-gapless"},C=f('<div class="column login-column is-8 h-hidden-mobile h-hidden-tablet-p hero-banner"><div class="hero login-hero is-fullheight is-app-grey"><div class="hero-body"><div class="columns"><div class="column is-10 is-offset-1"><img class="light-image has-light-shadow has-light-border" src="/assets/vuero-banking-light-b7953f3a.webp" alt=""><img class="dark-image has-light-shadow" src="/assets/vuero-banking-dark-86b913f2.webp" alt=""></div></div></div><div class="hero-footer"><p class="has-text-centered"></p></div></div></div>',1),D={class:"column is-4"},A={class:"hero is-fullheight is-white"},I={class:"hero-heading"},S=["checked"],B=c("span",null,null,-1),L={class:"auth-logo"},N={class:"hero-body"},Q={class:"container"},R={class:"columns"},q={class:"column is-12"},K={class:"auth-content"},W=c("h2",null,"Welcome Back.",-1),X=c("p",null,"Please sign in to your account",-1),E={class:"auth-form-wrapper"},F=["onSubmit"],G={class:"login-form"},T={class:"login"},U=c("div",{class:"forgot-link has-text-centered"},[c("a",null,"Forgot Password?")],-1),Z=i({__name:"login-2",setup(i){const f=r(!1),Z=j(),z=b(),H=k(),J=x(),M=w(),O=H.query.redirect,Y=async()=>{f.value||(f.value=!0,await P(2e3),M.setToken("logged-in"),J.dismissAll(),J.success("Welcome back, Erik Kovalsky"),O?z.push(O):z.push({name:"/sidebar/dashboards"}),f.value=!1)};return y({title:"Auth Login 2 - Vuero"}),(i,r)=>{const b=t,k=n("RouterLink"),y=l,j=a,w=o,x=e,P=s;return u(),d("div",V,[C,c("div",D,[c("div",A,[c("div",I,[c("label",{class:"dark-mode ml-auto",tabindex:"0",onKeydown:r[1]||(r[1]=m(p((s=>s.target.click()),["prevent"]),["space"]))},[c("input",{"data-cy":"dark-mode-toggle",type:"checkbox",checked:!h(Z).isDark,onChange:r[0]||(r[0]=(...s)=>h(Z).onChange&&h(Z).onChange(...s))},null,40,S),B],32),c("div",L,[g(k,{to:"/"},{default:v((()=>[g(b,{width:"36px",height:"36px"})])),_:1})])]),c("div",N,[c("div",Q,[c("div",R,[c("div",q,[c("div",K,[W,X,g(k,{to:"/auth/signup-2"},{default:v((()=>[_(" I do not have an account yet ")])),_:1})]),c("div",E,[c("form",{onSubmit:p(Y,["prevent"])},[c("div",G,[g(w,null,{default:v((()=>[g(j,{icon:"feather:user"},{default:v((()=>[g(y,{type:"text",placeholder:"Username",autocomplete:"username"})])),_:1})])),_:1}),g(w,null,{default:v((()=>[g(j,{icon:"feather:lock"},{default:v((()=>[g(y,{type:"password",placeholder:"Password",autocomplete:"current-password"})])),_:1})])),_:1}),g(w,null,{default:v((()=>[g(j,{class:"setting-item"},{default:v((()=>[g(x,{label:"Remember me",paddingless:""})])),_:1})])),_:1}),c("div",T,[g(P,{loading:h(f),color:"primary",type:"submit",bold:"",fullwidth:"",raised:""},{default:v((()=>[_(" Sign In ")])),_:1},8,["loading"])]),U])],40,F)])])])])])])])])}}});export{Z as default};