"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[981],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return m},MDXProvider:function(){return d},mdx:function(){return v},useMDXComponents:function(){return l},withMDXComponents:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){return function(t){var n=l(t.components);return r.createElement(e,i({},t,{components:n}))}},l=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,f=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(f,c(c({ref:t},m),{},{components:n})):r.createElement(f,c({ref:t},m))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{Z:function(){return a},b:function(){return r}})},44996:function(e,t,n){n.r(t),n.d(t,{default:function(){return o},useBaseUrlUtils:function(){return i}});var r=n(52263),a=n(13919);function i(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,m=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return m?e+p:p}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},9762:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=n(44996),c=["components"],s={sidebar_position:7,id:"timestamps",title:"Timestamps Mapping Data"},m="Timestamps Mapping Data",p={unversionedId:"pilotdata/timestamps",id:"pilotdata/timestamps",isDocsHomePage:!1,title:"Timestamps Mapping Data",description:"Project Aria devices and multi-view devices operating in proximity to each other (<100m) can leverage SMPTE timecode to receive a synchronized time clock with sub-millisecond accuracy.",source:"@site/docs/pilotdata/timestamps.md",sourceDirName:"pilotdata",slug:"/pilotdata/timestamps",permalink:"/Aria_data_tools/docs/pilotdata/timestamps",editUrl:"https://github.com/facebookresearch/aria_data_tools/docs/pilotdata/timestamps.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,id:"timestamps",title:"Timestamps Mapping Data"},sidebar:"tutorialSidebar",previous:{title:"Eye Gaze Data",permalink:"/Aria_data_tools/docs/pilotdata/reprojected-gaze"},next:{title:"Everyday Activities File Structure",permalink:"/Aria_data_tools/docs/pilotdata/everyday/Everyday Activities"}},l=[],d={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.mdx)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"timestamps-mapping-data"},"Timestamps Mapping Data"),(0,i.mdx)("p",null,"Project Aria devices and multi-view devices operating in proximity to each other (<100m) can leverage ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SMPTE_timecode"},"SMPTE timecode")," to receive a synchronized time clock with sub-millisecond accuracy."),(0,i.mdx)("p",null,"The mapping between local time clock and synchronized time clock for each sequence is stored in the file ",(0,i.mdx)("inlineCode",{parentName:"p"},"synchronization/timestamp_mapping.csv"),"  which contains two columns of data:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"deviceTimestampNs")," - Timestamps in the device\u2019s local time clock. All devices have their own time clocks which start at different times and potentially progress at different rates."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"syncedTimestampNs")," - Timestamps in the synchronized time clock common to all devices.")),(0,i.mdx)("p",null,"This mapping data provides a way to convert timestamps from device local time clock to synchronized time clock and, by extension this also mean that data from multiple devices can be expressed with respect to a common time. The timestamps in ",(0,i.mdx)("inlineCode",{parentName:"p"},"timestamp_mapping.csv "),"are increased monotonically."),(0,i.mdx)("p",null,"To translate the local timestamp of an arbitrary piece of data recorded by the device, one can use the offset obtained by  searching in the mapping file for the nearest local timestamp and calculating its delta to the synchronized time clock. An implementation of this mechanism is provided in ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/Aria_data_tools/blob/main/src/data_provider/utils.cpp#L117"},"Aria Data Tool\u2019s code"),"."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Table 1:")," ",(0,i.mdx)("em",{parentName:"p"},(0,i.mdx)("inlineCode",{parentName:"em"},"timestamp_mapping.csv")," Structure")),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"deviceTimestampNs"),(0,i.mdx)("th",{parentName:"tr",align:null},"syncedTimestampNs"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"monotonically increasing timestamps in ns"),(0,i.mdx)("td",{parentName:"tr",align:null},"monotonically increasing timestamps in ns")))),(0,i.mdx)("video",{width:"950",controls:!0},(0,i.mdx)("source",{src:(0,o.default)("video/2wearers_synched.mp4"),type:"video/mp4"}),"Your browser does not support the video tag."))}u.isMDXComponent=!0}}]);