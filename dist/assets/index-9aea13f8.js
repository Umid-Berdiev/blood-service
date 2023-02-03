import{_ as t}from"./VModal.vue_vue_type_style_index_0_lang-ac88dda5.js";import{_ as a}from"./SubmitButton.vue_vue_type_script_setup_true_lang-96021f2c.js";import{_ as e}from"./VFlex.vue_vue_type_style_index_0_lang-57370b27.js";import{_ as l}from"./DatePicker.vue_vue_type_script_setup_true_lang-8beaf1b4.js";import{_ as n}from"./VFlexItem.vue_vue_type_style_index_0_lang-a32e2ae4.js";import{a6 as o,q as s,a7 as i,H as r,C as d,x as u,r as _,o as m,a as p,w as c,e as v,t as b,m as g,k as h,i as y,A as f,y as V,j as $,K as x,E as j,J as w,d as k,g as D,F as B,l as O,U as C,L as F,M as U}from"./index-21286bdb.js";import{_ as S,a as M,b as z}from"./VFlexTable.vue_vue_type_style_index_0_lang-03a54f1c.js";import{_ as L,a as I,b as E,c as P,d as T}from"./search-7-dark-81286176.js";import{_ as Y}from"./VCard.vue_vue_type_script_setup_true_lang-1043f916.js";import{_ as A}from"./VButton.vue_vue_type_style_index_0_lang-b78df6f3.js";import{_ as N}from"./ClearButton.vue_vue_type_script_setup_true_lang-7aff0300.js";import{_ as q}from"./VInput.vue_vue_type_script_setup_true_lang-9c010bca.js";import{_ as G,a as H}from"./VControl-e7b2630d.js";import{v as J}from"./additionals-99299df8.js";import{f as K}from"./additional-f442439b.js";import{_ as R}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-69f615bd.js";import{_ as W}from"./lodash-724857a3.js";import{u as Z}from"./main-16751c88.js";import{u as Q}from"./viewWrapper-6ae5f61c.js";import{_ as X}from"./_plugin-vue_export-helper-1b428a4d.js";import"./ClientOnly.vue_vue_type_script_lang-52200b90.js";const tt=o();const at={class:"columns"},et={class:"column"},lt={class:"is-size-5 has-text-weight-medium"},nt={class:"column"},ot={class:"is-size-5 has-text-weight-medium"},st={class:"columns"},it={class:"column"},rt={class:"table"},dt=["onSubmit"],ut={class:"is-size-5 has-text-weight-medium"},_t=v("br",null,null,-1),mt={class:"help has-text-danger"},pt=v("br",null,null,-1),ct={class:"table is-fullwidth"},vt={class:"help has-text-danger"},bt={class:"help has-text-danger"},gt={class:"help has-text-danger"},ht={class:"help has-text-danger"},yt=s({__name:"BloodSamplingFormModal",props:{isOpen:{type:Boolean,default:!1},patient:null},emits:["update:isOpen","update:list"],setup(o,{emit:s}){const f=o,V=i(new Date,"YYYY-MM-DD"),$=r(),{t:x}=d(),j=u(x("Sampling_data_entry_form")),w=u(!1),k=_({date:V,hemotransmissible_date:V,chemical_date:V,buck_laboratory_date:V,immunological_laboratory_date:V}),D=_({date:[],hemotransmissible_date:[],chemical_date:[],buck_laboratory_date:[],immunological_laboratory_date:[]});async function B(){var t,a,e,l,n,o;try{w.value=!0,await async function(t,a){try{const{data:e}=await tt({url:`/visit-cards/${t}/blood-samples`,method:"POST",data:a});return e}catch(e){throw e}}(null==(a=null==(t=f.patient)?void 0:t.last_visit)?void 0:a.id,k),s("update:list"),O()}catch(i){(null==(e=i.response)?void 0:e.data.error)?$.error(null==(l=i.response)?void 0:l.data.error):Object.assign(D,null==(o=null==(n=i.response)?void 0:n.data)?void 0:o.errors)}finally{w.value=!1}}function O(){Object.assign(k,{date:V,hemotransmissible_date:V,chemical_date:V,buck_laboratory_date:V,immunological_laboratory_date:V}),Object.assign(D,{date:[],hemotransmissible_date:[],chemical_date:[],buck_laboratory_date:[],immunological_laboratory_date:[]}),s("update:isOpen",!1)}return(s,i)=>{const r=n,d=l,u=e,_=a,f=t;return m(),p(f,{open:o.isOpen,size:"big",title:j.value,actions:"right",onClose:O},{content:c((()=>{var t,a,e,l,n,_,m,p;return[v("div",at,[v("div",et,[v("h5",lt,b(s.$t("Donor_information"))+" # "+b(o.patient.id),1)]),v("div",nt,[v("h5",ot,b(s.$t("Visit_date"))+": "+b(null==(t=o.patient.last_visit)?void 0:t.created_at),1)])]),v("div",st,[v("div",it,[v("table",rt,[v("tbody",null,[v("tr",null,[v("th",null,b(s.$t("Last_name")),1),v("td",null,b(o.patient.last_name),1)]),v("tr",null,[v("th",null,b(s.$t("First_name")),1),v("td",null,b(o.patient.first_name),1)]),v("tr",null,[v("th",null,b(s.$t("Middlename")),1),v("td",null,b(o.patient.father_name),1)]),v("tr",null,[v("th",null,b(s.$t("Date-of-birth")),1),v("td",null,b(o.patient.birth_date),1)]),v("tr",null,[v("th",null,b(s.$t("Gender")),1),v("td",null,b(o.patient.gender&&s.$t(o.patient.gender)),1)]),v("tr",null,[v("th",null,b(s.$t("Visit_type")),1),v("td",null,b((null==(a=o.patient.last_visit)?void 0:a.visit_type)&&s.$t(null==(e=o.patient.last_visit)?void 0:e.visit_type)),1)]),v("tr",null,[v("th",null,b(s.$t("Donation_type")),1),v("td",null,b((null==(n=null==(l=o.patient.last_visit)?void 0:l.donation_type)?void 0:n.name)&&s.$t(null==(m=null==(_=o.patient.last_visit)?void 0:_.donation_type)?void 0:m.name)),1)]),v("tr",null,[v("th",null,b(s.$t("Donor_category")),1),v("td",null,b(null==(p=o.patient.category)?void 0:p.name),1)]),v("tr",null,[v("th",null,b(s.$t("Passport_series_number")),1),v("td",null,b(o.patient.passport_series)+b(o.patient.passport_number)+", "+b(o.patient.issued_by)+", "+b(o.patient.when_issued),1)])])])])]),v("form",{id:"blood-sampling-form",class:"modal-form",onSubmit:g(B,["prevent"])},[v("h5",ut,b(s.$t("Information_about_blood_sampling")),1),_t,h(u,{"column-gap":"1rem","align-items":"center"},{default:c((()=>[h(r,null,{default:c((()=>[y(b(s.$t("Blood_sampling_date")),1)])),_:1}),h(r,null,{default:c((()=>[h(d,{modelValue:k.date,"onUpdate:modelValue":i[0]||(i[0]=t=>k.date=t)},null,8,["modelValue"]),v("p",mt,b(D.date[0]),1)])),_:1})])),_:1}),pt,v("table",ct,[v("thead",null,[v("tr",null,[v("th",null,b(s.$t("Blood_sample_transferred_where")),1),v("th",null,b(s.$t("Blood_sample_transferred_when")),1)])]),v("tbody",null,[v("tr",null,[v("td",null,b(s.$t("Bloodborne-infections-laboratory")),1),v("td",null,[h(d,{modelValue:k.hemotransmissible_date,"onUpdate:modelValue":i[1]||(i[1]=t=>k.hemotransmissible_date=t)},null,8,["modelValue"]),v("p",vt,b(D.hemotransmissible_date[0]),1)])]),v("tr",null,[v("td",null,b(s.$t("Clinical-biochemical-laboratory")),1),v("td",null,[h(d,{modelValue:k.chemical_date,"onUpdate:modelValue":i[2]||(i[2]=t=>k.chemical_date=t)},null,8,["modelValue"]),v("p",bt,b(D.chemical_date[0]),1)])]),v("tr",null,[v("td",null,b(s.$t("Buck-laboratory")),1),v("td",null,[h(d,{modelValue:k.buck_laboratory_date,"onUpdate:modelValue":i[3]||(i[3]=t=>k.buck_laboratory_date=t)},null,8,["modelValue"]),v("p",gt,b(D.buck_laboratory_date[0]),1)])]),v("tr",null,[v("td",null,b(s.$t("Immunological-Research-Department")),1),v("td",null,[h(d,{modelValue:k.immunological_laboratory_date,"onUpdate:modelValue":i[4]||(i[4]=t=>k.immunological_laboratory_date=t)},null,8,["modelValue"]),v("p",ht,b(D.immunological_laboratory_date[0]),1)])])])])],40,dt)]})),action:c((()=>[h(_,{loading:w.value,form:"blood-sampling-form"},null,8,["loading"])])),_:1},8,["open","title"])}}}),ft=["onSubmit"],Vt={class:"columns"},$t={class:"column is-3"},xt={class:"help has-text-danger"},jt={class:"column is-3"},wt={class:"help has-text-danger"},kt={class:"column is-3"},Dt={class:"help has-text-danger"},Bt={class:"navigation-buttons"},Ot={class:"buttons is-right"},Ct=s({__name:"BloodSamplingFilterForm",props:{isLoading:{type:Boolean},errors:null},emits:["search","clearError","clearForm"],setup(t,{emit:a}){d(),r();const e=_({visit_type:"",donation_type_id:null,donation_code:""}),l=u([]),n=u(!1);f((async()=>{const t=await K();l.value=t.result})),V(e,(t=>{t&&(n.value=Object.values(t).some((t=>!!t)))}),{deep:!0});const o=async()=>{a("search",e)},s=async()=>{Object.assign(e,{visit_type:"",donation_type_id:null,donation_code:""}),a("clearForm")};return(a,i)=>{const r=$("Multiselect"),d=G,u=H,_=q,f=N,V=A,j=Y;return m(),p(j,null,{default:c((()=>[v("form",{onSubmit:g(o,["prevent"])},[v("div",Vt,[v("div",$t,[h(u,{class:"is-curved-select",label:a.$t("Visit_type")},{default:c((({id:l})=>[h(d,null,{default:c((()=>[h(r,{modelValue:x(e).visit_type,"onUpdate:modelValue":i[0]||(i[0]=t=>x(e).visit_type=t),attrs:{id:l},options:x(J),placeholder:a.$t("All")},null,8,["modelValue","attrs","options","placeholder"]),v("p",xt,b(t.errors.visit_type[0]),1)])),_:2},1024)])),_:1},8,["label"])]),v("div",jt,[h(u,{class:"is-curved-select",label:a.$t("Donation_type")},{default:c((({id:n})=>[h(d,null,{default:c((()=>[h(r,{modelValue:x(e).donation_type_id,"onUpdate:modelValue":i[1]||(i[1]=t=>x(e).donation_type_id=t),attrs:{id:n},options:x(l),placeholder:a.$t("All"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"]),v("p",wt,b(t.errors.donation_type_id[0]),1)])),_:2},1024)])),_:1},8,["label"])]),v("div",kt,[h(u,{class:"is-curved-select",label:a.$t("Donation_code")},{default:c((({id:l})=>[h(d,null,{default:c((()=>[h(_,{modelValue:x(e).donation_code,"onUpdate:modelValue":i[2]||(i[2]=t=>x(e).donation_code=t),attrs:{id:l},placeholder:a.$t("Donation_code")},null,8,["modelValue","attrs","placeholder"]),v("p",Dt,b(t.errors.donation_code[0]),1)])),_:2},1024)])),_:1},8,["label"])])]),v("div",Bt,[v("div",Ot,[h(f,{disabled:t.isLoading||!x(n),onClear:s},null,8,["disabled"]),h(V,{type:"submit",color:"primary",bold:"",loading:t.isLoading,tabindex:"0"},{default:c((()=>[y(b(a.$t("Search")),1)])),_:1},8,["loading"])])])],40,ft)])),_:1})}}}),Ft=t=>(F("data-v-84585158"),t=t(),U(),t),Ut={class:"page-content-inner"},St={class:"columns mb-3"},Mt={class:"column"},zt={class:"columns mt-1"},Lt={class:"column"},It={class:"columns"},Et={class:"column is-12"},Pt={key:0,class:"is-flex-grow-0",textContent:"#"},Tt={key:0,class:"flex-list-inner"},Yt={key:1,class:"flex-list-inner"},At=Ft((()=>v("img",{class:"light-image",src:P,alt:""},null,-1))),Nt=Ft((()=>v("img",{class:"dark-image",src:T,alt:""},null,-1))),qt=["onClick"],Gt=W.isEmpty,Ht=X(s({__name:"index",setup(t){j();const a=r(),{t:e}=d(),l=Z(),n=u(!1);Q().setPageTitle(e("Blood_sampling")),w({title:`${e("Donor_list_for_blood_sampling")} - ${l.app.name}`});const o=_({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),s={orderNumber:{format:(t,a,e)=>`${e+1}`,cellClass:"is-flex-grow-0"},name:{label:e("Fullname")},birth_date:{label:e("Date-of-birth")},visit_date:{label:e("Visit_date"),format:(t,a)=>{var e;return null==(e=a.last_visit)?void 0:e.created_at}},visit_type:{label:e("Visit_type"),format:(t,a)=>{var l,n;return(null==(l=a.last_visit)?void 0:l.visit_type)&&e(null==(n=a.last_visit)?void 0:n.visit_type)}},donation_type:{label:e("Donation_type"),format:(t,a)=>{var e;return null==(e=a.last_visit)?void 0:e.personalized_donation}},donation_number:{label:e("Donation_number"),format:(t,a)=>{var e;return null==(e=a.last_visit)?void 0:e.personalized_donation}}},i=_({visit_type:[],donation_type_id:[],donation_code:[]}),g=_({page:1}),y=_({}),f=u(!1);async function $(t){var l,s;try{Object.assign(g,t),n.value=!0;const l=await async function(t){try{const{data:a}=await tt({url:"/patients/blood-samples",params:t});return a}catch(a){throw a}}(t);Object.assign(o,l.result),Gt(l.result.data)&&a.warning(e("Data_not_found"))}catch(r){Object.assign(i,null==(s=null==(l=r.response)?void 0:l.data)?void 0:s.errors)}finally{n.value=!1}}function F(t){i[t]=""}async function U(){await $(g)}return V((()=>o.pagination.current_page),(async t=>{t&&await $(g)}),{immediate:!0}),(t,a)=>{const e=R,r=Ct,d=L,u=S,_=I,V=M,j=E,w=z,P=yt;return m(),k("div",Ut,[v("div",St,[v("div",Mt,[h(e,{"with-icons":"",separator:"bullet",items:[{label:x(l).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:t.$t("Blood_sampling")},{label:t.$t("Donor_list_for_blood_sampling")}]},null,8,["items"])])]),v("div",zt,[v("div",Lt,[h(r,{"is-loading":x(n),errors:x(i),onSearch:$,onClearForm:U,onClearError:F},null,8,["is-loading","errors"])])]),v("div",It,[v("div",Et,[h(w,{columns:x(s),data:x(o).data,limit:x(o).pagination.per_page,total:x(o).pagination.total},{default:c((()=>[h(V,{rounded:"","no-header":!x(n)&&0===x(o).data.length},{"header-column":c((({column:t})=>["orderNumber"===t.key?(m(),k("span",Pt)):D("",!0)])),body:c((()=>[x(n)?(m(),k("div",Tt,[(m(!0),k(B,null,O(x(o).pagination.per_page,(t=>(m(),k("div",{key:t,class:"flex-table-item"},[h(u,null,{default:c((()=>[h(d,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):D("",!0),0===x(o).data.length?(m(),k("div",Yt,[h(_,{title:t.$t("No_data"),subtitle:t.$t("There_is_no_data_that_match_your_query"),class:"my-6"},{image:c((()=>[At,Nt])),_:1},8,["title","subtitle"])])):D("",!0)])),"body-cell":c((({row:t,column:a})=>["name"===a.key?(m(),k("a",{key:0,href:"javascript:;",class:"has-text-primary",onClick:a=>{return e=t,Object.assign(y,e),void(f.value=!0);var e}},b(t.first_name)+" "+b(t.last_name)+" "+b(t.father_name)+" ",9,qt)):D("",!0)])),_:1},8,["no-header"]),x(o).data.length?(m(),p(j,{key:0,"current-page":x(o).pagination.current_page,"onUpdate:current-page":a[0]||(a[0]=t=>x(o).pagination.current_page=t),class:"mt-5","item-per-page":x(o).pagination.per_page,"total-items":x(o).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):D("",!0)])),_:1},8,["columns","data","limit","total"])])]),h(P,{"is-open":x(f),"onUpdate:is-open":a[1]||(a[1]=t=>C(f)?f.value=t:null),patient:x(y),"onUpdate:list":a[2]||(a[2]=t=>$(x(g)))},null,8,["is-open","patient"])])}}}),[["__scopeId","data-v-84585158"]]);export{Ht as default};
