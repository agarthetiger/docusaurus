"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(n),l=a,h=u["".concat(s,".").concat(l)]||u[l]||m[l]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},9546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={},i="Podman and MacOS",c={unversionedId:"podman/podman-and-macos",id:"podman/podman-and-macos",title:"Podman and MacOS",description:"Podman is intended as a drop-in replacement for the docker cli and has from the outset had a focus on security and not running anything as root. You can run podman on MacOS using podman-machine instead of needing VirtualBox. The new MacBooks use the M1 or M2 chips, which are based on arm64 chips. This means there is a bit more work to do in order to build images for amd64 architecture.",source:"@site/docs/podman/podman-and-macos.md",sourceDirName:"podman",slug:"/podman/podman-and-macos",permalink:"/docs/podman/podman-and-macos",draft:!1,editUrl:"https://github.com/agarthetiger/docusaurus/tree/main/docs/podman/podman-and-macos.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Podman",permalink:"/docs/category/podman"},next:{title:"Puppet",permalink:"/docs/category/puppet"}},s={},d=[],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"podman-and-macos"},"Podman and MacOS"),(0,a.kt)("p",null,"Podman is intended as a drop-in replacement for the docker cli and has from the outset had a focus on security and not running anything as root. You can run podman on MacOS using podman-machine instead of needing VirtualBox. The new MacBooks use the M1 or M2 chips, which are based on arm64 chips. This means there is a bit more work to do in order to build images for amd64 architecture. "),(0,a.kt)("p",null,"A bit more Googling that I expected turned up ",(0,a.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/devops/comments/ta6v7p/m1_mac_with_base_64_images/"},"this handy thread on Reddit"),", which makes it easy to run multi-architecture builds on MacOS with Podman."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"podman machine ssh\nsudo -i\nrpm-ostree install qemu-user-static\nsystemctl reboot\n")),(0,a.kt)("p",null,"After that you should be able to build different architectures by passing the --platform flag to podman. No need to install or run buildx."))}u.isMDXComponent=!0}}]);