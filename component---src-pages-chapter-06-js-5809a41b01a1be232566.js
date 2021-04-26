(self.webpackChunkv_summ=self.webpackChunkv_summ||[]).push([[224],{3600:function(e,t,o){"use strict";o.d(t,{r:function(){return n}});var a,r=o(7294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function n(e){return r.createElement("svg",i({width:31,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=r.createElement("path",{d:"M20 1v21M0 1h21M10.278 12.875l9.597 9.597 9.597-9.597",stroke:"#000",strokeWidth:2})))}},3190:function(e,t,o){"use strict";o.d(t,{r:function(){return n}});var a,r=o(7294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function n(e){return r.createElement("svg",i({width:106,height:134,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=r.createElement("path",{d:"M1 133L104.314 1M4.525 1L105 133",stroke:"#000",strokeWidth:2})))}},1662:function(e,t,o){"use strict";o.d(t,{Z:function(){return l}});var a=o(7294),r=o(3190),i=o(3600),n=o(7142),s=o(8037);function l(){var e=0;if("undefined"!=typeof window){var t=new URLSearchParams(window.location.search);e=void 0!==t.get("selected")?t.get("selected"):0}var o=n.Z[e],l=o.primo,c=o.colore,d=o.coloreBordo,m=o.rq;return a.createElement("div",null,a.createElement("div",{className:"container-fluid bg-primary"},a.createElement("div",{className:"row border-bottom border-1 "+d},a.createElement("div",{className:"col-11 fs-5 border-end border-2 "+d},a.createElement("div",{className:"row border-bottom py-3 px-3 border-2 "+d},a.createElement("p",null,l)),a.createElement("div",{className:c},a.createElement("p",{className:"fw-bold"},m))),a.createElement("div",{className:"col-1"},a.createElement(s.ZP,{to:"/home"},a.createElement(r.r,{style:{transform:"scale(0.7)"}}))))),a.createElement("div",{className:"row border-bottom border-2 bg-light px-3 py-1 "+d},a.createElement("p",null,"VISUALIZATION",a.createElement(i.r,{style:{transform:"scale(0.6)"}}))))}},4121:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var a=o(7294),r=o(7142),i=o(3600);function n(){var e=0;if("undefined"!=typeof window){var t=new URLSearchParams(window.location.search);e=void 0!==t.get("selected")?t.get("selected"):0}var o=r.Z[e],n=o.aim,s=o.output,l=o.coloreBordo;return a.createElement("div",{className:"container-fluid"},a.createElement("div",{className:"row border-end border-bottom border-top bg-light py-1 "+l},a.createElement("p",null,"METODOLOGY",a.createElement(i.r,{style:{transform:"scale(0.6)"}}))),a.createElement("div",{className:"row bg-primary py-4"},a.createElement("div",{className:"col-2"},a.createElement("span",{className:"fs-2 text-decoration-underline"},"aim")),a.createElement("div",{className:"col-10"},a.createElement("p",{className:"fs-2"},n)),a.createElement("div",{className:"col-2 pt-5"},a.createElement("span",{className:"fs-2 text-decoration-underline"},"output")),a.createElement("div",{className:"col-10 pt-5"},a.createElement("p",{className:"fs-2"}," ",s))))}},4632:function(e,t,o){"use strict";o.d(t,{Hy:function(){return a},S6:function(){return r},nS:function(){return i},rj:function(){return s}});var a=[{title:"STEPS"},{title:"WHAT’S IT FOR"},{title:"TOOLS"},{title:"DETAILS AND MATERIALS"}],r=[{step:"SCRAPING"},{step:"DATA EXPLORATION"},{step:"DATA PREPARATION"},{step:"URLS CREATION"},{step:"RENAMING THE NEW COLUMN"},{step:"DOWNLOAD VIDEOS"},{step:"COLLECTING VIDEOS IN A NEW FOLDER"},{step:"FRAME EXTRACTIONS BY CHANGE OF SCENE"},{step:"COLLECTING ALL FRAMES IN THE FOLDER OF THE VIDEO THEY BELONG TO"},{step:"RENAMING ALL THE FRAMES IN ORDER OF THE VIDEO VIEWS THEY BELONG (NOT MANDATORY)"},{step:"REORDERING ALL THE FRAMES IN A NEW FOLDER"},{step:"CREATION OF A VECTOR SPACE WITH ALL THE FRAMES"},{step:"CHOOSE THE VIEW ON PIXPLOT"},{step:"EXPORT THE VISUALISATION"},{step:"ANNOTATE THE VISUALISATION "}],i=[{what:"GET A LIST OF VIDEOS FOR EACH CHOSEN QUERY AND SELECTED TIME-FRAME"},{what:"OPEN THE YOUTUBE DATA TOOL (YDT) CSV DOWNLOADED AND EXPLORE THE DATA"},{what:"FILTER THE LIST IN ORDER OF VIEWS TO TAKE THE FIRST 50 VIDEOS AS SAMPLES"},{what:"INSIDE THE YDT.CSV THERE ARE ONLY THE VIDEOS ID, BUT YOU NEED THE URL TO DOWNLOAD THEM"},{what:"TO KEEP TRACK OF THE NEW COLUMN IN WHICH WE HAVE ALL THE VIDEOS URLS"},{what:"DOWNLOAD THE VIDEO SAMPLE QUICKLY AND AUTOMATICALLY"},{what:"IT’S IMPORTANT FOR THE NEXT SCRIPT THAT THE FOLDER CONTAINS ONLY THE DOWNLOADED VIDEOS"},{what:"* THE SCRIPT EXTRACTS THREE FRAMES EVERY SCENE CHANGE"},{what:"THE DETECT.PY SCRIPT CREATES A SUBFOLDER FOR EACH VIDEO IN WHICH IT INSERTS ALL THE DETECTED FRAMES."},{what:"IF YOU WANT TO KEEP TRACK OF THE ORDER OF VIDEOS BY VIEWS IN THE VISUALIZATION"},{what:"THE NEXT STEP REQUIRES HAVING THE FRAMES OF ALL THE VIDEOS IN ONE FOLDER"},{what:"ANALYSING THE VISUAL AND THEMATIC SIMILARITY OF FRAMES"},{what:"FOR THIS METHOD CHOOSE THE VIEW: CLUSTER IMAGES by umap dimensionality reduction in a frame network"},{what:'TAKE A SCREENSHOT OR USE THE "SAVE AS" COMMAND TO OBTAIN A STATIC IMAGE ON WHICH TO MAKE ANNOTATIONS.'}],n="bianco",s=[{tool:"Youtube Data Tools",arrow:" ⟶ ",quadre:"[Video List]",sfondo:n},{tool:"Excel",arrow:" ⟶ ",quadre:"[Import Data]",sfondo:n},{tool:"Excel",arrow:" ⟶ ",quadre:"[Filter-Discending]",sfondo:n},{tool:"Excel",arrow:" ⟶ ",quadre:"=CONCATENA(E2;F2)",sfondo:n},{tool:"Excel",arrow:" ",quadre:"",sfondo:n},{tool:"Python 3",arrow:" ⟶ ",quadre:"[PyTube3]",sfondo:n},{tool:"",arrow:"No tool needed",quadre:"",sfondo:""},{tool:"Python 3",arrow:" ⟶ ",quadre:"[PySceneDetect]",sfondo:n},{tool:"",arrow:"No tool needed",quadre:"",sfondo:""},{tool:"",arrow:"No tool needed",quadre:"",sfondo:""},{tool:"",arrow:"No tool needed",quadre:"",sfondo:""},{tool:"Anaconda + Python3 + Pixplot",arrow:"  ",quadre:"",sfondo:n},{tool:"Pixplot",arrow:"  ",quadre:"",sfondo:n},{tool:"Pixplot",arrow:"  ",quadre:"",sfondo:n},{tool:"Figma",arrow:"  ",quadre:"",sfondo:n}]},7142:function(e,t,o){"use strict";o.d(t,{Z:function(){return m}});var a=o.p+"static/ch01-5ab445226241d04e534a9a72a0d9f795.png",r=o.p+"static/ch04-43772c4a54a0eb1f3ae252df7208a1d8.png",i="row border-danger py-3 px-3",n={primo:"Visualising main themes in each video to compare the content of two collections of videos.",rq:"RQ: How are themes distributed in each Amazon Fires related Youtube?",aim:"In this type of analysis, we move from an overview of the frames in the whole collection to a view of the frames for each video. The aim is to be able to compare the contents of two collections of videos based on the thematic clusters found in each video. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once and there are no duplicates due to scene length. All frames of a video are analysed with Pixplot and arranged in a UMAP grid based on their visual similarity. The different thematic clusters in each grid are highlighted with colour areas using Figma.",colore:"blu "+i,coloreBordo:"border-secondary",output:"The final visualisation consists of a series of matrices representing the videos, where the thematic components that are discussed in the video are represented with different colours.. This type of visualization allows a summary comparison of the thematic contents among the videos of two different collections."},s={primo:"Detecting and visualising the amount of human figures within one or more collections of videos and recognise the different formats.",rq:"RQ: How relevant is the presence of human figures in the Amazon Fires related YouTube videos?",aim:"This type of analysis can help to recognise different formats where human figures are particularly relevant, such as interviews or news anchors. Applying this method to two different video collections helps us to compare them in terms of the presence of human figures and types of formats. The model used for the extraction of human figures from each frame is DeepLabv3. To perform this type of analysis it is necessary to extract the frames at regular time intervals so as to also record the length of the scenes in which human figures are present and preserve the original length of each video in the final visualisation.",colore:"rosa "+i,coloreBordo:"border-info",output:"The final visualisation is made up of the 20 frame grids of the videos, divided by collection, and allows a direct comparison in terms of the presence of human figures and video formats (news anchors, interviews, image montage). it is possible to explore the videos more closely by selecting one collection."},l={primo:"Recognising the main humans faces in a collection of videos and visually quantifying  their presence. ",rq:"RQ: Which are the most recognisable faces in the Amazon Fires related Youtube videos?",viz:r,colore:"giallo "+i,coloreBordo:"border-warning",aim:"This type of analysis allows us to recognise the faces of human figures and to recognise those most present within a collection of videos. The segmentation model used on RunwayML removes the background from images featuring people. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once and there \nare no duplicates due to scene length.",output:"The final visualisation is a catalogue of faces of human figures, resized \nby the amount of presence in the analysed videos, and clustered by type \n(e.g. politicians, bloggers, natives).\n"},c={primo:"Analysing the color palettes in a collection of videos.",rq:"RQ: Which are the visual tones of the most-watched Amazon fires related YouTube videos?",viz:r,colore:"rossino "+i,coloreBordo:"border-success",aim:"This type of analysis allows videos to be analysed in a three-dimensional space based on hue, saturation and brightness. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once and there are no duplicates due to scene length. The algorithm used for the analysis in three-dimensional space is Stack 3D Surface Plot, a plug-in of ImageJ software.",output:"The final visualisation is made up of gifs, each of which contains all the plotted frames of a video. The gifs are divided into two sections according to the collection they belong. By clicking on each gif it is possible to explore in detail the grid of static frames plotted in order of video reproduction. "},d={primo:"How to recompose the mood of one or more collections of videos ",rq:"RQ: Which are the moods of the most-watched amazon fires related YT videos?",viz:r,colore:"bianco "+i,coloreBordo:"border-white",aim:"This type of analysis recomposes the more emotional aspect of the videos, combining dynamic images, voices and sounds. In this way it is possible \nto enjoy a summary story composed of several videos and to quickly compare the moods of videos belonging to different collections. The videos are superimposed with an opacity of 40% to allow all of them to be watched simultaneously.  The audio of each video is also overlapped. \n",output:"The final output is a montage of five videos that creates a new single video in which images and voices are mixed together with no hierarchy."},m=[{primo:"Identifying and visualising the main themes emerging from a video collection of videos.",rq:"RQ: Which are the main themes (based on number of scenes) in the Amazon Fires related YouTube videos?",viz:a,colore:"verde "+i,coloreBordo:"border-danger",aim:"This method aims to identify which are the main themes emerging within\n              a collection of videos. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once\n              and there are no duplicates due to scene length. The layout used to arrange the frames according to their visual similarity is offered by Pixplot, which uses UMAP projection, a dimensionality reduction algorithm, specifically designed for visualising complex data in low dimensions (2D or 3D).\n",output:"The final visualisation is a clusterisation of frames sorted by visual similarity that allows the identification of predominant thematic clusters within the analysed video collection. The thematic annotations of the visualisation were drawn following the boundaries identified by the original Pixplot visualisation."},{primo:"Analysing and visualising links between thematic clusters related to different videos.",rq:"RQ: How are the main themes in the Amazon Fires related Youtube video connected to each other?",viz:o.p+"static/subCh01.1-0c95ef32543140b9dc69d9abd50a338c.png",colore:"row border-danger py-3 px-3 verde",coloreBordo:"border-danger",aim:"This method aims to identify the connections between the main themes within a collection of videos. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once and there are no duplicates due to scene length. The layout used to arrange the frames according to their visual similarity is offered by Pixplot, which uses UMAP projection, a dimensionality reduction algorithm, specifically designed for visualising complex data in low dimensions (2D or 3D).",output:"The final visualisation is a network of frames organised by visual similarity, which makes it possible to recognise and annotate the connection between different thematic clusters based on their proximity, and the contamination of themes within a non-related cluster."},{primo:"Analysinge the relevance of different themes (in terms of the number of frames) in a collection of videos.",rq:"RQ: Which are the most relevant themes (based on number of frames) in the Amazon Fires related Youtube videos?",viz:o.p+"static/subCh01.2-f96af91fd000667c9f43eabc20982be2.png",colore:"row border-danger py-3 px-3 verde",coloreBordo:"border-danger",aim:"This method aims to quantify the presence of thematic clusters in terms of number of frames in a collection of videos, to understand which themes are most represented within that collection. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once and there are no duplicates due to scene length.",output:"The final visualisation results from the deconstruction of a UMAP grid in which frames are organised by their visual similarity. The grid deconstruction process is guided by the areas of frames belonging to the same cluster, the contours of these areas are traced and new clipping masks are created. \nThe colour highlights the differences between clusters and the size of the blocks communicates the number of frames related to each cluster. "},n,s,l,c,d]},6086:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return D}});var a,r=o(7294),i=o(1662),n=o(4121),s=o(9017);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function c(e){return r.createElement("svg",l({width:16,height:144,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=r.createElement("path",{d:"M15 132.614v-1.74l-14 5.62v1.78l14 5.64v-1.72l-3.42-1.34v-6.9l3.42-1.34zm-4.8 7.7l-7.4-2.92 7.4-2.9v5.82zM1 117.086l12.26 4.68-12.26 4.7v2.38h14v-1.58H3l12-4.6v-1.76l-12.02-4.62H15v-1.6H1v2.4zm14-15.741v-1.74l-14 5.62v1.78l14 5.64v-1.72l-3.42-1.34v-6.9l3.42-1.34zm-4.8 7.7l-7.4-2.92 7.4-2.9v5.82zm3.38-12.828l-11.22-8.38H1v10.14h1.42v-8.2l11.2 8.4H15v-10.44h-1.42v8.48zm1.62-17.262c0-3.98-3.02-6.86-7.2-6.86-4.2 0-7.22 2.88-7.22 6.86 0 4 3.02 6.88 7.22 6.88 4.18 0 7.2-2.88 7.2-6.88zm-1.42 0c0 3.06-2.42 5.24-5.78 5.24-3.38 0-5.8-2.18-5.8-5.24s2.42-5.22 5.8-5.22c3.36 0 5.78 2.16 5.78 5.22zM1 59.99h11.76L1 67.41v2.08h14v-1.6H3.06L15 60.37v-1.98H1v1.6zm1.42-17.818H1v8.9h14v-1.64H9v-6.44H7.58v6.44H2.42v-7.26zM15 39.745v-1.64H1v1.64h14zm-3.64-14.323c-1.42.32-2.34 1-2.84 2.12-.54-1.66-1.84-2.64-3.62-2.64-2.38 0-3.9 1.74-3.9 4.46v5.48h14v-1.64H9.02v-2.98c0-1.8.78-2.78 2.56-3.18l3.42-.76v-1.66l-3.64.8zm-3.74 7.78h-5.2v-3.8c0-1.74 1.02-2.86 2.6-2.86s2.6 1.12 2.6 2.9v3.76zm5.96-12.812H8.54v-6.78H7.12v6.78h-4.7v-7.52H1v9.16h14v-9.28h-1.42v7.64zM15.2 5.834c0-3.22-1.58-5.36-4.08-5.36-5.74 0-2.42 8.44-6.54 8.44-1.38 0-2.4-1.22-2.4-3.14 0-1.64.92-2.92 2.38-3.42L4.12.874c-2.06.64-3.34 2.34-3.34 4.8 0 2.88 1.6 4.82 3.94 4.82 5.68 0 2.36-8.42 6.56-8.42 1.5 0 2.52 1.46 2.52 3.66 0 2.02-1.06 3.4-2.92 3.88l.42 1.44c2.38-.56 3.9-2.44 3.9-5.22z",fill:"#000"})))}var d;function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function E(e){return r.createElement("svg",m({width:16,height:203,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d||(d=r.createElement("path",{d:"M1 196.988v5.14h14v-1.64H9.44v-3.46c0-3-1.62-4.72-4.26-4.72-2.6 0-4.18 1.7-4.18 4.68zm7.02-.04v3.54h-5.6v-3.38c0-2.06 1.04-3.16 2.8-3.16 1.76 0 2.8 1.06 2.8 3zm3.34-16.369c-1.42.32-2.34 1-2.84 2.12-.54-1.66-1.84-2.64-3.62-2.64-2.38 0-3.9 1.74-3.9 4.46v5.48h14v-1.64H9.02v-2.98c0-1.8.78-2.78 2.56-3.18l3.42-.76v-1.66l-3.64.8zm-3.74 7.78h-5.2v-3.8c0-1.74 1.02-2.86 2.6-2.86s2.6 1.12 2.6 2.9v3.76zM15 167.126v-1.74l-14 5.62v1.78l14 5.64v-1.72l-3.42-1.34v-6.9l3.42-1.34zm-4.8 7.7l-7.4-2.92 7.4-2.9v5.82zM1 156.517l6.8 4.04-6.8 4.06v1.82l8.26-5.02H15v-1.64H9.26L1 154.697v1.82zm1.42-16.688H1v8.9h14v-1.64H9v-6.44H7.58v6.44H2.42v-7.26zm12.78-8.628c0-3.98-3.02-6.86-7.2-6.86-4.2 0-7.22 2.88-7.22 6.86 0 4 3.02 6.88 7.22 6.88 4.18 0 7.2-2.88 7.2-6.88zm-1.42 0c0 3.06-2.42 5.24-5.78 5.24-3.38 0-5.8-2.18-5.8-5.24s2.42-5.22 5.8-5.22c3.36 0 5.78 2.16 5.78 5.22zm-2.42-18.884c-1.42.32-2.34 1-2.84 2.12-.54-1.66-1.84-2.64-3.62-2.64-2.38 0-3.9 1.74-3.9 4.46v5.48h14v-1.64H9.02v-2.98c0-1.8.78-2.78 2.56-3.18l3.42-.76v-1.66l-3.64.8zm-3.74 7.78h-5.2v-3.8c0-1.74 1.02-2.86 2.6-2.86s2.6 1.12 2.6 2.9v3.76zM15 94.822v-1.74l-14 5.62v1.779l14 5.64v-1.72l-3.42-1.34v-6.9l3.42-1.34zm-4.8 7.699l-7.4-2.92 7.4-2.9v5.82zM1 79.293l12.26 4.68L1 88.673v2.38h14v-1.58H3l12-4.6v-1.76l-12.02-4.62H15v-1.6H1v2.4zm14-15.741v-1.74l-14 5.62v1.78l14 5.64v-1.72l-3.42-1.34v-6.9l3.42-1.34zm-4.8 7.7l-7.4-2.92 7.4-2.9v5.82zm3.38-12.828l-11.22-8.38H1v10.14h1.42v-8.2l11.2 8.4H15v-10.44h-1.42v8.48zm1.62-17.262c0-3.98-3.02-6.86-7.2-6.86-4.2 0-7.22 2.88-7.22 6.86 0 4 3.02 6.88 7.22 6.88 4.18 0 7.2-2.88 7.2-6.88zm-1.42 0c0 3.06-2.42 5.24-5.78 5.24-3.38 0-5.8-2.18-5.8-5.24s2.42-5.22 5.8-5.22c3.36 0 5.78 2.16 5.78 5.22zM1 22.198h11.76L1 29.618v2.08h14v-1.6H3.06L15 22.578v-1.98H1v1.6zm14-4.875v-1.64H1v1.64h14zM15 2.36V.62L1 6.24v1.78l14 5.64v-1.72l-3.42-1.34V3.7L15 2.36zm-4.8 7.7L2.8 7.14l7.4-2.9v5.82z",fill:"#000"})))}var h=o.p+"static/a-fbd2ad4b4bf0b58c62fca82d9d7b4388.png",u=o.p+"static/b-cd2aa12fe1468aca87f0b4643f37b6ee.png",p=o.p+"static/c-2ccdc1aaac2bd81aa879e1c2a9aeec8f.png",v=o.p+"static/d-fd79862ecb9e217b628c4755cc5723d3.png",f=o.p+"static/a-ce41198b366e17c6f32be0d02fa2329d.mp4",A=o.p+"static/b-1512287f884c961cf43ba906ac8cddd8.mp4",T=o.p+"static/c-4c39e49eea80c9ec8af3887c763821a9.mp4",O=o.p+"static/d-a18598be4ca8d2e94640bde1d65a8750.mp4",N=o(8037);function b(){var e=0;if("undefined"!=typeof window){var t=new URLSearchParams(window.location.search);e=void 0!==t.get("vid")?t.get("vid"):0}var o=[{titolo:"01 - MONTAGE AMAZON FIRES",src:f,set:"01   ENTENDA O DESMAMENTO  |    02   AMAZON RAINFOREST ON FIRE |    03   AMAZON FOREST ODHYSCIENZE\n\n|  04   AMAZON FOREST FIRE WHAT IT TELL ABOUT DEFORESTATION   |  05  DRONE FOOTAGE REVEALS AFTER MATH OF AMAZON FIRES",duration:"00:03:27",videoOp:"40%"},{titolo:"02 - GRID AMAZON FIRES",src:A,set:" 01   ENTENDA O DESMAMENTO |  02   AMAZON RAINFOREST ON FIRE  |  03   AMAZON FOREST ODHYSCIENZE | 04   AMAZON FOREST FIRE WHAT IT TELL ABOUT DEFORESTATION   | 05  DRONE FOOTAGE REVEALS AFTER MATH OF AMAZON FIRES\n\n| 06   INDIASECRETAMAZONFIRETAMIL  |  07   AMAZONFORESTFIREODHIGYANSCIENCE  |  08  WHAT IT TELLS US ABOUTDEFORESTATION",duration:"00:05:00",videoOp:"100%"},{titolo:"03 - MONTAGE PRAY FOR AMAZONIA",src:T,set:"01   AMAZON FIRE VS METHANE GAS  |   02   PRAY FOR AMAZONIA (SLAM) - SIBYLLIN  |  03   PRAY FOR AMAZONIA \n\n| 04   AMAZON MUSICA DA FLORESTA  |  05   VOCE PRECISA ASSISTEIR ESSE VIDEO  #PRAYFORAMAZONIA",duration:"00:01:37",videoOp:"40%"},{titolo:"04 - GRID PRAY FOR AMAZONIA",src:O,set:" 01   EJE BALAYE LES BOBO   02   AMAZON FIRE VS METHAN GAS     03   #AMAZONIA #PRAYFORAMAZIONA 04  AMAZON MUSICA DA FLORESTA    05  LA DEVASTADORA RAZON QUE UNE A CRISTIANO RONALDO Y LUIS SUOAREZ\n\n06  PRAY FOR AMAZONIA    07   MACRON URGES ACTION FROM G7 LEADERS  08   FIREFIGHTERS TACKLE FIRES CONTINUING TO BURN",duration:"00:03:31",videoOp:"100%"}][e],a=o.titolo,i=o.src,n=o.set,s=o.duration,l=o.videoOp;return r.createElement("div",{className:"container-fluid bg-primary border-bottom border-white"},r.createElement("div",{className:"row border-bottom border-white"},r.createElement("div",{className:"col-5"},r.createElement("div",{className:"row border-bottom border-white"},r.createElement("div",{className:"col-2 border-end border-white d-flex justify-content-center align-items-center"},r.createElement(c,null)),r.createElement("div",{className:"col-5 border-end border-white px-3 py-3"}," ",r.createElement(N.ZP,{to:"/chapter06?selected=7&vid=0",className:"linkHead"},r.createElement("img",{src:h,className:"img-fluid rounded-circle immagine",alt:"Responsive image",height:"100"}))),r.createElement("div",{className:"col-5 border-end border-white px-3 py-3"},r.createElement(N.ZP,{to:"/chapter06?selected=7&vid=1",className:"linkHead"},r.createElement("img",{src:u,className:"img-fluid rounded-circle immagine",alt:"Responsive image",height:"100"})))),r.createElement("div",{className:"row border-bottom border-white"},r.createElement("div",{className:"col-2  border-end border-white"}),r.createElement("div",{className:"col-5 border-end border-white py-2 text-center"},"MONTAGE"),r.createElement("div",{className:"col-5 border-end border-white py-2 text-center"},"GRID")),r.createElement("div",{className:"row border-bottom border-white"},r.createElement("div",{className:"col-2 border-end border-white d-flex justify-content-center align-items-center"},r.createElement(E,null)),r.createElement("div",{className:"col-5 border-end border-white px-3 py-3"},r.createElement(N.ZP,{to:"/chapter06?selected=7&vid=2",className:"linkHead"},r.createElement("img",{src:p,className:"img-fluid rounded-circle immagine",alt:"Responsive image",height:"100"}))),r.createElement("div",{className:"col-5 border-end border-white px-3 py-3"},r.createElement(N.ZP,{to:"/chapter06?selected=7&vid=3",className:"linkHead"}," ",r.createElement("img",{src:v,className:"img-fluid rounded-circle immagine",alt:"Responsive image",height:"100"}))))),r.createElement("div",{className:"col-7"},r.createElement("div",{className:"row border-bottom border-white px-3 py-3"},a),r.createElement("div",{className:"row"},r.createElement("video",{autoPlay:!0,muted:!0,loop:!0,src:i,className:"img-fluid pt-2",height:"100"})))),r.createElement("div",{className:"row "},r.createElement("div",{className:"col-9 border-end border-white py-3"},r.createElement("p",{className:"fw-bold"},"SET VIDEOS:"),r.createElement("p",null,n)),r.createElement("div",{className:"col-3 py-3"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-6"},r.createElement("p",{className:"fw-bold"},"DURATION:"),r.createElement("p",null,s)),r.createElement("div",{className:"col-6"},r.createElement("p",{className:"fw-bold"},"VIDEO OPACITY:"),r.createElement("p",null,l))))))}var g=[{step:"SCRAPING"},{step:"DATA EXPLORATION"},{step:"DATA PREPARATION"},{step:"URLS CREATION"},{step:"RENAMING THE NEW COLUMN"},{step:"DOWNLOAD VIDEOS"},{step:"CREATING A NEW PROJECT AND IMPORT ALL VIDEOS FOR EACH QUERY"},{step:"CREATING THE MONTAGE"},{step:"EXPORTING THE NEW VIDEO"}],I=[{what:"GET A LIST OF VIDEOS FOR EACH CHOSEN QUERY AND SELECTED TIME-FRAME."},{what:"OPEN THE YOUTUBE DATA TOOL(YDT) CSV DOWNLOADED AND EXPLORE THE DATA."},{what:"FILTER THE LIST BY ORDER OF VIEWS TO TAKE THE FIRST 5 VIDEOS AS SAMPLES FOR EACH QUERY (AMAZON FIRES-PRAYFORAMAZONIA)"},{what:"INSIDE THE YDT.CSV THERE IS ONLY THE VIDEOS ID, BUT YOU NEED THE URL TO DOWNLOAD THEM."},{what:"TO KEEP TRACK OF THE NEW COLUMN IN WHICH WE HAVE ALL THE VIDEO URLS."},{what:"DOWNLOAD THE VIDEO SAMPLE QUICKLY AND AUTOMATICALLY."},{what:"THIS STEP CAN BE REPLICATED USING ANY FREE VIDEO EDITING TOOL EVEN INCLUDED WITHIN THE OPERATING SYSTEM"},{what:"YOU MUST SET THE OPACITY OF EACH VIDEO TO 40% IN ORDER TO HAVE THE OVERLAY EFFECT"},{what:"EXPORT AS H264 WITH AUDIO INCLUDED TO PRESERVE THE SOUND COMPONENT"}],w="bianco",R=[{tool:"Youtube Data Tools",arrow:" ⟶ ",quadre:"[Video List]",sfondo:""},{tool:"Excel",arrow:" ⟶ ",quadre:"[Import Data]",sfondo:w},{tool:"Excel",arrow:" ⟶ ",quadre:"[Filter-Discending]",sfondo:""},{tool:"Excel",arrow:" ⟶ ",quadre:"=CONCATENA(E2;F2)",sfondo:w},{tool:"Excel",arrow:" ",quadre:"",sfondo:w},{tool:"Python3",arrow:" ⟶ ",quadre:"[PyTube3]",sfondo:w},{tool:"Premiere",arrow:" ⟶ ",quadre:"[Import]",sfondo:w},{tool:"Premiere",arrow:" ⟶ ",quadre:"[Opacity: 40]",sfondo:w},{tool:"Premiere",arrow:" ⟶ ",quadre:"[Export as H264]",sfondo:w}],S=o(4632),y=o(3600);function H(){var e="“Amazon Fires” - “Pray for Amazonia”",t="E2 ⟩ http://www.youtube.com/watch?v=",o="F2 ⟶ videoId",a="videoUrl",i="LINK TO PYTHON3 DOCUMENTATION",n="LINK TO PYTUBE3 DOCUMENTATION",s="LINK TO REPOSITORY AND STEP-BY-STEP GUIDE",l="LINK TO DOWNLOAD";return r.createElement("div",{className:"container-fluid"},r.createElement("div",{className:"row "},S.Hy.map((function(e,t){var o=e.title;return r.createElement("div",{className:"col-3 border-end border-white border-bottom border-top bg-light py-1",key:t},o,r.createElement(y.r,{style:{transform:"scale(0.6)"}}))}))),r.createElement("div",{className:"row "},r.createElement("div",{className:"col-3 padding"},g.map((function(e,t){var o=e.step;return r.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-white border-bottom border-top bg-primary px-2",key:t},r.createElement("span",{className:"fw-bold"},o))}))),r.createElement("div",{className:"col-3 padding"},I.map((function(e,t){var o=e.what;return r.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-white border-bottom border-top bg-primary px-2",key:t},o)}))),r.createElement("div",{className:"col-3 padding"},R.map((function(e,t){var o=e.tool,a=e.sfondo,i=e.arrow,n=e.quadre;return r.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-white border-bottom border-top bg-primary px-2 "+a,key:t},r.createElement("span",{className:"fw-bold"},o),i,n)}))),r.createElement("div",{className:"col-3 padding"},r.createElement("div",{style:{height:"5rem"},className:"bianco col-12 border-end border-white border-bottom border-top bg-primary px-2"},e),r.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-white border-bottom border-top bg-primary px-2"},[{pill:"videoId"},{pill:"videoTitle"},{pill:"publishedAt"},{pill:"viewCount"},{pill:"position"}].map((function(e,t){var o=e.pill;return r.createElement("span",{className:"badge rounded-pill bg-light text-dark mx-2"},o)}))),r.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-white border-bottom border-top bg-primary px-2"}),r.createElement("div",{style:{height:"5rem"},className:"bianco col-12 border-end border-white border-bottom border-top bg-primary px-2"},r.createElement("p",null,t),r.createElement("p",null,o)),r.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-white border-bottom border-top bg-primary px-2"},r.createElement("span",{className:"badge rounded-pill bg-light text-dark mx-2"},a)),r.createElement("div",{style:{height:"5rem"},className:"display-5 bianco col-12 border-end border-white border-bottom border-top bg-primary px-2"},r.createElement("p",{className:"text-decoration-underline "},i),r.createElement("p",{className:"text-decoration-underline pt-1"},n),r.createElement("p",{className:"text-decoration-underline pt-1"},s)),r.createElement("div",{style:{height:"5rem"},className:"display-5 bianco col-12 border-end border-white border-bottom border-top bg-primary px-2"},r.createElement("p",{className:"text-decoration-underline"},l)),r.createElement("div",{style:{height:"5rem"},className:"display-5 bianco col-12 border-end border-white border-bottom border-top bg-primary px-2"}),r.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-white border-bottom border-top bg-primary px-2"}))))}function D(){return r.createElement("div",null,r.createElement(s.Z,null),r.createElement(i.Z,null),r.createElement(b,null),r.createElement(H,null),r.createElement(n.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-chapter-06-js-5809a41b01a1be232566.js.map