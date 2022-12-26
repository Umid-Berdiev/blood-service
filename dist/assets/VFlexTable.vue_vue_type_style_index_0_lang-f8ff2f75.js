import{a as e,c as l,h as a,b as t,w as o,D as r,r as s,O as n,l as u,m as i,P as c,U as d,C as v,f as p,H as m,M as f,W as y,t as b,x as g,V as k,u as w,y as h,Q as x,q as j,Z as C,X as $}from"./chunk-BGPNDDXN-dcda8805.js";import{r as H}from"./@vueuse_core-098eb702.js";import{b as S,R as T}from"./chunk-DRAQDPQ2-4514f14e.js";const V=e({props:{id:{type:String,required:!0},label:{type:String,default:void 0},modelValue:{type:String,default:void 0},noRouter:{type:Boolean,default:void 0},routerQueryKey:{type:String,default:"sort"}},emits:["update:modelValue"],setup(e,t){const o=S(),r=l((()=>e.modelValue??o.query[e.routerQueryKey]??"")),s=l((()=>r.value===`${e.id}:asc`)),n=l((()=>r.value===`${e.id}:desc`)),u=l((()=>s.value?`${e.id}:desc`:n.value?void 0:`${e.id}:asc`)),i=l((()=>{if(e.noRouter)return{};const l={...o.query};return e.routerQueryKey&&(l[e.routerQueryKey]=u.value),{name:o.name,params:o.params,query:l}})),c=l=>{if(t.emit("update:modelValue",u.value),e.noRouter)return l.preventDefault(),l.stopPropagation(),!1};return()=>{var l,o;const d=null==(o=null==(l=t.slots)?void 0:l.default)?void 0:o.call(l,{isDesc:n.value,isAsc:s.value,nextSort:u.value,value:r.value}),v=a(T,{to:i.value,onClick:c,onKeydown(e){"Space"===e.code&&(e.preventDefault(),e.stopPropagation(),e.target instanceof HTMLAnchorElement&&e.target.dispatchEvent(new MouseEvent("click")))}},{default(){const l=a("span",{key:`${r.value}`,class:"is-inline"},a("span",{class:"ml-3 iconify is-inline","data-icon":s.value?"fa:sort-asc":n.value?"fa:sort-desc":"fa:sort"}));return[d??e.label,l]}});return a("span",{},v)}}}),B=Symbol(),R=e=>e,D=({key:e,order:l,a:a,b:t})=>{const o=a[e],r=t[e];return"string"==typeof o?"asc"===l?o.localeCompare(r):r.localeCompare(o):o>r?"asc"===l?1:-1:o<r?"asc"===l?-1:1:0},O=e({props:{data:{type:[Array,Function],default:void 0},columns:{type:Object,default:void 0},sort:{type:String,default:void 0},searchTerm:{type:String,default:void 0},limit:{type:Number,default:void 0},page:{type:Number,default:void 0},total:{type:Number,default:void 0},debounceSearch:{type:Number,default:300}},emits:["update:sort","update:page","update:limit","update:searchTerm"],setup(e,u){const i=t(),c=t(!1),d=t(""),v=l({get:()=>e.sort??d.value,set(l){void 0===e.sort?d.value=l:u.emit("update:sort",l)}}),p=t(""),m=l({get:()=>e.searchTerm??p.value,set(l){void 0===e.searchTerm?p.value=l:u.emit("update:searchTerm",l)}}),f=t(1),y=l({get:()=>e.page??f.value,set(l){void 0===e.page?f.value=l:u.emit("update:page",l)}}),b=t(10),g=l({get:()=>Math.max(1,e.limit??b.value),set(l){void 0===e.limit?b.value=l:u.emit("update:limit",l)}}),k=l((()=>{const l=e.columns;if(!l)return l;const t={};return Object.keys(l).reduce(((e,t)=>{const o=l[t];return"string"==typeof o?e[t]={format:R,label:o,key:t}:"object"==typeof o&&(e[t]={format:R,label:t,key:t,...o},!0===o.sortable&&(o.renderHeader?e[t].renderHeader=()=>a(V,{id:t,noRouter:!0,modelValue:v.value,"onUpdate:modelValue":e=>v.value=e},{default:o.renderHeader}):e[t].renderHeader=()=>a(V,{id:t,label:o.label??t,noRouter:!0,modelValue:v.value,"onUpdate:modelValue":e=>v.value=e})),!0!==o.searchable||o.sort||(e[t].sort=D)),e}),t),t})),w=l((()=>{let l=i.value;if(!l)return l;if("function"==typeof e.data)return l;if(j.value){const e=k.value?Object.values(k.value).filter((e=>!(!e||"string"==typeof e)&&!0===e.searchable)):[];if(e.length){const a=new RegExp(j.value,"i");l=l.filter(((l,t)=>e.some((e=>{if(!e.key)return!1;const o=l[e.key];return e.filter?e.filter({searchTerm:j.value,value:o,row:l,column:e,index:t}):"string"==typeof o&&o.match(a)}))))}}return l})),h=l((()=>{let l=w.value;if(!l)return l;if("function"==typeof e.data)return l;if(v.value&&v.value.includes(":")){const[e,a]=v.value.split(":"),t=k.value?Object.values(k.value).find((l=>!(!l||"string"==typeof l)&&(!0===l.sortable&&l.key===e))):null;if(t){const e=[...l];e.sort(((e,l)=>t.key&&t.sort?t.sort({order:a,column:t,key:t.key,a:e,b:l}):0)),l=e}}return l})),x=l((()=>{if("function"==typeof e.data)return i.value;if(!i.value)return i.value;let l=h.value;return null==l?void 0:l.slice($.value,$.value+g.value)})),j=H(m,e.debounceSearch),C=l((()=>{var l;return e.total??(null==(l=h.value)?void 0:l.length)??0})),$=l((()=>(y.value-1)*g.value)),S=l((()=>C.value?Math.ceil(C.value/g.value):0));async function T(l){if("function"==typeof e.data){c.value=!0;try{i.value=await e.data({searchTerm:j.value,start:$.value,limit:g.value,sort:v.value,controller:l})}finally{c.value=!1}}}o([j,g],(()=>{1!==y.value&&(y.value=1)})),r((async l=>{let a;"function"==typeof e.data?(a=new AbortController,await T(a)):i.value=e.data,l((()=>{null==a||a.abort()}))}));const O=s({data:x,columns:k,loading:c,searchInput:m,searchTerm:j,start:$,page:y,limit:g,sort:v,total:C,totalPages:S,fetchData:T});return n(B,O),u.expose(O),()=>{var e,l;const t=null==(l=(e=u.slots).default)?void 0:l.call(e,O);return a("div",{class:"flex-table-wrapper"},t)}}}),K=["data-th"],Q=e({__name:"VFlexTableCell",props:{column:{default:()=>({})}},setup(e){const l=e;return(e,a)=>(u(),i("div",{class:d(["flex-table-cell is-relative",[l.column.bold&&"is-bold",l.column.media&&"is-media",!0===l.column.grow&&"is-grow","lg"===l.column.grow&&"is-grow-lg","xl"===l.column.grow&&"is-grow-xl",l.column.scrollX&&!l.column.scrollY&&"has-slimscroll-x",!l.column.scrollX&&l.column.scrollY&&"has-slimscroll",l.column.scrollX&&l.column.scrollY&&"has-slimscroll-all","end"===l.column.align&&"cell-end","center"===l.column.align&&"cell-center",l.column.cellClass]]),"data-th":l.column.label||void 0},[c(e.$slots,"default")],10,K))}}),_={key:0,class:"flex-table-header"},N=["tabindex","onKeydown","onClick"],P={key:0},q={class:"language-json py-4"},A=e({__name:"VFlexTable",props:{data:{default:()=>[]},columns:{default:void 0},printObjects:{type:Boolean},reactive:{type:Boolean},compact:{type:Boolean},rounded:{type:Boolean},separators:{type:Boolean},clickable:{type:Boolean},subtable:{type:Boolean},noHeader:{type:Boolean}},emits:["rowClick"],setup(e,{emit:a}){const t=e,o=v(B,null),r=l((()=>(null==o?void 0:o.data)?o.data:t.reactive?p(t.data)?t.data:s(t.data):m(t.data))),n=e=>e,H=l((()=>{const e=(null==o?void 0:o.columns)??t.columns;let l=[];if(e)for(const[a,t]of Object.entries(e))"string"==typeof t?l.push({format:n,label:t,key:a}):l.push({format:n,label:a,key:a,...t});else if(r.value.length>0)for(const[a]of Object.entries(r.value[0]))l.push({format:n,label:a,key:a});return l}));return(l,o)=>{const s=Q;return u(),i("div",{class:d(["flex-table",[t.compact&&"is-compact",t.rounded&&"is-rounded",t.separators&&"with-separators",t.noHeader&&"no-header",t.clickable&&"is-table-clickable",t.subtable&&"sub-table"]])},[c(l.$slots,"header",{},(()=>[t.noHeader?h("",!0):(u(),i("div",_,[(u(!0),i(f,null,y(w(H),(e=>c(l.$slots,"header-column",{key:"col"+e.key,column:e},(()=>[e.renderHeader?(u(),b(g({render:e.renderHeader}),{key:0,class:d([!0===e.grow&&"is-grow","lg"===e.grow&&"is-grow-lg","xl"===e.grow&&"is-grow-xl","end"===e.align&&"cell-end","center"===e.align&&"cell-center"])},null,8,["class"])):(u(),i("span",{key:1,class:d([!0===e.grow&&"is-grow","lg"===e.grow&&"is-grow-lg","xl"===e.grow&&"is-grow-xl","end"===e.align&&"cell-end","center"===e.align&&"cell-center"])},k(e.label),3))])))),128))]))])),c(l.$slots,"body",{},(()=>[(u(!0),i(f,null,y(w(r),((o,r)=>(u(),i(f,{key:r},[c(l.$slots,"body-row-pre",{row:o,columns:w(H),index:r}),x("div",{class:d(["flex-table-item",[t.clickable&&"is-clickable"]]),tabindex:t.clickable?0:void 0,onKeydown:C($((()=>{t.clickable&&a("rowClick",o,r)}),["prevent"]),["space"]),onClick:()=>{t.clickable&&a("rowClick",o,r)}},[c(l.$slots,"body-row",{row:o,columns:w(H),index:r},(()=>[(u(!0),i(f,null,y(w(H),(a=>(u(),b(s,{key:"row"+a.key,column:a},{default:j((()=>[c(l.$slots,"body-cell",{row:o,column:a,index:r,value:a.format(o[a.key],o,r)},(()=>[a.renderRow?(u(),b(g({render:()=>{var e;return null==(e=a.renderRow)?void 0:e.call(a,o,a,r)}}),{key:0})):"object"==typeof a.format(o[a.key],o,r)?(u(),i("span",{key:1,class:d([a.cellClass,a.inverted&&"dark-inverted",!a.inverted&&(a.bold?"dark-text":"light-text")])},[e.printObjects?(u(),i("details",P,[x("div",q,[x("pre",null,[x("code",null,k(a.format(o[a.key],o,r)),1)])])])):h("",!0)],2)):(u(),i("span",{key:2,class:d([a.cellClass,a.inverted&&"dark-inverted",!a.inverted&&(a.bold?"dark-text":"light-text")])},k(a.format(o[a.key],o,r)),3))]))])),_:2},1032,["column"])))),128))]))],42,N),c(l.$slots,"body-row-post",{row:o,columns:w(H),index:r})],64)))),128))]))],2)}}});export{Q as _,A as a,O as b};