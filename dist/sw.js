if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(n.map((s=>t[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-e0782b83"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_...all_.09096ca1.css",revision:null},{url:"assets/_...all_.696c9160.js",revision:null},{url:"assets/_id_.03fa7f51.css",revision:null},{url:"assets/_id_.376db1e4.js",revision:null},{url:"assets/_id_.37f8921d.js",revision:null},{url:"assets/_id_.858105d7.js",revision:null},{url:"assets/_id_.ab76aa5d.js",revision:null},{url:"assets/_id_.f3e26436.css",revision:null},{url:"assets/@iconify_vue.36cba446.js",revision:null},{url:"assets/@vueform_multiselect.e309dbb0.js",revision:null},{url:"assets/@vueform_slider.6051e7e4.js",revision:null},{url:"assets/AnimatedLogo.4beaab77.css",revision:null},{url:"assets/AnimatedLogo.845a668b.js",revision:null},{url:"assets/app.0205fba4.css",revision:null},{url:"assets/app.ce8506f0.js",revision:null},{url:"assets/auth.15ff1ddb.css",revision:null},{url:"assets/auth.9ad0ec8f.js",revision:null},{url:"assets/AuthLayout.8af89d47.js",revision:null},{url:"assets/ConfirmActionModal.vue_vue_type_script_setup_true_lang.f9efca3f.js",revision:null},{url:"assets/dashboard.80ca0bdb.js",revision:null},{url:"assets/dashboard.9416dca3.css",revision:null},{url:"assets/EmployeeFlexTableDropdown.vue_vue_type_script_setup_true_lang.6fa26884.js",revision:null},{url:"assets/error.1a0ebc58.js",revision:null},{url:"assets/FilterForm.vue_vue_type_script_setup_true_lang.63e83b9c.js",revision:null},{url:"assets/index.01af8311.js",revision:null},{url:"assets/index.107e6f69.js",revision:null},{url:"assets/index.1e4b4ce4.css",revision:null},{url:"assets/index.1f9717b5.css",revision:null},{url:"assets/index.2cc5bae8.js",revision:null},{url:"assets/index.37659557.css",revision:null},{url:"assets/index.44a009e8.js",revision:null},{url:"assets/index.577f744e.js",revision:null},{url:"assets/index.68d98ed8.js",revision:null},{url:"assets/index.6b29e68f.css",revision:null},{url:"assets/index.71d45385.css",revision:null},{url:"assets/index.81efc362.js",revision:null},{url:"assets/index.83179ebf.js",revision:null},{url:"assets/index.899be7a3.js",revision:null},{url:"assets/index.99a2c01f.js",revision:null},{url:"assets/index.bdddc288.js",revision:null},{url:"assets/index.cd1be135.js",revision:null},{url:"assets/lodash.ac47af46.js",revision:null},{url:"assets/login-2.5de72fe3.js",revision:null},{url:"assets/login-3.77b170a3.js",revision:null},{url:"assets/login.7716a5ef.js",revision:null},{url:"assets/login.fb6beb43.css",revision:null},{url:"assets/main.4345c7ff.js",revision:null},{url:"assets/MinimalLayout.vue_vue_type_script_setup_true_lang.9dde7d0d.js",revision:null},{url:"assets/notyf.9ad42824.js",revision:null},{url:"assets/patient.a33a6e04.js",revision:null},{url:"assets/PatientPersonalInfoForm.d7a132f9.css",revision:null},{url:"assets/PatientPersonalInfoForm.vue_vue_type_script_setup_true_lang.235a9279.js",revision:null},{url:"assets/permissions.007d56bb.css",revision:null},{url:"assets/permissions.ed1da275.js",revision:null},{url:"assets/search-7-dark.cc3771ae.css",revision:null},{url:"assets/search-7-dark.edd88865.js",revision:null},{url:"assets/SearchInput.441463b7.js",revision:null},{url:"assets/SearchInput.989a6b11.css",revision:null},{url:"assets/signup-1.e1bc196e.css",revision:null},{url:"assets/signup-1.e384c17e.js",revision:null},{url:"assets/signup-2.d4aac389.js",revision:null},{url:"assets/signup-3.43f5e55e.js",revision:null},{url:"assets/sleep.2a252ff4.js",revision:null},{url:"assets/SubmitButton.vue_vue_type_script_setup_true_lang.3f68d4dc.js",revision:null},{url:"assets/v-calendar.63432200.js",revision:null},{url:"assets/VAvatar.f1a5348c.css",revision:null},{url:"assets/VAvatar.vue_vue_type_style_index_0_lang.4cb6168a.js",revision:null},{url:"assets/VBreadcrumb.ba5b1bd3.css",revision:null},{url:"assets/VBreadcrumb.vue_vue_type_style_index_0_lang.f0addd39.js",revision:null},{url:"assets/VCheckbox.335f9cad.css",revision:null},{url:"assets/VCheckbox.vue_vue_type_style_index_0_lang.9a150b8e.js",revision:null},{url:"assets/VControl.19d1d169.js",revision:null},{url:"assets/VControl.fdd36048.css",revision:null},{url:"assets/VDropdown.dbc05ea0.css",revision:null},{url:"assets/VDropdown.vue_vue_type_style_index_0_lang.cd855e33.js",revision:null},{url:"assets/VFlex.c47d498f.css",revision:null},{url:"assets/VFlex.vue_vue_type_style_index_0_lang.b47b9c51.js",revision:null},{url:"assets/VFlexItem.29ec2db8.css",revision:null},{url:"assets/VFlexItem.vue_vue_type_style_index_0_lang.7e964e18.js",revision:null},{url:"assets/VIcon.vue_vue_type_script_setup_true_lang.f93a4e89.js",revision:null},{url:"assets/viewWrapper.c9136749.js",revision:null},{url:"assets/VIMaskInput.vue_vue_type_script_lang.969b72ca.js",revision:null},{url:"assets/VInput.vue_vue_type_script_setup_true_lang.4104c862.js",revision:null},{url:"assets/VModal.35068138.css",revision:null},{url:"assets/VModal.vue_vue_type_style_index_0_lang.fd577c83.js",revision:null},{url:"assets/VSwitchBlock.97a48118.css",revision:null},{url:"assets/VSwitchBlock.vue_vue_type_style_index_0_lang.5a9ef3de.js",revision:null},{url:"assets/VTabs.vue_vue_type_script_setup_true_lang.9752e081.js",revision:null},{url:"assets/VTextarea.vue_vue_type_script_setup_true_lang.a79bfa8f.js",revision:null},{url:"assets/vuero-banking-dark.2b91d0b5.js",revision:null},{url:"assets/workbox-window.e5dea35c.js",revision:null},{url:"index.html",revision:"8c1d12c4866b1c729ad70cba799029f5"},{url:"vendors/font-awesome-v5.css",revision:"4c8b74382b4f6b2cf5f8afcb87e80abc"},{url:"vendors/line-icons-pro.css",revision:"4bb4c5797d6ce8bd02b13e2d12c34bcd"},{url:"vendors/prism-coldark-cold.css",revision:"238822f024eb9bd172d4d6494cacd69c"},{url:"favicon.svg",revision:"524cab7b5e455d34a449368438cdbfea"},{url:"favicon.ico",revision:"2608995d3ce047aed1b4f12314b971e6"},{url:"apple-touch-icon.png",revision:"3483d045409e842f56d487e9d1dbd49c"},{url:"pwa-192x192.png",revision:"0d44461ec0ee15a7f1a74ff2dbad1247"},{url:"pwa-512x512.png",revision:"3584115539362f85fb8b9dc35ccd3e57"},{url:"manifest.webmanifest",revision:"dffbc68d6792c8e2ee5bb914d28267c8"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
