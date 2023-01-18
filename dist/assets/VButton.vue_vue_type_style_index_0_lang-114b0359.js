import{q as a,c as e,h as i,R as d}from"./index-ef344eb7.js";import{C as t,_ as l}from"./VPlaceload-5927026b.js";const o=a({props:{to:{type:[Object,String],default:void 0},href:{type:String,default:void 0},icon:{type:String,default:void 0},iconCaret:{type:String,default:void 0},placeload:{type:String,default:void 0,validator:a=>(null===a.match(t)&&console.warn(`VButton: invalid "${a}" placeload. Should be a valid css unit value.`),!0)},color:{type:String,default:void 0,validator:a=>-1!==[void 0,"primary","info","success","warning","danger","white","dark","light"].indexOf(a)||(console.warn(`VButton: invalid "${a}" color. Should be primary, info, success, warning, danger, dark, light, white or undefined`),!1)},size:{type:String,default:void 0,validator:a=>-1!==[void 0,"medium","big","huge"].indexOf(a)||(console.warn(`VButton: invalid "${a}" size. Should be big, huge, medium or undefined`),!1)},dark:{type:String,default:void 0,validator:a=>-1!==[void 0,"1","2","3","4","5","6"].indexOf(a)||(console.warn(`VButton: invalid "${a}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`),!1)},rounded:{type:Boolean,default:!1},bold:{type:Boolean,default:!1},fullwidth:{type:Boolean,default:!1},light:{type:Boolean,default:!1},raised:{type:Boolean,default:!1},elevated:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},darkOutlined:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},lower:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},static:{type:Boolean,default:!1}},setup(a,{slots:t,attrs:o}){const n=e((()=>["button","v-button",a.disabled&&"is-disabled",a.rounded&&"is-rounded",a.bold&&"is-bold",a.size&&`is-${a.size}`,a.lower&&"is-lower",a.fullwidth&&"is-fullwidth",a.outlined&&"is-outlined",a.dark&&`is-dark-bg-${a.dark}`,a.darkOutlined&&"is-dark-outlined",a.raised&&"is-raised",a.elevated&&"is-elevated",a.loading&&!a.placeload&&"is-loading",a.color&&`is-${a.color}`,a.light&&"is-light",a.static&&"is-static"])),s=e((()=>a.icon&&-1!==a.icon.indexOf(":"))),r=e((()=>a.iconCaret&&-1!==a.iconCaret.indexOf(":"))),u=()=>{var e;const d=[];let o,n;if(s.value){const e=i("i",{"aria-hidden":!0,class:"iconify","data-icon":a.icon});o=i("span",{class:"icon"},e)}else if(a.icon){const e=i("i",{"aria-hidden":!0,class:a.icon});o=i("span",{class:"icon"},e)}if(r.value){const e=i("i",{"aria-hidden":!0,class:"iconify","data-icon":a.iconCaret});n=i("span",{class:"caret"},e)}else if(a.iconCaret){const e=i("i",{"aria-hidden":!0,class:a.iconCaret});n=i("span",{class:"caret"},e)}return o&&d.push(o),a.placeload?d.push(i(l,{width:a.placeload})):d.push(i("span",null==(e=t.default)?void 0:e.call(t))),n&&d.push(n),d};return()=>a.to?i(d,{...o,"aria-hidden":!!a.placeload&&!0,to:a.to,class:["button",...n.value]},{default:u}):a.href?i("a",{...o,"aria-hidden":!!a.placeload&&!0,href:a.href,class:n.value},{default:u}):i("button",{type:"button",...o,"aria-hidden":!!a.placeload&&!0,disabled:a.disabled,class:["button",...n.value]},{default:u})}});export{o as _};
