"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[372],{3905:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return m},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return p},withMDXComponents:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),d=function(e){return function(t){var a=p(t.components);return r.createElement(e,i({},t,{components:a}))}},p=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,h=d["".concat(o,".").concat(u)]||d[u]||c[u]||i;return a?r.createElement(h,l(l({ref:t},m),{},{components:a})):r.createElement(h,l({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},24287:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var r=a(83117),n=a(80102),i=(a(67294),a(3905)),o=a(44996),l=["components"],s={sidebar_position:6,id:"visualizing",title:"Visualize Sequences and Pre-Computed Camera Trajectory"},m="Visualize Sequences & Pre-Computed Camera Trajectory",d={unversionedId:"howto/visualizing",id:"howto/visualizing",title:"Visualize Sequences and Pre-Computed Camera Trajectory",description:"Introduction",source:"@site/docs/howto/visualizing.md",sourceDirName:"howto",slug:"/howto/visualizing",permalink:"/Aria_data_tools/docs/howto/visualizing",draft:!1,editUrl:"https://github.com/facebookresearch/aria_data_tools/docs/howto/visualizing.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,id:"visualizing",title:"Visualize Sequences and Pre-Computed Camera Trajectory"},sidebar:"tutorialSidebar",previous:{title:"Accessing Sensor Data",permalink:"/Aria_data_tools/docs/howto/dataprovider"},next:{title:"Using Calibration Sensor Data",permalink:"/Aria_data_tools/docs/howto/calibration"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"How to use AriaViewer",id:"how-to-use-ariaviewer",level:2},{value:"Single Recording",id:"single-recording",level:3},{value:"Multiple Recordings",id:"multiple-recordings",level:3},{value:"Features of the AriaViewer UI",id:"features-of-the-ariaviewer-ui",level:2},{value:"Menu bar",id:"menu-bar",level:3},{value:"Notes",id:"notes",level:2}],c={toc:u};function h(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.mdx)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"visualize-sequences--pre-computed-camera-trajectory"},"Visualize Sequences & Pre-Computed Camera Trajectory"),(0,i.mdx)("h2",{id:"introduction"},"Introduction"),(0,i.mdx)("p",null,"The AriaViewer allows users to visualize time-synced recordings for one or more Project Aria sequences. It has the ability to visualize recordings and see 3D visualizations of pre-computed trajectory using following time-synced data:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Both SLAM and RGB camera video streams"),(0,i.mdx)("li",{parentName:"ul"},"All 7 audio microphone waveforms"),(0,i.mdx)("li",{parentName:"ul"},"Accelerometer, gyroscope, magnetometer, barometer and temperature signals"),(0,i.mdx)("li",{parentName:"ul"},"Speech-to-text derived data"),(0,i.mdx)("li",{parentName:"ul"},"Eye-tracking information overlayed on the RGB video stream")),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"Cameras on Project Aria devices are installed sideways. By default, images are reported and viewed as they were provided by cameras and will appear sideways.")),(0,i.mdx)("h2",{id:"how-to-use-ariaviewer"},"How to use AriaViewer"),(0,i.mdx)("h3",{id:"single-recording"},"Single Recording"),(0,i.mdx)("p",null,"The following instructions start running the visualization tool for a single recording in C++:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"$ cd build/visualization\n$ ./aria_viewer ${vrs_path} ${optional_pose_path} ${optional_eyetracking_path} ${optional_speechtotext_path}\n")),(0,i.mdx)("p",null,"or in Python:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"$ cd src/visualization\n$ python3 main.py ${vrs_path} ${optional_pose_path} ${optional_eyetracking_path} ${optional_speechtotext_path}\n")),(0,i.mdx)("p",null,"Pose, eye tracking and speech2text paths are optional. If they are not provided, the visualization tool will try to infer the full paths of ",(0,i.mdx)("inlineCode",{parentName:"p"},"trajectory.csv"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"et_in_rgb_stream.csv")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"speech_aria_domain.csv")," from the VRS path by using the Aria Pilot Dataset structure:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"\u251c\u2500\u2500 location\n\u2502 \u2514\u2500\u2500 trajectory.csv\n\u251c\u2500\u2500 eyetracking\n\u2502 \u2514\u2500\u2500 et_in_rgb_stream.csv\n\u251c\u2500\u2500 speech2text\n\u2502 \u2514\u2500\u2500 speech_aria_domain.csv\n\u251c\u2500\u2500 ${vrs_path}\n\u2514\u2500\u2500 ...\n")),(0,i.mdx)("p",null,"You will see something like the video below when you press the ",(0,i.mdx)("strong",{parentName:"p"},"Play")," button."),(0,i.mdx)("video",{width:"950",controls:!0},(0,i.mdx)("source",{src:(0,o.default)("video/aria_viewer.m4v"),type:"video/mp4"}),"Your browser does not support the video tag."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Figure 1:")," ",(0,i.mdx)("em",{parentName:"p"},"AriaViewer Player")),(0,i.mdx)("h3",{id:"multiple-recordings"},"Multiple Recordings"),(0,i.mdx)("p",null,"In C++ multiple time synchronized recordings can be played back jointly using the aria_multi_viewer as:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"$ cd build/visualization\n$ ./aria_multi_viewer ${recording_path_0} ${recording_path_1} ... ${recording_path_N}\n")),(0,i.mdx)("p",null,"You will see multiple AriaViewer UIs showing all provided recordings played back in synchrony after pressing both ",(0,i.mdx)("strong",{parentName:"p"},"Play")," buttons:"),(0,i.mdx)("video",{width:"950",controls:!0},(0,i.mdx)("source",{src:(0,o.default)("video/aria_multi_viewer.m4v"),type:"video/mp4"}),"Your browser does not support the video tag."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Figure 2:")," ",(0,i.mdx)("em",{parentName:"p"},"AriaViewer Player with Multiple Recordings")),(0,i.mdx)("h2",{id:"features-of-the-ariaviewer-ui"},"Features of the AriaViewer UI"),(0,i.mdx)("p",null,"The visualization tool\u2019s layout varies depending on which sensor streams are selected via the menu bar. The grid shows from top left to bottom right:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The image stream of the left SLAM camera ",(0,i.mdx)("inlineCode",{parentName:"li"},"camera-slam-left")),(0,i.mdx)("li",{parentName:"ul"},"The image stream of the RGB camera ",(0,i.mdx)("inlineCode",{parentName:"li"},"camera-rgb")," with eye-tracking (visualized as a red cross) and speech-to-text information overlayed onto it"),(0,i.mdx)("li",{parentName:"ul"},"The image stream of the right SLAM camera",(0,i.mdx)("inlineCode",{parentName:"li"}," camera-slam-right")),(0,i.mdx)("li",{parentName:"ul"},"The 3D visualization of the pre-computed trajectory as well as the frustra of the calibrated rig."),(0,i.mdx)("li",{parentName:"ul"},"The acceleration observations of the left and right IMU in m/s^2"),(0,i.mdx)("li",{parentName:"ul"},"The gyroscope observations of the left and right IMU in rad/s"),(0,i.mdx)("li",{parentName:"ul"},"The magnetometer observations in Tesla"),(0,i.mdx)("li",{parentName:"ul"},"The signals of the 7 microphones")),(0,i.mdx)("h3",{id:"menu-bar"},"Menu bar"),(0,i.mdx)("p",null,"The menu bar\u2019s features are:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Play:")," Play and pause the recording"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"playback_speed:")," change the playback speed factor (0.1 means slowdown by a factor of 10, 1.0 means realtime, 10. means speed up by a factor of 10)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"camSparsity"),": this drop down menu sets the sparsity level for the visualized camera poses. \u201c1\u201d shows all the camera poses at the frame-rate of ",(0,i.mdx)("inlineCode",{parentName:"li"},"camera-slam-left")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Snapshot UI"),": take a snapshot of the window and save it as the image ",(0,i.mdx)("inlineCode",{parentName:"li"},"snapshot.png")," in the current path"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"LeftImg"),": show/hide ",(0,i.mdx)("inlineCode",{parentName:"li"},"camera-slam-left")," image stream"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"RightImg"),": show/hide ",(0,i.mdx)("inlineCode",{parentName:"li"},"camera-slam-right")," image stream"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"RgbImg"),": show/hide ",(0,i.mdx)("inlineCode",{parentName:"li"},"camera-rgb")," image stream"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"LeftCam"),": show/hide the 3D frustums of ",(0,i.mdx)("inlineCode",{parentName:"li"},"camera-slam-left")," in the trajectory visualization"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"RightCam"),": show/hide the 3D frustums of ",(0,i.mdx)("inlineCode",{parentName:"li"},"camera-slam-right")," in the trajectory visualization"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Rig"),": show/hide the coordinate systems of ",(0,i.mdx)("inlineCode",{parentName:"li"},"imu-left")," in the trajectory visualization"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Trajectory"),": show/hide the trajectory as lines connecting the the poses of ",(0,i.mdx)("inlineCode",{parentName:"li"},"imu-left")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"World Coord:")," shows the coordinate axes of the world coordinate system in the 3D view"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"LeftImu"),": show/hide the accelerometer and gyrometer observations of the left IMU"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"RightImu"),": show/hide the accelerometer and gyrometer  observations of the right IMU"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Magnetometer"),": show/hide the magnetometer observations"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Barometer"),": show/hide the barometer observations"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Temperature"),": show/hide the temperature observations"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Print GPS log:")," print the received GPS messages to the terminal"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Print Wifi log:")," print the detected Wifi networks to the terminal"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Print Bluetooth:")," print the detected Bluetooth beacons to the terminal"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"temp ","[C]",":")," the current temperature reading in degrees Celsius"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"pres ","[kPa]",":")," the current pressure reading in kilo Pascal")),(0,i.mdx)("h2",{id:"notes"},"Notes"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The playback speed mimics the real recording speed times the playback_speed factor."),(0,i.mdx)("li",{parentName:"ul"},"The SLAM cameras and the RGB cameras may have different frame-rates."),(0,i.mdx)("li",{parentName:"ul"},"The provided poses in ",(0,i.mdx)("inlineCode",{parentName:"li"},"trajectory.csv")," have 1kHz frequency and express the ",(0,i.mdx)("inlineCode",{parentName:"li"},"imu-left")," poses. The visualized poses are based on the timestamps of the ",(0,i.mdx)("inlineCode",{parentName:"li"},"slam-left-cam")," and are obtained by interpolating the provided 1kHz poses. Please refer to ",(0,i.mdx)("inlineCode",{parentName:"li"},"utils.cpp")," in ",(0,i.mdx)("inlineCode",{parentName:"li"},"data_provider")," in this tool kit for details about the interpolation. The poses of different sensors are visualized using the calibration parameters between ",(0,i.mdx)("inlineCode",{parentName:"li"},"imu-left")," and the other sensors."),(0,i.mdx)("li",{parentName:"ul"},"The eye-tracking results are directly visualized in the RGB camera stream as a red cross."),(0,i.mdx)("li",{parentName:"ul"},"The speech-to-text transcription of the audio signals is shown overlayed onto the RGB video stream formatted as ",(0,i.mdx)("inlineCode",{parentName:"li"},"transcribed text (confidence %, duration of utterance in seconds)."))),(0,i.mdx)("p",null,"If you want to know more about accessing Project Aria data go to ",(0,i.mdx)("a",{parentName:"p",href:"/Aria_data_tools/docs/howto/dataprovider"},"Accessing Sensor Data")))}h.isMDXComponent=!0}}]);