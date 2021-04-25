export const tabHead = [
  {
    title: '4STEPS',
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
    step: 'EXTRACTING FRAMES'
        + 'WITH REGULAR INTERVAL *',
  },
  {
    step: 'COLLECTING ALL THE FRAMES IN FOLDERS DIVIDED BY VIDEO',
  },
  {
    step: 'EXTRACTING CHARACTERS WITH RUNAWAY ML',
  },
  {
    step: 'CREATING THE VISUALISATION FOR EACH VIDEO',
  },
  {
    step: 'EXPORTING THE VISUALISATION',
  },
  {
    step: 'ANNOTATE THE VISUALISATION',
  },
];

export const whats = [
  {
    what: 'GET A LIST OF VIDEOS FOR EACH CHOSEN QUERY AND SELECTED TIME-FRAME.',
  },
  {
    what: 'OPEN THE YOUTUBE DATA TOOL(YDT) CSV DOWNLOADED AND EXPLORE THE DATA.',
  },
  {
    what: 'FILTER THE LIST BY ORDER OF VIEWS TO TAKE THE FIRST 10 VIDEOS AS SAMPLES FOR EACH QUERY.',
  },
  {
    what: 'INSIDE THE YDT.CSV THERE IS ONLY THE VIDEOS ID, BUT YOU NEED THE URL TO DOWNLOAD THEM.',
  },
  {
    what: 'TO KEEP TRACK OF THE NEW COLUMN IN WHICH WE HAVE ALL THE VIDEO URLS.',
  },
  {
    what: 'DOWNLOAD THE VIDEO SAMPLE QUICKLY AND AUTOMATICALLY.',
  },
  {
    what: 'IT’S IMPORTANT FOR THE NEXT SCRIPT THAT THE FOLDER CONTAINS ONLY THE DOWNLOADED VIDEOS.\n',
  },
  {
    what: 'TO ANALYSE THE AMOUNT OF HUMAN FIGURES IT IS NECESSARY TO HAVE A REGULAR FRAME EXTRACTION TO COMPARE IT IN ALL VIDEOS.\n \n'
        + '3 OPTIONS\n',
  },
  {
    what: 'THE NEXT STEP REQUIRES HAVING THE FRAMES OF EACH VIDEO IN A SINGLE FOLDER.',
  },
  {
    what: 'INSERT THE FRAMES TO RUN THE MODEL AND INDICATE THE DIRECTORY WHERE THE NEW FRAMES WILL BE SAVED.',
  },
  {
    what: 'IMPORT ALL FRAMES AND ARRANGE THEM IN CHRONOLOGICAL ORDER.',
  },
  {
    what: 'SET TO FULL VIEW AND TAKE A SCHREENSHOT BY SELECTING THE VIEWING FRAME.',
  },
  {
    what: 'CREATE VIDEOS GRID FOR EACH QUERY.',
  },
];

const back = 'bianco';

export const tools = [
  {
    tool: 'Youtube Data Tools',
    arrow: ' ⟶ ',
    quadre: '[Video List]',
    sfondo: '',
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
    sfondo: back,
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
    tool: 'Python3',
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

];

export const tools2 = [
  {
    tool: 'Python3',
    arrow: ' ⟶ ',
    quadre: '[PySceneDetect]',
    sfondo: back,
  },
  {
    tool: 'Vlc',
    arrow: 'No tool needed',
    quadre: '',
    sfondo: '',
  },
  {
    tool: 'FFmpeg',
    arrow: ' ⟶ ',
    quadre: 'Extract people from images',
    sfondo: back,
  },
];

export const tools3 = [
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
];
