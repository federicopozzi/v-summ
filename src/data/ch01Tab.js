export const tabHead = [
  {
    title: 'STEPS',
  },
  {
    title: 'WHAT’S IT FOR',
  },
  {
    title: 'TOOLS',
  },
  {
    title: 'DETAILS AND MATERIALS',
  },

];

export const steps = [
  {
    step: 'SCRAPING',
  },
  {
    step: 'DATA EXPLORATION',
  },
  {
    step: 'DATA PREPARATION',
  },
  {
    step: 'URLS CREATION',
  },
  {
    step: 'RENAMING THE NEW COLUMN',
  },
  {
    step: 'DOWNLOAD VIDEOS',
  },
  {
    step: 'COLLECTING VIDEOS IN A NEW FOLDER',
  },
  {
    step: 'FRAME EXTRACTIONS BY CHANGE OF SCENE',
  },
  {
    step: 'COLLECTING ALL FRAMES IN THE FOLDER OF THE VIDEO THEY BELONG TO',
  },
  {
    step: 'RENAMING ALL THE FRAMES IN ORDER OF THE VIDEO VIEWS THEY BELONG (NOT MANDATORY)',
  },
  {
    step: 'REORDERING ALL THE FRAMES IN A NEW FOLDER',
  },
  {
    step: 'CREATION OF A VECTOR SPACE WITH ALL THE FRAMES',
  },
  {
    step: 'CHOOSE THE VIEW ON PIXPLOT',
  },
  {
    step: 'EXPORT THE VISUALISATION',
  },
  {
    step: 'ANNOTATE THE VISUALISATION ',
  },
];

export const whats = [
  {
    what: 'GET A LIST OF VIDEOS FOR EACH CHOSEN QUERY AND SELECTED TIME-FRAME',
  },
  {
    what: 'OPEN THE YOUTUBE DATA TOOL (YDT) CSV DOWNLOADED AND EXPLORE THE DATA',
  },
  {
    what: 'FILTER THE LIST IN ORDER OF VIEWS TO TAKE THE FIRST 50 VIDEOS AS SAMPLES',
  },
  {
    what: 'INSIDE THE YDT.CSV THERE ARE ONLY THE VIDEOS ID, BUT YOU NEED THE URL TO DOWNLOAD THEM',
  },
  {
    what: 'TO KEEP TRACK OF THE NEW COLUMN IN WHICH WE HAVE ALL THE VIDEOS URLS',
  },
  {
    what: 'DOWNLOAD THE VIDEO SAMPLE QUICKLY AND AUTOMATICALLY',
  },
  {
    what: 'IT’S IMPORTANT FOR THE NEXT SCRIPT THAT THE FOLDER CONTAINS ONLY THE DOWNLOADED VIDEOS',
  },
  {
    what: '* THE SCRIPT EXTRACTS THREE FRAMES EVERY SCENE CHANGE',
  },
  {
    what: 'THE DETECT.PY SCRIPT CREATES A SUBFOLDER FOR EACH VIDEO IN WHICH IT INSERTS ALL THE DETECTED FRAMES.',
  },
  {
    what: 'IF YOU WANT TO KEEP TRACK OF THE ORDER OF VIDEOS BY VIEWS IN THE VISUALIZATION',
  },
  {
    what: 'THE NEXT STEP REQUIRES HAVING THE FRAMES OF ALL THE VIDEOS IN ONE FOLDER',
  },
  {
    what: 'ANALYSING THE VISUAL AND THEMATIC SIMILARITY OF FRAMES',
  },
  {
    what: 'FOR THIS METHOD CHOOSE THE VIEW: CLUSTER IMAGES by umap dimensionality reduction in a frame network',
  },
  {
    what: 'TAKE A SCREENSHOT OR USE THE "SAVE AS" COMMAND TO OBTAIN A STATIC IMAGE ON WHICH TO MAKE ANNOTATIONS.',
  },

];

const back = 'bianco';

export const tools = [
  {
    tool: 'Youtube',
    arrow: ' ⟶ ',
    quadre: '[Video List]',
    sfondo: back,
  },
  {
    tool: 'Excel',
    arrow: ' ⟶ ',
    quadre: '[Import Data]',
    sfondo: back,
  },
  {
    tool: 'Excel',
    arrow: ' ⟶ ',
    quadre: '[Filter-Discending]',
    sfondo: '',
  },
  {
    tool: 'Excel',
    arrow: ' ⟶ ',
    quadre: '=CONCATENA(E2;F2)',
    sfondo: back,
  },
  {
    tool: 'Excel',
    arrow: ' ',
    quadre: '',
    sfondo: back,
  },
  {
    tool: 'Python 3',
    arrow: ' ⟶ ',
    quadre: '[PyTube3]',
    sfondo: back,
  },
  {
    tool: '',
    arrow: 'No tool needed',
    quadre: '',
    sfondo: '',
  },
  {
    tool: 'Python 3',
    arrow: ' ⟶ ',
    quadre: '[PySceneDetect]',
    sfondo: back,
  },
  {
    tool: '',
    arrow: 'No tool needed',
    quadre: '',
    sfondo: '',
  },
  {
    tool: '',
    arrow: 'No tool needed',
    quadre: '',
    sfondo: '',
  },
  {
    tool: '',
    arrow: 'No tool needed',
    quadre: '',
    sfondo: '',
  },
  {
    tool: 'Anaconda + Python3 + Pixplot',
    arrow: '  ',
    quadre: '',
    sfondo: back,
  },
  {
    tool: 'Pixplot',
    arrow: '  ',
    quadre: '',
    sfondo: back,
  },
  {
    tool: 'Pixplot',
    arrow: '  ',
    quadre: '',
    sfondo: back,
  },
  {
    tool: 'Figma',
    arrow: '  ',
    quadre: '',
    sfondo: back,
  },
];
