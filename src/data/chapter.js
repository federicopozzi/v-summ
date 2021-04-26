import ch01 from '../images/ch01/ch01.png';
import ch04 from '../images/ch04/ch04.png';

const sfondo = 'row border-danger py-3 px-3';
export const capitolo1 = {
  primo: 'Identifying and visualising the main themes emerging from a video collection of videos.',
  rq: 'RQ: Which are the main themes (based on number of scenes) in the Amazon Fires related YouTube videos?',
  viz: ch01,
  colore: `verde ${sfondo}`,
  coloreBordo: 'border-danger',
  aim: 'This method aims to identify which are the main themes emerging within\n'
      + '              a collection of videos. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once\n'
      + '              and there are no duplicates due to scene length. The layout used to arrange the frames according to their visual similarity is offered by Pixplot, which uses UMAP projection, a dimensionality reduction algorithm, specifically designed for visualising complex data in low dimensions (2D or 3D).\n',
  output: 'The final visualisation is a clusterisation of frames sorted by visual similarity that allows the identification of predominant thematic clusters within the analysed video collection. The thematic annotations of the visualisation were drawn following the boundaries identified by the original Pixplot visualisation.',
};

export const capitolo2 = {
  primo: 'Visualising main themes in each video to compare the content of two collections of videos.',
  rq: 'RQ: How are themes distributed in each Amazon Fires related Youtube?',
  aim: 'In this type of analysis, we move from an overview of the frames in the whole collection to a view of the frames for each video. The aim is to be able to compare the contents of two collections of videos based on the thematic clusters found in each video. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once and there are no duplicates due to scene length. All frames of a video are analysed with Pixplot and arranged in a UMAP grid based on their visual similarity. The different thematic clusters in each grid are highlighted with colour areas using Figma.',
  colore: `blu ${sfondo}`,
  coloreBordo: 'border-secondary',
  output: 'The final visualisation consists of a series of matrices representing the videos, where the thematic components that are discussed in the video are represented with different colours.. This type of visualization allows a summary comparison of the thematic contents among the videos of two different collections.',
};

export const capitolo3 = {
  primo: 'Detecting and visualising the amount of human figures within one or more collections of videos and recognise the different formats.',
  rq: 'RQ: How relevant is the presence of human figures in the Amazon Fires related YouTube videos?',
  aim: 'This type of analysis can help to recognise different formats where human figures are particularly relevant, such as interviews or news anchors. Applying this method to two different video collections helps us to compare them in terms of the presence of human figures and types of formats. The model used for the extraction of human figures from each frame is DeepLabv3. To perform this type of analysis it is necessary to extract the frames at regular time intervals so as to also record the length of the scenes in which human figures are present and preserve the original length of each video in the final visualisation.',
  colore: `rosa ${sfondo}`,
  coloreBordo: 'border-info',
  output: 'The final visualisation is made up of the 20 frame grids of the videos, divided by collection, and allows a direct comparison in terms of the presence of human figures and video formats (news anchors, interviews, image montage). it is possible to explore the videos more closely by selecting one collection.',
};

export const capitolo4 = {
  primo: 'Recognising the main humans faces in a collection of videos and visually quantifying  their presence. ',
  rq: 'RQ: Which are the most recognisable faces in the Amazon Fires related Youtube videos?',
  viz: ch04,
  colore: `giallo ${sfondo}`,
  coloreBordo: 'border-warning',
  aim: 'This type of analysis allows us to recognise the faces of human figures and to recognise those most present within a collection of videos. The segmentation model used on RunwayML removes the background from images featuring people. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once and there \n'
      + 'are no duplicates due to scene length.',
  output: 'The final visualisation is a catalogue of faces of human figures, resized \n'
      + 'by the amount of presence in the analysed videos, and clustered by type \n'
      + '(e.g. politicians, bloggers, natives).\n',
};

export const capitolo5 = {
  primo: 'Analysing the color palettes in a collection of videos.',
  rq: 'RQ: Which are the visual tones of the most-watched Amazon fires related YouTube videos?',
  viz: ch04,
  colore: `rossino ${sfondo}`,
  coloreBordo: 'border-success',
  aim: 'This type of analysis allows videos to be analysed in a three-dimensional space based on hue, saturation and brightness. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once and there are no duplicates due to scene length. The algorithm used for the analysis in three-dimensional space is Stack 3D Surface Plot, a plug-in of ImageJ software.',
  output: 'The final visualisation is made up of gifs, each of which contains all the plotted frames of a video. The gifs are divided into two sections according to the collection they belong. By clicking on each gif it is possible to explore in detail the grid of static frames plotted in order of video reproduction. ',
};

export const capitolo6 = {
  primo: 'cap 6Analysing the color palettes in a collection of videos.',
  rq: 'RQ: 6Which are the visual tones of the most-watched Amazon fires related YouTube videos?',
  viz: ch04,
  colore: `bianco ${sfondo}`,
  coloreBordo: 'border-white',
  aim: '6This type of analysis allows videos to be analysed in a three-dimensional space based on hue, saturation and brightness. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once and there are no duplicates due to scene length. The algorithm used for the analysis in three-dimensional space is Stack 3D Surface Plot, a plug-in of ImageJ software.',
  output: '6The final visualisation is made up of gifs, each of which contains all the plotted frames of a video. The gifs are divided into two sections according to the collection they belong. By clicking on each gif it is possible to explore in detail the grid of static frames plotted in order of video reproduction. ',
};
