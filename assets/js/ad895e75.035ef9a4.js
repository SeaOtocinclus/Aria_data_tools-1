"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[288],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return s},MDXProvider:function(){return m},mdx:function(){return v},useMDXComponents:function(){return l},withMDXComponents:function(){return c}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){return function(t){var n=l(t.components);return r.createElement(e,i({},t,{components:n}))}},l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,f=c["".concat(a,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(f,d(d({ref:t},s),{},{components:n})):r.createElement(f,d({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{Z:function(){return o},b:function(){return r}})},44996:function(e,t,n){n.r(t),n.d(t,{default:function(){return a},useBaseUrlUtils:function(){return i}});var r=n(52263),o=n(13919);function i(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,d=void 0!==a&&a,u=i.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(d)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+c:c}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},93581:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=n(44996),d=["components"],u={sidebar_position:11,id:"faq",title:"FAQ"},s="FAQ",c={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"Installation",source:"@site/docs/FAQ.md",sourceDirName:".",slug:"/faq",permalink:"/Aria_data_tools/docs/faq",editUrl:"https://github.com/facebookresearch/aria_data_tools/docs/FAQ.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,id:"faq",title:"FAQ"},sidebar:"tutorialSidebar",previous:{title:"Getting to Know and Use VRS",permalink:"/Aria_data_tools/docs/use-vrs"},next:{title:"Citation and Contributing",permalink:"/Aria_data_tools/docs/citation-contribute"}},l=[{value:"Installation",id:"installation",children:[{value:"How do I install Podman?",id:"how-do-i-install-podman",children:[]},{value:"Configuring Podman as a virtual machine",id:"configuring-podman-as-a-virtual-machine",children:[]}]},{value:"Do you have any visualizations I can look at?",id:"do-you-have-any-visualizations-i-can-look-at",children:[{value:"Everyday Activities Dataset",id:"everyday-activities-dataset",children:[]},{value:"Desktop Activities Multi-View",id:"desktop-activities-multi-view",children:[]}]}],m={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,d);return(0,i.mdx)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"faq"},"FAQ"),(0,i.mdx)("h2",{id:"installation"},"Installation"),(0,i.mdx)("h3",{id:"how-do-i-install-podman"},"How do I install Podman?"),(0,i.mdx)("p",null,"Depending upon your operating system, there are several ways to get ",(0,i.mdx)("a",{parentName:"p",href:"https://podman.io/"},"Podman"),". Here are some of the ways."),(0,i.mdx)("h4",{id:"on-fedora-or-centos"},"On Fedora or CentOS"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"$ sudo dnf install podman\n")),(0,i.mdx)("h4",{id:"macos"},"macOS"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"$ brew install podman\n")),(0,i.mdx)("h4",{id:"debian-or-ubuntu"},"debian or Ubuntu"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"$ sudo apt-get install podman\n")),(0,i.mdx)("h3",{id:"configuring-podman-as-a-virtual-machine"},"Configuring Podman as a virtual machine"),(0,i.mdx)("p",null,"You do not need to run Podman as a virtual machine, but it is an option. If you use your container as a virtual machine you probably need at least 4 CPUs, 8 GB ram and 200 GB of disk space."),(0,i.mdx)("p",null,"Podman and Docker are very similar. For all the instructions below, replace the word podman with docker to make it work with docker."),(0,i.mdx)("h4",{id:"check-your-containers-vm-settings"},"Check your container's VM settings"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"$ podman machine ls\nNAME                     VM TYPE     CREATED      LAST UP            CPUS        MEMORY      DISK SIZE\npodman-machine-default*  qemu        4 hours ago  Currently running  4           8.594GB     214.7GB\n")),(0,i.mdx)("h4",{id:"configure-settings"},"Configure settings"),(0,i.mdx)("p",null,"If you do not have  4 CPUs, 8 GB ram and 200 GB of disk space."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"$ podman machine stop; podman machine rm\n$ podman machine init -m 8192 --cpus=4 --disk-space=200 && podman machine start\n")),(0,i.mdx)("h2",{id:"do-you-have-any-visualizations-i-can-look-at"},"Do you have any visualizations I can look at?"),(0,i.mdx)("p",null,"Yes we do! Here are a few."),(0,i.mdx)("h3",{id:"everyday-activities-dataset"},"Everyday Activities Dataset"),(0,i.mdx)("hr",null),(0,i.mdx)("video",{width:"950",controls:!0},(0,i.mdx)("source",{src:(0,a.default)("video/et_visualization.mp4"),type:"video/mp4"}),"Your browser does not support the video tag."),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Eye Tracking Visualization")),(0,i.mdx)("hr",null),(0,i.mdx)("video",{width:"950",controls:!0},(0,i.mdx)("source",{src:(0,a.default)("video/map_merge.mp4"),type:"video/mp4"}),"Your browser does not support the video tag."),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Shared 3D Global Trajectories for Multi-User Activities in the Same Locationn")),(0,i.mdx)("hr",null),(0,i.mdx)("video",{width:"950",controls:!0},(0,i.mdx)("source",{src:(0,a.default)("video/2wearers_synched.mp4"),type:"video/mp4"}),"Your browser does not support the video tag."),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Synchronized Recording of Two Wearers in the One Location")),(0,i.mdx)("h3",{id:"desktop-activities-multi-view"},"Desktop Activities Multi-View"),(0,i.mdx)("hr",null),(0,i.mdx)("video",{width:"950",controls:!0},(0,i.mdx)("source",{src:(0,a.default)("video/desk_activity.mp4"),type:"video/mp4"}),"Your browser does not support the video tag."),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Desktop Activity Visualization")),(0,i.mdx)("hr",null),(0,i.mdx)("video",{width:"950",controls:!0},(0,i.mdx)("source",{src:(0,a.default)("video/desk_12-demo.mp4"),type:"video/mp4"}),"Your browser does not support the video tag."),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Object Sorting & Tidying Multi-View")))}p.isMDXComponent=!0}}]);