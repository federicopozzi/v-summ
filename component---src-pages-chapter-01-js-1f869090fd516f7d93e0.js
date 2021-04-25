(self.webpackChunkv_summ=self.webpackChunkv_summ||[]).push([[301],{3600:function(e,t,o){"use strict";o.d(t,{r:function(){return n}});var r,a=o(7294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function n(e){return a.createElement("svg",i({width:31,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=a.createElement("path",{d:"M20 1v21M0 1h21M10.278 12.875l9.597 9.597 9.597-9.597",stroke:"#000",strokeWidth:2})))}},3190:function(e,t,o){"use strict";o.d(t,{r:function(){return n}});var r,a=o(7294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function n(e){return a.createElement("svg",i({width:106,height:134,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=a.createElement("path",{d:"M1 133L104.314 1M4.525 1L105 133",stroke:"#000",strokeWidth:2})))}},1662:function(e,t,o){"use strict";o.d(t,{Z:function(){return l}});var r=o(7294),a=o(3190),i=o(3600),n=o(7142),s=o(8037);function l(){var e=0;if("undefined"!=typeof window){var t=new URLSearchParams(window.location.search);e=void 0!==t.get("selected")?t.get("selected"):0}var o=n.Z[e],l=o.primo,d=o.colore,c=o.coloreBordo,m=o.rq;return r.createElement("div",null,r.createElement("div",{className:"container-fluid bg-primary"},r.createElement("div",{className:"row border-bottom border-1 "+c},r.createElement("div",{className:"col-11 fs-5 border-end border-2 "+c},r.createElement("div",{className:"row border-bottom py-3 px-3 border-2 "+c},r.createElement("p",null,l)),r.createElement("div",{className:d},r.createElement("p",{className:"fw-bold"},m))),r.createElement("div",{className:"col-1"},r.createElement(s.ZP,{to:"/"},r.createElement(a.r,{style:{transform:"scale(0.7)"}}))))),r.createElement("div",{className:"row border-bottom border-2 bg-light px-3 py-1 "+c},r.createElement("p",null,"VISUALIZATION",r.createElement(i.r,{style:{transform:"scale(0.6)"}}))))}},4121:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var r=o(7294),a=o(7142),i=o(3600);function n(){var e=0;if("undefined"!=typeof window){var t=new URLSearchParams(window.location.search);e=void 0!==t.get("selected")?t.get("selected"):0}var o=a.Z[e],n=o.aim,s=o.output,l=o.coloreBordo;return r.createElement("div",{className:"container-fluid"},r.createElement("div",{className:"row border-end border-bottom border-top bg-light py-1 "+l},r.createElement("p",null,"METODOLOGY",r.createElement(i.r,{style:{transform:"scale(0.6)"}}))),r.createElement("div",{className:"row bg-primary py-4"},r.createElement("div",{className:"col-2"},r.createElement("span",{className:"fs-2 text-decoration-underline"},"aim")),r.createElement("div",{className:"col-10"},r.createElement("p",{className:"fs-2"},n)),r.createElement("div",{className:"col-2"},r.createElement("span",{className:"fs-2 text-decoration-underline"},"output")),r.createElement("div",{className:"col-10"},r.createElement("p",{className:"fs-2"}," ",s))))}},2591:function(e,t,o){"use strict";o.d(t,{Z:function(){return i}});var r=o(7294),a=o(7142);function i(){var e=0;if("undefined"!=typeof window){var t=new URLSearchParams(window.location.search);e=void 0!==t.get("selected")?t.get("selected"):0}var o=a.Z[e].viz;return r.createElement("img",{src:o,className:"img-fluid",alt:"Responsive image",height:"100"})}},4632:function(e,t,o){"use strict";o.d(t,{Hy:function(){return r},S6:function(){return a},nS:function(){return i},rj:function(){return s}});var r=[{title:"STEPS"},{title:"WHAT’S IT FOR"},{title:"TOOLS"},{title:"DETAILS AND MATERIALS"}],a=[{step:"SCRAPING"},{step:"DATA EXPLORATION"},{step:"DATA PREPARATION"},{step:"URLS CREATION"},{step:"RENAMING THE NEW COLUMN"},{step:"DOWNLOAD VIDEOS"},{step:"COLLECTING VIDEOS IN A NEW FOLDER"},{step:"FRAME EXTRACTIONS BY CHANGE OF SCENE"},{step:"COLLECTING ALL FRAMES IN THE FOLDER OF THE VIDEO THEY BELONG TO"},{step:"RENAMING ALL THE FRAMES IN ORDER OF THE VIDEO VIEWS THEY BELONG (NOT MANDATORY)"},{step:"REORDERING ALL THE FRAMES IN A NEW FOLDER"},{step:"CREATION OF A VECTOR SPACE WITH ALL THE FRAMES"},{step:"CHOOSE THE VIEW ON PIXPLOT"},{step:"EXPORT THE VISUALISATION"},{step:"ANNOTATE THE VISUALISATION "}],i=[{what:"GET A LIST OF VIDEOS FOR EACH CHOSEN QUERY AND SELECTED TIME-FRAME"},{what:"OPEN THE YOUTUBE DATA TOOL (YDT) CSV DOWNLOADED AND EXPLORE THE DATA"},{what:"FILTER THE LIST IN ORDER OF VIEWS TO TAKE THE FIRST 50 VIDEOS AS SAMPLES"},{what:"INSIDE THE YDT.CSV THERE ARE ONLY THE VIDEOS ID, BUT YOU NEED THE URL TO DOWNLOAD THEM"},{what:"TO KEEP TRACK OF THE NEW COLUMN IN WHICH WE HAVE ALL THE VIDEOS URLS"},{what:"DOWNLOAD THE VIDEO SAMPLE QUICKLY AND AUTOMATICALLY"},{what:"IT’S IMPORTANT FOR THE NEXT SCRIPT THAT THE FOLDER CONTAINS ONLY THE DOWNLOADED VIDEOS"},{what:"* THE SCRIPT EXTRACTS THREE FRAMES EVERY SCENE CHANGE"},{what:"THE DETECT.PY SCRIPT CREATES A SUBFOLDER FOR EACH VIDEO IN WHICH IT INSERTS ALL THE DETECTED FRAMES."},{what:"IF YOU WANT TO KEEP TRACK OF THE ORDER OF VIDEOS BY VIEWS IN THE VISUALIZATION"},{what:"THE NEXT STEP REQUIRES HAVING THE FRAMES OF ALL THE VIDEOS IN ONE FOLDER"},{what:"ANALYSING THE VISUAL AND THEMATIC SIMILARITY OF FRAMES"},{what:"FOR THIS METHOD CHOOSE THE VIEW: CLUSTER IMAGES by umap dimensionality reduction in a frame network"},{what:'TAKE A SCREENSHOT OR USE THE "SAVE AS" COMMAND TO OBTAIN A STATIC IMAGE ON WHICH TO MAKE ANNOTATIONS.'}],n="bianco",s=[{tool:"Youtube Data Tools",arrow:" ⟶ ",quadre:"[Video List]",sfondo:n},{tool:"Excel",arrow:" ⟶ ",quadre:"[Import Data]",sfondo:n},{tool:"Excel",arrow:" ⟶ ",quadre:"[Filter-Discending]",sfondo:n},{tool:"Excel",arrow:" ⟶ ",quadre:"=CONCATENA(E2;F2)",sfondo:n},{tool:"Excel",arrow:" ",quadre:"",sfondo:n},{tool:"Python 3",arrow:" ⟶ ",quadre:"[PyTube3]",sfondo:n},{tool:"",arrow:"No tool needed",quadre:"",sfondo:""},{tool:"Python 3",arrow:" ⟶ ",quadre:"[PySceneDetect]",sfondo:n},{tool:"",arrow:"No tool needed",quadre:"",sfondo:""},{tool:"",arrow:"No tool needed",quadre:"",sfondo:""},{tool:"",arrow:"No tool needed",quadre:"",sfondo:""},{tool:"Anaconda + Python3 + Pixplot",arrow:"  ",quadre:"",sfondo:n},{tool:"Pixplot",arrow:"  ",quadre:"",sfondo:n},{tool:"Pixplot",arrow:"  ",quadre:"",sfondo:n},{tool:"Figma",arrow:"  ",quadre:"",sfondo:n}]},7142:function(e,t,o){"use strict";o.d(t,{Z:function(){return l}});var r=o.p+"static/ch01-5ab445226241d04e534a9a72a0d9f795.png",a="row border-danger py-3 px-3",i={primo:"Visualising main themes in each video to compare the content of two collections of videos.",rq:"RQ: How are themes distributed in each Amazon Fires related Youtube?",aim:"In this type of analysis, we move from an overview of the frames in the whole collection to a view of the frames for each video. The aim is to be able to compare the contents of two collections of videos based on the thematic clusters found in each video. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once and there are no duplicates due to scene length. All frames of a video are analysed with Pixplot and arranged in a UMAP grid based on their visual similarity. The different thematic clusters in each grid are highlighted with colour areas using Figma.",colore:"blu "+a,coloreBordo:"border-secondary",output:"The final visualisation consists of a series of matrices representing the videos, where the thematic components that are discussed in the video are represented with different colours.. This type of visualization allows a summary comparison of the thematic contents among the videos of two different collections."},n={primo:"Detecting and visualising the amount of human figures within one or more collections of videos and recognise the different formats.",rq:"RQ: How relevant is the presence of human figures in the Amazon Fires related YouTube videos?",aim:"This type of analysis can help to recognise different formats where human figures are particularly relevant, such as interviews or news anchors. Applying this method to two different video collections helps us to compare them in terms of the presence of human figures and types of formats. The model used for the extraction of human figures from each frame is DeepLabv3. To perform this type of analysis it is necessary to extract the frames at regular time intervals so as to also record the length of the scenes in which human figures are present and preserve the original length of each video in the final visualisation.",colore:"rosa "+a,coloreBordo:"border-info",output:"The final visualisation is made up of the 20 frame grids of the videos, divided by collection, and allows a direct comparison in terms of the presence of human figures and video formats (news anchors, interviews, image montage). it is possible to explore the videos more closely by selecting one collection."},s={primo:"Recognising the main humans faces in a collection of videos and visually quantifying  their presence.",rq:"RQ: Which are the most recognisable faces in the Amazon Fires related Youtube videos?",viz:o.p+"static/ch04-43772c4a54a0eb1f3ae252df7208a1d8.png",colore:"giallo "+a,coloreBordo:"border-warning",aim:"This type of analysis allows us to recognise the faces of human figures and to recognise those most present within a collection of videos. The segmentation model used on RunwayML removes the background from images featuring people. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once and there are no duplicates due to scene length.",output:"The final visualisation is a catalogue of faces of human figures, resized by the amount of presence in the analysed videos, and clustered by type (e.g. politicians, bloggers, natives)."},l=[{primo:"Identifying and visualising the main themes emerging from a video collection of videos.",rq:"RQ: Which are the main themes (based on number of scenes) in the Amazon Fires related YouTube videos?",viz:r,colore:"verde "+a,coloreBordo:"border-danger",aim:"This method aims to identify which are the main themes emerging within\n              a collection of videos. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once\n              and there are no duplicates due to scene length. The layout used to arrange the frames according to their visual similarity is offered by Pixplot, which uses UMAP projection, a dimensionality reduction algorithm, specifically designed for visualising complex data in low dimensions (2D or 3D).\n",output:"The final visualisation is a clusterisation of frames sorted by visual similarity that allows the identification of predominant thematic clusters within the analysed video collection. The thematic annotations of the visualisation were drawn following the boundaries identified by the original Pixplot visualisation."},{primo:"sottocapitolo1 of videos.",rq:"RQ: Which are the main themes dvsved the Amazon Fires related YouTube videos?",viz:o.p+"static/subCh01.1-0c95ef32543140b9dc69d9abd50a338c.png",colore:"row border-danger py-3 px-3 verde",coloreBordo:"border-danger",aim:"This method aims to identify which are the main themes emerging within\n              a collection of videos. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once\n              and there are no duplicates due to scene length. The layout used to arrange the frames according to their visual similarity is offered by Pixplot, which uses UMAP projection, a dimensionality reduction algorithm, specifically designed for visualising complex data in low dimensions (2D or 3D).\n",output:"The final visualisation is a clusterization of frames sorted by visual similarity that allows the identification of predominant thematic clusters within the analysed video collection. The thematic annotations of the visualisation were drawn following the boundaries identified by the original Pixplot visualisation."},{primo:"sottocapitolo2 of videos.",rq:"RQ: Which are the main themes dvsved the Amazon Fires related YouTube videos?",viz:o.p+"static/subCh01.2-f96af91fd000667c9f43eabc20982be2.png",colore:"row border-danger py-3 px-3 verde",coloreBordo:"border-danger",aim:"This method aims to identify which are the main themes emerging within\n              a collection of videos. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once\n              and there are no duplicates due to scene length. The layout used to arrange the frames according to their visual similarity is offered by Pixplot, which uses UMAP projection, a dimensionality reduction algorithm, specifically designed for visualising complex data in low dimensions (2D or 3D).\n",output:"The final visualisation is a clusterization of frames sorted by visual similarity that allows the identification of predominant thematic clusters within the analysed video collection. The thematic annotations of the visualisation were drawn following the boundaries identified by the original Pixplot visualisation."},i,n,s]},4854:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return c}});var r=o(7294),a=o(1662),i=o(2591),n=o(4632),s=o(3600);o(7142);function l(){var e=0;if("undefined"!=typeof window){var t=new URLSearchParams(window.location.search);e=void 0!==t.get("selected")?t.get("selected"):0}var o=[{a:"HIGHLIGHTING THEMATIC CLUSTER "},{a:"HIGHLIGHTING THEMATIC CLUSTER '"},{a:"DESTRUCTURING THE GRID (SEE HOW IN THE SLIDER ↑) AND HIGHLIGHTING THEMATIC CLUSTER"}][e].a,a="bg-danger",i=[{pillola:"vid1",colore:a},{pillola:"vid2",colore:a},{pillola:"vid3",colore:a},{pillola:"vid4",colore:a}],l=[{pillola:"frame1",colore:a},{pillola:"frame2",colore:a},{pillola:"frame3",colore:a},{pillola:"frame4",colore:a},{pillola:"frame5",colore:a}],d="“Amazon Fires” - “Pray for Amazonia”",c="E2 ⟩ http://www.youtube.com/watch?v=",m="F2 ⟶ videoId",h="videoUrl",E="LINK TO PYTHON3 DOCUMENTATION",u="LINK TO PYTUBE3 DOCUMENTATION",p="LINK TO REPOSITORY AND STEP-BY-STEP GUIDE",f="LINK TO PYSCENEDETECT DOCUMENTATION",b="LINK TO REPOSITORY AND STEP-BY-STEP GUIDE",T="LINK TO INSTALL ANACONDA",g="LINK TO PIXPLOT DOCUMENTATION",v="LINK TO REPOSITORY AND STEP-BY-STEP GUIDE",N="LINK TO DOWNLOAD FIGMA";return r.createElement("div",{className:"container-fluid pt-3 bg-primary"},r.createElement("div",{className:"row "},n.Hy.map((function(e,t){var o=e.title;return r.createElement("div",{className:"col-3 border-end border-danger border-bottom border-top bg-light py-1",key:t},o,r.createElement(s.r,{style:{transform:"scale(0.6)"}}))}))),r.createElement("div",{className:"row "},r.createElement("div",{className:"col-3 padding"},n.S6.map((function(e,t){var o=e.step;return r.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-danger border-bottom border-top bg-primary px-2",key:t},r.createElement("span",{className:"fw-bold"},o))}))),r.createElement("div",{className:"col-3 padding"},n.nS.map((function(e,t){var o=e.what;return r.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-danger border-bottom border-top bg-primary px-2",key:t},o)})),r.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-danger border-bottom border-top bg-primary px-2"},o)),r.createElement("div",{className:"col-3 padding"},n.rj.map((function(e,t){var o=e.tool,a=e.sfondo,i=e.arrow,n=e.quadre;return r.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-danger border-bottom border-top bg-primary px-2 "+a,key:t},r.createElement("span",{className:"fw-bold"},o),i,n)}))),r.createElement("div",{className:"col-3 padding"},r.createElement("div",{style:{height:"5rem"},className:"bianco col-12 border-end border-danger border-bottom border-top bg-primary px-2"},d),r.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-danger border-bottom border-top bg-primary px-2"},[{pill:"videoId"},{pill:"videoTitle"}].map((function(e,t){var o=e.pill;return r.createElement("span",{className:"badge rounded-pill bg-light text-dark mx-2"},o)}))),r.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-danger border-bottom border-top bg-primary px-2"}),r.createElement("div",{style:{height:"5rem"},className:"bianco col-12 border-end border-danger border-bottom border-top bg-primary px-2"},r.createElement("p",null,c),r.createElement("p",null,m)),r.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-danger border-bottom border-top bg-primary px-2"},r.createElement("span",{className:"badge rounded-pill bg-light text-dark mx-2"},h)),r.createElement("div",{style:{height:"5rem"},className:"display-5 bianco col-12 border-end border-danger border-bottom border-top bg-primary px-2"},r.createElement("p",{className:"text-decoration-underline "},E),r.createElement("p",{className:"text-decoration-underline pt-1"},u),r.createElement("p",{className:"text-decoration-underline pt-1"},p)),r.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-danger border-bottom border-top bg-primary px-2"},r.createElement("p",{className:"fw-bold"},"Rename the videos inside the folder like this:"),i.map((function(e,t){var o=e.pillola,a=e.colore;return r.createElement("span",{className:"badge rounded-pill text-dark mx-2 "+a},o)}))),r.createElement("div",{style:{height:"5rem"},className:"display-5 bianco col-12 border-end border-danger border-bottom border-top bg-primary px-2"},r.createElement("p",{className:"text-decoration-underline"},f),r.createElement("p",{className:"text-decoration-underline pt-1"},b)),r.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-danger border-bottom border-top bg-primary px-2"},r.createElement("p",{className:"fw-bold"},"Rename the frames inside the folder like this:"),l.map((function(e,t){var o=e.pillola,a=e.colore;return r.createElement("span",{className:"badge rounded-pill text-dark mx-2 "+a},o)}))),r.createElement("div",{style:{height:"5rem"},className:"display-5 bianco col-12 border-end border-danger border-bottom border-top bg-primary px-2"},r.createElement("p",{className:"text-decoration-underline"},T),r.createElement("p",{className:"text-decoration-underline pt-1"},g),r.createElement("p",{className:"text-decoration-underline pt-1"},v)),r.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-danger border-bottom border-top bg-primary px-2"}),r.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-danger border-bottom border-top bg-primary px-2"}),r.createElement("div",{style:{height:"5rem"},className:"display-5 bianco col-12 border-end border-danger border-bottom border-top bg-primary px-2"},r.createElement("p",{className:"text-decoration-underline"},N)))))}var d=o(4121);function c(){return r.createElement("div",null,r.createElement(a.Z,null),r.createElement("div",{className:"bg-primary"},r.createElement(i.Z,null)),r.createElement(l,null),r.createElement(d.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-chapter-01-js-1f869090fd516f7d93e0.js.map