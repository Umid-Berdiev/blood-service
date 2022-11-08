import{_ as e}from"./AuthLayout.590300a0.js";import{_ as a}from"./VButton.vue_vue_type_style_index_0_lang.ea1f05cd.js";import{_ as s,a as l}from"./VControl.5631d0ee.js";import{_ as o}from"./VInput.vue_vue_type_script_setup_true_lang.b4d2c7ff.js";import{_ as t}from"./AnimatedLogo.4f58b570.js";import{q as n,C as r,x as i,D as d,E as u,G as c,H as p,I as m,r as h,J as g,j as v,o as _,a as f,w as b,e as y,k,s as w,m as x,K as j,f as C,t as I,i as $,L,M as V}from"./index.ce4ddab7.js";import{_ as z}from"./_plugin-vue_export-helper.cdc0426e.js";import"./VPlaceload.a3525941.js";const A=e=>(L("data-v-f3ebe811"),e=e(),V(),e),D={class:"modern-login"},P=A((()=>y("div",{class:"underlay h-hidden-mobile h-hidden-tablet-p"},null,-1))),S={class:"columns is-gapless is-vcentered"},U=A((()=>y("div",{class:"column is-relative is-8 h-hidden-mobile h-hidden-tablet-p"},[y("div",{class:"hero is-fullheight is-image",style:{background:"url('/images/clean-medical-background_53876-97927.webp')"}},[y("div",{class:"hero-body"},[y("div",{class:"container"},[y("div",{class:"columns"},[y("div",{class:"column"},[y("p",{class:"is-size-1 has-text-dark has-text-weight-medium"}," Автоматизированная информационная система по формированию и ведению базы данных по донорам и лицам, отведенным от донорства, и данных по учету и распределению донорской крови ")])])])])])],-1))),q={class:"column is-4 is-relative"},E=["checked"],K=A((()=>y("span",null,null,-1))),O={class:"is-form"},B={class:"hero-body"},F=["onSubmit"],G={class:"help has-text-danger"},H={class:"help has-text-danger"},J={class:"button-wrap has-help"},M=z(n({__name:"index",setup(n){const{t:L}=r(),V=i("login"),z=i(!1),A=d(),M=u(),R=c(),W=p(),{loginUser:N,isLoggedIn:Q}=m(),T=R.query.redirect,X=h({username:"",password:""});Q&&M.push({name:"/app/dashboard"});const Y=async e=>{var a,s,l,o,t,n,r;try{z.value=!0;const s=Object.fromEntries(new FormData(e.target));await N(s),W.dismissAll(),W.success(`${L("Welcome_back")}, ${null==(a=s.username)?void 0:a.toUpperCase()}`),T?M.push(T):M.push({name:"/app/dashboard"})}catch(i){Object.assign(X,null==(l=null==(s=i.response)?void 0:s.data)?void 0:l.errors),(null==(t=null==(o=i.response)?void 0:o.data)?void 0:t.errors.message)&&W.error(null==(r=null==(n=i.response)?void 0:n.data)?void 0:r.errors.message[0])}finally{z.value=!1}};function Z(e){X[e.target.name]=""}return g({title:L("auth_login")}),(n,r)=>{const i=t,d=v("RouterLink"),u=o,c=s,p=l,m=a,h=e;return _(),f(h,null,{default:b((()=>[y("div",D,[P,y("div",S,[U,y("div",q,[k(d,{to:"/",class:"top-logo"},{default:b((()=>[k(i,{size:75})])),_:1}),y("label",{class:"dark-mode ml-auto",tabindex:"0",onKeydown:r[1]||(r[1]=w(x((e=>e.target.click()),["prevent"]),["space"]))},[y("input",{"data-cy":"dark-mode-toggle",type:"checkbox",checked:!j(A).isDark,onChange:r[0]||(r[0]=(...e)=>j(A).onChange&&j(A).onChange(...e))},null,40,E),K],32),y("div",O,[y("div",B,[y("div",{class:C(["form-text",["login"!==V.value&&"is-hidden"]])},[y("h2",null,I(n.$t("Sign_In")),1),y("p",null,I(n.$t("Please_sign_in_to_your_account")),1)],2),y("form",{"data-cy":"login-form",class:C([["login"!==V.value&&"is-hidden"],"login-wrapper"]),onSubmit:x(Y,["prevent"])},[k(p,null,{default:b((()=>[k(c,{icon:"feather:user"},{default:b((()=>[k(u,{type:"text",name:"username",placeholder:n.$t("Username"),autocomplete:"username",onInput:Z},null,8,["placeholder"]),y("p",G,I(X.username[0]),1)])),_:1})])),_:1}),k(p,null,{default:b((()=>[k(c,{icon:"feather:lock"},{default:b((()=>[k(u,{type:"password",name:"password",placeholder:n.$t("Password"),autocomplete:"current-password",onInput:Z},null,8,["placeholder"]),y("p",H,I(X.password[0]),1)])),_:1})])),_:1}),y("div",J,[k(m,{id:"login-button",loading:z.value,disabled:z.value,color:"primary",type:"submit",size:"big",rounded:"",raised:"",bold:""},{default:b((()=>[$(I(n.$t("Confirm")),1)])),_:1},8,["loading","disabled"])])],42,F)])])])])])])),_:1})}}}),[["__scopeId","data-v-f3ebe811"]]);export{M as default};
