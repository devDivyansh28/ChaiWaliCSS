import  properties  from "./customProperty.js";

const targets = document.body.querySelectorAll("*");


function classParser(cls) {
  const chaiclass = cls.trim().split("-");
  // console.log(chaiclass);
  let [_, property, ...value] = chaiclass;
  return { property, value };
}

targets.forEach((target) => {
  target.classList.forEach((cls) => {
    if (cls.startsWith("chai-")) {
      const { property, value } = classParser(cls);
      console.log(property);
      console.log(value.join(" "));

      target.style[properties[property] || property] = value;

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
