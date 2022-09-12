"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[925],{3905:function(e,t,r){r.r(t),r.d(t,{MDXContext:function(){return d},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return l},withMDXComponents:function(){return p}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){return function(t){var r=l(t.components);return a.createElement(e,o({},t,{components:r}))}},l=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),u=n,f=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return r?a.createElement(f,c(c({ref:t},d),{},{components:r})):a.createElement(f,c({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},38319:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=r(83117),n=r(80102),o=(r(67294),r(3905)),i=r(44996),c=["components"],s={sidebar_position:6,id:"reprojected-gaze",title:"Eye Gaze Data"},d="Eye Gaze Data",p={unversionedId:"pilotdata/reprojected-gaze",id:"pilotdata/reprojected-gaze",title:"Eye Gaze Data",description:"Eye Gaze derived data uses data from Project Aria devices\u2019 eye tracking cameras to estimate where the user is looking. Data from the eye tracking cameras are used to estimate a vector expressing the gaze direction. That vector is translated into a 2D pixel coordinate on the 120 degree FOV RGB camera image.",source:"@site/docs/pilotdata/reprojected-gaze.mdx",sourceDirName:"pilotdata",slug:"/pilotdata/reprojected-gaze",permalink:"/Aria_data_tools/docs/pilotdata/reprojected-gaze",draft:!1,editUrl:"https://github.com/facebookresearch/aria_data_tools/docs/pilotdata/reprojected-gaze.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,id:"reprojected-gaze",title:"Eye Gaze Data"},sidebar:"tutorialSidebar",previous:{title:"Speech2Text Output Data",permalink:"/Aria_data_tools/docs/pilotdata/speech2text"},next:{title:"Timestamps Mapping Data",permalink:"/Aria_data_tools/docs/pilotdata/timestamps"}},l={},u=[],m={toc:u};function f(e){var t=e.components,r=(0,n.Z)(e,c);return(0,o.mdx)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"eye-gaze-data"},"Eye Gaze Data"),(0,o.mdx)("p",null,"Eye Gaze derived data uses data from Project Aria devices\u2019 eye tracking cameras to estimate where the user is looking. Data from the eye tracking cameras are used to estimate a vector expressing the gaze direction. That vector is translated into a 2D pixel coordinate on the 120 degree FOV RGB camera image."),(0,o.mdx)("p",null,"The Eye Gaze Data for each recording is stored in ",(0,o.mdx)("inlineCode",{parentName:"p"},"eyetracking/et_in_rgb_stream.csv"),"."),(0,o.mdx)("p",null,"In the csv file (x,y) represents the calibrated 2D pixel coordinate of gaze position."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Table 1:")," ",(0,o.mdx)("em",{parentName:"p"},(0,o.mdx)("inlineCode",{parentName:"em"},"et_in_rgb_stream.csv")," Structure")),(0,o.mdx)("div",null,(0,o.mdx)("table",null,(0,o.mdx)("tbody",null,(0,o.mdx)("tr",null,(0,o.mdx)("td",null,"timestamp_unix_ns"),(0,o.mdx)("td",{colSpan:2},"  Calibrated gaze position (pixel coordinate)")),(0,o.mdx)("tr",null,(0,o.mdx)("td",null," t "),(0,o.mdx)("td",null," x"),(0,o.mdx)("td",null," y"))))),(0,o.mdx)("admonition",{type:"note"},(0,o.mdx)("p",{parentName:"admonition"},"The provided timestamp is the timestamp of the eye camera image used to compute the gaze, not an RGB camera timestamp. To query the approximate location of eye gaze at RGB image timestamp, we suggest you interpolate gaze results from neighboring frames.")),(0,o.mdx)("video",{width:"950",controls:!0},(0,o.mdx)("source",{src:(0,i.default)("video/et_visualization.m4v"),type:"video/mp4"}),"Your browser does not support the video tag."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Figure 1:")," ",(0,o.mdx)("em",{parentName:"p"},"Eye Tracking Visualization")))}f.isMDXComponent=!0}}]);