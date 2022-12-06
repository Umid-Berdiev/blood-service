import{_ as a}from"./VButton.vue_vue_type_style_index_0_lang.31eed629.js";import{b as e,_ as s,a as l}from"./VControl.93d0bd46.js";import{_ as o}from"./VInput.vue_vue_type_script_setup_true_lang.bea9a7b4.js";import{q as t,o as i,d as n,s as d,m as r,g as c,e as u,b as p,f as m,x as v,D as g,E as h,G as f,H as b,I as _,J as y,j as w,k,w as x,K as j,i as C,a2 as A,L as V,M as E}from"./index.0abd75ed.js";import{_ as K}from"./AnimatedLogo.b017b450.js";import{s as I}from"./sleep.2a252ff4.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";import"./VPlaceload.5ce3c270.js";const R={class:"message-body"},S=t({__name:"VMessage",props:{color:{default:void 0},closable:{type:Boolean}},emits:["close"],setup(a,{emit:e}){const s=a;return(a,l)=>(i(),n("div",{class:m(["message",[s.color&&`is-${s.color}`]])},[s.closable?(i(),n("a",{key:0,"aria-label":"Dismiss",class:"delete",tabindex:"0",onKeydown:l[0]||(l[0]=d(r((a=>e("close")),["prevent"]),["space"])),onClick:l[1]||(l[1]=r((a=>e("close")),["prevent"]))},null,32)):c("",!0),u("div",R,[p(a.$slots,"default")])],2))}}),z=a=>(V("data-v-969c126a"),a=a(),E(),a),D={class:"modern-login"},M=z((()=>u("div",{class:"underlay h-hidden-mobile h-hidden-tablet-p"},null,-1))),P={class:"columns is-gapless is-vcentered"},W=A('<div class="column is-relative is-8 h-hidden-mobile h-hidden-tablet-p" data-v-969c126a><div class="hero is-fullheight is-image" data-v-969c126a><div class="hero-body" data-v-969c126a><div class="container" data-v-969c126a><div class="columns" data-v-969c126a><div class="column" data-v-969c126a><img class="hero-image" src="/assets/station.d05ed495.svg" alt="" data-v-969c126a></div></div></div></div></div></div>',1),q={class:"column is-4 is-relative"},B=["checked"],$=z((()=>u("span",null,null,-1))),F={class:"is-form"},G={class:"hero-body"},H=[z((()=>u("h2",null,"Sign In",-1))),z((()=>u("p",null,"Welcome back to your account.",-1)))],J=[z((()=>u("h2",null,"Recover Account",-1))),z((()=>u("p",null,"Reset your account password.",-1)))],T=["onSubmit"],N=z((()=>u("div",null,[u("strong",{class:"pr-1"},"email:"),u("span",null,"john.doe@cssninja.io")],-1))),O=z((()=>u("div",null,[u("strong",{class:"pr-1"},"password:"),u("span",null,"ada.lovelace")],-1))),Q=z((()=>u("span",{class:"toggler"},[u("span",{class:"active"},[u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})]),u("span",{class:"inactive"},[u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:circle"})])],-1))),U={class:"button-wrap has-help"},X=z((()=>u("p",{class:"recover-text"}," Enter your email and click on the confirm button to reset your password. We'll send you an email detailing the steps to complete the procedure. ",-1))),Y={class:"button-wrap"},Z=L(t({__name:"login",setup(t){const c=v("login"),p=v(!1),A=g(),V=h(),E=f(),L=b(),R=_(),z=E.query.redirect,Z=async()=>{p.value||(p.value=!0,await I(2e3),R.setToken("logged-in"),L.dismissAll(),L.success("Welcome back, Erik Kovalsky"),z?V.push(z):V.push({name:"/sidebar/dashboards"}),p.value=!1)};return y({title:"Auth Login 1 - Vuero"}),(t,v)=>{const g=K,h=w("RouterLink"),f=S,b=e,_=o,y=s,V=l,E=a;return i(),n("div",D,[M,u("div",P,[W,u("div",q,[k(h,{to:"/",class:"top-logo"},{default:x((()=>[k(g,{width:"38px",height:"38px"})])),_:1}),u("label",{class:"dark-mode ml-auto",tabindex:"0",onKeydown:v[1]||(v[1]=d(r((a=>a.target.click()),["prevent"]),["space"]))},[u("input",{"data-cy":"dark-mode-toggle",type:"checkbox",checked:!j(A).isDark,onChange:v[0]||(v[0]=(...a)=>j(A).onChange&&j(A).onChange(...a))},null,40,B),$],32),u("div",F,[u("div",G,[u("div",{class:m(["form-text",["login"!==c.value&&"is-hidden"]])},H,2),u("div",{class:m(["form-text",["login"===c.value&&"is-hidden"]])},J,2),u("form",{"data-cy":"login-form",class:m([["login"!==c.value&&"is-hidden"],"login-wrapper"]),onSubmit:r(Z,["prevent"])},[k(f,{color:"primary"},{default:x((()=>[N,O])),_:1}),k(V,null,{default:x((()=>[k(y,{icon:"lnil lnil-envelope autv-icon"},{default:x((()=>[k(b,{class:"auth-label"},{default:x((()=>[C("Email Address")])),_:1}),k(_,{"data-cy":"email-input",type:"email",autocomplete:"current-password"})])),_:1})])),_:1}),k(V,null,{default:x((()=>[k(y,{icon:"lnil lnil-lock-alt autv-icon"},{default:x((()=>[k(b,{class:"auth-label"},{default:x((()=>[C("Password")])),_:1}),k(_,{"data-cy":"password-input",type:"password",autocomplete:"current-password"})])),_:1})])),_:1}),k(V,null,{default:x((()=>[k(y,{class:"is-flex"},{default:x((()=>[k(b,{raw:"",class:"remember-toggle"},{default:x((()=>[k(_,{raw:"",type:"checkbox"}),Q])),_:1}),k(b,{raw:"",class:"remember-me"},{default:x((()=>[C("Remember Me")])),_:1}),u("a",{tabindex:"0",onKeydown:v[2]||(v[2]=d(r((a=>c.value="forgot-password"),["prevent"]),["space"])),onClick:v[3]||(v[3]=a=>c.value="forgot-password")}," Forgot Password? ",32)])),_:1})])),_:1}),u("div",U,[k(E,{id:"login-button",loading:p.value,color:"primary",type:"submit",size:"big",rounded:"",raised:"",bold:""},{default:x((()=>[C(" Confirm ")])),_:1},8,["loading"])])],42,T),u("form",{class:m([["forgot-password"!==c.value&&"is-hidden"],"login-wrapper"]),onSubmit:v[6]||(v[6]=r((()=>{}),["prevent"]))},[X,k(V,null,{default:x((()=>[k(y,{icon:"lnil lnil-envelope autv-icon"},{default:x((()=>[k(b,{class:"auth-label"},{default:x((()=>[C("Email Address")])),_:1}),k(_,{type:"email",autocomplete:"current-password"})])),_:1})])),_:1}),u("div",Y,[k(E,{color:"white",size:"big",lower:"",rounded:"",onClick:v[4]||(v[4]=a=>c.value="login")},{default:x((()=>[C(" Cancel ")])),_:1}),k(E,{color:"primary",size:"big",type:"submit",lower:"",rounded:"",solid:"",onClick:v[5]||(v[5]=a=>c.value="login")},{default:x((()=>[C(" Confirm ")])),_:1})])],34)])])])])])}}}),[["__scopeId","data-v-969c126a"]]);export{Z as default};
