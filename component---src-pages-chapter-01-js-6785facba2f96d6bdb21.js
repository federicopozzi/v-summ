(self.webpackChunkv_summ=self.webpackChunkv_summ||[]).push([[301],{3600:function(e,t,a){"use strict";a.d(t,{r:function(){return r}});var i,o=a(7294);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function r(e){return o.createElement("svg",n({width:31,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),i||(i=o.createElement("path",{d:"M20 1v21M0 1h21M10.278 12.875l9.597 9.597 9.597-9.597",stroke:"#000",strokeWidth:2})))}},6514:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var i,o=a(7294);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function r(e){return o.createElement("svg",n({width:106,height:134,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),i||(i=o.createElement("path",{d:"M1 133L104.314 1M4.525 1L105 133",stroke:"#000",strokeWidth:2})))}var s=a(3600),l=a(7142),c=a(8037);function d(){var e=0;if("undefined"!=typeof window){var t=new URLSearchParams(window.location.search);e=void 0!==t.get("selected")?t.get("selected"):0}var a=l.Z[e],i=a.primo,n=a.colore,d=a.coloreBordo,m=a.rq;return o.createElement("div",null,o.createElement("div",{className:"container-fluid bg-primary"},o.createElement("div",{className:"row border-bottom border-1 "+d},o.createElement("div",{className:"col-11 fs-5 border-end border-2 "+d},o.createElement("div",{className:"row border-bottom py-3 px-3 border-2 "+d},o.createElement("p",null,i)),o.createElement("div",{className:n},o.createElement("p",{className:"fw-bold"},m))),o.createElement("div",{className:"col-1"},o.createElement(c.ZP,{to:"/"},o.createElement(r,{style:{transform:"scale(0.7)"}}))))),o.createElement("div",{className:"row border-bottom border-2 bg-light px-3 py-1 "+d},o.createElement("p",null,"VISUALIZATION",o.createElement(s.r,{style:{transform:"scale(0.6)"}}))))}},4121:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var i=a(7294),o=a(7142),n=a(3600);function r(){var e=0;if("undefined"!=typeof window){var t=new URLSearchParams(window.location.search);e=void 0!==t.get("selected")?t.get("selected"):0}var a=o.Z[e],r=a.aim,s=a.output,l=a.coloreBordo;return i.createElement("div",{className:"container-fluid"},i.createElement("div",{className:"row border-end border-bottom border-top bg-light py-1 "+l},i.createElement("p",null,"METODOLOGY",i.createElement(n.r,{style:{transform:"scale(0.6)"}}))),i.createElement("div",{className:"row bg-primary py-4"},i.createElement("div",{className:"col-2"},i.createElement("span",{className:"fs-2 text-decoration-underline"},"aim")),i.createElement("div",{className:"col-10"},i.createElement("p",{className:"fs-2"},r)),i.createElement("div",{className:"col-2"},i.createElement("span",{className:"fs-2 text-decoration-underline"},"output")),i.createElement("div",{className:"col-10"},i.createElement("p",{className:"fs-2"}," ",s))))}},2591:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var i=a(7294),o=a(7142);function n(){var e=0;if("undefined"!=typeof window){var t=new URLSearchParams(window.location.search);e=void 0!==t.get("selected")?t.get("selected"):0}var a=o.Z[e].viz;return i.createElement("img",{src:a,className:"img-fluid",alt:"Responsive image",height:"100"})}},7142:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var i=a.p+"static/ch01-5ab445226241d04e534a9a72a0d9f795.png",o="row border-danger py-3 px-3",n={primo:"capitolo2 of videos.",rq:"RQ: Which are the main themes dvsved the Amazon Fires related YouTube videos?",aim:"In this type of analysis, we move from an overview of the frames in the whole collection to a view of the frames for each video. The aim is to be able to compare the contents of two collections of videos based on the thematic clusters found in each video. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once and there are no duplicates due to scene length. All frames of a video are analysed with Pixplot and arranged in a UMAP grid based on their visual similarity. The different thematic clusters in each grid are highlighted with colour areas using Figma.",colore:"blu "+o,coloreBordo:"border-secondary",output:"The final visualisation consists of a series of matrices representing the videos, where the thematic components that are discussed in the video \nare represented with different colours.. This type of visualization allows \na summary comparison of the thematic contents among the videos of two different collections."},r={primo:"capitolo3 of videos.",rq:"RQ: Which are the main themes dvsved the Amazon Fires related YouTube videos?",aim:"This type of analysis can help to recognise different formats where human figures are particularly relevant, such as interviews or news anchors. Applying this method to two different video collections helps us to compare them \nin terms of the presence of human figures and types of formats. The model used for the extraction of human figures from each frame is DeepLabv3. \nTo perform this type of analysis it is necessary to extract the frames at regular time intervals so as to also record the length of the scenes in which \nhuman figures are present and preserve the original length of each video \nin the final visualisation. \n",colore:"rosa "+o,coloreBordo:"border-info",output:"The final visualisation is made up of the 20 frame grids of the videos, divided by collection, and allows a direct comparison in terms of the presence of human figures and video formats (news anchors, interviews, image montage). it is possible to explore the videos more closely by selecting one collection."},s={primo:"capitolo4 of videos.",rq:"RQ: Which are the main themes dvsved the Amazon Fires related YouTube videos?",viz:a.p+"static/ch04-43772c4a54a0eb1f3ae252df7208a1d8.png",colore:"giallo "+o,coloreBordo:"border-warning",aim:"This type of analysis allows us to recognise the faces of human figures and to recognise those most present within a collection of videos. The segmentation model used on RunwayML removes the background from images featuring people. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once and there \nare no duplicates due to scene length.",output:"The final visualisation is a catalogue of faces of human figures, resized \nby the amount of presence in the analysed videos, and clustered by type \n(e.g. politicians, bloggers, natives).\n"},l=[{primo:"IdentifyingI and visualising the main themes emerging from a video collection of videos.",rq:"RQ: Which are the main themes (based on number of scenes) in the Amazon Fires related YouTube videos?",viz:i,colore:"verde "+o,coloreBordo:"border-danger",aim:"This method aims to identify which are the main themes emerging within\n              a collection of videos. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once\n              and there are no duplicates due to scene length. The layout used to arrange the frames according to their visual similarity is offered by Pixplot, which uses UMAP projection, a dimensionality reduction algorithm, specifically designed for visualising complex data in low dimensions (2D or 3D).\n",output:"The final visualisation is a clusterization of frames sorted by visual similarity that allows the identification of predominant thematic clusters within the analysed video collection. The thematic annotations of the visualisation were drawn following the boundaries identified by the original Pixplot visualisation."},{primo:"sottocapitolo1 of videos.",rq:"RQ: Which are the main themes dvsved the Amazon Fires related YouTube videos?",viz:a.p+"static/subCh01.1-0c95ef32543140b9dc69d9abd50a338c.png",colore:"row border-danger py-3 px-3 verde",coloreBordo:"border-danger",aim:"This method aims to identify which are the main themes emerging within\n              a collection of videos. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once\n              and there are no duplicates due to scene length. The layout used to arrange the frames according to their visual similarity is offered by Pixplot, which uses UMAP projection, a dimensionality reduction algorithm, specifically designed for visualising complex data in low dimensions (2D or 3D).\n",output:"The final visualisation is a clusterization of frames sorted by visual similarity that allows the identification of predominant thematic clusters within the analysed video collection. The thematic annotations of the visualisation were drawn following the boundaries identified by the original Pixplot visualisation."},{primo:"sottocapitolo2 of videos.",rq:"RQ: Which are the main themes dvsved the Amazon Fires related YouTube videos?",viz:a.p+"static/subCh01.2-f96af91fd000667c9f43eabc20982be2.png",colore:"row border-danger py-3 px-3 verde",coloreBordo:"border-danger",aim:"This method aims to identify which are the main themes emerging within\n              a collection of videos. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once\n              and there are no duplicates due to scene length. The layout used to arrange the frames according to their visual similarity is offered by Pixplot, which uses UMAP projection, a dimensionality reduction algorithm, specifically designed for visualising complex data in low dimensions (2D or 3D).\n",output:"The final visualisation is a clusterization of frames sorted by visual similarity that allows the identification of predominant thematic clusters within the analysed video collection. The thematic annotations of the visualisation were drawn following the boundaries identified by the original Pixplot visualisation."},n,r,s]},5184:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var i=a(7294),o=a(6514),n=a(2591),r=[{title:"STEPS"},{title:"WHAT’S IT FOR"},{title:"TOOLS"},{title:"DETAILS AND MATERIALS"}],s="col-3 border-end border-danger border-bottom border-3 bg-primary py-2",l=s+" bianco",c=[{first:"SCRAPING",second:"GET A LIST OF VIDEOS FOR EACH CHOSEN QUERY AND SELECTED TIME-FRAME",thirdBold:"Youtube Data Tools ⟶ ",third:"[Video List]",fourth:"“Amazon Fires” - “Pray for Amazonia”"},{first:"DATA EXPLORATION",second:"OPEN THE YOUTUBE DATA TOOL (YDT) CSV DOWNLOADED AND EXPLORE THE DATA",thirdBold:"Excel ⟶ ",third:"[Import Data]",fourth:""}],d=a(3600);function m(){if("undefined"!=typeof window){"2"===new URLSearchParams(window.location.search).get("selected")&&"campo diverso"}return i.createElement("div",{className:"container-fluid pt-3 bg-primary"},i.createElement("div",{className:"row "},r.map((function(e,t){var a=e.title;return i.createElement("div",{className:"col-3 border-end border-danger border-bottom border-top bg-light py-1",key:t},a,i.createElement(d.r,{style:{transform:"scale(0.6)"}}))})),i.createElement("div",{className:s},i.createElement("span",{className:"fw-bold"},c[0].first)),i.createElement("div",{className:s},c[0].second),i.createElement("div",{className:l},i.createElement("span",{className:"fw-bold"},c[0].thirdBold),c[0].third),i.createElement("div",{className:l},c[0].fourth),i.createElement("div",{className:s},i.createElement("span",{className:"fw-bold"},c[1].first)),i.createElement("div",{className:s},c[1].second),i.createElement("div",{className:l},i.createElement("span",{className:"fw-bold"},c[1].thirdBold),c[1].third),i.createElement("div",{className:s},i.createElement("span",{className:"badge rounded-pill bg-light text-dark mx-2"},"videoID"),i.createElement("span",{className:"badge rounded-pill bg-light text-dark mx-2"},"videoTitle"),i.createElement("span",{className:"badge rounded-pill bg-light text-dark mx-2"},"publishedAt"),i.createElement("span",{className:"badge rounded-pill bg-light text-dark mx-2"},"viewCount"),i.createElement("span",{className:"badge rounded-pill bg-light text-dark mx-2"},"position"))))}var h=a(4121);function u(){return i.createElement("div",null,i.createElement(o.Z,null),i.createElement("div",{className:"bg-primary"},i.createElement(n.Z,null)),i.createElement(m,null),i.createElement(h.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-chapter-01-js-6785facba2f96d6bdb21.js.map