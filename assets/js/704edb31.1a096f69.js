"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4410],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>b});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,b=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?n.createElement(b,i(i({ref:r},l),{},{components:t})):n.createElement(b,i({ref:r},l))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},521:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const o={},i="Raspbian commands",c={unversionedId:"raspberry-pi/raspbian-commands",id:"raspberry-pi/raspbian-commands",title:"Raspbian commands",description:"vcgencmd",source:"@site/docs/raspberry-pi/raspbian-commands.md",sourceDirName:"raspberry-pi",slug:"/raspberry-pi/raspbian-commands",permalink:"/docs/raspberry-pi/raspbian-commands",draft:!1,editUrl:"https://github.com/agarthetiger/docusaurus/tree/main/docs/raspberry-pi/raspbian-commands.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cluster resources",permalink:"/docs/raspberry-pi/raspberry-pi-cluster/resources"},next:{title:"Rspberry Pi 400",permalink:"/docs/raspberry-pi/rpi400"}},p={},s=[{value:"vcgencmd",id:"vcgencmd",level:2},{value:"wpa_cli",id:"wpa_cli",level:2}],l={toc:s};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"raspbian-commands"},"Raspbian commands"),(0,a.kt)("h2",{id:"vcgencmd"},"vcgencmd"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/documentation/raspbian/applications/vcgencmd.md"},"vcgencmd documentation"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"vcgencmd commands")," - List available vcgencmd commands. Note there is no tab completion by default, nor a --help or equivalent option.\n",(0,a.kt)("inlineCode",{parentName:"p"},"vcgencmd measure_temp")," - Returns the temperature as measured by the SoC internal temperature sensor. Output eg. ",(0,a.kt)("inlineCode",{parentName:"p"},"temp=42.2'C")),(0,a.kt)("h2",{id:"wpa_cli"},"wpa_cli"),(0,a.kt)("p",null,"wpa_cli is a tool to configure and troubleshoot WiFi connectivity on a Raspberry Pi."))}u.isMDXComponent=!0}}]);