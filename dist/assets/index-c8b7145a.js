import{_ as t}from"./VModal.vue_vue_type_style_index_0_lang-63c92034.js";import{_ as e}from"./SubmitButton.vue_vue_type_script_setup_true_lang-92907858.js";import{_ as a}from"./IMaskDateInput.vue_vue_type_script_setup_true_lang-15a72943.js";import{_ as l,a as n}from"./VControl-6b9015e2.js";import{_ as o}from"./VRadio.vue_vue_type_style_index_0_lang-a8293ccd.js";import{q as s,H as i,C as u,x as _,r,a7 as p,o as d,a as c,w as m,e as y,t as g,k as v,E as f,J as h,y as b,d as j,K as $,F as V,l as k,g as q,S as x,L as w,M as D}from"./index-ef344eb7.js";import{_ as C}from"./_plugin-vue_export-helper-1b428a4d.js";import{_ as M}from"./VCard.vue_vue_type_script_setup_true_lang-f1c0af22.js";import{a as Y,_ as O,b as I,c as U,d as Q}from"./search-7-dark-2f8f64c6.js";import{_ as B}from"./VBreadcrumb.vue_vue_type_style_index_0_lang-5d57fce7.js";import{u as R}from"./main-11940342.js";import{u as S}from"./viewWrapper-ee1c88fe.js";import"./VButton.vue_vue_type_style_index_0_lang-114b0359.js";import"./VPlaceload-5927026b.js";import"./VIMaskInput.vue_vue_type_script_lang-d2dfdd0b.js";import"./moment-0998b240.js";import"./VFlex.vue_vue_type_style_index_0_lang-8060459e.js";const F={class:"table-container"},L={class:"table is-fullwidth"},N=C(s({__name:"QualityCheckFormModal",props:{isOpen:{type:Boolean,default:!1},component:null},emits:["update:isOpen","update:list"],setup(s,{emit:f}){i();const{t:h}=u(),b=_(h("Quality_check_result")),j=_(!1),$=r({component_quality:"satisfactory",result_date:p(new Date,"YYYY-MM-DD")}),V=r({component_quality:[],result_date:[]});function k(){Object.assign($,{component_quality:"satisfactory",result_date:p(new Date,"YYYY-MM-DD")}),Object.assign(V,{component_quality:[],result_date:[]}),f("update:isOpen",!1)}return(i,u)=>{const _=o,r=l,p=n,f=a,h=e,V=t;return d(),c(V,{open:s.isOpen,size:"large",title:b.value,actions:"right",onClose:k},{content:m((()=>[y("div",F,[y("table",L,[y("tbody",null,[y("tr",null,[y("th",null,g(i.$t("Donation_code")),1),y("td",null,g(s.component.donation_code),1)]),y("tr",null,[y("th",null,g(i.$t("Donation_date")),1),y("td",null,g(s.component.donation_date),1)]),y("tr",null,[y("th",null,g(i.$t("Component_name")),1),y("td",null,g(s.component.component_name),1)]),y("tr",null,[y("th",null,g(i.$t("Component_quality")),1),y("td",null,[v(p,null,{default:m((()=>[v(r,null,{default:m((()=>[v(_,{modelValue:$.component_quality,"onUpdate:modelValue":u[0]||(u[0]=t=>$.component_quality=t),value:"satisfactory",color:"primary",label:i.$t("Satisfactory")},null,8,["modelValue","label"]),v(_,{modelValue:$.component_quality,"onUpdate:modelValue":u[1]||(u[1]=t=>$.component_quality=t),value:"not_satisfactory",color:"primary",label:i.$t("Not_satisfactory")},null,8,["modelValue","label"])])),_:1})])),_:1})])]),y("tr",null,[y("th",null,g(i.$t("Result_date")),1),y("td",null,[v(p,null,{default:m((()=>[v(r,null,{default:m((()=>[v(f,{modelValue:$.result_date,"onUpdate:modelValue":u[2]||(u[2]=t=>$.result_date=t),style:{width:"50%"}},null,8,["modelValue"])])),_:1})])),_:1})])])])])])])),action:m((()=>[v(h,{loading:j.value,type:"button"},null,8,["loading"])])),_:1},8,["open","title"])}}}),[["__scopeId","data-v-f8274547"]]),P=t=>(w("data-v-76ae2379"),t=t(),D(),t),T={class:"page-content-inner"},z={class:"columns mb-5"},E={class:"column is-narrow"},H={class:"columns"},J={class:"column"},K={class:"table-container"},W={key:0,class:"flex-list-inner"},X=P((()=>y("img",{class:"light-image",src:U,alt:""},null,-1))),A=P((()=>y("img",{class:"dark-image",src:Q,alt:""},null,-1))),G={key:1,class:"table is-hoverable is-fullwidth"},Z={colspan:"5"},tt=["onClick"],et=C(s({__name:"index",setup(t){f();const e=i(),{t:a}=u(),l=R(),n=_(!1),o=S();_(null),o.setPageTitle(a("Quality-control")),h({title:`${a("Received_components_list")} - ${l.app.name}`});const s=r({data:[{id:11,donation_date:"10.12.2022",donation_code:"130100123400",dose:"0",quantity:"300",component_name:"Эритроцитная масса"}],pagination:{total:10,count:10,per_page:10,current_page:1,total_pages:1}}),p=r({}),w=_(!1);async function D(){try{n.value=!0}catch(t){e.error(a("Something_went_wrong"))}finally{n.value=!1}}return b(w,(function(t){!1===t&&Object.assign(p,{})})),(t,e)=>{const a=B,o=Y,i=O,u=I,_=M,r=N;return d(),j("div",T,[y("div",z,[y("div",E,[v(a,{"with-icons":"",separator:"bullet",items:[{label:$(l).app.name,hideLabel:!0,icon:"feather:home",to:{name:"/app/dashboard"}},{label:t.$t("Quality-control")},{label:t.$t("Received_components_list")}]},null,8,["items"])])]),y("div",H,[y("div",J,[v(_,null,{default:m((()=>[y("div",K,[0===$(s).data.length?(d(),j("div",W,[v(o,{title:t.$t("No_data"),subtitle:t.$t("There_is_no_data_that_match_your_query"),class:"my-6"},{image:m((()=>[X,A])),_:1},8,["title","subtitle"])])):(d(),j("table",G,[y("thead",null,[y("tr",null,[y("th",null,g(t.$t("Donation_date")),1),y("th",null,g(t.$t("Donation_code")),1),y("th",null,g(t.$t("Dose")),1),y("th",null,g(t.$t("Quantity_ml")),1),y("th",null,g(t.$t("Component_name")),1)])]),y("tbody",null,[$(n)?(d(!0),j(V,{key:0},k($(s).pagination.per_page,(t=>(d(),j("tr",{key:t},[y("td",Z,[v(i,{lines:2,"last-line-width":"70%"})])])))),128)):(d(!0),j(V,{key:1},k($(s).data,((t,e)=>(d(),j("tr",{key:e},[y("td",null,g(t.donation_date),1),y("td",null,[y("a",{href:"javascript:;",class:"has-text-primary",onClick:e=>function(t){Object.assign(p,t),w.value=!0}(t)},g(t.donation_code),9,tt)]),y("td",null,g(t.dose),1),y("td",null,g(t.quantity),1),y("td",null,g(t.component_name),1)])))),128))])]))]),$(s).data.length?(d(),c(u,{key:0,"current-page":$(s).pagination.current_page,"onUpdate:current-page":e[0]||(e[0]=t=>$(s).pagination.current_page=t),class:"mt-5","item-per-page":$(s).pagination.per_page,"total-items":$(s).pagination.total,"no-router":""},null,8,["current-page","item-per-page","total-items"])):q("",!0)])),_:1})])]),v(r,{"is-open":$(w),"onUpdate:is-open":e[1]||(e[1]=t=>x(w)?w.value=t:null),component:$(p),"onUpdate:list":D},null,8,["is-open","component"])])}}}),[["__scopeId","data-v-76ae2379"]]);export{et as default};
