"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6115],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=i,d=p["".concat(s,".").concat(f)]||p[f]||y[f]||o;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2431:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const o={},a="Inventory Plugins",l={unversionedId:"ansible/inventory-plugins",id:"ansible/inventory-plugins",title:"Inventory Plugins",description:"All inventory plugins use a config file. Ini or Yaml inventory files are still configuration files, they just happen to contain all the hostnames and ip addresses for the ini and yaml plugins directly.",source:"@site/docs/ansible/inventory-plugins.md",sourceDirName:"ansible",slug:"/ansible/inventory-plugins",permalink:"/docusaurus/docs/ansible/inventory-plugins",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ansible/inventory-plugins.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Filters",permalink:"/docusaurus/docs/ansible/filters"},next:{title:"Local actions",permalink:"/docusaurus/docs/ansible/local-actions"}},s={},c=[],u={toc:c};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"inventory-plugins"},"Inventory Plugins"),(0,i.kt)("p",null,"All inventory plugins use a config file. Ini or Yaml inventory files are still configuration files, they just happen to contain all the hostnames and ip addresses for the ini and yaml plugins directly. "),(0,i.kt)("p",null,'Dynamic inventory plugins also need a config file, they all have a "plugin:" key which has to match the inventory filename. It is common for dynamic inventory plugins to have configuration in the contif file (which can be called anything) and for credentials to be read from environment variables. '),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"ansible-inventory -i <config>.yml --list --yaml")," to debug the inventory generated by a dynamic inventory script. Note that the --export flag can significantly change the inventory and even exclude variables which would otherwise be included in the inventory."),(0,i.kt)("p",null,"For Collections, the ","[defaults]"," INVENTORY_PLUGINS key needs to be configured to specify the path to the folder where the inventory plugin .py file is located. I've not been able to get this working by just specifying the COLLECTIONS_PATH and inventory namespace."))}p.isMDXComponent=!0}}]);