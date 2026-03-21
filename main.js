const targets = document.body.querySelectorAll("*");
// console.log(targets)

const properties = {
  /****Margin****/
  m: "margin",
  mt: "margin-top",
  mb: "margin-bottom",
  ml: "margin-left",
  mr: "margin-right",

  clr: "color",

  /****Padding****/
  p: "padding",
  pt: "padding-top",
  pb: "padding-bottom",
  pl: "padding-left",
  pr: "padding-right",

  /****background****/
  bg: "background-color",
  // opacity : "opacity",
  bgImg: "background-image",

  /****border****/
  // border : "border",
  brdStyle: "border-style",
  brdWidth: "border-width",
  brdClr: "border-color",
  brdRadius: "border-radius",

  boxSizing: "box-sizing",

  minWidth: "min-width",
  maxWidth: "max-width",
  minHeight: "min-height",
  maxHeight: "max-height",

  /****outline****/
  outlineStyle: "outline-style",
  outlineClr: "outline-color",
  outlineWidth: "outline-width",

  /****text****/
  textAlign: "text-align",
  verticalAlign: "vertical-align",
  textDecorationLine: "text-decoration-line",
  textDecorationColor: "text-decoration-color",
  textDecorationStyle: "text-decoration-style",
  textTransform: "text-transform",
  textSpacing : "text-spacing",
  textShadow : "text-shadow",
  
  /* ****Fonts**** */

  fontStyle : "font-style",
  fontSize : "font-size",
  fontVariant : "font-variant",
  fontWeight : "font-weight",
  fontStretch : "font-stretch",

};


targets.forEach((target) => {
  target.classList.forEach((cls) => {
    if (cls.startsWith("do-")) {
      const toDo = cls.trim().split("-");
      console.log(toDo);
      let [_, property, ...value] = toDo;
      
      console.log(property);
      console.log(value.join(" "));
      
      target.style[properties[property] || property] = Array.isArray(value) ? value.join(" ") : value;
     
      // console.log(doit , property , value)
      // console.log(`${properties[property]}:${value}`);

      // target.setAttribute("style",`${properties[property]}: ${value}`) This is overriding old styles okk
    }
  });
});

// *******Basic POC i have applied but it will give only direct child*********
// const elements = document.body.childNodes

// elements.forEach((node)=>{

//     if( node.nodeType === 1){
//         console.log(node)
//     }
// })

// document.body.setAttribute("style","min-height : 100vh")

// element.setAttribute("style","margin: 400 200")

/* Improvement's i need to do in this project are 
first i should implement to use rgb(0, 0, 255) currently unable to do so due to blank space separation " "

2. I need to work on fonts class as it is not able to implement right now

3. Need to implant logic for handling element states like : 
The four link states are:

:link - a normal, unvisited link
:visited - a link the user has visited
:hover - a link when the user mouses over it
:active - a link the moment it is clicked

*/
