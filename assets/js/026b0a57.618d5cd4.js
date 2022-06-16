"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[447],{3905:function(e,a,r){r.r(a),r.d(a,{MDXContext:function(){return l},MDXProvider:function(){return p},mdx:function(){return f},useMDXComponents:function(){return m},withMDXComponents:function(){return c}});var t=r(67294);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(){return(n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){return function(a){var r=m(a.components);return t.createElement(e,n({},a,{components:r}))}},m=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):d(d({},a),e)),r},p=function(e){var a=m(e.components);return t.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=m(r),p=o,h=c["".concat(i,".").concat(p)]||c[p]||u[p]||n;return r?t.createElement(h,d(d({ref:a},l),{},{components:r})):t.createElement(h,d({ref:a},l))}));function f(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=h;var d={};for(var s in a)hasOwnProperty.call(a,s)&&(d[s]=a[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var l=2;l<n;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3664:function(e,a,r){r.r(a),r.d(a,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return c}});var t=r(83117),o=r(80102),n=(r(67294),r(3905)),i=["components"],d={sidebar_position:5,id:"dataprovider",title:"Accessing Sensor Data"},s="Accessing Project Aria Sensor Data",l={unversionedId:"howto/dataprovider",id:"howto/dataprovider",isDocsHomePage:!1,title:"Accessing Sensor Data",description:"Introduction",source:"@site/docs/howto/dataprovider.md",sourceDirName:"howto",slug:"/howto/dataprovider",permalink:"/Aria_data_tools/docs/howto/dataprovider",editUrl:"https://github.com/facebookresearch/aria_data_tools/docs/howto/dataprovider.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"dataprovider",title:"Accessing Sensor Data"},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/Aria_data_tools/docs/howto/examples"},next:{title:"Visualize Sequences and Pre-Computed Camera Trajectory",permalink:"/Aria_data_tools/docs/howto/visualizing"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Instructions",id:"instructions",children:[{value:"1. Create an Aria Data Provider instance",id:"1-create-an-aria-data-provider-instance",children:[]},{value:"2. Select your VRS file",id:"2-select-your-vrs-file",children:[]},{value:"3. Set which sensor data the Project Aria Data Provider should read",id:"3-set-which-sensor-data-the-project-aria-data-provider-should-read",children:[]},{value:"4.  Set whether to print data layouts (optional)",id:"4--set-whether-to-print-data-layouts-optional",children:[]},{value:"5. Set how you want to read the data stream",id:"5-set-how-you-want-to-read-the-data-stream",children:[]},{value:"6. Access the data stream",id:"6-access-the-data-stream",children:[]},{value:"7. Loading device model",id:"7-loading-device-model",children:[]}]},{value:"How the Project Aria Data Provider works",id:"how-the-project-aria-data-provider-works",children:[]},{value:"How Project Aria players are configured",id:"how-project-aria-players-are-configured",children:[]},{value:"Project Aria <code>DataLayout</code> definitions",id:"project-aria-datalayout-definitions",children:[]}],m={toc:c};function p(e){var a=e.components,r=(0,o.Z)(e,i);return(0,n.mdx)("wrapper",(0,t.Z)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"accessing-project-aria-sensor-data"},"Accessing Project Aria Sensor Data"),(0,n.mdx)("h2",{id:"introduction"},"Introduction"),(0,n.mdx)("p",null,"The Project Aria Data Provider provides a customized way to retrieve and read data from ",(0,n.mdx)("a",{parentName:"p",href:"/Aria_data_tools/docs/aria-vrs"},"VRS")," files in an intuitive and effective way."),(0,n.mdx)("p",null,"Project Aria data can also be loaded by reading VRS files directly, using ",(0,n.mdx)("a",{parentName:"p",href:"https://facebookresearch.github.io/vrs/"},"VRS tools")," or other tools that leverage VRS APIs. This page contains instructions for the most common uses of Project Aria Data Provider and then describes how we have used VRS."),(0,n.mdx)("h2",{id:"instructions"},"Instructions"),(0,n.mdx)("p",null,"Use the following commands in Python3 to retrieve and read sensor data from VRS."),(0,n.mdx)("h3",{id:"1-create-an-aria-data-provider-instance"},"1. Create an Aria Data Provider instance"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},">> import pyark.datatools as datatools\n>> vrs_data_provider = datatools.dataprovider.AriaVrsDataProvider()\n")),(0,n.mdx)("h3",{id:"2-select-your-vrs-file"},"2. Select your VRS file"),(0,n.mdx)("p",null,"Enter the name (and path if you are in a different directory) for the VRS file you wish to read. Here it is represented as \u2018recording.vrs\u2019."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},">> vrs_data_provider.openFile(\u2018recording.vrs\u2019)\n")),(0,n.mdx)("h3",{id:"3-set-which-sensor-data-the-project-aria-data-provider-should-read"},"3. Set which sensor data the Project Aria Data Provider should read"),(0,n.mdx)("h4",{id:"by-high-level-api"},"By high-level API"),(0,n.mdx)("p",null,"Use ",(0,n.mdx)("inlineCode",{parentName:"p"},"vrs_data_provider")," to set which sensor stream/s the Aria Data Provider should read. The available sensor stream is constructed by ",(0,n.mdx)("inlineCode",{parentName:"p"},"set"),(0,n.mdx)("em",{parentName:"p"},(0,n.mdx)("inlineCode",{parentName:"em"},"<streamType>")),(0,n.mdx)("inlineCode",{parentName:"p"},"Player")),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"See ",(0,n.mdx)("a",{parentName:"li",href:"/Aria_data_tools/docs/sensors-measurements"},"Sensors and Measurements")," for a list of all the stream types.")),(0,n.mdx)("p",null,"This example is for SLAM left camera:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},">> vrs_data_provider.setSlamLeftCameraPlayer()\n")),(0,n.mdx)("h4",{id:"or-by-streamid"},"Or by StreamId"),(0,n.mdx)("p",null,"Use the following commands if you wish to set this directly using the VRS ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/vrs/tree/main/vrs"},"StreamId"),"."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},">> slam_camera_recordable_type_id = 1201\n>> slam_left_camera_instance_id = 1\n>> slam_left_camera_stream_id = datatools.dataprovider.StreamId(slam_camera_recordable_type_id, slam_left_camera_instance_id)\n>> vrs_data_provider.setStreamPlayer(slam_left_camera_stream_id)\n")),(0,n.mdx)("h3",{id:"4--set-whether-to-print-data-layouts-optional"},"4.  Set whether to print data layouts (optional)"),(0,n.mdx)("p",null,"By default data layouts are not printed while reading records. Set the verbosity to True to print data layouts and False to not print data layouts:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},">> vrs_data_provider.setVerbose(True)\n")),(0,n.mdx)("h3",{id:"5-set-how-you-want-to-read-the-data-stream"},"5. Set how you want to read the data stream"),(0,n.mdx)("p",null,"All records in timestamp order:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},">> vrs_data_provider.readAllRecords()\n4822.486 Camera Data (SLAM) #1 [1201-1]: jpg, 44338 bytes. # JPEG compressed image data size before decompression\n...\n4832.286 Camera Data (SLAM) #1 [1201-1]: jpg, 64148 bytes.\n4832.386 Camera Data (SLAM) #1 [1201-1]: jpg, 64174 bytes.\n")),(0,n.mdx)("p",null,"Or read a single data record by timestamp:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},">> vrs_data_provider.readDataRecordByTime(slam_left_camera_stream_id, someTimestamp)\n")),(0,n.mdx)("h3",{id:"6-access-the-data-stream"},"6. Access the data stream"),(0,n.mdx)("p",null,"Once you\u2019ve read and stored records in the players. All streams have configuration and data records."),(0,n.mdx)("p",null,"You can access:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"getConfigRecord()")," -  one per stream."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"getDataRecord()")," - All streams use data records to store information"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"getData()")," - Audio and image streams only. This accesses data from content blocks that contain raw image and audio data")),(0,n.mdx)("p",null,"To find out what is in a configuration or data record, go to ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/vrs/tree/main/vrs/oss/aria"},"vrs/vrs/oss/aria"),". These definitions provide an overview of what information can be extracted for each stream from a Project Aria sequence."),(0,n.mdx)("p",null,"In this example, one SLAM left camera data record is accessed. What is read is defined by the records loaded when setting how to read the data stream."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},">>> slam_left_camera_player = vrs_data_provider.getSlamLeftCameraPlayer()\n>>> slam_left_camera_data_record = slam_left_camera_player.getDataRecord()\n>>> slam_left_camera_data_record.captureTimestampNs\n 4832385508212\n")),(0,n.mdx)("p",null,"In this example  ",(0,n.mdx)("inlineCode",{parentName:"p"},"getData()"),"  is used to get raw SLAM left camera data. Raw data is compressed into JPG formatting when it is read by the Aria visualization tool."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},">>> slam_left_camera_data = slam_left_camera_player.getData()\n>>> pixel_frame = slam_left_camera_data.pixelFrame\n>>> buffer = pixel_frame.getBuffer()\n>>> len(buffer)\n307200 # JPEG image data decompressed internally in AriaImageSensorPlayer\n# equal to SLAM camera image width (640) * image height(480)\n")),(0,n.mdx)("p",null,"In this example, ",(0,n.mdx)("inlineCode",{parentName:"p"},"getConfigRecord()")," is used to read the configuration records for the SLAM left Camera."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},">> vrs_data_provider.readFirstConfigurationRecord(slam_left_camera_stream_id)\n")),(0,n.mdx)("h3",{id:"7-loading-device-model"},"7. Loading device model"),(0,n.mdx)("p",null,"There are calibration strings for each image and motion stream. Reading the configuration record for any one of them will load the device model. Load the device model:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},">>> slam_left_camera_stream_id = slam_left_camera_player.getStreamId()\n>>> slam_left_camera_stream_id\n<pyark.datatools.dataprovider.StreamId object at 0x7f955808c270>\n>>> vrs_data_provider.readFirstConfigurationRecord(slam_left_camera_stream_id)\nTrue\n>>> vrs_data_provider.loadDeviceModel()\nTrue\n>>> device_model = vrs_data_provider.getDeviceModel()\n>>> device_model\n<pyark.datatools.sensors.DeviceModel object at 0x7f955808c2b0>\n")),(0,n.mdx)("p",null,"Then a 3D point from one sensor coordinate system can be transformed into another with:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},">>> import numpy as np\n>>> p_slamLeft = np.array([3.0, 2.0, 1.0])\n>>> p_imuRight = device_model.transform(p_slamLeft, 'camera-slam-left', 'imu-right')\n>>> p_imuRight\narray([ 3.32648252, -1.50695095, 1.10720445])\n")),(0,n.mdx)("p",null,"To find out more about Calibration go to ",(0,n.mdx)("a",{parentName:"p",href:"/Aria_data_tools/docs/howto/calibration"},"Using Project Aria Calibration Sensor Data")),(0,n.mdx)("h2",{id:"how-the-project-aria-data-provider-works"},"How the Project Aria Data Provider works"),(0,n.mdx)("p",null,"The Project Aria Data Provider uses  ",(0,n.mdx)("inlineCode",{parentName:"p"},"RecordFileReader")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"StreamPlayer")," classes to retrieve and read data from VRS files in an intuitive and effective way."),(0,n.mdx)("p",null,"Through the Project Aria Data Provider, a player is implemented for every Project Aria data stream. This player allows VRS configuration and data records to be stored and retrieved. The configuration and data record structure contents in each player are defined by the Project Aria ",(0,n.mdx)("inlineCode",{parentName:"p"},"DataLayout")," definitions."),(0,n.mdx)("p",null,"Project Aria VRS data provider class exposes the functionality needed to read and access Project Aria data intuitively. It enables:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Project Aria players to be configured correctly (see below)"),(0,n.mdx)("li",{parentName:"ul"},"Retrieving players and accessing their latest content, and handling the VRS operations required for all these actions internally."),(0,n.mdx)("li",{parentName:"ul"},"Utilizing the power of VRS tools for reading records via ",(0,n.mdx)("inlineCode",{parentName:"li"},"RecordFileReader")," wrapper functions.")),(0,n.mdx)("h2",{id:"how-project-aria-players-are-configured"},"How Project Aria players are configured"),(0,n.mdx)("p",null,"So that data layouts of a stream can be read, a ",(0,n.mdx)("inlineCode",{parentName:"p"},"RecordFileStreamPlayer")," instance for it has to be set in ",(0,n.mdx)("inlineCode",{parentName:"p"},"RecordFileReader"),". Using custom classes for each stream type that inherit ",(0,n.mdx)("inlineCode",{parentName:"p"},"RecordFileStreamPlayer")," allows reading configuration/data records in the VRS file by overriding ",(0,n.mdx)("inlineCode",{parentName:"p"},"RecordFileStreamPlayer::onDataLayoutRead")," function. Project Aria players that follow this pattern are open sourced under ",(0,n.mdx)("inlineCode",{parentName:"p"},"src/dataprovider/players"),"."),(0,n.mdx)("p",null,"Each player header file contains configuration and data record structure definitions, matching their stream data layout definitions. There are getter methods in the player classes to retrieve these records."),(0,n.mdx)("h2",{id:"project-aria-datalayout-definitions"},"Project Aria ",(0,n.mdx)("inlineCode",{parentName:"h2"},"DataLayout")," definitions"),(0,n.mdx)("p",null,"DataLayout definitions of the metadata blocks in Project Aria VRS files are open sourced under ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/vrs/tree/main/vrs/oss/aria"},"vrs/vrs/oss/aria"),". These definitions provide an overview of what information can be extracted for each stream from a Project Aria sequence."))}p.isMDXComponent=!0}}]);