import subCh01 from '../images/ch01/subCh01.1.png';
import subCh02 from '../images/ch01/subCh01.2.png';

export const sottocapitolo1 = {
  primo: 'Analysing and visualising links between thematic clusters related to different videos.',
  rq: 'RQ: How are the main themes in the Amazon Fires related Youtube video connected to each other?',
  viz: subCh01,
  colore: 'row border-danger py-3 px-3 verde',
  coloreBordo: 'border-danger',
  aim: 'This method aims to identify the connections between the main themes within a collection of videos. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once and there are no duplicates due to scene length. The layout used to arrange the frames according to their visual similarity is offered by Pixplot, which uses UMAP projection, a dimensionality reduction algorithm, specifically designed for visualising complex data in low dimensions (2D or 3D).',
  output: 'The final visualisation is a network of frames organised by visual similarity, which makes it possible to recognise and annotate the connection between different thematic clusters based on their proximity, and the contamination of themes within a non-related cluster.',
};

export const sottocapitolo2 = {
  primo: 'Analysinge the relevance of different themes (in terms of the number of frames) in a collection of videos.',
  rq: 'RQ: Which are the most relevant themes (based on number of frames) in the Amazon Fires related Youtube videos?',
  viz: subCh02,
  colore: 'row border-danger py-3 px-3 verde',
  coloreBordo: 'border-danger',
  aim: 'This method aims to quantify the presence of thematic clusters in terms of number of frames in a collection of videos, to understand which themes are most represented within that collection. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once and there are no duplicates due to scene length.',
  output: 'The final visualisation results from the deconstruction of a UMAP grid in which frames are organised by their visual similarity. The grid deconstruction process is guided by the areas of frames belonging to the same cluster, the contours of these areas are traced and new clipping masks are created. \n'
      + 'The colour highlights the differences between clusters and the size of the blocks communicates the number of frames related to each cluster. ',
};
