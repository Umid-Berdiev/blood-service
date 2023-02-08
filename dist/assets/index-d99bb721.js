import{_ as t}from"./VModal.vue_vue_type_style_index_0_lang-98b95306.js";import{_ as a}from"./SubmitButton.vue_vue_type_script_setup_true_lang-dc9d0236.js";import{_ as e}from"./VFlex.vue_vue_type_style_index_0_lang-5c9a78f5.js";import{_ as l}from"./DatePicker.vue_vue_type_script_setup_true_lang-181de8a9.js";import{_ as n}from"./VFlexItem.vue_vue_type_style_index_0_lang-cfd608a5.js";import{a6 as o,q as i,a7 as s,H as r,C as d,x as u,r as _,o as m,a as p,w as c,e as v,t as b,m as g,k as y,i as h,A as f,y as V,j as $,K as j,E as x,J as w,d as k,g as D,F as B,l as O,U as C}from"./index-202d6ef0.js";import{_ as F,a as U,b as S}from"./VFlexTable.vue_vue_type_style_index_0_lang-6eeebdac.js";import{_ as z,a as M}from"./VPlaceloadText.vue_vue_type_style_index_0_lang-8916ac45.js";import{_ as P}from"./NoDataPlaceholder-50105cc5.js";import{_ as I}from"./VCard.vue_vue_type_script_setup_true_lang-8d45bf90.js";import{_ as L}from"./VButton.vue_vue_type_style_index_0_lang-8a17f68b.js";import{_ as T}from"./ClearButton.vue_vue_type_script_setup_true_lang-422ea292.js";import{_ as Y}from"./VInput.vue_vue_type_script_setup_true_lang-6aad6843.js";import{_ as A,a as N}from"./VControl-90e6c9df.js";import{v as q}from"./additionals-8d72a378.js";import{f as E}from"./additional-b8f03a9c.js";import{_ as G}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-e8162493.js";import{u as H}from"./main-1fdef032.js";import{u as J}from"./viewWrapper-93d6f948.js";import{_ as K}from"./_plugin-vue_export-helper-1b428a4d.js";import"./ClientOnly.vue_vue_type_script_lang-3cf31693.js";const R=o();const W={class:"columns"},Z={class:"column"},Q={class:"is-size-5 has-text-weight-medium"},X={class:"column"},tt={class:"is-size-5 has-text-weight-medium"},at={class:"columns"},et={class:"column"},lt={class:"table"},nt=["onSubmit"],ot={class:"is-size-5 has-text-weight-medium"},it=v("br",null,null,-1),st={class:"help has-text-danger"},rt=v("br",null,null,-1),dt={class:"table is-fullwidth"},ut={class:"help has-text-danger"},_t={class:"help has-text-danger"},mt={class:"help has-text-danger"},pt={class:"help has-text-danger"},ct=i({__name:"BloodSamplingFormModal",props:{isOpen:{type:Boolean,default:!1},patient:null},emits:["update:isOpen","update:list"],setup(o,{emit:i}){const f=o,V=s(new Date,"YYYY-MM-DD"),$=r(),{t:j}=d(),x=u(j("Sampling_data_entry_form")),w=u(!1),k=_({date:V,hemotransmissible_date:V,chemical_date:V,buck_laboratory_date:V,immunological_laboratory_date:V}),D=_({date:[],hemotransmissible_date:[],chemical_date:[],buck_laboratory_date:[],immunological_laboratory_date:[]});async function B(){var t,a,e,l,n,o;try{w.value=!0,await async function(t,a){try{const{data:e}=await R({url:`/visit-cards/${t}/blood-samples`,method:"POST",data:a});return e}catch(e){throw e}}(null==(a=null==(t=f.patient)?void 0:t.last_visit)?void 0:a.id,k),i("update:list"),O()}catch(s){(null==(e=s.response)?void 0:e.data.error)?$.error(null==(l=s.response)?void 0:l.data.error):Object.assign(D,null==(o=null==(n=s.response)?void 0:n.data)?void 0:o.errors)}finally{w.value=!1}}function O(){Object.assign(k,{date:V,hemotransmissible_date:V,chemical_date:V,buck_laboratory_date:V,immunological_laboratory_date:V}),Object.assign(D,{date:[],hemotransmissible_date:[],chemical_date:[],buck_laboratory_date:[],immunological_laboratory_date:[]}),i("update:isOpen",!1)}return(i,s)=>{const r=n,d=l,u=e,_=a,f=t;return m(),p(f,{open:o.isOpen,size:"big",title:x.value,actions:"right",onClose:O},{content:c((()=>{var t,a,e,l,n,_,m,p;return[v("div",W,[v("div",Z,[v("h5",Q,b(i.$t("Donor_information"))+" # "+b(o.patient.id),1)]),v("div",X,[v("h5",tt,b(i.$t("Visit_date"))+": "+b(null==(t=o.patient.last_visit)?void 0:t.created_at),1)])]),v("div",at,[v("div",et,[v("table",lt,[v("tbody",null,[v("tr",null,[v("th",null,b(i.$t("Last_name")),1),v("td",null,b(o.patient.last_name),1)]),v("tr",null,[v("th",null,b(i.$t("First_name")),1),v("td",null,b(o.patient.first_name),1)]),v("tr",null,[v("th",null,b(i.$t("Middlename")),1),v("td",null,b(o.patient.father_name),1)]),v("tr",null,[v("th",null,b(i.$t("Date-of-birth")),1),v("td",null,b(o.patient.birth_date),1)]),v("tr",null,[v("th",null,b(i.$t("Gender")),1),v("td",null,b(o.patient.gender&&i.$t(o.patient.gender)),1)]),v("tr",null,[v("th",null,b(i.$t("Visit_type")),1),v("td",null,b((null==(a=o.patient.last_visit)?void 0:a.visit_type)&&i.$t(null==(e=o.patient.last_visit)?void 0:e.visit_type)),1)]),v("tr",null,[v("th",null,b(i.$t("Donation_type")),1),v("td",null,b((null==(n=null==(l=o.patient.last_visit)?void 0:l.donation_type)?void 0:n.name)&&i.$t(null==(m=null==(_=o.patient.last_visit)?void 0:_.donation_type)?void 0:m.name)),1)]),v("tr",null,[v("th",null,b(i.$t("Donor_category")),1),v("td",null,b(null==(p=o.patient.category)?void 0:p.name),1)]),v("tr",null,[v("th",null,b(i.$t("Passport_series_number")),1),v("td",null,b(o.patient.passport_series)+b(o.patient.passport_number)+", "+b(o.patient.issued_by)+", "+b(o.patient.when_issued),1)])])])])]),v("form",{id:"blood-sampling-form",class:"modal-form",onSubmit:g(B,["prevent"])},[v("h5",ot,b(i.$t("Information_about_blood_sampling")),1),it,y(u,{"column-gap":"1rem","align-items":"center"},{default:c((()=>[y(r,null,{default:c((()=>[h(b(i.$t("Blood_sampling_date")),1)])),_:1}),y(r,null,{default:c((()=>[y(d,{modelValue:k.date,"onUpdate:modelValue":s[0]||(s[0]=t=>k.date=t)},null,8,["modelValue"]),v("p",st,b(D.date[0]),1)])),_:1})])),_:1}),rt,v("table",dt,[v("thead",null,[v("tr",null,[v("th",null,b(i.$t("Blood_sample_transferred_where")),1),v("th",null,b(i.$t("Blood_sample_transferred_when")),1)])]),v("tbody",null,[v("tr",null,[v("td",null,b(i.$t("Bloodborne-infections-laboratory")),1),v("td",null,[y(d,{modelValue:k.hemotransmissible_date,"onUpdate:modelValue":s[1]||(s[1]=t=>k.hemotransmissible_date=t)},null,8,["modelValue"]),v("p",ut,b(D.hemotransmissible_date[0]),1)])]),v("tr",null,[v("td",null,b(i.$t("Clinical-biochemical-laboratory")),1),v("td",null,[y(d,{modelValue:k.chemical_date,"onUpdate:modelValue":s[2]||(s[2]=t=>k.chemical_date=t)},null,8,["modelValue"]),v("p",_t,b(D.chemical_date[0]),1)])]),v("tr",null,[v("td",null,b(i.$t("Buck-laboratory")),1),v("td",null,[y(d,{modelValue:k.buck_laboratory_date,"onUpdate:modelValue":s[3]||(s[3]=t=>k.buck_laboratory_date=t)},null,8,["modelValue"]),v("p",mt,b(D.buck_laboratory_date[0]),1)])]),v("tr",null,[v("td",null,b(i.$t("Immunological-Research-Department")),1),v("td",null,[y(d,{modelValue:k.immunological_laboratory_date,"onUpdate:modelValue":s[4]||(s[4]=t=>k.immunological_laboratory_date=t)},null,8,["modelValue"]),v("p",pt,b(D.immunological_laboratory_date[0]),1)])])])])],40,nt)]})),action:c((()=>[y(_,{loading:w.value,form:"blood-sampling-form"},null,8,["loading"])])),_:1},8,["open","title"])}}}),vt=["onSubmit"],bt={class:"columns"},gt={class:"column is-3"},yt={class:"column is-3"},ht={class:"column is-3"},ft={class:"navigation-buttons"},Vt={class:"buttons is-right"},$t=i({__name:"BloodSamplingFilterForm",props:{isLoading:{type:Boolean}},emits:["search","clearForm"],setup(t,{emit:a}){d(),r();const e=_({visit_type:"",donation_type_id:null,donation_code:""}),l=u([]),n=u(!1);f((async()=>{const t=await E();l.value=t.result})),V(e,(t=>{t&&(n.value=Object.values(t).some((t=>!!t)))}),{deep:!0});const o=async()=>{a("search",e)},i=async()=>{Object.assign(e,{visit_type:"",donation_type_id:null,donation_code:""}),a("clearForm")};return(a,s)=>{const r=$("Multiselect"),d=A,u=N,_=Y,f=T,V=L,x=I;return m(),p(x,null,{default:c((()=>[v("form",{onSubmit:g(o,["prevent"])},[v("div",bt,[v("div",gt,[y(u,{class:"is-curved-select",label:a.$t("Visit_type")},{default:c((({id:t})=>[y(d,null,{default:c((()=>[y(r,{modelValue:j(e).visit_type,"onUpdate:modelValue":s[0]||(s[0]=t=>j(e).visit_type=t),attrs:{id:t},options:j(q),placeholder:a.$t("All")},null,8,["modelValue","attrs","options","placeholder"])])),_:2},1024)])),_:1},8,["label"])]),v("div",yt,[y(u,{class:"is-curved-select",label:a.$t("Donation_type")},{default:c((({id:t})=>[y(d,null,{default:c((()=>[y(r,{modelValue:j(e).donation_type_id,"onUpdate:modelValue":s[1]||(s[1]=t=>j(e).donation_type_id=t),attrs:{id:t},options:j(l),placeholder:a.$t("All"),label:"name","value-prop":"id"},null,8,["modelValue","attrs","options","placeholder"])])),_:2},1024)])),_:1},8,["label"])]),v("div",ht,[y(u,{class:"is-curved-select",label:a.$t("Donation_code")},{default:c((({id:t})=>[y(d,null,{default:c((()=>[y(_,{modelValue:j(e).donation_code,"onUpdate:modelValue":s[2]||(s[2]=t=>j(e).donation_code=t),attrs:{id:t},placeholder:a.$t("Donation_code")},null,8,["modelValue","attrs","placeholder"])])),_:2},1024)])),_:1},8,["label"])])]),v("div",ft,[v("div",Vt,[y(f,{disabled:t.isLoading||!j(n),onClear:i},null,8,["disabled"]),y(V,{type:"submit",color:"primary",bold:"",loading:t.isLoading,tabindex:"0"},{default:c((()=>[h(b(a.$t("Search")),1)])),_:1},8,["loading"])])])],40,vt)])),_:1})}}}),jt={class:"page-content-inner"},xt={class:"columns mb-3"},wt={class:"column"},kt={class:"columns mt-1"},Dt={class:"column"},Bt={class:"columns"},Ot={class:"column is-12"},Ct={key:0,class:"is-flex-grow-0",textContent:"#"},Ft={key:0,class:"flex-list-inner"},Ut=["onClick"],St=K(i({__name:"index",setup(t){x(),r();const{t:a}=d(),e=H(),l=u(!1);J().setPageTitle(a("Blood_sampling")),w({title:`${a("Donor_list_for_blood_sampling")} - ${e.app.name}`});const n=_({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),o={orderNumber:{format:(t,a,e)=>`${e+1}`,cellClass:"is-flex-grow-0"},name:{label:a("Fullname")},birth_date:{label:a("Date-of-birth")},visit_date:{label:a("Visit_date"),format:(t,a)=>{var e;return null==(e=a.last_visit)?void 0:e.created_at}},visit_type:{label:a("Visit_type"),format:(t,e)=>{var l,n;return(null==(l=e.last_visit)?void 0:l.visit_type)&&a(null==(n=e.last_visit)?void 0:n.visit_type)}},donation_type:{label:a("Donation_type"),format:(t,a)=>{var e;return null==(e=a.last_visit)?void 0:e.personalized_donation}},donation_number:{label:a("Donation_number"),format:(t,a)=>{var e;return null==(e=a.last_visit)?void 0:e.personalized_donation}}},i=_({visit_type:[],donation_type_id:[],donation_code:[]}),s=_({page:1}),g=_({}),h=u(!1);async function f(t){var a,e;try{Object.assign(s,t),l.value=!0;const a=await async function(t){try{const{data:a}=await R({url:"/patients/blood-samples",params:t});return a}catch(a){throw a}}(t);Object.assign(n,a.result)}catch(o){Object.assign(i,null==(e=null==(a=o.response)?void 0:a.data)?void 0:e.errors)}finally{l.value=!1}}async function $(){await f(s)}return V((()=>n.pagination.current_page),(async t=>{t&&(s.page=t,await f(s))}),{immediate:!0}),(t,a)=>{const i=G,r=$t,d=z,u=F,_=P,V=U,x=M,w=S,I=ct;return m(),k("div",jt,[v("div",xt,[v("div",wt,[y(i,{"with-icons":"",separator:"bullet",items:[{label:j(e).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:t.$t("Blood_sampling")},{label:t.$t("Donor_list_for_blood_sampling")}]},null,8,["items"])])]),v("div",kt,[v("div",Dt,[y(r,{"is-loading":j(l),onSearch:f,onClearForm:$},null,8,["is-loading"])])]),v("div",Bt,[v("div",Ot,[y(w,{columns:j(o),data:j(n).data,limit:j(n).pagination.per_page,total:j(n).pagination.total},{default:c((()=>[y(V,{rounded:"","no-header":!j(l)&&0===j(n).data.length},{"header-column":c((({column:t})=>["orderNumber"===t.key?(m(),k("span",Ct)):D("",!0)])),body:c((()=>[j(l)?(m(),k("div",Ft,[(m(!0),k(B,null,O(j(n).pagination.per_page,(t=>(m(),k("div",{key:t,class:"flex-table-item"},[y(u,null,{default:c((()=>[y(d,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):D("",!0),0===j(n).data.length?(m(),p(_,{key:1})):D("",!0)])),"body-cell":c((({row:t,column:a})=>["name"===a.key?(m(),k("a",{key:0,href:"javascript:;",class:"has-text-primary",onClick:a=>{return e=t,Object.assign(g,e),void(h.value=!0);var e}},b(t.first_name)+" "+b(t.last_name)+" "+b(t.father_name)+" ",9,Ut)):D("",!0)])),_:1},8,["no-header"]),j(n).data.length?(m(),p(x,{key:0,"current-page":j(n).pagination.current_page,"onUpdate:current-page":a[0]||(a[0]=t=>j(n).pagination.current_page=t),class:"mt-5","item-per-page":j(n).pagination.per_page,"total-items":j(n).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):D("",!0)])),_:1},8,["columns","data","limit","total"])])]),y(I,{"is-open":j(h),"onUpdate:is-open":a[1]||(a[1]=t=>C(h)?h.value=t:null),patient:j(g),"onUpdate:list":a[2]||(a[2]=t=>f(j(s)))},null,8,["is-open","patient"])])}}}),[["__scopeId","data-v-fd2da2e0"]]);export{St as default};