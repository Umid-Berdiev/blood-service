import{a6 as t}from"./index-ef344eb7.js";const a=t();async function r(){try{const{data:t}=await a({url:"/patients/categories"});return t}catch(t){throw t}}async function n(t){try{const{data:r}=await a({url:"/patients/donation",params:t});return r}catch(r){throw r}}async function c(t){try{const{data:r}=await a({url:"/patients",params:t});return r}catch(r){throw r}}async function s(t,r){try{const{data:n}=await a({url:`/visit-cards/${t}/donation`,method:"PUT",data:r});return n}catch(n){throw n}}async function o(t){try{const{data:r}=await a({url:"/patients/candidate",params:t});return r}catch(r){throw r}}async function i(t){try{const{data:r}=await a({url:"/patients/rejected",params:t});return r}catch(r){throw r}}async function e(t){try{const{data:r}=await a({url:"/patients",method:"POST",data:t});return r}catch(r){throw r}}async function u(t,r){try{const{data:n}=await a({url:`/patients/${t}`,method:"PUT",data:r});return n}catch(n){throw n}}async function d(t){try{const{data:r}=await a({url:`/patients/show/${t}`});return r}catch(r){throw r}}async function h(t,r){try{const{data:n}=await a({url:`/patients/${t}/rejects`,method:"POST",data:r});return n}catch(n){throw n}}async function y(t){try{const{data:r}=await a({url:`/visit-cards/${t}/questionnaire`});return r}catch(r){throw r}}async function w(t,r){try{const{data:n}=await a({url:`/visit-cards/${t}/questionnaire`,method:"POST",data:r});return n}catch(n){throw n}}async function f(t){try{const{data:r}=await a({url:`/visit-cards/${t}/laboratory-research`});return r}catch(r){throw r}}async function l(t,r){try{const{data:n}=await a({url:`/visit-cards/${t}/laboratory-research`,method:"PUT",data:r});return n}catch(n){throw n}}export{c as a,o as b,l as c,h as d,y as e,f,w as g,d as h,i,e as j,n as k,r as p,s,u};
