"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8630],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),k=o,f=p["".concat(s,".").concat(k)]||p[k]||h[k]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},815:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},i="Learn Tekton",l={unversionedId:"tekton/learn-tekton",id:"tekton/learn-tekton",title:"Learn Tekton",description:"If you are new to Tekton there are some great tutorials to get you started.",source:"@site/docs/tekton/learn-tekton.md",sourceDirName:"tekton",slug:"/tekton/learn-tekton",permalink:"/docs/tekton/learn-tekton",draft:!1,editUrl:"https://github.com/agarthetiger/docusaurus/tree/main/docs/tekton/learn-tekton.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tekton",permalink:"/docs/category/tekton"},next:{title:"Terraform",permalink:"/docs/category/terraform"}},s={},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"learn-tekton"},"Learn Tekton"),(0,o.kt)("p",null,"If you are new to Tekton there are some great tutorials to get you started. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/IBM/tekton-tutorial-openshift"},"IBM Tekton tutorial")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redhat-scholars.github.io/tekton-tutorial/tekton-tutorial/index.html"},"Red Hat Scholars Tekton Tutorial")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openshift/pipelines-tutorial"},"OpenShift Pipelines Tutorial"))),(0,o.kt)("p",null,'!!! Note "Always check the version"\nRemember to check what version of Tekton is installed in your environment vs what version the tutorial or documentation is based on. The Red Hat Scholars Tekton Tutorial has a ',(0,o.kt)("a",{parentName:"p",href:"https://redhat-scholars.github.io/tekton-tutorial/tekton-tutorial/setup.html"},"Setup")," page which calls out the version of Tekton, the Tekton CLI and all other tools which the tutorial is based on."),(0,o.kt)("p",null,'!!! Warning "Here be dragons"\nNote that at time of writing, some CRDs in Tekton are in Beta release while some are still in Tech Preview. Things may change in a breaking way.'),(0,o.kt)("p",null,"There is also a ",(0,o.kt)("a",{parentName:"p",href:"https://tekton.dev/docs/"},"Tekton docs")," site. Note though that this only shows documentation for the latest version of Tekton, and the links in the top right nav to other versions just send you to GitHub. I hope that once Tekton has a GA release under it's belt the docs will be versioned as per any other enterprise-grade tool."))}p.isMDXComponent=!0}}]);