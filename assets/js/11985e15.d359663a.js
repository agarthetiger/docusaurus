"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4423],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,g=u["".concat(l,".").concat(d)]||u[d]||h[d]||a;return r?o.createElement(g,i(i({ref:t},c),{},{components:r})):o.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1272:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={},i="Part 2 - Smart cooling",s={unversionedId:"raspberry-pi/raspberry-pi-cluster/part-2",id:"raspberry-pi/raspberry-pi-cluster/part-2",title:"Part 2 - Smart cooling",description:"PWM fan controller breakout board for Raspberry Pi",source:"@site/docs/raspberry-pi/raspberry-pi-cluster/part-2.md",sourceDirName:"raspberry-pi/raspberry-pi-cluster",slug:"/raspberry-pi/raspberry-pi-cluster/part-2",permalink:"/docusaurus/docs/raspberry-pi/raspberry-pi-cluster/part-2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/raspberry-pi/raspberry-pi-cluster/part-2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Part 1 - Initial design",permalink:"/docusaurus/docs/raspberry-pi/raspberry-pi-cluster/part-1"},next:{title:"Cluster resources",permalink:"/docusaurus/docs/raspberry-pi/raspberry-pi-cluster/resources"}},l={},p=[{value:"Parts",id:"parts",level:3},{value:"Pins used",id:"pins-used",level:3},{value:"Design",id:"design",level:3},{value:"Electrical Circuit Design",id:"electrical-circuit-design",level:3},{value:"Physical Circuit Layout",id:"physical-circuit-layout",level:3},{value:"Testing",id:"testing",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Future enhancements",id:"future-enhancements",level:3},{value:"Resources",id:"resources",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"part-2---smart-cooling"},"Part 2 - Smart cooling"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"PWM fan controller breakout board for Raspberry Pi",src:r(8466).Z,width:"1024",height:"768"})),(0,n.kt)("h3",{id:"parts"},"Parts"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://noctua.at/en/products/fan/nf-a12x25-pwm"},"Noctua NF-A12x25 12v PWM fan")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shop.pimoroni.com/products/sparkfun-logic-level-converter-bi-directional"},"SparkFun Logic Level converter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://thepihut.com/products/breakout-pizero"},"ABElectronics Breakout PiZero prototyping PCB")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://uk.farnell.com/molex/47053-1000/connector-header-4pos-1row-2-54mm/dp/2313705"},"Molex 47053-1000 4 pin pcb mount socket")),(0,n.kt)("li",{parentName:"ul"},"5.5/2.5mm DC socket"),(0,n.kt)("li",{parentName:"ul"},"12v power supply (from stock)"),(0,n.kt)("li",{parentName:"ul"},"24awg single core wire")),(0,n.kt)("h3",{id:"pins-used"},"Pins used"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GPIO/BCM 18 - for PWM control to fan, via logic level convert to boost 3.3v GPIO to 5v"),(0,n.kt)("li",{parentName:"ul"},"GPIO/BCM 6 - for RPM speed monitor, via logic level converter. Input signal in Hz, two pulses per revolution. ")),(0,n.kt)("h3",{id:"design"},"Design"),(0,n.kt)("p",null,"The SparkFun logic level converter ",(0,n.kt)("a",{parentName:"p",href:"https://learn.sparkfun.com/tutorials/bi-directional-logic-level-converter-hookup-guide/all#board-overview"},"board overview")," shows that each side of the MOSFET has a 10K ohm pull-up resistor. I'm hoping the RPM speed signal can be read using this from a 5v supply using the high voltage side of the logic level converter. "),(0,n.kt)("h3",{id:"electrical-circuit-design"},"Electrical Circuit Design"),(0,n.kt)("p",null,"The Raspberry Pi has GPIO pins which can provide a Pulse Width Modulation (PWM) signal. ",(0,n.kt)("a",{parentName:"p",href:"https://pinout.xyz/"},"Pinout.xyz")," is a useful resource for working out the pinout and purposes of the GPIO pins which you can use, as well as seeing which pins various HATs, pHATs and SHIMs use when stacking boards together."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://pinout.xyz/resources/raspberry-pi-pinout.png",alt:"Raspberry Pi GPIO pinout courtesy of pinout.xyz"})),(0,n.kt)("p",null,"Pinout.xyz was useful in confirming which pins the Blinkt! LED array would use which I'll be stacking on top of this PWM fan control board. As we can see from ",(0,n.kt)("a",{parentName:"p",href:"https://pinout.xyz/pinout/blinkt"},"https://pinout.xyz/pinout/blinkt")," only pins BCM 23 and BCM 24 need to be reserved for the Blinkt! so BCM 18 (PWM0) can be used to generate the PWM signal for the fan and BCM 6 for monitoring the fan speed (BCM 6 was a coin-toss selection, based on it's physical proximity to where the signal wire (at one point) was coming onto the board. "),(0,n.kt)("p",null,"The GPIO pins use 3.3v for I/O, and the Noctua fan needs a 5v PWM signal. Fortunately SparkFun make a cheap (\xa33) logic level converter which can translate a signal from a low voltage to a high voltage and vice versa. We can use the Raspberry Pi 5v GPIO to power the high voltage side of the board, as the PWM signal draws very little current. "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.sparkfun.com/r/400-400/assets/f/3/3/4/4/526842ae757b7f1b128b456f.png",alt:"SparkFun Logic Level Converter circuit design"})),(0,n.kt)("p",null,"As the LLC board has pull-up resistors on each side then a second channel can be used for reading the signal from the Noctua fan speed wire, which the ",(0,n.kt)("a",{parentName:"p",href:"https://noctua.at/pub/media/wysiwyg/Noctua_PWM_specifications_white_paper.pdf"},"Notcua fan PWM specifications")," show as needing a pull-up resistor. "),(0,n.kt)("p",null,"Curcuit design to be added..."),(0,n.kt)("h3",{id:"physical-circuit-layout"},"Physical Circuit Layout"),(0,n.kt)("p",null,"The Breakout PiZero board was too small for this circuit to wire it nicely. With the logic level converter board being 5 pins wide there was little option but to cross signal and power wires over each other. The wiring under the board is not accessible which I could have used pins and sockets to connect the logic level converter board in a removable way. It does work so it is good enough for purpose, but I'm not proud of the wiring layout which is really not optimal. I chose to use it because it doesn't totally cover the Raspberry Pi 4B it is connected to, which will have CPU load which I don't want throttled due to high CPU temperature. "),(0,n.kt)("h3",{id:"testing"},"Testing"),(0,n.kt)("p",null,"The system daemon code to control the fan will use the python GPIO libraries (assuming they prove suitable). For initial testing from the command line I'm using (the awesome) WiringPi library. "),(0,n.kt)("p",null,"Reading Gordon's ",(0,n.kt)("a",{parentName:"p",href:"http://wiringpi.com/wiringpi-deprecated/"},"deprecation notice")," for WiringPi it makes me sad that open source contributors receive such poor treatment by a number of consumers for the contributions they have made. I'm sure it is a minority of people, but equally sure that fact does not detract from the impact of their behaviour. "),(0,n.kt)("p",null,"For reference, here are a few quick commands to get testing with. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# Get help for the gpio command\nman gpio\n\n# Check the version of gpio, needs v2.52 for Raspberry Pi 4B support\ngpio -v\n\n# See the pinout for your raspberry pi\ngpio readall\n\n# Set the mode for pin 1 to pwm, rather than tristate logic levels\ngpio mode 1 pwm\n\n# Use gpio pwm <pin> <level>\n# Level 0 is off, eg 0% duty cycle, level 1023 is 'on', eg 100% duty cycle\ngpio pwm 1 512\n")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"My initial circuit would control the fan speed down to it's lowest threshold, but wouldn't turn the fan off completely as it should with a zero duty-cycle (eg. ground) PWM signal to the fan. After sleeping on the problem I realised that I'd not connected the ground from the Pi/Logic level converter to the ground from teh 12v supply which was powering the fan, leaving the PWM \"ground\" signal floating above the maximum voltage of 0.8v for the PWM low logic level. A bit of rewiring later and things are working as expected. This ground issue was probably also the cause of erroneous RPM readings, which I noticed at the same time as troubleshooting the fan speed. "),(0,n.kt)("h3",{id:"future-enhancements"},"Future enhancements"),(0,n.kt)("p",null,"Pins and a detachable connector for the 12v supply leads would be useful, as would some insulation between the underside of the board and the conductive aluminium heatsinks on the Raspberry CPU, which could cause a short if not careful to stabalise the board when connecting or removing the 4 pin fan connector. Hopefully adding standoffs to fix the board in place will help, especially as I will enlarge the mounting holes to M3 size. "),(0,n.kt)("h3",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.sparkfun.com/tutorials/bi-directional-logic-level-converter-hookup-guide/all"},"SparkFun logic level converter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://noctua.at/pub/media/wysiwyg/Noctua_PWM_specifications_white_paper.pdf"},"Notcua fan PWM specifications")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.driftking.tw/en/2019/11/Using-Raspberry-Pi-to-Control-a-PWM-Fan-and-Monitor-its-Speed/"},"https://blog.driftking.tw/en/2019/11/Using-Raspberry-Pi-to-Control-a-PWM-Fan-and-Monitor-its-Speed/"))))}u.isMDXComponent=!0},8466:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/pwm-fan-breakout-1024-0bf2cd3a654c33aa0324bc13dd098606.jpg"}}]);