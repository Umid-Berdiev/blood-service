import{_ as e}from"./VModal.vue_vue_type_style_index_0_lang-b0507e96.js";import{_ as l}from"./SubmitButton.vue_vue_type_script_setup_true_lang-e5001c63.js";import{a,a7 as t,u as n,c as o,l as s,m as i,P as d,b as u,r,o as c,t as p,q as m,p as _,v as f,V as v,w as y,s as b,a5 as h,af as g,Q as V,M as w,W as $,y as k,$ as x,a0 as j,X as C,Y as U,ag as S,ac as I,i as O}from"./chunk-BGPNDDXN-dcda8805.js";import{b as M,_ as z,a as R}from"./VControl-fc151345.js";import{_ as D}from"./VInput.vue_vue_type_script_setup_true_lang-29181b77.js";import{u as P}from"./chunk-3UEUFEGV-d557e6b1.js";import{u as q}from"./useNotyf-1536ae84.js";import{s as E,d as W,e as B,g as F,h as T,i as Y,j as A,p as N,k as G,u as L}from"./patient-7cc4d60d.js";import{_ as H}from"./_plugin-vue_export-helper-1b428a4d.js";import{_ as Q}from"./VCheckbox.vue_vue_type_style_index_0_lang-25f2733c.js";import{_ as X}from"./VFlex.vue_vue_type_style_index_0_lang-0938e556.js";import{_ as J}from"./lodash-94527813.js";import{_ as K}from"./VFlexItem.vue_vue_type_style_index_0_lang-ff50e60d.js";import{_ as Z}from"./VTextarea.vue_vue_type_script_setup_true_lang-a017671a.js";import{_ as ee}from"./VRadio.vue_vue_type_style_index_0_lang-03da69fa.js";import{m as le}from"./moment-e00bdeae.js";import{_ as ae}from"./VButtons.vue_vue_type_script_setup_true_lang-cc776021.js";import{_ as te}from"./VButton.vue_vue_type_style_index_0_lang-27d6885c.js";import{_ as ne}from"./VIMaskInput.vue_vue_type_script_lang-06d40a07.js";import{b as oe,u as se}from"./chunk-DRAQDPQ2-4514f14e.js";import{a as ie}from"./userSession-0c0e9684.js";import{_ as de}from"./VTabs.vue_vue_type_script_setup_true_lang-b35d55fc.js";import{_ as ue,a as re,b as ce}from"./PatientPersonalInfoForm.vue_vue_type_script_setup_true_lang-cdfa56d2.js";import{u as pe}from"./@vueuse_head-0d019878.js";import{u as me}from"./viewWrapper-c60f0ce7.js";import"./VPlaceload-2a65ae53.js";import"./pinia-3af6ce52.js";import"./@vueuse_core-098eb702.js";import"./VIcon.vue_vue_type_script_setup_true_lang-287aecd9.js";import"./additional-00c211e1.js";const _e={class:"v-grid"},fe=a({__name:"VGrid",props:{inline:{type:Boolean},gridTemplateColumns:{default:"none"},gridTemplateRows:{default:"none"},gridTemplateAreas:{default:"none"},columnGap:{default:"normal"},rowGap:{default:"normal"},justifyItems:{default:"initial"},alignItems:{default:"initial"},justifyContent:{default:"initial"},alignContent:{default:"initial"},placeContent:{default:"normal"},gridAutoColumns:{default:"auto"},gridAutoRows:{default:"auto"},gridAutoFlow:{default:"row"}},setup(e){const l=e;t((e=>({c9233fce:n(a),41529814:l.gridTemplateColumns,"4ac08460":l.gridTemplateRows,"0c618fdf":l.gridTemplateAreas,"9bbce60e":l.columnGap,"641aebe3":l.rowGap,"28966b17":l.justifyItems,"5f95d4fc":l.alignItems,"173c3e10":l.justifyContent,"51d9f9bb":l.alignContent,"2afad179":l.placeContent,"3c8fbea1":l.gridAutoColumns,"5b7c7195":l.gridAutoRows,"5b76f0ea":l.gridAutoFlow})));const a=o((()=>l.inline?"inline-grid":"grid"));return(e,l)=>(s(),i("div",_e,[d(e.$slots,"default")]))}}),ve={class:"v-grid-item"},ye=a({__name:"VGridItem",props:{gridColumnStart:{default:"auto"},gridColumnEnd:{default:"auto"},gridRowStart:{default:"auto"},gridRowEnd:{default:"auto"},justifySelf:{default:"auto"},alignSelf:{default:"auto"},placeSelf:{default:"auto"}},setup(e){const l=e;return t((e=>({"1401e278":l.gridColumnStart,"2b6903bd":l.gridColumnEnd,41478190:l.gridRowStart,"0387b989":l.gridRowEnd,"032f283a":l.justifySelf,dd16eca2:l.alignSelf,da1a0a9e:l.placeSelf}))),(e,l)=>(s(),i("div",ve,[d(e.$slots,"default")]))}}),be=H(a({__name:"DirectionForDonationModal",props:{isOpen:{type:Boolean,default:!1},visitcard:null},emits:["update:isOpen","submit"],setup(a,{emit:t}){const o=a,i=q(),{t:d}=P(),y=u(!1),b=u(d("Direction_for_donation")),h=r({donation_code:null,recommended_blood_capacity:""}),g=r({donation_code:[],recommended_blood_capacity:[]});async function V(){var e,l,a;try{y.value=!0,await E(null==(e=o.visitcard)?void 0:e.id,h),i.success(d("Data_saved_successfully")),w()}catch(t){i.error(t.message),Object.assign(g,null==(a=null==(l=t.response)?void 0:l.data)?void 0:a.errors)}finally{y.value=!1}}function w(){t("update:isOpen",!1)}return c((()=>{var e;h.donation_code=null==(e=o.visitcard)?void 0:e.donation_code})),(t,o)=>{const i=M,d=D,u=z,r=R,c=ye,g=fe,$=l,k=e;return s(),p(k,{open:a.isOpen,title:n(b),actions:"right",onClose:w},{content:m((()=>[_(g,{"row-gap":"1rem"},{default:m((()=>[_(c,null,{default:m((()=>[_(r,{horizontal:""},{default:m((()=>[_(i,{class:"my-auto mr-5"},{default:m((()=>[f(v(t.$t("Donation_code")),1)])),_:1}),_(u,{class:"ml-auto"},{default:m((()=>[_(d,{modelValue:n(h).donation_code,"onUpdate:modelValue":o[0]||(o[0]=e=>n(h).donation_code=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),_(c,null,{default:m((()=>[_(r,{horizontal:""},{default:m((()=>[_(i,{class:"my-auto mr-5"},{default:m((()=>[f(v(t.$t("Recommended_blood_capacity")),1)])),_:1}),_(u,{class:"ml-auto"},{default:m((()=>[_(d,{modelValue:n(h).recommended_blood_capacity,"onUpdate:modelValue":o[1]||(o[1]=e=>n(h).recommended_blood_capacity=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])),action:m((()=>[_($,{type:"button",loading:n(y),onClick:V},{default:m((()=>[f(v(t.$t("For_donation")),1)])),_:1},8,["loading"])])),_:1},8,["open","title"])}}}),[["__scopeId","data-v-fb8187f2"]]),he=(e=>(x("data-v-ad97233c"),e=e(),j(),e))((()=>V("br",null,null,-1))),ge={key:0,class:"table-container"},Ve={class:"table is-bordered is-fullwidth"},we={colspan:4,class:"has-text-centered"},$e=J.flatten,ke=H(a({__name:"LaboratoryResearchModal",props:{visitcard:null,isOpen:{type:Boolean,default:!1}},emits:["update:isOpen","update:status"],setup(a,{emit:t}){const o=a,d=q(),{t:x}=P(),j=u(!1),C=u(x("Direction_for_laboratory_research")),U=u([{id:1,name:x("Антигенами системы резус")},{id:2,name:x("Стафилококковым анатоксином")}]),S=u([{id:1,name:x("Whole_blood_donation")},{id:2,name:x("Plasmapheresis")},{id:3,name:x("Plateletpheresis")}]),I=u([]),O=r({donation_code:null,donation_type_id:null,immunization_id:null,laboratory_researches:[]}),E=r({});async function F(){var e,l;try{j.value=!0,O.laboratory_researches=$e(I.value.map((e=>e.laboratory_researches.filter((e=>e.value)).map((e=>e.id))))),await B(o.visitcard.id,O),d.success(x("Data_saved_successfully")),T()}catch(a){d.error(a.message),Object.assign(E,null==(l=null==(e=a.response)?void 0:e.data)?void 0:l.errors)}finally{j.value=!1}}function T(){t("update:isOpen",!1)}return c((()=>{O.donation_code=o.visitcard.donation_code,O.donation_type_id=o.visitcard.donation_type_id,O.immunization_id=o.visitcard.immunization_id})),y((()=>O.donation_type_id),(async e=>{3===e&&await async function(){I.value=await W(o.visitcard.id).then((e=>e.result))}()})),(t,o)=>{const d=M,u=b("Multiselect"),r=z,c=R,y=D,x=X,P=Q,q=l,E=e;return s(),p(E,{open:a.isOpen,size:"extra-big",title:n(C),actions:"right",onClose:T},{content:m((()=>[_(x,{"flex-wrap":"wrap","column-gap":"5rem"},{default:m((()=>[_(K,null,{default:m((()=>[_(c,{horizontal:""},{default:m((()=>[_(d,{class:"my-auto mr-5"},{default:m((()=>[f(v(t.$t("Donation_types_list")),1)])),_:1}),_(r,null,{default:m((()=>[_(u,{modelValue:n(O).donation_type_id,"onUpdate:modelValue":o[0]||(o[0]=e=>n(O).donation_type_id=e),style:{"min-width":"15rem"},options:n(S),placeholder:t.$t("Select_donation_type"),label:"name","value-prop":"id"},null,8,["modelValue","options","placeholder"])])),_:1})])),_:1})])),_:1}),_(K,null,{default:m((()=>[_(c,{horizontal:""},{default:m((()=>[_(d,{class:"my-auto mr-5"},{default:m((()=>[f(v(t.$t("Immunization")),1)])),_:1}),_(r,null,{default:m((()=>[_(u,{modelValue:n(O).immunization_id,"onUpdate:modelValue":o[1]||(o[1]=e=>n(O).immunization_id=e),style:{"min-width":"15rem"},options:n(U),placeholder:t.$t("Not_required"),label:"name","value-prop":"id"},null,8,["modelValue","options","placeholder"])])),_:1})])),_:1})])),_:1}),h(_(K,null,{default:m((()=>[_(c,{horizontal:""},{default:m((()=>[_(d,{class:"my-auto mr-5"},{default:m((()=>[f(v(t.$t("Donation_code")),1)])),_:1}),_(r,null,{default:m((()=>[_(y,{modelValue:n(O).donation_code,"onUpdate:modelValue":o[2]||(o[2]=e=>n(O).donation_code=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},512),[[g,3===n(O).donation_type_id]])])),_:1}),he,3===n(O).donation_type_id&&n(I).length?(s(),i("div",ge,[V("table",Ve,[V("thead",null,[V("tr",null,[V("th",we,v(t.$t("Laboratory_research_types")),1)]),V("tr",null,[(s(!0),i(w,null,$(n(I),(e=>(s(),i("th",{key:e.id},v(e.name),1)))),128))])]),V("tbody",null,[V("tr",null,[V("td",null,[(s(!0),i(w,null,$(n(I)[0].laboratory_researches,(e=>(s(),p(c,{key:e.id},{default:m((()=>[_(r,null,{default:m((()=>[_(P,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,class:"p-0",color:"primary",label:e.name},null,8,["modelValue","onUpdate:modelValue","label"])])),_:2},1024)])),_:2},1024)))),128))]),V("td",null,[(s(!0),i(w,null,$(n(I)[1].laboratory_researches,(e=>(s(),p(c,{key:e.id},{default:m((()=>[_(r,null,{default:m((()=>[_(P,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,class:"p-0",color:"primary",label:e.name},null,8,["modelValue","onUpdate:modelValue","label"])])),_:2},1024)])),_:2},1024)))),128))]),V("td",null,[(s(!0),i(w,null,$(n(I)[2].laboratory_researches,(e=>(s(),p(c,{key:e.id},{default:m((()=>[_(r,null,{default:m((()=>[_(P,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,class:"p-0",color:"primary",label:e.name},null,8,["modelValue","onUpdate:modelValue","label"])])),_:2},1024)])),_:2},1024)))),128))]),V("td",null,[(s(!0),i(w,null,$(n(I)[3].laboratory_researches,(e=>(s(),p(c,{key:e.id},{default:m((()=>[_(r,null,{default:m((()=>[_(P,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,class:"p-0",color:"primary",label:e.name},null,8,["modelValue","onUpdate:modelValue","label"])])),_:2},1024)])),_:2},1024)))),128))])])])])])):k("",!0)])),action:m((()=>[_(q,{type:"button",loading:n(j),onClick:F},{default:m((()=>[f(v(t.$t("Submit_for_research")),1)])),_:1},8,["loading"])])),_:1},8,["open","title"])}}}),[["__scopeId","data-v-ad97233c"]]),xe=["onSubmit"],je={class:"column is-12"},Ce={class:"help has-text-danger"},Ue={class:"help has-text-danger"},Se={class:"help has-text-danger"},Ie={class:"help has-text-danger"},Oe=le.__esModule?le.default:le,Me=a({__name:"WithdrawalFormModal",props:{isOpen:{type:Boolean,default:!1},patientId:{default:null}},emits:["update:isOpen","update:list"],setup(a,{emit:t}){const o=a,i=q(),{t:d}=P(),c=u(d("Withdrawal")),f=u(!1),{locale:y}=P(),h=u({input:"YYYY-MM-DD"}),g=r({type:"string",mask:h.value.input}),w=u([{id:"brucellosis",name:d("Brucellosis")}]),$=r({type:"temporary",reason:"",start_date:Oe().format("YYYY-MM-DD"),end_date:"",source:""}),k=r({type:[],reason:[],start_date:[],end_date:[],source:[]});async function x(){var e,l,a,n;try{f.value=!0,await F(o.patientId,$),t("update:list"),j()}catch(s){(null==(e=s.response)?void 0:e.data.error)?i.error(null==(l=s.response)?void 0:l.data.error):Object.assign(k,null==(n=null==(a=s.response)?void 0:a.data)?void 0:n.errors)}finally{f.value=!1}}function j(){Object.assign($,{type:"temporary",reason:"",start_date:Oe().format("YYYY-MM-DD"),end_date:"",source:""}),Object.assign(k,{type:[],reason:[],start_date:[],end_date:[],source:[]}),t("update:isOpen",!1)}function I(e){k[e]=""}return r({start:new Date,end:new Date}),(t,o)=>{const i=ee,u=z,r=R,O=b("Multiselect"),M=D,P=b("VDatePicker"),q=Z,E=l,W=e;return s(),p(W,{open:a.isOpen,size:"large",title:c.value,actions:"right",onClose:j},{content:m((()=>[V("form",{id:"withdrawal-form",class:"modal-form",onSubmit:C(x,["prevent"])},[V("div",je,[_(r,{label:t.$t("Withdrawal_type"),required:""},{default:m((()=>[_(u,null,{default:m((()=>[_(i,{modelValue:$.type,"onUpdate:modelValue":o[0]||(o[0]=e=>$.type=e),value:"permanent",label:t.$t("Permanent"),onChange:o[1]||(o[1]=e=>I("type"))},null,8,["modelValue","label"]),_(i,{modelValue:$.type,"onUpdate:modelValue":o[2]||(o[2]=e=>$.type=e),value:"temporary",label:t.$t("Temporary"),onChange:o[3]||(o[3]=e=>I("type"))},null,8,["modelValue","label"]),V("p",Ce,v(k.type[0]),1)])),_:1})])),_:1},8,["label"]),_(r,{class:"is-curved-select"},{default:m((({id:e})=>[_(u,null,{default:m((()=>[_(O,{modelValue:$.reason,"onUpdate:modelValue":o[4]||(o[4]=e=>$.reason=e),attrs:{id:e},options:w.value,placeholder:t.$t("Select_reason"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"])])),_:2},1024)])),_:1}),_(P,{modelValue:$.start_date,"onUpdate:modelValue":o[6]||(o[6]=e=>$.start_date=e),locale:n(y),mode:"date",masks:h.value,"model-config":g,color:"green","trim-weeks":"",popover:{visibility:"click"}},{default:m((({inputValue:e,inputEvents:l})=>[_(r,{label:t.$t("Start_date")},{default:m((()=>[_(u,{icon:"feather:calendar"},{default:m((()=>[_(M,U({value:e},S(l),{onChange:o[5]||(o[5]=e=>I("start_date"))}),null,16,["value"]),V("p",Ue,v(k.start_date[0]),1)])),_:2},1024)])),_:2},1032,["label"])])),_:1},8,["modelValue","locale","masks","model-config"]),_(P,{modelValue:$.end_date,"onUpdate:modelValue":o[8]||(o[8]=e=>$.end_date=e),locale:n(y),mode:"date",masks:h.value,"model-config":g,color:"green","trim-weeks":"",popover:{visibility:"click"}},{default:m((({inputValue:e,inputEvents:l})=>[_(r,{label:t.$t("End_date")},{default:m((()=>[_(u,{icon:"feather:calendar"},{default:m((()=>[_(M,U({class:"is-primary-focus",value:e,disabled:"permanent"===$.type},S(l),{onChange:o[7]||(o[7]=e=>I("end_date"))}),null,16,["value","disabled"]),V("p",Se,v(k.end_date[0]),1)])),_:2},1024)])),_:2},1032,["label"])])),_:1},8,["modelValue","locale","masks","model-config"]),_(r,{label:t.$t("Source"),required:""},{default:m((()=>[_(u,null,{default:m((()=>[_(q,{modelValue:$.source,"onUpdate:modelValue":o[9]||(o[9]=e=>$.source=e),placeholder:n(d)("Enter_source"),rows:3,onInput:o[10]||(o[10]=e=>I("source"))},null,8,["modelValue","placeholder"]),V("p",Ie,v(k.source[0]),1)])),_:1})])),_:1},8,["label"])])],40,xe)])),action:m((({close:e})=>[_(E,{loading:f.value,form:"withdrawal-form"},null,8,["loading"])])),_:1},8,["open","title"])}}}),ze=ie();const Re={class:"columns"},De={class:"column"},Pe={class:"table-container"},qe={class:"table is-bordered is-fullwidth"},Ee={class:""},We={class:""},Be={class:""},Fe={class:""},Te={class:""},Ye={class:""},Ae={class:""},Ne={class:"columns"},Ge={class:"column"},Le={class:"column"},He={class:""},Qe={class:"columns"},Xe={class:"column"},Je={class:"column"},Ke={class:""},Ze={class:"columns"},el={class:"column"},ll={class:"column"},al={class:""},tl={class:"columns"},nl={class:"column"},ol={class:"column"},sl=H(a({__name:"MedicalInspectionFormModal",props:{visitcardId:{default:null},isOpen:{type:Boolean,default:!1}},emits:["update:isOpen","donation","withdrawal"],setup(a,{emit:t}){const o=a;oe(),se();const i=q(),{locale:d,t:c}=P(),y=u(!1),b=u(c("Medical_inspection")),h=r({weight:"",height:"",temperature:"",blood_pressure:"",pulse:"",lymph_node:0,liver:0,skin:0,lung:0,heart:0}),g=r({weight:[],height:[],temperature:[],blood_pressure:[],pulse:[],lymph_node:[],liver:[],skin:[],lung:[],heart:[]});function w(){t("update:isOpen",!1)}async function $(){var e,l;try{y.value=!0;await async function(e,l){try{const{data:a}=await ze({url:`/visit-cards/${e}/medical-examinations`,method:"POST",data:l});return a}catch(a){throw a}}(o.visitcardId,h);i.success(c("Data_saved_successfully"))}catch(a){i.error(c("Something_went_wrong")),Object.assign(g,null==(l=null==(e=a.response)?void 0:e.data)?void 0:l.errors)}finally{y.value=!1}}return(t,o)=>{const i=D,d=z,u=R,r=ne,c=ee,g=l,k=te,x=ae,j=e;return s(),p(j,{open:a.isOpen,size:"big",title:n(b),actions:"right",onClose:w},{content:m((()=>[V("div",Re,[V("div",De,[V("div",Pe,[V("table",qe,[V("tbody",null,[V("tr",null,[V("td",null,[V("p",Ee,v(t.$t("Weight_kg")),1)]),V("td",null,[_(u,null,{default:m((()=>[_(d,null,{default:m((()=>[_(i,{modelValue:n(h).weight,"onUpdate:modelValue":o[0]||(o[0]=e=>n(h).weight=e),modelModifiers:{trim:!0},class:"text-hover-primary",type:"number",min:10,step:".1",max:300},null,8,["modelValue"])])),_:1})])),_:1})])]),V("tr",null,[V("td",null,[V("p",We,v(t.$t("Height_sm")),1)]),V("td",null,[_(u,null,{default:m((()=>[_(d,null,{default:m((()=>[_(i,{modelValue:n(h).height,"onUpdate:modelValue":o[1]||(o[1]=e=>n(h).height=e),modelModifiers:{trim:!0},class:"text-hover-primary",type:"number",min:10,step:".1",max:300},null,8,["modelValue"])])),_:1})])),_:1})])]),V("tr",null,[V("td",null,[V("p",Be,v(t.$t("Temperature")),1)]),V("td",null,[_(u,null,{default:m((()=>[_(d,null,{default:m((()=>[_(i,{modelValue:n(h).temperature,"onUpdate:modelValue":o[2]||(o[2]=e=>n(h).temperature=e),modelModifiers:{trim:!0},class:"text-hover-primary",type:"number",min:10,step:".1",max:50},null,8,["modelValue"])])),_:1})])),_:1})])]),V("tr",null,[V("td",null,[V("p",Fe,v(t.$t("blood_pressure")),1)]),V("td",null,[_(u,null,{default:m((()=>[_(d,null,{default:m((()=>[_(r,{modelValue:n(h).blood_pressure,"onUpdate:modelValue":o[3]||(o[3]=e=>n(h).blood_pressure=e),modelModifiers:{trim:!0},class:"input",options:{mask:"000 / 000",pattern:/^$|^\d{3}$/},placeholder:"000 / 000"},null,8,["modelValue"])])),_:1})])),_:1})])]),V("tr",null,[V("td",null,[V("p",Te,v(t.$t("Pulse_beats_min")),1)]),V("td",null,[_(u,null,{default:m((()=>[_(d,null,{default:m((()=>[_(i,{modelValue:n(h).pulse,"onUpdate:modelValue":o[4]||(o[4]=e=>n(h).pulse=e),modelModifiers:{trim:!0},class:"text-hover-primary",type:"number",min:10,step:".1",max:100},null,8,["modelValue"])])),_:1})])),_:1})])]),V("tr",null,[V("td",null,[V("p",Ye,v(t.$t("Lymph_nodes")),1)]),V("td",null,[_(u,null,{default:m((()=>[_(d,{raw:""},{default:m((()=>[_(c,{modelValue:n(h).lymph_node,"onUpdate:modelValue":o[5]||(o[5]=e=>n(h).lymph_node=e),value:0,label:t.$t("Not_increased"),color:"primary"},null,8,["modelValue","label"]),_(c,{modelValue:n(h).lymph_node,"onUpdate:modelValue":o[6]||(o[6]=e=>n(h).lymph_node=e),value:1,label:t.$t("Increased"),color:"primary"},null,8,["modelValue","label"])])),_:1})])),_:1})])]),V("tr",null,[V("td",null,[V("p",Ae,v(t.$t("Liver_spleen")),1)]),V("td",null,[_(u,null,{default:m((()=>[_(d,null,{default:m((()=>[V("div",Ne,[V("div",Ge,[_(c,{modelValue:n(h).liver,"onUpdate:modelValue":o[7]||(o[7]=e=>n(h).liver=e),value:0,label:t.$t("Not_palpated"),color:"primary"},null,8,["modelValue","label"])]),V("div",Le,[_(c,{modelValue:n(h).liver,"onUpdate:modelValue":o[8]||(o[8]=e=>n(h).liver=e),value:1,label:t.$t("Increased"),color:"primary"},null,8,["modelValue","label"])])])])),_:1})])),_:1})])]),V("tr",null,[V("td",null,[V("p",He,v(t.$t("Skin and visible mucous membranes")),1)]),V("td",null,[_(u,null,{default:m((()=>[_(d,null,{default:m((()=>[V("div",Qe,[V("div",Xe,[_(c,{modelValue:n(h).skin,"onUpdate:modelValue":o[9]||(o[9]=e=>n(h).skin=e),value:0,label:t.$t("Pure"),color:"primary"},null,8,["modelValue","label"])]),V("div",Je,[_(c,{modelValue:n(h).skin,"onUpdate:modelValue":o[10]||(o[10]=e=>n(h).skin=e),value:1,label:t.$t("With signs of damage"),color:"primary"},null,8,["modelValue","label"])])])])),_:1})])),_:1})])]),V("tr",null,[V("td",null,[V("p",Ke,v(t.$t("In_lungs")),1)]),V("td",null,[_(u,null,{default:m((()=>[_(d,null,{default:m((()=>[V("div",Ze,[V("div",el,[_(c,{modelValue:n(h).lung,"onUpdate:modelValue":o[11]||(o[11]=e=>n(h).lung=e),value:0,label:t.$t("No_wheezing"),color:"primary"},null,8,["modelValue","label"])]),V("div",ll,[_(c,{modelValue:n(h).lung,"onUpdate:modelValue":o[12]||(o[12]=e=>n(h).lung=e),value:1,label:t.$t("Wheezing"),color:"primary"},null,8,["modelValue","label"])])])])),_:1})])),_:1})])]),V("tr",null,[V("td",null,[V("p",al,v(t.$t("Heart")),1)]),V("td",null,[_(u,null,{default:m((()=>[_(d,null,{default:m((()=>[V("div",tl,[V("div",nl,[_(c,{modelValue:n(h).heart,"onUpdate:modelValue":o[13]||(o[13]=e=>n(h).heart=e),value:0,label:t.$t("Fine"),color:"primary"},null,8,["modelValue","label"])]),V("div",ol,[_(c,{modelValue:n(h).heart,"onUpdate:modelValue":o[14]||(o[14]=e=>n(h).heart=e),value:1,label:t.$t("Not_fine"),color:"primary"},null,8,["modelValue","label"])])])])),_:1})])),_:1})])])])])])])])])),action:m((({close:e})=>[_(x,null,{default:m((()=>[_(g,{type:"button",loading:n(y),onClick:$},null,8,["loading"]),_(k,{type:"button",color:"primary",outlined:"",disabled:n(y),onClick:()=>{e(),t.$emit("donation")}},{default:m((()=>[f(v(t.$t("For_donation")),1)])),_:2},1032,["disabled","onClick"]),_(k,{type:"button",color:"danger",outlined:"",disabled:n(y),onClick:()=>{e(),t.$emit("withdrawal")}},{default:m((()=>[f(v(t.$t("Withdrawal")),1)])),_:2},1032,["disabled","onClick"])])),_:2},1024)])),_:1},8,["open","title"])}}}),[["__scopeId","data-v-7a412c7f"]]),il=e=>(x("data-v-cf1bd684"),e=e(),j(),e),dl={class:"has-text-centered is-size-4"},ul=il((()=>V("br",null,null,-1))),rl={class:"columns"},cl={class:"column"},pl={class:"table-container"},ml={class:"table is-bordered"},_l={class:""},fl={class:"has-text-centered"},vl={class:"has-text-centered"},yl={class:"has-text-centered"},bl={class:"has-text-centered"},hl={class:"has-text-centered"},gl={class:""},Vl=il((()=>V("strong",null,"06.03.2013",-1))),wl={class:""},$l=il((()=>V("strong",null,"Specialist",-1))),kl={class:""},xl=il((()=>V("strong",null,"B(III)",-1))),jl={class:""},Cl=il((()=>V("strong",{class:"has-text-primary"},"142",-1))),Ul={class:""},Sl=il((()=>V("strong",null,"06.03.2013",-1))),Il={class:""},Ol=il((()=>V("strong",null,"Specialist",-1))),Ml={class:""},zl=il((()=>V("strong",null,"06.03.2013",-1))),Rl={class:""},Dl=il((()=>V("strong",null,"Specialist",-1))),Pl={class:""},ql=il((()=>V("strong",null,"06.03.2013",-1))),El={class:""},Wl=il((()=>V("strong",null,"Specialist",-1))),Bl={class:""},Fl=il((()=>V("strong",null,"06.03.2013",-1))),Tl={class:""},Yl=il((()=>V("strong",null,"Specialist",-1))),Al=H(a({__name:"LaboratoryTestResultsModal",props:{patientId:{default:null},isOpen:{type:Boolean,default:!1}},emits:["update:isOpen","medicalExamination","withdrawal"],setup(l,{emit:a}){oe(),se(),q(),P();const t=u(!1),o=u("");function i(){a("update:isOpen",!1)}return(a,d)=>{const u=te,r=ae,c=e;return s(),p(c,{open:l.isOpen,size:"extra-big",title:n(o),actions:"right",onClose:i},{content:m((()=>[V("h4",dl,v(a.$t("Laboratory_test_results")),1),ul,V("div",rl,[V("div",cl,[V("div",pl,[V("table",ml,[V("thead",_l,[V("tr",null,[V("th",fl,v(a.$t("Primary_screening_results")),1),V("th",vl,v(a.$t("Hemotransmission_research_results")),1),V("th",yl,v(a.$t("clinical_biochemical_research_results")),1),V("th",bl,v(a.$t("Serological_research_results")),1),V("th",hl,v(a.$t("Immunological_research_results")),1)])]),V("tbody",null,[V("tr",null,[V("td",null,[V("p",gl,[f(v(a.$t("Researched_at"))+": ",1),Vl]),V("p",wl,[f(v(a.$t("Researched_by"))+": ",1),$l]),V("p",kl,[f(v(a.$t("Preliminary_blood_type"))+": ",1),xl]),V("p",jl,[f(v(a.$t("Hemoglobin_gl"))+": ",1),Cl])]),V("td",null,[V("p",Ul,[f(v(a.$t("Researched_at"))+": ",1),Sl]),V("p",Il,[f(v(a.$t("Researched_by"))+": ",1),Ol])]),V("td",null,[V("p",Ml,[f(v(a.$t("Researched_at"))+": ",1),zl]),V("p",Rl,[f(v(a.$t("Researched_by"))+": ",1),Dl])]),V("td",null,[V("p",Pl,[f(v(a.$t("Researched_at"))+": ",1),ql]),V("p",El,[f(v(a.$t("Researched_by"))+": ",1),Wl])]),V("td",null,[V("p",Bl,[f(v(a.$t("Researched_at"))+": ",1),Fl]),V("p",Tl,[f(v(a.$t("Researched_by"))+": ",1),Yl])])])])])])])])])),action:m((({close:e})=>[_(r,null,{default:m((()=>[_(u,{type:"button",color:"primary",outlined:"",disabled:n(t),onClick:()=>{e(),a.$emit("medicalExamination")}},{default:m((()=>[f(v(a.$t("For_medical_examination")),1)])),_:2},1032,["disabled","onClick"]),_(u,{type:"button",color:"danger",outlined:"",disabled:n(t),onClick:()=>{e(),a.$emit("withdrawal")}},{default:m((()=>[f(v(a.$t("Withdrawal")),1)])),_:2},1032,["disabled","onClick"])])),_:2},1024)])),_:1},8,["open","title"])}}}),[["__scopeId","data-v-cf1bd684"]]),Nl={class:"has-text-centered is-size-3"},Gl=V("br",null,null,-1),Ll={class:"columns"},Hl={class:"column"},Ql={class:"is-size-5"},Xl={class:"is-size-5"},Jl={class:"is-size-5"},Kl={class:"is-size-5"},Zl={class:"has-text-primary"},ea=a({__name:"PrimaryScreeningResultsModal",props:{visitcardId:{default:null},isOpen:{type:Boolean,default:!1}},emits:["update:isOpen","medicalExamination","withdrawal"],setup(l,{emit:a}){const t=l;oe(),se(),q(),P();const o=u(!1),i=u(""),d=r({});function c(){a("update:isOpen",!1)}return y((()=>t.visitcardId),(async e=>{try{const l=await T(e);Object.assign(d,l.result)}catch(l){}}),{immediate:!0}),(a,t)=>{const u=te,r=ae,y=e;return s(),p(y,{open:l.isOpen,title:n(i),actions:"center",onClose:c},{content:m((()=>{var e;return[V("h1",Nl,v(a.$t("Primary_screening_results")),1),Gl,V("div",Ll,[V("div",Hl,[V("p",Ql,[f(v(a.$t("Researched_at"))+": ",1),V("strong",null,v(n(d).date),1)]),V("p",Xl,[f(v(a.$t("Researched_by"))+": ",1),V("strong",null,v(n(d).specialist??a.$t("Specialist")),1)]),V("p",Jl,[f(v(a.$t("Preliminary_blood_type"))+": ",1),V("strong",null,v(null==(e=n(d).blood_type)?void 0:e.label),1)]),V("p",Kl,[f(v(a.$t("Hemoglobin_gl"))+": ",1),V("strong",Zl,v(n(d).value),1)])])])]})),action:m((({close:e})=>[_(r,null,{default:m((()=>[_(u,{type:"button",color:"primary",outlined:"",disabled:n(o),onClick:()=>{e(),a.$emit("medicalExamination")}},{default:m((()=>[f(v(a.$t("For_medical_examination")),1)])),_:2},1032,["disabled","onClick"]),_(u,{type:"button",color:"danger",outlined:"",disabled:n(o),onClick:()=>{e(),a.$emit("withdrawal")}},{default:m((()=>[f(v(a.$t("Withdrawal")),1)])),_:2},1032,["disabled","onClick"])])),_:2},1024)])),_:1},8,["open","title"])}}}),la=["onSubmit"],aa={class:"table is-bordered is-fullwidth"},ta={class:"has-text-centered"},na={class:"has-text-centered"},oa=J.flatten,sa=H(a({__name:"MedicalQuestionnaireModal",props:{visitcardId:{default:null},isOpen:{type:Boolean,default:!1}},emits:["update:isOpen","laboratoryResearch","withdrawal"],async setup(a,{emit:t}){let o,d;const r=a;oe(),se();const c=q(),{t:y}=P(),b=u(!1),h=y("Medical_questionnaire_before_donation"),g=u([]);async function x(){try{b.value=!0;const e=oa(g.value.map((e=>e.questions.map((e=>({question_id:e.id,value:e.question_answer}))))));await A(r.visitcardId,{answers:e}),c.success(y("Success"))}catch(e){c.error(e.message)}finally{b.value=!1}}function j(){t("update:isOpen",!1)}return[o,d]=I((()=>async function(){const e=await Y(r.visitcardId);g.value=e.result}())),await o,d(),(t,o)=>{const d=Z,u=Q,r=z,c=R,y=te,U=l,S=ae,I=e;return s(),p(I,{open:a.isOpen,size:"extra-big",title:n(h),actions:"right",onClose:j},{content:m((()=>[V("form",{id:"questionnaire-form",onSubmit:C(x,["prevent"])},[V("table",aa,[(s(!0),i(w,null,$(n(g),((e,l)=>(s(),i(w,{key:e.id},[V("thead",null,[V("tr",null,[V("th",ta,v(e.name),1),V("th",na,v(t.$t("Answer")),1)])]),V("tbody",null,[(s(!0),i(w,null,$(e.questions,((e,a)=>(s(),i("tr",{key:e.id},[V("td",null,v(e.name),1),V("td",null,[_(c,null,{default:m((()=>[_(r,null,{default:m((()=>["text"===e.answer_type?(s(),p(d,{key:0,modelValue:n(g)[l].questions[a].question_answer,"onUpdate:modelValue":e=>n(g)[l].questions[a].question_answer=e,rows:1},null,8,["modelValue","onUpdate:modelValue"])):k("",!0),"boolean"===e.answer_type?(s(),p(u,{key:1,modelValue:n(g)[l].questions[a].question_answer,"onUpdate:modelValue":e=>n(g)[l].questions[a].question_answer=e,"true-value":"1","false-value":null,color:"primary",class:"p-0"},null,8,["modelValue","onUpdate:modelValue"])):k("",!0)])),_:2},1024)])),_:2},1024)])])))),128))])],64)))),128))])],40,la)])),action:m((({close:e})=>[_(S,null,{default:m((()=>[_(y,{type:"button",color:"warning",disabled:n(b),onClick:()=>{e(),t.$emit("laboratoryResearch")}},{default:m((()=>[f(v(t.$t("Send_for_examination")),1)])),_:2},1032,["disabled","onClick"]),_(y,{type:"button",color:"danger",disabled:n(b),onClick:()=>{e(),t.$emit("withdrawal")}},{default:m((()=>[f(v(t.$t("Withdrawal")),1)])),_:2},1032,["disabled","onClick"]),_(U,{form:"questionnaire-form",loading:n(b)},null,8,["loading"])])),_:2},1024)])),_:1},8,["open","title"])}}}),[["__scopeId","data-v-de241a27"]]),ia={class:"patient-detail-wrapper"},da=["onSubmit"],ua={class:"columns mt-5"},ra={class:"column"},ca={class:"is-size-5"},pa=(e=>(x("data-v-614ecc54"),e=e(),j(),e))((()=>V("br",null,null,-1))),ma={class:"help has-text-danger"},_a={class:"column"},fa={class:"is-size-5"},va={class:"column"},ya={class:"is-size-5"},ba={class:"navigation-buttons"},ha={class:"buttons is-right"},ga={key:1,class:"mt-5"},Va={class:"box"},wa={class:"is-size-6"},$a={class:"is-size-6"},ka={class:"is-size-6"},xa={class:"table is-bordered is-fullwidth"},ja={key:0},Ca={href:"javascript:;",class:"has-text-primary is-uppercase"},Ua={href:"javascript:;",class:"has-text-primary is-uppercase"},Sa=H(a({__name:"[id]",async setup(e){var l;let a,t;const d=oe();se();const y=q(),{t:h}=P(),g=r({patient_category_id:null,last_name:"",first_name:"",father_name:"",birth_date:new Date,gender:"male",pinfl:"",passport_series:"",passport_number:"",issued_by:"",when_issued:new Date,region_id:null,district_id:null,work_study_place:"",email:"",phone_number:"",phone_home:"",phone_work:"",address:"",avatar:""}),w=r({patient_category_id:[],last_name:[],first_name:[],father_name:[],birth_date:[],gender:[],pinfl:[],passport_series:[],passport_number:[],issued_by:[],when_issued:[],region_id:[],district_id:[],work_study_place:[],email:[],phone_number:[],phone_home:[],phone_work:[],address:[],avatar:[]}),$=u(!1),x=(null==(l=d.params)?void 0:l.id)||null,j=u([{label:h("Patient_details"),value:"#details",icon:"feather:info"},{label:h("Medical_information"),value:"#medical_information",icon:"feather:file-text"}]),U=u([]),S=u(!1),M=u(!1),D=u(!1),E=u(!1),W=u(!1),B=u(!1),F=u(!1),T=u("#details");function Y(e){w[e]=""}async function A(){var e,l;try{$.value=!0;await L(x,g);y.success(h("Updated_successfully"))}catch(a){(null==(e=a.response)?void 0:e.data.errors)?Object.assign(w,null==(l=a.response)?void 0:l.data.errors):y.error(h("Something_went_wrong"))}finally{$.value=!1}}function H(){S.value=!0}function Q(){M.value=!0}function J(){D.value=!0}function Z(){E.value=!0}function ee(){W.value=!0}function le(){B.value=!0}function ae(){F.value=!0}function ne(){}return me().setPageTitle(h("Patient_info")),pe({title:o((()=>h("Patient_info")))}),[a,t]=I((()=>async function(){try{const e=await G(x);Object.assign(g,e.result),g.pinfl=g.pinfl??""}catch(e){y.error(e.message)}}())),await a,t(),c((async()=>{const e=await N();U.value=e.result})),(e,l)=>{var a,t,o;const d=ue,u=b("Multiselect"),r=z,c=R,y=re,h=ce,I=te,P=K,q=X,N=de,G=sa,L=ea,oe=Al,se=sl,ie=Me,pe=ke,me=be;return s(),i("div",ia,[_(N,{selected:n(T),tabs:n(j)},{tab:m((({activeValue:a})=>{var t;return["#details"===a?(s(),i("form",{key:0,onSubmit:C(A,["prevent"])},[V("div",ua,[V("div",ra,[V("p",ca,v(e.$t("Personal_Info")),1),_(d,{patient:n(g),errors:n(w),onEditing:Y},null,8,["patient","errors"]),pa,_(c,{label:e.$t("Category"),required:""},{default:m((()=>[_(r,null,{default:m((()=>[_(u,{modelValue:n(g).patient_category_id,"onUpdate:modelValue":l[0]||(l[0]=e=>n(g).patient_category_id=e),options:n(U),placeholder:e.$t("Select_category"),label:"name","value-prop":"id",onChange:l[1]||(l[1]=e=>Y("patient_category_id"))},null,8,["modelValue","options","placeholder"]),V("p",ma,v(n(w).patient_category_id[0]),1)])),_:1})])),_:1},8,["label"])]),V("div",_a,[V("p",fa,v(e.$t("Passport_info")),1),_(y,{patient:n(g),errors:n(w),onEditing:Y},null,8,["patient","errors"])]),V("div",va,[V("p",ya,v(e.$t("Address")),1),_(h,{patient:n(g),errors:n(w),onEditing:Y},null,8,["patient","errors"])])]),V("div",ba,[V("div",ha,[_(I,{type:"submit",color:"primary",bold:"",loading:n($),disabled:n($),tabindex:"0"},{default:m((()=>[f(v(e.$t("Save")),1)])),_:1},8,["loading","disabled"])])])],40,da)):"#medical_information"===a?(s(),i("div",ga,[V("div",Va,[_(q,{class:"mb-3","justify-content":"space-between"},{default:m((()=>[_(P,null,{default:m((()=>{var l,a;return[V("p",wa,v(e.$t("Directed_by"))+": "+v(null==(a=null==(l=n(g).last_visit)?void 0:l.medical_organization)?void 0:a.name),1)]})),_:1}),_(P,null,{default:m((()=>{var l,a;return[V("p",$a,v(e.$t("Personalized_donation"))+": "+v((null==(l=n(g).last_visit)?void 0:l.is_personalized_donation)?null==(a=n(g).last_visit)?void 0:a.personalized_donation:e.$t("No")),1)]})),_:1}),_(P,null,{default:m((()=>{var l;return[V("p",ka,v(e.$t("Blood_collect_condition"))+": "+v((null==(l=n(g).last_visit)?void 0:l.is_mobile_team)?e.$t("Mobile_team"):e.$t("Stationary")),1)]})),_:1})])),_:1}),V("table",xa,[V("tbody",null,[V("tr",null,[V("td",null,[V("a",{href:"javascript:;",class:"has-text-primary is-uppercase",onClick:H},v(e.$t("Medical_questionnaire")),1)])]),3===(null==(t=n(g).last_visit)?void 0:t.visit_status_id)?(s(),i("tr",ja,[V("td",null,[V("a",{href:"javascript:;",class:"has-text-primary is-uppercase",onClick:Q},v(e.$t("Primary_screening_results")),1)])])):k("",!0),V("tr",null,[V("td",null,[V("a",{href:"javascript:;",class:"has-text-primary is-uppercase",onClick:J},v(e.$t("Laboratory_test_results")),1)])]),V("tr",null,[V("td",null,[V("a",Ca,v(e.$t("Infectious_diseases")),1)])]),V("tr",null,[V("td",null,[V("a",Ua,v(e.$t("Medical_clearance")),1)])])])])])])):k("",!0)]})),_:1},8,["selected","tabs"]),_(G,{"is-open":n(S),"onUpdate:is-open":l[2]||(l[2]=e=>O(S)?S.value=e:null),"visitcard-id":n(g).last_visit.id,onWithdrawal:ee,onLaboratoryResearch:le},null,8,["is-open","visitcard-id"]),3===(null==(a=n(g).last_visit)?void 0:a.visit_status_id)?(s(),p(L,{key:0,"is-open":n(M),"onUpdate:is-open":l[3]||(l[3]=e=>O(M)?M.value=e:null),"visitcard-id":null==(t=n(g).last_visit)?void 0:t.id,onWithdrawal:ee,onMedicalExamination:Z},null,8,["is-open","visitcard-id"])):k("",!0),_(oe,{"is-open":n(D),"onUpdate:is-open":l[4]||(l[4]=e=>O(D)?D.value=e:null),"patient-id":Number(n(x)),onWithdrawal:ee,onMedicalExamination:Z},null,8,["is-open","patient-id"]),_(se,{"is-open":n(E),"onUpdate:is-open":l[5]||(l[5]=e=>O(E)?E.value=e:null),"visitcard-id":null==(o=n(g).last_visit)?void 0:o.id,onWithdrawal:ee,onDonation:ae},null,8,["is-open","visitcard-id"]),_(ie,{"is-open":n(W),"onUpdate:is-open":l[6]||(l[6]=e=>O(W)?W.value=e:null),"patient-id":Number(n(x))},null,8,["is-open","patient-id"]),_(pe,{"is-open":n(B),"onUpdate:is-open":l[7]||(l[7]=e=>O(B)?B.value=e:null),visitcard:n(g).last_visit},null,8,["is-open","visitcard"]),_(me,{"is-open":n(F),"onUpdate:is-open":l[8]||(l[8]=e=>O(F)?F.value=e:null),visitcard:n(g).last_visit,onSubmit:ne},null,8,["is-open","visitcard"])])}}}),[["__scopeId","data-v-614ecc54"]]);export{Sa as default};