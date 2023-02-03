import{f as a,s as e,a as t,_ as l,b as s}from"./FilterForm.vue_vue_type_script_setup_true_lang-e92ad149.js";import{_ as i}from"./VModal.vue_vue_type_style_index_0_lang-ac88dda5.js";import{_ as n}from"./SubmitButton.vue_vue_type_script_setup_true_lang-96021f2c.js";import{b as o,_ as d,a as r}from"./VControl-e7b2630d.js";import{_ as u}from"./VInput.vue_vue_type_script_setup_true_lang-9c010bca.js";import{_}from"./VFlex.vue_vue_type_style_index_0_lang-57370b27.js";import{_ as p}from"./DatePicker.vue_vue_type_script_setup_true_lang-8beaf1b4.js";import{_ as c}from"./VFlexItem.vue_vue_type_style_index_0_lang-a32e2ae4.js";import{q as m,H as v,C as y,x as h,r as g,a7 as b,y as f,o as x,a as V,w as j,e as k,t as w,k as $,$ as z,ae as C,d as D,g as U,i as O,L as B,M as F,E as q,J as H,K as T,F as Y,l as M,U as A}from"./index-21286bdb.js";import{_ as I}from"./_plugin-vue_export-helper-1b428a4d.js";import{_ as R,a as S,b as L}from"./VFlexTable.vue_vue_type_style_index_0_lang-03a54f1c.js";import{_ as N,a as W,b as E,c as P,d as J}from"./search-7-dark-81286176.js";import{_ as K}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-69f615bd.js";import{u as Z}from"./main-16751c88.js";import{u as G}from"./viewWrapper-6ae5f61c.js";import"./VTextarea.vue_vue_type_script_setup_true_lang-736b6c44.js";import"./VCheckbox.vue_vue_type_style_index_0_lang-d46d394c.js";import"./VRadio.vue_vue_type_style_index_0_lang-136dcf40.js";import"./moment-b3d9eb32.js";import"./VCard.vue_vue_type_script_setup_true_lang-1043f916.js";import"./ClearButton.vue_vue_type_script_setup_true_lang-7aff0300.js";import"./VButton.vue_vue_type_style_index_0_lang-b78df6f3.js";import"./additional-f442439b.js";import"./ClientOnly.vue_vue_type_script_lang-52200b90.js";const Q=a=>(B("data-v-353fd300"),a=a(),F(),a),X={class:"columns"},aa={class:"column"},ea={class:"is-size-5 has-text-weight-medium"},ta={class:"box"},la={class:"mr-3 is-size-6"},sa={class:"has-text-weight-bold"},ia=Q((()=>k("br",null,null,-1))),na={class:"table-container"},oa={class:"table box is-fullwidth"},da={for:"hbsag"},ra=["disabled"],ua={class:"ml-2"},_a={key:0,class:"has-text-danger ml-2"},pa={for:"hiv"},ca=["disabled"],ma={class:"ml-2"},va={key:0,class:"has-text-danger ml-2"},ya={for:"antihcv"},ha=["disabled"],ga={class:"ml-2"},ba={key:0,class:"has-text-danger ml-2"},fa={for:"rw"},xa=["disabled"],Va={class:"ml-2"},ja={key:0,class:"has-text-danger ml-2"},ka={for:"hemolysis"},wa={class:"ml-2"},$a={for:"chilez"},za={class:"ml-2"},Ca=Q((()=>k("p",{class:"has-text-danger"}," Красным цветом указаны показатели, заданные врачом-терапевтом, как обязательные для определения ",-1))),Da=I(m({__name:"ResearchAimedFormModal",props:{isOpen:{type:Boolean,default:!1},patient:null},emits:["update:isOpen","update:list"],setup(t,{emit:l}){const s=t,m=v(),{t:B}=y(),F=h(B("Hemotransmission_research_results")),q=h(!1),H=g({date_analysis:[]}),T=g({data:{date_analysis:b(new Date,"YYYY-MM-DD"),hbsag:!1,hbsag_test_system:"",hiv:!1,hiv_test_system:"",antihcv:!1,antihcv_test_system:"",rw:!1,rw_test_system:"",hemolysis:!1,chilez:!1},required_fields:[]}),Y=h(!1);async function M(){var a,t,i,n,o,d;try{q.value=!0,await e(null==(t=null==(a=s.patient)?void 0:a.last_visit)?void 0:t.id,T.data),m.success(B("Data_saved_successfully")),l("update:list"),A()}catch(r){(null==(i=r.response)?void 0:i.data.error)?m.error(null==(n=r.response)?void 0:n.data.error):Object.assign(H,null==(d=null==(o=r.response)?void 0:o.data)?void 0:d.errors)}finally{q.value=!1}}function A(){T.data={date_analysis:b(new Date,"YYYY-MM-DD"),hbsag:!1,hbsag_test_system:"",hiv:!1,hiv_test_system:"",antihcv:!1,antihcv_test_system:"",rw:!1,rw_test_system:"",hemolysis:!1,chilez:!1},Object.assign(H,{date_analysis:[]}),l("update:isOpen",!1)}return f((()=>{var a,e;return null==(e=null==(a=s.patient)?void 0:a.last_visit)?void 0:e.id}),(async e=>{if(e){const t=await a(e);Object.assign(T,t.result)}})),f([()=>T.data.hemolysis,()=>T.data.chilez],(async a=>{a.includes(!0)?(T.data.hbsag=!1,T.data.hiv=!1,T.data.antihcv=!1,T.data.rw=!1,Y.value=!0):Y.value=!1})),(a,e)=>{const l=c,s=p,m=_,v=o,y=u,h=d,g=r,b=n,f=i;return x(),V(f,{ref:"hemotransmissionLaboratoryForm",open:t.isOpen,size:"big",title:F.value,actions:"right",onClose:A},{content:j((()=>{var i,n;return[k("div",X,[k("div",aa,[k("h5",ea,w(a.$t("Donation_code"))+": "+w(null==(n=null==(i=t.patient)?void 0:i.last_visit)?void 0:n.donation_code),1)])]),k("div",ta,[$(m,{"flex-wrap":"wrap","row-gap":"2rem","justify-content":"space-between"},{default:j((()=>[$(l,{"flex-basis":"45%"},{default:j((()=>{var e,l,s;return[k("span",null,w(a.$t("Blood_sampling_date"))+": ",1),k("span",null,w(null==(s=null==(l=null==(e=t.patient)?void 0:e.last_visit)?void 0:l.blood_sample)?void 0:s.date),1)]})),_:1}),$(l,{"flex-basis":"45%"},{default:j((()=>{var e,l,s;return[k("span",null,w(a.$t("Blood_samples_taken_date"))+": ",1),k("span",null,w(null==(s=null==(l=null==(e=t.patient)?void 0:e.last_visit)?void 0:l.blood_sample)?void 0:s.hemotransmissible_date),1)]})),_:1}),$(l,{"flex-basis":"45%"},{default:j((()=>[k("span",la,w(a.$t("Analysis_date"))+": ",1),$(s,{modelValue:T.data.date_analysis,"onUpdate:modelValue":e[0]||(e[0]=a=>T.data.date_analysis=a)},null,8,["modelValue"])])),_:1}),$(l,{"flex-basis":"45%",class:"is-flex is-align-items-center"},{default:j((()=>{var e,l;return[k("h5",null,[k("span",sa,w(a.$t("Visit_stage")),1),k("span",null,w(null==(l=null==(e=t.patient)?void 0:e.last_visit)?void 0:l.stage),1)])]})),_:1})])),_:1})]),ia,k("div",na,[k("table",oa,[k("tbody",null,[k("tr",null,[k("td",null,[k("label",da,[z(k("input",{id:"hbsag","onUpdate:modelValue":e[1]||(e[1]=a=>T.data.hbsag=a),class:"checkbox",type:"checkbox",disabled:Y.value},null,8,ra),[[C,T.data.hbsag]]),k("span",ua,w(a.$t("HBsAg")),1),T.required_fields.includes("hbsag")?(x(),D("span",_a,"*")):U("",!0)])]),k("td",null,[$(g,{horizontal:"",class:"is-justify-content-end"},{default:j((()=>[$(v,{class:"is-size-6 my-auto mr-3"},{default:j((()=>[O(w(a.$t("Testing_system"))+" ("+w(a.$t("HBsAg"))+")",1)])),_:1}),$(h,null,{default:j((()=>[$(y,{modelValue:T.data.hbsag_test_system,"onUpdate:modelValue":e[2]||(e[2]=a=>T.data.hbsag_test_system=a)},null,8,["modelValue"])])),_:1})])),_:1})])]),k("tr",null,[k("td",null,[k("label",pa,[z(k("input",{id:"hiv","onUpdate:modelValue":e[3]||(e[3]=a=>T.data.hiv=a),class:"checkbox",type:"checkbox",disabled:Y.value},null,8,ca),[[C,T.data.hiv]]),k("span",ma,w(a.$t("OIDS")),1),T.required_fields.includes("hiv")?(x(),D("span",va,"*")):U("",!0)])]),k("td",null,[$(g,{horizontal:"",class:"is-justify-content-end"},{default:j((()=>[$(v,{class:"is-size-6 my-auto mr-3"},{default:j((()=>[O(w(a.$t("Testing_system"))+" ("+w(a.$t("OIDS"))+")",1)])),_:1}),$(h,null,{default:j((()=>[$(y,{modelValue:T.data.hiv_test_system,"onUpdate:modelValue":e[4]||(e[4]=a=>T.data.hiv_test_system=a)},null,8,["modelValue"])])),_:1})])),_:1})])]),k("tr",null,[k("td",null,[k("label",ya,[z(k("input",{id:"antihcv","onUpdate:modelValue":e[5]||(e[5]=a=>T.data.antihcv=a),class:"checkbox",type:"checkbox",disabled:Y.value},null,8,ha),[[C,T.data.antihcv]]),k("span",ga,w(a.$t("AntiHCV")),1),T.required_fields.includes("antihcv")?(x(),D("span",ba,"*")):U("",!0)])]),k("td",null,[$(g,{horizontal:"",class:"is-justify-content-end"},{default:j((()=>[$(v,{class:"is-size-6 my-auto mr-3"},{default:j((()=>[O(w(a.$t("Testing_system"))+" ("+w(a.$t("AntiHCV"))+")",1)])),_:1}),$(h,null,{default:j((()=>[$(y,{modelValue:T.data.antihcv_test_system,"onUpdate:modelValue":e[6]||(e[6]=a=>T.data.antihcv_test_system=a)},null,8,["modelValue"])])),_:1})])),_:1})])]),k("tr",null,[k("td",null,[k("label",fa,[z(k("input",{id:"rw","onUpdate:modelValue":e[7]||(e[7]=a=>T.data.rw=a),class:"checkbox",type:"checkbox",disabled:Y.value},null,8,xa),[[C,T.data.rw]]),k("span",Va,w(a.$t("RW")),1),T.required_fields.includes("rw")?(x(),D("span",ja,"*")):U("",!0)])]),k("td",null,[$(g,{horizontal:"",class:"is-justify-content-end"},{default:j((()=>[$(v,{class:"is-size-6 my-auto mr-3"},{default:j((()=>[O(w(a.$t("Testing_system"))+" ("+w(a.$t("RW"))+")",1)])),_:1}),$(h,null,{default:j((()=>[$(y,{modelValue:T.data.rw_test_system,"onUpdate:modelValue":e[8]||(e[8]=a=>T.data.rw_test_system=a)},null,8,["modelValue"])])),_:1})])),_:1})])]),k("tr",null,[k("td",null,[k("label",ka,[z(k("input",{id:"hemolysis","onUpdate:modelValue":e[9]||(e[9]=a=>T.data.hemolysis=a),class:"checkbox",type:"checkbox"},null,512),[[C,T.data.hemolysis]]),k("span",wa,w(a.$t("Hemolis")),1)])])]),k("tr",null,[k("td",null,[k("label",$a,[z(k("input",{id:"chilez","onUpdate:modelValue":e[10]||(e[10]=a=>T.data.chilez=a),class:"checkbox",type:"checkbox"},null,512),[[C,T.data.chilez]]),k("span",za,w(a.$t("Hiles")),1)])])])])]),Ca])]})),action:j((()=>[$(b,{loading:q.value,onClick:M},null,8,["loading"])])),_:1},8,["open","title"])}}}),[["__scopeId","data-v-353fd300"]]),Ua=a=>(B("data-v-f0b95682"),a=a(),F(),a),Oa={class:"page-content-inner"},Ba={class:"columns mb-3"},Fa={class:"column"},qa={class:"columns mt-1"},Ha={class:"column"},Ta={class:"columns"},Ya={class:"column is-12"},Ma={key:0,class:"is-flex-grow-0",textContent:"#"},Aa={key:0,class:"flex-list-inner"},Ia={key:1,class:"flex-list-inner"},Ra=Ua((()=>k("img",{class:"light-image",src:P,alt:""},null,-1))),Sa=Ua((()=>k("img",{class:"dark-image",src:J,alt:""},null,-1))),La=["onClick"],Na=I(m({__name:"index",setup(a){q(),v();const{t:e}=y(),i=Z(),n=h(!1);G().setPageTitle(e("Bloodborne-infections-laboratory")),H({title:`${e("Research-aimed-donations-list")} - ${i.app.name}`});const o=g({data:[],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),d={orderNumber:{format:(a,e,t)=>`${t+1}`,cellClass:"is-flex-grow-0"},donation_code:{label:e("Donation_code"),format:(a,e)=>{var t;return null==(t=e.last_visit)?void 0:t.donation_code}},blood_sampling_date:{label:e("Blood_sampling_date"),format:(a,e)=>{var t,l;return null==(l=null==(t=e.last_visit)?void 0:t.blood_sample)?void 0:l.date}},name:{label:e("Donor_fullname")},birth_date:{label:e("Date-of-birth")},visit_type:{label:e("Visit_type"),format:(a,t)=>{var l,s;return(null==(l=t.last_visit)?void 0:l.visit_type)&&e(null==(s=t.last_visit)?void 0:s.visit_type)}},visit_date:{label:e("Visit_date"),format:(a,e)=>{var t;return null==(t=e.last_visit)?void 0:t.created_at}},donation_type:{label:e("Donation_type"),format:(a,e)=>{var t,l;return null==(l=null==(t=e.last_visit)?void 0:t.donation_type)?void 0:l.name}},visit_stage:{label:e("Visit_stage"),format:(a,e)=>{var t,l;return null==(l=null==(t=e.last_visit)?void 0:t.stage)?void 0:l.name}}},r=g({visit_type_id:[],donation_type_id:[],donation_code:[]}),u=g({visit_type_id:"",donation_type_id:null,donation_code:""}),_=h(null),p=h(!1),c=h(!1);async function m(a){var e,l;try{n.value=!0,Object.assign(u,a);const e={...a,page:o.pagination.current_page},l=await t(e);Object.assign(o,l.result)}catch(s){Object.assign(r,null==(l=null==(e=s.response)?void 0:e.data)?void 0:l.errors)}finally{n.value=!1}}function b(a){r[a]=""}async function z(){o.data=[]}function C(){_.value=null}return f((()=>o.pagination.current_page),(async a=>{a&&await m(u)}),{immediate:!0}),(a,e)=>{const t=K,u=N,v=R,y=W,h=S,g=E,f=L,O=Da,B=s;return x(),D("div",Oa,[k("div",Ba,[k("div",Fa,[$(t,{"with-icons":"",separator:"bullet",items:[{label:T(i).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:a.$t("Bloodborne-infections-laboratory")},{label:a.$t("Research-aimed-donations-list")}]},null,8,["items"])])]),k("div",qa,[k("div",Ha,[$(l,{"is-loading":T(n),errors:T(r),onSearch:m,onClearForm:z,onClearError:b},null,8,["is-loading","errors"])])]),k("div",Ta,[k("div",Ya,[$(f,{columns:T(d),data:T(o).data,limit:T(o).pagination.per_page,total:T(o).pagination.total},{default:j((()=>[$(h,{rounded:"","no-header":!T(n)&&0===T(o).data.length},{"header-column":j((({column:a})=>["orderNumber"===a.key?(x(),D("span",Ma)):U("",!0)])),body:j((()=>[T(n)?(x(),D("div",Aa,[(x(!0),D(Y,null,M(T(o).pagination.per_page,(a=>(x(),D("div",{key:a,class:"flex-table-item"},[$(v,null,{default:j((()=>[$(u,{lines:2,"last-line-width":"70%",class:"mx-2"})])),_:1})])))),128))])):U("",!0),0===T(o).data.length?(x(),D("div",Ia,[$(y,{title:a.$t("No_data"),subtitle:a.$t("There_is_no_data_that_match_your_query"),class:"my-6"},{image:j((()=>[Ra,Sa])),_:1},8,["title","subtitle"])])):U("",!0)])),"body-cell":j((({row:a,column:e})=>["name"===e.key?(x(),D("a",{key:0,href:"javascript:;",class:"has-text-primary",onClick:e=>{return t=a,_.value=t,void(p.value=!0);var t}},w(a.first_name)+" "+w(a.last_name)+" "+w(a.father_name)+" ",9,La)):U("",!0)])),_:1},8,["no-header"]),T(o).data.length?(x(),V(g,{key:0,"current-page":T(o).pagination.current_page,"onUpdate:current-page":e[0]||(e[0]=a=>T(o).pagination.current_page=a),class:"mt-5","item-per-page":T(o).pagination.per_page,"total-items":T(o).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):U("",!0)])),_:1},8,["columns","data","limit","total"])])]),$(O,{"is-open":T(p),"onUpdate:is-open":e[1]||(e[1]=a=>A(p)?p.value=a:null),patient:T(_),onClose:C},null,8,["is-open","patient"]),$(B,{"is-open":T(c),"onUpdate:is-open":e[2]||(e[2]=a=>A(c)?c.value=a:null),patient:T(_)},null,8,["is-open","patient"])])}}}),[["__scopeId","data-v-f0b95682"]]);export{Na as default};
