import{_ as e}from"./AuthLayout-b83320b1.js";import{_ as s}from"./VButton.vue_vue_type_style_index_0_lang-27d6885c.js";import{_ as a,a as o}from"./VControl-fc151345.js";import{_ as l}from"./VInput.vue_vue_type_script_setup_true_lang-29181b77.js";import{_ as t}from"./AnimatedLogo-42a25192.js";import{a as r,b as n,r as i,s as d,l as u,t as c,q as p,Q as m,p as h,Z as _,X as g,u as v,U as f,V as b,v as y,$ as j,a0 as k}from"./chunk-BGPNDDXN-dcda8805.js";import{u as w,b as x}from"./chunk-DRAQDPQ2-4514f14e.js";import{u as $}from"./@vueuse_head-0d019878.js";import{u as C}from"./chunk-3UEUFEGV-d557e6b1.js";import{u as D}from"./darkmode-b70c06f1.js";import{u as I}from"./userSession-0c0e9684.js";import{u as U}from"./useNotyf-1536ae84.js";import{_ as V}from"./_plugin-vue_export-helper-1b428a4d.js";import"./VPlaceload-2a65ae53.js";import"./@vueuse_core-098eb702.js";import"./pinia-3af6ce52.js";const P=e=>(j("data-v-cdea53ef"),e=e(),k(),e),A={class:"modern-login"},L=P((()=>m("div",{class:"underlay h-hidden-mobile h-hidden-tablet-p"},null,-1))),S={class:"columns is-gapless is-vcentered"},z=P((()=>m("div",{class:"column is-relative is-8 h-hidden-mobile h-hidden-tablet-p"},[m("div",{class:"hero is-fullheight is-image",style:{background:"url('/images/clean-medical-background_53876-97927.webp')"}},[m("div",{class:"hero-body"},[m("div",{class:"container"},[m("div",{class:"columns"},[m("div",{class:"column"},[m("p",{class:"is-size-1 has-text-dark has-text-weight-medium"}," Автоматизированная информационная система по формированию и ведению базы данных по донорам и лицам, отведенным от донорства, и данных по учету и распределению донорской крови ")])])])])])],-1))),E={class:"column is-4 is-relative"},N=["checked"],O=P((()=>m("span",null,null,-1))),Q={class:"is-form"},q={class:"hero-body"},B=["onSubmit"],F={class:"help has-text-danger"},G={class:"help has-text-danger"},R={class:"button-wrap has-help"},X=V(r({__name:"index",setup(r){const{t:j}=C(),k=n("login"),V=n(!1),P=D(),X=w(),K=x(),W=U(),{loginUser:Z,isLoggedIn:H}=I(),J=K.query.redirect,M=i({username:[],password:[]}),T=async e=>{var s,a,o,l,t,r,n;try{V.value=!0,Object.assign(M,{username:[],password:[]});const a=Object.fromEntries(new FormData(e.target));await Z(a),W.dismissAll(),W.success(`${j("Welcome_back")}, ${null==(s=a.username)?void 0:s.toUpperCase()}`),J?X.push(J):X.push({name:"/app/dashboard"})}catch(i){Object.assign(M,null==(o=null==(a=i.response)?void 0:a.data)?void 0:o.errors),(null==(t=null==(l=i.response)?void 0:l.data)?void 0:t.errors.message)&&W.error(null==(n=null==(r=i.response)?void 0:r.data)?void 0:n.errors.message)}finally{V.value=!1}};function Y(e){M[e]=[]}return $({title:j("auth_login")}),(r,n)=>{const i=t,j=d("RouterLink"),w=l,x=a,$=o,C=s,D=e;return u(),c(D,null,{default:p((()=>[m("div",A,[L,m("div",S,[z,m("div",E,[h(j,{to:"/",class:"top-logo"},{default:p((()=>[h(i,{size:75})])),_:1}),m("label",{class:"dark-mode ml-auto",tabindex:"0",onKeydown:n[1]||(n[1]=_(g((e=>e.target.click()),["prevent"]),["space"]))},[m("input",{"data-cy":"dark-mode-toggle",type:"checkbox",checked:!v(P).isDark,onChange:n[0]||(n[0]=(...e)=>v(P).onChange&&v(P).onChange(...e))},null,40,N),O],32),m("div",Q,[m("div",q,[m("div",{class:f(["form-text",["login"!==v(k)&&"is-hidden"]])},[m("h2",null,b(r.$t("Sign_In")),1),m("p",null,b(r.$t("Please_sign_in_to_your_account")),1)],2),m("form",{"data-cy":"login-form",class:f([["login"!==v(k)&&"is-hidden"],"login-wrapper"]),onSubmit:g(T,["prevent"])},[h($,null,{default:p((()=>[h(x,{icon:"feather:user"},{default:p((()=>[h(w,{type:"text",name:"username",placeholder:r.$t("Username"),autocomplete:"username",onInput:n[2]||(n[2]=e=>Y("username"))},null,8,["placeholder"]),m("p",F,b(v(M).username[0]),1)])),_:1})])),_:1}),h($,null,{default:p((()=>[h(x,{icon:"feather:lock"},{default:p((()=>[h(w,{type:"password",name:"password",placeholder:r.$t("Password"),autocomplete:"current-password",onInput:n[3]||(n[3]=e=>Y("current-password"))},null,8,["placeholder"]),m("p",G,b(v(M).password[0]),1)])),_:1})])),_:1}),m("div",R,[h(C,{id:"login-button",loading:v(V),disabled:v(V),color:"primary",type:"submit",size:"big",rounded:"",raised:"",bold:""},{default:p((()=>[y(b(r.$t("Confirm")),1)])),_:1},8,["loading","disabled"])])],42,B)])])])])])])),_:1})}}}),[["__scopeId","data-v-cdea53ef"]]);export{X as default};