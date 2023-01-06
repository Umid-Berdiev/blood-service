import{_ as e}from"./DonationContainerFormModal.vue_vue_type_script_setup_true_lang-f70158ca.js";import{_ as l}from"./VModal.vue_vue_type_style_index_0_lang-b0507e96.js";import{_ as a}from"./SubmitButton.vue_vue_type_script_setup_true_lang-e5001c63.js";import{a as t,_ as o}from"./VControl-fc151345.js";import{_ as i}from"./VInput.vue_vue_type_script_setup_true_lang-29181b77.js";import{a as s,c as n,s as d,l as r,m as c,Q as _,V as m,p as u,u as p,M as v,v as f,q as b,y as h,$ as y,a0 as g,b as V,r as $,o as x,t as k,X as j,W as S,i as U}from"./chunk-BGPNDDXN-dcda8805.js";import{_ as D}from"./_plugin-vue_export-helper-1b428a4d.js";import{_ as z}from"./IMaskDateInput.vue_vue_type_script_setup_true_lang-5ce26ef4.js";import{_ as C}from"./VFlex.vue_vue_type_style_index_0_lang-0938e556.js";import{_ as F}from"./VFlexItem.vue_vue_type_style_index_0_lang-ff50e60d.js";import{m as L}from"./moment-e00bdeae.js";import{u as W}from"./chunk-3UEUFEGV-d557e6b1.js";import{u as M}from"./useNotyf-1536ae84.js";import{d as w,v as I}from"./additionals-3ef265ef.js";import{_ as O,a as B,b as P}from"./VFlexTable.vue_vue_type_style_index_0_lang-f8ff2f75.js";import{_ as A,a as Y,b as H,c as E,d as N}from"./search-7-dark-f0facebe.js";import{_ as T}from"./VCard.vue_vue_type_script_setup_true_lang-a9232da9.js";import{_ as R}from"./VButton.vue_vue_type_style_index_0_lang-27d6885c.js";import{p as q}from"./patient-3eef0e53.js";import{_ as Q}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-d3c7c667.js";import{u as G}from"./chunk-DRAQDPQ2-4514f14e.js";import{u as X}from"./@vueuse_head-0d019878.js";import{_ as J}from"./lodash-94527813.js";import{u as K}from"./main-a3a6220c.js";import{u as Z}from"./viewWrapper-c60f0ce7.js";import"./@vueuse_core-098eb702.js";import"./VIMaskInput.vue_vue_type_script_lang-06d40a07.js";import"./app-dbbff60e.js";import"./userSession-0c0e9684.js";import"./pinia-3af6ce52.js";import"./darkmode-b70c06f1.js";import"./VPlaceload-2a65ae53.js";const ee=e=>(y("data-v-859bd16e"),e=e(),g(),e),le={class:"box"},ae={class:"is-size-5 mb-3"},te={class:"field is-horizontal"},oe={class:"field-label is-normal"},ie={class:"label"},se={class:"field-body"},ne={class:"field"},de={class:"control is-expended"},re=ee((()=>_("hr",{class:"is-divider"},null,-1))),ce={class:"field is-horizontal"},_e={class:"field-label is-flex"},me={class:"label"},ue={class:"field-body"},pe={class:"field"},ve={class:"control is-expended"},fe={class:"field is-horizontal"},be={class:"field-label is-normal"},he={class:"label"},ye=ee((()=>_("span",{class:"is-text-danger"},"*",-1))),ge={class:"field-body"},Ve=ee((()=>_("hr",{class:"is-divider"},null,-1))),$e={class:"field is-horizontal"},xe={class:"field-label is-flex"},ke={class:"label"},je={class:"field-body"},Se={class:"field"},Ue={class:"control is-expended"},De={class:"field is-horizontal"},ze={class:"field-label is-normal"},Ce={class:"label"},Fe=ee((()=>_("span",{class:"is-text-danger"},"*",-1))),Le={class:"field-body"},We=ee((()=>_("hr",{class:"is-divider"},null,-1))),Me={class:"field is-horizontal"},we={class:"field-label is-flex"},Ie={class:"label"},Oe={class:"field-body"},Be={class:"field"},Pe={class:"control is-expended"},Ae={class:"field is-horizontal"},Ye={class:"field-label is-normal"},He={class:"label"},Ee=ee((()=>_("span",{class:"is-text-danger"},"*",-1))),Ne={class:"field-body"},Te=ee((()=>_("hr",{class:"is-divider"},null,-1))),Re={class:"field is-horizontal"},qe={class:"field-label is-flex"},Qe={class:"label"},Ge={class:"field-body"},Xe={class:"field"},Je={class:"control is-expended"},Ke={class:"field is-horizontal"},Ze={class:"field-label is-normal"},el={class:"label"},ll=ee((()=>_("span",{class:"is-text-danger"},"*",-1))),al={class:"field-body"},tl=ee((()=>_("hr",{class:"is-divider"},null,-1))),ol={class:"field is-horizontal"},il={class:"field-label is-normal"},sl={class:"label"},nl={class:"field-body"},dl=D(s({__name:"PlateletpheresisFormBlock",props:{formState:null,containerList:null},emits:["update:formState"],setup(e,{emit:l}){const a=e,o=n({get:()=>a.formState,set(e){l("update:formState",e)}});return(l,a)=>{const s=d("Multiselect"),n=i,y=t;return r(),c("div",le,[_("h5",ae,m(l.$t("Plateletpheresis")),1),_("div",te,[_("div",oe,[_("label",ie,m(l.$t("Apheresis_method")),1)]),_("div",se,[_("div",ne,[_("div",de,[u(s,{modelValue:p(o).apheresis_method_id,"onUpdate:modelValue":a[0]||(a[0]=e=>p(o).apheresis_method_id=e),options:[{id:1,name:"Ручной"},{id:2,name:"Аппаратный"}],placeholder:l.$t("Select"),label:"name","value-prop":"id",style:{minWidth:"15rem",margin:0}},null,8,["modelValue","placeholder"])])])])]),1===e.formState.apheresis_method_id?(r(),c(v,{key:0},[re,_("h5",null,m(l.$t("First_fence")),1),_("div",ce,[_("div",_e,[_("label",me,m(l.$t("Container")),1)]),_("div",ue,[_("div",pe,[_("div",ve,[u(s,{modelValue:p(o).first_fence_container_id,"onUpdate:modelValue":a[1]||(a[1]=e=>p(o).first_fence_container_id=e),options:e.containerList,placeholder:l.$t("Select"),label:"name","value-prop":"id",style:{minWidth:"15rem",margin:0}},null,8,["modelValue","options","placeholder"])])])])]),_("div",fe,[_("div",be,[_("label",he,[f(m(l.$t("Hemoconservative_taken_blood_amount_ml"))+" ",1),ye])]),_("div",ge,[u(y,null,{default:b((()=>[u(n,{modelValue:p(o).hemoconservative_taken_blood_amount_first,"onUpdate:modelValue":a[2]||(a[2]=e=>p(o).hemoconservative_taken_blood_amount_first=e),type:"text"},null,8,["modelValue"])])),_:1})])]),Ve,_("h5",null,m(l.$t("Second_fence")),1),_("div",$e,[_("div",xe,[_("label",ke,m(l.$t("Container")),1)]),_("div",je,[_("div",Se,[_("div",Ue,[u(s,{modelValue:p(o).second_fence_container_id,"onUpdate:modelValue":a[3]||(a[3]=e=>p(o).second_fence_container_id=e),options:e.containerList,placeholder:l.$t("Select"),label:"name","value-prop":"id",style:{minWidth:"15rem",margin:0}},null,8,["modelValue","options","placeholder"])])])])]),_("div",De,[_("div",ze,[_("label",Ce,[f(m(l.$t("Hemoconservative_taken_blood_amount_ml"))+" ",1),Fe])]),_("div",Le,[u(y,null,{default:b((()=>[u(n,{modelValue:p(o).hemoconservative_taken_blood_amount_second,"onUpdate:modelValue":a[4]||(a[4]=e=>p(o).hemoconservative_taken_blood_amount_second=e),type:"text"},null,8,["modelValue"])])),_:1})])]),We,_("h5",null,m(l.$t("Third_fence")),1),_("div",Me,[_("div",we,[_("label",Ie,m(l.$t("Container")),1)]),_("div",Oe,[_("div",Be,[_("div",Pe,[u(s,{modelValue:p(o).third_fence_container_id,"onUpdate:modelValue":a[5]||(a[5]=e=>p(o).third_fence_container_id=e),options:e.containerList,placeholder:l.$t("Select"),label:"name","value-prop":"id",style:{minWidth:"15rem",margin:0}},null,8,["modelValue","options","placeholder"])])])])]),_("div",Ae,[_("div",Ye,[_("label",He,[f(m(l.$t("Hemoconservative_taken_blood_amount_ml"))+" ",1),Ee])]),_("div",Ne,[u(y,null,{default:b((()=>[u(n,{modelValue:p(o).hemoconservative_taken_blood_amount_third,"onUpdate:modelValue":a[6]||(a[6]=e=>p(o).hemoconservative_taken_blood_amount_third=e),type:"text"},null,8,["modelValue"])])),_:1})])]),Te,_("h5",null,m(l.$t("Fourth_fence")),1),_("div",Re,[_("div",qe,[_("label",Qe,m(l.$t("Container")),1)]),_("div",Ge,[_("div",Xe,[_("div",Je,[u(s,{modelValue:p(o).fourth_fence_container_id,"onUpdate:modelValue":a[7]||(a[7]=e=>p(o).fourth_fence_container_id=e),options:e.containerList,placeholder:l.$t("Select"),label:"name","value-prop":"id",style:{minWidth:"15rem",margin:0}},null,8,["modelValue","options","placeholder"])])])])]),_("div",Ke,[_("div",Ze,[_("label",el,[f(m(l.$t("Hemoconservative_taken_blood_amount_ml"))+" ",1),ll])]),_("div",al,[u(y,null,{default:b((()=>[u(n,{modelValue:p(o).hemoconservative_taken_blood_amount_fourth,"onUpdate:modelValue":a[8]||(a[8]=e=>p(o).hemoconservative_taken_blood_amount_fourth=e),type:"text"},null,8,["modelValue"])])),_:1})])])],64)):2===e.formState.apheresis_method_id?(r(),c(v,{key:1},[tl,_("div",ol,[_("div",il,[_("label",sl,m(l.$t("Received_platelet_concentrate_amount_ml")),1)]),_("div",nl,[u(y,null,{default:b((()=>[u(n,{modelValue:p(o).received_platelet_concentrate_amount,"onUpdate:modelValue":a[9]||(a[9]=e=>p(o).received_platelet_concentrate_amount=e),type:"text"},null,8,["modelValue"])])),_:1})])])],64)):h("",!0)])}}}),[["__scopeId","data-v-859bd16e"]]),rl=e=>(y("data-v-80968426"),e=e(),g(),e),cl={class:"box"},_l={class:"is-size-5 mb-3"},ml={class:"field is-horizontal"},ul={class:"field-label is-normal"},pl={class:"label"},vl={class:"field-body"},fl={class:"field"},bl={class:"control is-expended"},hl=rl((()=>_("hr",{class:"is-divider"},null,-1))),yl={class:"field is-horizontal"},gl={class:"field-label is-flex"},Vl={class:"label"},$l={class:"field-body"},xl={class:"field"},kl={class:"control is-expended"},jl={class:"field is-horizontal"},Sl={class:"field-label is-normal"},Ul={class:"label"},Dl=rl((()=>_("span",{class:"is-text-danger"},"*",-1))),zl={class:"field-body"},Cl=rl((()=>_("hr",{class:"is-divider"},null,-1))),Fl={class:"field is-horizontal"},Ll={class:"field-label is-flex"},Wl={class:"label"},Ml={class:"field-body"},wl={class:"field"},Il={class:"control is-expended"},Ol={class:"field is-horizontal"},Bl={class:"field-label is-normal"},Pl={class:"label"},Al=rl((()=>_("span",{class:"is-text-danger"},"*",-1))),Yl={class:"field-body"},Hl=rl((()=>_("hr",{class:"is-divider"},null,-1))),El={class:"field is-horizontal"},Nl={class:"field-label is-normal"},Tl={class:"label"},Rl={class:"field-body"},ql={class:"field is-horizontal"},Ql={class:"field-label"},Gl={class:"label"},Xl={class:"field-body"},Jl=D(s({__name:"PlasmapheresisFormBlock",props:{formState:null,containerList:null},emits:["update:formState"],setup(e,{emit:l}){const a=e,o=n({get:()=>a.formState,set(e){l("update:formState",e)}});return(l,a)=>{const s=d("Multiselect"),n=i,y=t;return r(),c("div",cl,[_("h5",_l,m(l.$t("Plasmapheresis")),1),_("div",ml,[_("div",ul,[_("label",pl,m(l.$t("Apheresis_method")),1)]),_("div",vl,[_("div",fl,[_("div",bl,[u(s,{modelValue:p(o).apheresis_method_id,"onUpdate:modelValue":a[0]||(a[0]=e=>p(o).apheresis_method_id=e),options:[{id:1,name:"Ручной"},{id:2,name:"Аппаратный"}],placeholder:l.$t("Select"),label:"name","value-prop":"id",style:{minWidth:"15rem",margin:0}},null,8,["modelValue","placeholder"])])])])]),1===e.formState.apheresis_method_id?(r(),c(v,{key:0},[hl,_("h5",null,m(l.$t("First_fence")),1),_("div",yl,[_("div",gl,[_("label",Vl,m(l.$t("Container")),1)]),_("div",$l,[_("div",xl,[_("div",kl,[u(s,{modelValue:p(o).first_fence_container_id,"onUpdate:modelValue":a[1]||(a[1]=e=>p(o).first_fence_container_id=e),options:e.containerList,placeholder:l.$t("Select"),label:"name","value-prop":"id",style:{minWidth:"15rem",margin:0}},null,8,["modelValue","options","placeholder"])])])])]),_("div",jl,[_("div",Sl,[_("label",Ul,[f(m(l.$t("Hemoconservative_taken_blood_amount_ml"))+" ",1),Dl])]),_("div",zl,[u(y,null,{default:b((()=>[u(n,{modelValue:p(o).hemoconservative_taken_blood_amount_first,"onUpdate:modelValue":a[2]||(a[2]=e=>p(o).hemoconservative_taken_blood_amount_first=e),type:"text"},null,8,["modelValue"])])),_:1})])]),Cl,_("h5",null,m(l.$t("Second_fence")),1),_("div",Fl,[_("div",Ll,[_("label",Wl,m(l.$t("Container")),1)]),_("div",Ml,[_("div",wl,[_("div",Il,[u(s,{modelValue:p(o).second_fence_container_id,"onUpdate:modelValue":a[3]||(a[3]=e=>p(o).second_fence_container_id=e),options:e.containerList,placeholder:l.$t("Select"),label:"name","value-prop":"id",style:{minWidth:"15rem",margin:0}},null,8,["modelValue","options","placeholder"])])])])]),_("div",Ol,[_("div",Bl,[_("label",Pl,[f(m(l.$t("Hemoconservative_taken_blood_amount_ml"))+" ",1),Al])]),_("div",Yl,[u(y,null,{default:b((()=>[u(n,{modelValue:p(o).hemoconservative_taken_blood_amount_second,"onUpdate:modelValue":a[4]||(a[4]=e=>p(o).hemoconservative_taken_blood_amount_second=e),type:"text"},null,8,["modelValue"])])),_:1})])])],64)):2===e.formState.apheresis_method_id?(r(),c(v,{key:1},[Hl,_("div",El,[_("div",Nl,[_("label",Tl,m(l.$t("Received_plasma_amount_ml")),1)]),_("div",Rl,[u(y,null,{default:b((()=>[u(n,{modelValue:p(o).received_plasma_amount,"onUpdate:modelValue":a[5]||(a[5]=e=>p(o).received_plasma_amount=e),type:"text"},null,8,["modelValue"])])),_:1})])]),_("div",ql,[_("div",Ql,[_("label",Gl,m(l.$t("Laboratory_taken_blood_amount_ml")),1)]),_("div",Xl,[u(y,null,{default:b((()=>[u(n,{modelValue:p(o).laboratory_taken_blood_amount,"onUpdate:modelValue":a[6]||(a[6]=e=>p(o).laboratory_taken_blood_amount=e),type:"text"},null,8,["modelValue"])])),_:1})])])],64)):h("",!0)])}}}),[["__scopeId","data-v-80968426"]]),Kl=e=>(y("data-v-a08313ff"),e=e(),g(),e),Zl={class:"box"},ea={class:"is-size-5 mb-3"},la={class:"field is-horizontal"},aa={class:"field-label is-normal"},ta={class:"label"},oa={class:"field-body"},ia={class:"field"},sa={class:"control is-expended"},na={class:"field is-horizontal"},da={class:"field-label is-normal"},ra={class:"label"},ca=Kl((()=>_("span",{class:"is-text-danger"},"*",-1))),_a={class:"field-body"},ma={class:"field is-horizontal"},ua={class:"field-label"},pa={class:"label"},va=Kl((()=>_("span",{class:"is-text-danger"},"*",-1))),fa={class:"field-body"},ba=D(s({__name:"WholeBloodDonationFormBlock",props:{formState:null,containerList:null},emits:["update:formState"],setup(e,{emit:l}){const a=e,o=n({get:()=>a.formState,set(e){l("update:formState",e)}});return(l,a)=>{const s=d("Multiselect"),n=i,v=t;return r(),c("div",Zl,[_("h5",ea,m(l.$t("Whole_blood_donation")),1),_("div",la,[_("div",aa,[_("label",ta,m(l.$t("Container")),1)]),_("div",oa,[_("div",ia,[_("div",sa,[u(s,{modelValue:p(o).whole_blood_donation_container_id,"onUpdate:modelValue":a[0]||(a[0]=e=>p(o).whole_blood_donation_container_id=e),options:e.containerList,placeholder:l.$t("Select"),label:"name","value-prop":"id",style:{minWidth:"15rem",margin:0}},null,8,["modelValue","options","placeholder"])])])])]),_("div",na,[_("div",da,[_("label",ra,[f(m(l.$t("Hemoconservative_taken_blood_amount_ml"))+" ",1),ca])]),_("div",_a,[u(v,null,{default:b((()=>[u(n,{modelValue:p(o).hemoconservative_taken_blood_amount,"onUpdate:modelValue":a[1]||(a[1]=e=>p(o).hemoconservative_taken_blood_amount=e),type:"text"},null,8,["modelValue"])])),_:1})])]),_("div",ma,[_("div",ua,[_("label",pa,[f(m(l.$t("Laboratory_taken_blood_amount_ml"))+" ",1),va])]),_("div",fa,[u(v,null,{default:b((()=>[u(n,{modelValue:p(o).laboratory_taken_blood_amount,"onUpdate:modelValue":a[2]||(a[2]=e=>p(o).laboratory_taken_blood_amount=e),type:"text"},null,8,["modelValue"])])),_:1})])])])}}}),[["__scopeId","data-v-a08313ff"]]),ha=e=>(y("data-v-ed7d8d22"),e=e(),g(),e),ya={class:"box mt-3"},ga={class:"is-size-5 mb-3"},Va={class:"field is-horizontal"},$a={class:"field-label is-normal"},xa={class:"label"},ka={class:"field-body"},ja={class:"field"},Sa={class:"control is-expended"},Ua={class:"field is-horizontal"},Da={class:"field-label is-normal"},za={class:"label"},Ca={class:"field-body"},Fa={class:"field"},La={class:"control"},Wa={class:"field is-horizontal"},Ma={class:"field-label is-normal"},wa={class:"label"},Ia={class:"field-body"},Oa={class:"field"},Ba={class:"control"},Pa={class:"field"},Aa={class:"control"},Ya={class:"field is-horizontal"},Ha={class:"field-label is-normal"},Ea={class:"label"},Na={class:"field-body"},Ta={class:"field"},Ra={class:"control"},qa=ha((()=>_("hr",{class:"is-divider"},null,-1))),Qa=ha((()=>_("hr",{class:"is-divider"},null,-1))),Ga=ha((()=>_("hr",{class:"is-divider"},null,-1))),Xa=ha((()=>_("hr",{class:"is-divider"},null,-1))),Ja={class:"box"},Ka={class:"is-size-5 mb-3"},Za={class:"field is-horizontal"},et={class:"field-label is-normal"},lt={class:"label"},at={class:"field-body"},tt={class:"field"},ot={class:"control is-expended"},it=L.__esModule?L.default:L,st=D(s({__name:"DonationDataEntryFormModal",props:{isOpen:{type:Boolean,default:!1},patient:null},emits:["update:isOpen","update:list","add:Container"],setup(t,{emit:o}){M();const{t:i}=W(),s=V(i("Donation_data_entry_form")),n=V(!1),y=$({donation_type_id:null,donation_date:it().format("YYYY-MM-DD"),completed_donation_status_id:null,post_infusion_reaction_id:null}),g=$({}),k=$({}),j=$({}),S=$({donation_type_id:[],donation_date:[],completed_donation_status:[],post_infusion_reaction_id:[]}),U=V([{id:1,name:"Гемасин 500/400 4700812"}]),D=V(!1),L=$({});function I(){Object.assign(y,{donation_type_id:null,donation_date:it().format("YYYY-MM-DD"),completed_donation_status_id:null,post_infusion_reaction_id:null}),Object.assign(S,{donation_type_id:[],donation_date:[],completed_donation_status:[],post_infusion_reaction_id:[]}),o("update:isOpen",!1)}async function O(){console.log("ok")}return x((async function(){await O()})),(o,i)=>{const V=F,$=C,x=d("Multiselect"),S=z,W=ba,M=Jl,B=dl,P=a,A=l,Y=e;return r(),c(v,null,[u(A,{open:t.isOpen,size:"medium",title:s.value,actions:"right",onClose:I},{content:b((()=>[u($,{"column-gap":"1rem"},{default:b((()=>[u(V,null,{default:b((()=>[f(m(o.$t("Recommended_single_donation_volume_ml"))+":",1)])),_:1}),u(V,null,{default:b((()=>[f("0")])),_:1})])),_:1}),_("div",ya,[_("h5",ga,m(o.$t("Donation_results")),1),_("div",Va,[_("div",$a,[_("label",xa,m(o.$t("Donation_type")),1)]),_("div",ka,[_("div",ja,[_("div",Sa,[u(x,{modelValue:y.donation_type_id,"onUpdate:modelValue":i[0]||(i[0]=e=>y.donation_type_id=e),options:p(w),placeholder:o.$t("Select"),label:"name","value-prop":"id",style:{minWidth:"15rem",margin:0}},null,8,["modelValue","options","placeholder"])])])])]),_("div",Ua,[_("div",Da,[_("label",za,m(o.$t("Donation_date")),1)]),_("div",Ca,[_("div",Fa,[_("div",La,[u(S,{modelValue:y.donation_date,"onUpdate:modelValue":i[1]||(i[1]=e=>y.donation_date=e)},null,8,["modelValue"])])])])]),_("div",Wa,[_("div",Ma,[_("label",wa,m(o.$t("Completed_donation_status")),1)]),_("div",Ia,[_("div",Oa,[_("div",Ba,[u(x,{modelValue:y.completed_donation_status_id,"onUpdate:modelValue":i[2]||(i[2]=e=>y.completed_donation_status_id=e),options:[{id:1,name:"Успешная донация"},{id:2,name:"Безуспешная донация"}],placeholder:o.$t("Select"),label:"name","value-prop":"id",style:{minWidth:"15rem",margin:0}},null,8,["modelValue","placeholder"])])]),_("div",Pa,[_("div",Aa,[u(x,{modelValue:y.completed_donation_status_id,"onUpdate:modelValue":i[3]||(i[3]=e=>y.completed_donation_status_id=e),options:[{id:1,name:"Нормальное завершение"},{id:1,name:"Некондиционный забор"}],placeholder:o.$t("Select"),label:"name","value-prop":"id",style:{minWidth:"15rem",margin:0}},null,8,["modelValue","placeholder"])])])])]),_("div",Ya,[_("div",Ha,[_("label",Ea,m(o.$t("Post-infusion_reaction")),1)]),_("div",Na,[_("div",Ta,[_("div",Ra,[u(x,{modelValue:y.post_infusion_reaction_id,"onUpdate:modelValue":i[4]||(i[4]=e=>y.post_infusion_reaction_id=e),options:[{id:1,name:"Отсутствует"}],placeholder:o.$t("Select"),label:"name","value-prop":"id",style:{minWidth:"15rem",margin:0}},null,8,["modelValue","placeholder"])])])])])]),1===y.donation_type_id?(r(),c(v,{key:0},[qa,u(W,{"container-list":U.value,"form-state":g},null,8,["container-list","form-state"])],64)):2===y.donation_type_id?(r(),c(v,{key:1},[Qa,u(M,{"container-list":U.value,"form-state":k},null,8,["container-list","form-state"])],64)):3===y.donation_type_id?(r(),c(v,{key:2},[Ga,u(B,{"container-list":U.value,"form-state":j},null,8,["container-list","form-state"])],64)):h("",!0),Xa,_("div",Ja,[_("h5",Ka,m(o.$t("Component_Product_Transfer_Information")),1),_("div",Za,[_("div",et,[_("label",lt,m(o.$t("Transferred")),1)]),_("div",at,[_("div",tt,[_("div",ot,[u(x,{modelValue:y.transferred_id,"onUpdate:modelValue":i[5]||(i[5]=e=>y.transferred_id=e),options:[{id:1,name:"на переработку"},{id:2,name:"на контроль стерильности"}],placeholder:o.$t("Select"),label:"name","value-prop":"id",style:{minWidth:"15rem",margin:0}},null,8,["modelValue","placeholder"])])])])])])])),action:b((({close:e})=>[_("button",{class:"button is-info is-outlined",onClick:i[6]||(i[6]=e=>D.value=!0)},m(o.$t("Add_container")),1),u(P,{loading:n.value,form:"donation-data-entry-form"},null,8,["loading"])])),_:1},8,["open","title"]),u(Y,{"is-open":D.value,"onUpdate:is-open":i[7]||(i[7]=e=>D.value=e),container:L,"onUpdate:list":O},null,8,["is-open","container"])],64)}}}),[["__scopeId","data-v-ed7d8d22"]]),nt=["onSubmit"],dt={class:"columns"},rt={class:"column"},ct={class:"help has-text-danger"},_t={class:"column"},mt={class:"help has-text-danger"},ut={class:"column"},pt={class:"help has-text-danger"},vt={class:"column is-3"},ft={class:"help has-text-danger"},bt={class:"navigation-buttons"},ht={class:"buttons is-right"},yt=s({__name:"DonorsListFilterForm",props:{isLoading:{type:Boolean},errors:null},emits:["search","clearError","clearForm"],setup(e,{emit:l}){W(),M();const a=$({donor_category_id:"",visit_type:"",donation_type_id:"",donation_code:""}),s=V([]);x((async()=>{s.value=await q().then((e=>e.result))}));const n=async()=>{l("search",a)},c=async()=>{Object.assign(a,{donor_category_id:"",visit_type:"",donation_type_id:"",donation_code:""}),l("clearForm")};return(l,v)=>{const h=d("Multiselect"),y=o,g=t,V=i,$=R,x=T;return r(),k(x,null,{default:b((()=>[_("form",{onSubmit:j(n,["prevent"])},[_("div",dt,[_("div",rt,[u(g,{class:"is-curved-select",label:l.$t("Donor_categories")},{default:b((({id:t})=>[u(y,null,{default:b((()=>[u(h,{modelValue:p(a).donor_category_id,"onUpdate:modelValue":v[0]||(v[0]=e=>p(a).donor_category_id=e),attrs:{id:t},options:p(s),placeholder:l.$t("All"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"]),_("p",ct,m(e.errors.donor_category_id[0]),1)])),_:2},1024)])),_:1},8,["label"])]),_("div",_t,[u(g,{class:"is-curved-select",label:l.$t("Visit_type")},{default:b((({id:t})=>[u(y,null,{default:b((()=>[u(h,{modelValue:p(a).visit_type,"onUpdate:modelValue":v[1]||(v[1]=e=>p(a).visit_type=e),attrs:{id:t},options:p(I),placeholder:l.$t("All")},null,8,["modelValue","attrs","options","placeholder"]),_("p",mt,m(e.errors.visit_type[0]),1)])),_:2},1024)])),_:1},8,["label"])]),_("div",ut,[u(g,{class:"is-curved-select",label:l.$t("Donation_type")},{default:b((({id:t})=>[u(y,null,{default:b((()=>[u(h,{modelValue:p(a).donation_type_id,"onUpdate:modelValue":v[2]||(v[2]=e=>p(a).donation_type_id=e),attrs:{id:t},options:p(w),placeholder:l.$t("All"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"]),_("p",pt,m(e.errors.donation_type_id[0]),1)])),_:2},1024)])),_:1},8,["label"])]),_("div",vt,[u(g,{class:"is-curved-select",label:l.$t("Donation_code")},{default:b((({id:t})=>[u(y,null,{default:b((()=>[u(V,{modelValue:p(a).donation_code,"onUpdate:modelValue":v[3]||(v[3]=e=>p(a).donation_code=e),attrs:{id:t},placeholder:l.$t("Donation_code")},null,8,["modelValue","attrs","placeholder"]),_("p",ft,m(e.errors.donation_code[0]),1)])),_:2},1024)])),_:1},8,["label"])])]),_("div",bt,[_("div",ht,[u($,{type:"button",color:"warning",bold:"",disabled:e.isLoading,tabindex:"0",onClick:c},{default:b((()=>[f(m(l.$t("Clear")),1)])),_:1},8,["disabled"]),u($,{type:"submit",color:"primary",bold:"",loading:e.isLoading,tabindex:"0"},{default:b((()=>[f(m(l.$t("Search")),1)])),_:1},8,["loading"])])])],40,nt)])),_:1})}}}),gt=e=>(y("data-v-ad560f9d"),e=e(),g(),e),Vt={class:"page-content-inner"},$t={class:"columns mb-3"},xt={class:"column"},kt={class:"columns mt-1"},jt={class:"column"},St={class:"columns"},Ut={class:"column is-12"},Dt=["textContent"],zt={key:0,class:"flex-list-inner"},Ct={key:1,class:"flex-list-inner"},Ft=gt((()=>_("img",{class:"light-image",src:E,alt:""},null,-1))),Lt=gt((()=>_("img",{class:"dark-image",src:N,alt:""},null,-1))),Wt=["onClick"],Mt=J.isEmpty,wt=D(s({__name:"index",setup(e){G();const l=M(),{t:a}=W(),t=K(),o=V(!1);Z().setPageTitle(a("Donations")),X({title:`${a("Donors-list-for-primary-screening")} - ${t.app.name}`});const i=$({data:[{id:11,donation_code:130100111800,blood_sampling_date:"22.05.2022",first_name:"Ренат",last_name:"Ахмеджанов",father_name:"Шамильевич",birth_date:"24.01.1990",last_visit:{visit_type:"Безвозмезные донации",created_at:"06.05.2022",donation_type:"Тромбоцитаферез",stage:"Мед. освидетельствование"},donor_category:"Донор резерва"}],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),s=n({get:()=>i.pagination.current_page,set:async e=>{y.page=e,await j(y)}}),d={orderNumber:{format:(e,l,a)=>`${a+1}`},name:{label:a("Donor_fullname")},birth_date:{label:a("Date-of-birth")},visit_type:{label:a("Visit_type"),format:(e,l)=>{var a;return null==(a=l.last_visit)?void 0:a.visit_type}},visit_date:{label:a("Visit_date"),format:(e,l)=>{var a;return null==(a=l.last_visit)?void 0:a.created_at}},donation_type:{label:a("Donation_type"),format:(e,l)=>{var a;return null==(a=l.last_visit)?void 0:a.personalized_donation}},donation_code:{label:a("Donation_number")},donor_category:{label:a("Donor_category")}},f=$({donor_category_id:[],visit_type:[],donation_type_id:[],donation_code:[]}),y=$({page:1}),g=$({}),x=V(!1);async function j(e){var t,s;try{Object.assign(y,e),o.value=!0;const t=await patientsListForScreening(e);Object.assign(i,t.result),Mt(t.result.data)?l.warning(a("Data_not_found")):l.success(`${a("Found")}: ${t.result.pagination.total} ${a("records")}`)}catch(n){Object.assign(f,null==(s=null==(t=n.response)?void 0:t.data)?void 0:s.errors)}finally{o.value=!1}}function D(e){f[e]=""}async function z(){i.data=[]}return V(!1),(e,l)=>{const a=Q,n=yt,y=A,V=O,$=Y,C=B,F=H,L=P,W=st;return r(),c("div",Vt,[_("div",$t,[_("div",xt,[u(a,{"with-icons":"",separator:"bullet",items:[{label:p(t).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:e.$t("Donations")},{label:e.$t("Donors_for_donation")}]},null,8,["items"])])]),_("div",kt,[_("div",jt,[u(n,{"is-loading":p(o),errors:p(f),onSearch:j,onClearForm:z,onClearError:D},null,8,["is-loading","errors"])])]),_("div",St,[_("div",Ut,[u(L,{columns:p(d),data:p(i).data,limit:p(i).pagination.per_page,total:p(i).pagination.total},{default:b((()=>[u(C,{rounded:"","no-header":!p(o)&&0===p(i).data.length},{"header-column":b((({column:l})=>["orderNumber"===l.key?(r(),c("span",{key:0,textContent:m(e.$t("Donor_#"))},null,8,Dt)):h("",!0)])),body:b((()=>[p(o)?(r(),c("div",zt,[(r(!0),c(v,null,S(p(i).pagination.per_page,(e=>(r(),c("div",{key:e,class:"flex-table-item"},[u(V,null,{default:b((()=>[u(y,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):h("",!0),0===p(i).data.length?(r(),c("div",Ct,[u($,{title:e.$t("No_data"),subtitle:e.$t("There_is_no_data_that_match_your_query"),class:"my-6"},{image:b((()=>[Ft,Lt])),_:1},8,["title","subtitle"])])):h("",!0)])),"body-cell":b((({row:e,column:l})=>["name"===l.key?(r(),c("a",{key:0,href:"javascript:;",class:"has-text-primary",onClick:l=>function(e){x.value=!0,Object.assign(g,e)}(e)},m(e.first_name)+" "+m(e.last_name)+" "+m(e.father_name),9,Wt)):h("",!0)])),_:1},8,["no-header"]),p(i).data.length?(r(),k(F,{key:0,"current-page":p(s),"onUpdate:current-page":l[0]||(l[0]=e=>U(s)?s.value=e:null),class:"mt-5","item-per-page":p(i).pagination.per_page,"total-items":p(i).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):h("",!0)])),_:1},8,["columns","data","limit","total"])])]),u(W,{"is-open":p(x),"onUpdate:is-open":l[1]||(l[1]=e=>U(x)?x.value=e:null),patient:p(g)},null,8,["is-open","patient"])])}}}),[["__scopeId","data-v-ad560f9d"]]);export{wt as default};
