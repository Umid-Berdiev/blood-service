import{_ as l}from"./VModal.vue_vue_type_style_index_0_lang-b0507e96.js";import{_ as s}from"./SubmitButton.vue_vue_type_script_setup_true_lang-e5001c63.js";import{_ as t,a as e}from"./VControl-fc151345.js";import{_ as a}from"./VInput.vue_vue_type_script_setup_true_lang-29181b77.js";import{a as n,b as o,r,o as i,s as u,l as c,t as d,q as _,Q as p,V as m,p as h,u as y,v as f,$ as b,a0 as g}from"./chunk-BGPNDDXN-dcda8805.js";import{u as v}from"./chunk-3UEUFEGV-d557e6b1.js";import{u as $}from"./useNotyf-1536ae84.js";import{f as V}from"./additional-00c211e1.js";import{_ as x}from"./_plugin-vue_export-helper-1b428a4d.js";const j=l=>(b("data-v-27780a3c"),l=l(),g(),l),R={class:"box"},S={class:"table is-fullwidth"},z={class:""},D={class:"has-text-info"},U={class:""},P={class:"has-text-info"},C={class:""},I={class:"has-text-info"},q={class:""},B={class:"has-text-info"},O={class:""},E={class:"has-text-info"},k=j((()=>p("hr",{class:"is-divider"},null,-1))),w={class:"box"},F={class:"is-size-5"},H=j((()=>p("br",null,null,-1))),M={class:"table is-fullwidth"},N={class:"mr-3"},G={class:"mr-3"},Q={class:"mr-3"},W={class:"is-flex is-align-items-center"},L={class:"mr-3"},X={class:"ml-6"},A={class:"mr-3"},J={class:"mr-3"},K=j((()=>p("hr",{class:"is-divider"},null,-1))),T={class:"has-text-centered is-size-4"},Y=j((()=>p("br",null,null,-1))),Z={class:"columns"},ll={class:"column"},sl={class:"table-container"},tl={class:"table is-bordered"},el={class:""},al={class:"has-text-centered"},nl={class:"has-text-centered"},ol={class:"has-text-centered"},rl={class:"has-text-centered"},il={class:"has-text-centered"},ul={class:""},cl=j((()=>p("strong",null,"06.03.2013",-1))),dl={class:""},_l=j((()=>p("strong",null,"Specialist",-1))),pl={class:""},ml=j((()=>p("strong",null,"B(III)",-1))),hl={class:""},yl=j((()=>p("strong",{class:"has-text-primary"},"142",-1))),fl={class:""},bl=j((()=>p("strong",null,"06.03.2013",-1))),gl={class:""},vl=j((()=>p("strong",null,"Specialist",-1))),$l={class:""},Vl=j((()=>p("strong",null,"06.03.2013",-1))),xl={class:""},jl=j((()=>p("strong",null,"Specialist",-1))),Rl={class:""},Sl=j((()=>p("strong",null,"06.03.2013",-1))),zl={class:""},Dl=j((()=>p("strong",null,"Specialist",-1))),Ul={class:""},Pl=j((()=>p("strong",null,"06.03.2013",-1))),Cl={class:""},Il=j((()=>p("strong",null,"Specialist",-1))),ql=x(n({__name:"ComponentDistributionProcessingCardModal",props:{product:null,isOpen:{type:Boolean,default:!1}},emits:["update:isOpen","update:status"],setup(n,{emit:b}){const g=$(),{t:x}=v(),j=o(!1),ql=o(x("Processing_card")),Bl=r({divided_into_doses:!1,plasma:{value:"",sent_for_quality_control:!1},erythrocyte_mass:{value:"",sent_for_quality_control:!1,sent_for_sterility_control:!1},dose:{first:"",second:""}}),Ol=r({plasma:[],erythrocyte_mass:[],sent_for_quality_control:[],divided_into_doses:[],sent_for_sterility_control:[]}),El=o([]),kl=o([]),wl=o([]);async function Fl(){var l,s;try{j.value=!0,g.success(x("Data_saved_successfully")),Hl()}catch(t){g.error(t.message),Object.assign(Ol,null==(s=null==(l=t.response)?void 0:l.data)?void 0:s.errors)}finally{j.value=!1}}function Hl(){b("update:isOpen",!1)}return i((async()=>{await V().then((l=>wl.value=l.result))})),(o,r)=>{const i=a,b=t,g=e,v=u("Multiselect"),$=s,V=l;return c(),d(V,{open:n.isOpen,size:"big",title:y(ql),actions:"right",onClose:Hl},{content:_((()=>[p("div",R,[p("table",S,[p("tbody",null,[p("tr",null,[p("td",null,[p("span",z,m(o.$t("Donation_type"))+": ",1),p("span",D,m(n.product.donation_type),1)]),p("td",null,[p("span",U,m(o.$t("Donation_code"))+": ",1),p("span",P,m(n.product.donation_code),1)])]),p("tr",null,[p("td",null,[p("span",C,m(o.$t("Donation_date"))+": ",1),p("span",I,m(n.product.donation_date),1)]),p("td",null,[p("span",q,m(o.$t("Visit_type"))+": ",1),p("span",B,m(n.product.visit_type),1)])]),p("tr",null,[p("td",null,[p("span",O,m(o.$t("Quantity_ml"))+": ",1),p("span",E,m(n.product.quantity),1)])])])])]),k,p("div",w,[p("h5",F,m(o.$t("Components_received"))+":",1),H,p("table",M,[p("tbody",null,[p("tr",null,[p("td",null,[h(g,{horizontal:"",class:"is-align-items-center"},{default:_((()=>[p("h5",N,m(o.$t("Plasma_FFP_ml")),1),h(b,{subcontrol:""},{default:_((()=>[h(i,{modelValue:y(Bl).plasma.value,"onUpdate:modelValue":r[0]||(r[0]=l=>y(Bl).plasma.value=l)},null,8,["modelValue"])])),_:1})])),_:1})])]),p("tr",null,[p("td",null,[h(g,{horizontal:"",class:"is-align-items-center"},{default:_((()=>[p("h5",G,m(o.$t("Dose"))+" 1, ml",1),h(b,{subcontrol:""},{default:_((()=>[h(i,{modelValue:y(Bl).dose.first,"onUpdate:modelValue":r[1]||(r[1]=l=>y(Bl).dose.first=l)},null,8,["modelValue"])])),_:1})])),_:1})])]),p("tr",null,[p("td",null,[h(g,{horizontal:"",class:"is-align-items-center"},{default:_((()=>[p("h5",Q,m(o.$t("Dose"))+" 2, ml",1),h(b,{subcontrol:""},{default:_((()=>[h(i,{modelValue:y(Bl).dose.second,"onUpdate:modelValue":r[2]||(r[2]=l=>y(Bl).dose.second=l)},null,8,["modelValue"])])),_:1})])),_:1})])]),p("tr",null,[p("td",W,[h(g,{horizontal:"",class:"is-align-items-center my-0"},{default:_((()=>[p("h5",L,m(o.$t("Erythrocyte_mass_ml")),1),h(b,{subcontrol:""},{default:_((()=>[h(i,{modelValue:y(Bl).erythrocyte_mass.value,"onUpdate:modelValue":r[3]||(r[3]=l=>y(Bl).erythrocyte_mass.value=l)},null,8,["modelValue"])])),_:1})])),_:1}),p("h6",X,m(o.$t("Expiry_date")),1)])]),p("tr",null,[p("td",null,[h(g,{horizontal:"",class:"is-align-items-center"},{default:_((()=>[p("h5",A,m(o.$t("Hemacon_blood_type")),1),h(b,null,{default:_((()=>[h(b,null,{default:_((()=>[h(v,{modelValue:y(Bl).hemacon_blood_type,"onUpdate:modelValue":r[4]||(r[4]=l=>y(Bl).hemacon_blood_type=l),options:y(El),placeholder:o.$t("Select"),label:"name","value-prop":"id",style:{minWidth:"15rem"}},null,8,["modelValue","options","placeholder"])])),_:1})])),_:1})])),_:1})])]),p("tr",null,[p("td",null,[h(g,{horizontal:"",class:"is-align-items-center"},{default:_((()=>[p("h5",J,m(o.$t("Suitability_decision")),1),h(b,null,{default:_((()=>[h(b,null,{default:_((()=>[h(v,{modelValue:y(Bl).suitability_decision,"onUpdate:modelValue":r[5]||(r[5]=l=>y(Bl).suitability_decision=l),options:y(kl),placeholder:o.$t("Select"),label:"name","value-prop":"id",style:{minWidth:"15rem"}},null,8,["modelValue","options","placeholder"])])),_:1})])),_:1})])),_:1})])])])])]),K,p("h4",T,m(o.$t("Laboratory_test_results")),1),Y,p("div",Z,[p("div",ll,[p("div",sl,[p("table",tl,[p("thead",el,[p("tr",null,[p("th",al,m(o.$t("Primary_screening_results")),1),p("th",nl,m(o.$t("Hemotransmission_research_results")),1),p("th",ol,m(o.$t("clinical_biochemical_research_results")),1),p("th",rl,m(o.$t("Serological_research_results")),1),p("th",il,m(o.$t("Immunological_research_results")),1)])]),p("tbody",null,[p("tr",null,[p("td",null,[p("p",ul,[f(m(o.$t("Researched_at"))+": ",1),cl]),p("p",dl,[f(m(o.$t("Researched_by"))+": ",1),_l]),p("p",pl,[f(m(o.$t("Preliminary_blood_type"))+": ",1),ml]),p("p",hl,[f(m(o.$t("Hemoglobin_gl"))+": ",1),yl])]),p("td",null,[p("p",fl,[f(m(o.$t("Researched_at"))+": ",1),bl]),p("p",gl,[f(m(o.$t("Researched_by"))+": ",1),vl])]),p("td",null,[p("p",$l,[f(m(o.$t("Researched_at"))+": ",1),Vl]),p("p",xl,[f(m(o.$t("Researched_by"))+": ",1),jl])]),p("td",null,[p("p",Rl,[f(m(o.$t("Researched_at"))+": ",1),Sl]),p("p",zl,[f(m(o.$t("Researched_by"))+": ",1),Dl])]),p("td",null,[p("p",Ul,[f(m(o.$t("Researched_at"))+": ",1),Pl]),p("p",Cl,[f(m(o.$t("Researched_by"))+": ",1),Il])])])])])])])])])),action:_((()=>[h($,{type:"button",loading:y(j),onClick:Fl},null,8,["loading"])])),_:1},8,["open","title"])}}}),[["__scopeId","data-v-27780a3c"]]);export{ql as _};
