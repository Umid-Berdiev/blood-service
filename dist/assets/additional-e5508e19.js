import{a as t}from"./userSession-0c0e9684.js";const a=t();async function n(){try{const{data:t}=await a({url:"/regions"});return t}catch(t){throw t}}async function r(t){try{const{data:n}=await a({url:"/districts",params:{region_id:t}});return n}catch(n){throw n}}async function c(){try{const{data:t}=await a({url:"/medical-organizations"});return t}catch(t){throw t}}async function s(){try{const{data:t}=await a({url:"/blood-types"});return t}catch(t){throw t}}async function o(){try{const{data:t}=await a({url:"/donation-types"});return t}catch(t){throw t}}async function i(){try{const{data:t}=await a({url:"/immunizations"});return t}catch(t){throw t}}async function u(){try{const{data:t}=await a({url:"/reject-reasons"});return t}catch(t){throw t}}export{o as a,i as b,u as c,n as d,r as e,c as f,s as g};
