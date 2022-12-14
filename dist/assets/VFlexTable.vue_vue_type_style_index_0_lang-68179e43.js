import{q as e,G as l,c as a,h as t,R as o,x as r,a7 as s,y as n,V as u,r as i,Q as c,o as d,d as v,b as p,f as m,P as y,a8 as f,a9 as b,F as g,l as k,a as w,O as h,t as x,K as C,g as $,e as j,w as S,s as T,m as V}from"./index-568ad137.js";const H=e({props:{id:{type:String,required:!0},label:{type:String,default:void 0},modelValue:{type:String,default:void 0},noRouter:{type:Boolean,default:void 0},routerQueryKey:{type:String,default:"sort"}},emits:["update:modelValue"],setup(e,r){const s=l(),n=a((()=>e.modelValue??s.query[e.routerQueryKey]??"")),u=a((()=>n.value===`${e.id}:asc`)),i=a((()=>n.value===`${e.id}:desc`)),c=a((()=>u.value?`${e.id}:desc`:i.value?void 0:`${e.id}:asc`)),d=a((()=>{if(e.noRouter)return{};const l={...s.query};return e.routerQueryKey&&(l[e.routerQueryKey]=c.value),{name:s.name,params:s.params,query:l}})),v=l=>{if(r.emit("update:modelValue",c.value),e.noRouter)return l.preventDefault(),l.stopPropagation(),!1};return()=>{var l,a;const s=null==(a=null==(l=r.slots)?void 0:l.default)?void 0:a.call(l,{isDesc:i.value,isAsc:u.value,nextSort:c.value,value:n.value}),p=t(o,{to:d.value,onClick:v,onKeydown(e){"Space"===e.code&&(e.preventDefault(),e.stopPropagation(),e.target instanceof HTMLAnchorElement&&e.target.dispatchEvent(new MouseEvent("click")))}},{default(){const l=t("span",{key:`${n.value}`,class:"is-inline"},t("span",{class:"ml-3 iconify is-inline","data-icon":u.value?"fa:sort-asc":i.value?"fa:sort-desc":"fa:sort"}));return[s??e.label,l]}});return t("span",{},p)}}}),B=Symbol(),O=e=>e,R=({key:e,order:l,a:a,b:t})=>{const o=a[e],r=t[e];return"string"==typeof o?"asc"===l?o.localeCompare(r):r.localeCompare(o):o>r?"asc"===l?1:-1:o<r?"asc"===l?-1:1:0},K=e({props:{data:{type:[Array,Function],default:void 0},columns:{type:Object,default:void 0},sort:{type:String,default:void 0},searchTerm:{type:String,default:void 0},limit:{type:Number,default:void 0},page:{type:Number,default:void 0},total:{type:Number,default:void 0},debounceSearch:{type:Number,default:300}},emits:["update:sort","update:page","update:limit","update:searchTerm"],setup(e,l){const o=r(),d=r(!1),v=r(""),p=a({get:()=>e.sort??v.value,set(a){void 0===e.sort?v.value=a:l.emit("update:sort",a)}}),m=r(""),y=a({get:()=>e.searchTerm??m.value,set(a){void 0===e.searchTerm?m.value=a:l.emit("update:searchTerm",a)}}),f=r(1),b=a({get:()=>e.page??f.value,set(a){void 0===e.page?f.value=a:l.emit("update:page",a)}}),g=r(10),k=a({get:()=>Math.max(1,e.limit??g.value),set(a){void 0===e.limit?g.value=a:l.emit("update:limit",a)}}),w=a((()=>{const l=e.columns;if(!l)return l;const a={};return Object.keys(l).reduce(((e,a)=>{const o=l[a];return"string"==typeof o?e[a]={format:O,label:o,key:a}:"object"==typeof o&&(e[a]={format:O,label:a,key:a,...o},!0===o.sortable&&(o.renderHeader?e[a].renderHeader=()=>t(H,{id:a,noRouter:!0,modelValue:p.value,"onUpdate:modelValue":e=>p.value=e},{default:o.renderHeader}):e[a].renderHeader=()=>t(H,{id:a,label:o.label??a,noRouter:!0,modelValue:p.value,"onUpdate:modelValue":e=>p.value=e})),!0!==o.searchable||o.sort||(e[a].sort=R)),e}),a),a})),h=a((()=>{let l=o.value;if(!l)return l;if("function"==typeof e.data)return l;if($.value){const e=w.value?Object.values(w.value).filter((e=>!(!e||"string"==typeof e)&&!0===e.searchable)):[];if(e.length){const a=new RegExp($.value,"i");l=l.filter(((l,t)=>e.some((e=>{if(!e.key)return!1;const o=l[e.key];return e.filter?e.filter({searchTerm:$.value,value:o,row:l,column:e,index:t}):"string"==typeof o&&o.match(a)}))))}}return l})),x=a((()=>{let l=h.value;if(!l)return l;if("function"==typeof e.data)return l;if(p.value&&p.value.includes(":")){const[e,a]=p.value.split(":"),t=w.value?Object.values(w.value).find((l=>!(!l||"string"==typeof l)&&(!0===l.sortable&&l.key===e))):null;if(t){const e=[...l];e.sort(((e,l)=>t.key&&t.sort?t.sort({order:a,column:t,key:t.key,a:e,b:l}):0)),l=e}}return l})),C=a((()=>{if("function"==typeof e.data)return o.value;if(!o.value)return o.value;let l=x.value;return null==l?void 0:l.slice(S.value,S.value+k.value)})),$=s(y,e.debounceSearch),j=a((()=>{var l;return e.total??(null==(l=x.value)?void 0:l.length)??0})),S=a((()=>(b.value-1)*k.value)),T=a((()=>j.value?Math.ceil(j.value/k.value):0));async function V(l){if("function"==typeof e.data){d.value=!0;try{o.value=await e.data({searchTerm:$.value,start:S.value,limit:k.value,sort:p.value,controller:l})}finally{d.value=!1}}}n([$,k],(()=>{1!==b.value&&(b.value=1)})),u((async l=>{let a;"function"==typeof e.data?(a=new AbortController,await V(a)):o.value=e.data,l((()=>{null==a||a.abort()}))}));const K=i({data:C,columns:w,loading:d,searchInput:y,searchTerm:$,start:S,page:b,limit:k,sort:p,total:j,totalPages:T,fetchData:V});return c(B,K),l.expose(K),()=>{var e,a;const o=null==(a=(e=l.slots).default)?void 0:a.call(e,K);return t("div",{class:"flex-table-wrapper"},o)}}}),_=["data-th"],q=e({__name:"VFlexTableCell",props:{column:{default:()=>({})}},setup(e){const l=e;return(e,a)=>(d(),v("div",{class:m(["flex-table-cell is-relative",[l.column.bold&&"is-bold",l.column.media&&"is-media",!0===l.column.grow&&"is-grow","lg"===l.column.grow&&"is-grow-lg","xl"===l.column.grow&&"is-grow-xl",l.column.scrollX&&!l.column.scrollY&&"has-slimscroll-x",!l.column.scrollX&&l.column.scrollY&&"has-slimscroll",l.column.scrollX&&l.column.scrollY&&"has-slimscroll-all","end"===l.column.align&&"cell-end","center"===l.column.align&&"cell-center",l.column.cellClass]]),"data-th":l.column.label||void 0},[p(e.$slots,"default")],10,_))}}),Q={key:0,class:"flex-table-header"},A=["tabindex","onKeydown","onClick"],D={key:0},E={class:"language-json py-4"},F=e({__name:"VFlexTable",props:{data:{default:()=>[]},columns:{default:void 0},printObjects:{type:Boolean},reactive:{type:Boolean},compact:{type:Boolean},rounded:{type:Boolean},separators:{type:Boolean},clickable:{type:Boolean},subtable:{type:Boolean},noHeader:{type:Boolean}},emits:["rowClick"],setup(e,{emit:l}){const t=e,o=y(B,null),r=a((()=>(null==o?void 0:o.data)?o.data:t.reactive?f(t.data)?t.data:i(t.data):b(t.data))),s=e=>e,n=a((()=>{const e=(null==o?void 0:o.columns)??t.columns;let l=[];if(e)for(const[a,t]of Object.entries(e))"string"==typeof t?l.push({format:s,label:t,key:a}):l.push({format:s,label:a,key:a,...t});else if(r.value.length>0)for(const[a]of Object.entries(r.value[0]))l.push({format:s,label:a,key:a});return l}));return(a,o)=>{const s=q;return d(),v("div",{class:m(["flex-table",[t.compact&&"is-compact",t.rounded&&"is-rounded",t.separators&&"with-separators",t.noHeader&&"no-header",t.clickable&&"is-table-clickable",t.subtable&&"sub-table"]])},[p(a.$slots,"header",{},(()=>[t.noHeader?$("",!0):(d(),v("div",Q,[(d(!0),v(g,null,k(C(n),(e=>p(a.$slots,"header-column",{key:"col"+e.key,column:e},(()=>[e.renderHeader?(d(),w(h({render:e.renderHeader}),{key:0,class:m([!0===e.grow&&"is-grow","lg"===e.grow&&"is-grow-lg","xl"===e.grow&&"is-grow-xl","end"===e.align&&"cell-end","center"===e.align&&"cell-center"])},null,8,["class"])):(d(),v("span",{key:1,class:m([!0===e.grow&&"is-grow","lg"===e.grow&&"is-grow-lg","xl"===e.grow&&"is-grow-xl","end"===e.align&&"cell-end","center"===e.align&&"cell-center"])},x(e.label),3))])))),128))]))])),p(a.$slots,"body",{},(()=>[(d(!0),v(g,null,k(C(r),((o,r)=>(d(),v(g,{key:r},[p(a.$slots,"body-row-pre",{row:o,columns:C(n),index:r}),j("div",{class:m(["flex-table-item",[t.clickable&&"is-clickable"]]),tabindex:t.clickable?0:void 0,onKeydown:T(V((()=>{t.clickable&&l("rowClick",o,r)}),["prevent"]),["space"]),onClick:()=>{t.clickable&&l("rowClick",o,r)}},[p(a.$slots,"body-row",{row:o,columns:C(n),index:r},(()=>[(d(!0),v(g,null,k(C(n),(l=>(d(),w(s,{key:"row"+l.key,column:l},{default:S((()=>[p(a.$slots,"body-cell",{row:o,column:l,index:r,value:l.format(o[l.key],o,r)},(()=>[l.renderRow?(d(),w(h({render:()=>{var e;return null==(e=l.renderRow)?void 0:e.call(l,o,l,r)}}),{key:0})):"object"==typeof l.format(o[l.key],o,r)?(d(),v("span",{key:1,class:m([l.cellClass,l.inverted&&"dark-inverted",!l.inverted&&(l.bold?"dark-text":"light-text")])},[e.printObjects?(d(),v("details",D,[j("div",E,[j("pre",null,[j("code",null,x(l.format(o[l.key],o,r)),1)])])])):$("",!0)],2)):(d(),v("span",{key:2,class:m([l.cellClass,l.inverted&&"dark-inverted",!l.inverted&&(l.bold?"dark-text":"light-text")])},x(l.format(o[l.key],o,r)),3))]))])),_:2},1032,["column"])))),128))]))],42,A),p(a.$slots,"body-row-post",{row:o,columns:C(n),index:r})],64)))),128))]))],2)}}});export{q as _,F as a,K as b};
