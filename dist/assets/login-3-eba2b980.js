import{_ as e}from"./VButton.vue_vue_type_style_index_0_lang-2943ff29.js";import{_ as a}from"./VCheckbox.vue_vue_type_style_index_0_lang-22f1f43a.js";import{_ as s,a as t}from"./VControl-6db07387.js";import{_ as l}from"./VInput.vue_vue_type_script_setup_true_lang-264b74aa.js";import{_ as o}from"./AnimatedLogo-7fd22aea.js";import{q as n,x as r,D as i,E as u,G as d,H as c,I as p,J as m,j as _,o as g,d as h,e as v,k as f,w as y,s as k,m as b,K as x,i as w}from"./index-f93ac3f8.js";import{s as j}from"./sleep-fd7a5d8b.js";import"./_plugin-vue_export-helper-1b428a4d.js";const C={class:"auth-wrapper-inner is-single"},V={class:"auth-nav"},I=v("div",{class:"left"},null,-1),A={class:"center"},K={class:"right"},L=["checked"],P=v("span",null,null,-1),S={class:"single-form-wrap"},q={class:"inner-wrap"},B={class:"auth-head"},D=v("h2",null,"Welcome Back.",-1),E=v("p",null,"Please sign in to your account",-1),R={class:"form-card"},W=["onSubmit"],F={class:"login-form"},G={class:"login"},H=v("div",{class:"forgot-link has-text-centered"},[v("a",null,"Forgot Password?")],-1),J=n({__name:"login-3",setup(n){const J=r(!1),T=i(),U=u(),Y=d(),Z=c(),$=p(),z=Y.query.redirect,M=async()=>{J.value||(J.value=!0,await j(2e3),$.setToken("logged-in"),Z.dismissAll(),Z.success("Welcome back, Erik Kovalsky"),z?U.push(z):U.push({name:"/sidebar/dashboards"}),J.value=!1)};return m({title:"Auth Login 3 - Vuero"}),(n,r)=>{const i=o,u=_("RouterLink"),d=l,c=s,p=t,m=a,j=e;return g(),h("div",C,[v("div",V,[I,v("div",A,[f(u,{to:"/",class:"header-item"},{default:y((()=>[f(i,{width:"38px",height:"38px"})])),_:1})]),v("div",K,[v("label",{class:"dark-mode ml-auto",tabindex:"0",onKeydown:r[1]||(r[1]=k(b((e=>e.target.click()),["prevent"]),["space"]))},[v("input",{"data-cy":"dark-mode-toggle",type:"checkbox",checked:!x(T).isDark,onChange:r[0]||(r[0]=(...e)=>x(T).onChange&&x(T).onChange(...e))},null,40,L),P],32)])]),v("div",S,[v("div",q,[v("div",B,[D,E,f(u,{to:"/auth/signup-3"},{default:y((()=>[w(" I do not have an account yet ")])),_:1})]),v("div",R,[v("form",{onSubmit:b(M,["prevent"])},[v("div",F,[f(p,null,{default:y((()=>[f(c,{icon:"feather:user"},{default:y((()=>[f(d,{type:"text",placeholder:"Username",autocomplete:"username"})])),_:1})])),_:1}),f(p,null,{default:y((()=>[f(c,{icon:"feather:lock"},{default:y((()=>[f(d,{type:"password",placeholder:"Password",autocomplete:"current-password"})])),_:1})])),_:1}),f(p,null,{default:y((()=>[f(c,{class:"setting-item"},{default:y((()=>[f(m,{label:"Remember me",color:"primary",paddingless:""})])),_:1})])),_:1}),v("div",G,[f(j,{loading:x(J),type:"submit",color:"primary",bold:"",fullwidth:"",raised:""},{default:y((()=>[w(" Sign In ")])),_:1},8,["loading"])])])],40,W)]),H])])])}}});export{J as default};