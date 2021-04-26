export const tabHead = [
  {
    title: '6STEPS',
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
    step: 'CREATING A NEW PROJECT AND IMPORT ALL VIDEOS FOR EACH QUERY',
  },
  {
    step: 'CREATING THE MONTAGE',
  },
  {
    step: 'EXPORTING THE NEW VIDEO',
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
    what: 'FILTER THE LIST BY ORDER OF VIEWS TO TAKE THE FIRST 5 VIDEOS AS SAMPLES FOR EACH QUERY (AMAZON FIRES-PRAYFORAMAZONIA)',
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
    what: 'THIS STEP CAN BE REPLICATED USING ANY FREE VIDEO EDITING TOOL EVEN INCLUDED WITHIN THE OPERATING SYSTEM',
  },
  {
    what: 'YOU MUST SET THE OPACITY OF EACH VIDEO TO 40% IN ORDER TO HAVE THE OVERLAY EFFECT',
  },
  {
    what: 'EXPORT AS H264 WITH AUDIO INCLUDED TO PRESERVE THE SOUND COMPONENT',
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
    tool: 'Python3',
    arrow: ' ⟶ ',
    quadre: '[PyTube3]',
    sfondo: back,
  },
  {
    tool: 'Premiere',
    arrow: ' ⟶ ',
    quadre: '[Import]',
    sfondo: back,
  },
  {
    tool: 'Premiere',
    arrow: ' ⟶ ',
    quadre: '[Opacity: 40]',
    sfondo: back,
  },
  {
    tool: 'Premiere',
    arrow: ' ⟶ ',
    quadre: '[Export as H264]',
    sfondo: back,
  },

];
