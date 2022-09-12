"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[932],{3905:function(t,e,n){n.r(e),n.d(e,{MDXContext:function(){return m},MDXProvider:function(){return u},mdx:function(){return f},useMDXComponents:function(){return c},withMDXComponents:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),d=function(t){return function(e){var n=c(e.components);return r.createElement(t,i({},e,{components:n}))}},c=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},x=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=c(n),u=a,x=d["".concat(o,".").concat(u)]||d[u]||s[u]||i;return n?r.createElement(x,l(l({ref:e},m),{},{components:n})):r.createElement(x,l({ref:e},m))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=x;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}x.displayName="MDXCreateElement"},65153:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:5,id:"speech2text",title:"Speech2Text Output Data"},p="Speech2Text Output Data",m={unversionedId:"pilotdata/speech2text",id:"pilotdata/speech2text",title:"Speech2Text Output Data",description:"Speech2Text Output Data provides text strings generated by Automatic Speech Recognition with timestamps and confidence rating.",source:"@site/docs/pilotdata/speech2text.md",sourceDirName:"pilotdata",slug:"/pilotdata/speech2text",permalink:"/Aria_data_tools/docs/pilotdata/speech2text",draft:!1,editUrl:"https://github.com/facebookresearch/aria_data_tools/docs/pilotdata/speech2text.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"speech2text",title:"Speech2Text Output Data"},sidebar:"tutorialSidebar",previous:{title:"Location Output Data",permalink:"/Aria_data_tools/docs/pilotdata/location-output"},next:{title:"Eye Gaze Data",permalink:"/Aria_data_tools/docs/pilotdata/reprojected-gaze"}},d={},c=[],u={toc:c};function s(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.mdx)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"speech2text-output-data"},"Speech2Text Output Data"),(0,i.mdx)("p",null,"Speech2Text Output Data provides text strings generated by Automatic Speech Recognition with timestamps and confidence rating."),(0,i.mdx)("p",null,"Each recording has two .csv files that are the same, except  ",(0,i.mdx)("inlineCode",{parentName:"p"},"speech2text/speech.csv")," uses the wav file time domain and  ",(0,i.mdx)("inlineCode",{parentName:"p"},"speech2text/speech_aria_domain.csv")," uses Aria time domain."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Table 1:")," ",(0,i.mdx)("em",{parentName:"p"},(0,i.mdx)("inlineCode",{parentName:"em"},"speech.csv")," Structure")),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"startTime_ms"),(0,i.mdx)("th",{parentName:"tr",align:null},"endTime_ms"),(0,i.mdx)("th",{parentName:"tr",align:null},"written"),(0,i.mdx)("th",{parentName:"tr",align:null},"confidence"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"54040"),(0,i.mdx)("td",{parentName:"tr",align:null},"55040"),(0,i.mdx)("td",{parentName:"tr",align:null},"I\u2019m"),(0,i.mdx)("td",{parentName:"tr",align:null},"0.25608")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"72920"),(0,i.mdx)("td",{parentName:"tr",align:null},"73920"),(0,i.mdx)("td",{parentName:"tr",align:null},"looking"),(0,i.mdx)("td",{parentName:"tr",align:null},"0.84339")))),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Note:")," token in wav file time domain (start = 0)"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Table 2:")," ",(0,i.mdx)("em",{parentName:"p"},(0,i.mdx)("inlineCode",{parentName:"em"},"speech_aria_domain.csv")," Structure")),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"startTime_ns"),(0,i.mdx)("th",{parentName:"tr",align:null},"endTime_ns"),(0,i.mdx)("th",{parentName:"tr",align:null},"written"),(0,i.mdx)("th",{parentName:"tr",align:null},"confidence"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"56511040"),(0,i.mdx)("td",{parentName:"tr",align:null},"56512040"),(0,i.mdx)("td",{parentName:"tr",align:null},"I\u2019m"),(0,i.mdx)("td",{parentName:"tr",align:null},"0.25608")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"56529920"),(0,i.mdx)("td",{parentName:"tr",align:null},"56530920"),(0,i.mdx)("td",{parentName:"tr",align:null},"looking"),(0,i.mdx)("td",{parentName:"tr",align:null},"0.84339")))),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Note:")," token in Aria file time domain (start = 0)"))}s.isMDXComponent=!0}}]);