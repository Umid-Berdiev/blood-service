import{_ as t}from"./VModal.vue_vue_type_style_index_0_lang.19c1c22e.js";import{_ as o}from"./VButton.vue_vue_type_style_index_0_lang.3cd1d2b4.js";import{b as e}from"./search-7-dark.86fcb46e.js";import{q as a,c as n,x as c,o as i,a as s,w as l,k as r,K as u,i as m,t as _}from"./index.575ce5b2.js";import{u as d}from"./main.7ee96f0e.js";const f=a({__name:"ConfirmActionModal",emits:["confirmAction"],setup(a,{emit:f}){const p=d(),b=n((()=>p.confirmModalState)),y=n((()=>p.confirmModalOkButtonColor)),v=c(!1);async function $(){p.$patch({confirmModalState:!1}),p.$patch({confirmModalOkButtonColor:"danger"})}async function j(){v.value=!0,p.$patch({confirmState:!0}),await $(),f("confirmAction"),v.value=!1}return(a,n)=>{const c=e,d=o,f=t;return i(),s(f,{actions:"center",open:u(b),title:a.$t("Confirm_action"),noclose:!0,"cancel-label":a.$t("No"),onClose:$},{content:l((()=>[r(c,{title:a.$t("Are_you_sure")},null,8,["title"])])),action:l((()=>[r(d,{type:"button",class:"is-justify-content-center",outlined:"",color:u(y),disabled:v.value,loading:v.value,onClick:j},{default:l((()=>[m(_(a.$t("Yes")),1)])),_:1},8,["color","disabled","loading"])])),_:1},8,["open","title","cancel-label"])}}});export{f as _};
