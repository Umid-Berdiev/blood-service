import{a6 as t}from"./index-98bd5d96.js";const a=t();async function n(){try{const{data:t}=await a({url:"/regions"});return t}catch(t){throw t}}async function r(t){try{const{data:n}=await a({url:"/districts",params:{region_id:t}});return n}catch(n){throw n}}async function c(){try{const{data:t}=await a({url:"/medical-organizations"});return t}catch(t){throw t}}async function o(){try{const{data:t}=await a({url:"/blood-types"});return t}catch(t){throw t}}async function s(){try{const{data:t}=await a({url:"/donation-types"});return t}catch(t){throw t}}async function i(){try{const{data:t}=await a({url:"/immunizations"});return t}catch(t){throw t}}async function u(){try{const{data:t}=await a({url:"/reject-reasons"});return t}catch(t){throw t}}export{c as a,i as b,u as c,n as d,r as e,s as f,o as g};