import ch01 from '../images/ch01/ch01.png';
import ch04 from '../images/ch04/ch04.png';

const sfondo = 'row border-danger py-3 px-3';
export const capitolo1 = {
  primo: 'IdentifyingI and visualising the main themes emerging from a video collection of videos.',
  rq: 'RQ: Which are the main themes (based on number of scenes) in the Amazon Fires related YouTube videos?',
  viz: ch01,
  colore: `verde ${sfondo}`,
  coloreBordo: 'border-danger',
  aim: 'This method aims to identify which are the main themes emerging within\n'
      + '              a collection of videos. Frame extraction for this purpose is based on scene change detection, so that the images to be analysed are only taken once\n'
      + '              and there are no duplicates due to scene length. The layout used to arrange the frames according to their visual similarity is offered by Pixplot, which uses UMAP projection, a dimensionality reduction algorithm, specifically designed for visualising complex data in low dimensions (2D or 3D).\n',
  output: 'The final visualisation is a clusterization of frames sorted by visual similarity that allows the identification of predominant thematic clusters within the analysed video collection. The thematic annotations of the visualisation were drawn following the boundaries identified by the original Pixplot visualisation.',
};

export const capitolo2 = {
  primo: 'capitolo2 of videos.',
  rq: 'RQ: Which are the main themes dvsved the Amazon Fires related YouTube videos?',
  aim: 'aim cap 2',
  colore: `blu ${sfondo}`,
  coloreBordo: 'border-secondary',
  output: 'aim cap 2',
};

export const capitolo3 = {
  primo: 'capitolo3 of videos.',
  rq: 'RQ: Which are the main themes dvsved the Amazon Fires related YouTube videos?',
  aim: 'aim cap 3',
  colore: `rosa ${sfondo}`,
  coloreBordo: 'border-info',
  output: 'aim cap 3',
};

export const capitolo4 = {
  primo: 'capitolo4 of videos.',
  rq: 'RQ: Which are the main themes dvsved the Amazon Fires related YouTube videos?',
  viz: ch04,
  colore: `giallo ${sfondo}`,
  coloreBordo: 'border-warning',
  aim: 'aim cap 4',
  output: 'aim cap 4',
};
