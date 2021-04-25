(self.webpackChunkv_summ=self.webpackChunkv_summ||[]).push([[301],{3600:function(e,t,o){"use strict";o.d(t,{r:function(){return n}});var a,i=o(7294);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function n(e){return i.createElement("svg",r({width:31,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=i.createElement("path",{d:"M20 1v21M0 1h21M10.278 12.875l9.597 9.597 9.597-9.597",stroke:"#000",strokeWidth:2})))}},3190:function(e,t,o){"use strict";o.d(t,{r:function(){return n}});var a,i=o(7294);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function n(e){return i.createElement("svg",r({width:106,height:134,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=i.createElement("path",{d:"M1 133L104.314 1M4.525 1L105 133",stroke:"#000",strokeWidth:2})))}},1662:function(e,t,o){"use strict";o.d(t,{Z:function(){return l}});var a=o(7294),i=o(3190),r=o(3600),n=o(7142),s=o(8037);function l(){var e=0;if("undefined"!=typeof window){var t=new URLSearchParams(window.location.search);e=void 0!==t.get("selected")?t.get("selected"):0}var o=n.Z[e],l=o.primo,c=o.colore,d=o.coloreBordo,m=o.rq;return a.createElement("div",null,a.createElement("div",{className:"container-fluid bg-primary"},a.createElement("div",{className:"row border-bottom border-1 "+d},a.createElement("div",{className:"col-11 fs-5 border-end border-2 "+d},a.createElement("div",{className:"row border-bottom py-3 px-3 border-2 "+d},a.createElement("p",null,l)),a.createElement("div",{className:c},a.createElement("p",{className:"fw-bold"},m))),a.createElement("div",{className:"col-1"},a.createElement(s.ZP,{to:"/"},a.createElement(i.r,{style:{transform:"scale(0.7)"}}))))),a.createElement("div",{className:"row border-bottom border-2 bg-light px-3 py-1 "+d},a.createElement("p",null,"VISUALIZATION",a.createElement(r.r,{style:{transform:"scale(0.6)"}}))))}},4121:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var a=o(7294),i=o(7142),r=o(3600);function n(){var e=0;if("undefined"!=typeof window){var t=new URLSearchParams(window.location.search);e=void 0!==t.get("selected")?t.get("selected"):0}var o=i.Z[e],n=o.aim,s=o.output,l=o.coloreBordo;return a.createElement("div",{className:"container-fluid"},a.createElement("div",{className:"row border-end border-bottom border-top bg-light py-1 "+l},a.createElement("p",null,"METODOLOGY",a.createElement(r.r,{style:{transform:"scale(0.6)"}}))),a.createElement("div",{className:"row bg-primary py-4"},a.createElement("div",{className:"col-2"},a.createElement("span",{className:"fs-2 text-decoration-underline"},"aim")),a.createElement("div",{className:"col-10"},a.createElement("p",{className:"fs-2"},n)),a.createElement("div",{className:"col-2"},a.createElement("span",{className:"fs-2 text-decoration-underline"},"output")),a.createElement("div",{className:"col-10"},a.createElement("p",{className:"fs-2"}," ",s))))}},2591:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var a=o(7294),i=o(7142);function r(){var e=0;if("undefined"!=typeof window){var t=new URLSearchParams(window.location.search);e=void 0!==t.get("selected")?t.get("selected"):0}var o=i.Z[e].viz;return a.createElement("img",{src:o,className:"img-fluid",alt:"Responsive image",height:"100"})}},4632:function(e,t,o){"use strict";o.d(t,{Hy:function(){return a},S6:function(){return i},nS:function(){return r},rj:function(){return n}});var a=[{title:"STEPS"},{title:"WHAT’S IT FOR"},{title:"TOOLS"},{title:"DETAILS AND MATERIALS"}],i=[{step:"SCRAPING1"},{step:"DATA EXPLORATION"},{step:"DATA PREPARATION"}],r=[{what:"1GET A LIST OF VIDEOS FOR EACH CHOSEN QUERY AND SELECTED TIME-FRAME"},{what:"Open the YOutube Data tool(YDT) CSV DOWNLOADED and explore the data"},{what:"filter the list by order of views to take the first 10 videos as samples for each query(Amazon Fires-PrayForAmazonia)"}],n=[{tool:"1Youtube",arrow:" ⟶ ",quadre:"[Video L]",sfondo:""},{tool:"Youtube",arrow:" ⟶ ",quadre:"[Video L]",sfondo:"bianco"},{tool:"Youtube",arrow:" ⟶ ",quadre:"[Video L]",sfondo:"bianco"}]},7142:function(e,t,o){"use strict";o.d(t,{Z:function(){return l}});var a=o.p+"static/ch01-5ab445226241d04e534a9a72a0d9f795.png",i="row border-danger py-3 px-3",r={primo:"capitolo2 of videos.",rq:"RQ: Which are the main themes dvsved the Amazon Fires related YouTube videos?",aim:"In this type of analysis, we move from an overview of the frames in the whole collection to a view of the frames for each video. The aim is to be able to compare the contents of two collections of videos based on the thematic clusters found in each video. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once and there are no duplicates due to scene length. All frames of a video are analysed with Pixplot and arranged in a UMAP grid based on their visual similarity. The different thematic clusters in each grid are highlighted with colour areas using Figma.",colore:"blu "+i,coloreBordo:"border-secondary",output:"The final visualisation consists of a series of matrices representing the videos, where the thematic components that are discussed in the video \nare represented with different colours.. This type of visualization allows \na summary comparison of the thematic contents among the videos of two different collections."},n={primo:"capitolo3 of videos.",rq:"RQ: Which are the main themes dvsved the Amazon Fires related YouTube videos?",aim:"This type of analysis can help to recognise different formats where human figures are particularly relevant, such as interviews or news anchors. Applying this method to two different video collections helps us to compare them \nin terms of the presence of human figures and types of formats. The model used for the extraction of human figures from each frame is DeepLabv3. \nTo perform this type of analysis it is necessary to extract the frames at regular time intervals so as to also record the length of the scenes in which \nhuman figures are present and preserve the original length of each video \nin the final visualisation. \n",colore:"rosa "+i,coloreBordo:"border-info",output:"The final visualisation is made up of the 20 frame grids of the videos, divided by collection, and allows a direct comparison in terms of the presence of human figures and video formats (news anchors, interviews, image montage). it is possible to explore the videos more closely by selecting one collection."},s={primo:"capitolo4 of videos.",rq:"RQ: Which are the main themes dvsved the Amazon Fires related YouTube videos?",viz:o.p+"static/ch04-43772c4a54a0eb1f3ae252df7208a1d8.png",colore:"giallo "+i,coloreBordo:"border-warning",aim:"This type of analysis allows us to recognise the faces of human figures and to recognise those most present within a collection of videos. The segmentation model used on RunwayML removes the background from images featuring people. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once and there \nare no duplicates due to scene length.",output:"The final visualisation is a catalogue of faces of human figures, resized \nby the amount of presence in the analysed videos, and clustered by type \n(e.g. politicians, bloggers, natives).\n"},l=[{primo:"IdentifyingI and visualising the main themes emerging from a video collection of videos.",rq:"RQ: Which are the main themes (based on number of scenes) in the Amazon Fires related YouTube videos?",viz:a,colore:"verde "+i,coloreBordo:"border-danger",aim:"This method aims to identify which are the main themes emerging within\n              a collection of videos. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once\n              and there are no duplicates due to scene length. The layout used to arrange the frames according to their visual similarity is offered by Pixplot, which uses UMAP projection, a dimensionality reduction algorithm, specifically designed for visualising complex data in low dimensions (2D or 3D).\n",output:"The final visualisation is a clusterization of frames sorted by visual similarity that allows the identification of predominant thematic clusters within the analysed video collection. The thematic annotations of the visualisation were drawn following the boundaries identified by the original Pixplot visualisation."},{primo:"sottocapitolo1 of videos.",rq:"RQ: Which are the main themes dvsved the Amazon Fires related YouTube videos?",viz:o.p+"static/subCh01.1-0c95ef32543140b9dc69d9abd50a338c.png",colore:"row border-danger py-3 px-3 verde",coloreBordo:"border-danger",aim:"This method aims to identify which are the main themes emerging within\n              a collection of videos. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once\n              and there are no duplicates due to scene length. The layout used to arrange the frames according to their visual similarity is offered by Pixplot, which uses UMAP projection, a dimensionality reduction algorithm, specifically designed for visualising complex data in low dimensions (2D or 3D).\n",output:"The final visualisation is a clusterization of frames sorted by visual similarity that allows the identification of predominant thematic clusters within the analysed video collection. The thematic annotations of the visualisation were drawn following the boundaries identified by the original Pixplot visualisation."},{primo:"sottocapitolo2 of videos.",rq:"RQ: Which are the main themes dvsved the Amazon Fires related YouTube videos?",viz:o.p+"static/subCh01.2-f96af91fd000667c9f43eabc20982be2.png",colore:"row border-danger py-3 px-3 verde",coloreBordo:"border-danger",aim:"This method aims to identify which are the main themes emerging within\n              a collection of videos. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once\n              and there are no duplicates due to scene length. The layout used to arrange the frames according to their visual similarity is offered by Pixplot, which uses UMAP projection, a dimensionality reduction algorithm, specifically designed for visualising complex data in low dimensions (2D or 3D).\n",output:"The final visualisation is a clusterization of frames sorted by visual similarity that allows the identification of predominant thematic clusters within the analysed video collection. The thematic annotations of the visualisation were drawn following the boundaries identified by the original Pixplot visualisation."},r,n,s]},4854:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return d}});var a=o(7294),i=o(1662),r=o(2591),n=o(4632),s=o(3600);function l(){if("undefined"!=typeof window){"2"===new URLSearchParams(window.location.search).get("selected")&&"campo diverso"}return a.createElement("div",{className:"container-fluid pt-3 bg-primary"},a.createElement("div",{className:"row "},n.Hy.map((function(e,t){var o=e.title;return a.createElement("div",{className:"col-3 border-end border-danger border-bottom border-top bg-light py-1",key:t},o,a.createElement(s.r,{style:{transform:"scale(0.6)"}}))}))),a.createElement("div",{className:"row "},a.createElement("div",{className:"col-3 padding"},n.S6.map((function(e,t){var o=e.step;return a.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-danger border-bottom border-top bg-primary px-2",key:t},a.createElement("span",{className:"fw-bold"},o))}))),a.createElement("div",{className:"col-3 padding"},n.nS.map((function(e,t){var o=e.what;return a.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-danger border-bottom border-top bg-primary px-2",key:t},o)}))),a.createElement("div",{className:"col-3 padding"},n.rj.map((function(e,t){var o=e.tool,i=e.sfondo,r=e.arrow,n=e.quadre;return a.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-danger border-bottom border-top bg-primary px-2 "+i,key:t},a.createElement("span",{className:"fw-bold"},o),r,n)}))),a.createElement("div",{className:"col-3 padding"},a.createElement("div",{style:{height:"5rem"},className:"col-12 border-end border-danger border-bottom border-top bg-primary px-2"},"a"))))}var c=o(4121);function d(){return a.createElement("div",null,a.createElement(i.Z,null),a.createElement("div",{className:"bg-primary"},a.createElement(r.Z,null)),a.createElement(l,null),a.createElement(c.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-chapter-01-js-79d558215acd319c3e1a.js.map