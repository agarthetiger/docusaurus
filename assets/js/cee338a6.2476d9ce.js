"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Vagrant",s={unversionedId:"cheat-sheets/vagrant",id:"cheat-sheets/vagrant",title:"Vagrant",description:"Tips",source:"@site/docs/cheat-sheets/vagrant.md",sourceDirName:"cheat-sheets",slug:"/cheat-sheets/vagrant",permalink:"/docs/cheat-sheets/vagrant",draft:!1,editUrl:"https://github.com/agarthetiger/docusaurus/tree/main/docs/cheat-sheets/vagrant.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python Quick Reference",permalink:"/docs/cheat-sheets/python"},next:{title:"CNC",permalink:"/docs/category/cnc"}},l={},c=[{value:"Tips",id:"tips",level:2},{value:"Ansible with Vagrant",id:"ansible-with-vagrant",level:3}],u={toc:c};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vagrant"},"Vagrant"),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("h3",{id:"ansible-with-vagrant"},"Ansible with Vagrant"),(0,a.kt)("p",null,"To reuse Vagrant VMs as the target for Ansible automation development, you can use a git submodule to include the repo with the Vagrantfile. In the Vagrantfile include an ansible provisioner then the provisioner will create an Ansible Inventory in .vagrant/provisioners/ansible/inventory which can then be used as the Ansible inventory from playbooks under development on the  host, without having to copy/duplicate any files. "),(0,a.kt)("p",null,"Note that only the ansible provisioner creates this inventory, presumably because the provisioner itself is using this to provision the VMs from the host machine with Ansible. The ansible-local provisioner runs on the VMs so does not create an inventory on the Vagrant host."),(0,a.kt)("p",null,"Multiple provisioners can be specified in the Vagrantfile, the inventory trick with the Ansible provisioner can co-exist alongside configuration with the ansible-local provisioner to further provision the VMs on startup should this be required. Ideally the base box would be built with Packer so that no time-consuming customisation is required when starting the VMs. Yes, Docker would be much faster, however there are times when a VM more closely replicates the target environment for the Ansible automation and this is desirable."))}h.isMDXComponent=!0}}]);