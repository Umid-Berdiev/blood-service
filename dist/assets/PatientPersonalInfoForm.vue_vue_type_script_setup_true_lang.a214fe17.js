import{_ as e}from"./VIMaskInput.vue_vue_type_script_lang.dc02f214.js";import{_ as l}from"./VInput.vue_vue_type_script_setup_true_lang.592b040e.js";import{_ as a}from"./VTextarea.vue_vue_type_script_setup_true_lang.ff9ad1ac.js";import{u as t,b as s,_ as d,a as n}from"./VControl.96f035a3.js";import{q as o,r,x as u,y as i,o as p,a as m,w as _,$ as c,e as h,p as f,aJ as b,b as V,Y as g,Z as $,i as v,t as y,f as k,aG as w,c as x,A as U,j as I,d as P,k as q,K as D,C as F,aH as M}from"./index.575ce5b2.js";const Y=["id","value","name"],E=h("span",null,null,-1),j=o({__name:"VRadio",props:{id:{default:void 0},value:null,modelValue:{default:void 0},name:{default:void 0},label:{default:void 0},color:{default:void 0},square:{type:Boolean},solid:{type:Boolean},paddingless:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:l}){var a,d;const n=e,o=r(t({id:n.id,inherit:!1})),w=u(null!=(d=null==(a=null==o?void 0:o.field)?void 0:a.value)?d:n.modelValue);return i(w,(()=>{l("update:modelValue",w.value)})),i((()=>n.modelValue),(()=>{w.value=n.modelValue})),(e,l)=>{const a=s;return p(),m(a,{raw:"",class:k(["radio",[n.solid?"is-solid":"is-outlined",n.square&&"is-square",n.color&&`is-${n.color}`,n.paddingless&&"is-paddingless"]])},{default:_((()=>[c(h("input",f({id:o.id,"onUpdate:modelValue":l[0]||(l[0]=e=>w.value=e),type:"radio",value:n.value,name:n.name},e.$attrs),null,16,Y),[[b,w.value]]),E,V(e.$slots,"default",g($(o)),(()=>[v(y(n.label),1)]))])),_:3},8,["class"])}}}),A=w();async function C(){try{const{data:e}=await A({url:"/medical-organizations"});return e}catch(e){throw e}}const B={class:"fieldset p-5"},R={class:"help has-text-danger"},G={class:"help has-text-danger"},L={class:"help has-text-danger"},z={class:"help has-text-danger"},H={class:"help has-text-danger"},J=o({__name:"PatientAddressForm",props:{patient:null,errors:null},emits:["update:patient","editing"],setup(t,{emit:s}){const o=t,r=x({get:()=>o.patient,set(e){s("update:patient",e)}}),m=u([]),c=u([]);return U((async()=>{const e=await async function(){try{const{data:e}=await A({url:"/regions"});return e}catch(e){throw e}}();m.value=e.result})),i((()=>r.value.region_id),(async function(e){if(e){const l=await async function(e){try{const{data:l}=await A({url:"/districts",params:{region_id:e}});return l}catch(l){throw l}}(e);c.value=l.result}}),{immediate:!0}),(s,o)=>{const u=I("Multiselect"),i=d,f=n,b=a,V=l,g=e;return p(),P("div",B,[q(f,{label:s.$t("Region"),required:""},{default:_((({id:e})=>[q(i,null,{default:_((()=>[q(u,{modelValue:D(r).region_id,"onUpdate:modelValue":o[0]||(o[0]=e=>D(r).region_id=e),attrs:{id:e},label:"name","value-prop":"id",searchable:!0,"track-by":"name",options:m.value,placeholder:s.$t("Region"),onInput:o[1]||(o[1]=e=>s.$emit("editing","region_id"))},null,8,["modelValue","attrs","options","placeholder"]),h("p",R,y(t.errors.region_id[0]),1)])),_:2},1024)])),_:1},8,["label"]),q(f,{label:s.$t("District"),required:""},{default:_((({id:e})=>[q(i,null,{default:_((()=>[q(u,{modelValue:D(r).district_id,"onUpdate:modelValue":o[2]||(o[2]=e=>D(r).district_id=e),attrs:{id:e},label:"name","value-prop":"id",searchable:!0,"track-by":"name",options:c.value,placeholder:s.$t("District"),disabled:!D(r).region_id,onInput:o[3]||(o[3]=e=>s.$emit("editing","district_id"))},null,8,["modelValue","attrs","options","placeholder","disabled"]),h("p",G,y(t.errors.district_id[0]),1)])),_:2},1024)])),_:1},8,["label"]),q(f,{label:s.$t("Additional_address")},{default:_((()=>[q(i,null,{default:_((()=>[q(b,{modelValue:D(r).address,"onUpdate:modelValue":o[4]||(o[4]=e=>D(r).address=e),rows:"2",placeholder:s.$t("Additional_address"),onInput:o[5]||(o[5]=e=>s.$emit("editing","address"))},null,8,["modelValue","placeholder"]),h("p",L,y(t.errors.address[0]),1)])),_:1})])),_:1},8,["label"]),q(f,{label:s.$t("Place_work_study")},{default:_((()=>[q(i,null,{default:_((()=>[q(b,{modelValue:D(r).work_study_place,"onUpdate:modelValue":o[6]||(o[6]=e=>D(r).work_study_place=e),rows:"2",placeholder:s.$t("Place_work_study"),onInput:o[7]||(o[7]=e=>s.$emit("editing","work_study_place"))},null,8,["modelValue","placeholder"]),h("p",z,y(t.errors.work_study_place[0]),1)])),_:1})])),_:1},8,["label"]),q(f,{label:s.$t("Email")},{default:_((()=>[q(i,null,{default:_((()=>[q(V,{modelValue:D(r).email,"onUpdate:modelValue":o[8]||(o[8]=e=>D(r).email=e),type:"text",placeholder:s.$t("Email"),onInput:o[9]||(o[9]=e=>s.$emit("editing","email"))},null,8,["modelValue","placeholder"]),h("p",H,y(t.errors.email[0]),1)])),_:1})])),_:1},8,["label"]),q(f,{label:s.$t("Phone_mobile")},{default:_((()=>[q(i,null,{default:_((()=>[q(g,{modelValue:D(r).phone_number,"onUpdate:modelValue":o[10]||(o[10]=e=>D(r).phone_number=e),class:"input",options:{mask:"{998}(00)000-00-00"},placeholder:"Format: 998(00)000-00-00"},null,8,["modelValue","options"])])),_:1})])),_:1},8,["label"]),q(f,{label:s.$t("Phone_home")},{default:_((()=>[q(i,null,{default:_((()=>[q(g,{modelValue:D(r).phone_home,"onUpdate:modelValue":o[11]||(o[11]=e=>D(r).phone_home=e),class:"input",options:{mask:"{998}(00)000-00-00"},placeholder:"Format: 998(00)000-00-00"},null,8,["modelValue","options"])])),_:1})])),_:1},8,["label"]),q(f,{label:s.$t("Phone_work")},{default:_((()=>[q(i,null,{default:_((()=>[q(g,{modelValue:D(r).phone_work,"onUpdate:modelValue":o[12]||(o[12]=e=>D(r).phone_work=e),class:"input",options:{mask:"{998}(00)000-00-00"},placeholder:"Format: 998(00)000-00-00"},null,8,["modelValue","options"])])),_:1})])),_:1},8,["label"])])}}}),K={class:"fieldset p-5"},T={class:"help has-text-danger"},W={class:"help has-text-danger"},Z={class:"help has-text-danger"},N={class:"help has-text-danger"},O={class:"help has-text-danger"},Q=o({__name:"PatientPassportForm",props:{patient:{default:{pinfl:""}},errors:null},emits:["update:patient","editing"],setup(a,{emit:t}){const s=a,{locale:o}=F(),i=u({input:"YYYY-MM-DD"}),m=r({type:"string",mask:i.value.input}),c=x({get:()=>s.patient,set(e){t("update:patient",e)}});return(t,s)=>{const r=e,u=d,b=n,V=l,g=I("VDatePicker");return p(),P("div",K,[q(b,{label:t.$t("Pinfl"),required:""},{default:_((()=>[q(u,null,{default:_((()=>[q(r,{modelValue:D(c).pinfl,"onUpdate:modelValue":s[0]||(s[0]=e=>D(c).pinfl=e),class:"input",options:{mask:"00000000000000"},placeholder:t.$t("Enter_pinfl"),onInput:s[1]||(s[1]=e=>t.$emit("editing","pinfl"))},null,8,["modelValue","placeholder"]),h("p",T,y(a.errors.pinfl[0]),1)])),_:1})])),_:1},8,["label"]),q(b,{label:t.$t("Passport_series"),required:""},{default:_((()=>[q(u,null,{default:_((()=>[q(r,{modelValue:D(c).passport_series,"onUpdate:modelValue":s[2]||(s[2]=e=>D(c).passport_series=e),class:"input",options:{mask:"aa",prepare:function(e){return e.toUpperCase()}},placeholder:t.$t("Enter_passport_series")},null,8,["modelValue","options","placeholder"]),h("p",W,y(a.errors.passport_series[0]),1)])),_:1})])),_:1},8,["label"]),q(b,{label:t.$t("Passport_number"),required:""},{default:_((()=>[q(u,null,{default:_((()=>[q(r,{modelValue:D(c).passport_number,"onUpdate:modelValue":s[3]||(s[3]=e=>D(c).passport_number=e),class:"input",options:{mask:"0000000"},placeholder:t.$t("Enter_passport_number")},null,8,["modelValue","placeholder"]),h("p",Z,y(a.errors.passport_number[0]),1)])),_:1})])),_:1},8,["label"]),q(b,{label:t.$t("Issued_by")},{default:_((()=>[q(u,null,{default:_((()=>[q(V,{modelValue:D(c).issued_by,"onUpdate:modelValue":s[4]||(s[4]=e=>D(c).issued_by=e),type:"text",placeholder:t.$t("Issued_by"),onInput:s[5]||(s[5]=e=>t.$emit("editing","issued_by"))},null,8,["modelValue","placeholder"]),h("p",N,y(a.errors.issued_by[0]),1)])),_:1})])),_:1},8,["label"]),q(g,{modelValue:D(c).when_issued,"onUpdate:modelValue":s[7]||(s[7]=e=>D(c).when_issued=e),locale:D(o),mode:"date",masks:i.value,"model-config":m,color:"green","trim-weeks":"",popover:{visibility:"click"}},{default:_((({inputValue:e,inputEvents:l})=>[q(b,{label:t.$t("When_issued")},{default:_((()=>[q(u,{icon:"feather:calendar"},{default:_((()=>[q(V,f({value:e},M(l),{onChange:s[6]||(s[6]=e=>t.$emit("editing","when_issued"))}),null,16,["value"]),h("p",O,y(a.errors.when_issued[0]),1)])),_:2},1024)])),_:2},1032,["label"])])),_:1},8,["modelValue","locale","masks","model-config"])])}}}),S={class:"fieldset p-5"},X={class:"help has-text-danger"},ee={class:"help has-text-danger"},le={class:"help has-text-danger"},ae={class:"help has-text-danger"},te={class:"help has-text-danger"},se=o({__name:"PatientPersonalInfoForm",props:{patient:null,errors:null},emits:["update:patient","editing"],setup(e,{emit:a}){const t=e,{locale:s}=F(),o=u({input:"YYYY-MM-DD"}),i=r({type:"string",mask:o.value.input}),m=x({get:()=>t.patient,set(e){a("update:patient",e)}});return(a,t)=>{const r=l,u=d,c=n,b=I("VDatePicker"),V=j;return p(),P("div",S,[q(c,{label:a.$t("Last_name"),required:""},{default:_((()=>[q(u,null,{default:_((()=>[q(r,{modelValue:D(m).last_name,"onUpdate:modelValue":t[0]||(t[0]=e=>D(m).last_name=e),type:"text",placeholder:a.$t("Last_name"),onInput:t[1]||(t[1]=e=>a.$emit("editing","last_name"))},null,8,["modelValue","placeholder"]),h("p",X,y(e.errors.last_name[0]),1)])),_:1})])),_:1},8,["label"]),q(c,{label:a.$t("First_name"),required:""},{default:_((()=>[q(u,null,{default:_((()=>[q(r,{modelValue:D(m).first_name,"onUpdate:modelValue":t[2]||(t[2]=e=>D(m).first_name=e),type:"text",placeholder:a.$t("First_name"),onInput:t[3]||(t[3]=e=>a.$emit("editing","first_name"))},null,8,["modelValue","placeholder"]),h("p",ee,y(e.errors.first_name[0]),1)])),_:1})])),_:1},8,["label"]),q(c,{label:a.$t("Middlename")},{default:_((()=>[q(u,null,{default:_((()=>[q(r,{modelValue:D(m).father_name,"onUpdate:modelValue":t[4]||(t[4]=e=>D(m).father_name=e),type:"text",placeholder:a.$t("Middlename"),onInput:t[5]||(t[5]=e=>a.$emit("editing","father_name"))},null,8,["modelValue","placeholder"]),h("p",le,y(e.errors.father_name[0]),1)])),_:1})])),_:1},8,["label"]),q(b,{modelValue:D(m).birth_date,"onUpdate:modelValue":t[7]||(t[7]=e=>D(m).birth_date=e),locale:D(s),mode:"date",masks:o.value,"model-config":i,color:"green","trim-weeks":"",popover:{visibility:"click"}},{default:_((({inputValue:l,inputEvents:s})=>[q(c,{label:a.$t("Date-of-birth"),required:""},{default:_((()=>[q(u,{icon:"feather:calendar"},{default:_((()=>[q(r,f({value:l},M(s),{onInput:t[6]||(t[6]=e=>a.$emit("editing","birth_date"))}),null,16,["value"]),h("p",ae,y(e.errors.birth_date[0]),1)])),_:2},1024)])),_:2},1032,["label"])])),_:1},8,["modelValue","locale","masks","model-config"]),q(c,{label:a.$t("Gender")},{default:_((()=>[q(u,null,{default:_((()=>[q(V,{modelValue:D(m).gender,"onUpdate:modelValue":t[8]||(t[8]=e=>D(m).gender=e),value:"male",label:a.$t("Male"),onInput:t[9]||(t[9]=e=>a.$emit("editing","gender"))},null,8,["modelValue","label"]),q(V,{modelValue:D(m).gender,"onUpdate:modelValue":t[10]||(t[10]=e=>D(m).gender=e),value:"female",label:a.$t("Female"),onInput:t[11]||(t[11]=e=>a.$emit("editing","gender"))},null,8,["modelValue","label"]),h("p",te,y(e.errors.gender[0]),1)])),_:1})])),_:1},8,["label"])])}}});export{j as _,se as a,Q as b,J as c,C as f};