import{_ as e}from"./AuthLayout-c69698df.js";import{_ as s}from"./VButton.vue_vue_type_style_index_0_lang-fc4409cd.js";import{_ as a,a as l}from"./VControl-b713a764.js";import{_ as o}from"./VInput.vue_vue_type_script_setup_true_lang-dccc8f42.js";import{_ as t}from"./AnimatedLogo-bf2a82bb.js";import{q as n,C as r,x as i,D as d,E as u,G as c,H as p,I as m,r as h,J as g,j as _,o as v,a as f,w as b,e as y,k as w,s as k,m as x,K as j,f as C,t as I,i as $,L,M as V}from"./index-568ad137.js";import{_ as S}from"./_plugin-vue_export-helper-1b428a4d.js";import"./VPlaceload-33f57994.js";const U=e=>(L("data-v-cdea53ef"),e=e(),V(),e),z={class:"modern-login"},A=U((()=>y("div",{class:"underlay h-hidden-mobile h-hidden-tablet-p"},null,-1))),D={class:"columns is-gapless is-vcentered"},O=U((()=>y("div",{class:"column is-relative is-8 h-hidden-mobile h-hidden-tablet-p"},[y("div",{class:"hero is-fullheight is-image",style:{background:"url('/images/clean-medical-background_53876-97927.webp')"}},[y("div",{class:"hero-body"},[y("div",{class:"container"},[y("div",{class:"columns"},[y("div",{class:"column"},[y("p",{class:"is-size-1 has-text-dark has-text-weight-medium"}," Автоматизированная информационная система по формированию и ведению базы данных по донорам и лицам, отведенным от донорства, и данных по учету и распределению донорской крови ")])])])])])],-1))),P={class:"column is-4 is-relative"},q=["checked"],E=U((()=>y("span",null,null,-1))),K={class:"is-form"},R={class:"hero-body"},W=["onSubmit"],B={class:"help has-text-danger"},F={class:"help has-text-danger"},G={class:"button-wrap has-help"},H=S(n({__name:"index",setup(n){const{t:L}=r(),V=i("login"),S=i(!1),U=d(),H=u(),J=c(),M=p(),{loginUser:T,isLoggedIn:X}=m(),N=J.query.redirect,Q=h({username:[],password:[]}),Y=async e=>{var s,a,l,o,t,n,r;try{S.value=!0,Object.assign(Q,{username:[],password:[]});const a=Object.fromEntries(new FormData(e.target));await T(a),M.dismissAll(),M.success(`${L("Welcome_back")}, ${null==(s=a.username)?void 0:s.toUpperCase()}`),N?H.push(N):H.push({name:"/app/dashboard"})}catch(i){Object.assign(Q,null==(l=null==(a=i.response)?void 0:a.data)?void 0:l.errors),(null==(t=null==(o=i.response)?void 0:o.data)?void 0:t.errors.message)&&M.error(null==(r=null==(n=i.response)?void 0:n.data)?void 0:r.errors.message)}finally{S.value=!1}};function Z(e){Q[e]=[]}return g({title:L("auth_login")}),(n,r)=>{const i=t,d=_("RouterLink"),u=o,c=a,p=l,m=s,h=e;return v(),f(h,null,{default:b((()=>[y("div",z,[A,y("div",D,[O,y("div",P,[w(d,{to:"/",class:"top-logo"},{default:b((()=>[w(i,{size:75})])),_:1}),y("label",{class:"dark-mode ml-auto",tabindex:"0",onKeydown:r[1]||(r[1]=k(x((e=>e.target.click()),["prevent"]),["space"]))},[y("input",{"data-cy":"dark-mode-toggle",type:"checkbox",checked:!j(U).isDark,onChange:r[0]||(r[0]=(...e)=>j(U).onChange&&j(U).onChange(...e))},null,40,q),E],32),y("div",K,[y("div",R,[y("div",{class:C(["form-text",["login"!==j(V)&&"is-hidden"]])},[y("h2",null,I(n.$t("Sign_In")),1),y("p",null,I(n.$t("Please_sign_in_to_your_account")),1)],2),y("form",{"data-cy":"login-form",class:C([["login"!==j(V)&&"is-hidden"],"login-wrapper"]),onSubmit:x(Y,["prevent"])},[w(p,null,{default:b((()=>[w(c,{icon:"feather:user"},{default:b((()=>[w(u,{type:"text",name:"username",placeholder:n.$t("Username"),autocomplete:"username",onInput:r[2]||(r[2]=e=>Z("username"))},null,8,["placeholder"]),y("p",B,I(j(Q).username[0]),1)])),_:1})])),_:1}),w(p,null,{default:b((()=>[w(c,{icon:"feather:lock"},{default:b((()=>[w(u,{type:"password",name:"password",placeholder:n.$t("Password"),autocomplete:"current-password",onInput:r[3]||(r[3]=e=>Z("current-password"))},null,8,["placeholder"]),y("p",F,I(j(Q).password[0]),1)])),_:1})])),_:1}),y("div",G,[w(m,{id:"login-button",loading:j(S),disabled:j(S),color:"primary",type:"submit",size:"big",rounded:"",raised:"",bold:""},{default:b((()=>[$(I(n.$t("Confirm")),1)])),_:1},8,["loading","disabled"])])],42,W)])])])])])])),_:1})}}}),[["__scopeId","data-v-cdea53ef"]]);export{H as default};
