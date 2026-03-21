const properties = {
  /******** MARGIN ********/
  m: "margin",
  mt: "margin-top",
  mr: "margin-right",
  mb: "margin-bottom",
  ml: "margin-left",

  /******** PADDING ********/
  p: "padding",
  pt: "padding-top",
  pr: "padding-right",
  pb: "padding-bottom",
  pl: "padding-left",

  /******** COLORS ********/
  clr: "color",
  brdClr: "border-color",
  textDecClr: "text-decoration-color",
  caretClr: "caret-color",
  columnRuleClr: "column-rule-color",

  /******** BACKGROUND ********/
  bg: "background-color",
  bgImg: "background-image",
  bgPos: "background-position",
  bgSize: "background-size",
  bgRepeat: "background-repeat",
  bgAttach: "background-attachment",
  bgClip: "background-clip",
  bgOrigin: "background-origin",

  /******** SIZE ********/
  w: "width",
  h: "height",
  minW: "min-width",
  maxW: "max-width",
  minH: "min-height",
  maxH: "max-height",

  /******** BOX MODEL ********/
  boxSizing: "box-sizing",
  brd: "border",
  brdW: "border-width",
  brdStyle: "border-style",
  brdRadius: "border-radius",
  boxShadow: "box-shadow",

  /******** OUTLINE ********/
  outlineW: "outline-width",
  outlineStyle: "outline-style",
  outlineOffset: "outline-offset",

  /******** TEXT ********/
  lineHeight: "line-height",
  letterSpacing: "letter-spacing",
  wordSpacing: "word-spacing",
  textIndent: "text-indent",
  textOverflow: "text-overflow",
  whiteSpace: "white-space",
  wordBreak: "word-break",
  overflowWrap: "overflow-wrap",
  tabSize: "tab-size",
  hyphens: "hyphens",

  /******** FONTS ********/
  ff: "font-family",
  fs: "font-size",
  fw: "font-weight",
  fst: "font-style",
  fontVariant: "font-variant",
  fontStretch: "font-stretch",
  font: "font",

  /******** TABLE ********/
  tblLayout: "table-layout",
  tblCollapse: "border-collapse",
  tblSpacing: "border-spacing",
  captionSide: "caption-side",
  emptyCells: "empty-cells",

  /******** DISPLAY ********/
  d: "display",
  /******** FLEX & GRID CORE ********/

  flexDir: "flex-direction",
  flexWrap: "flex-wrap",
  flexFlow: "flex-flow",
  /******** FLEX & GRID ALIGNMENT ********/

  jc: "justify-content", 
  ai: "align-items", 
  ac: "align-content",
  as: "align-self", 
  pi: "place-items", 
  pc: "place-content",

  gap: "gap",
  gapX: "column-gap",
  gapY: "row-gap",

  /******** FLEX ITEM CONTROL ********/

  flex: "flex",
  grow: "flex-grow",
  shrink: "flex-shrink",
  basis: "flex-basis",
  order: "order",

  /******** GRID ********/

  cols: "grid-template-columns",
  rows: "grid-template-rows",
  area: "grid-area",

  autoCols: "grid-auto-columns",
  autoRows: "grid-auto-rows",
  autoFlow: "grid-auto-flow",

  /******** POSITION ********/
  pos: "position",
  z: "z-index",

  /******** ALIGN ********/
  verticalAlign: "vertical-align",

  /******** IMAGE ********/
  objectFit: "object-fit",
  objectPosition: "object-position",
  aspect: "aspect-ratio",

  /******** IMAGE SPRITES ********/
  sprite: "background-image",
  spritePos: "background-position",
  spriteSize: "background-size",

  /******** LIST (FROM REFERENCE) ********/
  listStyle: "list-style",
  listStyleType: "list-style-type",
  listStylePos: "list-style-position",
  listStyleImg: "list-style-image",

  /******** COUNTERS ********/
  counterReset: "counter-reset",
  counterIncrement: "counter-increment",
};

export default properties;
