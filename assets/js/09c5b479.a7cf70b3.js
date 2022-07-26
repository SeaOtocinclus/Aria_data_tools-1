"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[330],{3905:function(e,r,t){t.r(r),t.d(r,{MDXContext:function(){return c},MDXProvider:function(){return p},mdx:function(){return h},useMDXComponents:function(){return m},withMDXComponents:function(){return d}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),d=function(e){return function(r){var t=m(r.components);return a.createElement(e,o({},r,{components:t}))}},m=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=m(e.components);return a.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(t),p=n,f=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return t?a.createElement(f,s(s({ref:r},c),{},{components:t})):a.createElement(f,s({ref:r},c))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},64288:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=t(83117),n=t(80102),o=(t(67294),t(3905)),i=["components"],s={sidebar_position:7,id:"calibration",title:"Using Calibration Sensor Data"},l="Using Calibration Sensor Data",c={unversionedId:"howto/calibration",id:"howto/calibration",isDocsHomePage:!1,title:"Using Calibration Sensor Data",description:"Introduction",source:"@site/docs/howto/calibration.md",sourceDirName:"howto",slug:"/howto/calibration",permalink:"/Aria_data_tools/docs/howto/calibration",editUrl:"https://github.com/facebookresearch/aria_data_tools/docs/howto/calibration.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,id:"calibration",title:"Using Calibration Sensor Data"},sidebar:"tutorialSidebar",previous:{title:"Visualize Sequences and Pre-Computed Camera Trajectory",permalink:"/Aria_data_tools/docs/howto/visualizing"},next:{title:"Aria Pilot Dataset Overview",permalink:"/Aria_data_tools/docs/pilotdata/pilotdata-index"}},d=[{value:"Introduction",id:"introduction",children:[]},{value:"Project Aria device calibration",id:"project-aria-device-calibration",children:[]},{value:"Sensors",id:"sensors",children:[]},{value:"Calibration",id:"calibration",children:[{value:"Extrinsics",id:"extrinsics",children:[]},{value:"Intrinsics",id:"intrinsics",children:[]}]}],m={toc:d};function p(e){var r=e.components,t=(0,n.Z)(e,i);return(0,o.mdx)("wrapper",(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"using-calibration-sensor-data"},"Using Calibration Sensor Data"),(0,o.mdx)("h2",{id:"introduction"},"Introduction"),(0,o.mdx)("p",null,"This page covers:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"General Project Aria device calibration principles"),(0,o.mdx)("li",{parentName:"ul"},"Python3 scripts for extrinsics and intrinsics")),(0,o.mdx)("h2",{id:"project-aria-device-calibration"},"Project Aria device calibration"),(0,o.mdx)("p",null,"Calibration data can be used to determine the 6DoF transformation between any pair of Project Aria device's sensors."),(0,o.mdx)("p",null,"Project Aria devices contain multiple types of sensors that are all calibrated when each device is manufactured. The calibration process derives intrinsic and extrinsic parameters (relative poses between sensors). This information is stored on every device and inserted into every ",(0,o.mdx)("a",{parentName:"p",href:"/Aria_data_tools/docs/aria-vrs"},"VRS")," data file it records."),(0,o.mdx)("p",null,"In Python3, you can fetch this information from VRS using Aria Data Provider and parse it into a data structure using the following code snippet:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},">>> import pyark.datatools as datatools\n>>> vrs_data_provider = datatools.dataprovider.AriaVrsDataProvider()\n>>> vrs_data_provider.openFile('./data/aria_unit_test_sequence_calib.vrs')\n# There are calibration strings for each image and motion stream\n# Reading the configuration record for any one of them will load the device model\n>>> slam_camera_recordable_type_id = 1201\n>>> slam_left_camera_instance_id = 1\n>>> slam_left_camera_stream_id = datatools.dataprovider.StreamId(slam_camera_recordable_type_id, slam_left_camera_instance_id)\n>>> vrs_data_provider.setStreamPlayer(slam_left_camera_stream_id)\n>>> vrs_data_provider.readFirstConfigurationRecord(slam_left_camera_stream_id)\nTrue\n>>> vrs_data_provider.loadDeviceModel()\nTrue\n>>> device_model = vrs_data_provider.getDeviceModel()\n>>> device_model\n<pyark.datatools.sensors.DeviceModel object at 0x7f955808c2b0>\n")),(0,o.mdx)("h2",{id:"sensors"},"Sensors"),(0,o.mdx)("p",null,"Go to ",(0,o.mdx)("a",{parentName:"p",href:"/Aria_data_tools/docs/sensors-measurements"},"Sensors and Measurements")," for information about Project Aria device sensors and how they are described in the tooling."),(0,o.mdx)("h2",{id:"calibration"},"Calibration"),(0,o.mdx)("p",null,"In computer vision, camera calibration is managed by two sets of parameters:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Intrinsics"),": Parameters defining how 3D points project to the image plane (focal, principal point, distortions coefficients, and so on). Intrinsics parameters allow you to ",(0,o.mdx)("em",{parentName:"li"},"project")," 3D points in 2D and ",(0,o.mdx)("em",{parentName:"li"},"unproject")," 2D feature observations to 3D rays (bearing vectors)."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Extrinsics"),": Parameters defining where the camera is in space (Rotation|Translation). Extrinsics allow you to move world points to the camera coordinate system.")),(0,o.mdx)("h3",{id:"extrinsics"},"Extrinsics"),(0,o.mdx)("p",null,"Extrinsic parameters are represented as a SE(3) matrix, that contains a rotation part (SO(3)) as a unit quaternion and a translation part as an R3 coordinate. To manipulate transformations such as relative pose between sensors, or re-projecting a 3D point from one sensor to another we use the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/strasdat/Sophus"},"Sophus library"),"."),(0,o.mdx)("p",null,"In the code and the documentation throughout this project, we use the following notation:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"p_sensor")," represents an R3 point in the local coordinate system of ",(0,o.mdx)("inlineCode",{parentName:"li"},"sensor"),". e.g. ",(0,o.mdx)("inlineCode",{parentName:"li"},"p_slamLeft"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"T_sensor1_sensor2")," represents a relative SE(3) transformation from ",(0,o.mdx)("inlineCode",{parentName:"li"},"sensor2")," frame to ",(0,o.mdx)("inlineCode",{parentName:"li"},"sensor1")," frame. An easy mnemonic is the chaining principle: ",(0,o.mdx)("inlineCode",{parentName:"li"},"T_sensor1_sensor2 * T_sensor2_sensor3 * p_sensor3 = p_sensor1"))),(0,o.mdx)("p",null,"You can transform a 3D point from one sensor to the another one using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"transform()")," operator:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},">>> import numpy as np\n>>> p_slamLeft = np.array([3.0, 2.0, 1.0])\n>>> p_imuRight = device_model.transform(p_slamLeft, 'camera-slam-left', 'imu-right')\n>>> p_imuRight\narray([ 3.33343274, -1.41484796,  1.20512771])\n>>> device_model.transform(p_imuRight, 'imu-right', 'camera-slam-left')\narray([3., 2., 1.]) # as you see we retrieve the initial 3D point\n")),(0,o.mdx)("h3",{id:"intrinsics"},"Intrinsics"),(0,o.mdx)("p",null,"Cameras can be configured to have a function that maps a 3D point in its local coordinate frame to the image pixel space. The parameters of this projection function are called the intrinsic parameter of a camera. All cameras on Project Aria devices are fisheye cameras. This means they are modeled by a spherical projection followed by additional distortion correction (rather than being modeled by a pinhole projection plus distortion)."),(0,o.mdx)("p",null,"For Project Aria devices, we use:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://ieeexplore.ieee.org/document/1642666"},"Kannala-Brandt model")," for eye tracking cameras"),(0,o.mdx)("li",{parentName:"ul"},"FisheyeRadTanThinPrism model for SLAM and RGB cameras")),(0,o.mdx)("p",null,"You can perform the projection and un-projection operations using the following Python3 script:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},">>> p_slamLeft = np.array([3.0, 2.0, 1.0])\n>>> uv_slamLeft = device_model.getCameraCalib('camera-slam-left').projectionModel.project(p_slamLeft)\n>>> uv_slamLeft\narray([583.48105528, 411.98136675])\n>>> device_model.getCameraCalib('camera-slam-left').projectionModel.unproject(uv_slamLeft)\narray([3., 2., 1.]) #return the corresponding bearing_vector (ray)\n")),(0,o.mdx)("p",null,"The IMU sensors use a linear rectification model for both accelerometers and gyroscopes to compensate the measurement for factory-estimated systematic errors. The model includes a 3x3 rectification matrix A (correcting scale and non-orthogonality) and a 3x1 bias vector ",(0,o.mdx)("inlineCode",{parentName:"p"},"b"),"."),(0,o.mdx)("p",null,"To apply the rectification, use the Python3 scripts:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},">>> p_imuLeft = np.array([3.0, 2.0, 1.0])\n>>> device_model.getImuCalib('imu-left').accel.compensateForSystematicErrorFromMeasurement(p_imuLeft)\narray([2.93735023, 2.02130446, 0.87514154])`\n")),(0,o.mdx)("p",null,"This rectification process applies the formula:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"p_compensated = A.inv() * (p_raw - b)\n")),(0,o.mdx)("p",null,"When applied to accelerometer data, ",(0,o.mdx)("inlineCode",{parentName:"p"},"p_raw")," represents acceleration.  When applied to gyroscope data ",(0,o.mdx)("inlineCode",{parentName:"p"},"p_raw"),"  represents angular velocity."))}p.isMDXComponent=!0}}]);