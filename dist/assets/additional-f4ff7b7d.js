import{ab as t}from"./index-568ad137.js";const a=t();async function r(){try{const{data:t}=await a({url:"/regions"});return t}catch(t){throw t}}async function n(t){try{const{data:r}=await a({url:"/districts",params:{region_id:t}});return r}catch(r){throw r}}async function c(){try{const{data:t}=await a({url:"/medical-organizations"});return t}catch(t){throw t}}export{r as a,n as b,c as f};
